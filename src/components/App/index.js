import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import {Header, VideoList, VideoDetail} from '../../components';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: [],
      currentVideoId: null,
    }
    this.onVideoListClick = this.onVideoListClick.bind(this);
  }
  componentDidMount() {
    fetch('http://pwn-youtube-channel-api.enguerranweiss.fr/index.php')
    .then(response => response.json())
    .then(json => {
      this.setState({
        ...this.state,
        loaded: true,
        data: json.items,
        currentVideoId: window.location.hash ? window.location.hash.replace('#', ''):json.items[0].id,
      });
    });
  }
  onVideoListClick(currentVideoId) {
    this.setState({
      ...this.state,
      currentVideoId
    });
    window.location.hash = currentVideoId;
  }
  getVideoDataFromId(id) {
    const result = this.state.data.filter(video => video.id === id);
    return result[0];
  }
  render() {
    
    const featuredVideo = this.getVideoDataFromId(this.state.currentVideoId);

    return (
      <div className="youpwn-app-container">
        <Header />
        { (this.state.loaded && this.state.data.length ) &&
          <section className="youpwn-app-main-content">
            <VideoDetail video={featuredVideo} />
            <VideoList onVideoListClick={this.onVideoListClick} videos={this.state.data}/>
          </section>
          
        }

        { !this.state.loaded &&
          <section className="youpwn-app-main-content loading">
            <span className="yp-loading-text">loading...</span>
          </section>
        }
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './index.css';
const block = 'yp-main-header';

export default class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      colorCount: 1,
      colors: ['#a8f593', '#93bff5', '#f59393', '#d193f5', '#93e3db'],
      backButtonBgColor: '#a8f593',
    };
    this.interval = this.interval.bind(this);
  }
  componentDidMount() {
    const backButtonBgColorInterval = setInterval(this.interval, 3000);
    this.setState({backButtonBgColor: backButtonBgColorInterval});
  }
  componentWillUnmount() {
    clearInterval(this.state.backButtonBgColor);
  }
  interval() {
    this.setState({
      ...this.state,
      colorCount: this.state.colorCount >= this.state.colors.length-1 ? 0:parseInt(this.state.colorCount)+1,
      backButtonBgColor: this.state.colors[this.state.colorCount],
    });
  }
  render () {
    return (
      <header className={block}>      
        <h1 className={`${block}_title`}>youpwn</h1>
        <a className={`${block}_back-button`} style={{backgroundColor: this.state.backButtonBgColor}} href="https://www.pwn-association.org">Retour au site PWN</a>
      </header>
    )
  }
  
}
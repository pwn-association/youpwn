import React from 'react';
import { VideoItem, Ads } from '../../components';
import './index.css';

export default function VideoList ({videos, onVideoListClick}) {
  const block = 'yp-video-list';
  return (
    <section>

      <ul className={block}>
        {
          videos.map((video, index) => {
            
            return(
              <li key={video.id} className={`${block}_item`} >
                { index === 2 &&
                  <Ads />
                }
                <VideoItem onVideoListClick={onVideoListClick} video={video} template="list-item"/>
              </li>
            )
          })
        }
      </ul>
    </section>
    
  )
}
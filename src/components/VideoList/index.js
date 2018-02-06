import React from 'react';
import { VideoItem } from '../../components';
import './index.css';

export default function VideoList ({videos, onVideoListClick}) {
  const block = 'yp-video-list';
  return (
    <ul className={block}>
      {
        videos.map(video => {
          return(
            <li key={video.id} className={`${block}_item`} >
              <VideoItem onVideoListClick={onVideoListClick} video={video} template="list-item"/>
            </li>
          )
        })
      }
    </ul>
  )
}
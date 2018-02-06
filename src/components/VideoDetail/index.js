import React from 'react';
import { VideoItem } from '../../components';
import './index.css';

export default function VideoDetail ({video}) {
  const block = 'yp-video-detail';
  return (
    <section className={block}>
      <VideoItem video={video} template="detail"/>
    </section>
    
  )
}
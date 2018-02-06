import React from 'react';
import './index.css';



function ListItemTemplate({video, onVideoListClick}) {

  const block = 'yp-video-item';

  return (
    <article className={block}>
      <button onClick={() => onVideoListClick(video.id)}>
        <div className={`${block}_thumb`}>
          <img src={video.thumb_url} alt={video.title}/>
        </div>
        <h1>
          {video.title}
        </h1>
      </button>      
    </article>
  );
}

function DetailTemplate({video}) {
  const block = 'yp-video-detail';
  return (
    <article className={block}>  
        <h1>
          {video.title}
        </h1>     
        <div className={`${block}_iframe`}>
          <iframe width="100%" height="450" src={`//www.youtube.com/embed/${video.id}`} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className={`${block}_description`}>
          <p>
            {video.description}
          </p>
        </div>
    </article>
  );
}

export default function VideoItem ({video, template, onVideoListClick}) {
  let VideoItem = <DetailTemplate video={video}/>
  
  if(template === "list-item"){
    VideoItem = <ListItemTemplate video={video} onVideoListClick={onVideoListClick}/>
  }
  return VideoItem;
}
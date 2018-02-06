import React from 'react';
import './index.css';

export default function Header () {
  const block = 'yp-main-header';
  return (
    <header className={block}>      
      <h1 className={`${block}_title`}>YouPwn</h1>
    </header>
  )
}
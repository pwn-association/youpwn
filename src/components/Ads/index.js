import React from 'react';
import './index.css';
import ad from '../../assets/img/fake-a-d-s/1.gif';

export default function Ads () {
  const block = 'yp-ads';
  return (
    <section className={block}>
      <a href="https://www.pwn-association.org">
        <img src={ad} alt="pwn"/>
      </a>
    </section>
  )
}
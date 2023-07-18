'use client'
import React from 'react'; 
import Lottie from 'react-lottie';
import * as animationData from '@/assets/animations/Animation - 1689623460690.json';

export default function Animation() {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  
  };

  return (
    <div>
      <Lottie 
	      options={defaultOptions}
        height={150}
        width={150}
      />
    </div>
  )
}

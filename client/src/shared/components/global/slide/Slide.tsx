'use client'
import "swiper/css";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from "swiper/types";

type Props = {
  configs:SwiperOptions,
  Component:React.FunctionComponent,
  dataArr:any[]
}

export default function Slide({configs,Component,dataArr}:Props){
  return(
    <>
       
    </>
  )
}

/*type ComponentProps = {
  children?: React.ReactNode;
  key: React.Key;
  [prop: string]: any;
};

type SlideProps = {
  configs: SwiperOptions;
  dataArr: any[];
  Component: React.FunctionComponent<ComponentProps>
};

export default function Slide({ configs, dataArr, Component }: SlideProps) {
  return (
    <Swiper {...configs}>
      {dataArr.map((item, index) => (
       <SwiperSlide>
          <Component key={item.id ?? index}>{item}</Component>
       </SwiperSlide>
      ))}
    </Swiper>
  );
}
*/

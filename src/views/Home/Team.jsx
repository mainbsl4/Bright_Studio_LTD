import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../../assets/css/team.css';

import { EffectCards } from 'swiper/modules';


export default function Team() {
  return (
    <div>
       <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>team 1</SwiperSlide>
        <SwiperSlide>team 2</SwiperSlide>
        <SwiperSlide>team 3</SwiperSlide>
        <SwiperSlide>team 4</SwiperSlide>
        <SwiperSlide>team 5</SwiperSlide>
        <SwiperSlide>team 6</SwiperSlide>
        <SwiperSlide>team 7</SwiperSlide>
        <SwiperSlide>team 8</SwiperSlide>
        <SwiperSlide>team 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

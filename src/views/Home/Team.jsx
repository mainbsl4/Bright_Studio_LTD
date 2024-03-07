import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function Team() {
  return (
    <div>
      {/* <style>
        {`
          #app {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .swiper {
            width: 240px;
            height: 320px;
          }

          .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 18px;
            font-size: 22px;
            font-weight: bold;
            color: #fff;
          }

          .swiper-slide:nth-child(1n) {
            background-color: rgb(206, 17, 17);
          }

          .swiper-slide:nth-child(2n) {
            background-color: rgb(0, 140, 255);
          }

          .swiper-slide:nth-child(3n) {
            background-color: rgb(10, 184, 111);
          }

          .swiper-slide:nth-child(4n) {
            background-color: rgb(211, 122, 7);
          }

          .swiper-slide:nth-child(5n) {
            background-color: rgb(118, 163, 12);
          }

          .swiper-slide:nth-child(6n) {
            background-color: rgb(180, 10, 47);
          }

          .swiper-slide:nth-child(7n) {
            background-color: rgb(35, 99, 19);
          }

          .swiper-slide:nth-child(8n) {
            background-color: rgb(0, 68, 255);
          }

          .swiper-slide:nth-child(9n) {
            background-color: rgb(218, 12, 218);
          }

          .swiper-slide:nth-child(10n) {
            background-color: rgb(54, 94, 77);
          }
        `}
      </style> */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
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
  );
}
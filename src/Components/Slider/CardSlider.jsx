import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "./CardSlider.scss"
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";
import { Virtual } from 'swiper';

import "swiper/css/navigation";
// import required modules
import { Navigation,Pagination, Keyboard,Autoplay } from "swiper";
import { humaNews } from "utils/humaNews";
import { Link } from "react-router-dom";

export const CardSlider =()=> {
  return (
    <>
      <Swiper
         autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
     
        keyboard={true}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Virtual,Navigation, Keyboard,Autoplay ]}
        className="mySwiper"
        
      >
    {humaNews.map((news) => (
        <SwiperSlide>
                    <div
                        key={news.id}
                        className="slider-content"
                        style={{
                            background: `url('${news.image}') no-repeat center center`,
                        }}
                    >
                        <div className="inner">
                            <h1>{news.title}</h1>
                            <p>{news.shortText}</p>

                            <Link to={`/humanitaire/news/${news.id}`}>
                                <button className="button">Lire plus</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>))}
        
      </Swiper>
    </>
  );
}

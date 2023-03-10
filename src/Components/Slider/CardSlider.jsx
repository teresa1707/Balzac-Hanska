import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import './CardSlider.scss'
import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/pagination'
import { Virtual } from 'swiper'

import 'swiper/css/navigation'
// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper'
import { humaNews } from 'utils/humaNews'
import { Link } from 'react-router-dom'
import { ButtonYellow } from 'Components/MyButton/ButtonYellow'

export const CardSlider = () => {
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
                modules={[Pagination, Virtual, Navigation, Keyboard, Autoplay]}
                className="mySwiper"
            >
                {humaNews.map((news) => (
                    <SwiperSlide key={news.id}>
                        <div class="card">
                            <div class="card__top">
                                {' '}
                                <img src={news.image} />
                            </div>
                            <div class="card__bottom">
                                <h1>{news.title}</h1>
                                <p>{news.shortText}</p>
                            </div>
                            <div class="card__overlay">
                                <Link to={`/humanitaire/news/${news.id}`}>
                                    <ButtonYellow text="lire plus" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

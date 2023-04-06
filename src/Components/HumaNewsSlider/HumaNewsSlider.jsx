import { humaNews } from 'utils/humaNews'
import { Swiper, SwiperSlide } from 'swiper/react'
import './HumaNewsSlider.scss'
import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/pagination'
import { Virtual } from 'swiper'

import 'swiper/css/navigation'
// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'
import { ButtonYellow } from 'Components/MyButton/ButtonYellow'

export function HumaNewsSlider({ array = humaNews }) {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                keyboard={true}
                breakpoints={{
                    599: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    899: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1220: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Virtual, Navigation, Keyboard, Autoplay]}
                className="mySwiper container"
            >
                {array.map((news) => (
                    <SwiperSlide key={news.id} className="slider">
                        <div className="record_wrap ">
                            <section className="record">
                                <div
                                    id="record1"
                                    className="record-display"
                                    style={{
                                        backgroundImage: `url(${news.image})`,
                                    }}
                                >
                                    <div className="date">{news.date}</div>
                                </div>
                                <div className="record-desc">
                                    <h1>{news.title}</h1>
                                    <p className="shortText">
                                        {news.shortText}
                                    </p>{' '}
                                </div>
                                <Link
                                    to={`/humanitaire/news/${news.id}`}
                                    className="btn_position"
                                >
                                    <ButtonYellow text="lire plus" />
                                </Link>
                            </section>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

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
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Virtual, Navigation, Keyboard, Autoplay]}
                className="mySwiper"
            >
                {array.map((news) => (
                    <SwiperSlide key={news.id}>
                        <div className="record_wrap">
                            <section className="record">
                                <div
                                    id="record1"
                                    className="record-display"
                                    style={{
                                        backgroundImage: `url(${news.image})`,
                                    }}
                                >
                                    <Link
                                        to={`/humanitaire/news/${news.id}`}
                                        className="btn_position"
                                    >
                                        <ButtonYellow text="lire plus" />
                                        <div>{news.date}</div>
                                    </Link>
                                </div>
                                <div className="record-desc">
                                    <h1>{news.title}</h1>
                                    <p>{news.shortText}</p>{' '}
                                </div>
                            </section>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

import { presse } from 'utils/presse'
import { Swiper, SwiperSlide } from 'swiper/react'
import './CardSlider.scss'
import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/pagination'
import { Virtual } from 'swiper'
import DOMPurify from 'dompurify'
import 'swiper/css/navigation'
// import required modules
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper'
import { ButtonYellow } from 'Components/MyButton/ButtonYellow'

export function CardSlider({ array = presse }) {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                keyboard={true}
                breakpoints={{
                    599: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    899: {
                        slidesPerView: 2,
                        spaceBetween: 35,
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
                className="mySwiper"
            >
                {array.map((news) => (
                    <SwiperSlide key={news.id} className="Slider">
                        <div className="card">
                            <div className="card__top">
                                <img src={news.image} alt="news_image" />
                            </div>
                            <div className="card__bottom">
                                <h1
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(news.title),
                                    }}
                                />
                                <p>{news.shortText}</p>
                            </div>
                            <div className="card__overlay">
                                <a
                                    href={news.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ButtonYellow text="lire plus" />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

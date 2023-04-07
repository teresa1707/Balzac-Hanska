import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/pagination'
import { Virtual } from 'swiper'

// import required modules
import { Pagination, Autoplay } from 'swiper'

export const SwiperSlider = ({ items, delay }) => {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: delay || 2.5,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Virtual, Autoplay]}
                style={{
                    backgroundColor: 'white',
                    paddingTop: 50,
                    paddingBottom: 20,
                }}
                breakpoints={{
                    599: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                }}
            >
                <SwiperSlide key={items.index}>
                    <div
                        className="sliderContent"
                        style={{ width: '500px', textAlign: 'center' }}
                    >
                        <img src={items.name} alt="partners logo" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

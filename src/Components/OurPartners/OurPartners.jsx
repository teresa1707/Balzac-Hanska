import { Swiper, SwiperSlide } from 'swiper/react'
import './OurPartners.scss'
import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/pagination'
import { Virtual } from 'swiper'

// import required modules
import { Pagination, Autoplay } from 'swiper'
import { ourPartners } from 'utils/ourPartners'

export const OurPartners = () => {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
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
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                {ourPartners.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="sliderContent"
                            style={{ width: '500px', textAlign: 'center' }}
                        >
                            <img src={logo} alt="partners logo" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

import { Swiper, SwiperSlide } from 'swiper/react'
import './OurPartners.scss'
import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import { Virtual } from 'swiper'

// import required modules
import { Pagination, Autoplay } from 'swiper'
import { ourPartners } from 'utils/ourPartners'

export const OurPartners = ({ delay }) => {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                pagination={{
                    type: 'progressbar',
                }}
                // grid={{
                //     rows: 2,
                // }}
                modules={[Pagination, Virtual, Autoplay]}
                style={{
                    backgroundColor: 'white',
                    paddingTop: 50,
                    paddingBottom: 20,
                }}
                centeredSlides={true}
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

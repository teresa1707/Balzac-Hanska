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
                slidesPerView={6}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Virtual, Autoplay]}
                style={{
                    backgroundColor: 'white',
                    paddingTop: 50,
                    paddingBottom: 20,
                }}
            >
                {ourPartners.map((logo, index) => (
                    <SwiperSlide>
                        <div
                            key={index}
                            className="sliderContent"
                            style={{ width: '500px' }}
                        >
                            <img src={logo} alt="partners logo" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

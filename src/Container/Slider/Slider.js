import React from "react";
import classNames from "classnames";
import "./Slider.scss"
import { Logo } from "Components/LogoBalzacHanska/Logo";



const slides = [
  { 
    city: 'Mumbai',
    country: 'MAHIRA KHAN',
    img:'/Images/maison.jpg'
  },
  {
    city: 'Delhi',
    country: 'MAHIRA KHAN',
    img: '/Images/IllustrationChlo.jpg',
  },
  {
    city: 'Khandala',
    country: 'India',
    img: '/Images/maison.jpg',
  },
 
];

export class Slider extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.IMAGE_PARTS = 4;
    
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 5000;
    
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }
  
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }
  
  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }
  
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
  
  
  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
        <div className="slider__top-heading"><Logo/></div>
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div key={slide.name}
              className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
              
              >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
                <h2 className="slider__slide-heading">
                  {slide.city.split('').map(l => <span>{l}</span>)}
                </h2>
                <p className="slider__slide-readmore">read more</p>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
      
    );
  }
}













// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";


// // Import Swiper styles
// import "./Slider.scss";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";




// import { Parallax, Pagination, Navigation } from "swiper";

// export const Slider=()=> {
//   return (
//     <>
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "red",
//           "--swiper-pagination-color": "violet",
//         }}
//         speed={600}
//         parallax={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Parallax, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <div
//           slot="container-start"
//           className="parallax-bg fond"
//           style={{
//             backgroundImage:
//               "url('Images/maison(1).jpg')",width:'150vw'
//           }}
//           data-swiper-parallax="-23%"
//         ></div>
//         <SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">
//             Slide 1
//           </div>
//           <div className="subtitle" data-swiper-parallax="-200">
//             Subtitle
//           </div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//               laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//               Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
//               tincidunt ut libero. Aenean feugiat non eros quis feugiat.
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">
//             Slide 2
//           </div>
//           <div className="subtitle" data-swiper-parallax="-200">
//             Subtitle
//           </div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//               laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//               Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
//               tincidunt ut libero. Aenean feugiat non eros quis feugiat.
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="title" data-swiper-parallax="-300">
//             Slide 3
//           </div>
//           <div className="subtitle" data-swiper-parallax="-200">
//             Subtitle
//           </div>
//           <div className="text" data-swiper-parallax="-100">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//               laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//               Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
//               tincidunt ut libero. Aenean feugiat non eros quis feugiat.
//             </p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
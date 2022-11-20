import React from "react";
import classNames from "classnames";
import "./Slider.scss"
import { Logo } from "Components/LogoBalzacHanska/Logo";
import { SlidingButton } from "Components/MyButton/SlidingButton";



const slides = [
  { id:1,
    title: 'Title',
    text: 'text',
  
    img:'/Images/maison.jpg',
  },
 
  {id:2,
    title: '',
    text: "Beaucoup d’événements, de personnes, relient l’Ukraine à la France (et la France à l’Ukraine) et l’amour de Balzac et de Madame Hanska en est un et l’un des plus méconnus.Notre association a été créée dans le but de perpétuer, célébrer et rendre hommage à la mémoire des amours d'Honoré de Balzac et de la Comtesse Ewelyna Hanska.Depuis notre création en 2012, nous avons déjà réalisé quelques projets, notamment la création d’un musée du souvenir à Berditchev dans le Centre Commercial «&nbsp;Galerie Balzac&nbsp;», situé juste en face de l’église ou se sont mariés Honoré de Balzac et Madame Hanska. Nous avons également apporté notre aide à la première traduction en langue ukrainienne d’une des œuvres de Balzac «&nbsp;Scènes de la vie parisienne&nbsp;» &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.Et de nombreux projets se profilent, des expositions, d’autres traductions des œuvres de Balzac en langue ukrainienne, etc.Mais notre projet le plus important est à terme de pouvoir rénover le Château de Verhivnya qui par manque de moyens, comme malheureusement beaucoup d’endroits historiques en Ukraine, se dégrade régulièrement, et ce serait une énorme perte car un véritable petit musée y a été créé, rattaché au Musée de Jytomyr, qui enferme de vrai merveilles lié à Balzac, à la Comtesse Hanska, et à leur amour.Sur ce site, vous pourrez trouver l’histoire des voyages de Balzac pour rejoindre son aimée &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;, nos &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;, si notre cause vous intéresse vous pourrez également faire une &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;.<p >N’hésitez pas à nous contacter, nous sommes à votre disposition&nbsp;",
  
    img: '/Images/maison.jpg',
  }, 
  {id:3,
    title: "",
    text: "",
 
    img: '/Images/IllustrationChlo.jpg',
  },
 
];

let textSlidingButton = "FAIRE UN DON OU ADHERER";
export class Slider extends React.Component {
  
  constructor({props}) {
    super(props);
    
    this.IMAGE_PARTS = 6;
    
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 15000;
    
    this.state = { activeSlide: 1, prevSlide: 1, sliderReady: false };
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
        <div className="slider__top-heading"><a href="https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska"><SlidingButton textSlidingButton={textSlidingButton}/></a></div>
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div key={slide.id}
              className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
              
              >      
              <div className="slider__slide-content" >
              
                <div className="slider__slide-heading">
                  {slide.title.split('').map(l => <span>{l}</span>)}
                </div>
                <div className="slider__slide-text"  >{slide.text}</div>
               
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
//             
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//               laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//               Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
//               tincidunt ut libero. Aenean feugiat non eros quis feugiat.
//             
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
//             
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//               laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//               Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
//               tincidunt ut libero. Aenean feugiat non eros quis feugiat.
//             
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
//             
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
//               dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
//               laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
//               Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
//               Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
//               ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
//               tincidunt ut libero. Aenean feugiat non eros quis feugiat.
//             
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
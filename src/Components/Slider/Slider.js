import React from 'react'

import 'react-animated-slider/build/horizontal.css'
import './Slider.scss'
import Slider from 'react-animated-slider'

export const NewsSlider = ({ items }) => {
    return (
        <>
            <Slider autoplay={3000} className="slider-wrapper">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="slider-content"
                        style={{
                            background: `url('${item.image}') no-repeat center center`,
                        }}
                    >
                        <div className="inner">
                            {/* <h1>{item.title}</h1> */}
                            <p>{item.description}</p>

                            {/* <Link to={`/humanitaire/news/${item.id}`}>
                                <button className="button">Lire plus</button>
                            </Link> */}
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}

import React from 'react'
import { humaNews } from 'utils/humaNews'
import 'react-animated-slider/build/horizontal.css'
import './Slider.scss'
import Slider from 'react-animated-slider'

export const NewsSlider = () => {
    return (
        <>
            <Slider autoplay={3000} className="slider-wrapper">
                {humaNews.map((news) => (
                    <div
                        key={news.id}
                        className="slider-content"
                        style={{
                            background: `url('${news.image}') no-repeat center center`,
                        }}
                    >
                        <div className="inner">
                            <h1>{news.title}</h1>
                            <p>{news.shortText}</p>

                            <button className="button">TEXT</button>
                        </div>
                        <section>
                            <img src={news.image} alt={news.user} type />
                            <span>
                                Posted by <strong>TEXT</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider>
        </>
    )
}

import React from 'react'
import { humaNews } from 'utils/humaNews'
import 'react-animated-slider/build/horizontal.css'
import './Slider.scss'
import Slider from 'react-animated-slider'
import { Link } from 'react-router-dom'

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

                            <Link to={`/humanitaire/news/${news.id}`}>
                                <button className="button">Lire plus</button>
                            </Link>
                        </div>
                        <section>
                            <img src={news.image} alt={news.user} />
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

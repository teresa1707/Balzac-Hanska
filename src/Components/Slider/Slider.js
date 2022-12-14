
import React from "react"
import { humaNews } from "utils/humaNews"
import './Slider.scss'
import Slider from 'react-animated-slider'

export const NewsSlider = ()=>{
  
  return(
    <>
   <Slider className="slider-wrapper">
			{humaNews.map((news) => (
				<div
					key={news.id}
					className="slider-content"
					style={{ background: `url('${news.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{news.title}</h1>
						<p>{news.shortText}</p>
            
						<button className="button">TEXT</button>
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
import './PresentationCard.scss' 
import DOMPurify from 'dompurify'

export const PresentationCard=({bgImage, text, span1, span2, span3, photo1, photo2})=>{
  return(
    <div className="card bgClear">
    <div className="card__img" style={{ backgroundImage:`url(${bgImage})`}}>    <img className="photoBalzac frame" src={photo1} alt="" />
                    <img className="photoHanska frame" src={photo2} alt="" /></div>
    <div className="card__content">
        <h1 className="card__title animated fadeInDown">
          
            <span>{span1}</span>
            <span className="small">{span2}</span>
            <span>{span3}</span>
        </h1>
        <p className="card__quote animated fadeInUp"  dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(text),
            }}>
         
        </p>
    </div>
</div>
  )
}
import './PresentationCard.scss' 

export const PresentationCard=({bgImage, text})=>{
  return(
    <div className="card animated">
    <div className="card__img" style={{ backgroundImage:`url(${bgImage})`}}></div>
    <div className="card__content">
        <h1 className="card__title animated fadeInDown">
            <span className="small">Nos</span>
            <span>actions</span>

            <span>humanitaires</span>
        </h1>
        <p className="card__quote animated fadeInUp">
          {text}
        </p>
    </div>
</div>
  )
}
import React from "react"
import './ScrollDown.scss'

export const ScrollDown = () =>{


    const scrollDown = () => {
        window.scroll({
          top: 500,
          left: 0,
          behavior:'smooth',
          duration: 3,
      })
    }


  return(
    <>

<div id="mouse-scroll">
  <div className="mouse" onClick={scrollDown}>
    <div className="mouse-in"></div>
  </div>
  <div>
      <span className="down-arrow-1"></span>
      <span className="down-arrow-2"></span>
      <span className="down-arrow-3"></span>
   </div>
</div>

    
    
</>
  )
}
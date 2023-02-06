import React from "react"
import { video } from "utils/video"

export const VideoPlayer = () => {
  return (
    <>
 
  {video.map(({id, sourceMp4, sourceWebm, typeMp4, typeWebm})=>(
    <video controls width="100%" key={id}>
     <source src={sourceWebm} type={typeMp4} />
    <source src={sourceMp4} type={typeWebm}
    /> 
    Sorry, your browser doesn't support videos.
    </video>)
    )}
</>
  );
};


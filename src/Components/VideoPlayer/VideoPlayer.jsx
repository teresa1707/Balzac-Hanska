import React from 'react'

export const VideoPlayer = () => {
    return (
        <>
            <video controls width="100%" id="videoTF1">
                <source src="/Video/VID-20221224-WA0014.mp4" type="video/mp4" />
                <source
                    src="/Video/VID-20221224-WA0014.mp4"
                    type="video/webm"
                />
                Sorry, your browser doesn't support videos.
            </video>
        </>
    )
}

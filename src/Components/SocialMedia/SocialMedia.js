import React from 'react'
import './SocialMedia.scss'
import { FaLinkedin } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'

export const SocialMedia = () => {
    return (
        <>
            <a className="social" href="https://www.facebook.com/BalzacHanska"target="_blank" rel="noreferrer" >
                <FiFacebook
                    className="img"
                    style={{ color: 'brown', fontSize: 25 }}
                />
                <FiFacebook
                    className="img"
                    style={{ color: 'brown', fontSize: 25 }}
                />
            </a>
            <a className="social" href="https://www.linkedin.com/company/association-franco-ukrainienne-balzac-hanska/" target="_blank" rel="noreferrer">
                <FaLinkedin
                    className="img"
                    style={{
                        color: 'brown',
                        fontSize: 23,
                    }}
                />
                <FaLinkedin
                    className="img"
                    style={{
                        color: 'brown',

                        fontSize: 23,
                    }}
                />
            </a>
        </>
    )
}

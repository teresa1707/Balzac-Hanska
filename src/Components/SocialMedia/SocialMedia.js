import React from 'react'
import './SocialMedia.scss'
import { FiTwitter } from 'react-icons/fi'
import { FaYoutube } from 'react-icons/fa'
import { FaPinterest } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'

export const SocialMedia = () => {
    return (
        <>
            <a className="social" href="https://www.facebook.com/BalzacHanska"target="_blank" >
                <FiFacebook
                    className="img"
                    style={{ color: 'brown', fontSize: 25 }}
                />
                <FiFacebook
                    className="img"
                    style={{ color: 'brown', fontSize: 25 }}
                />
            </a>
            <a className="social" href="https://www.linkedin.com/company/association-franco-ukrainienne-balzac-hanska/" target="_blank">
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

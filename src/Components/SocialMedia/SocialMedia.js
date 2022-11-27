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
            <a className="social" href="#menu">
                <FiFacebook
                    className="img"
                    style={{ color: 'brown', fontSize: 25 }}
                />
                <FiFacebook
                    className="img"
                    style={{ color: 'brown', fontSize: 25 }}
                />
            </a>

            <a className="social" href="#menu" target="_blank">
                <FiTwitter
                    className="img"
                    style={{ color: 'brown', fontSize: 20 }}
                />
                <FiTwitter
                    className="img"
                    style={{ color: 'brown', fontSize: 20 }}
                />
            </a>
            <a className="social" href="#menu" target="_blank">
                <FaYoutube
                    className="img"
                    style={{ color: 'brown', fontSize: 25 }}
                />
                <FaYoutube
                    className="img"
                    style={{
                        color: 'brown',
                        fontSize: 23,
                    }}
                />
            </a>
            <a className="social" href="#menu" target="_blank">
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

            <a
                className="social"
                href="https://www.pinterest.com"
                target="_blank"
                rel="noreferrer"
            >
                <FaPinterest
                    className="img"
                    style={{
                        color: 'brown',

                        fontSize: 23,
                    }}
                />
                <FaPinterest
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

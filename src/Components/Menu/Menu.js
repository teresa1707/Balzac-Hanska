import React, { useState } from 'react'

import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import './Menu.scss'

import { NavLink } from 'react-router-dom'

export const Menu = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen((prev) => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <>
            <nav>
                <ul
                    className={`navLinks menuNav ${
                        navbarOpen ? 'showMenu' : 'hideMenu'
                    }`}
                >
                    <li>
                        <NavLink
                            to="/culture"
                            className={({ isActive }) =>
                                isActive ? 'isActiveButton' : 'a'
                            }
                            onClick={() => closeMenu()}
                        >
                            Culture
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/humanitarian"
                            className={({ isActive }) =>
                                isActive ? 'isActiveButton' : 'a'
                            }
                            onClick={() => closeMenu()}
                        >
                            Humanitaire
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'isActiveButton' : 'a'
                            }
                            onClick={() => closeMenu()}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <button onClick={handleToggle} className="navBtn">
                {navbarOpen ? (
                    <MdClose
                        style={{
                            color: '#dfd7c6',
                            width: '30px',
                            height: '30px',
                        }}
                    />
                ) : (
                    <FiMenu
                        style={{
                            color: '#dfd7c6',
                            width: '30px',
                            height: '30px',
                        }}
                    />
                )}
            </button>

            {/* <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
                        <li className="li">
                            <NavLink
                                to="/"
                                className="a"
                                onClick={() => closeMenu()}
                            >
                                Balzac-Hanska Accueil
                            </NavLink>
                        </li>
                        
                    </ul> */}
        </>
    )
}

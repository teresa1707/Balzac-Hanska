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
                    className={`navLinks ${
                        navbarOpen ? 'showMenu' : 'hideMenu'
                    }`}
                >
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'isActiveButton' : 'a'
                            }
                            onClick={() => closeMenu()}
                        >
                            Accueil
                        </NavLink>
                    </li>
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
                        <ul className="subMenu">
                            <li>
                                <a href="#donner">patrimoine ukrainien</a>
                            </li>
                            <li>
                                <a href="#projets">la route de balzac</a>
                            </li>
                            <li>
                                <a href="#actualites">balzac fest</a>
                            </li>
                        </ul>{' '}
                    </li>
                    <li>
                        <NavLink
                            to="/humanitarian"
                            className={({ isActive }) =>
                                isActive ? 'isActiveButton' : 'a'
                            }
                            onClick={() => closeMenu()}
                        >
                            Humanitaire{' '}
                        </NavLink>{' '}
                        <ul className="subMenu">
                            <li>
                                <a href="#donner">faire un don</a>
                            </li>
                            <li>
                                <a href="#projets">nos projets</a>
                            </li>
                            <li>
                                <a href="#actualites">actualités</a>
                            </li>
                            <li>
                                <a href="#presse">presse</a>
                            </li>
                        </ul>{' '}
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
        </>
    )
}

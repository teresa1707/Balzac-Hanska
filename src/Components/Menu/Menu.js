import React, { useState } from 'react'

import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import './Menu.scss'

import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

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
                            Culture{' '}
                        </NavLink>
                        <ul className="subMenu">
                            <li>
                                <HashLink smooth to="/culture#RouteBalzac">
                                    la route de balzac
                                </HashLink>
                            </li>
                            <li>
                                <HashLink
                                    smooth
                                    to="/culture#patrimoineUkrainien"
                                >
                                    patrimoine ukrainien
                                </HashLink>
                            </li>
                            <li>
                                {' '}
                                <HashLink smooth to="/culture#BalzacFest">
                                    balzac fest
                                </HashLink>
                            </li>
                        </ul>
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
                                <HashLink smooth to="/humanitarian#donner">
                                    faire un don
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/humanitarian#actualites">
                                    actualités
                                </HashLink>
                            </li>{' '}
                            <li>
                                {' '}
                                <HashLink smooth to="/humanitarian#projets">
                                    nos projets
                                </HashLink>
                            </li>
                            <li>
                                <HashLink smooth to="/humanitarian#presse">
                                    presse
                                </HashLink>
                            </li>
                        </ul>
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

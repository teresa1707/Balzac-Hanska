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
            <nav className="navHeader">
                <ul
                    className={`navLinks ${
                        navbarOpen ? 'showMenu' : 'hideMenu'
                    }`}
                >
                    <li className="menuLi">
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
                    <li className="menuLi">
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
                            <li className="menuLi">
                                <HashLink
                                    smooth
                                    to="/culture#RouteBalzac"
                                    onClick={() => closeMenu()}
                                >
                                    la route de balzac
                                </HashLink>
                            </li>
                            <li className="menuLi">
                                <HashLink
                                    smooth
                                    to="/culture#patrimoineUkrainien"
                                    onClick={() => closeMenu()}
                                >
                                    patrimoine ukrainien
                                </HashLink>
                            </li>
                            <li className="menuLi">
                                {' '}
                                <HashLink
                                    smooth
                                    to="/culture#BalzacFest"
                                    onClick={() => closeMenu()}
                                >
                                    {' '}
                                    balzac fest
                                </HashLink>
                            </li>
                        </ul>
                    </li>
                    <li className="menuLi">
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
                            <li className="menuLi">
                                <HashLink
                                    smooth
                                    to="/humanitarian#donner"
                                    onClick={() => closeMenu()}
                                >
                                    faire un don
                                </HashLink>
                            </li>
                            <li className="menuLi">
                                <HashLink
                                    smooth
                                    to="/humanitarian#actualites"
                                    onClick={() => closeMenu()}
                                >
                                    actualités
                                </HashLink>
                            </li>{' '}
                            <li className="menuLi">
                                {' '}
                                <HashLink
                                    smooth
                                    to="/humanitarian#projets"
                                    onClick={() => closeMenu()}
                                >
                                    nos projets
                                </HashLink>
                            </li>
                            <li className="menuLi">
                                <HashLink
                                    smooth
                                    to="/humanitarian#presse"
                                    onClick={() => closeMenu()}
                                >
                                    presse
                                </HashLink>
                            </li>
                        </ul>
                    </li>
                    <li className="menuLi">
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

import React, { useState } from "react";

import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import "./Menu.scss";

import { Link } from "react-router-dom";


export const Menu=()=>{
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
      setNavbarOpen((prev) => !prev)
  }
  const closeMenu = () => {
      setNavbarOpen(false)
  }

  return (<>

        <nav className="menu">
          
            <li><Link to="/culture">Culture</Link></li>
            <li><Link to="/humanitarian">Humanitaire</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          
        </nav>
        <div className="navBar" >
                    <button onClick={handleToggle}>
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
                    <div>
                        <ul
                            className={`menuNav ${
                                navbarOpen ? 'showMenu' : ''
                            }`}
                        >
                            <li className="li">
                                <Link
                                    to="/"
                                    className="active-link a"
                                    onClick={() => closeMenu()}
                                >
                                    Balzac-Hanska Accueil
                                </Link>
                            </li>
                            <li className="li ">
                                <Link
                                    to="/culture"
                                    className="active-link a"
                                    onClick={() => closeMenu()}
                                >
                                    Culture
                                </Link>
                            </li>
                            <li className="li">
                                <Link
                                    to="/humanitarian"
                                    className="active-link a"
                                    onClick={() => closeMenu()}
                                >
                                    humanitaire
                                </Link>
                            </li>
                            <li className="li">
                                <Link
                                    to="/contact"
                                    className="a active-link"
                                    onClick={() => closeMenu()}
                                >
                                    contact
                                </Link>
                            </li>
                            <li className="li">
                                <a className="a active-link" rel="noreferrer" href='https://www.helloasso.com/associations/association-franco-ukrainienne-balzac-et-hanska' target="_blank">
                                    FAIRE UN DON OU ADHERER
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
    </>
  );
}
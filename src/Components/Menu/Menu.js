import React, { useState } from "react";

import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import "./Menu.scss";

import { NavLink} from "react-router-dom";


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
          
            <li><NavLink to="/culture" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'whitesmoke' })}>Culture</NavLink></li>
            <li><NavLink to="/humanitarian" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'whitesmoke' })}>Humanitaire</NavLink></li>
            <li><NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'whitesmoke' })}>Contact</NavLink></li>
          
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
                                <NavLink
                                style={({ isActive }) => ({ 
                                  color: isActive ? '#bebebe' : 'whitesmoke' })}
                                    to="/"
                                    className="a"
                                    onClick={() => closeMenu()}
                                >
                                    Balzac-Hanska Accueil
                                </NavLink>
                               
                            </li>
                            <li className="li ">
                                <NavLink
                                style={({ isActive }) => ({ 
                                  color: isActive ? '#bebebe' : 'whitesmoke' })}
                                    to="/culture"
                                    className="a"
                                    onClick={() => closeMenu()}
                                >
                                    Culture
                                </NavLink>
                                
                            </li>
                            <li className="li">
                                <NavLink style={({ isActive }) => ({ 
                            color: isActive ? '#bebebe' : 'whitesmoke' })}
                                    to="/humanitarian"
                                    className="a"
                                    onClick={() => closeMenu()}
                                >
                                    humanitaire
                                </NavLink>
                            </li>
                            <li className="li">
                                <NavLink
                                style={({ isActive }) => ({ 
                                  color: isActive ? '#bebebe' : 'whitesmoke' })}
                                    to="/contact"
                                    className="a active-link"
                                    onClick={() => closeMenu()}
                                >
                                    contact
                                </NavLink>
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
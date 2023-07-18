import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { FaBars as MenuIcon, FaRegWindowClose as CloseIcon,FaPalette as PaletIcon } from 'react-icons/fa';

import { useState } from 'react';

export function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='topheader'>
            <nav className='topnav'>

               
                <NavLink className="logotype" to="/" ><PaletIcon /> &nbsp; Dibu-Dahlia</NavLink>

                <button className="open-menu icon"
                        onClick={() => {
                        setIsOpen(true)
                        }}>
                    <MenuIcon />
                </button>
                <ul className={`menu ${isOpen ? "menu_opened" : ""}`}>
                    <button className="close-menu icon"
                    onClick={() => {
                        setIsOpen(false)
                        }}>
                        <CloseIcon />
                    </button>

                    <li>
                        <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? "selected navlink" : "navlink")} 
                        onClick={() => {setIsOpen(false)}}>Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/perfil" 
                        className={({ isActive }) => (isActive ? "selected navlink" : "navlink")} 
                        onClick={() => {setIsOpen(false)}}>Perfil</NavLink>
                    </li>
                    <li>
                        <NavLink 
                        to="/contacto" 
                        className={({ isActive }) => (isActive ? "selected navlink" : "navlink")} 
                        onClick={() => {setIsOpen(false)}}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

import React, { useState } from "react";
import Logo from '../../assets/logo.png'

import "./Header2.css";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu } from 'react-icons/hi';

export default function Header2() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/"><img src={Logo} className='logo' id="logo"/></Link>
            <HiOutlineMenu className='menu' onClick={() => setMenuOpen(!menuOpen)} />
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/anasayfa">Anasayfa</NavLink>
                </li>
                <li>
                    <NavLink to="/hakkimizda">Kurumsal</NavLink>
                </li>
                <li>
                    <NavLink to="/araclarimiz">Ehliyet</NavLink>
                </li>
                <li>
                    <NavLink to="/galeri">Galeri</NavLink>
                </li>
            </ul>
        </nav>
    );
};
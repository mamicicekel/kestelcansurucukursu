import React from 'react'
import '../header/Header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi';

export default function Header() {

  return (
    <header className='main-header'>
      <div className='left-group'>
        <Link to="/"><img src={Logo} className='logo' /></Link>
        <hr></hr>
        <span>Kestel Can Sürücü Kursu</span>
      </div>
      <nav>
        <HiOutlineMenu className='menu-toggle' />
        <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li class="dropdown">
            <Link to="javascript:void(0)" class="dropbtn">Kurumsal</Link>
            <div class="dropdown-content">
              <Link to="/hakkimizda">Hakkımızda</Link>
              <Link to="/araclarimiz">Araçlarımız</Link>
              <Link to="/simulator">Simülatör</Link>
              <Link to="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
              <Link to="/iletisim">İletişim</Link>
            </div>
          </li>
          <li class="dropdown">
            <Link to="javascript:void(0)" class="dropbtn">Ehliyet</Link>
            <div class="dropdown-content">
              <Link to="/gerekli-belgeler">Gerekli Belgeler</Link>
              <Link to="/ehliyet-siniflari">Ehliyet Sınıfları</Link>
              <Link to="/yabancilar-icin-ehliyet">Yabancılar İçin Ehliyet</Link>
            </div>
          </li>
          <li><Link to="/galeri">Galeri</Link></li>
        </ul>
      </nav>
    </header>
  )
}

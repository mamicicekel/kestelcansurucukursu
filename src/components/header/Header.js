import React, { useState, useRef, useEffect } from 'react'
import '../header/Header.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi';

export default function Header() {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [isOpenedKurumsal, setIsOpenedKurumsal] = useState(false);
  const [isOpenedEhliyet, setIsOpenedEhliyet] = useState(false);
  const headerRef = useRef(null)
  const toggleMenu = () => {
    setIsOpenedMenu(!isOpenedMenu);
  };
  const toggleKurumsal = () => {
    setIsOpenedKurumsal(!isOpenedKurumsal);
    setIsOpenedEhliyet(false);
  };
  const toggleEhliyet = () => {
    setIsOpenedEhliyet(!isOpenedEhliyet);
    setIsOpenedKurumsal(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        // Dropdown dışında bir yere tıklanırsa dropdown'ı kapatın
        setIsOpenedMenu(false);
        setIsOpenedKurumsal(false);
        setIsOpenedEhliyet(false);
      }
    }

    // Event listener'ı ekleyin
    document.addEventListener('mousedown', handleClickOutside);

    // Component unmount olduğunda event listener'ı kaldırın
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header ref={headerRef} className={`main-header ${isOpenedMenu ? 'responsive' : ''}`}>
      <div className='left-group'>
        <Link to="/"><img src={Logo} className='logo' /></Link>
        <hr></hr>
        <span>Kestel Can Sürücü Kursu</span>
      </div>
      <nav>
        <HiOutlineMenu className='menu-toggle' size='25px' onClick={toggleMenu} />
        <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li className={isOpenedKurumsal ? 'dropdown' : ''}>
            <Link to="javascript:void(0)" className="dropbtn" onClick={toggleKurumsal}>Kurumsal</Link>
            <div className="dropdown-content">
              <Link to="/hakkimizda">Hakkımızda</Link>
              <Link to="/araclarimiz">Araçlarımız</Link>
              <Link to="/simulator">Simülatör</Link>
              <Link to="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</Link>
              <Link to="/iletisim">İletişim</Link>
            </div>
          </li>
          <li className={isOpenedEhliyet ? 'dropdown' : ''}>
            <Link to="javascript:void(0)" className="dropbtn" onClick={toggleEhliyet}>Ehliyet</Link>
            <div className="dropdown-content">
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

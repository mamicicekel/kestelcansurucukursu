import React from 'react'
import '../footer/Footer.css'
import Grid from '@mui/material/Grid';
import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <h2>İletişime Geçin</h2>
          <Grid container className='section-row'>
            <Grid item xs={1} >
              <MdLocationPin color='white' size='20px'/>
            </Grid>
            <Grid item xs={11}>
              <address>Ahmet Vefik Paşa, Şht. Ast. Namık Asutay Cd. 1 B, 16450 Kestel/Bursa</address>
            </Grid>
          </Grid>
          <Grid container className='section-row'>
            <Grid item xs={1} >
              <BsFillTelephoneFill color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <p>+90 530 311 9386</p>
            </Grid>
          </Grid>
          <Grid container className='section-row'>
            <Grid item xs={1} >
              <MdMail color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <p>kestelozelcanmtsk@gmail.com</p>
            </Grid>
          </Grid>
          <Grid container className='section-row'>
            <Grid item xs={1} >
              <BiLogoInstagramAlt color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <p>@kestelcan.mtsk</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <h2>Hızlı Bağlantılar</h2>
          <Grid container className='section-row' spacing={1}>
            <Grid item xs={1} >
              <AiOutlineRight color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <Link to="/hakkimizda" className='link'>Hakkımızda</Link>
            </Grid>
            <Grid item xs={1} >
              <AiOutlineRight color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <Link to="/araclarimiz" className='link'>Araçlarımız</Link>
            </Grid>
            <Grid item xs={1} >
              <AiOutlineRight color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <Link to="/simulator" className='link'>Simülatör</Link>
            </Grid>
            <Grid item xs={1} >
              <AiOutlineRight color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <Link to="/iletisim" className='link'>İletişim</Link>
            </Grid>
            <Grid item xs={1} >
              <AiOutlineRight color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <Link to="/gerekli-belgeler" className='link'>Gerekli Belgeler</Link>
            </Grid>
            <Grid item xs={1} >
              <AiOutlineRight color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <Link to="/ehliyet-siniflari" className='link'>Ehliyet Sınıfları</Link>
            </Grid>
            <Grid item xs={1} >
              <AiOutlineRight color='white' size='20px' />
            </Grid>
            <Grid item xs={11}>
              <Link to="/sikca-sorulan-sorular" className='link'>Sıkça Sorulan Sorular</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <h2>Çalışma Saatleri</h2>
          <p>Kursumuz size hizmet verebilmek için haftanın 6 günü açıktır.</p>
          <div className='working-hours'>
            <p>Pazartesi-Cuma</p>
            <p>09:00-18:00</p>
          </div>
          <hr />
          <div className='working-hours'>
            <p>Cumartesi</p>
            <p>09:00-17:00</p>
          </div>
          <hr />
          <div className='working-hours'>
            <p>Pazar</p>
            <p>Kapalı</p>
          </div>
        </Grid>
      </Grid>
    </footer>
  )
}

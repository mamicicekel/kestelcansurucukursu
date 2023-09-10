import React from 'react'
import '../contact/Contact.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'
import { Grid } from '@mui/material'
import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { BiLogoInstagramAlt } from 'react-icons/bi'

export default function Contact() {
  return (
    <div >
      <Header />
      <PageHeader hasLink prevPageName="Kurumsal" pageName="İletişim" />
      <main>
        <Grid container columns={12}>
          <Grid item xs={12} md={6}>
            <div className='google-maps'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.3032211136046!2d29.206283059900805!3d40.200616794404304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3939aaa2ee33%3A0xce1aaac261007cc1!2sKestel%20%C3%96zel%20Can%20MTSK!5e0!3m2!1str!2str!4v1694334651920!5m2!1str!2str"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"></iframe>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className='text-container'>
            <h1>İletişim Bilgilerimiz</h1>
            <Grid container className='section-row' columns={12}>
              <Grid item xs={1} >
                <MdLocationPin color='black' size='20px'/>
              </Grid>
              <Grid item xs={11}>
                <address className='address'>Ahmet Vefik Paşa, Şht. Ast. Namık Asutay Cd. 1 B, 16450 Kestel/Bursa</address>
              </Grid>
            </Grid>
            <Grid container className='section-row'>
              <Grid item xs={1} >
                <BsFillTelephoneFill color='black' size='20px' />
              </Grid>
              <Grid item xs={11}>
                <p>+90 530 311 9386</p>
              </Grid>
            </Grid>
            <Grid container className='section-row'>
              <Grid item xs={1} >
                <MdMail color='black' size='20px' />
              </Grid>
              <Grid item xs={11}>
                <p>kestelozelcanmtsk@gmail.com</p>
              </Grid>
            </Grid>
            <Grid container className='section-row'>
              <Grid item xs={1} >
                <BiLogoInstagramAlt color='black' size='20px' />
              </Grid>
              <Grid item xs={11}>
                <p>@kestelcan.mtsk</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  )
}

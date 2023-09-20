import React, { useEffect } from 'react'
import './Contact.css'
import { Helmet } from 'react-helmet'
import { Grid } from '@mui/material'
import { MdLocationPin } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../../components/header/Header'
import PageHeader from '../../../components/pageHeader/PageHeader'
import Footer from '../../../components/footer/Footer'

export default function Contact() {

  const contactList = [
    {
      icon: <MdLocationPin color='black' size='20px' />,
      text: <address className='address address--'>Ahmet Vefik Paşa, Şht. Ast. Namık Asutay Cd. 1 B, 16450 Kestel/Bursa</address>
    },
    {
      icon: <BsFillTelephoneFill color='black' size='20px' />,
      text: <p>+90 530 311 9386</p>
    },
    {
      icon: <MdMail color='black' size='20px' />,
      text: <p>kestelozelcanmtsk@gmail.com</p>
    },
    {
      icon: <BiLogoInstagramAlt color='black' size='20px' />,
      text: <p>kestelcan.mtsk</p>
    },
  ];

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div >
      <Helmet>
        <title>İletişim | Kestel Can Sürücü Kursu | Ehliyet Belgesi | Direksiyon Dersi</title>
        <meta charset="utf-8"></meta>
        <meta name="keywords" content="kestel sürücü kursu i̇letişim, kestel sürücü kursu adres, can sürücü kursu adres, kestel sürücü kursu nerede,kestel bursa sürücü kursu nerede,bursa sürücü kursu adres"></meta>
        <meta name="description" content="Kestel Can Sürücü Kursu olarak bulunduğumuz bölgede en iyi kaliteli eğitim vererek sürücü adaylarını ehliyet sahibi yapıyoruz.Bizimle irtibata geç ve ehliyet al"></meta>
      </Helmet>
      <Header />
      <PageHeader hasLink prevPageName="Kurumsal" pageName="İletişim" />
      <main className='main-contact'>
        <Grid container columns={12} >
          <Grid item xs={12} md={7} data-aos="fade-right" data-aos-duration="1500" >
            <div className='google-maps'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.3032211136046!2d29.206283059900805!3d40.200616794404304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3939aaa2ee33%3A0xce1aaac261007cc1!2sKestel%20%C3%96zel%20Can%20MTSK!5e0!3m2!1str!2str!4v1694334651920!5m2!1str!2str"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"></iframe>
            </div>
          </Grid>
          <Grid item xs={12} md={5} className='text-container' data-aos="fade-left" data-aos-duration="1500">
            <h1>İletişim Bilgilerimiz</h1>
            {contactList.map((contact, index) => (
              <Grid key={index} container className='section-row' columns={12}>
                <Grid item xs={1} lg={0.5}>
                  {contact.icon}
                </Grid>
                <Grid item xs={11} lg={11.5}>
                  {contact.text}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  )
}

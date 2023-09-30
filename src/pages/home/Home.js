import React, { useState, useEffect } from 'react'
import './Home.css'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { AiFillCar } from 'react-icons/ai'
import { GiSteeringWheel, GiCarSeat } from 'react-icons/gi'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CourseSign2 from '../../assets/kurs-tabela-1.jpeg'
import CourseSign1 from '../../assets/kurs-tabela-3.jpeg'

export default function Home() {

  const carouselItems = [
    {
      photoUrl: require('../../assets/car.png'),
      title: 'HEM MANUEL HEM DE OTOMATİK VİTES',
      altTitle: 'ALANINDA UZMAN EĞİTMENLER İLE',
      description: 'Alanında Uzman Eğitmenler ve tecrübeli kadromuzla; yenilikçi eğitim anlayışını benimseyip öğrenci merkezli eğitim veren bir kurumdur.',
    },
    {
      photoUrl: require('../../assets/motorcycle.png'),
      title: "125 CC'YE KADAR MOTORSİKLET EHLİYETİ",
      altTitle: 'ALANINDA UZMAN EĞİTMENLER İLE',
      description: 'Alanında Uzman Eğitmenler ve tecrübeli kadromuzla; yenilikçi eğitim anlayışını benimseyip öğrenci merkezli eğitim veren bir kurumdur.',
    },
  ]

  const infoBoxes = [
    {
      icon: <AiFillCar size={'25%'} color='#F3BD00' />,
      title: 'Kolayca Araba Sürmeyi Öğrenin',
      description: 'Pratik odaklı yaklaşımımızla kolayca araba sürmeyi öğrenin ve yola emin adımlarla çıkın.'
    },
    {
      icon: <GiSteeringWheel size={'25%'} color='#F3BD00' />,
      title: 'Direksiyon Eğitimi',
      description: 'Alanında uzman Bay-Bayan kişilerden oluşan deneyimli kadromuz ile direksiyon dersleri vermekteyiz.'
    },
    {
      icon: <GiCarSeat size={'25%'} color='#F3BD00' />,
      title: 'Simülatör',
      description: 'Teknolojiyi her zaman yakından takip eden kurumumuz, simülatör ile sizlere eşsiz bir eğitim vermektedir.'
    }
  ]

  

  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, [])

  function prevItem() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  }

  function nextItem() {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  }

  return (
    <>
      <Helmet>
        <title>Anasayfa | Kestel Can Sürücü Kursu | Ehliyet Belgesi | Direksiyon Dersi</title>
        <link id="favicon" rel="icon" href="../../assets/favicon.ico"/>
        <meta charset="utf-8"></meta>
        <meta name="keywords" content="sürücü kursu, bursa sürücü kursu, kestel sürücü kursu, kestel can sürücü kursu,  can sürücü kursu, bursa ehliyet, ehliyet merak edilenler, bursa en iyi sürücü kursu, bursa sürücü kursu ehliyet"></meta>
        <meta name="description" content="Bursa Kestel bölgesinde Can Sürücü Kursu olarak sizlere motosiklet ehliyeti, otomobil ehliyeti, kamyon ehliyeti ve özel direksiyon dersi hizmeti sağlıyoruz."></meta>
      </Helmet>
      <Header />
      <main className='main-home'>
      <div className='carousel'>
        <button onClick={prevItem} className='carousel-button prev'><BsFillArrowLeftCircleFill /></button>
        {
          carouselItems.map((carouselItem, index) => (
            <div className='carousel-content' key={index}>
              <div className='carousel-left-content'>
                <h2 style={{ display: index === currentIndex ? 'block' : 'none' }}>{carouselItem.altTitle}</h2>
                <h1 style={{ display: index === currentIndex ? 'block' : 'none' }}>{carouselItem.title}</h1>
                <p style={{ display: index === currentIndex ? 'block' : 'none' }}>{carouselItem.description}</p>
                <button style={{ display: index === currentIndex ? 'block' : 'none' }} className='contact-button'>Bize Ulaşın</button>
              </div>
              <img src={carouselItem.photoUrl} style={{ display: index === currentIndex ? 'inline-block' : 'none' }} />
            </div>
          ))
        }
        <button onClick={nextItem} className='carousel-button next'><BsFillArrowRightCircleFill /></button>
        <div className="carousel-dots">
          {carouselItems.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}>
            </span>
          ))}
        </div>
      </div>
        <section className='about-section'>
          <Grid container spacing={2} columns={12} marginBottom={30}>
            <Grid item xs={12} md={12} lg={6}>
              <section className='image-container'>
                <img src={CourseSign1} className='image1' alt='Kurs tabelası' data-aos="fade-left" data-aos-duration="1200" loading='lazy' />
                <img src={CourseSign2} className='image2' alt='Kurs binası' data-aos="fade-right" data-aos-duration="1200" loading='lazy' />
              </section>
            </Grid>
            <Grid item xs={12} md={12} lg={6} data-aos="fade-up" data-aos-duration="1200">
              <h1>Güvenli ve Yetkin Sürücüler Yetiştirmeyi Hedefliyoruz</h1>
              <p>Sürücü Kursu olarak, sürücülük konusundaki kapsamlı deneyimimiz ve uzman eğitmen kadromuzla, güvenli ve yetkin sürücüler yetiştirmeyi hedefliyoruz. Misyonumuz, öğrencilerimize trafik kurallarını ve yol güvenliğini öğretmek, araçları etkili bir şekilde kullanmayı öğretmek ve gelecekteki sürücülerin trafikte kendilerini ve diğerlerini güvende hissetmelerini sağlamaktır. Eğitim programlarımız, katılımcıların ihtiyaçlarına ve seviyelerine uygun olarak özelleştirilmiştir. Modern eğitim araçları, simülatörler ve pratik sürüş dersleri ile öğrencilerimizin kendilerine olan güvenlerini arttırmayı ve sürücülük becerilerini geliştirmeyi amaçlıyoruz. Sürücü kursumuz, kaliteli eğitim anlayışı, disiplinli yaklaşımı ve güvenilir hizmetleriyle tanınmaktadır.</p>
              <Link to="/kurumsal/hakkimizda#hakkimizda-top" className="button">Daha fazlasını oku</Link>
            </Grid>
          </Grid>
        </section>
        <section className='info-boxes-section'>
          <Grid container spacing={2} columns={12}>
            {infoBoxes.map((box, index) => (
              <Grid key={index} item xs={12} md={4}>
                <div className='info-box' data-aos="fade-up" data-aos-duration="1200">
                  {box.icon}
                  <h2>{box.title}</h2>
                  <p>{box.description}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </section>
      </main>
      <Footer />
    </>
  )
}
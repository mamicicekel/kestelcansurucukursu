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
import CarouselBackground from '../../assets/carousel-background.jpg'
import CourseSign2 from '../../assets/kurs-tabela-1.jpeg'
import CourseSign1 from '../../assets/kurs-tabela-3.jpeg'

export default function Home() {

  const carouselImages = [
    {
      title: 'HEM MANUEL HEM DE OTOMATİK VİTES',
      url: require('../../assets/car.png'),
      alt: 'B sınıfı ehliyet için örnek araba.'
    },
    {
      title: 'TÜM CC MOTOR EHLİYET BELGESİNİ VERİYORUZ',
      url: require('../../assets/motorcycle.png'),
      alt: 'A sınıfı ehliyet için örnek motosiklet.'
    }
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

  useEffect(() => {
    AOS.init();
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

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
        <section className='carousel-section'>
          <img src={CarouselBackground} alt="Carousel arka planının şehir temalı fotoğrafı." className='carousel-background-image' loading='lazy' />
          <div className="carousel-content">
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12} sm={6} md={6}>
                <h5 data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1000">ALANINDA UZMAN EĞİTMENLER İLE</h5>
                <h3 data-aos="fade-right" data-aos-duration="1500">{carouselImages[currentIndex].title}</h3>
                <p data-aos="fade-left" data-aos-duration="1500">Alanında Uzman Eğitmenler ve tecrübeli kadromuzla; yenilikçi eğitim anlayışını benimseyip öğrenci merkezli eğitim veren bir kurumdur.</p>
                <Link to="/kurumsal/iletisim" className="button" data-aos="fade-up" data-aos-delay="500">Bize ulaşın</Link>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    width='90%'
                    data-aos="fade-left"
                    style={{ display: index === currentIndex ? 'inline-block' : 'none' }}
                    loading='lazy'
                  />
                ))}
              </Grid>
            </Grid>
          </div>
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}>
              </span>
            ))}
          </div>
          <button className='carousel-button prev' onClick={prevSlide}><BsFillArrowLeftCircleFill /></button>
          <button className='carousel-button next' onClick={nextSlide}><BsFillArrowRightCircleFill /></button>
        </section>
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
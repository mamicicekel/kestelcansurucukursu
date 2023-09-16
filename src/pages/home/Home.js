import React, { useState, useEffect } from 'react'
import '../home/Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Slayt from '../../assets/slayt-1.jpg'
import Car from '../../assets/car.png'
import Motorcycle from '../../assets/motorcycle.png'
import { Grid } from '@mui/material'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillCar } from 'react-icons/ai'
import { GiSteeringWheel, GiCarSeat } from 'react-icons/gi'
import CourseSign2 from '../../assets/kurs-tabela-1.jpeg'
import CourseSign1 from '../../assets/kurs-tabela-3.jpeg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  const carouselImages = [
    {
      title: 'HEM MANUEL HEM DE OTOMATİK VİTES',
      url: Car,
      alt: 'b sınıfı ehliyet'
    },
    {
      title: 'TÜM CC MOTOR EHLİYET BELGESİNİ VERİYORUZ',
      url: Motorcycle,
      alt: 'a sınıfı ehliyet'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <Header />
      <main className='main-home'>
        <section className='carousel-container'>
          <img src={Slayt} alt="Carousel" className='carousel-background-image' />
          <div className="carousel-content">
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12} sm={6} md={6}>
                <h5 data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="1000">ALANINDA UZMAN EĞİTMENLER İLE </h5>
                <h3 data-aos="fade-right" data-aos-duration="1500">{carouselImages[currentIndex].title}</h3>
                <p data-aos="fade-left" data-aos-duration="1500">Alanında Uzman Eğitmenler ve tecrübeli kadromuzla; yenilikçi eğitim anlayışını benimseyip öğrenci merkezli eğitim veren bir kurumdur.</p>
                <Link to="/iletisim" className="button" data-aos="fade-up" data-aos-delay="500">Bize ulaşın</Link>
              </Grid>
              <Grid item xs={12} sm={6} md={6} >
                <img src={carouselImages[currentIndex].url} alt={carouselImages[currentIndex].alt} width='90%' data-aos="fade-left" />
              </Grid>
            </Grid>
          </div>
          <div className="carousel-dots">
            {carouselImages.map((_, index) => (
              <span
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
          <button className='carousel-button prev' onClick={prevSlide}><BsFillArrowLeftCircleFill /></button>
          <button className='carousel-button next' onClick={nextSlide}><BsFillArrowRightCircleFill /></button>
        </section>
        <section className='about-section'>
          <Grid container spacing={2} columns={12} marginBottom={30}>
            <Grid item xs={12} md={12} lg={6}>
              <section className='parent'>
                <img src={CourseSign1} className='image1' data-aos="fade-left" data-aos-duration="1200"/>
                <img src={CourseSign2} className='image2' data-aos="fade-right"data-aos-duration="1200"/>
              </section>
            </Grid>
            <Grid item xs={12} md={12} lg={6} data-aos="fade-up"data-aos-duration="1200">
              <h1>
                Güvenli ve Yetkin Sürücüler Yetiştirmeyi Hedefliyoruz
              </h1>
              <p>Sürücü Kursu olarak, sürücülük konusundaki kapsamlı deneyimimiz ve uzman eğitmen kadromuzla, güvenli ve yetkin sürücüler yetiştirmeyi hedefliyoruz. Misyonumuz, öğrencilerimize trafik kurallarını ve yol güvenliğini öğretmek, araçları etkili bir şekilde kullanmayı öğretmek ve gelecekteki sürücülerin trafikte kendilerini ve diğerlerini güvende hissetmelerini sağlamaktır. Eğitim programlarımız, katılımcıların ihtiyaçlarına ve seviyelerine uygun olarak özelleştirilmiştir. Modern eğitim araçları, simülatörler ve pratik sürüş dersleri ile öğrencilerimizin kendilerine olan güvenlerini arttırmayı ve sürücülük becerilerini geliştirmeyi amaçlıyoruz. Sürücü kursumuz, kaliteli eğitim anlayışı, disiplinli yaklaşımı ve güvenilir hizmetleriyle tanınmaktadır.</p>
              <Link to="/hakkimizda#hakkimizda-top" className="button">Daha fazlasını oku</Link>
            </Grid>
          </Grid>
        </section>
        <section className='info-boxes-container'>
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={4}>
              <div className='info-box' data-aos="flip-right" data-aos-duration="1200">
                <AiFillCar size={'25%'} color='#F3BD00' />
                <h2>Kolayca Araba Sürmeyi Öğrenin</h2>
                <p>Pratik odaklı yaklaşımımızla kolayca araba sürmeyi öğrenin ve yola emin adımlarla çıkın.</p>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='info-box' data-aos="flip-down" data-aos-duration="1200">
                <GiSteeringWheel size={'25%'} color='#F3BD00' />
                <h2>Direksiyon Eğitimi</h2>
                <p>Alanında uzman Bay-Bayan kişilerden oluşan deneyimli kadromuz ile direksiyon dersleri vermekteyiz.</p>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='info-box' data-aos="flip-left"data-aos-duration="1200">
                <GiCarSeat size={'25%'} color='#F3BD00' />
                <h2>Simülatör</h2>
                <p>Teknolojiyi her zaman yakından takip eden kurumumuz, simülatör ile sizlere eşsiz bir eğitim vermektedir.</p>
              </div>
            </Grid>
          </Grid>
        </section>
      </main>
      <Footer />
    </div>
  )
}
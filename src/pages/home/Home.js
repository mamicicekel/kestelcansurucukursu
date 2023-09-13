import React, { useState } from 'react'
import '../home/Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Slayt from '../../assets/slayt-1.jpg'
import Car from '../../assets/car.png'
import Motorcycle from '../../assets/motorcycle.png'
import { Grid } from '@mui/material'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Home() {
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
          <img src={Slayt} alt="Carousel" className='carousel-background-image'/>
          <div className="carousel-content">
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12} md={6}>
                <h5>ALANINDA UZMAN EĞİTMENLER İLE </h5>
                <h3>{carouselImages[currentIndex].title}</h3>
                <p>Alanında Uzman Eğitmenler ve tecrübeli kadromuzla; yenilikçi eğitim anlayışını benimseyip öğrenci merkezli eğitim veren bir kurumdur.</p>
              </Grid>
              <Grid item xs={12} md={6} >
                <img src={carouselImages[currentIndex].url} alt={carouselImages[currentIndex].alt} width='600px' />
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
      </main>
      <Footer />
    </div>
  )
}

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
      url: `${Car}`,
      alt: 'b sınıfı ehliyet'
    },
    {
      title: 'TÜM CC MOTOR EHLİYET BELGESİNİ VERİYORUZ',
      url: `${Motorcycle}`,
      alt: 'a sınıfı ehliyet'
    }
  ]

  return (
    <div>
      <Header />
      <main className='main-home'>
        <section className='carousel-container'>
          <img src={Slayt} />
          <div className="carousel-content">
            <Grid container spacing={2} columns={12}>
              <Grid item xs={2} md={6}>
                <h5>ALANINDA UZMAN EĞİTMENLER İLE </h5>
                <h1>HEM MANUEL HEM DE OTOMATİK VİTES</h1>
                <p>Alanında Uzman Eğitmenler ve tecrübeli kadromuzla; yenilikçi eğitim anlayışını benimseyip öğrenci merkezli eğitim veren bir kurumdur.</p>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={Car} />
              </Grid>
            </Grid>
          </div>
          <button className='carousel-button prev'><BsFillArrowLeftCircleFill /></button>
          <button className='carousel-button next'><BsFillArrowRightCircleFill /></button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import React, { useEffect } from 'react'
import './About.css'
import { Helmet } from 'react-helmet'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../../components/header/Header'
import PageHeader from '../../../components/pageHeader/PageHeader'
import Footer from '../../../components/footer/Footer'
import CourseSign1 from '../../../assets/kurs-tabela-3.jpeg'
import CourseSign2 from '../../../assets/kurs-tabela-1.jpeg'

export default function About() {

  const instructorList = [
    {
      name: 'Pınar Çiçekel',
      url: require("../../../assets/egitmen-1.png"),
      alt: 'Kadın eğitmen',
    },
    {
      name: 'Erol Yılmaz',
      url: require("../../../assets/egitmen-2.png"),
      alt: 'Erkek eğitmen',
    },
    {
      name: 'Battal Erdurucan',
      url: require("../../../assets/egitmen-3.png"),
      alt: 'Erkek eğitmen',
    },
    {
      name: 'Gülbahar',
      url: require("../../../assets/egitmen-4.png"),
      alt: 'Kadın eğitmen',
    },
    {
      name: 'Ahmet Çiçekel',
      url: require("../../../assets/egitmen-5.png"),
      alt: 'Erkek eğitmen',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='hakkimizda-top'>
      <Helmet>
        <title>Hakkımızda | Kestel Can Sürücü Kursu | Ehliyet Belgesi | Direksiyon Dersi</title>
        <meta charset="utf-8"></meta>
        <meta name="keywords" content="kestel sürücü kursu, kestel can sürücü kursu hakkımızda, kestel sürücü kursu ehliyet, bursa kestel, kestel en iyi sürücü kursu, kestel ehliyet kursu, kestel b ehliyet, kestel a ehliyet, kestel c ehliyet, kestel iş kamyonu ehliyeti"></meta>
        <meta name="description" content="Bursa Kestel bölgesinde Can Sürücü Kursu olarak sizlere Motosiklet Ehliyeti, Otomobil Ehliyeti ve Özel Direksiyon Dersi hizmeti sağlıyoruz"></meta>
      </Helmet>
      <Header />
      <PageHeader hasLink prevPageName="Kurumsal" pageName="Hakkımızda" />
      <main className='main-about'>
        <Grid container spacing={2} columns={12} marginBottom={30}>
          <Grid item xs={12} md={12} lg={6}>
            <section className='image-container'>
              <img src={CourseSign1} className='image1' alt='Kurs tabelası' data-aos="fade-left" data-aos-duration="1200" loading='lazy' />
              <img src={CourseSign2} className='image2' alt='Kurs binası' data-aos="fade-right" data-aos-duration="1200" loading='lazy' />
            </section>
          </Grid>
          <Grid item xs={12} md={12} lg={6} data-aos="fade-left" data-aos-duration="1200">
            <h1>
              Güvenli ve Yetkin Sürücüler Yetiştirmeyi Hedefliyoruz
            </h1>
            <p>Sürücü kursu olarak, sürücülük konusundaki kapsamlı deneyimimiz ve uzman eğitmen kadromuzla, güvenli ve yetkin sürücüler yetiştirmeyi hedefliyoruz. Misyonumuz, öğrencilerimize trafik kurallarını ve yol güvenliğini öğretmek, araçları etkili bir şekilde kullanmayı öğretmek ve gelecekteki sürücülerin trafikte kendilerini ve diğerlerini güvende hissetmelerini sağlamaktır. Eğitim programlarımız, katılımcıların ihtiyaçlarına ve seviyelerine uygun olarak özelleştirilmiştir. Modern eğitim araçları, simülatörler ve pratik sürüş dersleri ile öğrencilerimizin kendilerine olan güvenlerini arttırmayı ve sürücülük becerilerini geliştirmeyi amaçlıyoruz. Sürücü kursumuz, kaliteli eğitim anlayışı, disiplinli yaklaşımı ve güvenilir hizmetleriyle tanınmaktadır.</p>
          </Grid>
        </Grid>
        <div className='teachers' data-aos="fade-down" data-aos-duration="1200">
          <h3>Eğitmenlerimiz</h3>
          <h1>Sürüş Konusunda Büyük Deneyime Sahibiz</h1>
        </div>
        <Grid container spacing={2} columns={15}>
          {instructorList.map((instructor, index) => (
            <Grid item key={index} xs={15} md={5} lg={3}>
              <Card sx={{ maxWidth: 400, backgroundColor: '#F4F6F8' }} data-aos="fade-up" data-aos-duration="500">
                <CardActionArea>
                  <CardMedia
                    loading='lazy'
                    component="img"
                    height="250vh"
                    image={instructor.url}
                    alt={instructor.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {instructor.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">Eğitmen</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      <Footer />
    </div>
  )
}

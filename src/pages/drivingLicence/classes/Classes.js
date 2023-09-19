import React, { useEffect } from 'react'
import './Classes.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'
import { Grid } from '@mui/material'

export default function Classes() {
  const classList = [
    {
      url: require("../../../assets/motorcycle.jpg"),
      alt: 'Motosiklet',
      title: 'A1, A2 Motosiklet Ehliyeti',
      description: "A1 ehliyeti motor silindir hacmi 125 cc'ye kadar, A2 ehliyeti ise motor silindir hacmi 600 cc'ye kadar olan motosikletleri kullanmak için gereklidir.",
    },
    {
      url: require("../../../assets/car.jpg"),
      alt: 'Otomobil',
      title: 'B Sınıfı Otomobil Ehliyeti',
      description: 'Otomobil ve kamyonet kullanabilmek için gereken ehliyettir. Bu sınıfa ait sürücü belgeleri aynı zamanda M, B1 ve F sınıflarını da kapsıyor.',
    },
    {
      url: require("../../../assets/truck.jpg"),
      alt: 'Kamyon',
      title: 'C Sınıfı Kamyon Ehliyeti',
      description: 'Kamyon, tır ve çekici gibi araçları kullanabilmek için gereken C sınıfı sürücü belgesi halk arasında kamyon ehliyeti olarak da biliniyor.',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Header />
      <PageHeader hasLink prevPageName="Ehliyet" pageName="Ehliyet Sınıfları" />
      <main className='main-classes' data-aos="fade-up" data-aos-duration="1500">
        <Grid container spacing={2} columns={12}>
          {classList.map((classs, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    loading='lazy'
                    component="img"
                    image={classs.url}
                    alt={classs.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {classs.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">{classs.description}</Typography>
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

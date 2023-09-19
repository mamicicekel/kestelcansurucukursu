import React, { useEffect } from 'react'
import './Vehicles.css'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../../components/header/Header'
import PageHeader from '../../../components/pageHeader/PageHeader'
import Footer from '../../../components/footer/Footer'

export default function Vehicles() {

  const vehicleList = [
    {
      url: require("../../../assets/araclarimiz-1.jpeg"),
      alt: 'Hyundai i20 2018',
      title: 'Hyundai i20 2018',
      description: "Manuel",
    },
    {
      url: require("../../../assets/araclarimiz-2.jpg"),
      alt: 'BMC pro 827 2009',
      title: 'BMC pro 827 2009',
      description: "Manuel",
    },
    {
      url: require("../../../assets/araclarimiz-3.jpeg"),
      alt: 'Tüm araçlarımız',
      title: 'Tüm araçlarımız',
      description: "Manuel",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Header />
      <PageHeader hasLink prevPageName="Kurumsal" pageName="Araçlarımız" />
      <main className='main-vehicles' data-aos="fade-up" data-aos-duration="1500">
        <Grid container spacing={2} columns={12}>
          {vehicleList.map((vehicle, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Card className='card'>
                <CardActionArea sx={{ marginBottom: '10px', backgroundColor: '#F1F3F2' }}>
                  <CardMedia
                  loading='lazy'
                    component="img"
                    image={vehicle.url}
                    height={'280vh'}
                    alt={vehicle.alt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {vehicle.title}
                    </Typography>
                    <Typography variant="body1" color="#F3BD00">
                      {vehicle.description}
                    </Typography>
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

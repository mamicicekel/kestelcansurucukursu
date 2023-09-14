import React from 'react'
import '../vehicles/Vehicles.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Araba1 from '../../../assets/araclarimiz-1.jpeg'
import Araba2 from '../../../assets/araclarimiz-2.jpg'
import Araba3 from '../../../assets/araclarimiz-3.jpeg'

export default function Vehicles() {
  return (
    <div>
      <Header />
      <PageHeader hasLink prevPageName="Kurumsal" pageName="Araçlarımız" />
      <main className='main-vehicles'>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={4}>
            <Card className='card'>
              <CardActionArea sx={{marginBottom:'10px', backgroundColor:'#F1F3F2'}}>
                <CardMedia
                  component="img"
                  image={Araba1}
                  height={'280vh'}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hyundai i20 2018
                  </Typography>
                  <Typography variant="body1" color="#F3BD00">
                    Manuel
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className='card'>
              <CardActionArea sx={{marginBottom:'10px', backgroundColor:'#F1F3F2'}}>
                <CardMedia
                  component="img"
                  image={Araba2}
                  height={'280vh'}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  BMC pro 827 2009
                  </Typography>
                  <Typography variant="body1" color="#F3BD00">
                  Manuel
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className='card'>
              <CardActionArea sx={{marginBottom:'10px', backgroundColor:'#F1F3F2'}}>
                <CardMedia
                  component="img"
                  image={Araba3}
                  height={'280vh'}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tüm araçlarımız
                  </Typography>
                  <Typography variant="body1" color="#F3BD00">
                    Manuel
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  )
}

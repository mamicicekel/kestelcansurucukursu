import React from 'react'
import '../classes/Classes.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'
import { Grid } from '@mui/material'
import Car from '../../../assets/car.jpg'
import Motorcycle from '../../../assets/motorcycle.jpg'
import Truck from '../../../assets/truck.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Classes() {
  return (
    <div>
      <Header />
      <PageHeader hasLink prevPageName="Ehliyet" pageName="Ehliyet Sınıfları" />
      <main className='main-classes'>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 400, }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Motorcycle}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    A1, A2 Motosiklet Ehliyeti
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    A1 ehliyeti motor silindir hacmi 125 cc'ye kadar, A2 ehliyeti ise motor silindir hacmi 600 cc'ye kadar olan motosikletleri kullanmak için gereklidir.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 400}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Car}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    B Sınıfı Otomobil Ehliyeti
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Otomobil ve kamyonet kullanabilmek için gereken ehliyettir. Bu sınıfa ait sürücü belgeleri aynı zamanda M, B1 ve F sınıflarını da kapsıyor.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Truck}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    C Sınıfı Kamyon Ehliyeti
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Kamyon, tır ve çekici gibi araçları kullanabilmek için gereken C sınıfı sürücü belgesi halk arasında kamyon ehliyeti olarak da biliniyor.                </Typography>
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

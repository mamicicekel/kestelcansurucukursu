import React, {useEffect} from 'react'
import '../about/About.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'
import Grid from '@mui/material/Grid';
import CourseSign2 from '../../../assets/kurs-tabela-1.jpeg'
import CourseSign1 from '../../../assets/kurs-tabela-3.jpeg'
import Egitmen1 from '../../../assets/egitmen-1.png'
import Egitmen2 from '../../../assets/egitmen-2.png'
import Egitmen3 from '../../../assets/egitmen-3.png'
import Egitmen4 from '../../../assets/egitmen-4.png'
import Egitmen5 from '../../../assets/egitmen-5.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div id='hakkimizda-top'>
      <Header/>
      <PageHeader hasLink prevPageName="Kurumsal" pageName="Hakkımızda" />
      <main className='main-about'>
        <Grid container spacing={2} columns={12} marginBottom={30}>
          <Grid item xs={12} md={12} lg={6}>
            <section className='parent'>
              <img src={CourseSign1} className='image1'  data-aos="fade-left" data-aos-duration="1200"/>
              <img src={CourseSign2} className='image2'  data-aos="fade-right" data-aos-duration="1200"/>
            </section>
          </Grid>
          <Grid item xs={12} md={12} lg={6} data-aos="fade-left" data-aos-duration="1200">
            <h1>
            Güvenli ve Yetkin Sürücüler Yetiştirmeyi Hedefliyoruz
            </h1>
            <p>Sürücü Kursu olarak, sürücülük konusundaki kapsamlı deneyimimiz ve uzman eğitmen kadromuzla, güvenli ve yetkin sürücüler yetiştirmeyi hedefliyoruz. Misyonumuz, öğrencilerimize trafik kurallarını ve yol güvenliğini öğretmek, araçları etkili bir şekilde kullanmayı öğretmek ve gelecekteki sürücülerin trafikte kendilerini ve diğerlerini güvende hissetmelerini sağlamaktır. Eğitim programlarımız, katılımcıların ihtiyaçlarına ve seviyelerine uygun olarak özelleştirilmiştir. Modern eğitim araçları, simülatörler ve pratik sürüş dersleri ile öğrencilerimizin kendilerine olan güvenlerini arttırmayı ve sürücülük becerilerini geliştirmeyi amaçlıyoruz. Sürücü kursumuz, kaliteli eğitim anlayışı, disiplinli yaklaşımı ve güvenilir hizmetleriyle tanınmaktadır.</p>
          </Grid>
        </Grid>
        <div className='teachers' data-aos="fade-down" data-aos-duration="1200">
          <h3>Eğitmenlerimiz</h3>
          <h1>Sürüş Konusunda Büyük Deneyime Sahibiz</h1>
        </div>
        <Grid container spacing={2} columns={15}>
          <Grid item xs={15} md={5} lg={3}>
            <Card sx={{ maxWidth: 400, backgroundColor:'#F4F6F8' }} data-aos="fade-up" data-aos-duration="500">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250vh"
                  image={Egitmen1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Pınar Çiçekel
                  </Typography>
                  <Typography variant="body1" color="text.secondary">Eğitmen</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={15} md={5} lg={3}>
            <Card sx={{ maxWidth: 400, backgroundColor:'#F4F6F8'}} data-aos="fade-up" data-aos-duration="1000">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250vh"
                  image={Egitmen2}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Erol Yılmaz
                  </Typography>
                  <Typography variant="body1" color="text.secondary">Eğitmen</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={15} md={5} lg={3}>
            <Card sx={{ maxWidth: 400, backgroundColor:'#F4F6F8' }}data-aos="fade-up" data-aos-duration="1500">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250vh"
                  image={Egitmen3}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" >
                  Battal Erdurucan
                  </Typography>
                  <Typography variant="body1" color="text.secondary">Eğitmen</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={15} md={5} lg={3}>
            <Card sx={{ maxWidth: 400, backgroundColor:'#F4F6F8' }}data-aos="fade-up" data-aos-duration="2000">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250vh"
                  image={Egitmen4}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Gülbahar
                  </Typography>
                  <Typography variant="body1" color="text.secondary">Eğitmen</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={15} md={5} lg={3}>
            <Card sx={{ maxWidth: 400, backgroundColor:'#F4F6F8',  }}data-aos="fade-up" data-aos-duration="2500">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250vh"
                  image={Egitmen5}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Ahmet Çiçekel
                  </Typography>
                  <Typography variant="body1" color="text.secondary">Eğitmen</Typography>
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

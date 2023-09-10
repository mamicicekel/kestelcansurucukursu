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
      
      <Footer />
    </div>
  )
}

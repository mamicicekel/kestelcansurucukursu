import React, { useState, useEffect } from "react"
import './Gallery.css'
import { Helmet } from "react-helmet"
import { Grid, Card, CardActionArea, Dialog, DialogContent } from '@mui/material'
import { BsFillPlayFill } from "react-icons/bs"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../components/header/Header'
import PageHeader from '../../components/pageHeader/PageHeader'
import Footer from '../../components/footer/Footer'

export default function Gallery() {
  const mediaList = [
    {
      tip: 'resim',
      url: require("../../assets/kurs-tabela-1.jpeg"),
      baslik: 'Kurs tabelası',
    },
    {
      tip: 'resim',
      url: require("../../assets/kurs-tabela-2.jpeg"),
      baslik: 'Kurs binasının önü',
    },
    {
      tip: 'resim',
      url: require("../../assets/kurs-tabela-3.jpeg"),
      baslik: 'Kurs binası',
    },
    {
      tip: 'resim',
      url: require("../../assets/araclar-1.jpeg"),
      baslik: 'Tüm araçlarımız',
    },
    {
      tip: 'resim',
      url: require("../../assets/araclar-2.jpeg"),
      baslik: 'Tüm araçlarımız',
    },
    {
      tip: 'resim',
      url: require("../../assets/araclar-3.jpeg"),
      baslik: 'Tüm araçlarımız',
    },
    {
      tip: 'resim',
      url: require("../../assets/araclar-4.jpeg"),
      baslik: 'Tüm araçlarımız',
    },
    {
      tip: 'video',
      url: require("../../assets/direksiyon-dersi-1.mp4"),
      baslik: 'Direksiyon dersi videosu',
    },
    {
      tip: 'video',
      url: require("../../assets/direksiyon-dersi-2.mp4"),
      baslik: 'Direksiyon dersi videosu',
    },
  ];

  useEffect(() => {
    AOS.init();
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedMedia(null);
    setIsOpen(false);
  };

  return (
    <div>
      <Helmet>
        <title>Galeri | Kestel Can Sürücü Kursu | Ehliyet Belgesi | Direksiyon Dersi</title>
        <meta charset="utf-8"></meta>
        <meta name="keywords" content="bursa sürücü kursu, bursa ehliyet, bursa ehliyet kursu, bursa en iyi sürücü kursu, bursa b ehliyet, bursa a ehliyet, bursa a2 ehliyet, bursa a1 ehliyet,bursa c ehliyet,bursa ce ehliyet,bursa işmakinası kursu, bursa iş kamyonu ehliyeti,bursa sürücü kursu arabaları"></meta>
        <meta name="description" content="Kestel Can Sürücü Kursumuzdan ehliyet sınavı ve direksiyon derslerinin fotoğrafları, Sürücü Kursu araçlarımızın ve Eğitmenlerimizin fotoğraflarını inceleyebilirsiniz"></meta>
      </Helmet>
      <Header />
      <PageHeader hasLink={false} pageName="Galeri" />
      <main className="main-gallery" data-aos="fade-up" data-aos-duration="1000">
        <Grid container spacing={2}>
          {mediaList.map((media, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card onClick={() => handleMediaClick(media)}>
                <CardActionArea>
                  {media.tip === 'resim' ? (
                    <img src={media.url} alt={media.baslik} style={{ width: '100%', height: '250px', objectFit: 'cover' }} loading='lazy' />
                  ) : (
                    <div style={{ position: 'relative' }}>
                      <video width="100%" height="250px" style={{ objectFit: 'cover' }} loading='lazy'>
                        <source src={media.url} type="video/mp4" />
                        Tarayıcınız video etiketini desteklemiyor.
                      </video>
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 1,
                        }}
                      >
                        <BsFillPlayFill size={64} color="white" />
                      </div>
                    </div>
                  )}
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog
          open={isOpen}
          onClose={handleClose}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none' } }}
        >
          <DialogContent>
            {selectedMedia?.tip === 'resim' ? (
              <img src={selectedMedia?.url} alt={selectedMedia?.baslik} style={{ width: '100%' }} />
            ) : (
              <video width="100%" controls>
                <source src={selectedMedia?.url} type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  )
}

import React, { useState, useEffect } from "react"
import './Gallery.css'
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
      <Header />
      <PageHeader hasLink={false} pageName="Galeri" />
      <main className="main-gallery" data-aos="fade-up" data-aos-duration="1000">
        <Grid container spacing={2}>
          {mediaList.map((media, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card onClick={() => handleMediaClick(media)}>
                <CardActionArea>
                  {media.tip === 'resim' ? (
                    <img src={media.url} alt={media.baslik} style={{ width: '100%', height: '250px', objectFit: 'cover' }} loading='lazy'/>
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

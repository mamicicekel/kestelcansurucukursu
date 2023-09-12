import React, { useState } from "react";
import '../gallery/Gallery.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import PageHeader from '../../components/pageHeader/PageHeader'
import { Grid, Card, CardActionArea, Dialog, DialogContent, DialogTitle, colors } from '@mui/material';

export default function Gallery() {
  const mediaList = [
    {
      id: 1,
      tip: 'resim',
      url: require("../../assets/kurs-tabela-1.jpeg"),
      baslik: 'Resim 1',
    },
    {
      id: 2,
      tip: 'resim',
      url: require("../../assets/kurs-tabela-2.jpeg"),
      baslik: 'Resim 1',
    },
    {
      id: 3,
      tip: 'resim',
      url: require("../../assets/kurs-tabela-3.jpeg"),
      baslik: 'Resim 1',
    },
    {
      id: 4,
      tip: 'resim',
      url: require("../../assets/araclar-1.jpeg"),
      baslik: 'Resim 1',
    },
    {
      id: 5,
      tip: 'resim',
      url: require("../../assets/araclar-2.jpeg"),
      baslik: 'Resim 1',
    },
    {
      id: 6,
      tip: 'resim',
      url: require("../../assets/araclar-3.jpeg"),
      baslik: 'Resim 1',
    },
    {
      id: 7,
      tip: 'resim',
      url: require("../../assets/araclar-4.jpeg"),
      baslik: 'Resim 1',
    },
    {
      id: 8,
      tip: 'video',
      url: require("../../assets/direksiyon-dersi-1.mp4"),
      baslik: 'Video 1',
    },
    {
      id: 9,
      tip: 'video',
      url: require("../../assets/direksiyon-dersi-2.mp4"),
      baslik: 'Video 1',
    },
  ];


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
      <main className="main-gallery">
        <Grid container spacing={2}>
          {mediaList.map((medya) => (
            <Grid item key={medya.id} xs={12} sm={6} md={3}>
              <Card onClick={() => handleMediaClick(medya)}>
                <CardActionArea>
                  {medya.tip === 'resim' ? (
                    <img
                      src={medya.url}
                      alt={medya.baslik}
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    />
                  ) : (
                    // Videoyu burada gösterin
                    <video width="100%" height="250px"  style={{ objectFit: 'cover' }}>
                      <source src={medya.url} type="video/mp4" />
                      Tarayıcınız video etiketini desteklemiyor.
                    </video>
                  )}
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog open={isOpen} onClose={handleClose} style={{backgroundColor:'rgb(0, 0, 0, 0.6)', }}>
          <DialogTitle>{selectedMedia?.baslik}</DialogTitle>
          <DialogContent>
            {selectedMedia?.tip === 'resim' ? (
              <img src={selectedMedia?.url} alt={selectedMedia?.baslik} style={{ width: '100%' }} />
            ) : (
              // Videoyu burada gösterin
              <video width="100%" controls >
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

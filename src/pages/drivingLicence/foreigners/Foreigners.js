import React, { useEffect } from 'react'
import './Foreigners.css'
import { Helmet } from 'react-helmet'
import Grid from '@mui/material/Grid'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../../components/header/Header'
import PageHeader from '../../../components/pageHeader/PageHeader'
import Footer from '../../../components/footer/Footer'
import Foreigners1 from '../../../assets/foreigners-1.jpg'
import Foreigners2 from '../../../assets/foreigners-2.jpg'

export default function Foreigners() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Helmet>
        <title>Yabancılar İçin Ehliyet | Kestel Can Sürücü Kursu | Ehliyet Belgesi | Direksiyon Dersi</title>
        <meta charset="utf-8"></meta>
        <meta name="keywords" content="Kestel yabancı sürücü belgesi, Uluslararası sürücü belgesi Kestel, Yabancılar için ehliyet başvurusu, Yabancı sürücü belgesi alımı,  can sürücü kursu, bursa ehliyet, ehliyet merak edilenler, bursa en iyi sürücü kursu, bursa sürücü kursu ehliyet"></meta>
        <meta name="description" content="Yabancılar için ehliyet başvurusu, şartlar, evraklar ve süreç hakkında detaylı bilgiye ulaşın. Uluslararası sürücü belgesi alımı, ehliyet çevirme işlemleri ve geçerlilik konularında rehberimizden faydalanın."></meta>
      </Helmet>
      <Header />
      <PageHeader hasLink prevPageName="Ehliyet" pageName="Yabancılar İçin Ehliyet" />
      <main className='main-foreigners'>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={12} lg={6}>
            <section className='image-container'>
              <img src={Foreigners1} className='image1' alt='Örnek eğitim fotoğrafı' data-aos="fade-left" data-aos-duration="1200" loading='lazy' />
              <img src={Foreigners2} className='image2' alt='Yabancı uyruklu kadın direksiyon dersinde' data-aos="fade-right" data-aos-duration="1200" loading='lazy' />
            </section>
          </Grid>
          <Grid item xs={12} md={12} lg={6} data-aos="fade-left" data-aos-duration="1200">
            <h1>
              Uluslararası Sürücü Deneyiminizi Türkiye'de Sürdürün
            </h1>
            <p>
              Yabancı ülke vatandaşları, vize şartlarını yerine getirdikten sonra altı ay süreyle sınırlı olmak üzere Türkiye'de kaldıkları bu süre boyunca kendi ülkelerinde aldıkları geçerli sürücü belgeleri ile Türkiye’de motorlu taşıt kullanabilirler. Sahip olunan yabancı sürücü belgesi üzerinde kişiye ait fotoğraf yoksa, uluslararası sürücü belgesi veya izni (IDL/P) taşıması zorunlu olmakla birlikte 180 günlük süre sonunda Türkiye’de verilen sürücü belgelerinden kullanılacak motorlu taşıta uygun olan sürücü belgesi alınması zorunluğu da bulunur. Yabancı sürücü belgesi ile sadece motorlu kara taşıtları kullanılabilir ve sahip olunan sürücü belgesinin, Türkiye'de hizmet veren noter onaylı tercümesinin olması gerekiyor.
            </p>
            <ul>
              <li>Kimlik belgesi</li>
              <li>Sürücü sağlık raporu</li>
              <li>Sürücü belgesi almak için yatırılması gereken harç bedelinin ödendiğine dair belge</li>
              <li>Biyometrik fotoğraf (1 adet)</li>
              <li>Yabancı ülke vatandaşının kendi ülkesinde almış olduğu sürücü belgesinin aslı ve renkli fotokopisi</li>
              <li>Sürücü belgesinin Konsolosluk ya da noter onaylı Türkçe tercümesi</li>
              <li>Adli sicil belgesi</li>
              <li>Kan grubunu gösterir belge</li>
              <li>Yabancı vatandaşın, kendi ülkesinde almış olduğu öğrenim belgesinin noter tasdikli tercümesi ve öğrenim belgesi</li>
            </ul>
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  )
}

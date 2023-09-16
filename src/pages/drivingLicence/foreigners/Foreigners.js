import React,{useEffect} from 'react'
import '../foreigners/Foreigners.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'
import Grid from '@mui/material/Grid';
import Foreigners2 from '../../../assets/foreigners-2.jpg'
import Foreigners1 from '../../../assets/foreigners-1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Foreigners() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Header />
      <PageHeader hasLink prevPageName="Ehliyet" pageName="Yabancılar İçin Ehliyet" />
      <main className='main-foreigners'>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={12} lg={6}>
            <section className='parent'>
              <img src={Foreigners1} className='image1' data-aos="fade-left" data-aos-duration="1200"/>
              <img src={Foreigners2} className='image2' data-aos="fade-right" data-aos-duration="1200"/>
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

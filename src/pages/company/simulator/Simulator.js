import React, { useEffect } from 'react'
import './Simulator.css'
import { Helmet } from 'react-helmet'
import { Grid } from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../../components/header/Header'
import PageHeader from '../../../components/pageHeader/PageHeader'
import Footer from '../../../components/footer/Footer'
import CarSimulator from '../../../assets/car-simulator.jpeg'
import MotorcycleSimulator from '../../../assets/motor-simulator.jpeg'

export default function Simulator() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Header />
      <Helmet>
        <title>İletişim | Kestel Can Sürücü Kursu | Ehliyet Belgesi | Direksiyon Dersi</title>
        <meta charset="utf-8"></meta>
        <meta name="keywords" content="sürücü kursu simülatör, kestel sürücü kursu simülasyon, ehliyet Araba simülatörü, ehliyet motor simülatörü,  can sürücü kursu simülatör, kestel ehliyet Gerçekçi simülatör, ehliyet simülasyon"></meta>
        <meta name="description" content="Gerçekçi simülasyon deneyimi sunan simülatörlerle tanışın. Kestel Can Sürücü Kursu olarak simülatör eğitimleri veriyoruz."></meta>
      </Helmet>
      <PageHeader hasLink prevPageName="Kurumsal" pageName="Simülatör" />
      <main className='main-simulator'>
        <Grid container spacing={2} columns={12} >
          <Grid item xs={12} md={8} data-aos="fade-up" data-aos-duration="1500">
            <section>
              <h1>Direksiyon Eğitiminin En Güvenli Yolu</h1>
              <p>
                Adaylarımızın bilinçli araç kullanımının temel unsurlarını vermek amacıyla multimedya teknolojisinin tüm özelliklerini kullanan, sanal kentte gerçekçi bir trafik akışı içeren, tehlikeden uzak bir ortamda eğitim fırsatı sağlayan sürücü eğitim simülatörünü hizmetinize sunmuştur. Gerçeğe uygun olarak tasarlanan üç boyutlu şehir ortamı, konutlar, mağazalar, parklar, okullar, restoranlar, benzin istasyonları, alışveriş merkezleri, bankalar, vb. birçok yerleşim merkezlerini içermektedir. Dolmuşlardan otobüslere, yayalardan araçlara, reklam panoları ve billboardlarıyla şehir ortamını tamamiyle yansıtmakta, sürücülere yaşayan bir ortam sunulmaktadır. Sistemin etkileşimli yapısı ile sürücüye kazandırılmak istenen davranışlar öğretilebilmekte ve eğitim verilebilmektedir. Sistemin yolla etkileşimi, hava koşulları ve sürüş performansı gibi özellikleriyle sürücüye gerçek duygular yaşatılmaktadır. Simülatör kullanımı sırasında, çiğnenen her kural için sesli ve görsel uyarılar bulunmaktadır. Ekranın sağ üst köşesinde uyulmayan kurallar veya trafik işaretleri ile hataların yapıldığı anda sürücünün uyarılması, verilen eğitimin etkin olmasını ve aktif öğrenmeyi sağlar. Trafik eğitimi konusunda duyulan ihtiyacın giderilmesinde önemli bir araç olacağı düşünülen ve oyun çekiciliği taşıyan bu simülatör, başlangıç seviyesindeki sürücülerin sanal, riskten uzak bir ortamda direksiyon başında sürücülük yeteneklerini geliştirme fırsatını bulmalarına yardımcı olmaktadır. Kullanıcılar yaptıkları hataların sonuçlarını görerek ve Trafikent’in sanal dünyasında herhangi bir tehlikeden uzak olarak deneyim kazanacaklardır.
              </p>
              <h1>Simülatörün Özellikleri</h1>
              <ul>
                <li>Gerçek şehir ortamı</li>
                <li>Trafik ışıkları, işaretler ve polis kontrolünde gerçekçi trafik akışı</li>
                <li>Trafik kuralları ihlali için eşzamanlı uyarı sistemi</li>
                <li>Ayarlanabilir yoğunlukta araç ve yaya sayısı</li>
                <li>Sık karşılaşılan trafik olayları</li>
              </ul>
            </section>
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-left" data-aos-duration="1500">
            <img src={CarSimulator} className='simulator-image' alt='Otomobil simülatörü' loading='lazy' />
            <img src={MotorcycleSimulator} className='simulator-image' alt='Motosiklet simülatörü' loading='lazy' />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  )
}

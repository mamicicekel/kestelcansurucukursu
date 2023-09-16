import React, {useEffect} from 'react'
import '../questions/Questions.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'
import ControlledAccordions from '../../../components/accordion/Accordion'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Questions() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Header/>
      <PageHeader hasLink prevPageName="Kurumsal" pageName="Sıkça Sorulan Sorular" />
      <main className='main-questions' data-aos="fade-up" data-aos-duration="1500">
        <ControlledAccordions/> 
      </main>
      <Footer/>
    </div>
  )
}

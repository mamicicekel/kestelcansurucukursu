import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'
import ControlledAccordions from '../../../components/accordion/Accordion'

export default function Questions() {
  return (
    <div>
      <Header/>
      <PageHeader hasLink prevPageName="Kurumsal" pageName="Sıkça Sorulan Sorular" />
      <main>
        <ControlledAccordions/> 
      </main>
      <Footer/>
    </div>
  )
}

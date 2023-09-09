import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'

export default function Simulator() {
  return (
    <div>
      <Header/>
        <PageHeader hasLink prevPageName="Kurumsal" pageName="Simülatör" />
      <Footer/>
    </div>
  )
}

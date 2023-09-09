import React from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'

export default function Documents() {
  return (
    <div>
      <Header/>
      <PageHeader hasLink prevPageName="Ehliyet" pageName="Gerekli Belgeler" />
      <Footer/>
    </div>
  )
}

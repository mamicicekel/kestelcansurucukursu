import React from 'react'
import './NotFound.css'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-white.png'

export default function NotFound() {
    return (
        <main className='main-notfound'>
            <Helmet>
                <title>404 Hatası | Kestel Can Sürücü Kursu | Ehliyet Belgesi | Direksiyon Dersi</title>
                <link rel="icon" href="../../../../public/favicon.ico" type="image/x-icon" />
                <meta charset="utf-8"></meta>
                <meta name="google-site-verification" content="nx15mbvdjc893dopADXPgFUIVdhDgeXrDg_jvt_oscA" />
            </Helmet>
            <h1>404</h1>
            <h2>Üzgünüz, aradığınız sayfa maalesef bulunamadı.</h2>
            <Link to="/" className="button">ANASAYFAYA GİT</Link>
            <img src={Logo} className='logo' alt='Kestel Can Sürücü Kursu Logo' loading='lazy' />
        </main>
    )
}

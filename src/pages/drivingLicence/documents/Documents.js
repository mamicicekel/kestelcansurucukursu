import React from 'react'
import '../documents/Documents.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import PageHeader from '../../../components/pageHeader/PageHeader'

export default function Documents() {
  return (
    <div>
      <Header />
      <PageHeader hasLink prevPageName="Ehliyet" pageName="Gerekli Belgeler" />
      <main className='main-container'>
        <div className='section'>
          <h2 className='h2'>Sürücü Kursuna Kayıt İçin Gerekli Evraklar</h2>
          <ul className='ul'>
            <li>2 adet biyometrik fotoğraf</li>
            <li>Öğrenim durum belgesi</li>
            <li>Nüfus cüzdanı fotokopisi</li>
            <li>Sağlık raporu <span className='span'>(Aile hekiminden de alınabilir)</span></li>
          </ul>
        </div>
        <div>
          <h2 className='h2'>Ehliyet İçin Gerekli Evraklar (Kursu Ve Sınavı Başarıyla Tamamladıktan Sonra)</h2>
          <ul className='ul'>
            <li>Kimlik belgesi</li>
            <li>Sürücü Sertifikası <span className='span'>(Elektronik ortamda sistemden kontrol edilmektedir.)</span></li>
            <li>Öğrenim Belgesi, yurtdışından alınan öğrenim belgelerinin noter tasdikli tercümesi <span className='span'>(Aslı)</span></li>
            <li>Sürücü Sağlık Raporu <span className='span'>(Ehliyette kullanılacak)</span></li>
            <li>Sürücü belgesi değerli kâğıt ve harç bedeli, vakıf payı <span className='span'>(Aşağıda tabloda verilmiştir)</span></li>
            <li>1 adet biyometrik fotoğraf <span className='span'>(Geçerlilik süresi 2 sene)</span></li>
            <li>Kan grubunu belirtir belge veya yazılı beyan</li>
            <li>Adli Sicil Belgesi <span className='span'>(Elektronik ortamda sistemden kontrol edilmektedir.)</span></li>
          </ul>
        </div>
        <h2 className='h2'>Sürücü Belgesi Harç, Değerli Kağıt ve Vakıf Ücretleri (Kursu Ve Sınavı Başarıyla Tamamladıktan Sonra)</h2>
        <table>
          <tr>
            <th>Eski Tip (2016 Öncesi Alınan Sürücü Belgeleri) Sürücü Belgelerinin Yenisi İle Değiştirilmesi İşlemlerinde​​​​​​</th>
            <th>Ücret (TL)</th>
          </tr>
          <tr>
            <td>“Vakıf Hizmet Bedeli” Türk Polis Teşkilatını Güçlendirme Vakfı Hesaplarına</td>
            <td>2,00 TL</td>
          </tr>
          <tr>
            <td>“Değerli Kâğıt Bedeli” Vergi Tahsil Yetkisi Verilen Banka Hesaplarına</td>
            <td>3,00 TL</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>Yeni Tip (2016 Sonrası Alınan Sürücü Belgeleri) Sürücü Belgelerinin Yenilenmesi İşlemlerinde​​​​​​​</th>
            <th>Ücret (TL)</th>
          </tr>
          <tr>
            <td>“Vakıf Hizmet Bedeli” Türk Polis Teşkilatını Güçlendirme Vakfı Hesaplarına</td>
            <td>145,00 TL</td>
          </tr>
          <tr>
            <td>“Değerli Kâğıt Bedeli” Vergi Tahsil Yetkisi Verilen Banka Hesaplarına</td>
            <td>624,00 TL</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>İlk Defa Sürücü Belgesi Alımı veya Sınıf Ekleme İşlemleri İçin​</th>
            <th>Ücret (TL)</th>
          </tr>
          <tr>
            <td>“Vakıf Hizmet Bedeli” Türk Polis Teşkilatını Güçlendirme Vakfı Hesaplarına</td>
            <td>145,00 TL</td>
          </tr>
          <tr>
            <td>“Değerli Kâğıt Bedeli” Vergi Tahsil Yetkisi Verilen Banka Hesaplarına</td>
            <td>624,00 TL</td>
          </tr>
          <tr>
            <td>“A, A1, A2, F” sınıfları için (Engelli "A" Sertifikaları da Dahil) Harç Ücreti Vergi Tahsil Yetkisi Verilen Banka Hesaplarına</td>
            <td>825,70 TL</td>
          </tr>
          <tr>
            <td>“B” sınıfı için (Engelli "B" Sertifikaları da Dahil) Harç Ücreti Vergi Tahsil Yetkisi Verilen Banka Hesaplarına</td>
            <td>2.489,90 TL</td>
          </tr>
          <tr>
            <td>“B1, BE, C1, C1E, C, CE, D1, D1E, D, DE, G, M” sınıfları için Harç Ücreti Vergi Tahsil Yetkisi Verilen Banka Hesaplarına</td>
            <td>4.154,70 TL</td>
          </tr>
        </table>
      </main>
      <Footer />
    </div>
  )
}

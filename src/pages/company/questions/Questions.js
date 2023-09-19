import React, { useState, useEffect } from 'react'
import './Questions.css'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import { AiOutlineDown } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../../components/header/Header'
import PageHeader from '../../../components/pageHeader/PageHeader'
import Footer from '../../../components/footer/Footer'

export default function Questions() {

  const qa = [
    {
      question: 'Ehliyet dersleri toplam kaç saattir?',
      answer: 'Trafik 16, Motor 6, İlkyardım 8 ve Trafik Adabı 4 saat olmak üzere toplam 34 saattir.',
      panel: 'panel1',
      ariaControls: 'panel1bh-content',
      id: 'panelbh-header'
    },
    {
      question: 'Ehliyet sınavlarından başarısız olduğumda kaç kez sınava girebilirim?',
      answer: 'Ehliyet sınavlarında ilk 4 defa başarısız olabilirsiniz. Sonrasında 4 sınav hakkı daha kazanabilirsiniz.',
      panel: 'panel2',
      ariaControls: 'panel2bh-content',
      id: 'panel2bh-header'
    },
    {
      question: 'Ehliyet sınavında toplam kaç soru sorulur?',
      answer: 'Trafik ve Çevre Bilgisi 23 soru, Motor  ve Araç Tekniği 9 soru,İlk Yardım Bilgisi 12 soru ve Trafik Adabı 6 soru olmak üzere toplam 50 soru sorulur.',
      panel: 'panel3',
      ariaControls: 'panel3bh-content',
      id: 'panel3bh-header'
    },
    {
      question: 'Ehliyet sınavında toplamda kaç doğru soru çözmem gerekiyor?',
      answer: 'Adayların başarılı olabilmesi için toplam 50 sorudan oluşan yeni müfredat ehliyet sınavından 35 doğruyu cevaplaması ve toplam 70 puan alması gerekmektedir.',
      panel: 'panel4',
      ariaControls: 'panel4bh-content',
      id: 'panel4bh-header'
    },
  ]

  useEffect(() => {
    AOS.init();
  }, [])

  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Header />
      <PageHeader hasLink prevPageName="Kurumsal" pageName="Sıkça Sorulan Sorular" />
      <main className='main-questions' data-aos="fade-up" data-aos-duration="1500">
        <section>
          {qa.map((item, index) => (
            <Accordion key={index} expanded={expanded === item.panel} onChange={handleChange(item.panel)}>
              <AccordionSummary
                expandIcon={<AiOutlineDown color='black' size='20px' />}
                aria-controls={item.ariaControls}
                id={item.id}
              >
                <Typography sx={{ width: '90%', flexShrink: 0, fontWeight: 'bold', color: expanded === item.panel ? 'red' : 'black', fontSize: '20px' }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

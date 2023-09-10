import * as React from 'react';
import '../accordion/Accordion.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { AiOutlineDown } from 'react-icons/ai'

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<AiOutlineDown color='black' size='20px' />}
                    aria-controls="panel1bh-content"
                    id="panelbh-header"
                >
                    <Typography sx={{ width: '90%', flexShrink: 0, fontWeight: 'bold', color: expanded === 'panel1' ? 'red' : 'black', fontSize: '20px' }}>
                        Ehliyet dersleri toplam kaç saattir?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Trafik 16, Motor 6, İlkyardım 8 ve Trafik Adabı 4 saat olmak üzere toplam 34 saattir.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<AiOutlineDown color='black' size='20px' />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '90%', flexShrink: 0, fontWeight: 'bold', color: expanded === 'panel2' ? 'red' : 'black', fontSize: '20px' }}>Ehliyet sınavlarından başarısız olduğumda kaç kez sınava girebilirim?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ehliyet sınavlarında ilk 4 defa başarısız olabilirsiniz. Sonrasında 4 sınav hakkı daha kazanabilirsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<AiOutlineDown color='black' size='20px' />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '90%', flexShrink: 0, fontWeight: 'bold', color: expanded === 'panel3' ? 'red' : 'black', fontSize: '20px' }}>
                        Ehliyet sınavında toplam kaç soru sorulur?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Trafik ve Çevre Bilgisi 23 soru, Motor  ve Araç Tekniği 9 soru,İlk Yardım Bilgisi 12 soru ve Trafik Adabı 6 soru olmak üzere toplam 50 soru sorulur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<AiOutlineDown color='black' size='20px' />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '90%', flexShrink: 0, fontWeight: 'bold', color: expanded === 'panel4' ? 'red' : 'black', fontSize: '20px' }}>Ehliyet sınavında toplamda kaç doğru soru çözmem gerekiyor?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Adayların başarılı olabilmesi için toplam 50 sorudan oluşan yeni müfredat ehliyet sınavından 35 doğruyu cevaplaması ve toplam 70 puan alması gerekmektedir.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
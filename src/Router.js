import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Gallery from './pages/gallery/Gallery'
import About from './pages/company/about'
import Contact from './pages/company/contact'
import Questions from './pages/company/questions'
import Simulator from './pages/company/simulator'
import Vehicles from './pages/company/vehicles'
import Classes from './pages/drivingLicence/classes'
import Documents from './pages/drivingLicence/documents'
import Foreigners from './pages/drivingLicence/foreigners'

function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/araclarimiz" element={<Vehicles />} />
      <Route path="/simulator" element={<Simulator />} />
      <Route path="/sikca-sorulan-sorular" element={<Questions />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="/gerekli-belgeler" element={<Documents />} />
      <Route path="/ehliyet-siniflari" element={<Classes />} />
      <Route path="/yabancilar-icin-ehliyet" element={<Foreigners />} />
      <Route path="/galeri" element={<Gallery />} />
    </Routes>
  );
}

export default Router;

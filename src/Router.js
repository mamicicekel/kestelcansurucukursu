import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import About from './pages/company/about'
import Contact from './pages/company/contact'
import Questions from './pages/company/questions'
import Simulator from './pages/company/simulator'
import Vehicles from './pages/company/vehicles'
import Classes from './pages/drivingLicence/classes'
import Documents from './pages/drivingLicence/documents'
import Foreigners from './pages/drivingLicence/foreigners'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import NotFound from './pages/notFound/NotFound'

function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kurumsal/hakkimizda" element={<About />} />
        <Route path="/kurumsal/araclarimiz" element={<Vehicles />} />
        <Route path="/kurumsal/simulator" element={<Simulator />} />
        <Route path="/kurumsal/sikca-sorulan-sorular" element={<Questions />} />
        <Route path="/kurumsal/iletisim" element={<Contact />} />
        <Route path="/ehliyet/gerekli-belgeler" element={<Documents />} />
        <Route path="/ehliyet/ehliyet-siniflari" element={<Classes />} />
        <Route path="/ehliyet/yabancilar-icin-ehliyet" element={<Foreigners />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;


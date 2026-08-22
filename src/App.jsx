import './styles/sections.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Method from './components/Method'
import RenacerExplanation from './components/RenacerExplanation'
import Journey from './components/Journey'
import AmateSection from './components/AmateSection'
import EnergiaSection from './components/EnergiaSection'
import MagneticaSection from './components/MagneticaSection'
import WhatsInside from './components/WhatsInside'
import ProductShowcase from './components/ProductShowcase'
import Experience from './components/Experience'
import ForYou from './components/ForYou'
import NotThis from './components/NotThis'
import AboutKarla from './components/AboutKarla'
import KarlaFerran from './components/KarlaFerran'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Method />
        <RenacerExplanation />
        <Journey />
        <AmateSection />
        <EnergiaSection />
        <MagneticaSection />
        <WhatsInside />
        <ProductShowcase />
        <Experience />
        <ForYou />
        <NotThis />
        <AboutKarla />
        <KarlaFerran />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}

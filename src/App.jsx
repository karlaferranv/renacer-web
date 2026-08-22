import './styles/sections.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import RenacerExplanation from './components/RenacerExplanation'
import Journey from './components/Journey'
import AmateSection from './components/AmateSection'
import EnergiaSection from './components/EnergiaSection'
import MagneticaSection from './components/MagneticaSection'
import Included from './components/Included'
import ForYou from './components/ForYou'
import HowItWorks from './components/HowItWorks'
import AboutKarla from './components/AboutKarla'
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
        <Intro />
        <RenacerExplanation />
        <Journey />
        <AmateSection />
        <EnergiaSection />
        <MagneticaSection />
        <Included />
        <ForYou />
        <HowItWorks />
        <AboutKarla />
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

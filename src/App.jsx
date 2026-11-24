import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Destinations from './components/Destinations';
import Plans from './components/Plans';
import Hotel from './components/Hotel';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Benefits />
        <Destinations />
        <Plans />
        <Hotel />
        <Testimonials />
        <Faq />
        <BookingForm />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}

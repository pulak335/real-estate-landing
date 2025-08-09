import Header from './components/Header';
import Hero from './components/Hero';
import PropertySearch from './components/PropertySearch';
import CitySection from './components/CitySection';
import PropertyTypeSection from './components/PropertyTypeSection';
import Properties from './components/Properties';
import Agents from './components/Agents';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (

    <div className="min-h-screen bg-gray-100">
      <Hero />
      <PropertySearch />
      <CitySection />
      <PropertyTypeSection />
      <Properties />
      <Agents />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>

  );
}

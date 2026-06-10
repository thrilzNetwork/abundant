import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  );
}

'use client';

import ConsultingBenefits from '@/components/organisms/Benefits';
import BusinessConsultingIntro from '@/components/organisms/BussinessIntro';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import ProductsSection from '@/components/organisms/Products';
import ServicesSection from '@/components/organisms/Services';
import TestimonialSlider from '@/components/organisms/Testimonial';

export default function Home() {
  return (
    <main className='bg-black'>
      <Navbar />
      <HeroSection />
      <BusinessConsultingIntro />
      <ConsultingBenefits />
      <ServicesSection />
      <ProductsSection />
      <TestimonialSlider />
      <Footer />
    </main>
  );
}

import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import HeroLanding from '@/components/HeroLanding';
import DiscountAndFeatures from '@/components/DiscountAndFeatures';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/Footer';
import ActionButtons from '@/components/ActionButtons';
import FacebookPixel from '@/components/FacebookPixel';
import ProcessCards from '@/components/ProcessCards';
import HearingAidsTypes from '@/components/HearingAidsTypes';
import BrandSlider from '@/components/BrandSlider';
import Schedule from '@/components/Schedule';

const Index = () => {

  useEffect(() => {
    // Activate reveal animations on scroll
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-clinic-secondary via-white to-clinic-secondary">
      <FacebookPixel />
      {/* <ScrollToTop /> */}
      {/* <PriceSticker /> */}
      <Navbar />
      <HeroLanding />
      <DiscountAndFeatures />
      <AppointmentForm />
      <BrandSlider />
      <ProcessCards />
      <HearingAidsTypes />
      <Schedule />
      <Footer />
      <ActionButtons />
      <Toaster />
    </div>
  );
};

export default Index;

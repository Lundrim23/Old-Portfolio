import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactBanner from "../components/ContactBanner";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactBanner />
    </div>
  );
}

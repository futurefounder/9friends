import Image from "next/image";
import BookingCal from "./components/BookingCal";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import React from "react";
import Link from "next/link";
import BookingCards from "./components/BookingCards";
import DefaultNavbar from "./components/DefaultNavbar";
import StickyBanner from "./components/StickyBanner";

export default function Home() {
  return (
    <div>
      <div>
        <Navigation />
        <Hero />
        <Testimonials />
        {/* <BookingCards /> */}
        <StickyBanner />
        <Benefits />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

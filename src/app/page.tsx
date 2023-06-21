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

export default function Home() {
  return (
    <div>
      <div>
        <Navigation />
        <Hero />
        <BookingCards />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

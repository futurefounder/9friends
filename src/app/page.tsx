import Image from "next/image";
import BookingCal from "./components/BookingCal";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import React from "react";

// import Lottie from "lottie-react";
// import Yoga from "./lottie/53880-yoga";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <BookingCal />
      <Benefits />
      <FAQ />
      {/* <Lottie animationData={Yoga} loop={true} /> */}
      <Footer />
    </div>
  );
}

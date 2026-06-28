"use client";

import Navbar from "@/components/leaders/navbar";
import Hero from "@/components/leaders/hero";
import Services from "@/components/leaders/services";
import About from "@/components/leaders/about";
import Sectors from "@/components/leaders/sectors";
import Partners from "@/components/leaders/partners";
import Clients from "@/components/leaders/clients";
import Contact from "@/components/leaders/contact";
import Footer from "@/components/leaders/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Sectors />
        <Partners />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
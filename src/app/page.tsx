"use client";
import HeroWrapper from "@/components/HeroWrapper";
import Loader from "@/components/Loader";
import Task from "@/components/banners/Task";
import Update from "@/components/banners/Update";
import Navbar from "@/components/navbar/Navbar";
import ToTopButton from "@/components/totop/ToTopButton";
import About from "@/components/ui/About";
import Campaigns from "@/components/ui/Campaigns";
import Contact from "@/components/ui/Contact";
import Donate from "@/components/ui/Donate";
import Events from "@/components/ui/Events";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import { Volunteer } from "@/components/ui/Volunteer";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <HeroWrapper>
            <Navbar />
            <Hero />
          </HeroWrapper>
          <Task />
          <About />
          <Campaigns />
          <Update />
          <Volunteer />
          <Donate />
          <Events />
          <Contact />
          <ToTopButton />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

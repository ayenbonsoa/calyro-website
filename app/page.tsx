import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";  
import Calculator from "./components/Calculator";
import Process from "./components/Process"
import Testimonies from "./components/Testimonies";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="items-center justify-center text-black">
      <div className="w-full h-52 flex justify-center" style={{ backgroundImage: "url('/images/navbar-bg.svg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <Navbar />
      </div>
      <Hero />
      <Trust />

      <Process />
      <Testimonies />
      <CTA />
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Team from "@/components/Team";
import Organizers from "@/components/Organizers";
import FAQ from "@/components/FAQ";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <FAQ />
      
      <Registration />
      <Organizers />
      <Team/>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;

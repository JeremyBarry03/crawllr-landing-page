import { Hero } from "./components/Hero";
import { Screenshots } from "./components/Screenshots";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a2528] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-120px] left-[-180px] w-[480px] h-[480px] bg-[#ba185e] rounded-full opacity-20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-200px] w-[480px] h-[480px] bg-[#ffc759] rounded-full opacity-15 blur-[100px] pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Screenshots />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
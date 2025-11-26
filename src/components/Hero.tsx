import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  const scrollToBeta = () => {
    document.getElementById("beta-signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="container mx-auto px-4 py-20 md:py-32 relative">
      {/* iPhone Mockup Background - positioned behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 blur-[2px] scale-110">
        <PhoneMockup />
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-block px-4 py-2 bg-white/[0.05] border border-white/[0.08] rounded-full text-[#ffc759] tracking-wide">
          Coming Soon
        </div>
        
        <h1 className="text-5xl md:text-7xl tracking-tight text-white leading-[1.1]">
          Map Your Adventures
        </h1>
        
        <p className="text-xl md:text-2xl text-[#babfd1] max-w-2xl mx-auto">
          Crawllr is a social network where going on adventures and showing your friends is automatic.
        </p>
        
        <p className="text-lg text-[#9ba4b5] max-w-xl mx-auto">
          Think a combination of Strava, Instagram, and Yelp
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#ba185e] to-[#a31454] hover:from-[#a31454] hover:to-[#8c1049] text-white text-lg px-8 shadow-lg shadow-[#ba185e]/30"
            onClick={scrollToBeta}
          >
            Join Beta Waitlist
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="pt-12 text-[#9ba4b5]">
          <p>Become an early adopter</p>
        </div>
      </div>
    </section>
  );
}
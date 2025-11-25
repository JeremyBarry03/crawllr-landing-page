import { Button } from "./ui/button";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export function CTA() {
  const benefits = [
    "Early access to exclusive features",
    "Help shape the future of social mapping",
    "Connect with fellow explorers",
    "Priority support from our team",
  ];

  return (
    <section
      id="beta-signup"
      className="container mx-auto px-4 py-20"
    >
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1f2d32] to-[#26363d] border border-white/[0.08] rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#ba185e] rounded-full opacity-15 blur-[80px] pointer-events-none" />

        <div className="relative z-10 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl tracking-tight">
            Be Among the First
          </h2>
          <p className="text-xl text-[#babfd1] max-w-2xl mx-auto">
            Join our exclusive beta program and help shape the
            future of social connection. Limited spots
            available!
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left pt-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-[#babfd1]"
              >
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#ffc759]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#ba185e] to-[#a31454] hover:from-[#a31454] hover:to-[#8c1049] text-white text-lg px-10 shadow-lg shadow-[#ba185e]/30"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfdo9Uehc_b3dwqagSmsZ7QWuqeKOgd4Cu5wf51S-kseYHmlA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up for Beta Access
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <p className="mt-4 text-[#9ba4b5]">
              Takes less than 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
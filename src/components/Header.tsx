import { Button } from "./ui/button";

export function Header() {
  const scrollToBeta = () => {
    document.getElementById("beta-signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1f2d32]/90 backdrop-blur-sm border-b border-white/[0.08]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Crawllr Logo"
              className="h-10 w-10"
            />
            <span className="text-2xl text-white tracking-tight">
              Crawllr
            </span>
          </div>

          <Button
            className="bg-gradient-to-r from-[#ba185e] to-[#a31454] hover:from-[#a31454] hover:to-[#8c1049] text-white shadow-lg shadow-[#ba185e]/30"
            onClick={scrollToBeta}
          >
            Join Beta
          </Button>
        </div>
      </div>
    </header>
  );
}

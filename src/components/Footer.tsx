import logo from "/images/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#1f2d32]/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-8"
            />
            <div className="text-center md:text-left">
              <p className="text-[#babfd1]">
                © 2025 Crawllr. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

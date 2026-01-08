export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#1f2d32]/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Crawler App LLC"
                width={20}
                height={20}
                className="h-5 w-5 shrink-0"
              />
              <p className="text-sm text-[#babfd1]">
                © 2025 Crawler App LLC. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#babfd1]">
              <a className="transition-colors hover:text-white" href="/privacy/index.html">
                Privacy Policy
              </a>
              <span className="text-white/30">|</span>
              <a className="transition-colors hover:text-white" href="/help/index.html">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

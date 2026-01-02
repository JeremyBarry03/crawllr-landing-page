import { Hero } from "./components/Hero";
import { Screenshots } from "./components/Screenshots";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ShareProfilePage } from "./components/ShareProfilePage";
import { ShareCrawlPage } from "./components/ShareCrawlPage";

const resolvePathname = () => {
  if (typeof window === "undefined") return "/";
  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get("redirect");
  if (redirectPath) {
    const decoded = decodeURIComponent(redirectPath);
    window.history.replaceState({}, "", decoded);
    return decoded;
  }
  return window.location.pathname;
};

const normalizeSharedPath = (pathname: string) => {
  const basePath = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
  return basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname;
};

const matchSharedProfile = (pathname: string) => {
  const normalized = normalizeSharedPath(pathname);
  const match = normalized.match(/^\/user\/([^/?#]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
};

const matchSharedCrawl = (pathname: string) => {
  const normalized = normalizeSharedPath(pathname);
  const match = normalized.match(/^\/crawl\/([^/?#]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
};

export default function App() {
  const pathname = resolvePathname();
  const sharedUserId = matchSharedProfile(pathname);
  const sharedCrawlId = matchSharedCrawl(pathname);

  if (sharedUserId) {
    return <ShareProfilePage userId={sharedUserId} />;
  }
  if (sharedCrawlId) {
    return <ShareCrawlPage crawlId={sharedCrawlId} />;
  }

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

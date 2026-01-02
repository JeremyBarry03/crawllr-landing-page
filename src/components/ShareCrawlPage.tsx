import { useEffect, useMemo } from "react";

type ShareCrawlPageProps = {
  crawlId: string;
};

const buildDeepLink = (crawlId: string) =>
  `crawllr://crawl/${encodeURIComponent(crawlId)}`;

export const ShareCrawlPage = ({ crawlId }: ShareCrawlPageProps) => {
  const deepLink = useMemo(() => buildDeepLink(crawlId), [crawlId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = deepLink;
    }, 120);
    return () => clearTimeout(timer);
  }, [deepLink]);

  return (
    <div className="min-h-screen bg-[#1a2528] relative overflow-hidden">
      <div className="absolute top-[-120px] left-[-180px] w-[480px] h-[480px] bg-[#ba185e] rounded-full opacity-20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-200px] w-[480px] h-[480px] bg-[#ffc759] rounded-full opacity-15 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12 text-white">
        <div className="w-full max-w-md rounded-[24px] border border-white/10 bg-white/10 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
            <img
              src="/images/logo.png"
              alt="Crawllr"
              className="h-10 w-10"
            />
          </div>
          <h1 className="text-2xl font-semibold">Open in Crawllr</h1>
          <p className="mt-3 text-sm text-white/80">
            We&apos;re opening this crawl in the app. If nothing happens,
            tap below.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={deepLink}
              className="inline-flex items-center justify-center rounded-full bg-[#ba185e] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#a31454]"
            >
              Open in app
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get the app
            </a>
          </div>

          <p className="mt-6 text-xs text-white/60">
            You can come back here if the app doesn&apos;t open.
          </p>
        </div>
      </div>
    </div>
  );
};

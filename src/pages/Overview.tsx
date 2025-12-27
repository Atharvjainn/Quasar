import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Overview = () => {
  const overviewPdf = encodeURI("/Quasar x AI 2026 .pdf");
  // There is a single combined PDF with both Overview and Problem Statements
  const combinedPdf = overviewPdf;
  const iframeSrc = `${combinedPdf}#toolbar=0&navpanes=0&scrollbar=0`;

  const [loading, setLoading] = useState(true);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null;
    if (loading) {
      setTimedOut(false);
      t = setTimeout(() => setTimedOut(true), 10000); // 10s
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto py-24 mt-10 pt-28">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold font-sans">Overview & Problem Statements</h1>
        </div>

        <div className="mx-auto max-w-4xl text-center p-8">
          <p className="text-lg text-muted-foreground mb-6">
            Download the hackathon overview and problem statement details. You can preview the overview PDF below or download it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href={combinedPdf} target="_blank" rel="noreferrer" download className="w-full sm:w-auto overflow-hidden">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 py-4 sm:py-3 w-full sm:w-auto break-words">Download Overview & Problem Statements</Button>
            </a>
          </div>

          <div className="glass rounded-lg overflow-hidden h-[70vh] relative">
            {/* Loading overlay */}
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-20 text-white">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4" aria-hidden="true" />
                <div className="text-sm">Loading preview...</div>
                {timedOut && (
                  <div className="text-xs mt-2 text-muted-foreground">If the preview doesn't load, try downloading the PDF.</div>
                )}
              </div>
            )}

            <iframe
              src={iframeSrc}
              title="Quasar x AI 2026 Overview"
              className="w-full h-full border-0"
              allowFullScreen
              onLoad={() => setLoading(false)}
            />
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            If a PDF does not load in the preview, try downloading it directly using the button above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;

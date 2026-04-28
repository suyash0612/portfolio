"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalBooking() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="booking" className="w-full py-20 md:py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest">
            Let&apos;s Talk
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Schedule a Meeting
          </h2>
          <p className="text-white/60 text-base max-w-md mx-auto">
            Pick a time that works for you — 15 minutes is all we need.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 overflow-hidden">
          <Cal
            namespace="15min"
            calLink="suyash0612/15min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{
              layout: "month_view",
              useSlotsViewOnSmallScreen: "true",
              theme: "light",
            }}
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingCal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        // theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);
  return (
    <Cal
      calLink="hi-jesse/9friends-yoga-fhain"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
}

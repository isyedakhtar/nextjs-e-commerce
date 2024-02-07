"use client";
import { engage } from "./engage";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const CDPPageView = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (engage !== undefined) {
      sendPageViewEvent();
    }
  }, [pathname]);

  const sendPageViewEvent = async () => {
    await engage.pageView({
      channel: "WEB",
      currency: "AUD",
    });
  };

  return <></>;
};

export default CDPPageView;

import { Engage, init } from "@sitecore/engage";
let engage: Engage;
const clientKey = process.env.NEXT_PUBLIC_CDP_CLIENT_KEY;
const targetUrl = process.env.NEXT_PUBLIC_CDP_TARGET_URL;
const pos = process.env.NEXT_PUBLIC_CDP_POS;
const cookieDomain = process.env.NEXT_PUBLIC_CDP_COOKIE_DOMAIN;
const engageEnabled = process.env.NEXT_PUBLIC_CDP_ENGAGE_ENABLED === "true";
const loadEngage = async () => {
  console.log(engageEnabled);
  if (engageEnabled) {
    console.log("Enabled");
    engage = await init({
      clientKey: clientKey ? clientKey : "",
      targetURL: targetUrl ? targetUrl : "",
      pointOfSale: pos,
      cookieDomain: cookieDomain,
      cookieExpiryDays: 365,
      forceServerCookieMode: false,
      includeUTMParameters: true,
      webPersonalization: false,
    });
  }
};
loadEngage();
export { engage };

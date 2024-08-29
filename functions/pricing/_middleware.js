class ElementHandler {
  constructor(coupon) {
      this.coupon = coupon;
  }

  element(element) {
      element.setAttribute("class", "pricing-discount-offer yellow");
      element.append(
        `<span>For a limited time, get <u><strong>15% off</strong></u> any license with coupon code <u><strong>` + 
        this.coupon + 
        `</strong></u>.</span>`,
        {html: true});
  }
}

function hashCode(str) {
  var hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

const coupons = ["748939B9", "09C68ADA", "F5E5107A", "39CAB9DE", "5E968143", "7E09EEC3", "3DF881A0", "A42343E8", "30D97460", "856D1AF3"];

const countryMap = {
  EE: 'Estonia', //<--- uncomment for debug
  IN: 'India',
  ID: 'Indonesia',
  BD: 'Bangladesh',
  TH: 'Thailand',
  PK: 'Pakistan'
};

const COOKIE_NAME = "__pppXpks";

const handler = async ({request, next}) => {
    const response = await next();
    try {
        const country = request.cf.country;
        if (country in countryMap) {
            const url = new URL(request.url);

            /*
            // uncomment for DEBUG
            if ((country == "EE") && 
                (url.searchParams.get("debug_ppp") !== "1") && 
                (request.headers.get("Host") !== "xpiksapp.com")) { return response; }
            */

            const cookie = request.headers.get("Cookie");
            const percentage = Math.floor(Math.random() * 100);
            const forceShow = cookie && cookie.includes(`${COOKIE_NAME}=show`);
            const showBanner = forceShow || (percentage <= 50);

            if (!showBanner) {
                console.log("Not showing banner by random choice " + percentage);
                // but will show for sure next time
                response.headers.append("Cache-Control", "no-cache, no-store, must-revalidate");
                response.headers.append("Set-Cookie", `${COOKIE_NAME}=show; Path=/pricing; Max-Age=1209600`);
                return response;
            }

            const clientIP = request.headers.get("CF-Connecting-IP");
            let couponIndex = 0;
            if (typeof clientIP === "string" && clientIP.trim().length === 0) {
                console.log("CF-Connecting-IP is empty");
                couponIndex = Math.floor(Math.random()*coupons.length);
            } else {
                couponIndex = hashCode(clientIP) % coupons.length;
                if (couponIndex < 0) { couponIndex += coupons.length; }
            }
            console.log("Using coupon from index " + couponIndex);
            const coupon = coupons[couponIndex];

            response.headers.append("Cache-Control", "no-cache, no-store, must-revalidate");
            response.headers.append("Last-Modified", new Date().toUTCString());
            // since we're showing this time, next time will be "maybe" for 1 week (after it expires, we will have the "show" cookie)
            response.headers.append("Set-Cookie", `${COOKIE_NAME}=maybe; Path=/pricing; Max-Age=604800`);
            return new HTMLRewriter().on('div#price-parity-offer', new ElementHandler(coupon)).transform(response);
        } else {
            return response;
        }
    } catch (error) {
        console.log(error);
        response.headers.append("Cache-Control", "no-cache, no-store, must-revalidate");
        return response;
    }
};
  
export const onRequest = [handler];
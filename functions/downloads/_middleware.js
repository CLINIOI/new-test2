const countryMap = {
  EE: 'Estonia', // <--- uncomment for debug
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
            const cookie = request.headers.get("Cookie");
            if (cookie && cookie.includes(`${COOKIE_NAME}=`)) {
                // BUMP
            } else {
                // "show" cookie is set for 2 weeks
                response.headers.append("Set-Cookie", `${COOKIE_NAME}=show; Path=/; Max-Age=1209600`);
            }
        }
    } catch (error) {
        console.error(error);
    } finally {
        return response;
    }
};
  
export const onRequest = [handler];
import { errorHandling, telemetryData } from '../utils/middleware';

export const onRequest = [errorHandling, telemetryData];

// let Referer = request.headers.get('Referer') || "Referer"
// let refererUrl = new URL(Referer)
// if(!allowedDomains.includes(refererUrl.hostname)){
//     return Response.redirect("https://img.131213.xyz/asset/image/blocked.png", 302);
// }

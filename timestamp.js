const sunsetTimestamp = 1709083364;
const sunsetDate = new Date(sunsetTimestamp * 1000);
const utcSunsetTime = sunsetDate.toUTCString();
const localSunsetTime = new Date(sunsetDate.getTime() + (5.5 * 60 * 60 * 1000));
const formattedLocalSunsetTime = localSunsetTime.toLocaleString();
console.log("Sunset time in Jaipur:", formattedLocalSunsetTime);
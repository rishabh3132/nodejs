// const sunsetTimestamp = 1709169706;
// const sunsetDate = new Date(sunsetTimestamp * 1000);
// const utcSunsetTime = sunsetDate.toUTCString();
// const localSunsetTime = new Date(sunsetDate.getTime() + (5.5 * 60 * 60 * 1000));
// const formattedLocalSunsetTime = localSunsetTime.toLocaleString();
// console.log("Sunset time in Jaipur:", formattedLocalSunsetTime);

const timestamp = 1709169706;
const utcDate = new Date(timestamp * 1000);
const indiaOffset = 5.5 * 60 * 60 * 1000;
const indiaDate = new Date(utcDate.getTime() + indiaOffset);
const formattedDate = indiaDate.toISOString();
console.log("UTC Time:", utcDate.toISOString());
console.log("India Time:", formattedDate);
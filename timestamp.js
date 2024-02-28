// Unix timestamp for sunset
const sunsetTimestamp = 1709083364;

// Convert Unix timestamp to milliseconds (JavaScript uses milliseconds)
const sunsetDate = new Date(sunsetTimestamp * 1000);

// Get the UTC sunset time
const utcSunsetTime = sunsetDate.toUTCString();

// Adjust for the timezone offset of Jaipur, India (+5:30)
const localSunsetTime = new Date(sunsetDate.getTime() + (5.5 * 60 * 60 * 1000));

// Format the local sunset time
const formattedLocalSunsetTime = localSunsetTime.toLocaleString();

console.log("Sunset time in Jaipur:", formattedLocalSunsetTime);

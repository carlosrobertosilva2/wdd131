// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Calculate wind chill
  function calculateWindChill(temp, windSpeed) {
    return temp <= 50 && windSpeed > 3 
      ? Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16))
      : "N/A";
  }
  
  const temp = 82;
  const windSpeed = 8;
  document.querySelector('.weather-box p:nth-of-type(3)').textContent = 
    `Wind Chill: ${calculateWindChill(temp, windSpeed)}`;
});

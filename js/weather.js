(function() {
  var weatherText = document.getElementById('weather-text');
  var weatherIcon = document.querySelector('#topbar-weather i');
  if (!weatherText) return;

  // Use wttr.in API - format: condition code + temperature (Shenzhen)
  fetch('https://wttr.in/Shenzhen?format=%C|%t')
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      var parts = data.trim().split('|');
      var condition = parts[0] ? parts[0].toLowerCase() : '';
      var temp = parts[1] ? parts[1].trim() : '--';

      // Update temperature text
      weatherText.textContent = temp;

      // Update icon based on condition
      if (weatherIcon) {
        var iconClass = 'fa fa-cloud'; // default
        if (condition.includes('sun') || condition.includes('clear')) {
          iconClass = 'fa fa-sun-o';
        } else if (condition.includes('rain') || condition.includes('drizzle')) {
          iconClass = 'fa fa-tint';
        } else if (condition.includes('snow')) {
          iconClass = 'fa fa-snowflake-o';
        } else if (condition.includes('thunder') || condition.includes('storm')) {
          iconClass = 'fa fa-bolt';
        } else if (condition.includes('fog') || condition.includes('mist')) {
          iconClass = 'fa fa-low-vision';
        } else if (condition.includes('cloud') || condition.includes('overcast')) {
          iconClass = 'fa fa-cloud';
        }
        weatherIcon.className = iconClass;
      }
    })
    .catch(function() {
      weatherText.textContent = '--';
    });
})();

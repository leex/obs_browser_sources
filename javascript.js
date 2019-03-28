(function ($) {
    "use strict"; // Start of use strict
    
    (function getTemperatures() {

        function populateWeatherPanel(temp_max, temp_min) {
            $('#temp_max').text("H " + temp_max + "°");
            $('#temp_min').text("L " + temp_min + "°");
        }

        window.callBackLocalWeather = function(json) {
            var temp_max = json.days[0].max;
            var temp_min = json.days[0].min;

            populateWeatherPanel(temp_max, temp_min);
          }
          
          $.ajax({
            url: "https://whklive.co.nz/local_forecast_today.json",
            dataType: "jsonp"
          });

    })();

})(jQuery); // End of use strict

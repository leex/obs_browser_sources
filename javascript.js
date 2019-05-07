(function ($) {
    "use strict"; // Start of use strict
    
    (function getTemperatures() {

        function populateWeatherPanel(temp_max, temp_min) {
            $('#temp_max').text("H" + temp_max + "°");
            $('#temp_min').text("L" + temp_min + "°");
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
    "use strict"; // Start of use strict

    (function getTime() {

        function startTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            // h = checkTime(h);
            m = checkTime(m);
            s = checkTime(s);
            var time_now = h + ":" + m + ":" + s;
            $('#time').text(time_now);
            var t = setTimeout(startTime, 1000);
        }
        function checkTime(i) {
            if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
            return i;
        }

        startTime();

    })();

})(jQuery); // End of use strict

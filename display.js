var weatherData = {'str':97};
function startTime() {
    console.log("AAAAAA");
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12;
    m = checkTime(m);
    s = checkTime(s);
//    document.getElementById('time').innerHTML =
//    h + ":" + m + ":" + s + ' ' + ampm;
    document.getElementById('time').innerHTML =
    h + ":" + m + ampm;
//    var t = setTimeout(startTime, 500);
    
        //API key: 1450592f41d5c8cd
    $(document).ready(function(){
        console.log("BBBBBB");
//        $.get("http://api.wunderground.com/api/1450592f41d5c8cd/conditions/q/TX/Dallas.json", function(data, status){
//            console.log(data);
//            return data;
//        });
    });
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.addEventListener("DOMContentLoaded", function() {
//  you_function(...);
//    console.log("CCCCCCC");
        weatherData = null;
         $.get("http://api.wunderground.com/api/1450592f41d5c8cd/conditions/q/TX/Dallas.json", function(data, status){
                console.log("CCCCCCC");
            //console.log(data);
            weatherData = data;
            console.log(weatherData);
             
             console.log(weatherData.current_observation.temp_f);
             
             document.getElementById('temp_f').innerHTML = Math.floor(weatherData.current_observation.temp_f)+"&deg;";
        });
    
        forecastData = null;
         $.get("http://api.wunderground.com/api/1450592f41d5c8cd/forecast/q/TX/Dallas.json", function(data, status){
                console.log("DDDDDDD");
            //console.log(data);
            forecastData = data;
            console.log(forecastData);
             
             document.getElementById('forecast_high_low').innerHTML = "H " + Math.floor(forecastData.forecast.simpleforecast.forecastday[0].high.fahrenheit) + "&deg;" + " - L " + Math.floor(forecastData.forecast.simpleforecast.forecastday[0].low.fahrenheit) + "&deg;";
        });
    
        
});


////API key: 1450592f41d5c8cd
//function getWeather() {
////$(document).ready(function(){
//    console.log("BBBBBB");
////    $.get("http://api.wunderground.com/api/1450592f41d5c8cd/conditions/q/TX/Dallas.json", function(data, status){
//////        alert("Data: " + data + "\nStatus: " + status);
////        console.log(data);
////    });
////});
//}

console.log(weatherData);
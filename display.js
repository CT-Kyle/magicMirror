var weatherData;
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
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s + ' ' + ampm;
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
    console.log("CCCCCCC");
         $.get("http://api.wunderground.com/api/1450592f41d5c8cd/conditions/q/TX/Dallas.json", function(data, status){
            //console.log(data);
            weatherData = data;
        });
console.log(weatherData);
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
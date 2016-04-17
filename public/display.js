var weatherData = {'str':97};
worldnewsData = null;
var brushing = false;
function startTime() {
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
    var t = setTimeout(startTime, 500);
    
        //API key: 1450592f41d5c8cd
    $(document).ready(function(){
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
    weatherData = null;
     $.get("http://api.wunderground.com/api/1450592f41d5c8cd/conditions/q/TX/Dallas.json", function(data, status){
        //console.log(data);
        weatherData = data;
        console.log(weatherData);

        document.getElementById('weather_icon').crossOrigin = "Anonymous";

        weatherIcon = weatherData.current_observation.icon_url;
        document.getElementById('weather_icon').src = weatherIcon;
        console.log(document.getElementById('weather_icon').src);
         
         console.log(weatherData.current_observation.temp_f);
         
         document.getElementById('temp_f').innerHTML = Math.floor(weatherData.current_observation.temp_f)+"&deg;";
    });

    forecastData = null;
     $.get("http://api.wunderground.com/api/1450592f41d5c8cd/forecast/q/TX/Dallas.json", function(data, status){
        //console.log(data);
        forecastData = data;
        console.log(forecastData);
         
         document.getElementById('forecast_high').innerHTML = "H " + Math.floor(forecastData.forecast.simpleforecast.forecastday[0].high.fahrenheit) + "&deg;";
         document.getElementById('forecast_low').innerHTML =  "L " + Math.floor(forecastData.forecast.simpleforecast.forecastday[0].low.fahrenheit) + "&deg;";
    });
})

        // worldnewsData = null;
        // $.get("https://www.reddit.com/r/worldnews/hot.json?limit=1", function(data, status){
        //     console.log("REDDIT REQUEST");
        //     worldnewsData = data;
        //     console.log(worldnewsData);

        //     document.getElementById('reddit').innerHTML =  worldnewsData.data.children[0].data.title;
        // });
function goReddit() {
    $.get("https://www.reddit.com/r/showerthoughts/hot.json?limit=10", function(data, status){
        worldnewsData = data;
    }); 
}

function updateDisplay(){
        var randNum = Math.floor(Math.random() * 9);
        document.getElementById('reddit').innerHTML =  worldnewsData.data.children[randNum].data.title;
}
    
// });

$(document).ready( function() {
    // socket stuff
    console.log('socket connecting...');
    var socket = io();
    
    socket.on('lighting', function(data) {
        console.log(data.level);
        if (data.level === 'DARK' || data.level == 'DIM') {
            $('body').addClass('dfw-hide');
        } else {
            $('body').removeClass('dfw-hide');
        }
    });

    socket.on('press', function(data) {
        console.log('press', data.status)
        var status = data.status;
        if (status === 'ON') {
            brushing = !brushing;
            if (brushing) {
                console.log('Now brushing!')
                $('.dfw-home').addClass('dfw-hide');
                $('.dfw-teeth').removeClass('dfw-hide');
                countdownTimer('#dfw-teeth-timer', 2, 0);
            } else {
                console.log('Done brushing!')
                $('.dfw-teeth').addClass('dfw-hide');
                $('.dfw-home').removeClass('dfw-hide');
                stopTimer();
            }
        }
    });

    // reddit stuff
    goReddit();
    var randNum = Math.floor(Math.random() * 9);
    setInterval(function() {
        randNum = Math.floor(Math.random() * 9) + 1;
        $('.reddit').text(
            "\"" + worldnewsData.data.children[randNum].data.title + "\"");
    }, 10000);
});

function countdownTimer( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "countdown's over!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}


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

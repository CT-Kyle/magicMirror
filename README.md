# magicMirror

## Description:
Equipped with motion, light, and weight sensors to turn the classic "Magic Mirror" into a smart mirror for your bathroom. This mirror will activate when you turn on your bathroom light then when you grab your toothbrush a timer starts on the mirror display so that you brush a full 2 minutes!

## Inspiration:
There are plenty of smart technologies in other parts of the home such as the kitchen or laundry room. These technologies are becoming more and more ubiquitous and we thought "how can we make the bathroom a more pleasant experience through the use of smart technology". Because of that, we decided to build a "Magic Mirror" that would display basic information for you to start your day and would respond to what you were doing in the bathroom

## How it Was Made:
We created the magic mirror itself applying a one-way mirror film on a sheet of acrylic which we mounted ontop of a monitor. All of this was housed in a wooden housing with frame. The light from the monitor shines through and the user also sees his reflection in the screen. We designed the UI with JS, HTML5, and CSS3 and hosted it on a local server. We used an arduino uno for inputing sensor data. For our initial prototype we used a light sensor to detect when the user enters the bathroom and turns the light on, turning on the UI. We also mounted a force sensor in a cup for the toothbrush. When the user removes the toothbrush, the mirror senses it and starts a 2 minutes countdown timer so that the user brushes their teeth for the correct amount of time! A socket connection was setup using Node.JS to communicate from the arduino to a raspberry pi (or laptop). The pi (or laptop) processes the arduino output with a python script and changes the UI.

## Built With: 
### Code
Javascript, HTML5, CSS3, Arduino, Python, Node.JS
### Hardware
arduino uno, raspberry pi 2, force sensor, photosensor, motion sensor

## Thanks for reading!


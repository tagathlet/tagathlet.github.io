"use strict"

let x = 1;

function getTime(){
	const date = new Date();
	document.getElementById("seconds").innerHTML = (date.getSeconds() > 9) ? date.getSeconds():"0" + date.getSeconds();
	document.getElementById("minutes").innerHTML = (date.getMinutes() > 9) ? date.getMinutes():"0" + date.getMinutes();
	document.getElementById("hours").innerHTML = (date.getHours() > 9) ? date.getHours():"0" + date.getHours();
	console.log(`${hours}:${minutes}:${seconds}`);
	setTimeout(console.clear, 950)
}
setInterval(getTime, 1000);
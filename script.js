var time  = 0

function getAccel() {
	var text = document.getElementById("Access");
	DeviceMotionEvent.requestPermission().then(response => {
		if (response == 'granted') {
		    console.log("accelerometer permission granted");
		    text.innerHTML = "Access Granted!";
		}
    	});
}

function recordAccel() {
	//Time();
	//console.log("start = " + time);
	window.addEventListener('devicemotion',(event) => {
		var y = 1
		//var interval = (time)
		console.log(event.acceleration.y);
		y = Math.round((event.acceleration.y) * 100) / 100
		var text = document.getElementById("Accel");
		text.innerHTML = y + " m/s^2 at " + time + "seconds"
    	});
	console.log("end")
	while (true) {
		console.log("hi")
	}
}

//function Time() {
//	time += .1
//	console.log(time)
//	setTimeout(Time(), 100);
//}

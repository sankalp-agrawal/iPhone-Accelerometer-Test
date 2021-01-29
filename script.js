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
	time();
	console.log("start = " + time);
	window.addEventListener('devicemotion',(event) => {
		var y = 1
		var interval = (time)
		console.log(event.acceleration.y + " " + time);
		var timeString = interval.toString();
		y = Math.round((event.acceleration.y) * 100) / 100
		var text = document.getElementById("Accel");
		text.innerHTML = y + " m/s^2 at " + timeString + "seconds"
    	});
}

function time() {
	time += 10
	setTimeout(time(), 10);
}

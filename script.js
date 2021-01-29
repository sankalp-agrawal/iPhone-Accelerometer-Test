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
	var start = time();
	console.log("start = " + start);
	window.addEventListener('devicemotion',(event) => {
		var y = 1
		var interval = (time() - (start))
		console.log(event.acceleration.y + " " + interval);
		var timeString = interval.toString();
		y = Math.round((event.acceleration.y) * 100) / 100 + timeString
		var text = document.getElementById("Accel");
		text.innerHTML = y + " m/s^2"
    	});
}

function time() {
	var d = new Date();
	return d.getTime();
}

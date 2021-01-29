var d = new Date();
var start = 0

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
	startTimer();
	console.log("start = " + start);
	window.addEventListener('devicemotion',(event) => {
		var y = 1
		var interval = (time() - start)
		console.log(event.acceleration.y + " " + time() + " " + start);
		var timeString = interval.toString();
		y = Math.round((event.acceleration.y) * 100) / 100
		var text = document.getElementById("Accel");
		text.innerHTML = y + " m/s^2 at " + timeString + "seconds"
    	});
}

function startTimer() {
	start = time();
}
function time() {
	return d.getTime();
}

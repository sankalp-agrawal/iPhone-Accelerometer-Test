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
	var d = new Date();
	var start = d.getTime();
	console.log("start = " + start);
	window.addEventListener('devicemotion',(event) => {
                console.log(event.acceleration.y);
		var y = 1
		//var time = (d.getTime() - (start))/1000
		//var timeString = time.toString();
		y = Math.round((event.acceleration.y) * 100) / 100 // + timeString
		var text = document.getElementById("Accel");
		text.innerHTML = y + " m/s^2"
    	});
}

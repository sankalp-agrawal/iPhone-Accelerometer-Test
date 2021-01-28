function getAccel() {
	var text = document.getElementById("Access");
	DeviceMotionEvent.requestPermission().then(response => {
		if (response == 'granted') {
		    console.log("accelerometer permission granted");
		    text.innerHTML = "Access Granted!";
		    recordAccel()
		}
    	});
}

function recordAccel() {
	window.addEventListener('devicemotion',(event) => {
                console.log(event.acceleration.y);
		var y = 1
		y = event.acceleration.y
		var text = document.getElementById("Accel");
		text.innerHTML = Math.round(y *9.81 * 100) / 100 + " m/s^2"
    	});
}

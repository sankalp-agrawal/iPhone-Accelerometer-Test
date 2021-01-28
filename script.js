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
	window.addEventListener('deviceorientation',(event) => {
                console.log(event);
		var x = 1
		x = event.gamma
		var text = document.getElementByID("Accel");
		text.innerHTML = x
    	});
}

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
	window.addEventListener('devicemotion', (event) => {
                console.log(event);
	});
}

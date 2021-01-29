var x = 1

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
	var e = new Date();
	var startTime = e.getTime();
	window.addEventListener('devicemotion',(event) => {
		var y = 1
		var d = new Date();
		y = Math.round((event.acceleration.y) * 100) / 100
		var text = document.getElementById("Accel");
		var time = (d.getTime() - startTime)/1000
		text.innerHTML = y + " m/s^2" + "Time Passed: " + time + " seconds"
		console.log(event.acceleration.y + " " + time);

    	});
	console.log("end")
}

function stopRecord() {
	window.removeEventListener();
}

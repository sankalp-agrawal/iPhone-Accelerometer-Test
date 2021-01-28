function getAccel() {
	DeviceMotionEvent.requestPermission().then(response => {
		if (response == 'granted') {
			console.log("accelerometer permission granted");
			
			// Add a listener to get smartphone orientation in the alpha-beta-gamma axes (units in degrees)
            window.addEventListener('deviceorientation',(event) => {
                console.log(event);
				document.getElementById("myText").value = event.alpha
            });
        }
      }
  });
}

function function() {
	return 5
}

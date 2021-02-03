var x = 1
var y = 1
var exportData = [
	["time", "accel_y"],
	];
var newData = [1, 2]
console.log(exportData);

function getAccel() {
	var text = document.getElementById("Access");
	DeviceMotionEvent.requestPermission().then(response => {
		if (response == 'granted') {
		    console.log("accelerometer permission granted");
		    text.innerHTML = "Access Granted!";
		}
    	});
}

function newRecord(t) {
	var d = new Date();
	y = Math.round((t.acceleration.y) * 100) / 100
	var text = document.getElementById("Accel");
	var time = (d.getTime() - startTime)/1000
	text.innerHTML = y + " m/s^2" + "Time Passed: " + time + " seconds"
	console.log(t.acceleration.y + " " + time);
	console.log([t.acceleration.y, time])
	var newData = [time, t.acceleration.y]
	exportData.push(newData);
}

function recordAccel() {
	var e = new Date();
	var startTime = e.getTime();
	window.addEventListener('devicemotion', (event) => {
	//	var d = new Date();
	//	y = Math.round((event.acceleration.y) * 100) / 100
	//	var text = document.getElementById("Accel");
	//	var time = (d.getTime() - startTime)/1000
	//	text.innerHTML = y + " m/s^2" + "Time Passed: " + time + " seconds"
	//	console.log(event.acceleration.y + " " + time);
	//	console.log([event.acceleration.y, time])
	//	var newData = [time, event.acceleration.y]
	//	exportData.push(newData);
	//	console.log(event)
		newRecord(event);
	});
	console.log("end");
}

function stopRecord() {
	window.removeEventListener('devicemotion', (event));
}

function download() {

	let csvContent = "data:text/csv;charset=utf-8,";
	exportData.forEach(function(rowArray) {
		let row = rowArray.join(",");
		csvContent += row + "\r\n";
	});
	var encodedUri = encodeURI(csvContent);
	window.open(encodedUri);
	console.log("downloaded")
}

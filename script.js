var x = 1
var y = 1
var Start = 1
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
	var time = (d.getTime() - window.startTime)/1000
	text.innerHTML = y + " m/s^2" + "Time Passed: " + time + " seconds"
	console.log(t.acceleration.y + " " + time);
	console.log([t.acceleration.y, time])
	var newData = [time, t.acceleration.y]
	exportData.push(newData);
}

function recordAccel() {
	x = 1
	var e = new Date();
	window.startTime = e.getTime();
	window.addEventListener('devicemotion', (event) => {
		if (Start = 0) {
			var text = document.getElementById("Accel");
			text.innerHTML = "STOPPED"
		} else {
			newRecord(event);
	});
	console.log("end");
}

function stopRecord() {
	x = 0
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

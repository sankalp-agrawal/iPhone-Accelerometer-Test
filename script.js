var x = 1
var y = 1
var Start = 1
var exportData = [
	["time", "accel_y", "accel_x"]
	];
var newData = [1, 2, 3]
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
	x = Math.round((t.acceleration.x) * 100) / 100
	var text = document.getElementById("Accel");
	var time = (d.getTime() - window.startTime)/1000
	text.innerHTML = y + " m/s^2, and " + x + "m/s^2" + "Time Passed: " + time + " seconds"
	console.log(t.acceleration.y + " " + time);
	console.log([t.acceleration.y, time])
	console.log(t.acceleration.x + " " + time);
	console.log([t.acceleration.x, time])
	var newData = [time, t.acceleration.y, t.acceleration.x]
	exportData.push(newData);
	console.log(Start)
}

function recordAccel() {
	Start = 1
	var e = new Date();
	window.startTime = e.getTime();
	window.addEventListener('devicemotion', (event) => {
		if (Start == 0) {
			var text = document.getElementById("Accel");
			text.innerHTML = "STOPPED"
		} else {
			newRecord(event);
		}
	});
	console.log("end");
}

function stopRecord() {
	Start = 0
}

function clear() {
	console.log("clear button pressed")
	if (window.confirm("Are you sure you want to clear data?")) {
  		var exportData = [
		["time", "accel_y", "accel_x"],
		];
	} else {
 		window.alert("Canceled");
	}
}


function download() {
	let csvContent = "data:text/csv;charset=utf-8,";
	exportData.forEach(function(rowArray) {
		let row = rowArray.join(",");
		csvContent += row + "\r\n";
	});
	var encodedUri = encodeURI(csvContent);
	var datadownload = document.createElement("a");
	datadownload.href = csvContent;
	var number = document.getElementById("number").value
	datadownload.download = String("Experiment_" + number +".csv");
	datadownload.click();
}

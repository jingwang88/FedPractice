window.onload = function() {
	var formatReg = /\d{4}\-\d{2}\-\d{2}/g;
	var spans = document.getElementsByTagName('span');
	var btn = document.getElementById('btn');
	//IMPORTANT
	var timeId;
	btn.onclick = function() {
		clearInterval(timeId);
		var toTime = document.getElementById("toTime").value;
		if (formatReg.test(toTime)) {
			var time = toTime.split('-');
			var forwardTime = new Date(time[0], time[1]-1, time[2], 0, 0, 0);
			var update = function() {
				console.log("aaaa");
				var date = new Date();
				var result = forwardTime - date;
				var days = parseInt(result/(24*60*60*1000));
				var temp = result%(24*60*60*1000);
				var hours = parseInt(temp/(60*60*1000));
				temp = temp%(60*60*1000);
				var minutes = parseInt(temp/(60*1000));
				temp = temp%(60*1000);
				var seconds = parseInt(temp/1000);
				if (seconds>=0) {
					for(var i=0; i<3; i++) {
						spans[i].innerText = time[i];
					}
					spans[3].innerText = days;
					spans[4].innerText = hours;
					spans[5].innerText = minutes;
					spans[6].innerText = seconds;
				}else {
					clearInterval(now);
				}
			};
			timeId = setInterval(update, 1000);
		}
	}
	
}

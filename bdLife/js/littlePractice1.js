window.onload = function() {
	var inputEle = document.getElementById("favor");
	var button1 = document.getElementById("btn");
	var frm = document.getElementById("form");
	button1.onclick = function() {
		var value = inputEle.value;
		var values = value.split("，");
		var length = values.length;
		var uniqValues = [];
		var regSpace = /^\s*$/g;
		for(var i=0; i<length; i++) {
			var isUniq = true;
			for(var j=i+1; j<length; j++) {
				if(values[i] == values[j]) {
					isUniq = false;
				}
			}
			console.log(regSpace.test(values[i]));
			if(isUniq && !regSpace.test(values[i])) {
				uniqValues.push(values[i]);
			}
		}
		if(uniqValues[0]) {
			var p = document.createElement("p");
			p.innerText = uniqValues.join(":");
			frm.appendChild(p);
		}
	}
}
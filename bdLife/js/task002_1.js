/*   第一版
window.onload = function() {
	var inputEle = document.getElementById("favor");
	var button1 = document.getElementById("btn");
	var frm = document.getElementById("form");
	var p = document.createElement("p");
	frm.appendChild(p);
	button1.onclick = function() {
		var value = inputEle.value;
		var values = value.split("，");
		var length = values.length;
		var uniqValues = [];
		var regSpace = /^\s*$/;
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
			console.log(uniqValues);
			p.innerText = uniqValues.join(":");
		}
	}
}
*/
window.onload = function() {
	var inputEle = document.getElementById("favor");
	var button1 = document.getElementById("btn");
	var frm = document.getElementById("form");
	var p = document.createElement("p");
	// unicode: 空格半角\20全角\u3000; 中文逗号\uFF0C; 英文逗号半角(\2C)全角\uFF0C;(有问题)
	var regSplit = /\n|\u3000|\u0020|\uFF0C|\u002c|、|;|；/g;
	frm.appendChild(p);
	button1.onclick = function() {
		var value = inputEle.value;
		var values = value.split(regSplit);
		var length = values.length;
		var uniqValues = [];
		for(var i=0; i<length; i++) {
			var isUniq = true;
			for(var j=i+1; j<length; j++) {
				if(values[i] == values[j]) {
					isUniq = false;
				}
			}
			if(isUniq) {
				uniqValues.push(values[i]);
			}
		}
		if(uniqValues[0]) {
			console.log(uniqValues);
			p.innerText = uniqValues.join(":");
		}
	}
}
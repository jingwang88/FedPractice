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
//阶段2
/*window.onload = function() {
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
		var regSpace = /^\s*$/;
		for(var i=0; i<length; i++) {
			var isUniq = true;
			for(var j=i+1; j<length; j++) {
				if(values[i] == values[j]) {
					isUniq = false;
				}
			}
			if(isUniq && !regSpace.test(values[i])) {
				uniqValues.push(values[i]);
			}
		}
		if(uniqValues[0]) {
			console.log(uniqValues);
			p.innerText = uniqValues.join(":");
		}
	}
}*/

//阶段3
window.onload = function() {
	var inputEle = document.getElementById("favor");
	var button1 = document.getElementById("btn");
	var frm = document.getElementById("form");
	var alert1 = document.getElementById("alert1");	
	var alert2 = document.getElementById("alert2");	
	// unicode: 空格半角\20全角\u3000; 中文逗号\uFF0C; 英文逗号半角(\2C)全角\uFF0C;(有问题)
	var regSplit = /\n|\u3000|\u0020|\uFF0C|\u002c|、|;|；/g;
	var isReady = false;
	var checkbox = document.getElementById("checkbox");
	//IE:onpropertychange others: oninput
	inputEle.oninput = function() {
		var content = inputEle.value;
		var contents = content.split(regSplit);
		var len = contents.length;
		if(contents[0]) {
			console.log("contents exist!");
			alert1.style.display = "none";
			if(len < 11) {
				alert2.style.display = "none";
				console.log("isready");
				isReady = true;
			}else {
				alert2.style.display = "block";
				alert1.style.display = "none";
				isReady = false;
			}
		}else {
			alert1.style.display = "block";
			alert2.style.display = "none";
			isReady = false;
		}
	}
	button1.onclick = function() {
		var docFragment = document.createDocumentFragment();
		if(isReady) {
			while(checkbox.hasChildNodes()) {
				checkbox.removeChild(checkbox.firstChild);
			}
			isReady = false;
			var value = inputEle.value;
			var values = value.split(regSplit);
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
				if(isUniq && !regSpace.test(values[i])) {
					uniqValues.push(values[i]);
				}
			}
			for(var j=0; j<uniqValues.length; j++) {
				var checkBox = document.createElement("input");
				var text = document.createTextNode(uniqValues[j]);
				checkBox.setAttribute("type","checkbox");
				console.log(uniqValues[j]);
				checkBox.value = uniqValues[j];
				docFragment.appendChild(checkBox);
				docFragment.appendChild(text);
			}
			checkbox.appendChild(docFragment);
		}
	}
}
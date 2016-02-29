window.onload = function() {
	var suggestData = ['Simon', 'Erik', 'Kener'];
	var input = document.getElementById('searchContent');
	var ul = document.getElementById("list");
	var hadShow = false; 
	var fragment = document.createDocumentFragment();
	function listener () {
		console.log("onchang");
		if(input.value == "name" && !hadShow) {
			console.log("a");
			hadShow = true;
			// fragment.innerHTML = "";
			for(var i=0; i<suggestData.length; i++) {
				var li = document.createElement('li');
				li.innerText = suggestData[i];
				fragment.appendChild(li);
			}
			ul.appendChild(fragment);
			console.log(ul);
		}else {
			console.log("b");
			ul.innerHTML = "";
			hadShow = false;
			console.log(ul);
		}
	};
	console.log("aaa");
	input.oninput = listener;
}

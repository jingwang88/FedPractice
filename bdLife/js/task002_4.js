window.onload = function() {
	var suggestData = ['Simon', 'Erik', 'Kener'];
	var input = document.getElementById('searchContent');
	var ul = document.getElementById("list");
	var hadShow = false; 
	var fragment = document.createDocumentFragment();
	var liBackgroundColor = "red";
	function listener () {
		console.log("onchang");
		if (input.value == "name" && !hadShow) {
			console.log("a");
			hadShow = true;
			// fragment.innerHTML = "";
			for (var i=0; i<suggestData.length; i++) {
				var li = document.createElement('li');
				li.innerText = suggestData[i];
				fragment.appendChild(li);
			}
			ul.appendChild(fragment);
			ul.addEventListener("click", function(e) {
				if (e.target.tagName == "LI") {
					input.value = e.target.textContent;
					ul.innerHTML = "";
					hadShow = false;
				}
			});
			var lists = ul.getElementsByTagName('li');
			console.log(lists);
			ul.addEventListener("mouseover", function(e) {
				if (e.target.tagName == "LI") {
					for(var j=0; j<lists.length; j++) {
						lists[j].style.backgroundColor = "";
					}
					e.target.style.backgroundColor = liBackgroundColor;
				}
			});
			// 获取当前li有背景颜色的位置
			var getNowLiPosition = function() {
				for(var j=0; j<lists.length; j++) {
					if(lists[j].style.backgroundColor == liBackgroundColor) {
						return j;
					}
				}
				return -1;
			}
			// 设置li的背景颜色
			var setBackgroundColor = function(index) {
				if (index>=0 && index<lists.length){
					for (var j=0; j<lists.length; j++) {
						lists[j].style.backgroundColor = "";
					}
					lists[index].style.backgroundColor = liBackgroundColor;
				}else {
					for (var i=0; i<lists.length; i++) {
						lists[i].style.backgroundColor = "";
					}
				}
			}

			// var getCharCode = function(event) {
			// 		if(typeof event.charCode == "number") {
			// 			return event.charCode;
			// 		}else {
			// 			return event.keyCode;
			// 		}
			// }

			// 只有keydown才能捕获到aroow up and arrow down
			document.addEventListener("keydown", function(e) {
				// 兼容IE8- 和 OPERa
				e = e || window.event;
				var charCode = e.keyCode;
				// 上箭头为38，下箭头为40
				if (charCode == 38) {
					console.log("38");
					if (getNowLiPosition() == 0) {
						setBackgroundColor(-1);
					}else {
						if(getNowLiPosition() == -1) {
							setBackgroundColor(lists.length - 1);
						}else {
							setBackgroundColor(getNowLiPosition() - 1);							
						}
					}
				}
				if(charCode == 40) {
					console.log("40");
					if(getNowLiPosition() >= (lists.length-1)) {
						setBackgroundColor(-1);
					}else {
						setBackgroundColor(getNowLiPosition() + 1)
					}
					e.preventDefault();
				}
				if(charCode == 13) {
					console.log("13");
					if(getNowLiPosition() >= 0) {
						console.log("getNowLiPosition()" + getNowLiPosition());
						console.log(lists[getNowLiPosition()].textContent);
						input.value = ""+lists[getNowLiPosition()].textContent;
						setBackgroundColor(-1);
						ul.innerHTML = "";
						hadShow = false;
					}
				}
			});
			
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

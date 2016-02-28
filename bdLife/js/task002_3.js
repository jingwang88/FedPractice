window.onload = function() {
	var options = {
	// 循环顺序从作至右
	leftToRight: false,
	// 是否循环
	loop: true,
	// 间隔时间ms
	gapTime: 5000,
	// 图片张数
	number: 4
	}
	var container = document.getElementById('container');
	var picContainers = document.getElementsByClassName('pic-Container');
	var showWindowWidth = 1000;
	var circleTags = document.getElementsByClassName('tag');
	var circleBackground = function(index) {
		for (var i=0; i<circleTags.length; i++) {
			if(i==index-1){
				circleTags[i].style.backgroundColor = "#678";
			}else {
				circleTags[i].style.backgroundColor = "#17BDEA";
			}
		}
	} 
	var anthor = document.getElementById('circleTag');
	var flag = true;
	var clickMonitor = function() {
		anthor.addEventListener("click", function(e) {
			flag = false;
			for(var i=0; i<circleTags.length; i++) {
				if(circleTags[i] == e.target) {
					circleBackground(i+1);
					var left = container.style.left;
					var distance = (i+1)*showWindowWidth - left;
					if(distance > 0) {
						var t1 = setInterval(function() {
							left += 2;
							container.style.left = '-' + left + 'px';
							if (left > (i+1)*showWindowWidth) {
								clearInterval(t1);
								flag = true;					
							}
						}, 1);
					}else {
						var t1 = setInterval(function() {
							left -= 2;
							container.style.left = '-' + left + 'px';
							if (left < (i+1)*showWindowWidth) {
								clearInterval(t1);
								flag = true;						
							}
						}, 1);
					}
					index = i + 1;
				}
			}
		});
	};
	if(options.loop) { 
		clickMonitor();
		if(!options.leftToRight) {
			console.log('aa');
			var left = 0;
			var index =1;
			var t;
			var slide = function() {
				if (index < options.number) {
					var t1 = setInterval(function() {
						left += 2;
						container.style.left = '-' + left + 'px';
						if (left > index*showWindowWidth) {
							console.log("finsh" + index);
							clearInterval(t1);
							index++;
							circleBackground(index);							
						}
					}, 1);
					t = setTimeout(slide, options.gapTime);	
				} else {
					index = 1;
					left = 0;
					container.style.left = 0 + 'px';
					circleBackground(index);
					t = setTimeout(slide, options.gapTime);	
				}	
			};	
			circleBackground(index);
			setTimeout(slide, options.gapTime);
		}else {
			
		}
	}else {

	}
	
};
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
	if(options.loop) { 
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
						}
					}, 1);
					t = setTimeout(slide, options.gapTime);	
				} else {
					index = 1;
					left = 0;
					container.style.left = 0 + 'px';
					t = setTimeout(slide, options.gapTime);	
				}		
			};	
			slide();	
		}else {
			
		}
	}else {

	}
	
};
window.onload = function() {
	var options = {
	// 循环顺序从作至右
	leftToRight: false,
	// 是否循环
	loop: true,
	// 间隔时间ms
	gapTime: 2000,
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
			var flag = true;
			var index =1;
			while(index < 4) {
				if (flag) {
					flag = false;
					setTimeout(function() {
						console.log('aaa');
						var t1 = setInterval(function() {
							console.log('bbb');
							left += 2;
							container.style.left = '-' + left + 'px';
							if (left >= index*showWindowWidth) {
								clearInterval(t1)
							}
						}, 1);
						index++;
						flag = true;
					}, options.gapTime);	
				}
			}
			container.style.left = "0px";
			
		}else {
			
		}
	}else {

	}
	
};
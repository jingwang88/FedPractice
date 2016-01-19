/*------------------------------
Author: Rowan
Email: wj154419@163.com
Date: 2016.1.19
------------------------------*/

/*------------------- DOM3.1 --------------------*/
// 为element增加一个样式名为newClassName的新样式
function hasClass(element, classname) {
	var reg = new RegExp("(\\s|^)"+classname+"(\\s|$)");
	return element.className.match(reg);
}
function addClass(element, newClassName) {
	// 判断这个类名是否存在于这个类
	if(!hasClass(element, newClassName)) {
   		element.className += " " + newClassName;
	}
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    // 
    var reg = new RegExp("(\\s|^)"+oldClassName+"(\\s|$)");
    // 判断这个类名是否存在于这个类
    if(hasClass(element, oldClassName)) {
    	element.className = element.className.replace(reg, " ");
    }
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var x = 0, y = 0;
 	var curEle = element;
 	while(curEle.offsetParent != null) {
 		x += curEle.offsetLeft;
 		y += curEle.offsetTop;
		curEle = curEle.offsetParent;
 	}
    return {x, y}
}

// 测试用 testOffsetWidth.html
var inner = document.getElementById("inner");
var outer = document.getElementById("outer");
var outer2 = document.getElementById("outer2");
addClass(inner, "inner-add");
addClass(inner, "inner-add1");
addClass(outer, "outer-add");
removeClass(inner, "inner-add2");
console.log(isSiblingNode(outer2, outer)); //true
console.log(isSiblingNode(inner, outer)); //false

var outerPose = getPosition(outer);
var innerPose = getPosition(inner);
console.log(outerPose.x);
console.log(outerPose.y);
console.log(innerPose.x);
console.log(innerPose.y);


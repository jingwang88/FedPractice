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

/*--------------- 实现简单$ -------------*/
// 实现一个简单的Query

function $(selector) {
    var selectors = selector.split(' ');
    if(selectors.length<2) {
        var regId = /^#(\w+)$/g, regClass = /^.(\w+)$/g, regTag = /^(\w+)$/g,
            regAttr = /^\[(([0-9a-zA-z]|-)+)\]$/g, regAttrVal = /^[(.+)=(.+)]$/g;
        if(regId.test(selector)) {
            return document.getElementById($1);
        }else if(regClass.test(selector)) {
            return document.getElementsByClassName($1)[0];
        }else if(regTag.test(selector)) {
            return document.getElementsByTagName($1)[0];
        }else if(regAttr.test(selector)) {
            var nodeList = document.getElementsByTagName('*');
            var nodeArr = [];
            for(var i=0, ele; ele=nodeList[i]; i++) {
                if(ele.getAttribute($1)) {
                    nodeArr.push(ele);
                }
            }
            return nodeArr[0];
        }else if(regAttrVal.test(selector)) {
            var nodeList = document.getElementsByTagName('*');
            var nodeArr = [];
            for(var i=0, ele; ele=nodeList[i]; i++) {
                if(ele.getAttribute($1) == $2) {
                    nodeArr.push(ele);
                }
            }
            return nodeArr[0];
        }
    }else {
        function(selectors) {
            for(var i=selectors.length; i>1; i--) {
                if($(selectors[i-1]).parentNode == $(selectors[i-2]) && i == 2) {
                    return $(selectors[selectors.length-1]);
                }
            }
        }
    }
}
//使用微博首页测试
console.log($("#plc_main"));
console.log($(".W_f14"));
console.log($("p"));
console.log($("[fixed-box]"));
console.log($("[fixed-box=true]"));


// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象


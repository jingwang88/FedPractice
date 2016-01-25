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
function $1(selector) {
    var regId = /^#(\w+)$/g, regClass = /^.(\w+)$/g, regTag = /^(\w+)$/g,
            regAttr = /^\[(([0-9a-zA-z]|-)+)\]$/g, regAttrVal = /^[(.+)=(.+)]$/g;
        if(regId.test(selector)) {
            return document.getElementById($1);
        }else if(regClass.test(selector)) {
            return document.getElementsByClassName($1);
        }else if(regTag.test(selector)) {
            return document.getElementsByTagName($1);
        }else if(regAttr.test(selector)) {
            var nodeList = document.getElementsByTagName('*');
            var nodeArr = [];
            for(var i=0, ele; ele=nodeList[i]; i++) {
                if(ele.getAttribute($1)) {
                    nodeArr.push(ele);
                }
            }
            return nodeArr;
        }else if(regAttrVal.test(selector)) {
            var nodeList = document.getElementsByTagName('*');
            var nodeArr = [];
            for(var i=0, ele; ele=nodeList[i]; i++) {
                if(ele.getAttribute($1) == $2) {
                    nodeArr.push(ele);
                }
            }
            return nodeArr;
        }
}
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
        var eles = [];
        for(var childEle in $1(selectors[1])) {
            for(var parentEle in $1(selectors[0])) {
                if(childEle.parentNode == parentEle) {
                    eles.push(childEle);
                }
            }
        }
        return eles[0]; 
        
    }
}
//使用微博首页测试
console.log($("#plc_main"));
console.log($(".W_f14"));
console.log($("p"));
console.log($("[fixed-box]"));
console.log($("[fixed-box=true]"));
console.log($(".layer_menu_list ul"));

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



/*---------------------- 事件 -----------------------*/
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    element.addEventListener(event, listener);
}

// 百度页面https://www.baidu.com/s?wd=addeventlistener&ie=utf-8&tn=98050039_pg&ssl_s=1&ssl_c=ssl6_152646d03b9
function mouseoverlistener(event) {
    alert("onevent");
}

addEvent(document.getElementById("s_tab"), "mouseover", mouseoverlistener);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
     element.removeEventListener(event, listener);
}

// 测试
removeEvent(document.getElementById("s_tab"), "mouseover", mouseoverlistener);

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    element.onclick = listener;
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    
   element.onkeypress = function(event) {
        console.log("111");
        if(event.charCode == 0x0D || event.keyCode == 0x0D) {
            listener(event);
        }else{
            console.log("按下的不是enter键");
        }
    } 
}

// 测试addEnterEvent() http://www.uc123.com/
function enterListener(event) {
    console.log("enter!"+event);
}
addEnterEvent(document.getElementById("search_keyword"), enterListener);



/*------------------事件委托------------------*/
// 先简单一些

function delegateEvent(element, tag, eventName, listener) {
    // your implement
    element.addEventListener(eventName, function(){
        // console.log(event.target.tagName.toLowerCase());
        // tagName为大写字母，因此需要变为小写
        if(event.target.tagName.toLowerCase() == tag) {
         console.log("click");
            listener();
        }
    } );
}

$.delegate = delegateEvent;
function clickHandle() {
    alert("clickhandle");
}
// 使用示例 http://www.uc123.com/
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate(document.getElementById("J_search"), "li", "mouseover", clickHandle);


/*------------------ 重新封装 --------------------*/

$.on(selector, event, listener) {
    $1(selector).addEventListener(event, listener);
}

$.click(selector, listener) {
    // your implement
    $1(selector).onclick = listener;
}

$.un(selector, event, listener) {
    // your implement
    $1(selector).removeEventListener(event, listener);
}

$.delegate(selector, tag, event, listener) {
    // your implement
    $1(selector).addEventListener(eventName, function(){
        // console.log(event.target.tagName.toLowerCase());
        // tagName为大写字母，因此需要变为小写
        if(event.target.tagName.toLowerCase() == tag) {
         console.log("click");
            listener();
        }
    } );
}

// 使用示例：
$.click("[data-log]", logListener);
$.delegate('#list', "li", "click", liClicker);


/*-------------------- BOM ---------------------*/
// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
    var reg = /.*MSIE.*/g;
    console.log(navigator.userAgent);
    if(reg.test(navigator.userAgent)){
        return true;
    }else {
        return false;
    }
}
console.log(isIE());

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var d = new Date();
    d.setHours(d.getHours() + expiredays*24);
    // d.setTime(d.getTime() + expiredays*24*3600*1000);
    // d.setDate(d.getDate() + expiredays);    
    document.cookie = cookieName+"="+cookieValue+";expires="+d.toGMTString()+";";
}
setCookie("test", "testValue", 10);

// 获取cookie值
function getCookie(cookieName) {
    // your implement
    var cookies = document.cookie.split(";");
    for(var i=0; i<cookies.length; i++) {
        var cookiesEach = cookies[i].split("=");
        if(cookieName == cookiesEach[0]) {
           console.log(cookiesEach[1]);
           break;
        }
    }
}
getCookie("test");
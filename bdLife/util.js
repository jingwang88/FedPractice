/*------------------------------
Author: Rowan
Email: wj154419@163.com
------------------------------*/
function isArray(arr) {
	return arr instanceof Array;
}
function isFunc(fn) {
	return fn instanceof Function;
}
function add(){
	alert("good add!");
}
// 测试函数结果
console.log(isArray([10, 20, 30]));
console.log(isFunc(add));

/*---------------------   遍历对象  ---------------------------------*/
function cloneObject(src) {
	var toObj = new Object;
	for(var p in src) {
		if((src[p] instanceof Function) || (src[p] instanceof RegExp)) {
			console.log("funciton or regexp exist!");
		}else {
			toObj[p] = src[p];
		}
	}
	return toObj;
}
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    },
    c: function() {
    	console.log("function!")
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);
abObj.c();

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"
tarObj.c() // Uncaught TypeError: tarObj.c is not a function

/*----------------------   --------------------------*/
function uniqArray(arr) {
	var uniqArray = new Array;
	var isUniq = true;
	for(var i=0; i<arr.length; i++) {
		for(var j=i+1; j<arr.length; j++) {
			if(arr[i] === arr[j]) {
				isUniq = false;
			}
		}
		if(isUniq) {
			uniqArray.push(arr[i]);
		}else {
			isUniq = true;
		}
	} 
	return uniqArray;
}
// 测试函数
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]


/*---------------------- Trim --------------------*/
// step1
function simpleTrim(str) {
	var firstCharNum = 0;
	var endCharNum = 0;
	var isFirst = true, isEnd = true;
	for(var i=0; i<str.length; i++) {
		if((str.charAt(i) != " ") && isFirst) {
			firstCharNum = i;
			isFirst = false;
		}
		if((str.charAt(str.length-1-i) != " ") && isEnd) {
			endCharNum = (str.length-i);
			isEnd = false;
		}
	}
	var tempStr = str.slice(firstCharNum, endCharNum);
	return tempStr;
}

// 使用示例
var str = '　　hi! MICHAEL I M REALLY HAPPY  　 ';
str = simpleTrim(str);
console.log(str); // 

// step2
function trim(str) {
	return str.replace(/^\s*(.*)\s+$/gm, "$1");

}
// 使用示例
var str = '　　hi! MICHAEL I M REALLY HAPPY  			　　　 ';
str = trim(str);
console.log(str); 

/*-------------------------------------*/
function each(arr, fn) {
	for(var i=0; i<arr.length; i++) {
		fn(arr[i], i);
	} 
}

// 测试用例1
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 测试用例2
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html


/*------------------获取对象内第一层元素数量--------------------------*/
function getObjectLength(obj) {
	var i = 0;
	for(var p in obj) {
		i++;
	}
	return i;
}

var obj1 = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
var obj2 = {
	a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    },
    d: function add() {
    	alert('add!');
    },
    e: {
    	e3: 5,
    	e6: 6
    }
}
console.log(getObjectLength(obj1)); // 3
console.log(getObjectLength(obj2));  //5

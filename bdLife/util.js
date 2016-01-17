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

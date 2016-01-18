/*------------------------------
Author: Rowan
Email: wj154419@163.com
------------------------------*/

/*----------------- 正则表达式 -------------------*/
// 判断是否为邮箱地址
function isEmail(emailStr) {
    var mailReg = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+.com$/g;
    return mailReg.test(emailStr);
}

function isMobilePhone(phone) {
    // your implement
    var phoneNumReg = /1[0-9][0-9]{9}/g;
     return phoneNumReg.test(phone);
}
console.log("is email?");
console.log(isEmail("www45151sdfsdf@163.com")); //true
console.log(isEmail("www45151--..sdfsdf@163.com")); //false
console.log(isEmail("www4515__1sdfsdf@qq.com")); //true

console.log("is phone?");
console.log(isMobilePhone("18565756598"));
console.log(isMobilePhone("1856575655598"));
console.log(isMobilePhone("1856575658"));
console.log(isMobilePhone("12565756598"));
console.log(isMobilePhone("22565756598"));

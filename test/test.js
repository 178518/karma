/**
 * 字符串翻转
 * @param name
 * @returns {string}
 */
function reverse(name) {
    return name.split("").reverse().join("");
}

/**
 * 判断是否是整数
 * @param num
 * @returns {boolean}
 */
function isInteger(num) {
    if (typeof num !== "number") return false;
    var pattern = /^[1-9]\d*$/g;
    return pattern.test(num);
}

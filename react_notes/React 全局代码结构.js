/**
 * 介绍React全局代码结构
 *
 */
/

(function (f) {
    /**
    * 在全局中保存React对象，React=f() 
    */
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.React = f()
    }
})(function(){
  //该函数的返回值，即是React对象

  //该自运行函数的返回值即是React对象
  return (function e(t,n,r){
    //这里返回一个函数，该函数返回后立即执行
  })({
    1:[function(_dereq_, module, exports) {
       
     }, {
        "117": 117,
        "144": 144,
        "19": 19,
        "21": 21,
        "27": 27,
        "32": 32,
        "33": 33,
        "34": 34,
        "38": 38,
        "39": 39,
        "40": 40,
        "51": 51,
        "54": 54,
        "57": 57,
        "58": 58,
        "66": 66,
        "70": 70,
        "75": 75,
        "78": 78,
        "81": 81,
        "84": 84
      }],

    //这里省略若干行,结构如上
  },{},[1])(1);
})
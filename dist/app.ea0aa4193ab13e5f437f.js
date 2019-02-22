(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "J6RI":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "body {\r\n  background: #123456;\r\n}", ""]);



/***/ }),

/***/ "OMi8":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "J6RI");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "dSPy":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
function printMe() {
  console.log('Updating print.js');
}

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "dSPy");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "OMi8");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me';
  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  element.appendChild(btn);
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (false) {}

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/OGYzNCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLDREQUFnRDtBQUNuRjtBQUNBLGNBQWMsUUFBUyxTQUFTLDBCQUEwQixLQUFLOzs7Ozs7Ozs7Ozs7OztBQ0QvRCxjQUFjLG1CQUFPLENBQUMsaUVBQXNEOztBQUU1RSw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsMkRBQWdEOztBQUVyRTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUI7QUFDUztBQUNaOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFDO0FBQ3ZCO0FBQ0EsZ0JBQWdCLGlEQUFPO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7O0FBRUEsSUFBSSxLQUFVLEVBQUUsRSIsImZpbGUiOiJhcHAuZWEwYWE0MTkzYWIxM2U1ZjQzN2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogIzEyMzQ1NjtcXHJcXG59XCIsIFwiXCJdKTtcblxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcclxuICBjb25zb2xlLmxvZygnVXBkYXRpbmcgcHJpbnQuanMnKTtcclxufSIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zZXJ2aWNlLXdvcmtlci5qcycpLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdGVyZWQ6ICcsIHJlZ2lzdHJhdGlvbik7XHJcbiAgICB9KS5jYXRjaChyZWdpc3RyYXRpb25FcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTVyByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCByZWdpc3RyYXRpb25FcnJvcik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xyXG4gIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUnO1xyXG4gIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmxldCBlbGVtZW50ID0gY29tcG9uZW50KCk7IC8vIFN0b3JlIHRoZSBlbGVtZW50IHRvIHJlLXJlbmRlciBvbiBwcmludC5qcyBjaGFuZ2VzXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3ByaW50LmpzJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0FjY2VwdGluZyB0aGUgdXBkYXRlZCBwcmludE1lIG1vZHVsZSEnKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7IFxyXG4gICAgZWxlbWVudCA9IGNvbXBvbmVudCgpOyAvLyBSZS1yZW5kZXIgdGhlIFwiY29tcG9uZW50XCIgdG8gdXBkYXRlIHRoZSBjbGljayBoYW5kbGVyXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
"use strict";

onload = init;
var is;
var ss;

function init() {
  is = document.querySelectorAll(".i");
  ss = document.querySelectorAll(".slider");
  updateBS();
  addEvents();
}

function updateBS() {
  var box = document.querySelector(".box");
  box.style.boxShadow = "".concat(is[0].value, "px ").concat(is[1].value, "px ").concat(is[2].value, "px ").concat(is[3].value, "px #").concat(is[4].value);
  ss[0].value = is[0].value;
  ss[1].value = is[1].value;
  ss[2].value = is[2].value;
  ss[3].value = is[3].value;
}

function updateBS1() {
  is[0].value = ss[0].value;
  is[1].value = ss[1].value;
  is[2].value = ss[2].value;
  is[3].value = ss[3].value;
  updateBS();
}

function addEvents() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = is[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      i.addEventListener("keyup", updateBS, false);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = is[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var i = _step2.value;
      i.addEventListener("change", updateBS, false);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = ss[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var s = _step3.value;
      s.addEventListener("input", updateBS1, false);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}
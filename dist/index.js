'use strict';

var executeIfFunction = function executeIfFunction(f) {
  return typeof f === 'function' ? f() : f;
};

var switchcase = function switchcase(cases) {
  return function (defaultCase) {
    return function (key) {
      return cases.hasOwnProperty(key) ? cases[key] : defaultCase;
    };
  };
};

var switchcaseF = function switchcaseF(cases) {
  return function (defaultCase) {
    return function (key) {
      return executeIfFunction(switchcase(cases)(defaultCase)(key));
    };
  };
};

module.exports = {
  switchcase: switchcase,
  switchcaseF: switchcaseF
};
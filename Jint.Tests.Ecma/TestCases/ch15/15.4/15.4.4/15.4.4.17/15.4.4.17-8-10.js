/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-8-10.js
 * @description Array.prototype.some - subclassed array when length is reduced
 */


function testcase() {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = 2;
  
  function cb(val)
  {
    if(val > 2)
      return true;
    else
      return false;
  }
  var i = f.some(cb);
  
  if (i === false) {
    return true;
  }
 }
runTestCase(testcase);

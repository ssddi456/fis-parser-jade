/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';


var jade = require('jade');

module.exports = function(content, file, conf){
  return  jade.compile( content, conf )({});
};
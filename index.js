/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';


var jade = require('jade');

module.exports = function(content, file, conf){
  var data = {};
  if (conf.data || file.extras.jade){
    data = (file.extras.jade && file.extras.jade.data) || conf.data;
    if (data instanceof Function){
      data = data(file);
    }
    delete conf.data;
  }
  if (conf.filters) {
    Object.keys(conf.filters).forEach(function(filter) {
      jade.filters[filter] = conf.filters[filter].bind(file);
    });
  }
  var template = jade.compile( content, conf );
  template.dependencies.forEach(function(dep){
    file.cache.addDeps(dep);
  });
  return template(data);
};
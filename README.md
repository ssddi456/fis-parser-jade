fis-parser-jade
===============

A parser for fis to compile jade file.

## 功能

 - 将Jade模版编译为HTML

## 用法

### 安装插件

    $ npm install -g fis-parser-jade
    $ vi path/to/project/fis-conf.js

### 启用插件

```javascript
//file : path/to/project/fis-conf.js

//使用fis-parser-jade插件编译jade文件
fis.config.set('modules.parser.jade', 'jade');
//jade文件经过编译后输出为html文件
fis.config.set('roadmap.ext.jade', 'html');
```

### 添加自定义filter

```javascript
var jadeConf = {
	filters : {
		jadesrc : require('jade-highlighter')
	}
};

fis.config.set('settings.parser.jade', jadeConf);
```
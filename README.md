# localStorage-cache
localStorage本地存储缓存管理。 

**[DEMO请案例点击这里查看.](http://www.lovewebgames.com/jsmodule/localStorage-cache.html "localStorage-cache demo")**

##使用方法

	LocalStorageCache.add('key','value');

一般情况下是这样的添加的

##add :function(key,value,exp)

	add有三个参数,key是键，value为值，exp是过期时间，可以是0（关闭时过期）,int 秒为单位，date类型为具体到期日期

##get:function(key,promise)
	
	返回promise, 如果cache已过期，当第二个参数promise存在时，promise的fail时会在返回过期时的值

	LocalStorageCache.get('key',ajax).done(function(result){
		alert(result)
	});

##remove:function(key)
	
	移除cache

##clear:function()
	
	清空所有cache

##update:function(key,value,exp)

	更新cache,如果不加exp参数，就只更新内容。
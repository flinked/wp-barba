(function(root,factory){if(typeof define==='function'&&define.amd){define(['pxloader'],function(PxLoader){return(root.PxLoaderVideo=factory(PxLoader));});}else if(typeof module==='object'&&module.exports){module.exports=factory(require('pxloader'));}else{root.PxLoaderVideo=factory(root.PxLoader);}}(this,function(PxLoader){function PxLoaderVideo(url,tags,priority,options){options=options||{};var self=this,loader=null,video;this.readyEventName='canplaythrough';video=this.video=document.createElement('video');if(options.origin){video.crossOrigin=options.origin;}video.preload='auto';this.tags=tags;this.priority=priority;var onReadyStateChange=function(){if(self.video.readyState!==4){return;}onLoad();};var onLoad=function(){loader.onLoad(self);cleanup();};var onError=function(){loader.onError(self);cleanup();};var onTimeout=function(){loader.onTimeout(self);cleanup();};var cleanup=function(){self.unbind('load',onLoad);self.unbind(self.readyEventName,onReadyStateChange);self.unbind('error',onError);self.video.src='';};this.start=function(pxLoader){loader=pxLoader;self.bind('load',onLoad);self.bind(self.readyEventName,onReadyStateChange);self.bind('error',onError);self.bind('suspend',onLoad);self.video.src=url;self.video.load();};this.checkStatus=function(){onReadyStateChange();};this.onTimeout=function(){if(self.video.readyState!==4){onLoad();}else{onTimeout();}};this.getName=function(){return url;};this.bind=function(eventName,eventHandler){self.video.addEventListener(eventName,eventHandler,false);};this.unbind=function(eventName,eventHandler){self.video.removeEventListener(eventName,eventHandler,false);};}PxLoader.prototype.addVideo=function(url,tags,priority,options){var videoLoader=new PxLoaderVideo(url,tags,priority,options);this.add(videoLoader);return videoLoader.video;};return PxLoaderVideo;}));
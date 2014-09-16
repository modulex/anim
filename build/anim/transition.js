modulex.add("anim/transition",["util","dom","anim/base","feature"],function(e,n,t){var a,i=e("util"),r=e("dom"),o=e("anim/base"),s=e("feature");a=function(e){function n(e){var n="";return u.each(e,function(e,t){n&&(n+=","),n+=t+" "+e.duration+"s "+e.easing+" "+e.delay+"s"}),n}function t(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}function a(e,n,t,i,r){var o=this;return o instanceof a?(a.superclass.constructor.apply(o,arguments),void 0):new a(e,n,t,i,r)}var u=i,c=r,p=o,d=s,l=d.getCssVendorInfo,f=l("transition");if(f){var m=f.propertyName,v="linear",g={ease:1,linear:1,"ease-in":1,"ease-out":1,"ease-in-out":1};u.extend(a,p,{prepareFx:function(){var e,n,a=this,i=a._propsData,r={};for(var o in i)e=i[o],"string"==typeof e.easing?u.startsWith(e.easing,"cubic-bezier")||g[e.easing]||(e.easing=v):e.easing=v,n=l(o),n?r[t(n.propertyName)]=i[o]:console.error("anim: unsupported css property for transition anim: "+o);a._propsData=r},doStart:function(){var e=this,t=e.node,a=t.style,i=e._propsData,r=a[m],o=0,s={};u.each(i,function(e,n){var a=e.value;c.css(t,n,c.css(t,n)),s[n]=a,o=Math.max(e.duration+e.delay,o)}),-1!==r.indexOf("none")?r="":r&&(r+=","),a[m]=r+n(i),setTimeout(function(){c.css(t,s)},0),e._transitionEndTimer=setTimeout(function(){e.stop(!0)},1e3*o)},beforeResume:function(){var e=this,n=e._propsData,t=u.merge(n),a=e._runTime/1e3;u.each(t,function(e,t){var i=a;e.delay>=i?e.delay-=i:(i-=e.delay,e.delay=0,e.duration>=i?e.duration-=i:delete n[t])})},doStop:function(e){var n,t=this,a=t.node,i=a.style,r=t._propsData,o=[],s={};t._transitionEndTimer&&(clearTimeout(t._transitionEndTimer),t._transitionEndTimer=null),u.each(r,function(n,t){e||(s[t]=c.css(a,t)),o.push(t)}),n=u.trim(i[m].replace(new RegExp("(^|,)\\s*(?:"+o.join("|")+")\\s+[^,]+","gi"),"$1")).replace(/^,|,,|,$/g,"")||"none",i[m]=n,c.css(a,s)}}),u.mix(a,p.Statics),e=a,a._name_="TransitionAnim",a.version="1.0.1"}else e=null;return e}(),t.exports=a});
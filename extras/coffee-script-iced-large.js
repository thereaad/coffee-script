/**
 * CoffeeScript Compiler v1.3.3b
 * http://coffeescript.org
 *
 * Copyright 2011, Jeremy Ashkenas
 * Released under the MIT License
 */
(function(e){var t=function(){function e(t){return e[t]}return e["./iced"]=new function(){var e=this;(function(){var t,n=[].slice;e.generator=t=function(e,t,r){var i,s,o,u,a,f;return t.transform=function(e){return e.icedTransform()},t["const"]=i={k:"__iced_k",k_noop:"__iced_k_noop",param:"__iced_p_",ns:"iced",Deferrals:"Deferrals",deferrals:"__iced_deferrals",fulfill:"_fulfill",b_while:"_break",t_while:"_while",c_while:"_continue",n_while:"_next",n_arg:"__iced_next_arg",defer_method:"defer",slot:"__slot",assign_fn:"assign_fn",autocb:"autocb",retslot:"ret",trace:"__iced_trace",passed_deferral:"__iced_passed_deferral",findDeferral:"findDeferral",lineno:"lineno",parent:"parent",filename:"filename",funcname:"funcname",catchExceptions:"catchExceptions",runtime_modes:["node","inline","window","none"]},e.makeDeferReturn=function(t,r,s,o,u){var a,f,l,c;l={};for(a in o)c=o[a],l[a]=c;return l[i.lineno]=r!=null?r[i.lineno]:void 0,f=function(){var i,o,a;return i=1<=arguments.length?n.call(arguments,0):[],r!=null&&(a=r.assign_fn)!=null&&a.apply(null,i),t?(o=t,u||(t=null),o._fulfill(s,l)):e._warn("overused deferral at "+e._trace_to_string(l))},f[i.trace]=l,f},e.__c=0,e.tickCounter=function(t){return e.__c++,e.__c%t===0?(e.__c=0,!0):!1},e.__active_trace=null,e._trace_to_string=function(e){var t;return t=e[i.funcname]||"<anonymous>",""+t+" ("+e[i.filename]+":"+(e[i.lineno]+1)+")"},e._warn=function(e){return typeof console!="undefined"&&console!==null?console.log("ICED warning: "+e):void 0},r.Deferrals=s=function(){function t(e,t){this.trace=t,this.continuation=e,this.count=1,this.ret=null}return t.prototype._call=function(t){var n;return this.continuation?(e.__active_trace=t,n=this.continuation,this.continuation=null,n(this.ret)):e._warn("Entered dead await at "+e._trace_to_string(t))},t.prototype._fulfill=function(t,n){var r=this;if(!(--this.count>0))return e.tickCounter(500)?typeof process!="undefined"&&process!==null?process.nextTick(function(){return r._call(n)}):setTimeout(function(){return r._call(n)},0):this._call(n)},t.prototype.defer=function(t){var n;return this.count++,n=this,e.makeDeferReturn(n,t,null,this.trace)},t}(),r.findDeferral=a=function(e){var t,n,r;for(n=0,r=e.length;n<r;n++){t=e[n];if(t!=null?t[i.trace]:void 0)return t}return null},r.Rendezvous=o=function(){function n(){this.completed=[],this.waiters=[],this.defer_id=0,this[i.deferrals]=this}var t;return t=function(){function e(e,t,n){this.rv=e,this.id=t,this.multi=n}return e.prototype.defer=function(e){return this.rv._deferWithId(this.id,e,this.multi)},e}(),n.prototype.wait=function(e){var t;return this.completed.length?(t=this.completed.shift(),e(t)):this.waiters.push(e)},n.prototype.defer=function(e){var t;return t=this.defer_id++,this.deferWithId(t,e)},n.prototype.id=function(e,n){var r;return n==null&&(n=!1),r={},r[i.deferrals]=new t(this,e,n),r},n.prototype._fulfill=function(e,t){var n;return this.waiters.length?(n=this.waiters.shift(),n(e)):this.completed.push(e)},n.prototype._deferWithId=function(t,n,r){return this.count++,e.makeDeferReturn(this,n,t,{},r)},n}(),r.stackWalk=f=function(t){var n,r,s,o;r=[],s=t?t[i.trace]:e.__active_trace;while(s)n="   at "+e._trace_to_string(s),r.push(n),s=s!=null?(o=s[i.parent])!=null?o[i.trace]:void 0:void 0;return r},r.exceptionHandler=u=function(e,t){var n;t||(t=console.log),t(e.stack),n=f();if(n.length)return t("Iced 'stack' trace (w/ real line numbers):"),t(n.join("\n"))},r.catchExceptions=function(e){return typeof process!="undefined"&&process!==null?process.on("uncaughtException",function(t){return u(t,e),process.exit(1)}):void 0}},e.runtime={},t(this,e,e.runtime)}).call(this)},e["./icedlib"]=new function(){var t=this;(function(){var n,r,i,s,o,u,a,f,l=[].slice;s=o=function(){},i=e("./iced"),t.iced=r=i.runtime,f=function(e,t,n,i){var s,u,a,f,c,h,p=this;h=o,f=r.findDeferral(arguments),u=new r.Rendezvous,i[0]=u.id(!0).__iced_deferrals.defer({assign_fn:function(){return function(){return s=l.call(arguments,0)}}(),lineno:17}),setTimeout(u.id(!1).__iced_deferrals.defer({lineno:18}),t),function(e){c=new r.Deferrals(e,{parent:f,filename:"src/icedlib.coffee",funcname:"_timeout"}),u.wait(c.defer({assign_fn:function(){return function(){return a=arguments[0]}}(),lineno:20})),c._fulfill()}(function(){return n&&(n[0]=a),e.apply(null,s)})},t.timeout=function(e,t,n){var r;return r=[],f(e,t,n,r),r[0]},u=function(e,t,n){var i,s,u,a,f=this;a=o,s=r.findDeferral(arguments),function(e){u=new r.Deferrals(e,{parent:s,filename:"src/icedlib.coffee",funcname:"_iand"}),n[0]=u.defer({assign_fn:function(){return function(){return i=arguments[0]}}(),lineno:35}),u._fulfill()}(function(){return i||(t[0]=!1),e()})},t.iand=function(e,t){var n;return n=[],u(e,t,n),n[0]},a=function(e,t,n){var i,s,u,a,f=this;a=o,s=r.findDeferral(arguments),function(e){u=new r.Deferrals(e,{parent:s,filename:"src/icedlib.coffee",funcname:"_ior"}),n[0]=u.defer({assign_fn:function(){return function(){return i=arguments[0]}}(),lineno:50}),u._fulfill()}(function(){return i&&(t[0]=!0),e()})},t.ior=function(e,t){var n;return n=[],a(e,t,n),n[0]},t.Pipeliner=n=function(){function e(e,t){this.window=e||1,this.delay=t||0,this.queue=[],this.n_out=0,this.cb=null,this[i["const"].deferrals]=this,this.defer=this._defer}return e.prototype.waitInQueue=function(e){var t,n,i,s=this;i=o,t=r.findDeferral(arguments),function(e){var i,o;i=[],o=function(e){var u,a,f;u=function(){return e(i)},a=function(){return o(e)},f=function(e){return i.push(e),a()};if(!(s.n_out>s.window))return u();(function(e){n=new r.Deferrals(e,{parent:t,filename:"src/icedlib.coffee",funcname:"Pipeliner.waitInQueue"}),s.cb=n.defer({lineno:86}),n._fulfill()})(f)},o(e)}(function(){s.n_out++,function(e){if(!s.delay)return e();(function(e){n=new r.Deferrals(e,{parent:t,filename:"src/icedlib.coffee",funcname:"Pipeliner.waitInQueue"}),setTimeout(n.defer({lineno:94}),s.delay),n._fulfill()})(e)}(function(){return e()})})},e.prototype.__defer=function(e,t){var n,i,s,u,a,f=this;a=o,s=r.findDeferral(arguments),function(n){u=new r.Deferrals(n,{parent:s,filename:"src/icedlib.coffee",funcname:"Pipeliner.__defer"}),i=u.defer({lineno:107}),e[0]=function(){var e,n;return e=1<=arguments.length?l.call(arguments,0):[],(n=t.assign_fn)!=null&&n.apply(null,e),i()},u._fulfill()}(function(){f.n_out--;if(f.cb)return n=f.cb,f.cb=null,n()})},e.prototype._defer=function(e){var t;return t=[],this.__defer(t,e),t[0]},e.prototype.flush=function(e){var t,n,i,s,o,u=this;i=e,t=r.findDeferral(arguments),s=[],o=function(e){var i,a,f;i=function(){return e(s)},a=function(){return o(e)},f=function(e){return s.push(e),a()};if(!u.n_out)return i();(function(e){n=new r.Deferrals(e,{parent:t,filename:"src/icedlib.coffee",funcname:"Pipeliner.flush"}),u.cb=n.defer({lineno:134}),n._fulfill()})(f)},o(i)},e}()}).call(this)},e["./icedlib"]}();typeof define=="function"&&define.amd?(define(function(){return t}),define(function(){return t.iced})):(e.icedlib=t,e.iced=t.iced)})(this)
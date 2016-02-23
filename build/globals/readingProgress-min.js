(function(){this.metal=this.metal||{},this.metalNamed=this.metalNamed||{};var t={};t["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},t.classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.inherits=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},t.possibleConstructorReturn=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},function(){var e=function(){function e(){t.classCallCheck(this,e)}return e.abstractMethod=function(){throw Error("Unimplemented abstract method")},e.collectSuperClassesProperty=function(t,e){for(var n=[t[e]];t.__proto__&&!t.__proto__.isPrototypeOf(Function);)t=t.__proto__,n.push(t[e]);return n},e.getFunctionName=function(t){if(!t.name){var e=t.toString();t.name=e.substring(9,e.indexOf("("))}return t.name},e.getUid=function(t){return t?t[e.UID_PROPERTY]||(t[e.UID_PROPERTY]=e.uniqueIdCounter_++):e.uniqueIdCounter_++},e.identityFunction=function(t){return t},e.isBoolean=function(t){return"boolean"==typeof t},e.isDef=function(t){return void 0!==t},e.isDefAndNotNull=function(t){return e.isDef(t)&&!e.isNull(t)},e.isDocument=function(e){return e&&"object"===("undefined"==typeof e?"undefined":t["typeof"](e))&&9===e.nodeType},e.isElement=function(e){return e&&"object"===("undefined"==typeof e?"undefined":t["typeof"](e))&&1===e.nodeType},e.isFunction=function(t){return"function"==typeof t},e.isNull=function(t){return null===t},e.isNumber=function(t){return"number"==typeof t},e.isWindow=function(t){return null!==t&&t===t.window},e.isObject=function(e){var n="undefined"==typeof e?"undefined":t["typeof"](e);return"object"===n&&null!==e||"function"===n},e.isPromise=function(e){return e&&"object"===("undefined"==typeof e?"undefined":t["typeof"](e))&&"function"==typeof e.then},e.isString=function(t){return"string"==typeof t},e.mergeSuperClassesProperty=function(t,n,i){var r=n+"_MERGED";if(t.hasOwnProperty(r))return!1;var o=e.collectSuperClassesProperty(t,n);return i&&(o=i(o)),t[r]=o,!0},e.nullFunction=function(){},e}();e.UID_PROPERTY="core_"+(1e9*Math.random()>>>0),e.uniqueIdCounter_=1,this.metal.core=e}.call(this),function(){var e=this.metal.core,n=function(){function n(){t.classCallCheck(this,n)}return n.equal=function(t,e){for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return t.length===e.length},n.firstDefinedValue=function(t){for(var e=0;e<t.length;e++)if(void 0!==t[e])return t[e]},n.flatten=function(t,e){for(var i=e||[],r=0;r<t.length;r++)Array.isArray(t[r])?n.flatten(t[r],i):i.push(t[r]);return i},n.remove=function(t,e){var i,r=t.indexOf(e);return(i=r>=0)&&n.removeAt(t,r),i},n.removeAt=function(t,e){return 1===Array.prototype.splice.call(t,e,1).length},n.slice=function(t,n,i){for(var r=[],o=e.isDef(i)?i:t.length,s=n;o>s;s++)r.push(t[s]);return r},n}();this.metal.array=n}.call(this),function(){var t={};t.throwException=function(e){t.nextTick(function(){throw e})},t.run=function(e,n){t.run.workQueueScheduled_||(t.nextTick(t.run.processWorkQueue),t.run.workQueueScheduled_=!0),t.run.workQueue_.push(new t.run.WorkItem_(e,n))},t.run.workQueueScheduled_=!1,t.run.workQueue_=[],t.run.processWorkQueue=function(){for(;t.run.workQueue_.length;){var e=t.run.workQueue_;t.run.workQueue_=[];for(var n=0;n<e.length;n++){var i=e[n];try{i.fn.call(i.scope)}catch(r){t.throwException(r)}}}t.run.workQueueScheduled_=!1},t.run.WorkItem_=function(t,e){this.fn=t,this.scope=e},t.nextTick=function(e,n){var i=e;return n&&(i=e.bind(n)),i=t.nextTick.wrapCallback_(i),"function"==typeof setImmediate?void setImmediate(i):(t.nextTick.setImmediate_||(t.nextTick.setImmediate_=t.nextTick.getSetImmediateEmulator_()),void t.nextTick.setImmediate_(i))},t.nextTick.setImmediate_=null,t.nextTick.getSetImmediateEmulator_=function(){var t;if("function"==typeof MessageChannel&&(t=MessageChannel),"undefined"==typeof t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&(t=function(){var t=document.createElement("iframe");t.style.display="none",t.src="",document.documentElement.appendChild(t);var e=t.contentWindow,n=e.document;n.open(),n.write(""),n.close();var i="callImmediate"+Math.random(),r=e.location.protocol+"//"+e.location.host,o=function(t){(t.origin===r||t.data===i)&&this.port1.onmessage()}.bind(this);e.addEventListener("message",o,!1),this.port1={},this.port2={postMessage:function(){e.postMessage(i,r)}}}),"undefined"!=typeof t){var e=new t,n={},i=n;return e.port1.onmessage=function(){n=n.next;var t=n.cb;n.cb=null,t()},function(t){i.next={cb:t},i=i.next,e.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("script")?function(t){var e=document.createElement("script");e.onreadystatechange=function(){e.onreadystatechange=null,e.parentNode.removeChild(e),e=null,t(),t=null},document.documentElement.appendChild(e)}:function(t){setTimeout(t,0)}},t.nextTick.wrapCallback_=function(t){return t},this.metal.async=t}.call(this),function(){var e=function(){function e(){t.classCallCheck(this,e),this.disposed_=!1}return e.prototype.dispose=function(){this.disposed_||(this.disposeInternal(),this.disposed_=!0)},e.prototype.disposeInternal=function(){},e.prototype.isDisposed=function(){return this.disposed_},e}();this.metal.Disposable=e}.call(this),function(){var e=this.metal.core,n=function(){function n(){t.classCallCheck(this,n)}return n.mixin=function(t){for(var e,n,i=1;i<arguments.length;i++){n=arguments[i];for(e in n)t[e]=n[e]}return t},n.getObjectByName=function(t,n){for(var i,r=t.split("."),o=n||window;i=r.shift();){if(!e.isDefAndNotNull(o[i]))return null;o=o[i]}return o},n.map=function(t,e){for(var n={},i=Object.keys(t),r=0;r<i.length;r++)n[i[r]]=e(i[r],t[i[r]]);return n},n}();this.metal.object=n}.call(this),function(){var e=function(){function e(){t.classCallCheck(this,e)}return e.collapseBreakingSpaces=function(t){return t.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")},e.getRandomString=function(){var t=2147483648;return Math.floor(Math.random()*t).toString(36)+Math.abs(Math.floor(Math.random()*t)^Date.now()).toString(36)},e.hashCode=function(t){for(var e=0,n=0,i=t.length;i>n;n++)e=31*e+t.charCodeAt(n),e%=4294967296;return e},e.replaceInterval=function(t,e,n,i){return t.substring(0,e)+i+t.substring(n)},e}();this.metal.string=e}.call(this),function(){var t=this.metal.core,e=this.metal.array,n=this.metal.async,i=this.metal.Disposable,r=this.metal.object,o=this.metal.string;this.metal.metal=t,this.metalNamed.metal={},this.metalNamed.metal.core=t,this.metalNamed.metal.array=e,this.metalNamed.metal.async=n,this.metalNamed.metal.Disposable=i,this.metalNamed.metal.object=r,this.metalNamed.metal.string=o}.call(this),function(){var e=this.metalNamed.metal.Disposable,n=function(e){function n(i,r,o){t.classCallCheck(this,n);var s=t.possibleConstructorReturn(this,e.call(this));return s.emitter_=i,s.event_=r,s.listener_=o,s}return t.inherits(n,e),n.prototype.disposeInternal=function(){this.removeListener(),this.emitter_=null,this.listener_=null},n.prototype.removeListener=function(){this.emitter_.isDisposed()||this.emitter_.removeListener(this.event_,this.listener_)},n}(e);n.prototype.registerMetalComponent&&n.prototype.registerMetalComponent(n,"EventHandle"),this.metal.EventHandle=n}.call(this),function(){var e=this.metalNamed.metal.core,n=this.metalNamed.metal.array,i=this.metalNamed.metal.Disposable,r=this.metal.EventHandle,o=function(i){function o(){t.classCallCheck(this,o);var e=t.possibleConstructorReturn(this,i.call(this));return e.events_=[],e.maxListeners_=10,e.shouldUseFacade_=!1,e}return t.inherits(o,i),o.prototype.addListener=function(t,e,n){this.validateListener_(e),t=this.normalizeEvents_(t);for(var i=0;i<t.length;i++)this.addSingleListener_(t[i],e,n);return new r(this,t,e)},o.prototype.addSingleListener_=function(t,e,n,i){this.emit("newListener",t,e),this.events_[t]||(this.events_[t]=[]),this.events_[t].push({"default":n,fn:e,origin:i});var r=this.events_[t];r.length>this.maxListeners_&&!r.warned&&(r.warned=!0)},o.prototype.disposeInternal=function(){this.events_=[]},o.prototype.emit=function(t){var e,i=n.slice(arguments,1),r=(this.events_[t]||[]).concat();this.getShouldUseFacade()&&(e={preventDefault:function(){e.preventedDefault=!0},target:this,type:t},i.push(e));for(var o=[],s=0;s<r.length;s++)r[s]["default"]?o.push(r[s]):r[s].fn.apply(this,i);if(!e||!e.preventedDefault)for(var a=0;a<o.length;a++)o[a].fn.apply(this,i);return"*"!==t&&this.emit.apply(this,["*",t].concat(i)),r.length>0},o.prototype.getShouldUseFacade=function(){return this.shouldUseFacade_},o.prototype.listeners=function(t){return(this.events_[t]||[]).map(function(t){return t.fn})},o.prototype.many=function(t,e,n){t=this.normalizeEvents_(t);for(var i=0;i<t.length;i++)this.many_(t[i],e,n);return new r(this,t,n)},o.prototype.many_=function(t,e,n){function i(){0===--e&&r.removeListener(t,i),n.apply(r,arguments)}var r=this;0>=e||r.addSingleListener_(t,i,!1,n)},o.prototype.matchesListener_=function(t,e){return t.fn===e||t.origin&&t.origin===e},o.prototype.normalizeEvents_=function(t){return e.isString(t)?[t]:t},o.prototype.off=function(t,e){this.validateListener_(e),t=this.normalizeEvents_(t);for(var n=0;n<t.length;n++){var i=this.events_[t[n]]||[];this.removeMatchingListenerObjs_(i,e)}return this},o.prototype.on=function(){return this.addListener.apply(this,arguments)},o.prototype.once=function(t,e){return this.many(t,1,e)},o.prototype.removeAllListeners=function(t){if(t)for(var e=this.normalizeEvents_(t),n=0;n<e.length;n++)this.events_[e[n]]=null;else this.events_={};return this},o.prototype.removeMatchingListenerObjs_=function(t,e){for(var n=t.length-1;n>=0;n--)this.matchesListener_(t[n],e)&&t.splice(n,1)},o.prototype.removeListener=function(){return this.off.apply(this,arguments)},o.prototype.setMaxListeners=function(t){return this.maxListeners_=t,this},o.prototype.setShouldUseFacade=function(t){return this.shouldUseFacade_=t,this},o.prototype.validateListener_=function(t){if(!e.isFunction(t))throw new TypeError("Listener must be a function")},o}(i);o.prototype.registerMetalComponent&&o.prototype.registerMetalComponent(o,"EventEmitter"),this.metal.EventEmitter=o}.call(this),function(){var e=this.metalNamed.metal.Disposable,n=this.metalNamed.metal.object,i=function(e){function i(n,r,o,s){t.classCallCheck(this,i);var a=t.possibleConstructorReturn(this,e.call(this));return a.blacklist_=o||{},a.originEmitter_=n,a.proxiedEvents_={},a.targetEmitter_=r,a.whitelist_=s,a.startProxy_(),a}return t.inherits(i,e),i.prototype.addListener_=function(t){this.originEmitter_.on(t,this.proxiedEvents_[t])},i.prototype.disposeInternal=function(){n.map(this.proxiedEvents_,this.removeListener_.bind(this)),this.proxiedEvents_=null,this.originEmitter_=null,this.targetEmitter_=null},i.prototype.proxyEvent_=function(t){if(this.shouldProxyEvent_(t)){var e=this;this.proxiedEvents_[t]=function(){var n=[t].concat(Array.prototype.slice.call(arguments,0));e.targetEmitter_.emit.apply(e.targetEmitter_,n)},this.addListener_(t)}},i.prototype.removeListener_=function(t){this.originEmitter_.removeListener(t,this.proxiedEvents_[t])},i.prototype.shouldProxyEvent_=function(t){return this.whitelist_&&!this.whitelist_[t]?!1:this.blacklist_[t]?!1:!this.proxiedEvents_[t]},i.prototype.startProxy_=function(){this.targetEmitter_.on("newListener",this.proxyEvent_.bind(this))},i}(e);i.prototype.registerMetalComponent&&i.prototype.registerMetalComponent(i,"EventEmitterProxy"),this.metal.EventEmitterProxy=i}.call(this),function(){var e=this.metalNamed.metal.Disposable,n=function(e){function n(){t.classCallCheck(this,n);var i=t.possibleConstructorReturn(this,e.call(this));return i.eventHandles_=[],i}return t.inherits(n,e),n.prototype.add=function(){for(var t=0;t<arguments.length;t++)this.eventHandles_.push(arguments[t])},n.prototype.disposeInternal=function(){this.eventHandles_=null},n.prototype.removeAllListeners=function(){for(var t=0;t<this.eventHandles_.length;t++)this.eventHandles_[t].removeListener();this.eventHandles_=[]},n}(e);n.prototype.registerMetalComponent&&n.prototype.registerMetalComponent(n,"EventHandler"),this.metal.EventHandler=n}.call(this),function(){var t=this.metal.EventEmitter,e=this.metal.EventEmitterProxy,n=this.metal.EventHandle,i=this.metal.EventHandler;this.metal.events=t,this.metalNamed.events={},this.metalNamed.events.EventEmitter=t,this.metalNamed.events.EventEmitterProxy=e,this.metalNamed.events.EventHandle=n,this.metalNamed.events.EventHandler=i}.call(this),function(){var e=this.metalNamed.events.EventHandle,n=function(e){function n(i,r,o,s){t.classCallCheck(this,n);var a=t.possibleConstructorReturn(this,e.call(this,i,r,o));return a.capture_=s,a}return t.inherits(n,e),n.prototype.removeListener=function(){this.emitter_.removeEventListener(this.event_,this.listener_,this.capture_)},n}(e);n.prototype.registerMetalComponent&&n.prototype.registerMetalComponent(n,"DomEventHandle"),this.metal.DomEventHandle=n}.call(this),function(){var e=this.metalNamed.metal.core,n=this.metalNamed.metal.object,i=this.metal.DomEventHandle,r=function(){function r(){t.classCallCheck(this,r)}return r.addClasses=function(t,n){e.isObject(t)&&e.isString(n)&&("classList"in t?r.addClassesWithNative_(t,n):r.addClassesWithoutNative_(t,n))},r.addClassesWithNative_=function(t,e){e.split(" ").forEach(function(e){t.classList.add(e)})},r.addClassesWithoutNative_=function(t,e){var n=" "+t.className+" ",i="";e=e.split(" ");for(var r=0;r<e.length;r++){var o=e[r];-1===n.indexOf(" "+o+" ")&&(i+=" "+o)}i&&(t.className=t.className+i)},r.append=function(t,n){if(e.isString(n)&&(n=r.buildFragment(n)),n instanceof NodeList)for(var i=Array.prototype.slice.call(n),o=0;o<i.length;o++)t.appendChild(i[o]);else t.appendChild(n);return n},r.buildFragment=function(t){var e=document.createElement("div");e.innerHTML="<br>"+t,e.removeChild(e.firstChild);for(var n=document.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);return n},r.contains=function(t,n){return e.isDocument(t)?t.documentElement.contains(n):t.contains(n)},r.delegate=function(t,e,n,i){var o=r.customEvents[e];return o&&o.delegate&&(e=o.originalEvent,i=o.handler.bind(o,i)),r.on(t,e,r.handleDelegateEvent_.bind(null,n,i))},r.enterDocument=function(t){r.append(document.body,t)},r.exitDocument=function(t){t.parentNode&&t.parentNode.removeChild(t)},r.handleDelegateEvent_=function(t,n,i){r.normalizeDelegateEvent_(i);for(var o=i.target,s=!0;o&&!i.stopped&&(e.isString(t)&&r.match(o,t)&&(i.delegateTarget=o,s&=n(i)),o!==i.currentTarget);)o=o.parentNode;return i.delegateTarget=null,s},r.hasClass=function(t,e){return"classList"in t?r.hasClassWithNative_(t,e):r.hasClassWithoutNative_(t,e)},r.hasClassWithNative_=function(t,e){return t.classList.contains(e)},r.hasClassWithoutNative_=function(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>=0},r.isEmpty=function(t){return 0===t.childNodes.length},r.match=function(t,e){if(!t||1!==t.nodeType)return!1;var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;return i?i.call(t,e):r.matchFallback_(t,e)},r.matchFallback_=function(t,e){for(var n=document.querySelectorAll(e,t.parentNode),i=0;i<n.length;++i)if(n[i]===t)return!0;return!1},r.next=function(t,e){do if(t=t.nextSibling,t&&r.match(t,e))return t;while(t);return null},r.normalizeDelegateEvent_=function(t){t.stopPropagation=r.stopPropagation_,t.stopImmediatePropagation=r.stopImmediatePropagation_},r.on=function(t,n,o,s){if(e.isString(t))return r.delegate(document,n,t,o);var a=r.customEvents[n];return a&&a.event&&(n=a.originalEvent,o=a.handler.bind(a,o)),t.addEventListener(n,o,s),new i(t,n,o,s)},r.once=function(t,e,n){var i=this.on(t,e,function(){return i.removeListener(),n.apply(this,arguments)});return i},r.registerCustomEvent=function(t,e){r.customEvents[t]=e},r.removeChildren=function(t){for(var e;e=t.firstChild;)t.removeChild(e)},r.removeClasses=function(t,n){e.isObject(t)&&e.isString(n)&&("classList"in t?r.removeClassesWithNative_(t,n):r.removeClassesWithoutNative_(t,n))},r.removeClassesWithNative_=function(t,e){e.split(" ").forEach(function(e){t.classList.remove(e)})},r.removeClassesWithoutNative_=function(t,e){var n=" "+t.className+" ";e=e.split(" ");for(var i=0;i<e.length;i++)n=n.replace(" "+e[i]+" "," ");t.className=n.trim()},r.replace=function(t,e){t&&e&&t!==e&&t.parentNode&&(t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t))},r.stopImmediatePropagation_=function(){this.stopped=!0,Event.prototype.stopImmediatePropagation.call(this)},r.stopPropagation_=function(){this.stopped=!0,Event.prototype.stopPropagation.call(this)},r.supportsEvent=function(t,n){return r.customEvents[n]?!0:(e.isString(t)&&(o[t]||(o[t]=document.createElement(t)),t=o[t]),"on"+n in t)},r.toElement=function(t){return e.isElement(t)||e.isDocument(t)?t:e.isString(t)?"#"===t[0]&&-1===t.indexOf(" ")?document.getElementById(t.substr(1)):document.querySelector(t):null},r.toggleClasses=function(t,n){e.isObject(t)&&e.isString(n)&&("classList"in t?r.toggleClassesWithNative_(t,n):r.toggleClassesWithoutNative_(t,n))},r.toggleClassesWithNative_=function(t,e){e.split(" ").forEach(function(e){t.classList.toggle(e)})},r.toggleClassesWithoutNative_=function(t,e){var n=" "+t.className+" ";e=e.split(" ");for(var i=0;i<e.length;i++){var r=" "+e[i]+" ",o=n.indexOf(r);n=-1===o?n+e[i]+" ":n.substring(0,o)+" "+n.substring(o+r.length)}t.className=n.trim()},r.triggerEvent=function(t,e,i){var r=document.createEvent("HTMLEvents");r.initEvent(e,!0,!0),n.mixin(r,i),t.dispatchEvent(r)},r}(),o={};r.customEvents={},this.metal.dom=r}.call(this),function(){var e=this.metal.dom,n=this.metalNamed.events.EventEmitterProxy,i=function(n){function i(){return t.classCallCheck(this,i),t.possibleConstructorReturn(this,n.apply(this,arguments))}return t.inherits(i,n),i.prototype.addListener_=function(t){this.originEmitter_.addEventListener?e.on(this.originEmitter_,t,this.proxiedEvents_[t]):n.prototype.addListener_.call(this,t)},i.prototype.removeListener_=function(t){this.originEmitter_.removeEventListener?this.originEmitter_.removeEventListener(t,this.proxiedEvents_[t]):n.prototype.removeListener_.call(this,t)},i.prototype.shouldProxyEvent_=function(t){return n.prototype.shouldProxyEvent_.call(this,t)&&(!this.originEmitter_.addEventListener||e.supportsEvent(this.originEmitter_,t))},i}(n);i.prototype.registerMetalComponent&&i.prototype.registerMetalComponent(i,"DomEventEmitterProxy"),this.metal.DomEventEmitterProxy=i}.call(this),function(){var e=this.metal.dom,n=this.metalNamed.metal.string,i=function(){function i(){t.classCallCheck(this,i)}return i.checkAnimationEventName=function(){return void 0===i.animationEventName_&&(i.animationEventName_={animation:i.checkAnimationEventName_("animation"),transition:i.checkAnimationEventName_("transition")}),i.animationEventName_},i.checkAnimationEventName_=function(t){for(var e=["Webkit","MS","O",""],r=n.replaceInterval(t,0,1,t.substring(0,1).toUpperCase()),o=[r+"End",r+"End",r+"End",t+"end"],s=0;s<e.length;s++)if(void 0!==i.animationElement_.style[e[s]+r])return e[s].toLowerCase()+o[s];return t+"end"},i.checkAttrOrderChange=function(){if(void 0===i.attrOrderChange_){var t='<div data-component="" data-ref=""></div>',n=document.createElement("div");e.append(n,t),i.attrOrderChange_=t!==n.innerHTML}return i.attrOrderChange_},i}();i.animationElement_=document.createElement("div"),i.animationEventName_=void 0,i.attrOrderChange_=void 0,this.metal.features=i}.call(this),function(){var e=this.metalNamed.metal.async,n=this.metal.dom,i=function(){function i(){t.classCallCheck(this,i)}return i.run=function(t,e){var i=document.createElement("script");return i.text=t,e?e(i):document.head.appendChild(i),n.exitDocument(i),i},i.runFile=function(t,e,i){var r=document.createElement("script");r.src=t;var o=function(){n.exitDocument(r),e&&e()};return n.on(r,"load",o),n.on(r,"error",o),i?i(r):document.head.appendChild(r),r},i.runScript=function(t,r,o){var s=function(){r&&r()};return t.type&&"text/javascript"!==t.type?void e.nextTick(s):(n.exitDocument(t),t.src?i.runFile(t.src,r,o):(e.nextTick(s),i.run(t.text,o)))},i.runScriptsInElement=function(t,n,r){var o=t.querySelectorAll("script");o.length?i.runScriptsInOrder(o,0,n,r):n&&e.nextTick(n)},i.runScriptsInOrder=function(t,n,r,o){i.runScript(t.item(n),function(){n<t.length-1?i.runScriptsInOrder(t,n+1,r,o):r&&e.nextTick(r)},o)},i}();this.metal.globalEval=i}.call(this),function(){var e=this.metalNamed.metal.async,n=this.metal.dom,i=function(){function i(){t.classCallCheck(this,i)}return i.run=function(t,e){var n=document.createElement("style");return n.innerHTML=t,e?e(n):document.head.appendChild(n),n},i.runFile=function(t,e,n){var r=document.createElement("link");return r.rel="stylesheet",r.href=t,i.runStyle(r,e,n),r},i.runStyle=function(t,i,r){var o=function(){i&&i()};return t.rel&&"stylesheet"!==t.rel?void e.nextTick(o):("STYLE"===t.tagName?e.nextTick(o):(n.on(t,"load",o),n.on(t,"error",o)),r?r(t):document.head.appendChild(t),t)},i.runStylesInElement=function(t,n,r){var o=t.querySelectorAll("style,link");if(0===o.length&&n)return void e.nextTick(n);for(var s=0,a=function(){n&&++s===o.length&&e.nextTick(n)},l=0;l<o.length;l++)i.runStyle(o[l],a,r)},i}();this.metal.globalEvalStyles=i}.call(this),function(){var t=this.metal.dom,e=this.metal.features,n={mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"};Object.keys(n).forEach(function(e){t.registerCustomEvent(e,{delegate:!0,handler:function(t,n){var i=n.relatedTarget,r=n.delegateTarget;return!i||i!==r&&!r.contains(i)?(n.customType=e,t(n)):void 0},originalEvent:n[e]})});var i={animation:"animationend",transition:"transitionend"};Object.keys(i).forEach(function(n){var r=i[n];t.registerCustomEvent(r,{event:!0,delegate:!0,handler:function(t,e){return e.customType=r,t(e)},originalEvent:e.checkAnimationEventName()[n]})})}.call(this),function(){var t=this.metal.dom,e=this.metal.DomEventEmitterProxy,n=this.metal.DomEventHandle,i=this.metal.features,r=this.metal.globalEval,o=this.metal.globalEvalStyles;this.metal.dom=t,this.metalNamed.dom={},this.metalNamed.dom.dom=t,this.metalNamed.dom.DomEventEmitterProxy=e,this.metalNamed.dom.DomEventHandle=n,this.metalNamed.dom.features=i,this.metalNamed.dom.globalEval=r,this.metalNamed.dom.globalEvalStyles=o}.call(this),function(){var e=this.metalNamed.metal.array,n=this.metalNamed.metal.async,i=this.metalNamed.metal.core,r=this.metalNamed.metal.object,o=this.metalNamed.events.EventEmitter,s=function(o){function s(e){t.classCallCheck(this,s);var n=t.possibleConstructorReturn(this,o.call(this));return n.scheduledBatchData_=null,n.attrsInfo_={},n.setShouldUseFacade(!0),n.mergeInvalidAttrs_(),n.addAttrsFromStaticHint_(e),n}return t.inherits(s,o),s.prototype.addAttr=function(t,e,n){this.buildAttrInfo_(t,e,n),Object.defineProperty(this,t,this.buildAttrPropertyDef_(t))},s.prototype.addAttrs=function(t,e,n){e=e||{};for(var i=Object.keys(t),r={},o=0;o<i.length;o++){var s=i[o];this.buildAttrInfo_(s,t[s],e[s]),r[s]=this.buildAttrPropertyDef_(s)}n!==!1&&Object.defineProperties(n||this,r)},s.prototype.addAttrsFromStaticHint_=function(t){var e=this.constructor,n=!1;s.mergeAttrsStatic(e)&&(n=e.prototype),this.addAttrs(e.ATTRS_MERGED,t,n)},s.prototype.assertValidAttrName_=function(t){if(this.constructor.INVALID_ATTRS_MERGED[t])throw new Error("It's not allowed to create an attribute with the name \""+t+'".')},s.prototype.buildAttrInfo_=function(t,e,n){this.assertValidAttrName_(t),this.attrsInfo_[t]={config:e||{},initialValue:n,state:s.States.UNINITIALIZED}},s.prototype.buildAttrPropertyDef_=function(t){return{configurable:!0,enumerable:!0,get:function(){return this.getAttrValue_(t)},set:function(e){this.setAttrValue_(t,e)}}},s.prototype.callFunction_=function(t,e){return i.isString(t)?this[t].apply(this,e):i.isFunction(t)?t.apply(this,e):void 0},s.prototype.callSetter_=function(t,e){var n=this.attrsInfo_[t],i=n.config;return i.setter&&(e=this.callFunction_(i.setter,[e])),e},s.prototype.callValidator_=function(t,e){var n=this.attrsInfo_[t],i=n.config;return i.validator?this.callFunction_(i.validator,[e]):!0},s.prototype.canSetAttribute=function(t){var e=this.attrsInfo_[t];return!e.config.writeOnce||!e.written},s.prototype.disposeInternal=function(){o.prototype.disposeInternal.call(this),this.attrsInfo_=null,this.scheduledBatchData_=null},s.prototype.emitBatchEvent_=function(){if(!this.isDisposed()){var t=this.scheduledBatchData_;this.scheduledBatchData_=null,this.emit("attrsChanged",t)}},s.prototype.get=function(t){return this[t]},s.prototype.getAttrConfig=function(t){return(this.attrsInfo_[t]||{}).config},s.prototype.getAttrs=function(t){for(var e={},n=t||this.getAttrNames(),i=0;i<n.length;i++)e[n[i]]=this[n[i]];return e},s.prototype.getAttrNames=function(){return Object.keys(this.attrsInfo_)},s.prototype.getAttrValue_=function(t){return this.initAttr_(t),this.attrsInfo_[t].value},s.prototype.hasBeenSet=function(t){var e=this.attrsInfo_[t];return e.state===s.States.INITIALIZED||e.initialValue},s.prototype.informChange_=function(t,e){if(this.shouldInformChange_(t,e)){var n={attrName:t,newVal:this[t],prevVal:e};this.emit(t+"Changed",n),this.scheduleBatchEvent_(n)}},s.prototype.initAttr_=function(t){var e=this.attrsInfo_[t];e.state===s.States.UNINITIALIZED&&(e.state=s.States.INITIALIZING,this.setInitialValue_(t),e.written||(e.state=s.States.INITIALIZING_DEFAULT,this.setDefaultValue_(t)),e.state=s.States.INITIALIZED)},s.mergeAttrs_=function(t){return r.mixin.apply(null,[{}].concat(t.reverse()))},s.mergeAttrsStatic=function(t){return i.mergeSuperClassesProperty(t,"ATTRS",s.mergeAttrs_)},s.prototype.mergeInvalidAttrs_=function(){i.mergeSuperClassesProperty(this.constructor,"INVALID_ATTRS",function(t){return e.flatten(t).reduce(function(t,e){return e&&(t[e]=!0),t},{})})},s.prototype.removeAttr=function(t){this.attrsInfo_[t]=null,delete this[t]},s.prototype.scheduleBatchEvent_=function(t){this.scheduledBatchData_||(n.nextTick(this.emitBatchEvent_,this),this.scheduledBatchData_={changes:{}});var e=t.attrName,i=this.scheduledBatchData_.changes;i[e]?i[e].newVal=t.newVal:i[e]=t},s.prototype.set=function(t,e){this[t]=e},s.prototype.setAttrs=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)this[e[n]]=t[e[n]]},s.prototype.setAttrValue_=function(t,e){if(this.canSetAttribute(t)&&this.validateAttrValue_(t,e)){var n=this.attrsInfo_[t];void 0===n.initialValue&&n.state===s.States.UNINITIALIZED&&(n.state=s.States.INITIALIZED);var i=this[t];n.value=this.callSetter_(t,e),n.written=!0,this.informChange_(t,i)}},s.prototype.setDefaultValue_=function(t){var e=this.attrsInfo_[t].config;void 0!==e.value?this[t]=e.value:this[t]=this.callFunction_(e.valueFn)},s.prototype.setInitialValue_=function(t){var e=this.attrsInfo_[t];void 0!==e.initialValue&&(this[t]=e.initialValue,e.initialValue=void 0)},s.prototype.shouldInformChange_=function(t,e){var n=this.attrsInfo_[t];return n.state===s.States.INITIALIZED&&(i.isObject(e)||e!==this[t])},s.prototype.validateAttrValue_=function(t,e){var n=this.attrsInfo_[t];return n.state===s.States.INITIALIZING_DEFAULT||this.callValidator_(t,e)},s}(o);s.prototype.registerMetalComponent&&s.prototype.registerMetalComponent(s,"Attribute"),s.INVALID_ATTRS=["attrs"],s.States={UNINITIALIZED:0,INITIALIZING:1,INITIALIZING_DEFAULT:2,INITIALIZED:3},this.metal.Attribute=s}.call(this),function(){var e=function(){function e(){t.classCallCheck(this,e)}return e.intersectRect=function(t,e,n,i,r,o,s,a){return!(r>n||t>s||o>i||e>a)},e}();this.metal.Geometry=e}.call(this),function(){var e=this.metal.metal,n=this.metal.Geometry,i=function(){function i(){t.classCallCheck(this,i)}return i.getClientHeight=function(t){return this.getClientSize_(t,"Height")},i.getClientSize_=function(t,n){var i=t;return e.isWindow(t)&&(i=t.document.documentElement),e.isDocument(t)&&(i=t.documentElement),i["client"+n]},i.getClientWidth=function(t){return this.getClientSize_(t,"Width")},i.getDocumentRegion_=function(t){var e=this.getHeight(t),n=this.getWidth(t);return this.makeRegion(e,e,0,n,0,n)},i.getHeight=function(t){return this.getSize_(t,"Height")},i.getOffsetLeft=function(t,e){return t.offsetLeft+(e?0:i.getTranslation(t).left)},i.getOffsetTop=function(t,e){return t.offsetTop+(e?0:i.getTranslation(t).top)},i.getRegion=function(t,n){return e.isDocument(t)||e.isWindow(t)?this.getDocumentRegion_(t):this.makeRegionFromBoundingRect_(t.getBoundingClientRect(),n)},i.getScrollLeft=function(t){return e.isWindow(t)?t.pageXOffset:e.isDocument(t)?t.defaultView.pageXOffset:t.scrollLeft},i.getScrollTop=function(t){return e.isWindow(t)?t.pageYOffset:e.isDocument(t)?t.defaultView.pageYOffset:t.scrollTop},i.getSize_=function(t,n){if(e.isWindow(t))return this.getClientSize_(t,n);if(e.isDocument(t)){var i=t.documentElement;return Math.max(t.body["scroll"+n],i["scroll"+n],t.body["offset"+n],i["offset"+n],i["client"+n])}return Math.max(t["client"+n],t["scroll"+n],t["offset"+n])},i.getTransformMatrixValues=function(t){var e=getComputedStyle(t),n=e.msTransform||e.transform||e.webkitTransform||e.mozTransform;if("none"!==n){for(var i=[],r=/([\d-\.\s]+)/g,o=r.exec(n);o;)i.push(o[1]),o=r.exec(n);return i}},i.getTranslation=function(t){var e=i.getTransformMatrixValues(t),n={left:0,top:0};return e&&(n.left=parseFloat(6===e.length?e[4]:e[13]),n.top=parseFloat(6===e.length?e[5]:e[14])),n},i.getWidth=function(t){return this.getSize_(t,"Width")},i.intersectRegion=function(t,e){return n.intersectRect(t.top,t.left,t.bottom,t.right,e.top,e.left,e.bottom,e.right)},i.insideRegion=function(t,e){return e.top>=t.top&&e.bottom<=t.bottom&&e.right<=t.right&&e.left>=t.left},i.insideViewport=function(t){return this.insideRegion(this.getRegion(window),t)},i.intersection=function(t,e){if(!this.intersectRegion(t,e))return null;var n=Math.min(t.bottom,e.bottom),i=Math.min(t.right,e.right),r=Math.max(t.left,e.left),o=Math.max(t.top,e.top);return this.makeRegion(n,n-o,r,i,o,i-r)},i.makeRegion=function(t,e,n,i,r,o){return{bottom:t,height:e,left:n,right:i,top:r,width:o}},i.makeRegionFromBoundingRect_=function(t,e){var n=e?i.getScrollLeft(document):0,r=e?i.getScrollTop(document):0;return this.makeRegion(t.bottom+r,t.height,t.left+n,t.right+n,t.top+r,t.width)},i.pointInsideRegion=function(t,e,n){return i.insideRegion(n,i.makeRegion(e,0,t,t,e,0))},i}();this.metal.Position=i}.call(this),function(){var e=this.metal.Position,n=function(){function n(){t.classCallCheck(this,n)}return n.align=function(t,n,i){var r=this.suggestAlignBestRegion(t,n,i),o=r.region,s=window.getComputedStyle(t,null);if("fixed"!==s.getPropertyValue("position")){o.top+=window.pageYOffset,o.left+=window.pageXOffset;for(var a=t;a=a.offsetParent;)o.top-=e.getOffsetTop(a),o.left-=e.getOffsetLeft(a)}return t.style.top=o.top+"px",t.style.left=o.left+"px",r.position},n.getAlignBestRegion=function(t,e,i){return n.suggestAlignBestRegion(t,e,i).region},n.getAlignRegion=function(t,i,r){var o=e.getRegion(i),s=e.getRegion(t),a=0,l=0;switch(r){case n.TopCenter:a=o.top-s.height,l=o.left+o.width/2-s.width/2;break;case n.RightCenter:a=o.top+o.height/2-s.height/2,l=o.left+o.width;break;case n.BottomCenter:a=o.bottom,l=o.left+o.width/2-s.width/2;break;case n.LeftCenter:a=o.top+o.height/2-s.height/2,l=o.left-s.width;break;case n.TopRight:a=o.top-s.height,l=o.right-s.width;break;case n.BottomRight:a=o.bottom,l=o.right-s.width;break;case n.BottomLeft:a=o.bottom,l=o.left;break;case n.TopLeft:a=o.top-s.height,l=o.left}return{bottom:a+s.height,height:s.height,left:l,right:l+s.width,
top:a,width:s.width}},n.isValidPosition=function(t){return t>=0&&8>=t},n.suggestAlignBestRegion=function(t,n,i){for(var r=0,o=i,s=this.getAlignRegion(t,n,o),a=o,l=s,c=e.getRegion(window),u=0;8>u;){if(e.intersectRegion(c,l)){var h=e.intersection(c,l),m=h.width*h.height;if(m>r&&(r=m,s=l,o=a),e.insideViewport(l))break}a=(i+ ++u)%8,l=this.getAlignRegion(t,n,a)}return{position:o,region:s}},n}();n.TopCenter=0,n.TopRight=1,n.RightCenter=2,n.BottomRight=3,n.BottomCenter=4,n.BottomLeft=5,n.LeftCenter=6,n.TopLeft=7,n.Top=n.TopCenter,n.Right=n.RightCenter,n.Bottom=n.BottomCenter,n.Left=n.LeftCenter,this.metal.Align=n}.call(this),function(){var t=this.metal.Align,e=this.metal.Geometry,n=this.metal.Position;this.metal.position=n,this.metalNamed.position={},this.metalNamed.position.Align=t,this.metalNamed.position.Geometry=e,this.metalNamed.position.Position=n}.call(this),function(){var e=this.metal.metal,n=this.metal.dom,i=this.metal.Attribute,r=this.metal.position,o=function(e){function i(r){t.classCallCheck(this,i);var o=t.possibleConstructorReturn(this,e.call(this,r));return o.regions=[],o.scrollHandle_=n.on(o.scrollElement,"scroll",o.checkPosition.bind(o)),o.init(),o}return t.inherits(i,e),i.prototype.disposeInternal=function(){this.deactivateAll(),this.scrollHandle_.dispose(),e.prototype.disposeInternal.call(this)},i.prototype.activate=function(t){this.activeIndex>=0&&this.deactivate(this.activeIndex),this.activeIndex=t,n.addClasses(this.getElementForIndex(t),this.activeClass)},i.prototype.checkPosition=function(){var t=this.getScrollHeight_(),e=r.getScrollTop(this.scrollElement);if(t<e+this.offset)return void this.activate(this.regions.length-1);var n=this.findBestRegionAt_();n!==this.activeIndex&&(-1===n?this.deactivateAll():this.activate(n))},i.prototype.deactivate=function(t){n.removeClasses(this.getElementForIndex(t),this.activeClass)},i.prototype.deactivateAll=function(){for(var t=0;t<this.regions.length;t++)this.deactivate(t);this.activeIndex=-1},i.prototype.findBestRegionAt_=function(){var t=-1,e=this.getCurrentPosition();if(this.regions.length>0&&e>=this.regions[0].top)for(var n=0;n<this.regions.length;n++){var i=this.regions[n],r=n===this.regions.length-1;if(e>=i.top&&(r||e<this.regions[n+1].top)){t=n;break}}return t},i.prototype.getCurrentPosition=function(){var t=r.getScrollTop(this.scrollElement);return t+this.offset+this.scrollElementRegion_.top},i.prototype.getElementForIndex=function(t){return this.resolveElement(this.regions[t].link)},i.prototype.getScrollHeight_=function(){var t=r.getHeight(this.scrollElement);return t+=this.scrollElementRegion_.top,t-=r.getClientHeight(this.scrollElement)},i.prototype.init=function(){this.refresh(),this.on("elementChanged",this.refresh),this.on("offsetChanged",this.checkPosition),this.on("scrollElementChanged",this.onScrollElementChanged_),this.on("selectorChanged",this.refresh)},i.prototype.onScrollElementChanged_=function(t){this.refresh(),this.scrollHandle_.dispose(),this.scrollHandle_=n.on(t.newVal,"scroll",this.checkPosition.bind(this))},i.prototype.refresh=function(){this.deactivateAll(),this.scrollElementRegion_=r.getRegion(this.scrollElement),this.scrollHeight_=this.getScrollHeight_(),this.regions=[];for(var t=this.element.querySelectorAll(this.selector),e=r.getScrollTop(this.scrollElement),n=0;n<t.length;++n){var i=t[n];if(i.hash&&i.hash.length>1){var o=document.getElementById(i.hash.substring(1));if(o){var s=r.getRegion(o);this.regions.push({link:i,top:s.top+e,bottom:s.bottom+e})}}}this.sortRegions_(),this.deactivateAll(),this.checkPosition()},i.prototype.sortRegions_=function(){this.regions.sort(function(t,e){return t.top-e.top})},i}(i);o.prototype.registerMetalComponent&&o.prototype.registerMetalComponent(o,"Scrollspy"),o.ATTRS={activeClass:{validator:e.isString,value:"active"},activeIndex:{validator:e.isNumber,value:-1},resolveElement:{validator:e.isFunction,value:e.identityFunction},scrollElement:{setter:n.toElement,value:document},offset:{validator:e.isNumber,value:0},element:{setter:n.toElement},selector:{validator:e.isString,value:"a"}},this.metal.Scrollspy=o}.call(this),function(){var e=this.metal.metal,n=this.metal.dom,i=this.metal.Scrollspy,r=function(i){function r(){return t.classCallCheck(this,r),t.possibleConstructorReturn(this,i.apply(this,arguments))}return t.inherits(r,i),r.prototype.init=function(){this.on("activeIndexChanged",this.handleActiveIndexChanged),this.on("progressChanged",this.handleProgressChanged),i.prototype.init.call(this)},r.prototype.checkPosition=function(){i.prototype.checkPosition.call(this),this.updateProgress()},r.prototype.handleActiveIndexChanged=function(t){if(e.isDef(t.prevVal)&&t.prevVal>=0){var n=this.getElementForIndex(t.prevVal);n.removeAttribute("data-reading-progress")}this.updateCompleted()},r.prototype.handleProgressChanged=function(t){var e=this.getElementForIndex(this.activeIndex);e.setAttribute("data-reading-progress",t.newVal),t.newVal<100?n.removeClasses(e,this.completedClass):n.addClasses(e,this.completedClass)},r.prototype.updateCompleted=function(){for(var t=0;t<this.regions.length;t++){var e=this.resolveElement(this.regions[t].link);t<this.activeIndex?n.addClasses(e,this.completedClass):n.removeClasses(e,this.completedClass)}},r.prototype.updateProgress=function(){var t=this.activeIndex;if(t>=0){var e=this.regions[t],n=this.getCurrentPosition(),i=this.getScrollHeight_()+this.offset,r=Math.min(i,e.bottom);this.progress=Math.min(100*(n-e.top)/(r-e.top),100)}},r}(i);r.prototype.registerMetalComponent&&r.prototype.registerMetalComponent(r,"ReadingProgress"),r.ATTRS={completedClass:{validator:e.isString,value:"reading-progress-completed"},progress:{validator:e.isNumber,value:0}},this.metal.ReadingProgress=r}.call(this)}).call(this);
/*! jQuery v2.2.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});
/**
 * @license
 * lodash 4.6.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash -o ./dist/lodash.js`
 */
;(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,o=n.length;++u<o;){var i=n[u];t(e,i,r(i),n)}return e}function u(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););return n}function o(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;
return true}function i(n,t){for(var r=-1,e=n.length,u=0,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[u++]=i)}return o}function f(n,t){return!!n.length&&-1<d(n,t,0)}function c(n,t,r){for(var e=-1,u=n.length;++e<u;)if(r(t,n[e]))return true;return false}function a(n,t){for(var r=-1,e=n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function l(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function s(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function h(n,t,r,e){
var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function p(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;return false}function _(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(f===q?i===i:r(i,f)))var f=i,c=o}return c}function v(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function g(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function d(n,t,r){if(t!==t)return C(n,r);--r;for(var e=n.length;++r<e;)if(n[r]===t)return r;
return-1}function y(n,t,r,e){--r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function b(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function x(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function j(n,t){for(var r,e=-1,u=n.length;++e<u;){var o=t(n[e]);o!==q&&(r=r===q?o:r+o)}return r}function m(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function w(n,t){return a(t,function(t){return[t,n[t]]})}function A(n){return function(t){return n(t)};
}function O(n,t){return a(t,function(t){return n[t]})}function k(n,t){for(var r=-1,e=n.length;++r<e&&-1<d(t,n[r],0););return r}function E(n,t){for(var r=n.length;r--&&-1<d(t,n[r],0););return r}function I(n){return n&&n.Object===Object?n:null}function S(n,t){if(n!==t){var r=null===n,e=n===q,u=n===n,o=null===t,i=t===q,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(t>n&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function R(n){return zn[n]}function W(n){return Mn[n]}function B(n){return"\\"+Fn[n]}function C(n,t,r){
var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function U(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function z(n,t){return n=typeof n=="number"||bn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function M(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function L(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function $(n,t){for(var r=-1,e=n.length,u=0,o=[];++r<e;){
var i=n[r];i!==t&&"__lodash_placeholder__"!==i||(n[r]="__lodash_placeholder__",o[u++]=r)}return o}function F(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function N(n){if(!n||!In.test(n))return n.length;for(var t=En.lastIndex=0;En.test(n);)t++;return t}function D(n){return Ln[n]}function Z(I){function bn(n){if(we(n)&&!qo(n)&&!(n instanceof On)){if(n instanceof An)return n;if(lu.call(n,"__wrapped__"))return Pr(n)}return new An(n)}function wn(){}function An(n,t){this.__wrapped__=n,
this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=q}function On(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function zn(){}function Mn(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Ln(n){var t=-1,r=n?n.length:0;for(this.__data__=new Mn;++t<r;)this.push(n[t])}function $n(n,t){var r=n.__data__;return $r(t)?(r=r.__data__,"__lodash_hash_undefined__"===(typeof t=="string"?r.string:r.hash)[t]):r.has(t);
}function Fn(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Zn(n,t){var r=Tn(n,t);return 0>r?false:(r==n.length-1?n.pop():Iu.call(n,r,1),true)}function qn(n,t){var r=Tn(n,t);return 0>r?q:n[r][1]}function Tn(n,t){for(var r=n.length;r--;)if(pe(n[r][0],t))return r;return-1}function Kn(n,t,r){var e=Tn(n,t);0>e?n.push([t,r]):n[e][1]=r}function Gn(n,t,r,e){return n===q||pe(n,cu[r])&&!lu.call(e,r)?t:n}function Yn(n,t,r){(r===q||pe(n[t],r))&&(typeof t!="number"||r!==q||t in n)||(n[t]=r);
}function Hn(n,t,r){var e=n[t];lu.call(n,t)&&pe(e,r)&&(r!==q||t in n)||(n[t]=r)}function Qn(n,t,r,e){return Qu(n,function(n,u,o){t(e,n,r(n),o)}),e}function Xn(n,t){return n&&tr(t,De(t),n)}function nt(n,t){for(var r=-1,e=null==n,u=t.length,o=Array(u);++r<u;)o[r]=e?q:$e(n,t[r]);return o}function tt(n){return de(n)?n:[]}function rt(n){return typeof n=="function"?n:Ye}function et(n){return qo(n)?n:qr(n)}function ut(n,t,r){return n===n&&(r!==q&&(n=n>r?r:n),t!==q&&(n=t>n?t:n)),n}function ot(n,t,r,e,o,i,f){
var c;if(e&&(c=i?e(n,o,i,f):e(n)),c!==q)return c;if(!me(n))return n;if(o=qo(n)){if(c=Br(n),!t)return nr(n,c)}else{var a=Rr(n),l="[object Function]"==a||"[object GeneratorFunction]"==a;if(Po(n))return Yt(n,t);if("[object Object]"==a||"[object Arguments]"==a||l&&!i){if(U(n))return i?n:{};if(c=Cr(l?{}:n),!t)return c=Xn(c,n),r?er(n,c):c}else{if(!Un[a])return i?n:{};c=Ur(n,a,t)}}return f||(f=new Fn),(i=f.get(n))?i:(f.set(n,c),(o?u:_t)(n,function(u,o){Hn(c,o,ot(u,t,r,e,o,n,f))}),r&&!o?er(n,c):c)}function it(n){
var t=De(n),r=t.length;return function(e){if(null==e)return!r;for(var u=r;u--;){var o=t[u],i=n[o],f=e[o];if(f===q&&!(o in Object(e))||!i(f))return false}return true}}function ft(n){return me(n)?Ou(n):{}}function ct(n,t,r){if(typeof n!="function")throw new iu("Expected a function");return Eu(function(){n.apply(q,r)},t)}function at(n,t,r,e){var u=-1,o=f,i=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=a(t,A(r))),e?(o=c,i=false):t.length>=200&&(o=$n,i=false,t=new Ln(t));n:for(;++u<l;){var p=n[u],_=r?r(p):p;if(i&&_===_){
for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else o(t,_,e)||s.push(p)}return s}function lt(n,t){var r=true;return Qu(n,function(n,e,u){return r=!!t(n,e,u)}),r}function st(n,t){var r=[];return Qu(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ht(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];t>0&&de(i)&&(r||qo(i)||ve(i))?t>1?ht(i,t-1,r,e):l(e,i):r||(e[e.length]=i)}return e}function pt(n,t){null==n||no(n,t,Ze)}function _t(n,t){return n&&no(n,t,De)}function vt(n,t){return n&&to(n,t,De);
}function gt(n,t){return i(t,function(t){return be(n[t])})}function dt(n,t){t=Lr(t,n)?[t+""]:et(t);for(var r=0,e=t.length;null!=n&&e>r;)n=n[t[r++]];return r&&r==e?n:q}function yt(n,t){return lu.call(n,t)||typeof n=="object"&&t in n&&null===mu(n)}function bt(n,t){return t in Object(n)}function xt(n,t,r){for(var e=r?c:f,u=n[0].length,o=n.length,i=o,l=Array(o),s=1/0,h=[];i--;){var p=n[i];i&&t&&(p=a(p,A(t))),s=zu(p.length,s),l[i]=r||!t&&(120>u||120>p.length)?q:new Ln(i&&p)}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&s>h.length;){
var g=p[_],d=t?t(g):g;if(v?!$n(v,d):!e(h,d,r)){for(i=o;--i;){var y=l[i];if(y?!$n(y,d):!e(n[i],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function jt(n,t,r){var e={};return _t(n,function(n,u,o){t(e,r(n),u,o)}),e}function mt(n,t,e){return Lr(t,n)||(t=et(t),n=Zr(n,t),t=Vr(t)),t=null==n?n:n[t],null==t?q:r(t,n,e)}function wt(n,t,r,e,u){if(n===t)n=true;else if(null==n||null==t||!me(n)&&!we(t))n=n!==n&&t!==t;else n:{var o=qo(n),i=qo(t),f="[object Array]",c="[object Array]";o||(f=Rr(n),f="[object Arguments]"==f?"[object Object]":f),
i||(c=Rr(t),c="[object Arguments]"==c?"[object Object]":c);var a="[object Object]"==f&&!U(n),i="[object Object]"==c&&!U(t);if((c=f==c)&&!a)u||(u=new Fn),n=o||Re(n)?wr(n,t,wt,r,e,u):Ar(n,t,f,wt,r,e,u);else{if(!(2&e)&&(o=a&&lu.call(n,"__wrapped__"),f=i&&lu.call(t,"__wrapped__"),o||f)){u||(u=new Fn),n=wt(o?n.value():n,f?t.value():t,r,e,u);break n}if(c)t:if(u||(u=new Fn),o=2&e,f=De(n),i=f.length,c=De(t).length,i==c||o){for(a=i;a--;){var l=f[a];if(!(o?l in t:yt(t,l))){n=false;break t}}if(c=u.get(n))n=c==t;else{
c=true,u.set(n,t);for(var s=o;++a<i;){var l=f[a],h=n[l],p=t[l];if(r)var _=o?r(p,h,l,t,n,u):r(h,p,l,n,t,u);if(_===q?h!==p&&!wt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l)}c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u["delete"](n),n=c}}else n=false;else n=false}}return n}function At(n,t,r,e){var u=r.length,o=u,i=!e;if(null==n)return!o;for(n=Object(n);u--;){var f=r[u];if(i&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false;
}for(;++u<o;){var f=r[u],c=f[0],a=n[c],l=f[1];if(i&&f[2]){if(a===q&&!(c in n))return false}else if(f=new Fn,c=e?e(a,l,c,n,t,f):q,c===q?!wt(l,a,e,3,f):!c)return false}return true}function Ot(n){var t=typeof n;return"function"==t?n:null==n?Ye:"object"==t?qo(n)?St(n[0],n[1]):It(n):nu(n)}function kt(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function Et(n,t){var r=-1,e=ge(n)?Array(n.length):[];return Qu(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function It(n){var t=Er(n);if(1==t.length&&t[0][2]){
var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==q||r in Object(n))}}return function(r){return r===n||At(r,n,t)}}function St(n,t){return function(r){var e=$e(r,n);return e===q&&e===t?Ne(r,n):wt(t,e,q,3)}}function Rt(n,t,r,e,o){if(n!==t){var i=qo(t)||Re(t)?q:Ze(t);u(i||t,function(u,f){if(i&&(f=u,u=t[f]),me(u)){o||(o=new Fn);var c=f,a=o,l=n[c],s=t[c],h=a.get(s);if(h)Yn(n,c,h);else{var h=e?e(l,s,c+"",n,t,a):q,p=h===q;p&&(h=s,qo(s)||Re(s)?qo(l)?h=l:de(l)?h=nr(l):(p=false,h=ot(s,!e)):ke(s)||ve(s)?ve(l)?h=Me(l):!me(l)||r&&be(l)?(p=false,
h=ot(s,!e)):h=l:p=false),a.set(s,h),p&&Rt(h,s,r,e,a),a["delete"](s),Yn(n,c,h)}}else c=e?e(n[f],u,f+"",n,t,o):q,c===q&&(c=u),Yn(n,f,c)})}}function Wt(n,t,r){var e=-1;return t=a(t.length?t:Array(1),kr()),n=Et(n,function(n){return{a:a(t,function(t){return t(n)}),b:++e,c:n}}),x(n,function(n,t){var e;n:{e=-1;for(var u=n.a,o=t.a,i=u.length,f=r.length;++e<i;){var c=S(u[e],o[e]);if(c){e=f>e?c*("desc"==r[e]?-1:1):c;break n}}e=n.b-t.b}return e})}function Bt(n,t){return n=Object(n),s(t,function(t,r){return r in n&&(t[r]=n[r]),
t},{})}function Ct(n,t){var r={};return pt(n,function(n,e){t(n,e)&&(r[e]=n)}),r}function Ut(n){return function(t){return null==t?q:t[n]}}function zt(n){return function(t){return dt(t,n)}}function Mt(n,t,r,e){var u=e?y:d,o=-1,i=t.length,f=n;for(r&&(f=a(n,A(r)));++o<i;)for(var c=0,l=t[o],l=r?r(l):l;-1<(c=u(f,l,c,e));)f!==n&&Iu.call(f,c,1),Iu.call(n,c,1);return n}function Lt(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(e==r||u!=o){var o=u;if(z(u))Iu.call(n,u,1);else if(Lr(u,n))delete n[u];else{
var u=et(u),i=Zr(n,u);null!=i&&delete i[Vr(u)]}}}}function $t(n,t){return n+Ru(Lu()*(t-n+1))}function Ft(n,t,r,e){t=Lr(t,n)?[t+""]:et(t);for(var u=-1,o=t.length,i=o-1,f=n;null!=f&&++u<o;){var c=t[u];if(me(f)){var a=r;if(u!=i){var l=f[c],a=e?e(l,c,f):q;a===q&&(a=null==l?z(t[u+1])?[]:{}:l)}Hn(f,c,a)}f=f[c]}return n}function Nt(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function Dt(n,t){var r;return Qu(n,function(n,e,u){
return r=t(n,e,u),!r}),!!r}function Zt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&2147483647>=u){for(;u>e;){var o=e+u>>>1,i=n[o];(r?t>=i:t>i)&&null!==i?e=o+1:u=o}return u}return qt(n,t,Ye,r)}function qt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,c=t===q;o>u;){var a=Ru((u+o)/2),l=r(n[a]),s=l!==q,h=l===l;(i?h||e:f?h&&s&&(e||null!=l):c?h&&(e||s):null==l?0:e?t>=l:t>l)?u=a+1:o=a}return zu(o,4294967294)}function Pt(n,t){for(var r=0,e=n.length,u=n[0],o=t?t(u):u,i=o,f=1,c=[u];++r<e;)u=n[r],
o=t?t(u):u,pe(o,i)||(i=o,c[f++]=u);return c}function Tt(n,t,r){var e=-1,u=f,o=n.length,i=true,a=[],l=a;if(r)i=false,u=c;else if(o<200)l=t?[]:a;else{if(u=t?null:eo(n))return F(u);i=false,u=$n,l=new Ln}n:for(;++e<o;){var s=n[e],h=t?t(s):s;if(i&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function Kt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););return r?Nt(n,e?0:o,e?o+1:u):Nt(n,e?o+1:0,e?u:o)}function Gt(n,t){
var r=n;return r instanceof On&&(r=r.value()),s(t,function(n,t){return t.func.apply(t.thisArg,l([n],t.args))},r)}function Vt(n,t,r){for(var e=-1,u=n.length;++e<u;)var o=o?l(at(o,n[e],t,r),at(n[e],o,t,r)):n[e];return o&&o.length?Tt(o,t,r):[]}function Jt(n,t,r){for(var e=-1,u=n.length,o=t.length,i={};++e<u;)r(i,n[e],o>e?t[e]:q);return i}function Yt(n,t){if(t)return n.slice();var r=new n.constructor(n.length);return n.copy(r),r}function Ht(n){var t=new n.constructor(n.byteLength);return new bu(t).set(new bu(n)),
t}function Qt(n,t,r,e){var u=-1,o=n.length,i=r.length,f=-1,c=t.length,a=Uu(o-i,0),l=Array(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<i;)(e||o>u)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l}function Xt(n,t,r,e){var u=-1,o=n.length,i=-1,f=r.length,c=-1,a=t.length,l=Uu(o-f,0),s=Array(l+a);for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++i<f;)(e||o>u)&&(s[l+r[i]]=n[u++]);return s}function nr(n,t){var r=-1,e=n.length;for(t||(t=Array(e));++r<e;)t[r]=n[r];return t}function tr(n,t,r){return rr(n,t,r);
}function rr(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],f=e?e(r[i],n[i],i,r,n):n[i];Hn(r,i,f)}return r}function er(n,t){return tr(n,io(n),t)}function ur(n,t){return function(r,u){var o=qo(r)?e:Qn,i=t?t():{};return o(r,n,kr(u),i)}}function or(n){return he(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:q,i=u>2?r[2]:q,o=typeof o=="function"?(u--,o):q;for(i&&Mr(r[0],r[1],i)&&(o=3>u?q:o,u=1),t=Object(t);++e<u;)(i=r[e])&&n(t,i,e,o);return t})}function ir(n,t){return function(r,e){if(null==r)return r;
if(!ge(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function fr(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var f=e[n?i:++u];if(false===r(o[f],f,o))break}return t}}function cr(n,t,r){function e(){return(this&&this!==Vn&&this instanceof e?o:n).apply(u?r:this,arguments)}var u=1&t,o=sr(n);return e}function ar(n){return function(t){t=Le(t);var r=In.test(t)?t.match(En):q,e=r?r[0]:t.charAt(0);return t=r?r.slice(1).join(""):t.slice(1),
e[n]()+t}}function lr(n){return function(t){return s(Ve(Ke(t)),n,"")}}function sr(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ft(n.prototype),t=n.apply(r,t);return me(t)?t:r}}function hr(n,t,e){
function u(){for(var i=arguments.length,f=Array(i),c=i,a=Sr(u);c--;)f[c]=arguments[c];return c=3>i&&f[0]!==a&&f[i-1]!==a?[]:$(f,a),i-=c.length,e>i?xr(n,t,_r,u.placeholder,q,f,c,q,q,e-i):r(this&&this!==Vn&&this instanceof u?o:n,this,f)}var o=sr(n);return u}function pr(n){return he(function(t){t=ht(t,1);var r=t.length,e=r,u=An.prototype.thru;for(n&&t.reverse();e--;){var o=t[e];if(typeof o!="function")throw new iu("Expected a function");if(u&&!i&&"wrapper"==Or(o))var i=new An([],true)}for(e=i?e:r;++e<r;)var o=t[e],u=Or(o),f="wrapper"==u?uo(o):q,i=f&&Fr(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?i[Or(f[0])].apply(i,f[3]):1==o.length&&Fr(o)?i[u]():i.thru(o);
return function(){var n=arguments,e=n[0];if(i&&1==n.length&&qo(e)&&e.length>=200)return i.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function _r(n,t,r,e,u,o,i,f,c,a){function l(){for(var d=arguments.length,y=d,b=Array(d);y--;)b[y]=arguments[y];if(_){var x,j=Sr(l),y=b.length;for(x=0;y--;)b[y]===j&&x++}if(e&&(b=Qt(b,e,u,_)),o&&(b=Xt(b,o,i,_)),d-=x,_&&a>d)return j=$(b,j),xr(n,t,_r,l.placeholder,r,b,j,f,c,a-d);if(j=h?r:this,y=p?j[n]:n,d=b.length,f){x=b.length;
for(var m=zu(f.length,x),w=nr(b);m--;){var A=f[m];b[m]=z(A,x)?w[A]:q}}else v&&d>1&&b.reverse();return s&&d>c&&(b.length=c),this&&this!==Vn&&this instanceof l&&(y=g||sr(y)),y.apply(j,b)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?q:sr(n);return l}function vr(n,t){return function(r,e){return jt(r,n,t(e))}}function gr(n){return he(function(t){return t=a(ht(t,1),kr()),he(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function dr(n,t,r){return t=Ce(t),n=N(n),t&&t>n?(t-=n,r=r===q?" ":r+"",
n=Ge(r,Su(t/N(r))),In.test(r)?n.match(En).slice(0,t).join(""):n.slice(0,t)):""}function yr(n,t,e,u){function o(){for(var t=-1,c=arguments.length,a=-1,l=u.length,s=Array(l+c),h=this&&this!==Vn&&this instanceof o?f:n;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++t];return r(h,i?e:this,s)}var i=1&t,f=sr(n);return o}function br(n){return function(t,r,e){e&&typeof e!="number"&&Mr(t,r,e)&&(r=e=q),t=ze(t),t=t===t?t:0,r===q?(r=t,t=0):r=ze(r)||0,e=e===q?r>t?1:-1:ze(e)||0;var u=-1;r=Uu(Su((r-t)/(e||1)),0);for(var o=Array(r);r--;)o[n?r:++u]=t,
t+=e;return o}}function xr(n,t,r,e,u,o,i,f,c,a){var l=8&t;f=f?nr(f):q;var s=l?i:q;i=l?q:i;var h=l?o:q;return o=l?q:o,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),t=[n,t,u,h,s,o,i,f,c,a],r=r.apply(q,t),Fr(n)&&fo(r,t),r.placeholder=e,r}function jr(n){var t=uu[n];return function(n,r){if(n=ze(n),r=Ce(r)){var e=(Le(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Le(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function mr(n,t,r,e,u,o,i,f){var c=2&t;if(!c&&typeof n!="function")throw new iu("Expected a function");
var a=e?e.length:0;if(a||(t&=-97,e=u=q),i=i===q?i:Uu(Ce(i),0),f=f===q?f:Ce(f),a-=u?u.length:0,64&t){var l=e,s=u;e=u=q}var h=c?q:uo(n);return o=[n,t,r,e,u,l,s,o,i,f],h&&(r=o[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&h[8]>=o[7].length||384==n&&h[8]>=h[7].length&&8==r,131>t||e)&&(1&n&&(o[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=o[3],o[3]=e?Qt(e,r,h[4]):nr(r),o[4]=e?$(o[3],"__lodash_placeholder__"):nr(h[4])),(r=h[5])&&(e=o[5],o[5]=e?Xt(e,r,h[6]):nr(r),o[6]=e?$(o[5],"__lodash_placeholder__"):nr(h[6])),(r=h[7])&&(o[7]=nr(r)),
128&n&&(o[8]=null==o[8]?h[8]:zu(o[8],h[8])),null==o[9]&&(o[9]=h[9]),o[0]=h[0],o[1]=t),n=o[0],t=o[1],r=o[2],e=o[3],u=o[4],f=o[9]=null==o[9]?c?0:n.length:Uu(o[9]-a,0),!f&&24&t&&(t&=-25),(h?ro:fo)(t&&1!=t?8==t||16==t?hr(n,t,f):32!=t&&33!=t||u.length?_r.apply(q,o):yr(n,t,r,e):cr(n,t,r),o)}function wr(n,t,r,e,u,o){var i=-1,f=2&u,c=1&u,a=n.length,l=t.length;if(!(a==l||f&&l>a))return false;if(l=o.get(n))return l==t;for(l=true,o.set(n,t);++i<a;){var s=n[i],h=t[i];if(e)var _=f?e(h,s,i,t,n,o):e(s,h,i,n,t,o);if(_!==q){
if(_)continue;l=false;break}if(c){if(!p(t,function(n){return s===n||r(s,n,e,u,o)})){l=false;break}}else if(s!==h&&!r(s,h,e,u,o)){l=false;break}}return o["delete"](n),l}function Ar(n,t,r,e,u,o,i){switch(r){case"[object ArrayBuffer]":if(n.byteLength!=t.byteLength||!e(new bu(n),new bu(t)))break;return true;case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":
return n==t+"";case"[object Map]":var f=L;case"[object Set]":if(f||(f=F),n.size!=t.size&&!(2&o))break;return(r=i.get(n))?r==t:wr(f(n),f(t),e,u,1|o,i.set(n,t));case"[object Symbol]":if(Yu)return Yu.call(n)==Yu.call(t)}return false}function Or(n){for(var t=n.name+"",r=Tu[t],e=lu.call(Tu,t)?r.length:0;e--;){var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function kr(){var n=bn.iteratee||He,n=n===He?Ot:n;return arguments.length?n(arguments[0],arguments[1]):n}function Er(n){n=qe(n);for(var t=n.length;t--;){
var r=n[t][1];n[t][2]=r===r&&!me(r)}return n}function Ir(n,t){var r=n[t];return Ae(r)?r:q}function Sr(n){return(lu.call(bn,"placeholder")?bn:n).placeholder}function Rr(n){return pu.call(n)}function Wr(n,t,r){if(null==n)return false;var e=r(n,t);return e||Lr(t)||(t=et(t),n=Zr(n,t),null!=n&&(t=Vr(t),e=r(n,t))),r=n?n.length:q,e||!!r&&je(r)&&z(t,r)&&(qo(n)||Ie(n)||ve(n))}function Br(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&lu.call(n,"index")&&(r.index=n.index,r.input=n.input),
r}function Cr(n){return typeof n.constructor!="function"||Nr(n)?{}:ft(mu(n))}function Ur(r,e,u){var o=r.constructor;switch(e){case"[object ArrayBuffer]":return Ht(r);case"[object Boolean]":case"[object Date]":return new o(+r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return e=u?Ht(r.buffer):r.buffer,
new r.constructor(e,r.byteOffset,r.length);case"[object Map]":return s(L(r),n,new r.constructor);case"[object Number]":case"[object String]":return new o(r);case"[object RegExp]":return e=new r.constructor(r.source,pn.exec(r)),e.lastIndex=r.lastIndex,e;case"[object Set]":return s(F(r),t,new r.constructor);case"[object Symbol]":return Yu?Object(Yu.call(r)):{}}}function zr(n){var t=n?n.length:q;return je(t)&&(qo(n)||Ie(n)||ve(n))?m(t,String):null}function Mr(n,t,r){if(!me(r))return false;var e=typeof t;
return("number"==e?ge(r)&&z(t,r.length):"string"==e&&t in r)?pe(r[t],n):false}function Lr(n,t){return typeof n=="number"?true:!qo(n)&&(en.test(n)||!rn.test(n)||null!=t&&n in Object(t))}function $r(n){var t=typeof n;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=n||null==n}function Fr(n){var t=Or(n),r=bn[t];return typeof r=="function"&&t in On.prototype?n===r?true:(t=uo(r),!!t&&n===t[0]):false}function Nr(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||cu)}function Dr(n,t,r,e,u,o){
return me(n)&&me(t)&&Rt(n,t,q,Dr,o.set(t,n)),n}function Zr(n,t){return 1==t.length?n:$e(n,Nt(t,0,-1))}function qr(n){var t=[];return Le(n).replace(un,function(n,r,e,u){t.push(e?u.replace(sn,"$1"):r||n)}),t}function Pr(n){if(n instanceof On)return n.clone();var t=new An(n.__wrapped__,n.__chain__);return t.__actions__=nr(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Tr(n,t,r){var e=n?n.length:0;return e?(t=r||t===q?1:Ce(t),Nt(n,0>t?0:t,e)):[]}function Kr(n,t,r){var e=n?n.length:0;
return e?(t=r||t===q?1:Ce(t),t=e-t,Nt(n,0,0>t?0:t)):[]}function Gr(n){return n?n[0]:q}function Vr(n){var t=n?n.length:0;return t?n[t-1]:q}function Jr(n,t){return n&&n.length&&t&&t.length?Mt(n,t):n}function Yr(n){return n?$u.call(n):n}function Hr(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){return de(n)?(t=Uu(n.length,t),true):void 0}),m(t,function(t){return a(n,Ut(t))})}function Qr(n,t){if(!n||!n.length)return[];var e=Hr(n);return null==t?e:a(e,function(n){return r(t,q,n)})}function Xr(n){
return n=bn(n),n.__chain__=true,n}function ne(n,t){return t(n)}function te(){return this}function re(n,t){return typeof t=="function"&&qo(n)?u(n,t):Qu(n,rt(t))}function ee(n,t){var r;if(typeof t=="function"&&qo(n)){for(r=n.length;r--&&false!==t(n[r],r,n););r=n}else r=Xu(n,rt(t));return r}function ue(n,t){return(qo(n)?a:Et)(n,kr(t,3))}function oe(n,t){var r=-1,e=Be(n),u=e.length,o=u-1;for(t=ut(Ce(t),0,u);++r<t;){var u=$t(r,o),i=e[u];e[u]=e[r],e[r]=i}return e.length=t,e}function ie(n,t,r){return t=r?q:t,
t=n&&null==t?n.length:t,mr(n,128,q,q,q,q,t)}function fe(n,t){var r;if(typeof t!="function")throw new iu("Expected a function");return n=Ce(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=q),r}}function ce(n,t,r){return t=r?q:t,n=mr(n,8,q,q,q,q,q,t),n.placeholder=ce.placeholder,n}function ae(n,t,r){return t=r?q:t,n=mr(n,16,q,q,q,q,q,t),n.placeholder=ae.placeholder,n}function le(n,t,r){function e(){p&&xu(p),a&&xu(a),v=0,c=a=h=p=_=q}function u(t,r){r&&xu(r),a=p=_=q,t&&(v=Uo(),l=n.apply(h,c),
p||a||(c=h=q))}function o(){var n=t-(Uo()-s);0>=n||n>t?u(_,a):p=Eu(o,n)}function i(){u(y,p)}function f(){if(c=arguments,s=Uo(),h=this,_=y&&(p||!g),false===d)var r=g&&!p;else{v||a||g||(v=s);var e=d-(s-v),u=(0>=e||e>d)&&(g||a);u?(a&&(a=xu(a)),v=s,l=n.apply(h,c)):a||(a=Eu(i,e))}return u&&p?p=xu(p):p||t===d||(p=Eu(o,t)),r&&(u=true,l=n.apply(h,c)),!u||p||a||(c=h=q),l}var c,a,l,s,h,p,_,v=0,g=false,d=false,y=true;if(typeof n!="function")throw new iu("Expected a function");return t=ze(t)||0,me(r)&&(g=!!r.leading,d="maxWait"in r&&Uu(ze(r.maxWait)||0,t),
y="trailing"in r?!!r.trailing:y),f.cancel=e,f.flush=function(){return(p&&_||a&&y)&&(l=n.apply(h,c)),e(),l},f}function se(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new iu("Expected a function");return r.cache=new se.Cache,r}function he(n,t){if(typeof n!="function")throw new iu("Expected a function");return t=Uu(t===q?n.length-1:Ce(t),0),function(){for(var e=arguments,u=-1,o=Uu(e.length-t,0),i=Array(o);++u<o;)i[u]=e[t+u];
switch(t){case 0:return n.call(this,i);case 1:return n.call(this,e[0],i);case 2:return n.call(this,e[0],e[1],i)}for(o=Array(t+1),u=-1;++u<t;)o[u]=e[u];return o[t]=i,r(n,this,o)}}function pe(n,t){return n===t||n!==n&&t!==t}function _e(n,t){return n>t}function ve(n){return de(n)&&lu.call(n,"callee")&&(!ku.call(n,"callee")||"[object Arguments]"==pu.call(n))}function ge(n){return null!=n&&je(oo(n))&&!be(n)}function de(n){return we(n)&&ge(n)}function ye(n){return we(n)?"[object Error]"==pu.call(n)||typeof n.message=="string"&&typeof n.name=="string":false;
}function be(n){return n=me(n)?pu.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function xe(n){return typeof n=="number"&&n==Ce(n)}function je(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function me(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function we(n){return!!n&&typeof n=="object"}function Ae(n){return null==n?false:be(n)?vu.test(au.call(n)):we(n)&&(U(n)?vu:dn).test(n)}function Oe(n){return typeof n=="number"||we(n)&&"[object Number]"==pu.call(n);
}function ke(n){return!we(n)||"[object Object]"!=pu.call(n)||U(n)?false:(n=mu(n),null===n?true:(n=n.constructor,typeof n=="function"&&n instanceof n&&au.call(n)==hu))}function Ee(n){return me(n)&&"[object RegExp]"==pu.call(n)}function Ie(n){return typeof n=="string"||!qo(n)&&we(n)&&"[object String]"==pu.call(n)}function Se(n){return typeof n=="symbol"||we(n)&&"[object Symbol]"==pu.call(n)}function Re(n){return we(n)&&je(n.length)&&!!Cn[pu.call(n)]}function We(n,t){return t>n}function Be(n){if(!n)return[];
if(ge(n))return Ie(n)?n.match(En):nr(n);if(Au&&n[Au])return M(n[Au]());var t=Rr(n);return("[object Map]"==t?L:"[object Set]"==t?F:Pe)(n)}function Ce(n){if(!n)return 0===n?n:0;if(n=ze(n),n===P||n===-P)return 1.7976931348623157e308*(0>n?-1:1);var t=n%1;return n===n?t?n-t:n:0}function Ue(n){return n?ut(Ce(n),0,4294967295):0}function ze(n){if(me(n)&&(n=be(n.valueOf)?n.valueOf():n,n=me(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(cn,"");var t=gn.test(n);return t||yn.test(n)?Dn(n.slice(2),t?2:8):vn.test(n)?T:+n;
}function Me(n){return tr(n,Ze(n))}function Le(n){if(typeof n=="string")return n;if(null==n)return"";if(Se(n))return Hu?Hu.call(n):"";var t=n+"";return"0"==t&&1/n==-P?"-0":t}function $e(n,t,r){return n=null==n?q:dt(n,t),n===q?r:n}function Fe(n,t){return Wr(n,t,yt)}function Ne(n,t){return Wr(n,t,bt)}function De(n){var t=Nr(n);if(!t&&!ge(n))return Cu(Object(n));var r,e=zr(n),u=!!e,e=e||[],o=e.length;for(r in n)!yt(n,r)||u&&("length"==r||z(r,o))||t&&"constructor"==r||e.push(r);return e}function Ze(n){
for(var t=-1,r=Nr(n),e=kt(n),u=e.length,o=zr(n),i=!!o,o=o||[],f=o.length;++t<u;){var c=e[t];i&&("length"==c||z(c,f))||"constructor"==c&&(r||!lu.call(n,c))||o.push(c)}return o}function qe(n){return w(n,De(n))}function Pe(n){return n?O(n,De(n)):[]}function Te(n){return ai(Le(n).toLowerCase())}function Ke(n){return(n=Le(n))&&n.replace(xn,R).replace(kn,"")}function Ge(n,t){n=Le(n),t=Ce(t);var r="";if(!n||1>t||t>9007199254740991)return r;do t%2&&(r+=n),t=Ru(t/2),n+=n;while(t);return r}function Ve(n,t,r){
return n=Le(n),t=r?q:t,t===q&&(t=Wn.test(n)?Rn:Sn),n.match(t)||[]}function Je(n){return function(){return n}}function Ye(n){return n}function He(n){return Ot(typeof n=="function"?n:ot(n,true))}function Qe(n,t,r){var e=De(t),o=gt(t,e);null!=r||me(t)&&(o.length||!e.length)||(r=t,t=n,n=this,o=gt(t,De(t)));var i=me(r)&&"chain"in r?r.chain:true,f=be(n);return u(o,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=n(this.__wrapped__);return(r.__actions__=nr(this.__actions__)).push({
func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,l([this.value()],arguments))})}),n}function Xe(){}function nu(n){return Lr(n)?Ut(n):zt(n)}function tu(n){return n&&n.length?j(n,Ye):0}I=I?Jn.defaults({},I,Jn.pick(Vn,Bn)):Vn;var ru=I.Date,eu=I.Error,uu=I.Math,ou=I.RegExp,iu=I.TypeError,fu=I.Array.prototype,cu=I.Object.prototype,au=I.Function.prototype.toString,lu=cu.hasOwnProperty,su=0,hu=au.call(Object),pu=cu.toString,_u=Vn._,vu=ou("^"+au.call(lu).replace(on,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),gu=Pn?I.Buffer:q,du=I.Reflect,yu=I.Symbol,bu=I.Uint8Array,xu=I.clearTimeout,ju=du?du.f:q,mu=Object.getPrototypeOf,wu=Object.getOwnPropertySymbols,Au=typeof(Au=yu&&yu.iterator)=="symbol"?Au:q,Ou=Object.create,ku=cu.propertyIsEnumerable,Eu=I.setTimeout,Iu=fu.splice,Su=uu.ceil,Ru=uu.floor,Wu=I.isFinite,Bu=fu.join,Cu=Object.keys,Uu=uu.max,zu=uu.min,Mu=I.parseInt,Lu=uu.random,$u=fu.reverse,Fu=Ir(I,"Map"),Nu=Ir(I,"Set"),Du=Ir(I,"WeakMap"),Zu=Ir(Object,"create"),qu=Du&&new Du,Pu=!ku.call({
valueOf:1},"valueOf"),Tu={},Ku=Fu?au.call(Fu):"",Gu=Nu?au.call(Nu):"",Vu=Du?au.call(Du):"",Ju=yu?yu.prototype:q,Yu=Ju?Ju.valueOf:q,Hu=Ju?Ju.toString:q;bn.templateSettings={escape:X,evaluate:nn,interpolate:tn,variable:"",imports:{_:bn}};var Qu=ir(_t),Xu=ir(vt,true),no=fr(),to=fr(true);ju&&!ku.call({valueOf:1},"valueOf")&&(kt=function(n){return M(ju(n))});var ro=qu?function(n,t){return qu.set(n,t),n}:Ye,eo=Nu&&2===new Nu([1,2]).size?function(n){return new Nu(n)}:Xe,uo=qu?function(n){return qu.get(n)}:Xe,oo=Ut("length"),io=wu||function(){
return[]};(Fu&&"[object Map]"!=Rr(new Fu)||Nu&&"[object Set]"!=Rr(new Nu)||Du&&"[object WeakMap]"!=Rr(new Du))&&(Rr=function(n){var t=pu.call(n);if(n="[object Object]"==t?n.constructor:null,n=typeof n=="function"?au.call(n):"")switch(n){case Ku:return"[object Map]";case Gu:return"[object Set]";case Vu:return"[object WeakMap]"}return t});var fo=function(){var n=0,t=0;return function(r,e){var u=Uo(),o=16-(u-t);if(t=u,o>0){if(150<=++n)return r}else n=0;return ro(r,e)}}(),co=he(function(n,t){qo(n)||(n=null==n?[]:[Object(n)]),
t=ht(t,1);for(var r=n,e=t,u=-1,o=r.length,i=-1,f=e.length,c=Array(o+f);++u<o;)c[u]=r[u];for(;++i<f;)c[u++]=e[i];return c}),ao=he(function(n,t){return de(n)?at(n,ht(t,1,true)):[]}),lo=he(function(n,t){var r=Vr(t);return de(r)&&(r=q),de(n)?at(n,ht(t,1,true),kr(r)):[]}),so=he(function(n,t){var r=Vr(t);return de(r)&&(r=q),de(n)?at(n,ht(t,1,true),q,r):[]}),ho=he(function(n){var t=a(n,tt);return t.length&&t[0]===n[0]?xt(t):[]}),po=he(function(n){var t=Vr(n),r=a(n,tt);return t===Vr(r)?t=q:r.pop(),r.length&&r[0]===n[0]?xt(r,kr(t)):[];
}),_o=he(function(n){var t=Vr(n),r=a(n,tt);return t===Vr(r)?t=q:r.pop(),r.length&&r[0]===n[0]?xt(r,q,t):[]}),vo=he(Jr),go=he(function(n,t){t=a(ht(t,1),String);var r=nt(n,t);return Lt(n,t.sort(S)),r}),yo=he(function(n){return Tt(ht(n,1,true))}),bo=he(function(n){var t=Vr(n);return de(t)&&(t=q),Tt(ht(n,1,true),kr(t))}),xo=he(function(n){var t=Vr(n);return de(t)&&(t=q),Tt(ht(n,1,true),q,t)}),jo=he(function(n,t){return de(n)?at(n,t):[]}),mo=he(function(n){return Vt(i(n,de))}),wo=he(function(n){var t=Vr(n);return de(t)&&(t=q),
Vt(i(n,de),kr(t))}),Ao=he(function(n){var t=Vr(n);return de(t)&&(t=q),Vt(i(n,de),q,t)}),Oo=he(Hr),ko=he(function(n){var t=n.length,t=t>1?n[t-1]:q,t=typeof t=="function"?(n.pop(),t):q;return Qr(n,t)}),Eo=he(function(n){function t(t){return nt(t,n)}n=ht(n,1);var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return 1>=r&&!this.__actions__.length&&u instanceof On&&z(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:ne,args:[t],thisArg:q}),new An(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(q),
n})):this.thru(t)}),Io=ur(function(n,t,r){lu.call(n,r)?++n[r]:n[r]=1}),So=ur(function(n,t,r){lu.call(n,r)?n[r].push(t):n[r]=[t]}),Ro=he(function(n,t,e){var u=-1,o=typeof t=="function",i=Lr(t),f=ge(n)?Array(n.length):[];return Qu(n,function(n){var c=o?t:i&&null!=n?n[t]:q;f[++u]=c?r(c,n,e):mt(n,t,e)}),f}),Wo=ur(function(n,t,r){n[r]=t}),Bo=ur(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Co=he(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Mr(n,t[0],t[1])?t=[]:r>2&&Mr(t[0],t[1],t[2])&&(t.length=1),
Wt(n,ht(t,1),[])}),Uo=ru.now,zo=he(function(n,t,r){var e=1;if(r.length)var u=$(r,Sr(zo)),e=32|e;return mr(n,e,t,r,u)}),Mo=he(function(n,t,r){var e=3;if(r.length)var u=$(r,Sr(Mo)),e=32|e;return mr(t,e,n,r,u)}),Lo=he(function(n,t){return ct(n,1,t)}),$o=he(function(n,t,r){return ct(n,ze(t)||0,r)}),Fo=he(function(n,t){t=a(ht(t,1),kr());var e=t.length;return he(function(u){for(var o=-1,i=zu(u.length,e);++o<i;)u[o]=t[o].call(this,u[o]);return r(n,this,u)})}),No=he(function(n,t){var r=$(t,Sr(No));return mr(n,32,q,t,r);
}),Do=he(function(n,t){var r=$(t,Sr(Do));return mr(n,64,q,t,r)}),Zo=he(function(n,t){return mr(n,256,q,q,q,ht(t,1))}),qo=Array.isArray,Po=gu?function(n){return n instanceof gu}:Je(false),To=or(function(n,t){if(Pu||Nr(t)||ge(t))tr(t,De(t),n);else for(var r in t)lu.call(t,r)&&Hn(n,r,t[r])}),Ko=or(function(n,t){if(Pu||Nr(t)||ge(t))tr(t,Ze(t),n);else for(var r in t)Hn(n,r,t[r])}),Go=or(function(n,t,r,e){rr(t,Ze(t),n,e)}),Vo=or(function(n,t,r,e){rr(t,De(t),n,e)}),Jo=he(function(n,t){return nt(n,ht(t,1))}),Yo=he(function(n){
return n.push(q,Gn),r(Go,q,n)}),Ho=he(function(n){return n.push(q,Dr),r(ri,q,n)}),Qo=vr(function(n,t,r){n[t]=r},Je(Ye)),Xo=vr(function(n,t,r){lu.call(n,t)?n[t].push(r):n[t]=[r]},kr),ni=he(mt),ti=or(function(n,t,r){Rt(n,t,r)}),ri=or(function(n,t,r,e){Rt(n,t,r,e)}),ei=he(function(n,t){return null==n?{}:(t=a(ht(t,1),String),Bt(n,at(Ze(n),t)))}),ui=he(function(n,t){return null==n?{}:Bt(n,ht(t,1))}),oi=lr(function(n,t,r){return t=t.toLowerCase(),n+(r?Te(t):t)}),ii=lr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase();
}),fi=lr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),ci=ar("toLowerCase"),ai=ar("toUpperCase"),li=lr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),si=lr(function(n,t,r){return n+(r?" ":"")+Te(t)}),hi=lr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),pi=he(function(n,t){try{return r(n,q,t)}catch(e){return ye(e)?e:new eu(e)}}),_i=he(function(n,t){return u(ht(t,1),function(t){n[t]=zo(n[t],n)}),n}),vi=pr(),gi=pr(true),di=he(function(n,t){return function(r){return mt(r,n,t)}}),yi=he(function(n,t){
return function(r){return mt(n,r,t)}}),bi=gr(a),xi=gr(o),ji=gr(p),mi=br(),wi=br(true),Ai=jr("ceil"),Oi=jr("floor"),ki=jr("round");return bn.prototype=wn.prototype,bn.prototype.constructor=bn,An.prototype=ft(wn.prototype),An.prototype.constructor=An,On.prototype=ft(wn.prototype),On.prototype.constructor=On,zn.prototype=Zu?Zu(null):cu,Mn.prototype.clear=function(){this.__data__={hash:new zn,map:Fu?new Fu:[],string:new zn}},Mn.prototype["delete"]=function(n){var t=this.__data__;return $r(n)?(t=typeof n=="string"?t.string:t.hash,
n=(Zu?t[n]!==q:lu.call(t,n))&&delete t[n]):n=Fu?t.map["delete"](n):Zn(t.map,n),n},Mn.prototype.get=function(n){var t=this.__data__;return $r(n)?(t=typeof n=="string"?t.string:t.hash,Zu?(n=t[n],n="__lodash_hash_undefined__"===n?q:n):n=lu.call(t,n)?t[n]:q):n=Fu?t.map.get(n):qn(t.map,n),n},Mn.prototype.has=function(n){var t=this.__data__;return $r(n)?(t=typeof n=="string"?t.string:t.hash,n=Zu?t[n]!==q:lu.call(t,n)):n=Fu?t.map.has(n):-1<Tn(t.map,n),n},Mn.prototype.set=function(n,t){var r=this.__data__;
return $r(n)?(typeof n=="string"?r.string:r.hash)[n]=Zu&&t===q?"__lodash_hash_undefined__":t:Fu?r.map.set(n,t):Kn(r.map,n,t),this},Ln.prototype.push=function(n){var t=this.__data__;$r(n)?(t=t.__data__,(typeof n=="string"?t.string:t.hash)[n]="__lodash_hash_undefined__"):t.set(n,"__lodash_hash_undefined__")},Fn.prototype.clear=function(){this.__data__={array:[],map:null}},Fn.prototype["delete"]=function(n){var t=this.__data__,r=t.array;return r?Zn(r,n):t.map["delete"](n)},Fn.prototype.get=function(n){
var t=this.__data__,r=t.array;return r?qn(r,n):t.map.get(n)},Fn.prototype.has=function(n){var t=this.__data__,r=t.array;return r?-1<Tn(r,n):t.map.has(n)},Fn.prototype.set=function(n,t){var r=this.__data__,e=r.array;return e&&(199>e.length?Kn(e,n,t):(r.array=null,r.map=new Mn(e))),(r=r.map)&&r.set(n,t),this},se.Cache=Mn,bn.after=function(n,t){if(typeof t!="function")throw new iu("Expected a function");return n=Ce(n),function(){return 1>--n?t.apply(this,arguments):void 0}},bn.ary=ie,bn.assign=To,bn.assignIn=Ko,
bn.assignInWith=Go,bn.assignWith=Vo,bn.at=Jo,bn.before=fe,bn.bind=zo,bn.bindAll=_i,bn.bindKey=Mo,bn.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return qo(n)?n:[n]},bn.chain=Xr,bn.chunk=function(n,t){t=Uu(Ce(t),0);var r=n?n.length:0;if(!r||1>t)return[];for(var e=0,u=0,o=Array(Su(r/t));r>e;)o[u++]=Nt(n,e,e+=t);return o},bn.compact=function(n){for(var t=-1,r=n?n.length:0,e=0,u=[];++t<r;){var o=n[t];o&&(u[e++]=o)}return u},bn.concat=co,bn.cond=function(n){var t=n?n.length:0,e=kr();
return n=t?a(n,function(n){if("function"!=typeof n[1])throw new iu("Expected a function");return[e(n[0]),n[1]]}):[],he(function(e){for(var u=-1;++u<t;){var o=n[u];if(r(o[0],this,e))return r(o[1],this,e)}})},bn.conforms=function(n){return it(ot(n,true))},bn.constant=Je,bn.countBy=Io,bn.create=function(n,t){var r=ft(n);return t?Xn(r,t):r},bn.curry=ce,bn.curryRight=ae,bn.debounce=le,bn.defaults=Yo,bn.defaultsDeep=Ho,bn.defer=Lo,bn.delay=$o,bn.difference=ao,bn.differenceBy=lo,bn.differenceWith=so,bn.drop=Tr,
bn.dropRight=Kr,bn.dropRightWhile=function(n,t){return n&&n.length?Kt(n,kr(t,3),true,true):[]},bn.dropWhile=function(n,t){return n&&n.length?Kt(n,kr(t,3),true):[]},bn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Mr(n,t,r)&&(r=0,e=u),u=n.length,r=Ce(r),0>r&&(r=-r>u?0:u+r),e=e===q||e>u?u:Ce(e),0>e&&(e+=u),e=r>e?0:Ue(e);e>r;)n[r++]=t;return n},bn.filter=function(n,t){return(qo(n)?i:st)(n,kr(t,3))},bn.flatMap=function(n,t){return ht(ue(n,t),1)},bn.flatten=function(n){
return n&&n.length?ht(n,1):[]},bn.flattenDeep=function(n){return n&&n.length?ht(n,P):[]},bn.flattenDepth=function(n,t){return n&&n.length?(t=t===q?1:Ce(t),ht(n,t)):[]},bn.flip=function(n){return mr(n,512)},bn.flow=vi,bn.flowRight=gi,bn.fromPairs=function(n){for(var t=-1,r=n?n.length:0,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},bn.functions=function(n){return null==n?[]:gt(n,De(n))},bn.functionsIn=function(n){return null==n?[]:gt(n,Ze(n))},bn.groupBy=So,bn.initial=function(n){return Kr(n,1)},bn.intersection=ho,
bn.intersectionBy=po,bn.intersectionWith=_o,bn.invert=Qo,bn.invertBy=Xo,bn.invokeMap=Ro,bn.iteratee=He,bn.keyBy=Wo,bn.keys=De,bn.keysIn=Ze,bn.map=ue,bn.mapKeys=function(n,t){var r={};return t=kr(t,3),_t(n,function(n,e,u){r[t(n,e,u)]=n}),r},bn.mapValues=function(n,t){var r={};return t=kr(t,3),_t(n,function(n,e,u){r[e]=t(n,e,u)}),r},bn.matches=function(n){return It(ot(n,true))},bn.matchesProperty=function(n,t){return St(n,ot(t,true))},bn.memoize=se,bn.merge=ti,bn.mergeWith=ri,bn.method=di,bn.methodOf=yi,
bn.mixin=Qe,bn.negate=function(n){if(typeof n!="function")throw new iu("Expected a function");return function(){return!n.apply(this,arguments)}},bn.nthArg=function(n){return n=Ce(n),function(){return arguments[n]}},bn.omit=ei,bn.omitBy=function(n,t){return t=kr(t),Ct(n,function(n,r){return!t(n,r)})},bn.once=function(n){return fe(2,n)},bn.orderBy=function(n,t,r,e){return null==n?[]:(qo(t)||(t=null==t?[]:[t]),r=e?q:r,qo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},bn.over=bi,bn.overArgs=Fo,bn.overEvery=xi,bn.overSome=ji,
bn.partial=No,bn.partialRight=Do,bn.partition=Bo,bn.pick=ui,bn.pickBy=function(n,t){return null==n?{}:Ct(n,kr(t))},bn.property=nu,bn.propertyOf=function(n){return function(t){return null==n?q:dt(n,t)}},bn.pull=vo,bn.pullAll=Jr,bn.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?Mt(n,t,kr(r)):n},bn.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?Mt(n,t,q,r):n},bn.pullAt=go,bn.range=mi,bn.rangeRight=wi,bn.rearg=Zo,bn.reject=function(n,t){var r=qo(n)?i:st;return t=kr(t,3),r(n,function(n,r,e){
return!t(n,r,e)})},bn.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],o=n.length;for(t=kr(t,3);++e<o;){var i=n[e];t(i,e,n)&&(r.push(i),u.push(e))}return Lt(n,u),r},bn.rest=he,bn.reverse=Yr,bn.sampleSize=oe,bn.set=function(n,t,r){return null==n?n:Ft(n,t,r)},bn.setWith=function(n,t,r,e){return e=typeof e=="function"?e:q,null==n?n:Ft(n,t,r,e)},bn.shuffle=function(n){return oe(n,4294967295)},bn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Mr(n,t,r)?(t=0,
r=e):(t=null==t?0:Ce(t),r=r===q?e:Ce(r)),Nt(n,t,r)):[]},bn.sortBy=Co,bn.sortedUniq=function(n){return n&&n.length?Pt(n):[]},bn.sortedUniqBy=function(n,t){return n&&n.length?Pt(n,kr(t)):[]},bn.split=function(n,t,r){return Le(n).split(t,r)},bn.spread=function(n,t){if(typeof n!="function")throw new iu("Expected a function");return t=t===q?0:Uu(Ce(t),0),he(function(e){var u=e[t];return e=e.slice(0,t),u&&l(e,u),r(n,this,e)})},bn.tail=function(n){return Tr(n,1)},bn.take=function(n,t,r){return n&&n.length?(t=r||t===q?1:Ce(t),
Nt(n,0,0>t?0:t)):[]},bn.takeRight=function(n,t,r){var e=n?n.length:0;return e?(t=r||t===q?1:Ce(t),t=e-t,Nt(n,0>t?0:t,e)):[]},bn.takeRightWhile=function(n,t){return n&&n.length?Kt(n,kr(t,3),false,true):[]},bn.takeWhile=function(n,t){return n&&n.length?Kt(n,kr(t,3)):[]},bn.tap=function(n,t){return t(n),n},bn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new iu("Expected a function");return me(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),le(n,t,{leading:e,maxWait:t,
trailing:u})},bn.thru=ne,bn.toArray=Be,bn.toPairs=qe,bn.toPairsIn=function(n){return w(n,Ze(n))},bn.toPath=function(n){return qo(n)?a(n,String):qr(n)},bn.toPlainObject=Me,bn.transform=function(n,t,r){var e=qo(n)||Re(n);if(t=kr(t,4),null==r)if(e||me(n)){var o=n.constructor;r=e?qo(n)?new o:[]:be(o)?ft(mu(n)):{}}else r={};return(e?u:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},bn.unary=function(n){return ie(n,1)},bn.union=yo,bn.unionBy=bo,bn.unionWith=xo,bn.uniq=function(n){return n&&n.length?Tt(n):[];
},bn.uniqBy=function(n,t){return n&&n.length?Tt(n,kr(t)):[]},bn.uniqWith=function(n,t){return n&&n.length?Tt(n,q,t):[]},bn.unset=function(n,t){var r;if(null==n)r=true;else{r=n;var e=t,e=Lr(e,r)?[e+""]:et(e);r=Zr(r,e),e=Vr(e),r=null!=r&&Fe(r,e)?delete r[e]:true}return r},bn.unzip=Hr,bn.unzipWith=Qr,bn.update=function(n,t,r){return null==n?n:Ft(n,t,rt(r)(dt(n,t)),void 0)},bn.updateWith=function(n,t,r,e){return e=typeof e=="function"?e:q,null!=n&&(n=Ft(n,t,rt(r)(dt(n,t)),e)),n},bn.values=Pe,bn.valuesIn=function(n){
return null==n?[]:O(n,Ze(n))},bn.without=jo,bn.words=Ve,bn.wrap=function(n,t){return t=null==t?Ye:t,No(t,n)},bn.xor=mo,bn.xorBy=wo,bn.xorWith=Ao,bn.zip=Oo,bn.zipObject=function(n,t){return Jt(n||[],t||[],Hn)},bn.zipObjectDeep=function(n,t){return Jt(n||[],t||[],Ft)},bn.zipWith=ko,bn.extend=Ko,bn.extendWith=Go,Qe(bn,bn),bn.add=function(n,t){var r;return n===q&&t===q?0:(n!==q&&(r=n),t!==q&&(r=r===q?t:r+t),r)},bn.attempt=pi,bn.camelCase=oi,bn.capitalize=Te,bn.ceil=Ai,bn.clamp=function(n,t,r){return r===q&&(r=t,
t=q),r!==q&&(r=ze(r),r=r===r?r:0),t!==q&&(t=ze(t),t=t===t?t:0),ut(ze(n),t,r)},bn.clone=function(n){return ot(n,false,true)},bn.cloneDeep=function(n){return ot(n,true,true)},bn.cloneDeepWith=function(n,t){return ot(n,true,true,t)},bn.cloneWith=function(n,t){return ot(n,false,true,t)},bn.deburr=Ke,bn.endsWith=function(n,t,r){n=Le(n),t=typeof t=="string"?t:t+"";var e=n.length;return r=r===q?e:ut(Ce(r),0,e),r-=t.length,r>=0&&n.indexOf(t,r)==r},bn.eq=pe,bn.escape=function(n){return(n=Le(n))&&Q.test(n)?n.replace(Y,W):n},
bn.escapeRegExp=function(n){return(n=Le(n))&&fn.test(n)?n.replace(on,"\\$&"):n},bn.every=function(n,t,r){var e=qo(n)?o:lt;return r&&Mr(n,t,r)&&(t=q),e(n,kr(t,3))},bn.find=function(n,t){if(t=kr(t,3),qo(n)){var r=g(n,t);return r>-1?n[r]:q}return v(n,t,Qu)},bn.findIndex=function(n,t){return n&&n.length?g(n,kr(t,3)):-1},bn.findKey=function(n,t){return v(n,kr(t,3),_t,true)},bn.findLast=function(n,t){if(t=kr(t,3),qo(n)){var r=g(n,t,true);return r>-1?n[r]:q}return v(n,t,Xu)},bn.findLastIndex=function(n,t){return n&&n.length?g(n,kr(t,3),true):-1;
},bn.findLastKey=function(n,t){return v(n,kr(t,3),vt,true)},bn.floor=Oi,bn.forEach=re,bn.forEachRight=ee,bn.forIn=function(n,t){return null==n?n:no(n,rt(t),Ze)},bn.forInRight=function(n,t){return null==n?n:to(n,rt(t),Ze)},bn.forOwn=function(n,t){return n&&_t(n,rt(t))},bn.forOwnRight=function(n,t){return n&&vt(n,rt(t))},bn.get=$e,bn.gt=_e,bn.gte=function(n,t){return n>=t},bn.has=Fe,bn.hasIn=Ne,bn.head=Gr,bn.identity=Ye,bn.includes=function(n,t,r,e){return n=ge(n)?n:Pe(n),r=r&&!e?Ce(r):0,e=n.length,0>r&&(r=Uu(e+r,0)),
Ie(n)?e>=r&&-1<n.indexOf(t,r):!!e&&-1<d(n,t,r)},bn.indexOf=function(n,t,r){var e=n?n.length:0;return e?(r=Ce(r),0>r&&(r=Uu(e+r,0)),d(n,t,r)):-1},bn.inRange=function(n,t,r){return t=ze(t)||0,r===q?(r=t,t=0):r=ze(r)||0,n=ze(n),n>=zu(t,r)&&n<Uu(t,r)},bn.invoke=ni,bn.isArguments=ve,bn.isArray=qo,bn.isArrayBuffer=function(n){return we(n)&&"[object ArrayBuffer]"==pu.call(n)},bn.isArrayLike=ge,bn.isArrayLikeObject=de,bn.isBoolean=function(n){return true===n||false===n||we(n)&&"[object Boolean]"==pu.call(n)},bn.isBuffer=Po,
bn.isDate=function(n){return we(n)&&"[object Date]"==pu.call(n)},bn.isElement=function(n){return!!n&&1===n.nodeType&&we(n)&&!ke(n)},bn.isEmpty=function(n){if(ge(n)&&(qo(n)||Ie(n)||be(n.splice)||ve(n)))return!n.length;for(var t in n)if(lu.call(n,t))return false;return true},bn.isEqual=function(n,t){return wt(n,t)},bn.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:q)?r(n,t):q;return e===q?wt(n,t,r):!!e},bn.isError=ye,bn.isFinite=function(n){return typeof n=="number"&&Wu(n)},bn.isFunction=be,bn.isInteger=xe,
bn.isLength=je,bn.isMap=function(n){return we(n)&&"[object Map]"==Rr(n)},bn.isMatch=function(n,t){return n===t||At(n,t,Er(t))},bn.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:q,At(n,t,Er(t),r)},bn.isNaN=function(n){return Oe(n)&&n!=+n},bn.isNative=Ae,bn.isNil=function(n){return null==n},bn.isNull=function(n){return null===n},bn.isNumber=Oe,bn.isObject=me,bn.isObjectLike=we,bn.isPlainObject=ke,bn.isRegExp=Ee,bn.isSafeInteger=function(n){return xe(n)&&n>=-9007199254740991&&9007199254740991>=n;
},bn.isSet=function(n){return we(n)&&"[object Set]"==Rr(n)},bn.isString=Ie,bn.isSymbol=Se,bn.isTypedArray=Re,bn.isUndefined=function(n){return n===q},bn.isWeakMap=function(n){return we(n)&&"[object WeakMap]"==Rr(n)},bn.isWeakSet=function(n){return we(n)&&"[object WeakSet]"==pu.call(n)},bn.join=function(n,t){return n?Bu.call(n,t):""},bn.kebabCase=ii,bn.last=Vr,bn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(r!==q&&(u=Ce(r),u=(0>u?Uu(e+u,0):zu(u,e-1))+1),t!==t)return C(n,u,true);
for(;u--;)if(n[u]===t)return u;return-1},bn.lowerCase=fi,bn.lowerFirst=ci,bn.lt=We,bn.lte=function(n,t){return t>=n},bn.max=function(n){return n&&n.length?_(n,Ye,_e):q},bn.maxBy=function(n,t){return n&&n.length?_(n,kr(t),_e):q},bn.mean=function(n){return tu(n)/(n?n.length:0)},bn.min=function(n){return n&&n.length?_(n,Ye,We):q},bn.minBy=function(n,t){return n&&n.length?_(n,kr(t),We):q},bn.noConflict=function(){return Vn._===this&&(Vn._=_u),this},bn.noop=Xe,bn.now=Uo,bn.pad=function(n,t,r){n=Le(n),
t=Ce(t);var e=N(n);return t&&t>e?(e=(t-e)/2,t=Ru(e),e=Su(e),dr("",t,r)+n+dr("",e,r)):n},bn.padEnd=function(n,t,r){return n=Le(n),n+dr(n,t,r)},bn.padStart=function(n,t,r){return n=Le(n),dr(n,t,r)+n},bn.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),n=Le(n).replace(cn,""),Mu(n,t||(_n.test(n)?16:10))},bn.random=function(n,t,r){if(r&&typeof r!="boolean"&&Mr(n,t,r)&&(t=r=q),r===q&&(typeof t=="boolean"?(r=t,t=q):typeof n=="boolean"&&(r=n,n=q)),n===q&&t===q?(n=0,t=1):(n=ze(n)||0,t===q?(t=n,n=0):t=ze(t)||0),
n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Lu(),zu(n+r*(t-n+Nn("1e-"+((r+"").length-1))),t)):$t(n,t)},bn.reduce=function(n,t,r){var e=qo(n)?s:b,u=3>arguments.length;return e(n,kr(t,4),r,u,Qu)},bn.reduceRight=function(n,t,r){var e=qo(n)?h:b,u=3>arguments.length;return e(n,kr(t,4),r,u,Xu)},bn.repeat=Ge,bn.replace=function(){var n=arguments,t=Le(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},bn.result=function(n,t,r){if(Lr(t,n))e=null==n?q:n[t];else{t=et(t);var e=$e(n,t);n=Zr(n,t)}return e===q&&(e=r),
be(e)?e.call(n):e},bn.round=ki,bn.runInContext=Z,bn.sample=function(n){n=ge(n)?n:Pe(n);var t=n.length;return t>0?n[$t(0,t-1)]:q},bn.size=function(n){if(null==n)return 0;if(ge(n)){var t=n.length;return t&&Ie(n)?N(n):t}return De(n).length},bn.snakeCase=li,bn.some=function(n,t,r){var e=qo(n)?p:Dt;return r&&Mr(n,t,r)&&(t=q),e(n,kr(t,3))},bn.sortedIndex=function(n,t){return Zt(n,t)},bn.sortedIndexBy=function(n,t,r){return qt(n,t,kr(r))},bn.sortedIndexOf=function(n,t){var r=n?n.length:0;if(r){var e=Zt(n,t);
if(r>e&&pe(n[e],t))return e}return-1},bn.sortedLastIndex=function(n,t){return Zt(n,t,true)},bn.sortedLastIndexBy=function(n,t,r){return qt(n,t,kr(r),true)},bn.sortedLastIndexOf=function(n,t){if(n&&n.length){var r=Zt(n,t,true)-1;if(pe(n[r],t))return r}return-1},bn.startCase=si,bn.startsWith=function(n,t,r){return n=Le(n),r=ut(Ce(r),0,n.length),n.lastIndexOf(t,r)==r},bn.subtract=function(n,t){var r;return n===q&&t===q?0:(n!==q&&(r=n),t!==q&&(r=r===q?t:r-t),r)},bn.sum=tu,bn.sumBy=function(n,t){return n&&n.length?j(n,kr(t)):0;
},bn.template=function(n,t,r){var e=bn.templateSettings;r&&Mr(n,t,r)&&(t=q),n=Le(n),t=Go({},t,e,Gn),r=Go({},t.imports,e.imports,Gn);var u,o,i=De(r),f=O(r,i),c=0;r=t.interpolate||jn;var a="__p+='";r=ou((t.escape||jn).source+"|"+r.source+"|"+(r===tn?hn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,i,f,l){return e||(e=i),a+=n.slice(c,l).replace(mn,B),r&&(u=true,a+="'+__e("+r+")+'"),f&&(o=true,a+="';"+f+";\n__p+='"),
e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(o?a.replace(K,""):a).replace(G,"$1").replace(V,"$1;"),a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=pi(function(){return Function(i,l+"return "+a).apply(q,f)}),t.source=a,ye(t))throw t;return t},bn.times=function(n,t){if(n=Ce(n),1>n||n>9007199254740991)return[];
var r=4294967295,e=zu(n,4294967295);for(t=rt(t),n-=4294967295,e=m(e,t);++r<n;)t(r);return e},bn.toInteger=Ce,bn.toLength=Ue,bn.toLower=function(n){return Le(n).toLowerCase()},bn.toNumber=ze,bn.toSafeInteger=function(n){return ut(Ce(n),-9007199254740991,9007199254740991)},bn.toString=Le,bn.toUpper=function(n){return Le(n).toUpperCase()},bn.trim=function(n,t,r){return(n=Le(n))?r||t===q?n.replace(cn,""):(t+="")?(n=n.match(En),t=t.match(En),n.slice(k(n,t),E(n,t)+1).join("")):n:n},bn.trimEnd=function(n,t,r){
return(n=Le(n))?r||t===q?n.replace(ln,""):(t+="")?(n=n.match(En),n.slice(0,E(n,t.match(En))+1).join("")):n:n},bn.trimStart=function(n,t,r){return(n=Le(n))?r||t===q?n.replace(an,""):(t+="")?(n=n.match(En),n.slice(k(n,t.match(En))).join("")):n:n},bn.truncate=function(n,t){var r=30,e="...";if(me(t))var u="separator"in t?t.separator:u,r="length"in t?Ce(t.length):r,e="omission"in t?Le(t.omission):e;n=Le(n);var o=n.length;if(In.test(n))var i=n.match(En),o=i.length;if(r>=o)return n;if(o=r-N(e),1>o)return e;
if(r=i?i.slice(0,o).join(""):n.slice(0,o),u===q)return r+e;if(i&&(o+=r.length-o),Ee(u)){if(n.slice(o).search(u)){var f=r;for(u.global||(u=ou(u.source,Le(pn.exec(u))+"g")),u.lastIndex=0;i=u.exec(f);)var c=i.index;r=r.slice(0,c===q?o:c)}}else n.indexOf(u,o)!=o&&(u=r.lastIndexOf(u),u>-1&&(r=r.slice(0,u)));return r+e},bn.unescape=function(n){return(n=Le(n))&&H.test(n)?n.replace(J,D):n},bn.uniqueId=function(n){var t=++su;return Le(n)+t},bn.upperCase=hi,bn.upperFirst=ai,bn.each=re,bn.eachRight=ee,bn.first=Gr,
Qe(bn,function(){var n={};return _t(bn,function(t,r){lu.call(bn.prototype,r)||(n[r]=t)}),n}(),{chain:false}),bn.VERSION="4.6.1",u("bind bindKey curry curryRight partial partialRight".split(" "),function(n){bn[n].placeholder=bn}),u(["drop","take"],function(n,t){On.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new On(this);r=r===q?1:Uu(Ce(r),0);var u=this.clone();return e?u.__takeCount__=zu(r,u.__takeCount__):u.__views__.push({size:zu(r,4294967295),type:n+(0>u.__dir__?"Right":"")}),
u},On.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;On.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:kr(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");On.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");On.prototype[n]=function(){return this.__filtered__?new On(this):this[r](1);
}}),On.prototype.compact=function(){return this.filter(Ye)},On.prototype.find=function(n){return this.filter(n).head()},On.prototype.findLast=function(n){return this.reverse().find(n)},On.prototype.invokeMap=he(function(n,t){return typeof n=="function"?new On(this):this.map(function(r){return mt(r,n,t)})}),On.prototype.reject=function(n){return n=kr(n,3),this.filter(function(t){return!n(t)})},On.prototype.slice=function(n,t){n=Ce(n);var r=this;return r.__filtered__&&(n>0||0>t)?new On(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),
t!==q&&(t=Ce(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},On.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},On.prototype.toArray=function(){return this.take(4294967295)},_t(On.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=bn[e?"take"+("last"==t?"Right":""):t],o=e||/^find/.test(t);u&&(bn.prototype[t]=function(){function t(n){return n=u.apply(bn,l([n],f)),e&&h?n[0]:n}var i=this.__wrapped__,f=e?[1]:arguments,c=i instanceof On,a=f[0],s=c||qo(i);
s&&r&&typeof a=="function"&&1!=a.length&&(c=s=false);var h=this.__chain__,p=!!this.__actions__.length,a=o&&!h,c=c&&!p;return!o&&s?(i=c?i:new On(this),i=n.apply(i,f),i.__actions__.push({func:ne,args:[t],thisArg:q}),new An(i,h)):a&&c?n.apply(this,f):(i=this.thru(t),a?e?i.value()[0]:i.value():i)})}),u("pop push shift sort splice unshift".split(" "),function(n){var t=fu[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);bn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){
return t.apply(r,n)})}}),_t(On.prototype,function(n,t){var r=bn[t];if(r){var e=r.name+"";(Tu[e]||(Tu[e]=[])).push({name:t,func:r})}}),Tu[_r(q,2).name]=[{name:"wrapper",func:q}],On.prototype.clone=function(){var n=new On(this.__wrapped__);return n.__actions__=nr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=nr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=nr(this.__views__),n},On.prototype.reverse=function(){if(this.__filtered__){var n=new On(this);
n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},On.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=qo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,c=-1,a=i.length;++c<a;){var l=i[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=zu(n,f+s);break;case"takeRight":f=Uu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,c=0,a=zu(n,this.__takeCount__),!e||200>o||o==n&&a==n)return Gt(t,this.__actions__);
e=[];n:for(;n--&&a>c;){for(u+=r,o=-1,l=t[u];++o<f;){var h=i[o],s=h.type,h=(0,h.iteratee)(l);if(2==s)l=h;else if(!h){if(1==s)continue n;break n}}e[c++]=l}return e},bn.prototype.at=Eo,bn.prototype.chain=function(){return Xr(this)},bn.prototype.commit=function(){return new An(this.value(),this.__chain__)},bn.prototype.flatMap=function(n){return this.map(n).flatten()},bn.prototype.next=function(){this.__values__===q&&(this.__values__=Be(this.value()));var n=this.__index__>=this.__values__.length,t=n?q:this.__values__[this.__index__++];
return{done:n,value:t}},bn.prototype.plant=function(n){for(var t,r=this;r instanceof wn;){var e=Pr(r);e.__index__=0,e.__values__=q,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},bn.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof On?(this.__actions__.length&&(n=new On(this)),n=n.reverse(),n.__actions__.push({func:ne,args:[Yr],thisArg:q}),new An(n,this.__chain__)):this.thru(Yr)},bn.prototype.toJSON=bn.prototype.valueOf=bn.prototype.value=function(){return Gt(this.__wrapped__,this.__actions__);
},Au&&(bn.prototype[Au]=te),bn}var q,P=1/0,T=NaN,K=/\b__p\+='';/g,G=/\b(__p\+=)''\+/g,V=/(__e\(.*?\)|\b__t\))\+'';/g,J=/&(?:amp|lt|gt|quot|#39|#96);/g,Y=/[&<>"'`]/g,H=RegExp(J.source),Q=RegExp(Y.source),X=/<%-([\s\S]+?)%>/g,nn=/<%([\s\S]+?)%>/g,tn=/<%=([\s\S]+?)%>/g,rn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,en=/^\w*$/,un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,on=/[\\^$.*+?()[\]{}|]/g,fn=RegExp(on.source),cn=/^\s+|\s+$/g,an=/^\s+/,ln=/\s+$/,sn=/\\(\\)?/g,hn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,pn=/\w*$/,_n=/^0x/i,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,jn=/($^)/,mn=/['\n\r\u2028\u2029\\]/g,wn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+wn,On="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",kn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]","g"),En=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+On+wn,"g"),In=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),Sn=/[a-zA-Z0-9]+/g,Rn=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|\\d+",An].join("|"),"g"),Wn=/[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Bn="Array Buffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Reflect RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Cn={};
Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=true,Cn["[object Arguments]"]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object Boolean]"]=Cn["[object Date]"]=Cn["[object Error]"]=Cn["[object Function]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn["[object Object]"]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object WeakMap]"]=false;
var Un={};Un["[object Arguments]"]=Un["[object Array]"]=Un["[object ArrayBuffer]"]=Un["[object Boolean]"]=Un["[object Date]"]=Un["[object Float32Array]"]=Un["[object Float64Array]"]=Un["[object Int8Array]"]=Un["[object Int16Array]"]=Un["[object Int32Array]"]=Un["[object Map]"]=Un["[object Number]"]=Un["[object Object]"]=Un["[object RegExp]"]=Un["[object Set]"]=Un["[object String]"]=Un["[object Symbol]"]=Un["[object Uint8Array]"]=Un["[object Uint8ClampedArray]"]=Un["[object Uint16Array]"]=Un["[object Uint32Array]"]=true,
Un["[object Error]"]=Un["[object Function]"]=Un["[object WeakMap]"]=false;var zn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O",
"\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Mn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},$n={"function":true,object:true},Fn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"
},Nn=parseFloat,Dn=parseInt,Zn=$n[typeof exports]&&exports&&!exports.nodeType?exports:q,qn=$n[typeof module]&&module&&!module.nodeType?module:q,Pn=qn&&qn.exports===Zn?Zn:q,Tn=I($n[typeof self]&&self),Kn=I($n[typeof window]&&window),Gn=I($n[typeof this]&&this),Vn=I(Zn&&qn&&typeof global=="object"&&global)||Kn!==(Gn&&Gn.window)&&Kn||Tn||Gn||Function("return this")(),Jn=Z();(Kn||Tn||{})._=Jn,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return Jn}):Zn&&qn?(Pn&&((qn.exports=Jn)._=Jn),
Zn._=Jn):Vn._=Jn}).call(this);
(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length)}else{nonSpace=true}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n")stripSpace()}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){value=context.view;names=name.split(".");index=0;while(value!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(value,names[index]);value=value[names[index++]]}}else{value=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit)break;context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var tokens=cache[template];if(tokens==null)tokens=cache[template]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials){var tokens=this.parse(template);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,originalTemplate);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.renderPartial=function renderPartial(token,context,partials){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null)return this.renderTokens(this.parse(value),context,partials,value)};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="2.2.1";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer});
function formToObj(e){function t(e){for(var t=e.querySelectorAll("input, textarea, select, [contenteditable=true]"),r=[],n=0;n<t.length;++n){var u=t[n],a=u.name||u.getAttribute("data-name"),o=u.value;a&&("checkbox"!==u.type&&"radio"!==u.type||u.checked)&&("true"===u.getAttribute("contenteditable")&&(o=u.innerHTML),r.push({name:a,value:o}))}return r}function r(e,t,r){var u=t.split("."),a=u.length-1;u.reduce(function(e,t,u){return n(e,t,u===a?r:{})},e)}function n(e,t,r){if("[]"===t.slice(-2))u(e,t).push(r);else{if(e[t])return e[t];if("]"===t[t.length-1]){var n=u(e,t);if(n.prevName===t)return n[n.length-1];n.push(r),n.prevName=t}else e[t]=r}return r}function u(e,t){var r=t.replace(/\[\d*\]/,"");return e[r]||(e[r]=[])}var a=t(e);return a.sort(function(e,t){return e.name.localeCompare(t.name)}),a.reduce(function(e,t){return r(e,t.name,t.value),e},{})}"undefined"!=typeof module&&module.exports&&(module.exports=formToObj);
//# sourceMappingURL=form-to-obj.min.js.map
function alite(e){function t(){}function a(e){var t=e&&e.responseText,a=/^[\{\[]/.test(t);return a?JSON.parse(t):t}return new Promise(function(n,r){var s=(e.xhr||t)()||new XMLHttpRequest,o=e.data;if(s.onreadystatechange=function(){4==s.readyState&&(s.status>=200&&s.status<300?n(a(s)):r(a(s)),(alite.ajaxStop||t)(s,e))},s.open(e.method,e.url),!e.raw&&s.setRequestHeader("Content-Type","application/json"),e.headers)for(var i in e.headers)s.setRequestHeader(i,e.headers[i]);(alite.ajaxStart||t)(s,e),(e.ajaxStart||t)(s),s.send(e.raw?o:o?JSON.stringify(o):void 0)})}"undefined"!=typeof module&&module.exports&&(module.exports=alite);
//# sourceMappingURL=alite.min.js.map

var Dum_Dum_Boom_Boom = (function Scope_Dum_Dum_Boom_Boom(category) {
  "use strict";
  var exports = {};
  var non_exports = {};
  var funcs   = {};

/* jshint browser: true, undef: true */

if (typeof window === 'undefined')
  throw new Error('No window defined.');


funcs.common     = {};

funcs.common.base = {};

funcs.common.base.read_key=read_key;
function read_key(o, k) {

  if (!o.hasOwnProperty(k))
    throw new Error("Key not defined: " + to_string(k));

  return o[k];
} // === function


funcs.common.base.wait_max=wait_max;
function wait_max(seconds, func) {

  var ms       = seconds * 1000;
  var total    = 0;
  var interval = 100;

  function reloop() {
    total = total + interval;
    if (func())
      return true;
    if (total > ms)
      throw new Error('Timeout exceeded: ' + to_string(func) );
    else
      setTimeout(reloop, interval);
  }
  setTimeout(reloop, interval);
}


funcs.common.base.to_arg=to_arg;
function to_arg(val) {
  return function (f) { return f(val); };
}


funcs.common.base.do_it=do_it;
function do_it(num, func) {

  arguments_are(arguments, is_positive, is_function);
  for (var i = 0; i < num; i++) {
    func();
  }
  return true;
}


funcs.common.base.is_nothing=is_nothing;
function is_nothing(v) {

  if (arguments.length !== 1)
    throw new Error("arguments.length !== 1: " + to_string(v));

  return or(is_null, is_undefined)(v);
}


funcs.common.base.is_true=is_true;
function is_true(v) {

  return v === true;
}


funcs.common.base.and=and;
function and(_funcs) {

  var funcs = _.toArray(arguments);
  return function (v) {
    for (var i = 0; i < length(funcs); i++) {
      if (!funcs[i](v))
        return false;
    }
    return true;
  };
}


funcs.common.base.is_empty=is_empty;
function is_empty(v) {

  if (arguments.length !== 1)
    throw new Error("arguments.length !== 1: " + to_string(v));

  if ( v === null )
    throw new Error("invalid value: null");
  if ( v === undefined)
    throw new Error("invalid value: undefined");

  if (_.isPlainObject(v))
    return _.keys(v).length === 0;

  var l = v.length;
  if (!_.isFinite(l))
    throw new Error("!!! Invalid .length property.");

  return l === 0;
} // === func


funcs.common.base.each_x=each_x;
function each_x(coll, f) {

  be(is_enumerable, coll);
  be(is_function, f);

  return eachs(coll, function (_i, x) {
    return f(x);
  });

}


funcs.common.base.to_default=to_default;
function to_default(valid) {

  if (length(arguments) === 2) {
    var v = arguments[1];
    if (v === null || v === undefined)
      return valid;
    return v;
  }

  return function (v) { return to_default(valid, v); };
}


funcs.common.base.is_num=is_num;
function is_num(v) {

  return typeof v === 'number' && isFinite(v);
}


funcs.common.base.has_property_of=has_property_of;
function has_property_of(name, type) {

  var f = function has_property_of(o) {
    return typeof o[name] === type;
  };

  return set_function_string_name(f, arguments);
}


funcs.common.base.key_to_bool=key_to_bool;
function key_to_bool(raw_key, data) {

  var FRONT_BANGS = /^\!+/;

  var key = reduce(
    raw_key,
    be(is_string),
    _.trim,
    be(not(is_empty))
  );

  var bang_match = key.match(FRONT_BANGS);
  var dots       = ( bang_match ? key.replace(bang_match[0], '') : key ).split('.');
  var keys       = _.map( dots, _.trim );

  var current = data;
  var ans  = false;

  _.find(keys, function (key) {
    if (_.has(current, key)) {
      current = data[key];
      ans = !!current;
    } else {
      ans = undefined;
    }

    return !ans;
  });

  if (ans === undefined)
    return ans;

  if (bang_match) {
    _.times(bang_match[0].length, function () {
      ans = !ans;
    });
  }

  return ans;
} // === func


funcs.common.base.map_x=map_x;
function map_x(coll, f) {

  be(is_enumerable, coll);
  be(is_function,   f);
  return _.map(coll, function (x) { return f(x); });
}


funcs.common.base.is_whitespace=is_whitespace;
function is_whitespace(v) {

  return is_string(v) && length(_.trim(v)) === 0;
}


funcs.common.base.is_null_or_undefined=is_null_or_undefined;
function is_null_or_undefined(v) {

  return v === null || v === undefined;
}


funcs.common.base.all=all;
function all(_funcs) {
  var _and = and.apply(null, arguments);
  return function (arr) {
    for(var i = 0; i < length(arr); i++){
      if (!_and(arr[i]))
        return false;
    }
    return true;
  };
}


funcs.common.base.function_sig=function_sig;
function function_sig(f, args) {

  return function_to_name(f) + '(' + _.map(args, to_string).join(',')  + ')';
}


funcs.common.base.is_something=is_something;
function is_something(v) {

  if (arguments.length !== 1)
    throw new Error("arguments.length !== 1: " + to_string(v));
  return v !== null && v !== undefined;
}


funcs.common.base.is_function=is_function;
function is_function(v) {
  if (arguments.length !== 1)
    throw new Error("Invalid: arguments.length must === 1");
  return typeof v === 'function';
}


funcs.common.base.own_property=own_property;
function own_property(name) {

  return function _own_property_(o) {
    if (!o.hasOwnProperty(name))
      throw new Error('Key not found: ' + to_string(name) + ' in ' + to_string(o));
    return o[name];
  };
} // === func own_property


funcs.common.base.to_function_string=to_function_string;
function to_function_string(f, args) {

  return function_to_name(f) + '(' + _.map(args, to_string).join(', ') + ')';
}


funcs.common.base.msg_match=msg_match;
function msg_match(pattern, msg) {

  if (_.isEqual(pattern, msg))
    return true;

  if (is_plain_object(pattern) && is_plain_object(msg)) {
    if (is_empty(pattern) !== is_empty(msg))
      return false;

    return !_.find(_.keys(pattern), function (key) {
      var target = pattern[key];
      if (msg[key] === target)
        return !true;
      if (is_function(target))
        return !be(is_boolean, target(msg[key]));
      return !false;
    });
  }

  return false;
}


funcs.common.base.reduce=reduce;
function reduce(value, _functions) {

  var funcs = _.toArray(arguments);
  var v     = funcs.shift();
  return _.reduce(funcs, function (acc, f) { return f(acc); }, v);
}


funcs.common.base.to_arguments=to_arguments;
function to_arguments() {
  return arguments;
}


funcs.common.base.copy_value=copy_value;
function copy_value(v) {

  var allow_these = [];

  if (length(arguments) < 2) {
    arguments_are(arguments, is_something);
  } else {
    allow_these = _.toArray(arguments).slice(1);
  }

  var type = typeof v;
  if (type === 'string' || type === 'number' || is_boolean(v))
    return v;

  if (is_array(v))
    return _.map(v, function (new_v) { return copy_value.apply(null, [new_v].concat(allow_these)); });

  if (is_plain_object(v))
    return reduce_eachs({}, v, function (acc, kx, x) {
      acc[kx] = copy_value.apply(null, [x].concat(allow_these));
      return acc;
    });

  var return_val = _.find(allow_these, function (f) { return f(v); });
  if (return_val)
    return v;

  return v;
  // throw new Error('Value can\'t be copied: ' + to_string(v));
}


funcs.common.base.has_length=has_length;
function has_length(num) {

  return function _has_length_(val) {
    arguments_are(arguments, is_something);
    if (val.length === num)
      return true;
    throw new Error(to_string(val) + '.length !== ' + to_string(num));
  };
}


funcs.common.base.is=is;
function is(target) {

  return function (val) { return val === target; };
}


funcs.common.base.keys_or_indexes=keys_or_indexes;
function keys_or_indexes(v) {
  
  if (is_plain_object(v))
    return _.keys(v);

  var a = [];
  for(var i = 0; i < v.length; i++) {
    a[i] = i;
  }
  return a;
}


funcs.common.base.to_value=to_value;
function to_value(val, _funcs) {

  be(is_something, val);
  be(not(is_empty), arguments);

  var i = 1, l = arguments.length;
  while (i < l) {
    val = arguments[i](val);
    i = i + 1;
  }
  return val;
}


funcs.common.base.create_key=create_key;
function create_key(o, k, v) {

  if (o.hasOwnProperty(k))
    throw new Error("Key already defined: " + to_string(k) + " value: " + to_string(v));

  return create_or_update_key.apply(null, arguments);
} // === function


funcs.common.base.to_array=to_array;
function to_array(val) {
  if (!_.isArray(val) && val.constructor != arguments.constructor)
    throw new Error("Invalid value for to_array: " + to_string(val));

  return _.toArray(val);
} // === func



funcs.common.base.is_array=is_array;
function is_array(v) {

  return _.isArray(v);
}


funcs.common.base.is_null=is_null;
function is_null(v) {
  return v === null;
}


funcs.common.base.to_string=to_string;
function to_string(val) {

  if (val === null)      return 'null';
  if (val === undefined) return 'undefined';
  if (val === false)     return 'false';
  if (val === true)      return 'true';

  if (_.isArray(val))
    return  '['+_.map(val, to_string).join(", ") + ']';

  if (_.isString(val))
    return '"' + val + '"';

  if ( is_arguments(val) )
    return to_string(_.toArray(val));

  if (is_plain_object(val)) {

    return '{' + _.reduce(_.keys(val), function (acc, k) {
      acc.push(to_string(k) + ':' + to_string(val[k]));
      return acc;
    }, []).join(",") + '}';
  }

  if (is_function(val) && val.hasOwnProperty('to_string_name'))
    return val.to_string_name;

  if (_.isFunction(val))
    return (val.name) ? val.name + ' (function)' : val.toString();

  if (_.isString(val))
    return '"' + val + '"';

  if (_.isArray(val))
    return '[' + _.map(_.toArray(val), to_string).join(', ') + '] (Array)';

  if (val.constructor === arguments.constructor)
    return '[' + _.map(_.toArray(val), to_string).join(', ') + '] (arguments)';

  if (is_error(val))
    return '[Error] ' + to_string(val.message);
  return val.toString();

} // === func



funcs.common.base.set_function_string_name=set_function_string_name;
function set_function_string_name(f, args) {

  if (f.to_string_name)
    throw new Error('.to_string_name alread set: ' + to_string(f.to_string_name));
  f.to_string_name = function_sig(f, args);
  return f;
}


funcs.common.base.is_string=is_string;
function is_string(v) {

  return typeof v === "string";
}


funcs.common.base.or=or;
function or(_funcs) {

  var funcs = _.toArray(arguments);

  return function (v) {
    return !!_.find(funcs, function (f) { return f(v) === true; });
  };
}


funcs.common.base.sort_by_length=sort_by_length;
function sort_by_length(arr) {
  

  return arr.sort(function (a,b) {
    return length(a) - length(b);
  });
}


funcs.common.base.return_arguments=return_arguments;
function return_arguments() { return arguments; }


funcs.common.base.combine=combine;
function combine(_vals) {

  var vals = _.toArray(arguments);

  if (all(is_plain_object)(vals)) {
    return _.extend.apply(null, [{}].concat(vals));
  }

  if (all(is_array)(vals))
    return [].concat(vals);

  throw new Error("Only Array of Arrays or Plain Objects allowed: " + to_string(arguments));
}


funcs.common.base.not=not;
function not(func) {


  reduce(arguments, length, be(is(1)));
  var l = arguments.length;
  if (!is_function(func))
    throw new Error('Not a function: ' + to_string(func));

  return function _not_(val) {
    if (arguments.length !== 1)
      throw new Error('arguments.length !== 1');
    var result = func(val);
    if (!is_boolean(result))
      throw new Error('Function did not return boolean: ' + to_string(func) + ' -> ' + to_string(result));
    return !result;
  };
}


funcs.common.base.is_plain_object=is_plain_object;
function is_plain_object(v) {

  return _.isPlainObject(v);
}


funcs.common.base.to_slot=to_slot;
function to_slot(func, _args) {

  var ARGS = to_array(arguments).slice(1);

  return function _to_slot_() {

    var MIDDLE_ARGS = to_array(arguments);
    var FIN_ARGS = reduce_eachs([], ARGS, function (array, _i, x) {
      if (x !== '{{_}}') {
        array.push(x);
        return array;
      }

      if (is_empty(MIDDLE_ARGS))
        throw new Error("Not enough arguments for: " + to_string(func) + " args: " + length(MIDDLE_ARGS) + " != " + length(ARGS));

      array.push(MIDDLE_ARGS.shift());

      return array;
    });

    if (!is_empty(MIDDLE_ARGS))
      throw new Error("Extra args for : " + to_string(func) + " extra: " + length(MIDDLE_ARGS));

    return func.apply(null, FIN_ARGS);
  }; // === return

} // === function to_slot


funcs.common.base.replace=replace;
function replace(pattern, new_value) {

  if (length(arguments) === 3) {
    return arguments[2].replace(arguments[0], arguments[1]);
  }

  return function (v) {
    return v.replace(pattern, new_value);
  };
}


funcs.common.base.length_of=length_of;
function length_of(num) {

  return function (v) {
    if (!is_something(v) && has_property_of('length', 'number')(v))
      throw new Error('invalid value for length_of: ' + to_string(num));
    return v.length === num;
  };
}


funcs.common.base.length=length;
function length(raw_v) {

  if (raw_v === null || raw_v === undefined || !_.isFinite(raw_v.length))
    throw new Error("Invalid value for length: " + to_string(raw_v));
  return raw_v.length;
}


funcs.common.base.to_key=to_key;
function to_key(str) {
  return reduce(str, be(is_string), be(not(is_empty)), _.trim);
}


funcs.common.base.is_undefined=is_undefined;
function is_undefined(v) {

  return v === undefined;
}


funcs.common.base.conditional=conditional;
function conditional(name, funcs) {

  if (funcs.length < 2)
    throw new Error("Called with too few arguments: " + arguments.length);

  if (!_[name])
    throw new Error("_." + name + " does not exist.");

  return function (v) {
    return _[name](funcs, function (f) { return f(v); });
  };
}


funcs.common.base.to_var_name=to_var_name;
function to_var_name(val, delim) {

  if (length(arguments) == 1)
    delim = "_";

  return val
  .replace(/^[\/]+/, "")
  .replace(/[^a-zA-Z-0-9\_\-]+/g, delim);
}



funcs.common.base.all_funcs=all_funcs;
function all_funcs(arr) {
  var l = arr.length;
  return _.isFinite(l) && l > 0 && _.all(arr, _.isFunction);
}


funcs.common.base.has_own_property=has_own_property;
function has_own_property(name) {

  var f = function __has_own_property(o) {
    return o.hasOwnProperty(name);
  };

  return set_function_string_name(f, arguments);
}


funcs.common.base.update_key=update_key;
function update_key(o, k, v) {

  if (!o.hasOwnProperty(k))
    throw new Error("Key not defined: " + to_string(k) + " in: " + to_string(o));

  var new_o = copy_value(o);
  new_o[k] = be(is_something, v);

  return new_o;
} // === function



funcs.common.base.is_anything=is_anything;
function is_anything(v) {

  if (arguments.length !== 1)
    throw new Error("Invalid: arguments.length must === 1");
  if (v === null)
    throw new Error("null found.");
  if (v === undefined)
    throw new Error("undefined found.");

  return true;
}


funcs.common.base.log=log;
function log(_args) {

  if (typeof console !== 'undefined' && console.log)
    return console.log.apply(console, arguments);

  return false;
} // === func


funcs.common.base.find_key=find_key;
function find_key(k, _args) {

  var args = _.toArray(arguments);
  args.shift();
  var o = _.detect(args, function (x) { return x.hasOwnProperty(k); });

  if (!o)
    throw new Error('Key, ' + to_string(k) + ', not found in any: ' + to_string(args));

  return o[k];
}


funcs.common.base.describe_reduce=describe_reduce;
function describe_reduce(INFO, val, _args) {

  var funcs = to_array(arguments).slice(2);
  try {
    return reduce.apply(null, [val].concat(funcs));
  } catch (e) {
    e.message = INFO + ': ' + e.message;
    throw e;
  }
} // === function


funcs.common.base.dot=dot;
function dot(raw_name) {

  var name = _.trimEnd(raw_name, '()');

  return function _dot_(o) {
    if (is_undefined(o[name]))
      throw new Error('Property not found: ' + to_string(name) + ' in ' + to_string(o));

    if (name !== raw_name) {
      log(name, raw_name, o);
      be(is_function, o[name]);
      return o[name]();
    } else
      return o[name];
  };
} // === func dot


funcs.common.base.length_gt=length_gt;
function length_gt(num) {

  return function (v) { return v.length > num;};
}


funcs.common.base.is_regexp=is_regexp;
function is_regexp(val) {
  return _.isRegExp(val);
}


funcs.common.base.is_blank_string=is_blank_string;
function is_blank_string(v) {

  be(is_string, v);
  return length(_.trim(v)) < 1;
}


funcs.common.base.merge=merge;
function merge(_args) {

  if (arguments.length === 0)
    throw new Error('Arguments misisng.');
  var type = is_array(arguments[0]) ? 'array' : 'plain object';
  var fin  = (type === 'array') ? [] : {};
  eachs(arguments, function (kx,x) {
    if (type === 'array' && !is_array(x))
      throw new Error('Value needs to be an array: ' + to_string(x));
    if (type === 'plain object'  && !is_plain_object(x))
      throw new Error('Value needs to be a plain object: ' + to_string(x));

    eachs(x, function (key, val) {
      if ( type === 'array' ) {
        fin.push(val);
        return;
      }

      if (fin[key] === val || !fin.hasOwnProperty(key)) {
        fin[key] = val;
        return;
      }

      if (is_array(fin[key]) && is_array(val)) {
        fin[key] = [].concat(fin[key]).concat(val);
        return;
      }

      if (is_plain_object(fin[key]) && is_plain_object(val))  {
        fin[key] = merge(fin[key], val);
        return;
      }

      throw new Error('Could not merge key: [' + to_string(key) +  '] ' + to_string(fin[key]) + ' -> ' + to_string(val) );

    }); // === eachs
  });

  return fin;
}


funcs.common.base.is_length_zero=is_length_zero;
function is_length_zero(v) {
  return length(v) === 0;
}


funcs.common.base.is_boolean=is_boolean;
function is_boolean(v) {

  return typeof v === 'boolean';
}


funcs.common.base.is_error=is_error;
function is_error(v) {

  return is_something(v) &&
    (
      v.constructor === Error ||
     (!is_plain_object(v) && is_string(v.stack) && is_string(v.message))
    )
    ;
}


funcs.common.base.reduce_eachs=reduce_eachs;
function reduce_eachs() {
  var args = _.toArray(arguments);
  if (args.length < 3)
    throw new Error("Not enough args: " + to_string(args));
  var init = args.shift();
  var f    = args.pop();

  // === Validate inputs before continuing:
  for (var i = 0; i < args.length; i++) {
    if (!is_enumerable(args[i]))
        throw new Error("Invalid value for reduce_eachs: " + to_string(args[i]));
  }

  if (is_undefined(init))
    throw new Error("Invalid value for init: " + to_string(init));


  // === Process inputs:
  var cols_length = length(args);

  return reduce_eachs_row_maker([init], 0, _.map(args, keys_or_indexes));

  function reduce_eachs_row_maker(row, col_i, key_cols) {
    if (col_i >= cols_length) {
      if (row.length !== f.length)
        throw new Error("f.length (" + f.length + ") should be " + row.length + " (collection count * 2 + 1 (init))");
      row[0] = f.apply(null, [].concat(row)); // set reduced value
      return row[0];
    }

    var keys = key_cols[col_i].slice(0);
    var vals = args[col_i];
    ++col_i;

    for(var i = 0; i < keys.length; i++) {
      row.push(keys[i]); // key
      row.push(vals[keys[i]]); // actual value

      reduce_eachs_row_maker(row, col_i, key_cols);

      row.pop();
      row.pop();
    }

    return row[0];
  }
} // === function: reduce_eachs


funcs.common.base.function_to_name=function_to_name;
function function_to_name(f) {

  var WHITESPACE = /\s+/g;
  return f.to_string_name || f.toString().split('(')[0].split(WHITESPACE)[1] || f.toString();
}


funcs.common.base.is_enumerable=is_enumerable;
function is_enumerable(v) {

  return is_string(v) ||
  is_array(v)         ||
  is_plain_object(v)  ||
  _.isFinite(v.length) ||
    is_arguments(v);
}


funcs.common.base.standard_name=standard_name;
function standard_name(str) {

  var WHITESPACE = /\s+/g;
  return _.trim(str).replace(WHITESPACE, ' ').toLowerCase();
}


funcs.common.base.arguments_are=arguments_are;
function arguments_are(args_o, _funcs) {

  if (!is_arguments(args_o))
    throw new Error('not arguments: ' + to_string(args_o));

  var funcs = _.toArray(arguments);
  var args  = funcs.shift();

  if (args.length !== funcs.length) {
    throw new Error('Wrong # of arguments: expected: ' + funcs.length + ' actual: ' + args.length);
  }

  for (var i = 0; i < funcs.length; i++) {
    if (!funcs[i](args[i]))
      throw new Error('Invalid arguments: ' + to_string(args[i]) + ' !' + to_string(funcs[i]));
  }

  return _.toArray(args);
}


funcs.common.base.to_match_string=to_match_string;
function to_match_string(actual, expect) {

  if (_.isEqual(actual, expect))
    return to_string(actual) + ' === ' + to_string(expect);
  else
    return to_string(actual) + ' !== ' + to_string(expect);
}


funcs.common.base.split_on=split_on;
function split_on(pattern, str) {

  function _split_on_(str) {
    return split_on(pattern, str);
  }

  if (length(arguments) === 1)
    return _split_on_;

  arguments_are(arguments, is_something, is_string);
  var trim = _.trim(str);
  if (is_empty(trim))
    return [];
  return _.compact( map_x(trim.split(pattern), function (x) {
    return !is_blank_string(x) && _.trim(x);
  }));
}


funcs.common.base.create_or_update_key=create_or_update_key;
function create_or_update_key(orig_o, name, val) {
  var o = copy_value(orig_o);
  var k = reduce(
    name,
    be(is_string),
    _.trim,
    to_var_name
  );

  o[k] = be(is_something, val);
  return o;
}


funcs.common.base.apply_function=apply_function;
function apply_function(f, args) {

  if (arguments.length !== 2)
    throw new Error('Wrong # of argumments: expected: ' + 2 + ' actual: ' + arguments.length);

  if (!is_array(args) && !is_arguments(args))
    throw new Error('Not an array/arguments: ' + to_string(args));

  if (f.length !== args.length)
    throw new Error('function.length (' + function_to_name(f) + ' ' + f.length + ') !== ' + args.length);

  return f.apply(null, args);
}


funcs.common.base.identity=identity;
function identity(x) {

  if (arguments.length !== 1)
    throw new Error("arguments.length !== 0");
  return x;
}


funcs.common.base.eachs=eachs;
function eachs() {

  var args = _.toArray(arguments);

  if (args.length < 2)
    throw new Error("Not enough args: " + to_string(args));
  var f    = args.pop();

  // === Validate inputs before continuing:
  for (var i = 0; i < args.length; i++) {
    if (!is_enumerable(args[i]))
        throw new Error("Invalid value for eachs: " + to_string(args[i]));
  }

  // === Process inputs:
  var cols_length = length(args);

  return eachs_row_maker([], 0, _.map(args, keys_or_indexes));

  function eachs_row_maker(row, col_i, key_cols) {
    if (col_i >= cols_length) {
      if (row.length !== f.length)
        throw new Error("f.length (" + f.length + ") should be " + row.length + " (collection count * 2 )");
      f.apply(null, [].concat(row)); // set reduced value
      return;
    }

    var keys = key_cols[col_i].slice(0);
    var vals = args[col_i];
    ++col_i;

    for(var i = 0; i < keys.length; i++) {
      row.push(keys[i]); // key
      row.push(vals[keys[i]]); // actual value

      eachs_row_maker(row, col_i, key_cols);

      row.pop();
      row.pop();
    }

    return;
  }
}


funcs.common.base.is_positive=is_positive;
function is_positive(v) {

  return typeof v === 'number' && isFinite(v) && v > 0;
}


funcs.common.base.is_array_of_functions=is_array_of_functions;
function is_array_of_functions(a) {

  return _.isArray(a) && length_gt(0)(a) > 0 && _.every(a, _.isFunction);
} // === func


funcs.common.base.to_function=to_function;
function to_function() {

  if (arguments.length === 1) {
    if (is_function(arguments[0])) {
      return arguments[0];
    } else{
      var x = arguments[0];
      return function () { return x; };
    }
  }

  var i = 0, f;
  var l = arguments.length;
  while (i < l) {
    f = arguments[i];
    if (!_.isFunction(f))
      throw new Error('Not a function: ' + to_string(f));
    i = i + 1;
  }

  var funcs = arguments;
  return function () {
    var i = 0, f, val;
    while (i < l) {
      f = funcs[i];
      if (i === 0) {
        if (f.length !== arguments.length)
          throw new Error('Function.length ' + f.length + ' ' + to_string(f) + ' !=== arguments.length ' +  arguments.length + ' ' + to_string(arguments));
        val = apply_function(f, arguments);
      } else {
        if (f.length !== 1)
          throw new Error('Function.length ' + f.length + ' !=== 1');
        val = apply_function(f, [val]);
      }
      i = i + 1;
    }
    return val;
  }; // return
}


funcs.common.base.is_arguments=is_arguments;
function is_arguments(v) {

  return is_something(v) &&
    v.constructor === arguments.constructor &&
      _.isFinite(v.length) &&
        !_.isPlainObject(v);
}


funcs.common.base.be=be;
function be(func, val) {

  switch(length(arguments)) {
    case 2:
      if (!func(val))
        throw new Error(to_string(val) + ' should be: ' + to_string(func));
      return val;

    case 1:
      be(is_function, func);
      return function (v) {
        return be(func, v);
      };
  }

  throw new Error("Invalid arguments.");
}



funcs.common.base.find=find;
function find(_funcs) {

  var funcs = _.toArray(arguments);

  return function (v) {
    return _.find(v, and.apply(null, funcs));
  };
}


funcs.common.spec = {};

funcs.common.spec.spec_next=spec_next;
function spec_next(specs) {

  be(is_specs, specs);

  if (specs.i === 'init') {
      specs.i = 0;
  } else {
    if (specs.dones[specs.i] !== true)
      throw new Error("Spec did not finish: " + to_string(specs.list[specs.i]));
    specs.i = specs.i + 1;
  }

  var i    = specs.i;
  var list = specs.list;
  var func = list[i];

  // === Are all specs finished?
  if (!func && i >= length(specs.list)) {
    specs.total = i;
    if (specs.total !== specs.list.length)
      throw new Error('Not all specs finished: ' + to_string(specs.total) + ' !== ' + to_string(specs.list.length));
    specs.on_finish(specs);
    return length(specs.list);
  }

  // === Function was found?
  if (!func) {
    throw new Error('Spec not found: ' + to_string(i));
  }

  // === Async?
  if (length(func) === 1 ) {
    setTimeout(function () {
      if (!specs.dones[i])
        throw new Error("Spec did not finish in time: " + to_string(func));
    }, 2500);
    func(function () {
      specs.dones[i] = true;
      spec_next(specs);
    });
    return false;
  }

  // === Regular spec, non-asyc?
  if (length(func) === 0) {
    func();
    specs.dones[i] = true;
    return spec_next(specs);
  }

  throw new Error('Function has invalid arguments: ' + to_string(func));
}


funcs.common.spec.is_specs=is_specs;
function is_specs(specs) {
  var is_valid_specs_i = or(is('init'), is(0), is_positive);

  be(is_plain_object,  specs);
  be(not(is_empty),    specs.list);
  be(is_valid_specs_i, specs.i);
  be(is_plain_object,  specs.dones);
  return true;
}


funcs.common.spec.spec_dom=spec_dom;
function spec_dom(cmd) {

  switch (cmd) {
    case 'reset':
      var stage = $('#Spec_Stage');
      if (stage.length === 0)
        $('body').prepend('<div id="Spec_Stage"></div>');
      else
        stage.empty();
      break;

    default:
      if (arguments.length !== 0)
      throw new Error("Unknown value: " + to_string(arguments));
  } // === switch cmd

  return $('#Spec_Stage');
}


funcs.common.spec.spec=spec;
function spec() {

  var is_allowed = (
    ( typeof(window) !== 'undefined' && $('#Spec_Stage').length === 1) ||
      ( typeof(process) !== 'undefined' && process.argv[2] === 'test')
  );

  if (!is_allowed)
    return;

  var args = _.toArray(arguments);

  if (length(args) !== 1) {
    return App('push into or create', 'specs', args);
  } // === switch

  if (args[0] !== 'run' && !is_function(args[0]))
    throw new Error('Unknown value: ' + to_string(args[0]));

  App('create or ignore', 'spec on finishs', []);
  App('create or ignore', 'specs done', []);
  var specs = App('read or create', 'specs', []);
  var i     = App('read or create', 'spec.index', 0);

  if (is_empty(specs))
    throw new Error('No specs found.');

  if (is_function(arguments[0]))
    App('push into', 'spec on finishs', arguments[0]);

  while (i < specs.length) {
    if (run_spec(i, specs[i]) === 'wait')
      return 'wait';
    i = App('read', 'spec.index');
  }

  var passed = App('read', 'spec.index');
  if (specs.length < passed)
    throw new Error("Total specs: " + specs.length + " != Passed specs: " + passed);

  var on_fins = App('read', 'spec on finishs');
  if (is_empty(on_fins)) {
    on_fins.push(spec.default_msg);
  }

  var msg = {total: specs.length};
  for (var func_i = 0; func_i < on_fins.length; func_i++)
    on_fins[func_i](msg);

  return 'finish';

  function actual_equals_expect(actual, expect) {
    if (_.isEqual(actual, expect))
      return true;

    if (_.isString(actual) && _.isRegExp(expect) && actual.match(expect))
      return true;

    if (actual && actual.constructor === Error && expect && expect.constructor && actual.message === expect.message)
      return true;

    if (actual && actual.constructor === Error && _.isRegExp(expect) && actual.message.match(expect))
      return true;

    return false;
  }

  function run_spec(index, raw_spec) {

    var f, args, expect, actual;

    if (raw_spec.length === 2 && _.isFunction(raw_spec[1])) {
        f      = raw_spec[1];
        args   = (length(f) > 0) ? [compare_actual] : [];
        expect = raw_spec[0];
    } else {
      if (raw_spec.length === 3 && _.isFunction(raw_spec[0])) {
        f      = raw_spec[0];
        args   = raw_spec[1];
        expect = raw_spec[2];
      } else {
        throw new Error("Invalid spec: " + to_string(raw_spec));
      }
    }

    // === Handle async specs:
    if (args[0] === compare_actual) {
      f.apply(null, args);
      wait_max(3, function () {
        if (!_.includes(App('read', 'specs done'), index))
          return false;
        spec('run');
        return true;
      });
      return "wait";
    } // === if =======================

    try {
      actual = f.apply(null, args);
    } catch (e) {
      actual = e;
    }
    compare_actual(actual);
    return true;

    function compare_actual(actual) {

      var sig = to_function_string(f, args);
      var msg = to_match_string(actual, expect);

      if (!actual_equals_expect(actual, expect)) {

        if (is_error(actual)) {
          console.error("!!! Failed w/ unexpected error: " + sig);
          throw actual;
        }

        log(f, args, expect, actual);
        throw new Error("!!! Failed: " + sig + ' -> ' + msg );
      }

      log('=== Passed: ' + sig + ' -> ' + msg);

      App('+1', 'spec.index');
      App('push into', 'specs done', index);
    } // === compare_actual
  } // === function regular_spec

} // === function spec

spec.default_msg = function default_msg(msg) {
  log('      ======================================');
  log('      Specs Finish: ' + to_string(msg.total) + ' tests');
  log('      ======================================');
};




funcs.common.state = {};

funcs.common.state.App=App;
function App() {

  if (!App._computer) {
    App._computer = new Computer();
  }

  return App._computer.apply(null, arguments);
}

funcs.App = App;


funcs.common.state.Computer=Computer;
function Computer() {

  ME.values     = {};
  ME.msg_funcs  = [];
  ME.abouts     = {};
  return ME;

  function _save_(action, name, val) {
    var fin = reduce_eachs(val, ME.abouts[name], function (val, _i, cleaner) {
      return cleaner({action: action, name: name, value: val});
    });
    ME.values[name] = fin;
    return _read_and_copy_key_(name);
  }

  function _read_and_copy_key_(k) {
    var key = _require_key_(k);
    return _copy_value_(ME.values[key]);
  }

  function _copy_value_(v) {
    return copy_value(v, is_function, is_null, is_undefined, is_error, is_arguments, is_regexp);
  }

  function _replace_with_copy_(raw) {
    var key = _require_key_(raw);
    ME.values[key] = _copy_value_(ME.values[key]);
    return ME.values[key];
  }

  function _has_key_(k) {
    return ME.values.hasOwnProperty(to_key(k));
  }

  function _update_(k, func) {
  }

  function _key_must_not_exist_(k) {
    var key = to_key(k);
    if (_has_key_(key))
      throw new Error("Value already created: " + to_string(key));
    return key;
  }

  function _require_key_(k) {
    var key = to_key(k);
    if (!_has_key_(key))
      throw new Error("Value has not been created: " + to_string(k));
    return key;
  }

  function ME(action, args) {
    if (action === 'invalid') {
      ME.is_invalid = true;
      return;
    }

    if (ME.is_invalid === true)
      throw new Error("state is invalid.");

    var name, new_abouts, new_args, key, func, funcs, tail, new_val, old_vals, default_val, old;

    var msg_funcs = ME.msg_funcs.slice(0);

    switch (action) {
      case 'create message function':
         func = be(and(is_function, has_length(1)), arguments[1]);

        ME.msg_funcs = msg_funcs.slice(0).concat([func]);
        return true;

      case 'push into or create':
        name = to_key(arguments[1]);
        if (!_has_key_(name))
          ME('create', name, []);
        new_args = ['push into'].concat(_.toArray(arguments).slice(1));
        return ME.apply(null, new_args);

      case 'push into':
        name    = _require_key_(arguments[1]);
        new_val = reduce(arguments[2], be(is_something));
        return _replace_with_copy_(name).push(new_val);

      case 'read':
        name = reduce(arguments[1], be(is_string), _.trim, be(not(is_empty)));

        var val_has_been_set = is_something(ME.values[name]);
        var has_default_val  = arguments.length > 2;
        default_val      = has_default_val && be(is_something, arguments[2]);

        if (!val_has_been_set && !has_default_val)
          throw new Error('Not set: ' + to_string(name));

        if (val_has_been_set)
          return _copy_value_(ME.values[name]);
        return default_val;

      case 'create':
        name = _key_must_not_exist_(arguments[1]);
        new_abouts = _.toArray(arguments).slice(3);
        if (is_empty(new_abouts))
          ME.abouts[name] = [];
        else
          ME.abouts[name] = be( is_array_of_functions, new_abouts );

        return _save_('create', name, reduce(arguments[2], be(is_something)));

      case 'create or ignore':
        return ME.apply(null, ["read or create"].concat(_.toArray(arguments).slice(1)));

      case 'read or create':
        name = to_key(arguments[1]);
        tail = _.toArray(arguments).slice(2);
        if (_has_key_(name))
          return ME('read', name);
        return ME.apply(null, ['create', name].concat(tail));

      case 'read and update':
        key  = _require_key_(arguments[1]);
        func = be(is_function, arguments[2]);
        old  = ME('read', key);
        return ME('update', key, func(old));

      case 'update':
        if (arguments.length !== 3)
          throw new Error('Wrong # of arguments: ' + to_string(arguments));
        return _save_('update', _require_key_(arguments[1]), arguments[2]);

      case '+1':
        return ME('read and update', arguments[1], function (old) {
          return be(is_num, old) + 1;
        });

      case '-1':
        return ME('read and update', arguments[1], function (old) {
          return be(is_num, old) - 1;
        });

      case 'send message':
        arguments_are(arguments, is('send message'), is_plain_object);
        var msg = arguments[1];

        return reduce_eachs([], msg_funcs, function (acc, _ky, func) {
          try {
            var msg_copy = _copy_value_(msg);
            acc.push( apply_function(func, [msg_copy]));
          } catch (e) {
            ME('invalid');
            throw e;
          }

          return acc;
        });

      default:
        ME('invalid');
        throw new Error("Unknown action for state: " + to_string(action));
    } // === switch action
  } // === return function State;

} // === function Computer =====================================================


funcs.browser     = {};

funcs.browser.dom = {};

funcs.browser.dom.is_function_name=is_function_name;
function is_function_name(v) {

  if (!is_string(v))
    return false;

  return is_function(exports[v]);
}


funcs.browser.dom.show=show;
function show(msg) {

  var dom_id = be(is_string, msg.dom_id);
  var key    = be(is_string, msg.args[0]);

  App('create message function', function _show_(msg) {
    var answer = key_to_bool(key, msg);
    if (is_boolean(answer) !== true)
      return;
    $('#' + dom_id).show();
    return 'show: ' + dom_id;
  });
}


funcs.browser.dom.dom_id=dom_id;
function dom_id() {

  var args   = _.toArray(arguments);
  var o      = _.find(args, _.negate(_.isString));
  var prefix = _.find(args, _.isString);
  var old    = o.attr('id');

  if (old && !is_empty(old))
    return old;

  var str = new_id(prefix || 'default_id_');
  o.attr('id', str);
  return str;
} // === id


funcs.browser.dom.is_partial=is_partial;
function is_partial($) {
  return $('html').length === 0;
}



funcs.browser.dom.next_id=next_id;
function next_id() {

  if (!is_num(next_id.count))
    next_id.count = -1;
  next_id.count = next_id.count + 1;
  if (is_empty(arguments))
    return next_id.count;
  return arguments[0] + '_' + next_id.count;
}


funcs.browser.dom.show_hide=show_hide;
function show_hide(msg) {

  var dom_id = be(is_string, msg.dom_id);
  var key    = be(is_string, msg.args[0]);

  App('create message function', function _show_hide_(msg) {
    if (!is_plain_object(msg))
      return;

    var answer = key_to_bool(key, msg);
    if (!is_boolean(answer))
      return;

    if (answer)
      return $('#' + dom_id).show();
    else
      return $('#' + dom_id).hide();
  });
}


funcs.browser.dom.node_array=node_array;
function node_array(unknown) {

  var arr = [];
  _.each($(unknown), function (dom) {
    if (dom.nodeType !== 1)
      return arr.push(dom);

    arr.push({
      tag    : dom.nodeName,
      attrs  : dom_attrs(dom),
      custom : {},
      childs : node_array($(dom).contents())
    });
  });

  return arr;
}


funcs.browser.dom.dom_attrs=dom_attrs;
function dom_attrs(dom) {

  arguments_are(arguments, has_property_of('attributes', 'object'));

  return _.reduce(
    dom.attributes,
    function (kv, o) {
      kv[o.name] = o.value;
      return kv;
    },
    {}
  );
} // === attrs


funcs.browser.dom.html_escape=html_escape;
function html_escape(str) {

  return _.escape(str).replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
}


funcs.browser.dom.is_$=is_$;
function is_$(v) {
  return v && typeof v.html === 'function' && typeof v.attr === 'function';
}


funcs.browser.dom.new_id=new_id;
function new_id(prefix) {

  if (!new_id.hasOwnProperty('_id'))
    new_id._id = -1;
  new_id._id = new_id._id + 1;
  return (prefix) ? prefix + new_id._id : new_id._id;
} // === func


funcs.browser.dom.top_descendents=top_descendents;
function top_descendents(dom, selector) {

  var arr = [];
  _.each($(dom), function (node) {
    var o = $(node);
    if (o.is(selector))
      return arr.push(o);
    arr = arr.concat(top_descendents(o.children(), selector));
  }); // === func

  return arr;
}


funcs.browser.dom.remove_attr=remove_attr;
function remove_attr(node, name) {

  var val = $(node).attr(name);
  $(node).removeAttr(name);
  return val;
}


funcs.browser.dom.is_dev=is_dev;
function is_dev() {

  var addr = window.location.href;
  return window.console && (addr.indexOf("localhost") > -1 ||
    addr.indexOf("file:///") > -1 ||
    addr.indexOf("127.0.0.1") > -1)
  ;
} // === func


funcs.browser.dom.hide=hide;
function hide(msg) {

  var dom_id = be(is_string, msg.dom_id);
  var key    = be(is_string, msg.args[0]);
  App('create message function', function _hide_(msg) {
    if (key_to_bool(key, msg) !== true)
      return;
    $('#' + dom_id).hide();
    return 'hide: ' + msg.dom_id;
  });
}


funcs.browser.dom.to_$=to_$;
function to_$(x) {
  return $(x);
}


funcs.browser.dom.outer_html=outer_html;
function outer_html(raw) {

  return raw.map(function () {
    return $(this).prop('outerHTML');
  }).toArray().join('');
}


funcs.browser.dom.html_unescape=html_unescape;
function html_unescape(raw) {

  // From: http://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript
  return (new DOMParser().parseFromString(raw, "text/html"))
  .documentElement
  .textContent;
}


funcs.browser.data_do = {};

funcs.browser.data_do.on_click=on_click;
function on_click(msg) {

  if (!msg_match({dom_id: is_string, args: and(is_array, has_length(1))}, msg))
    return;

  var dom_id = msg.dom_id;
  var func   = describe_reduce(
    "Getting function for on_click",
    window[msg.args[0]],
    be(is_function)
  );

  if (!on_click.processed)
    on_click.processed = {};

  if (on_click.processed[dom_id])
    throw new Error('#' + dom_id + ' already processed by on_click');

  on_click.processed[dom_id] = true;

  $('#' + msg.dom_id).on("click", function (e) {
    e.stopPropagation();
    func({dom_id: dom_id});
  });
} // === function


funcs.browser.data_do.name_to_function=name_to_function;
function name_to_function(raw) {

  /* globals window, global */
/* globals exports */
  if (!is_string(raw))
    throw new Error('Not a string: ' + to_string(raw));
  var str = _.trim(raw);
  var func = window[str];
  if (typeof func !== 'function')
    throw new Error('Function not found: ' + to_string(raw));
  return (typeof 'window' !== 'undefined') ? window[str] : global[str];
}


funcs.browser.data_do.template=template;
function template(msg) {
  if (!msg_match({dom_id: is_string}, msg))
    return;

  var key = describe_reduce(
    "Getting first arg for template key: ",
    msg.args[0],
    be(is_string)
  );

  var pos = describe_reduce(
    "Getting position for template: ",
    msg.args[1],
    to_default('replace'),
    be(is_string)
  );

  var t        = $('#' + msg.dom_id);
  var raw_html = t.html();
  var id       = msg.dom_id;

  function _template_(future_msg) {
    if (key_to_bool(key, future_msg) !== true)
      return;

    var me = _template_;

    // === Init state:
    if (!is_plain_object(me.elements))
      me.elements = {};
    if (!is_array(me.elements[id]))
      me.elements[id] = [];

    // === Remove old nodes:
    if (pos === 'replace') {
      eachs(me.elements[id], function (_index, id) {
        $('#' + id).remove();
      });
    }

    var decoded_html = html_unescape(raw_html);
    var compiled = $(Mustache.render(decoded_html, future_msg.data || {}));
    var new_ids = _.map(compiled, function (x) { return dom_id($(x)); });

    if (pos === 'replace' || pos === 'bottom')
      compiled.insertAfter($('#' + id));
    else
      compiled.insertBefore($('#' + id));

    me.elements[id] = ([]).concat(me.elements[id]).concat( new_ids );

    App('send message', {'dom-change': true});
    return new_ids;
  }

  App('create message function', _template_);
} // ==== funcs: template ==========




funcs.browser.data_do.is_localhost=is_localhost;
function is_localhost() {

  var addr = window.location.href;

  return window.console && (addr.indexOf("localhost") > -1 ||
    addr.indexOf("file:///") > -1 ||
    addr.indexOf("127.0.0.1") > -1)
  ;

} // === func


funcs.browser.data_do.submit_form=submit_form;
function submit_form(msg) {

  if (!msg_match({dom_id: is_string}, msg))
    return;

  var form = $('#' + msg.dom_id).closest('form');
  var raw_form = form[0];

  if (!raw_form)
    return;

  var form_dom_id = dom_id(form);

  // the form_id
  // the form as a data structure
  // Create callback for response
  //   -- standardize response
  //   -- send to Computer/App
  // Send to ajax w/callback
  alite({url: form.attr('action'), method: 'POST', data: formToObj(raw_form)}).then(
    function (result) {
      // At this point, we don't know if it's success or err:
      var data = {
        ajax_response : true,
        result: result,
        data: result.data || {}
      };

      // === If err:
      if (!is_plain_object(result) || !result.ok) {
        data.msg = result.msg || "Computer error. Try again later.";
        data['err_' + form_dom_id] = true;
        App('send message', data);
        return;
      }

      // === else success:
      data['ok_' + form_dom_id] = true;
      App('send message', data);
    }
  ).catch(
    function (err) {
      log(err);
      var data = { ajax_err : true };
      if (is_string(err)) {
        if (is_blank_string(err))
          data.msg = "Network error.";
        else
          data.msg = err;
      }
      data['err_' + form_dom_id] = true;
      App('send message', data);
    }
  );
} // === function submit_form

/* jshint strict: true, undef: true */
/* globals spec, spec_dom, html_escape, App, wait_max, $, msg_match, length */
/* globals eachs, split_on, is_empty, to_string, name_to_function, apply_function, dom_id */

// ==== Integration tests =====================================================
// ============================================================================
spec('yo mo', function button_submit(fin) {
  spec_dom().html(
    '<form id="the_form" action="/repeat">' +
      '<script type="application/template" data-do="template ok_the_form replace">' +
        html_escape('<div>{{val1}} {{val2}}</div>') +
          '</script><button onclick="return false;" data-do="on_click submit_form">Submit</button>' +
            '<input type="hidden" name="val1" value="yo" />' +
            '<input type="hidden" name="val2" value="mo" />' +
            '</form>'
  );
  App('send message', {'dom-change': true});
  spec_dom().find('button').click();
  wait_max(1.5, function () {
    var html = spec_dom().find('div').html();
    if (!html)
      return false;
    fin(html);
    return true;
  });
});

// === Adds functionality:
//     <div data-do="my_func arg1 arg2">content</div>
App('create message function', function process_data_dos(msg) {
  var WHITESPACE = /\s+/g;
  // The other functions
  // may alter the DOM. So to prevent unprocessed DOM
  // or infinit loops, we process one element, then call the function
  // over until no other unprocessed elements are found.

  if (!msg_match({'dom-change': true}, msg))
    return;

  var selector = '*[data-do]:not(*[data-do_done~="yes"])';
  var elements = $('*[data-do]:not(*[data-do_done~="yes"]):first');

  if (length(elements) === 0)
    return;

  var raw_e = elements[0];

  $(raw_e).attr('data-do_done', 'yes');
  eachs(split_on(';', $(raw_e).attr('data-do')), function (_i, raw_cmd) {

    var args = split_on(WHITESPACE, raw_cmd);

    if (is_empty(args))
      throw new Error("Invalid command: " + to_string(raw_cmd));

    var func_name   = args.shift();
    var func        = name_to_function(func_name);

    apply_function(
      func, [{
        on_dom : true,
        dom_id : dom_id($(raw_e)),
        args : args.slice(0)
      }]
    );
    return;

  });

  process_data_dos(msg);

  return true;
}); // === App create message function process_data_dos ==========================================







  return funcs;
})(); // Scope_Dum_Dum_Boom_Boom

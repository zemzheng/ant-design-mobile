webpackJsonp([21],{8:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},19:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(9),e=t(p),o=s(1),c=t(o);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,e["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},23:function(n,a,s){"use strict";s(29)},26:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(35),e=t(p),o=s(34),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,p=!1,e=void 0;try{for(var o,u=(0,c["default"])(n);!(t=(o=u.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(l){p=!0,e=l}finally{try{!t&&u["return"]&&u["return"]()}finally{if(p)throw e}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,e["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},29:function(n,a){},30:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(p){a.indexOf(p)!==-1?s[p]=n[p]:t[p]=n[p]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},34:function(n,a,s){n.exports={"default":s(36),__esModule:!0}},35:function(n,a,s){n.exports={"default":s(37),__esModule:!0}},36:function(n,a,s){s(28),s(22),n.exports=s(38)},37:function(n,a,s){s(28),s(22),n.exports=s(39)},38:function(n,a,s){var t=s(44),p=s(51);n.exports=s(16).getIterator=function(n){var a=p(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},39:function(n,a,s){var t=s(60),p=s(25)("iterator"),e=s(46);n.exports=s(16).isIterable=function(n){var a=Object(n);return void 0!==a[p]||"@@iterator"in a||e.hasOwnProperty(t(a))}},43:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){return"string"==typeof n}function e(n){return p(n.type)&&_(n.props.children)?v["default"].cloneElement(n,{},n.props.children.split("").join(" ")):p(n)?(_(n)&&(n=n.split("").join(" ")),v["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(9),c=t(o),u=s(7),l=t(u),i=s(26),r=t(i),k=s(4),d=t(k),m=s(6),f=t(m),g=s(5),h=t(g),b=s(1),v=t(b),y=s(3),x=t(y),T=s(19),E=t(T),w=s(30),j=t(w),R=s(49),M=t(R),C=/^[\u4e00-\u9fa5]{2}$/,_=C.test.bind(C),U=function(n){function a(){(0,d["default"])(this,a);for(var s=arguments.length,t=Array(s),p=0;p<s;p++)t[p]=arguments[p];var e=(0,f["default"])(this,n.call.apply(n,[this].concat(t)));return e.onClick=function(){e.props.onClick(e)},e}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,j["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),s=(0,r["default"])(a,2),t=s[0],p=t.children,o=t.className,u=t.prefixCls,i=t.type,k=t.size,d=t.inline,m=t.disabled,f=t.htmlType,g=t.icon,h=t.loading,b=t.touchFeedback,y=s[1],T=(0,x["default"])((n={},(0,l["default"])(n,o,o),(0,l["default"])(n,u,!0),(0,l["default"])(n,u+"-primary","primary"===i),(0,l["default"])(n,u+"-ghost","ghost"===i),(0,l["default"])(n,u+"-warning","warning"===i),(0,l["default"])(n,u+"-small","small"===k),(0,l["default"])(n,u+"-loading",h),(0,l["default"])(n,u+"-inline",d),(0,l["default"])(n,u+"-disabled",m),(0,l["default"])(n,u+"-touchFeedback",b),n)),w=h?"loading":g,R=v["default"].Children.map(p,e);return v["default"].createElement("button",(0,c["default"])({},y,{type:f||"button",className:T,disabled:m,onClick:this.onClick}),w?v["default"].createElement(E["default"],{type:w}):null,R)},a}(v["default"].Component);U.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},a["default"]=(0,M["default"])(U),n.exports=a["default"]},48:function(n,a,s){"use strict";s(8),s(23),s(63)},49:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){var a=arguments.length<=1||void 0===arguments[1]?"":arguments[1],s=u["default"].createClass({displayName:"TouchableFeedbackComponent",statics:{myName:a||"TouchableFeedbackComponent"},getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},render:function(){var a=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp};return u["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return s}Object.defineProperty(a,"__esModule",{value:!0});var e=s(9),o=t(e);a["default"]=p;var c=s(1),u=t(c),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},63:function(n,a){},184:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(){}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(7),o=t(e),c=s(4),u=t(c),l=s(6),i=t(l),r=s(5),k=t(r),d=s(1),m=t(d),f=s(43),g=t(f),h=s(3),b=t(h),v=function(n){function a(){return(0,u["default"])(this,a),(0,i["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.imgUrl,p=a.title,e=a.message,c=a.buttonText,u=a.buttonClick,l=a.buttonType,i=a.className,r=(0,b["default"])((n={},(0,o["default"])(n,""+s,!0),(0,o["default"])(n,i,i),n));return m["default"].createElement("div",{className:r},m["default"].createElement("div",{className:s+"-pic",style:{backgroundImage:"url("+t+")"}}),""!==p?m["default"].createElement("div",{className:s+"-title"},p):null,""!==e?m["default"].createElement("div",{className:s+"-message"},e):null,""!==c?m["default"].createElement("div",{className:s+"-button"},m["default"].createElement(g["default"],{type:l,onClick:u},c)):null)},a}(m["default"].Component);a["default"]=v,v.defaultProps={prefixCls:"am-result",imgUrl:"",title:"",message:"",buttonText:"",buttonType:"",buttonClick:p},n.exports=a["default"]},185:function(n,a,s){"use strict";s(8),s(48),s(1154)},759:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(185),s(184)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[],meta:{order:4,title:"\u64cd\u4f5c\u5931\u8d25",filename:"components/result/demo/blank.md",id:"components-result-demo-blank"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/NRzOqylcxEstLGf.png",title:"\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c",message:"\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com"})};return c["default"].createElement(n,null)}}},760:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(185),s(184)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[],meta:{order:3,title:"\u7b49\u5f85\u5904\u7406",filename:"components/result/demo/busy.md",id:"components-result-demo-busy"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/gIGluyutXOpJmqx.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7b49\u5f85\u5904\u7406<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/gIGluyutXOpJmqx.png",title:"\u7b49\u5f85\u5904\u7406",message:"\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406"})};return c["default"].createElement(n,null)}}},761:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(185),s(184)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[],meta:{order:2,title:"\u652f\u4ed8\u5931\u8d25",filename:"components/result/demo/fail.md",id:"components-result-demo-fail"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u652f\u4ed8\u5931\u8d25<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u70b9\u51fb\u91cd\u8bd5<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png",title:"\u652f\u4ed8\u5931\u8d25",message:"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3",buttonText:"\u70b9\u51fb\u91cd\u8bd5",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}})};return c["default"].createElement(n,null)}}},762:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(185),s(184)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[],meta:{order:5,title:"\u65ad\u7ebf",filename:"components/result/demo/offline.md",id:"components-result-demo-offline"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/XMUAssczvVftDHX.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7f51\u7edc\u65e0\u6cd5\u8fde\u63a5<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >brief</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5237\u65b0<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/XMUAssczvVftDHX.png",title:"\u7f51\u7edc\u65e0\u6cd5\u8fde\u63a5",brief:"\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5",buttonText:"\u5237\u65b0",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}})};return c["default"].createElement(n,null)}}},763:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(185),s(184)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[],meta:{order:6,title:"\u5176\u4ed6\u81ea\u5b9a\u4e49\u6837\u5f0f",filename:"components/result/demo/other.md",id:"components-result-demo-other"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>other<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u4e3a\u7a7a<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u5c1d\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u793a<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7f51\u7edc\u4e0d\u7ed9\u529b<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonText</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u5c1d\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement("div",{className:"other"},c["default"].createElement(e["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png",title:"\u5185\u5bb9\u4e3a\u7a7a",message:"\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848",buttonText:"\u91cd\u65b0\u5c1d\u8bd5",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}),c["default"].createElement(e["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png",title:"\u8b66\u793a",message:"\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848",buttonText:"\u91cd\u65b0\u52a0\u8f7d",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}),c["default"].createElement(e["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png",title:"\u7f51\u7edc\u4e0d\u7ed9\u529b",message:"\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5",buttonText:"\u91cd\u65b0\u5c1d\u8bd5",buttonType:"primary",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}))};return c["default"].createElement(n,null)},style:".other .am-result {\n  border-bottom: 8px solid #e9e9e9;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.other</span> <span class="token class" >.am-result</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >border-bottom</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px solid <span class="token hexcode" >#e9e9e9</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}},764:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(185),s(184)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[],meta:{order:0,title:"\u652f\u4ed8\u6210\u529f",filename:"components/result/demo/success.md",id:"components-result-demo-success"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u652f\u4ed8\u6210\u529f<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> fontSize<span class="token punctuation" >:</span> <span class="token string" >\'0.72rem\'</span><span class="token punctuation" >,</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#000\'</span><span class="token punctuation" >,</span> lineHeight<span class="token punctuation" >:</span> <span class="token number" >1</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token number" >998.00</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>del</span><span class="token punctuation" >></span></span><span class="token number" >1098</span>\u5143<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>del</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n  <span class="token operator" >/</span><span class="token operator" >></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png",title:"\u652f\u4ed8\u6210\u529f",message:c["default"].createElement("div",null,c["default"].createElement("div",{style:{fontSize:"0.72rem",color:"#000",lineHeight:1}},"998.00"),c["default"].createElement("del",null,"1098\u5143"))})};return c["default"].createElement(n,null)}}},765:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(185),s(184)),e=t(p),o=s(1),c=t(o),u=s(2);t(u);n.exports={content:[],meta:{order:1,title:"\u9a8c\u8bc1\u6210\u529f",filename:"components/result/demo/verify.md",id:"components-result-demo-verify"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9a8c\u8bc1\u6210\u529f<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1<span class="token punctuation" >"</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(e["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/hbTlcWTgMzkBEiU.png",title:"\u9a8c\u8bc1\u6210\u529f",message:"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"})};return c["default"].createElement(n,null)}}},906:function(n,a,s){n.exports={blank:s(759),busy:s(760),fail:s(761),offline:s(762),other:s(763),success:s(764),verify:s(765)}},1154:function(n,a){}});
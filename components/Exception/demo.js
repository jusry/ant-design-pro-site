webpackJsonp([7],{1058:function(n,t,a){n.exports={403:a(1443),404:a(1444),500:a(1445)}},1177:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},e=function(){function n(n,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(t,a,s){return a&&n(t.prototype,a),s&&n(t,s),t}}(),o=a(1),p=r(o),c=r(a(262)),l=a(35),i=r(a(1260)),u=r(a(1261));function r(n){return n&&n.__esModule?n:{default:n}}var k=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return a.state={},a}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,p.default.PureComponent),e(t,[{key:"render",value:function(){var n=this.props,t=n.className,a=n.backText,e=n.linkElement,r=void 0===e?"a":e,k=n.type,d=n.title,f=n.desc,m=n.img,g=n.actions,h=n.redirect,y=function(n,t){var a={};for(var s in n)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a}(n,["className","backText","linkElement","type","title","desc","img","actions","redirect"]),v=k in i.default?k:"404",b=(0,c.default)(u.default.exception,t);return p.default.createElement("div",s({className:b},y),p.default.createElement("div",{className:u.default.imgBlock},p.default.createElement("div",{className:u.default.imgEle,style:{backgroundImage:"url("+(m||i.default[v].img)+")"}})),p.default.createElement("div",{className:u.default.content},p.default.createElement("h1",null,d||i.default[v].title),p.default.createElement("div",{className:u.default.desc},f||i.default[v].desc),p.default.createElement("div",{className:u.default.actions},g||(0,o.createElement)(r,{to:h,href:h},p.default.createElement(l.Button,{type:"primary"},a)))))}}]),t}();k.defaultProps={backText:"back to home",redirect:"/"},t.default=k},1260:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"\u62b1\u6b49\uff0c\u4f60\u65e0\u6743\u8bbf\u95ee\u8be5\u9875\u9762"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"\u62b1\u6b49\uff0c\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"\u62b1\u6b49\uff0c\u670d\u52a1\u5668\u51fa\u9519\u4e86"}}},1261:function(n,t){n.exports={exception:"exception___2U_jg",imgBlock:"imgBlock___2wvOJ",imgEle:"imgEle___2qAkT",content:"content___3yHpa",desc:"desc___2TGtg",actions:"actions___23peS"}},1443:function(n,t,a){n.exports={content:{"zh-CN":[["p","403 \u9875\u9762\uff0c\u914d\u5408\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002"]],"en-US":[["p","403 page with custom operations."]]},meta:{order:2,title:{"zh-CN":403,"en-US":403},filename:"scaffold/src/components/Exception/demo/403.md",id:"scaffold-src-components-Exception-demo-403"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Exception <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/Exception\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Detail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Exception</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>403<span class="token punctuation">"</span></span> <span class="token attr-name">actions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>actions<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(1),t=(a(13),function(n){return n&&n.__esModule?n:{default:n}}(a(1177))),s=a(35);var e=n.createElement("div",null,n.createElement(s.Button,{type:"primary"},"Home"),n.createElement(s.Button,null,"Detail"));return n.createElement(t.default,{type:"403",actions:e})}}},1444:function(n,t,a){n.exports={content:{"zh-CN":[["p","404 \u9875\u9762\u3002"]],"en-US":[["p","404 page."]]},meta:{order:0,title:{"zh-CN":404,"en-US":404},filename:"scaffold/src/components/Exception/demo/404.md",id:"scaffold-src-components-Exception-demo-404"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Exception <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/Exception\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Exception</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>404<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(1),t=(a(13),function(n){return n&&n.__esModule?n:{default:n}}(a(1177)));return n.createElement(t.default,{type:"404"})}}},1445:function(n,t,a){n.exports={content:{"zh-CN":[["p","500 \u9875\u9762\u3002"]],"en-US":[["p","500 page."]]},meta:{order:1,title:{"zh-CN":500,"en-US":500},filename:"scaffold/src/components/Exception/demo/500.md",id:"scaffold-src-components-Exception-demo-500"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Exception <span class="token keyword">from</span> <span class="token string">\'ant-design-pro/lib/Exception\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Exception</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(1),t=(a(13),function(n){return n&&n.__esModule?n:{default:n}}(a(1177)));return n.createElement(t.default,{type:"500"})}}}});
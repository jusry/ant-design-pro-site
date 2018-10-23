webpackJsonp([50],{1125:function(n,s){n.exports={content:["article",["p","\u6211\u4eec\u57fa\u4e8e Ant Design \u89c6\u89c9\u98ce\u683c\u642d\u5efa\u4e86 Ant Design Pro\uff0c\u8fd9\u5957\u98ce\u683c\u7ecf\u8fc7\u8bbe\u8ba1\u5e08\u7684\u7cbe\u5fc3\u8c03\u914d\uff0c\u9002\u5408\u5927\u591a\u6570\u4e2d\u540e\u53f0\u9879\u76ee\u3002\u5982\u679c\u5bf9\u89c6\u89c9\u98ce\u683c\u6709\u989d\u5916\u7684\u8981\u6c42\uff0c\u63a8\u8350\u4f7f\u7528\u4ee5\u4e0b\u7684\u65b9\u5f0f\u8fdb\u884c\u5b9a\u5236\u3002"],["h2","\u4e3b\u9898\u5b9a\u5236"],["p","\u6211\u4eec\u57fa\u4e8e Ant Design React \u8fdb\u884c\u5f00\u53d1\uff0c\u5b8c\u5168\u652f\u6301\u5b98\u65b9\u63d0\u4f9b\u7684 less \u53d8\u91cf\u5b9a\u5236\u529f\u80fd. \u4f60\u53ef\u4ee5\u5728\u811a\u624b\u67b6\u76ee\u5f55\u4e2d\u627e\u5230 ",["code","config/config.js"]," \u4ee3\u7801\u7c7b\u4f3c\u8fd9\u6837:"],["pre",{lang:"js",highlighted:'<span class="token operator">...</span>\ntheme<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  <span class="token string">\'font-size-base\'</span><span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'badge-font-size\'</span><span class="token punctuation">:</span> <span class="token string">\'12px\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'btn-font-size-lg\'</span><span class="token punctuation">:</span> <span class="token string">\'@font-size-base\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'menu-dark-bg\'</span><span class="token punctuation">:</span> <span class="token string">\'#00182E\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'menu-dark-submenu-bg\'</span><span class="token punctuation">:</span> <span class="token string">\'#000B14\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'layout-sider-background\'</span><span class="token punctuation">:</span> <span class="token string">\'#00182E\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'layout-body-background\'</span><span class="token punctuation">:</span> <span class="token string">\'#f0f2f5\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>'},["code","...\ntheme: {\n  'font-size-base': '14px',\n  'badge-font-size': '12px',\n  'btn-font-size-lg': '@font-size-base',\n  'menu-dark-bg': '#00182E',\n  'menu-dark-submenu-bg': '#000B14',\n  'layout-sider-background': '#00182E',\n  'layout-body-background': '#f0f2f5',\n};\n..."]],["p","Find the variables that need to be modified in ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"All Variables Table"],", and start ",["code","npm start"]," after modification. , you can see the effect in your app interface."],["p","\u66f4\u591a\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a",["a",{title:null,href:"https://ant.design/docs/react/customize-theme-cn"},"\u5b9a\u5236\u4e3b\u9898"],"\u3002"],["h2","\u6837\u5f0f\u8986\u76d6"],["p","Ant Design \u7684\u901a\u7528\u6837\u5f0f\u53d8\u91cf\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u6240\u6709\u5b9a\u5236\u9700\u6c42\uff0c\u4f60\u9700\u8981\u5168\u5c40\u8986\u76d6\u9ed8\u8ba4\u7684\u7ec4\u4ef6\u6837\u5f0f\u3002\u6211\u4eec\u53ef\u4ee5\u53c2\u7167 ",["a",{title:null,href:"/docs/style"},"\u6837\u5f0f"]," \u7ae0\u8282\u6765\u8986\u76d6\u6837\u5f0f\u3002"],["h3","\u5168\u5c40\u8986\u76d6\u7ec4\u4ef6"],["p","\u6bd4\u5982\u5728 ",["code","src/global.less"]," \u91cc\u4fee\u6539\u6240\u6709\u6807\u7b7e\u7684\u5b57\u4f53\u5927\u5c0f\u3002"],["pre",{lang:"less",highlighted:'<span class="token comment" spellcheck="true">// src/index.less</span>\n<span class="token selector">:global</span> <span class="token punctuation">{</span>\n  <span class="token selector">.ant-tag</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","// src/index.less\n:global {\n  .ant-tag {\n    font-size: 12px;\n  }\n}"]],["h3","\u5355\u72ec\u8986\u76d6\u6307\u5b9a\u7ec4\u4ef6"],["pre",{lang:"less",highlighted:'<span class="token comment" spellcheck="true">// sample.less</span>\n<span class="token selector">.customTag</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">18</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","// sample.less\n.customTag {\n  font-size: 18px;\n}"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./sample.less\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>customTag<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5b9a\u5236\u6807\u7b7e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>'},["code","import styles from './sample.less';\n\n...\n\nreturn <Tag className={styles.customTag}>\u5b9a\u5236\u6807\u7b7e</Tag>;"]],["blockquote",["p","\u6211\u4eec\u4e0d\u63a8\u8350\u8fdb\u884c\u6837\u5f0f\u8986\u76d6\uff0c\u4e00\u662f\u9ed8\u8ba4\u4e3b\u9898\u548c\u7ec4\u4ef6\u662f\u7ecf\u8fc7\u4e86\u8bbe\u8ba1\u5e08\u7cbe\u5fc3\u8c03\u8282\uff0c\u5f3a\u884c\u8986\u76d6\u53ef\u80fd\u4f1a\u5f71\u54cd\u6574\u4f53\u6548\u679c\uff1b\u4e8c\u662f\u8986\u76d6\u4ee3\u7801\u53ef\u80fd\u56e0\u4e3a\u7ec4\u4ef6\u5e93\u7248\u672c\u5347\u7ea7\u800c\u5931\u6548\u3002"]],["h2","\u5728\u7ebf\u5207\u6362\u4e3b\u9898"],["p","pro \u4e2d\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u4ee5\u5728\u7ebf\u5207\u6362\u4e3b\u9898\u548c\u5e03\u5c40\u7684 \u8bbe\u7f6e\u62bd\u5c49\uff0c\u4f7f\u7528\u8fd9\u4e2a\u62bd\u5c49\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u67e5\u770b\u66f4\u6362\u4e3b\u9898\u7684\u6548\u679c\uff0c\u65e0\u9700\u91cd\u542f\u811a\u624b\u67b6\u3002"],["p","\u4e3a\u4e86\u65b9\u4fbf\u9884\u89c8\uff0c\u8bbe\u7f6e\u4e2d\u7684\u914d\u7f6e\u9879\u4f1a\u88ab\u4fdd\u5b58\u5728\u5730\u5740\u680f\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u62f7\u8d1d\u7ed9\u4ed6\u4eba\uff0c\u5206\u4eab\u6548\u679c\u3002"],["blockquote",["p","\u7531\u4e8e react-router \u7684\u7279\u6027\uff0c\u5730\u5740\u680f\u7684\u53c2\u6570\u53ef\u80fd\u88ab\u6e05\u7a7a\u3002"]],["p","\u60a8\u4e00\u65e6\u786e\u5b9a\u4e86\u8fd9\u4e2a\u914d\u7f6e\uff0c\u53ef\u4ee5\u70b9\u51fb \u62f7\u8d1d\u4ee3\u7801 \u6309\u94ae\u5c06\u5176\u62f7\u8d1d\uff0c\u5e76\u5728 ",["code","src/defaultSetting.js"]," \u4e2d\u8986\u76d6\u9ed8\u8ba4\u8bbe\u7f6e\u3002\u8fd9\u6837\u60a8\u53ef\u4ee5\u5c06\u8be5\u4e3b\u9898\u53d1\u5e03\u548c\u90e8\u7f72\u3002"],["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/defaultSettings.js"},["code","src/defaultSetting.js"]]," \u5185\u5bb9\u5982\u4e0b\uff1a"],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  navTheme<span class="token punctuation">:</span> <span class="token string">\'dark\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u83dc\u5355\u7684\u4e3b\u9898</span>\n  primaryColor<span class="token punctuation">:</span> <span class="token string">\'#1890FF\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// Ant Design \u7684\u4e3b\u8272\u8c03</span>\n  layout<span class="token punctuation">:</span> <span class="token string">\'sidemenu\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u83dc\u5355\u7684\u5e03\u5c40\uff0c\u503c\u4e3a sidemenu \u83dc\u5355\u663e\u793a\u5728\u5de6\u4fa7\uff0c\u503c\u4e3a topmenu \u83dc\u5355\u663e\u793a\u5728\u9876\u90e8</span>\n  contentWidth<span class="token punctuation">:</span> <span class="token string">\'Fluid\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u5185\u5bb9\u7684\u5e03\u5c40 Fixed \u4e3a\u5b9a\u5bbd\u52301200px \uff0cFluid \u4e3a\u6d41\u5f0f\u5e03\u5c40\u3002</span>\n  fixedHeader<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u56fa\u5b9a\u9875\u5934</span>\n  autoHideHeader<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u4e0b\u6ed1\u65f6\u81ea\u52a8\u9690\u85cf\u9875\u5934</span>\n  fixSiderbar<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u56fa\u5b9a\u83dc\u5355</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = {\n  navTheme: 'dark', // \u83dc\u5355\u7684\u4e3b\u9898\n  primaryColor: '#1890FF', // Ant Design \u7684\u4e3b\u8272\u8c03\n  layout: 'sidemenu', // \u83dc\u5355\u7684\u5e03\u5c40\uff0c\u503c\u4e3a sidemenu \u83dc\u5355\u663e\u793a\u5728\u5de6\u4fa7\uff0c\u503c\u4e3a topmenu \u83dc\u5355\u663e\u793a\u5728\u9876\u90e8\n  contentWidth: 'Fluid', // \u5185\u5bb9\u7684\u5e03\u5c40 Fixed \u4e3a\u5b9a\u5bbd\u52301200px \uff0cFluid \u4e3a\u6d41\u5f0f\u5e03\u5c40\u3002\n  fixedHeader: false, // \u56fa\u5b9a\u9875\u5934\n  autoHideHeader: false, // \u4e0b\u6ed1\u65f6\u81ea\u52a8\u9690\u85cf\u9875\u5934\n  fixSiderbar: false, // \u56fa\u5b9a\u83dc\u5355\n};"]],["blockquote",["p","\u5728\u7ebf\u4fee\u6539\u989c\u8272\u4f7f\u7528\u7684\u662f less \u5728\u7ebf\u7f16\u8bd1\uff0c\u5efa\u8bae\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/config/config.js"},["code","config/config.js"]],"  \u4e2d\u914d\u7f6e\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002\u5728\u7ebf\u7f16\u8bd1 less \u9700\u8981\u65f6\u95f4\uff0c\u5e76\u4e14\u4f1a\u9020\u6210\u5361\u987f\u3002"]]],meta:{order:14,title:"\u66f4\u6362\u4e3b\u9898",type:"\u8fdb\u9636",filename:"docs/theme.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4e3b\u9898\u5b9a\u5236",title:"\u4e3b\u9898\u5b9a\u5236"},"\u4e3b\u9898\u5b9a\u5236"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6837\u5f0f\u8986\u76d6",title:"\u6837\u5f0f\u8986\u76d6"},"\u6837\u5f0f\u8986\u76d6"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5728\u7ebf\u5207\u6362\u4e3b\u9898",title:"\u5728\u7ebf\u5207\u6362\u4e3b\u9898"},"\u5728\u7ebf\u5207\u6362\u4e3b\u9898"]]]}}});
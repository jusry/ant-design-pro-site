webpackJsonp([82],{1093:function(n,s){n.exports={content:["article",["h2","\u6784\u5efa"],["p","\u5f53\u9879\u76ee\u5f00\u53d1\u5b8c\u6bd5\uff0c\u53ea\u9700\u8981\u8fd0\u884c\u4e00\u884c\u547d\u4ee4\u5c31\u53ef\u4ee5\u6253\u5305\u4f60\u7684\u5e94\u7528\uff1a"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p",["a",{title:null,href:"https://asciinema.org/a/198144"},["img",{title:null,src:"https://asciinema.org/a/198144.png",alt:"asciicast"}]]],["p","\u7531\u4e8e Ant Design Pro \u4f7f\u7528\u7684\u5de5\u5177 ",["a",{title:null,href:"https://umijs.org/"},"Umi"]," \u5df2\u7ecf\u5c06\u590d\u6742\u7684\u6d41\u7a0b\u5c01\u88c5\u5b8c\u6bd5\uff0c\u6784\u5efa\u6253\u5305\u6587\u4ef6\u53ea\u9700\u8981\u4e00\u4e2a\u547d\u4ee4 ",["code","umi build"],"\uff0c\u6784\u5efa\u6253\u5305\u6210\u529f\u4e4b\u540e\uff0c\u4f1a\u5728\u6839\u76ee\u5f55\u751f\u6210 ",["code","dist"]," \u6587\u4ef6\u5939\uff0c\u91cc\u9762\u5c31\u662f\u6784\u5efa\u6253\u5305\u597d\u7684\u6587\u4ef6\uff0c\u901a\u5e38\u662f ",["code","*.js"],"\u3001",["code","*.css"],"\u3001",["code","index.html"]," \u7b49\u9759\u6001\u6587\u4ef6\u3002\u3002"],["p","\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u6784\u5efa\uff0c\u6bd4\u5982\u6307\u5b9a ",["code","dist"]," \u76ee\u5f55\u7b49\uff0c\u53ef\u4ee5\u901a\u8fc7 ",["code","config/config.js"]," \u8fdb\u884c\u914d\u7f6e\uff0c\u8be6\u60c5\u53c2\u770b\uff1a",["a",{title:null,href:"https://umijs.org/guide/config.html"},"Umi \u914d\u7f6e"],"\u3002"],["h3","\u5206\u6790\u6784\u5efa\u6587\u4ef6\u4f53\u79ef"],["p","\u5982\u679c\u4f60\u7684\u6784\u5efa\u6587\u4ef6\u5f88\u5927\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",["code","analyze"]," \u547d\u4ee4\u6784\u5efa\u5e76\u5206\u6790\u4f9d\u8d56\u6a21\u5757\u7684\u4f53\u79ef\u5206\u5e03\uff0c\u4ece\u800c\u4f18\u5316\u4f60\u7684\u4ee3\u7801\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run analyze'},["code","$ npm run analyze"]],["p","\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u81ea\u52a8\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u663e\u793a\u4f53\u79ef\u5206\u5e03\u6570\u636e\u7684\u7f51\u9875\u3002"],["h2","\u53d1\u5e03"],["p","\u5bf9\u4e8e\u53d1\u5e03\u6765\u8bb2\uff0c\u53ea\u9700\u8981\u5c06\u6700\u7ec8\u751f\u6210\u7684\u9759\u6001\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u901a\u5e38\u60c5\u51b5\u4e0b ",["code","dist"]," \u6587\u4ef6\u5939\u7684\u9759\u6001\u6587\u4ef6\u53d1\u5e03\u5230\u4f60\u7684 cdn \u6216\u8005\u9759\u6001\u670d\u52a1\u5668\u5373\u53ef\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u5176\u4e2d\u7684 ",["code","index.html"]," \u901a\u5e38\u4f1a\u662f\u4f60\u540e\u53f0\u670d\u52a1\u7684\u5165\u53e3\u9875\u9762\uff0c\u5728\u786e\u5b9a\u4e86 js \u548c css \u7684\u9759\u6001\u4e4b\u540e\u53ef\u80fd\u9700\u8981\u6539\u53d8\u9875\u9762\u7684\u5f15\u5165\u8def\u5f84\u3002"],["h3","\u524d\u7aef\u8def\u7531\u4e0e\u670d\u52a1\u7aef\u7684\u7ed3\u5408"],["p","Ant Design Pro \u4f7f\u7528\u7684 Umi \u652f\u6301\u4e24\u79cd\u8def\u7531\u65b9\u5f0f\uff1a",["code","browserHistory"]," \u548c ",["code","hashHistory"],"\u3002"],["p","\u53ef\u4ee5\u5728 ",["code","config/config.js"]," \u4e2d\u8fdb\u884c\u914d\u7f6e\u9009\u62e9\u7528\u54ea\u4e2a\u65b9\u5f0f\uff1a"],["pre",{lang:"javascript",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  history<span class="token punctuation">:</span> <span class="token string">\'hash\'</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u9ed8\u8ba4\u662f browser</span>\n<span class="token punctuation">}</span>'},["code","export default {\n  history: 'hash', // \u9ed8\u8ba4\u662f browser\n}"]],["p",["code","hashHistory"]," \u4f7f\u7528\u5982 ",["code","https://cdn.com/#/users/123"]," \u8fd9\u6837\u7684 URL\uff0c\u53d6\u4e95\u53f7\u540e\u9762\u7684\u5b57\u7b26\u4f5c\u4e3a\u8def\u5f84\u3002",["code","browserHistory"]," \u5219\u76f4\u63a5\u4f7f\u7528 ",["code","https://cdn.com/users/123"]," \u8fd9\u6837\u7684 URL\u3002\u4f7f\u7528 ",["code","hashHistory"]," \u65f6\u6d4f\u89c8\u5668\u8bbf\u95ee\u5230\u7684\u59cb\u7ec8\u90fd\u662f\u6839\u76ee\u5f55\u4e0b ",["code","index.html"],"\u3002\u4f7f\u7528 ",["code","browserHistory"]," \u5219\u9700\u8981\u670d\u52a1\u5668\u505a\u597d\u5904\u7406 URL \u7684\u51c6\u5907\uff0c\u5904\u7406\u5e94\u7528\u542f\u52a8\u6700\u521d\u7684 ",["code","/"]," \u8fd9\u6837\u7684\u8bf7\u6c42\u5e94\u8be5\u6ca1\u95ee\u9898\uff0c\u4f46\u5f53\u7528\u6237\u6765\u56de\u8df3\u8f6c\u5e76\u5728 ",["code","/users/123"]," \u5237\u65b0\u65f6\uff0c\u670d\u52a1\u5668\u5c31\u4f1a\u6536\u5230\u6765\u81ea ",["code","/users/123"]," \u7684\u8bf7\u6c42\uff0c\u8fd9\u65f6\u4f60\u9700\u8981\u914d\u7f6e\u670d\u52a1\u5668\u80fd\u5904\u7406\u8fd9\u4e2a URL \u8fd4\u56de\u6b63\u786e\u7684 ",["code","index.html"],"\u3002\u5982\u679c\u4f60\u80fd\u63a7\u5236\u670d\u52a1\u7aef\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",["code","browserHistory"],"\u3002"],["h3","\u4f7f\u7528 nginx"],["p","nginx \u4f5c\u4e3a\u6700\u6d41\u884c\u7684 web \u5bb9\u5668\u4e4b\u4e00\uff0c\u914d\u7f6e\u548c\u4f7f\u7528\u76f8\u5f53\u7b80\u5355\uff0c\u53ea\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u80fd\u62e5\u6709\u9ad8\u6027\u80fd\u548c\u9ad8\u53ef\u7528\u3002\u63a8\u8350\u4f7f\u7528 nginx \u6258\u7ba1\u3002\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\uff1a"],["pre",{lang:null,highlighted:'server {\n    listen <span class="token number">80</span><span class="token comment" spellcheck="true">;</span>\n    # gzip config\n    gzip on<span class="token comment" spellcheck="true">;</span>\n    gzip_min_length 1k<span class="token comment" spellcheck="true">;</span>\n    gzip_comp_level <span class="token number">9</span>\n    gzip_types text<span class="token operator">/</span>plain application<span class="token operator">/</span>javascript application<span class="token operator">/</span>x<span class="token operator">-</span>javascript text<span class="token operator">/</span>css application<span class="token operator">/</span>xml text<span class="token operator">/</span>javascript application<span class="token operator">/</span>x<span class="token operator">-</span>httpd<span class="token operator">-</span>php image<span class="token operator">/</span>jpeg image<span class="token operator">/</span>gif image<span class="token operator">/</span>png<span class="token comment" spellcheck="true">;</span>\n    gzip_vary on<span class="token comment" spellcheck="true">;</span>\n    gzip_disable <span class="token string">"MSIE [1-6]\\."</span><span class="token comment" spellcheck="true">;</span>\n\n    root <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token comment" spellcheck="true">;</span>\n\n    location <span class="token operator">/</span> {\n        # \u7528\u4e8e\u914d\u5408 browserHistory\u4f7f\u7528\n        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span><span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token comment" spellcheck="true">;</span>\n\n        # \u5982\u679c\u6709\u8d44\u6e90\uff0c\u5efa\u8bae\u4f7f\u7528 https <span class="token operator">+</span> http2\uff0c\u914d\u5408\u6309\u9700\u52a0\u8f7d\u53ef\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u4f53\u9a8c \n        # rewrite <span class="token operator">^</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>preview<span class="token punctuation">.</span>pro<span class="token punctuation">.</span>ant<span class="token punctuation">.</span>design<span class="token operator">/</span><span class="token variable">$1</span> permanent<span class="token comment" spellcheck="true">;</span>\n\n    }\n    location <span class="token operator">/</span>api {\n        proxy_pass https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>preview<span class="token punctuation">.</span>pro<span class="token punctuation">.</span>ant<span class="token punctuation">.</span>design<span class="token comment" spellcheck="true">;</span>\n        proxy_set_header   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto <span class="token variable">$scheme</span><span class="token comment" spellcheck="true">;</span>\n        proxy_set_header   Host              <span class="token variable">$http_host</span><span class="token comment" spellcheck="true">;</span>\n        proxy_set_header   X<span class="token operator">-</span>Real<span class="token operator">-</span>IP         <span class="token variable">$remote_addr</span><span class="token comment" spellcheck="true">;</span>\n    }\n}\nserver {\n  # \u5982\u679c\u6709\u8d44\u6e90\uff0c\u5efa\u8bae\u4f7f\u7528 https <span class="token operator">+</span> http2\uff0c\u914d\u5408\u6309\u9700\u52a0\u8f7d\u53ef\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u4f53\u9a8c \n  listen <span class="token number">443</span> ssl http2 default_server<span class="token comment" spellcheck="true">;</span>\n\n  # \b\u8bc1\u4e66\u7684\u516c\u79c1\u94a5\n  ssl_certificate <span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>public<span class="token punctuation">.</span>crt<span class="token comment" spellcheck="true">;</span>\n  ssl_certificate_key <span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>private<span class="token punctuation">.</span>key<span class="token comment" spellcheck="true">;</span>\n\n  location <span class="token operator">/</span> {\n        # \u7528\u4e8e\u914d\u5408 browserHistory\u4f7f\u7528\n        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span><span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token comment" spellcheck="true">;</span>\n\n  }\n  location <span class="token operator">/</span>api {\n      proxy_pass https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>preview<span class="token punctuation">.</span>pro<span class="token punctuation">.</span>ant<span class="token punctuation">.</span>design<span class="token comment" spellcheck="true">;</span>\n      proxy_set_header   X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto <span class="token variable">$scheme</span><span class="token comment" spellcheck="true">;</span>\n      proxy_set_header   Host              <span class="token variable">$http_host</span><span class="token comment" spellcheck="true">;</span>\n      proxy_set_header   X<span class="token operator">-</span>Real<span class="token operator">-</span>IP         <span class="token variable">$remote_addr</span><span class="token comment" spellcheck="true">;</span>\n  }\n}'},["code",'server {\n    listen 80;\n    # gzip config\n    gzip on;\n    gzip_min_length 1k;\n    gzip_comp_level 9\n    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;\n    gzip_vary on;\n    gzip_disable "MSIE [1-6]\\.";\n\n    root /usr/share/nginx/html;\n\n    location / {\n        # \u7528\u4e8e\u914d\u5408 browserHistory\u4f7f\u7528\n        try_files $uri $uri/ /index.html;\n\n        # \u5982\u679c\u6709\u8d44\u6e90\uff0c\u5efa\u8bae\u4f7f\u7528 https + http2\uff0c\u914d\u5408\u6309\u9700\u52a0\u8f7d\u53ef\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u4f53\u9a8c \n        # rewrite ^/(.*)$ https://preview.pro.ant.design/$1 permanent;\n\n    }\n    location /api {\n        proxy_pass https://preview.pro.ant.design;\n        proxy_set_header   X-Forwarded-Proto $scheme;\n        proxy_set_header   Host              $http_host;\n        proxy_set_header   X-Real-IP         $remote_addr;\n    }\n}\nserver {\n  # \u5982\u679c\u6709\u8d44\u6e90\uff0c\u5efa\u8bae\u4f7f\u7528 https + http2\uff0c\u914d\u5408\u6309\u9700\u52a0\u8f7d\u53ef\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u4f53\u9a8c \n  listen 443 ssl http2 default_server;\n\n  # \b\u8bc1\u4e66\u7684\u516c\u79c1\u94a5\n  ssl_certificate /path/to/public.crt;\n  ssl_certificate_key /path/to/private.key;\n\n  location / {\n        # \u7528\u4e8e\u914d\u5408 browserHistory\u4f7f\u7528\n        try_files $uri $uri/ /index.html;\n\n  }\n  location /api {\n      proxy_pass https://preview.pro.ant.design;\n      proxy_set_header   X-Forwarded-Proto $scheme;\n      proxy_set_header   Host              $http_host;\n      proxy_set_header   X-Real-IP         $remote_addr;\n  }\n}']],["h3","\u4f7f\u7528 spring boot"],["p","Spring Boot \u662f\b\u4f7f\u7528\u6700\u591a\u7684 java \u6846\u67b6\uff0c\b\u53ea\u9700\u8981\u7b80\u5355\u7684\u51e0\u6b65\u5c31\u53ef\u4ee5\u4e0e Ant Design Pro \u8fdb\u884c\u6574\u5408\u3002"],["p","\u9996\u5148\u8fd0\u884c build "],["p",["code","$ npm run build"]],["p","\u7136\u540e\u5c06\u7f16\u8bd1\u4e4b\u540e\u7684\u6587\u4ef6\b\u590d\u5236\u5230 \bspring boot \u9879\u76ee\u7684 ",["code","/src/main/resources/static"]," \u76ee\u5f55\u4e0b\u3002"],["p","\b\u91cd\u65b0\u542f\u52a8\u9879\u76ee\uff0c\u8bbf\u95ee ",["code","http://localhost:8080/"]," \u5c31\u53ef\u4ee5\u770b\u5230\u6548\u679c\u3002"],["p","\u4e3a\u4e86\u65b9\u4fbf\u505a\u6574\u5408\uff0c\u6700\u597d\u4f7f\u7528 hash \u8def\u7531\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528 browserHistory \uff0c\u4f60\b\u521b\u5efa\u4e00\u4e2a controller \uff0c\u5e76\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"],["pre",{lang:"java",highlighted:'<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api/**"</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> ApiResult <span class="token function">api</span><span class="token punctuation">(</span>HttpServletRequest request<span class="token punctuation">,</span> HttpServletResponse response<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> apiProxy<span class="token punctuation">.</span><span class="token function">proxy</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> reponse<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"/**"</span><span class="token punctuation">,</span> method<span class="token operator">=</span>HTTPMethod<span class="token punctuation">.</span>GET<span class="token punctuation">)</span>\n<span class="token keyword">public</span> String <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">"index"</span>\n<span class="token punctuation">}</span>'},["code",'@RequestMapping("/api/**")\npublic ApiResult api(HttpServletRequest request, HttpServletResponse response){\n    return apiProxy.proxy(request, reponse);\n}\n\n@RequestMapping(value="/**", method=HTTPMethod.GET)\npublic String index(){\n    return "index"\n}']],["blockquote",["p","\u6ce8\u610f pro \u5e76\u6ca1\u6709\u63d0\u4f9b java \u7684 api \u63a5\u53e3\u5b9e\u73b0\uff0c\b\u5982\u679c\u53ea\u662f\u4e3a\u4e86\u9884\u89c8 demo\uff0c\u53ef\u4ee5\u4f7f\u7528\u53cd\u5411\u4ee3\u7406\u5230 ",["code","https://preview.pro.ant.design"],"\u3002"]],["h3","\u4f7f\u7528 express"],["p",["a",{title:null,href:"http://expressjs.com/"},"express"]," \u7684\u4f8b\u5b50"],["pre",{lang:null,highlighted:'app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/*\'</span><span class="token punctuation">,</span> function <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> {\n  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">,</span> <span class="token string">\'index.html\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","app.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/*', function (req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});"]],["h3","\u4f7f\u7528 egg"],["p",["a",{title:null,href:"https://eggjs.org/"},"egg"]," \u7684\u4f8b\u5b50"],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> controller\nexports<span class="token punctuation">.</span>index <span class="token operator">=</span> function<span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  yield this<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">\'App.jsx\'</span><span class="token punctuation">,</span> {\n    context<span class="token punctuation">:</span> {\n      user<span class="token punctuation">:</span> this<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n    }<span class="token punctuation">,</span>\n  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> router\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'home\'</span><span class="token punctuation">,</span> <span class="token string">\'/*\'</span><span class="token punctuation">,</span> <span class="token string">\'home.index\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","// controller\nexports.index = function* () {\n  yield this.render('App.jsx', {\n    context: {\n      user: this.session.user,\n    },\n  });\n};\n\n// router\napp.get('home', '/*', 'home.index');"]],["p","\u5173\u4e8e\u8def\u7531\u66f4\u591a\u53ef\u4ee5\u53c2\u770b ",["a",{title:null,href:"https://umijs.org/zh/guide/router.html"},"Umi \u7684\u8def\u7531\u6587\u6863"]," \u3002"]],meta:{order:8,title:"\u6784\u5efa\u548c\u53d1\u5e03",type:"\u5165\u95e8",filename:"docs/deploy.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6784\u5efa",title:"\u6784\u5efa"},"\u6784\u5efa"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u53d1\u5e03",title:"\u53d1\u5e03"},"\u53d1\u5e03"]]]}}});
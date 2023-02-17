import{_ as s,c as a,o as n,a as l}from"./app.0139e956.js";const F=JSON.parse('{"title":"flatArrFromData","description":"","frontmatter":{},"headers":[],"relativePath":"w-mini-tools/flatArrFromData.md","lastUpdated":1675231296000}'),o={name:"w-mini-tools/flatArrFromData.md"},t=l(`<h1 id="flatarrfromdata" tabindex="-1">flatArrFromData <a class="header-anchor" href="#flatarrfromdata" aria-hidden="true">#</a></h1><p>返回根据 value 值与递归关键字，扁平化后的数组数据。</p><ul><li>参数: <code>data: Array</code></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> inputData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//源数据</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">flatArrFromData</span><span style="color:#A6ACCD;">(inputData))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//[1, 2]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>目前仅匹配 value 值，需要递归处理的话，子级 key 为 children。</p></div>`,5),p=[t];function e(r,c,i,D,A,y){return n(),a("div",null,p)}const d=s(o,[["render",e]]);export{F as __pageData,d as default};
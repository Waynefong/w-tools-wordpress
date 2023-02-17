import{_ as s,c as a,o as n,a as e}from"./app.0139e956.js";const f=JSON.parse('{"title":"schemaTransfer","description":"","frontmatter":{},"headers":[],"relativePath":"w-schema-form/schemaTransfer.md","lastUpdated":1676537968000}'),o={name:"w-schema-form/schemaTransfer.md"},l=e(`<h1 id="schematransfer" tabindex="-1">schemaTransfer <a class="header-anchor" href="#schematransfer" aria-hidden="true">#</a></h1><p>根据配置的 json 数据，返回具备响应式的源数据。</p><ul><li>参数: <code>schemaConfigs: Object</code></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">schemaTransfer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w-schema-form</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">schemaTransfer</span><span style="color:#A6ACCD;">(configs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>配置的 json 需要符合一定约束条件，详情参考 <a href="./schemaConfig/configs.html">configs</a>。</p></div>`,5),p=[l];function c(r,t,i,m,d,D){return n(),a("div",null,p)}const y=s(o,[["render",c]]);export{f as __pageData,y as default};
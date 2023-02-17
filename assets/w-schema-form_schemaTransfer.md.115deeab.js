import{_ as s,c as a,o as n,a as e}from"./app.513d2a69.js";const y=JSON.parse('{"title":"schemaTransfer","description":"","frontmatter":{},"headers":[],"relativePath":"w-schema-form/schemaTransfer.md"}'),o={name:"w-schema-form/schemaTransfer.md"},l=e(`<h1 id="schematransfer" tabindex="-1">schemaTransfer <a class="header-anchor" href="#schematransfer" aria-hidden="true">#</a></h1><p>根据配置的 json 数据，返回具备响应式的源数据。</p><ul><li>参数: <code>schemaConfigs: Object</code></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">schemaTransfer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w-schema-form</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">schemaTransfer</span><span style="color:#A6ACCD;">(configs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>配置的 json 需要符合一定约束条件，详情参考 <a href="./schemaConfig/configs.html">configs</a>。</p></div>`,5),c=[l];function t(p,r,i,m,D,f){return n(),a("div",null,c)}const _=s(o,[["render",t]]);export{y as __pageData,_ as default};

import{_ as e,o,c as p,a as s,t as a,d as t,e as c}from"./app.f7bc99d6.js";const i={},l={id:"frontmatter-title-for-formats",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),r=t(),k=t(" for formats"),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to xml --pretty</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--pretty {int}</code>: Formats the XML text with the provided indentation setting</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs an XML string representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token string">&quot;note&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;children&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string">&quot;remember&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;attributes&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token string">&quot;children&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>Event<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>, <span class="token string">&quot;attributes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">|</span> to xml
</code></pre></div><p>Optionally, formats the text with a custom indentation setting</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token string">&quot;note&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token string">&quot;children&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string">&quot;remember&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;attributes&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token string">&quot;children&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>Event<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>, <span class="token string">&quot;attributes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">|</span> to xml <span class="token parameter variable">-p</span> <span class="token number">3</span>
</code></pre></div>`,9);function m(n,g){return o(),p("div",null,[s("h1",l,[u,r,s("code",null,a(n.$frontmatter.title),1),k]),s("div",d,a(n.$frontmatter.formats),1),h])}const f=e(i,[["render",m],["__file","to_xml.html.vue"]]);export{f as default};

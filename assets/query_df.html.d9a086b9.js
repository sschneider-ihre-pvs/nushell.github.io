import{_ as t,o,c as r,a,t as e,d as n,e as c}from"./app.f7bc99d6.js";const p={},d={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),l=n(),u=n(" for dataframe"),h={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; query df (sql)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>sql</code>: sql query</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Query dataframe using SQL</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> query <span class="token function">df</span> <span class="token string">&#39;select a from df&#39;</span>
</code></pre></div>`,7);function m(s,_){return o(),r("div",null,[a("h1",d,[i,l,a("code",null,e(s.$frontmatter.title),1),u]),a("div",h,e(s.$frontmatter.dataframe),1),f])}const g=t(p,[["render",m],["__file","query_df.html.vue"]]);export{g as default};

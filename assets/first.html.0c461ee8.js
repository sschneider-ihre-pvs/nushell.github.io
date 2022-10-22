import{_ as o,o as r,c as p,a,t as n,d as e,e as t}from"./app.f7bc99d6.js";const c={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d=e(),u=e(" for dataframe"),h={class:"command-title"},f=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; first (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: starting from the front, the number of rows to return</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the first row of a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> first
</code></pre></div><p>Return the first two rows of a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> first <span class="token number">2</span>
</code></pre></div>`,9),m={id:"frontmatter-title-for-expression",tabindex:"-1"},k=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),b=e(),g=e(" for expression"),_={class:"command-title"},x=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; first </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Creates a first expression from a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> first
</code></pre></div>`,5),v={id:"frontmatter-title-for-filters",tabindex:"-1"},w=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),$=e(),R=e(" for filters"),S={class:"command-title"},E=t(`<h2 id="signature-2" tabindex="-1"><a class="header-anchor" href="#signature-2" aria-hidden="true">#</a> Signature</h2><p><code>&gt; first (rows)</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: starting from the front, the number of rows to return</li></ul><h2 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h2><p>Return the first item of a list/table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> first
</code></pre></div><p>Return the first 2 items of a list/table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> first <span class="token number">2</span>
</code></pre></div><p>Return the first 2 items of a bytes</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>01 <span class="token number">23</span> <span class="token number">45</span><span class="token punctuation">]</span> <span class="token operator">|</span> first <span class="token number">2</span>
</code></pre></div>`,11);function B(s,N){return r(),p("div",null,[a("h1",i,[l,d,a("code",null,n(s.$frontmatter.title),1),u]),a("div",h,n(s.$frontmatter.dataframe),1),f,a("h1",m,[k,b,a("code",null,n(s.$frontmatter.title),1),g]),a("div",_,n(s.$frontmatter.expression),1),x,a("h1",v,[w,$,a("code",null,n(s.$frontmatter.title),1),R]),a("div",S,n(s.$frontmatter.filters),1),E])}const y=o(c,[["render",B],["__file","first.html.vue"]]);export{y as default};

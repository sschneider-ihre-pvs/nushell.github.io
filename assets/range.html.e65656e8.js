import{_ as t,o,c as r,a,t as e,d as n,e as p}from"./app.f7bc99d6.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d=n(),u=n(" for filters"),h={class:"command-title"},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; range (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: range of rows to return: Eg) 4..7 (=&gt; from 4 to 7)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the last 2 items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token number">4</span><span class="token punctuation">..</span><span class="token number">5</span>
</code></pre></div><p>Get the last 2 items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token punctuation">(</span>-2<span class="token punctuation">)</span><span class="token punctuation">..</span>
</code></pre></div><p>Get the next to last 2 items</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0,1</span>,2,3,4,5<span class="token punctuation">]</span> <span class="token operator">|</span> range <span class="token punctuation">(</span>-3<span class="token punctuation">)</span><span class="token punctuation">..</span>-2
</code></pre></div>`,11);function m(s,k){return o(),r("div",null,[a("h1",l,[i,d,a("code",null,e(s.$frontmatter.title),1),u]),a("div",h,e(s.$frontmatter.filters),1),g])}const _=t(c,[["render",m],["__file","range.html.vue"]]);export{_ as default};

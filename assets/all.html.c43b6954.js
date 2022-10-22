import{_ as t,o,c as p,a,t as n,d as e,e as c}from"./app.f7bc99d6.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u=e(),d=e(" for filters"),h={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; all (predicate)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>predicate</code>: the predicate expression that must evaluate to a boolean</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Find if services are running</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>status<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>UP<span class="token punctuation">]</span> <span class="token punctuation">[</span>UP<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> all status <span class="token operator">==</span> UP
</code></pre></div><p>Check that all values are even</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">6</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> all <span class="token punctuation">(</span><span class="token variable">$it</span> mod <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>
</code></pre></div>`,9);function m(s,f){return o(),p("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1),d]),a("div",h,n(s.$frontmatter.filters),1),k])}const b=t(r,[["render",m],["__file","all.html.vue"]]);export{b as default};

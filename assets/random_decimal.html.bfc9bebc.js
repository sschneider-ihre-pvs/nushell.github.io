import{_ as t,o as r,c as o,a,t as n,d as s,e as d}from"./app.38bf2fb9.js";const c={},l={id:"frontmatter-title-for-random",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-random","aria-hidden":"true"},"#",-1),p=s(),m=s(" for random"),h={class:"command-title"},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random decimal (range)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>range</code>: Range of values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate a default decimal value between 0 and 1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal
</code></pre></div><p>Generate a random decimal less than or equal to 500</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token punctuation">..</span><span class="token number">500</span>
</code></pre></div><p>Generate a random decimal greater than or equal to 100000</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token number">100000</span><span class="token punctuation">..</span>
</code></pre></div><p>Generate a random decimal between 1.0 and 1.1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random decimal <span class="token number">1.0</span><span class="token punctuation">..</span><span class="token number">1.1</span>
</code></pre></div>`,13);function g(e,_){return r(),o("div",null,[a("h1",l,[i,p,a("code",null,n(e.$frontmatter.title),1),m]),a("div",h,n(e.$frontmatter.random),1),u])}const b=t(c,[["render",g],["__file","random_decimal.html.vue"]]);export{b as default};
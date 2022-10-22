import{_ as n,o,c as r,a,t as s,d as t,e as p}from"./app.f7bc99d6.js";const c={},d={id:"frontmatter-title-for-math",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),i=t(),h=t(" for math"),m={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math stddev --sample</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--sample</code>: calculate sample standard deviation</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get the stddev of a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math stddev
</code></pre></div><p>Get the sample stddev of a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> math stddev <span class="token parameter variable">-s</span>
</code></pre></div>`,9);function _(e,f){return o(),r("div",null,[a("h1",d,[l,i,a("code",null,s(e.$frontmatter.title),1),h]),a("div",m,s(e.$frontmatter.math),1),u])}const k=n(c,[["render",_],["__file","math_stddev.html.vue"]]);export{k as default};

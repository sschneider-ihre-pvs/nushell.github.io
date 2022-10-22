import{_ as n,o as r,c as o,a,t as s,d as t,e as l}from"./app.f7bc99d6.js";const i={},c={id:"frontmatter-title-for-dataframe-or-lazyframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe-or-lazyframe","aria-hidden":"true"},"#",-1),p=t(),h=t(" for dataframe or lazyframe"),f={class:"command-title"},u=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; shift (period) --fill</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>period</code>: shift period</li><li><code>--fill {any}</code>: Expression used to fill the null values (lazy df)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Shifts the values by a given period</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> <span class="token builtin class-name">shift</span> <span class="token number">2</span> <span class="token operator">|</span> drop-nulls
</code></pre></div>`,7);function m(e,_){return r(),o("div",null,[a("h1",c,[d,p,a("code",null,s(e.$frontmatter.title),1),h]),a("div",f,s(e.$frontmatter.dataframe_or_lazyframe),1),u])}const b=n(i,[["render",m],["__file","shift.html.vue"]]);export{b as default};

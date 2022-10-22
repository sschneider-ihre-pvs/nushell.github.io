import{_ as o,o as p,c,a,t as s,d as t,e}from"./app.f7bc99d6.js";const r={},i={id:"frontmatter-title-for-expression",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),u=t(),d=t(" for expression"),h={class:"command-title"},k=e(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; var </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Var aggregation for a group by</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token operator">|</span> into <span class="token function">df</span>
    <span class="token operator">|</span> group-by a
    <span class="token operator">|</span> agg <span class="token punctuation">(</span>col b <span class="token operator">|</span> var<span class="token punctuation">)</span>
</code></pre></div>`,5),m={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),_=t(),g=t(" for lazyframe"),b={class:"command-title"},x=e(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; var </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Var value from columns in a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> var
</code></pre></div>`,5);function v(n,y){return p(),c("div",null,[a("h1",i,[l,u,a("code",null,s(n.$frontmatter.title),1),d]),a("div",h,s(n.$frontmatter.expression),1),k,a("h1",m,[f,_,a("code",null,s(n.$frontmatter.title),1),g]),a("div",b,s(n.$frontmatter.lazyframe),1),x])}const z=o(r,[["render",v],["__file","var.html.vue"]]);export{z as default};

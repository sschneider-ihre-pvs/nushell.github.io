import{_ as t,o,c as p,a,t as n,d as e,e as r}from"./app.c9e6d97f.js";const c={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d=e(),u=e(" for dataframe"),m={class:"command-title"},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dummies </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create new dataframe with dummy variables from a dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> dummies
</code></pre></div><p>Create new dataframe with dummy variables from a series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> dummies
</code></pre></div>`,7);function f(s,k){return o(),p("div",null,[a("h1",i,[l,d,a("code",null,n(s.$frontmatter.title),1),u]),a("div",m,n(s.$frontmatter.dataframe),1),h])}const b=t(c,[["render",f],["__file","dummies.html.vue"]]);export{b as default};
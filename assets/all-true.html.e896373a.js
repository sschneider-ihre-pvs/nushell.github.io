import{_ as t,o,c as p,a,t as n,d as e,e as r}from"./app.f7bc99d6.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),u=e(),d=e(" for dataframe"),h={class:"command-title"},k=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; all-true </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns true if all values are true</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>true <span class="token boolean">true</span> true<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> all-true
</code></pre></div><p>Checks the result from a comparison</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">2</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$s</span> <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$res</span> <span class="token operator">|</span> all-true
</code></pre></div>`,7);function m(s,f){return o(),p("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1),d]),a("div",h,n(s.$frontmatter.dataframe),1),k])}const b=t(c,[["render",m],["__file","all-true.html.vue"]]);export{b as default};

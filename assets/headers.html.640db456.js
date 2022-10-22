import{_ as n,o,c as r,a as s,t as e,d as t,e as c}from"./app.f7bc99d6.js";const p={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d=t(),h=t(" for filters"),u={class:"command-title"},f=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; headers </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns headers from table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;a b c|1 2 3&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;|&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; &quot;</span> <span class="token operator">|</span> headers
</code></pre></div><p>Don&#39;t panic on rows with different headers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;a b c|1 2 3|1 2 3 4&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;|&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot; &quot;</span> <span class="token operator">|</span> headers
</code></pre></div>`,7);function k(a,_){return o(),r("div",null,[s("h1",l,[i,d,s("code",null,e(a.$frontmatter.title),1),h]),s("div",u,e(a.$frontmatter.filters),1),f])}const m=n(p,[["render",k],["__file","headers.html.vue"]]);export{m as default};

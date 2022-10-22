import{_ as n,o as r,c as o,a as e,t as a,d as s,e as c}from"./app.f7bc99d6.js";const d={},i={id:"frontmatter-title-for-system",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-system","aria-hidden":"true"},"#",-1),p=s(),h=s(" for system"),u={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; run-external (command) ...args --redirect-stdout --redirect-stderr</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>command</code>: external command to run</li><li><code>...args</code>: arguments for external command</li><li><code>--redirect-stdout</code>: redirect stdout to the pipeline</li><li><code>--redirect-stderr</code>: redirect stderr to the pipeline</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Run an external command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> run-external <span class="token string">&quot;echo&quot;</span> <span class="token string">&quot;-n&quot;</span> <span class="token string">&quot;hello&quot;</span>
</code></pre></div><p>Redirect stdout from an external command into the pipeline</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> run-external --redirect-stdout <span class="token string">&quot;echo&quot;</span> <span class="token string">&quot;-n&quot;</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> chars
</code></pre></div>`,9);function g(t,_){return r(),o("div",null,[e("h1",i,[l,p,e("code",null,a(t.$frontmatter.title),1),h]),e("div",u,a(t.$frontmatter.system),1),m])}const x=n(d,[["render",g],["__file","run-external.html.vue"]]);export{x as default};

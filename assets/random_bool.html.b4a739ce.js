import{_ as r,o as s,c as n,a,t,d as o,e as d}from"./app.f7bc99d6.js";const c={},i={id:"frontmatter-title-for-random",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-random","aria-hidden":"true"},"#",-1),h=o(),m=o(" for random"),p={class:"command-title"},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random bool --bias</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--bias {number}</code>: Adjusts the probability of a &quot;true&quot; outcome</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate a random boolean value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random bool
</code></pre></div><p>Generate a random boolean value with a 75% chance of &quot;true&quot;</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random bool <span class="token parameter variable">--bias</span> <span class="token number">0.75</span>
</code></pre></div>`,9);function _(e,b){return s(),n("div",null,[a("h1",i,[l,h,a("code",null,t(e.$frontmatter.title),1),m]),a("div",p,t(e.$frontmatter.random),1),u])}const g=r(c,[["render",_],["__file","random_bool.html.vue"]]);export{g as default};

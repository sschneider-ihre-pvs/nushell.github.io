import{_ as o,o as r,c as n,a,t,d as s,e as c}from"./app.f7bc99d6.js";const d={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),h=s(),p=s(" for formats"),f={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from json --objects</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--objects</code>: treat each line as a separate value</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts json formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1 }&#39;</span> <span class="token operator">|</span> from json
</code></pre></div><p>Converts json formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;{ &quot;a&quot;: 1, &quot;b&quot;: [1, 2] }&#39;</span> <span class="token operator">|</span> from json
</code></pre></div>`,9);function u(e,_){return r(),n("div",null,[a("h1",i,[l,h,a("code",null,t(e.$frontmatter.title),1),p]),a("div",f,t(e.$frontmatter.formats),1),m])}const b=o(d,[["render",u],["__file","from_json.html.vue"]]);export{b as default};

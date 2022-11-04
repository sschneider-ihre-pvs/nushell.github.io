import{_ as r,o as n,c as o,a as e,t as a,d as t,e as i}from"./app.856a9b6a.js";const c={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),p=t(),h=t(" for strings"),u={class:"command-title"},g=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str reverse ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally reverse text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Reverse a single string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell&#39;</span> <span class="token operator">|</span> str reverse
</code></pre></div><p>Reverse multiple strings in a list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;Nushell&#39;</span> <span class="token string">&#39;is&#39;</span> <span class="token string">&#39;cool&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str reverse
</code></pre></div>`,9);function _(s,m){return n(),o("div",null,[e("h1",l,[d,p,e("code",null,a(s.$frontmatter.title),1),h]),e("div",u,a(s.$frontmatter.strings),1),g])}const v=r(c,[["render",_],["__file","str_reverse.html.vue"]]);export{v as default};
import{_ as n,o as r,c as o,a as e,t,d as s,e as i}from"./app.f7bc99d6.js";const c={},d={id:"frontmatter-title-for-core",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),h=s(),p=s(" for core"),m={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export extern (def_name) (params)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>def_name</code>: definition name</li><li><code>params</code>: parameters</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Export the signature for an external command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">export</span> extern <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>text: string<span class="token punctuation">]</span>
</code></pre></div>`,9);function _(a,x){return r(),o("div",null,[e("h1",d,[l,h,e("code",null,t(a.$frontmatter.title),1),p]),e("div",m,t(a.$frontmatter.core),1),u])}const g=n(c,[["render",_],["__file","export_extern.html.vue"]]);export{g as default};

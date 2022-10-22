import{_ as t,o,c as r,a,t as s,d as n,e as p}from"./app.f7bc99d6.js";const i={},c={id:"frontmatter-title-for-conversions",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d=n(),h=n(" for conversions"),u={class:"command-title"},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into binary ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: column paths to convert to binary (for table input)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>convert string to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;This is a string that is exactly 52 characters long.&#39;</span> <span class="token operator">|</span> into binary
</code></pre></div><p>convert a number to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> into binary
</code></pre></div><p>convert a boolean to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token boolean">true</span> <span class="token operator">|</span> into binary
</code></pre></div><p>convert a filesize to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">==</span> LICENSE <span class="token operator">|</span> get size <span class="token operator">|</span> into binary
</code></pre></div><p>convert a filepath to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">==</span> LICENSE <span class="token operator">|</span> get name <span class="token operator">|</span> path <span class="token function">expand</span> <span class="token operator">|</span> into binary
</code></pre></div><p>convert a decimal to a nushell binary primitive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1.234</span> <span class="token operator">|</span> into binary
</code></pre></div>`,17);function b(e,m){return o(),r("div",null,[a("h1",c,[l,d,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.conversions),1),g])}const k=t(i,[["render",b],["__file","into_binary.html.vue"]]);export{k as default};

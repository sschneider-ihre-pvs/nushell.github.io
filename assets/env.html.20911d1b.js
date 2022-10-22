import{_ as t,o,c as r,a as e,t as s,d as n,e as c}from"./app.f7bc99d6.js";const p={},i={id:"frontmatter-title-for-env",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-env","aria-hidden":"true"},"#",-1),d=n(),h=n(" for env"),v={class:"command-title"},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; env </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Display current path environment variable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">env</span> <span class="token operator">|</span> where name <span class="token operator">==</span> <span class="token environment constant">PATH</span>
</code></pre></div><p>Check whether the env variable <code>MY_ENV_ABC</code> exists</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">env</span> <span class="token operator">|</span> any name <span class="token operator">==</span> MY_ENV_ABC
</code></pre></div><p>Another way to check whether the env variable <code>PATH</code> exists</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;PATH&#39;</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>env<span class="token punctuation">)</span>.name
</code></pre></div>`,9);function u(a,g){return o(),r("div",null,[e("h1",i,[l,d,e("code",null,s(a.$frontmatter.title),1),h]),e("div",v,s(a.$frontmatter.env),1),_])}const f=t(p,[["render",u],["__file","env.html.vue"]]);export{f as default};

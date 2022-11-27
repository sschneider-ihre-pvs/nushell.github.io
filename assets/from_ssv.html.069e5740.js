import{_ as r,o as n,c as o,a as e,t as s,d as t,e as i}from"./app.61ce1ff2.js";const c={},d={id:"frontmatter-title-for-formats",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),m=t(),h=t(" for formats"),p={class:"command-title"},f=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ssv --noheaders --aligned-columns --minimum-spaces</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--noheaders</code>: don&#39;t treat the first row as column names</li><li><code>--aligned-columns</code>: assume columns are aligned</li><li><code>--minimum-spaces {int}</code>: the minimum spaces to separate columns</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ssv formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FOO   BAR
1   2&#39;</span> <span class="token operator">|</span> from ssv
</code></pre></div><p>Converts ssv formatted string to table but not treating the first row as column names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;FOO   BAR
1   2&#39;</span> <span class="token operator">|</span> from ssv <span class="token parameter variable">-n</span>
</code></pre></div>`,9);function u(a,_){return n(),o("div",null,[e("h1",d,[l,m,e("code",null,s(a.$frontmatter.title),1),h]),e("div",p,s(a.$frontmatter.formats),1),f])}const v=r(c,[["render",u],["__file","from_ssv.html.vue"]]);export{v as default};
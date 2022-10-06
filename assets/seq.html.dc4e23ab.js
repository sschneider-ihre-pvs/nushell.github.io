import{_ as t,o as r,c as o,a,t as s,d as n,e as p}from"./app.c9e6d97f.js";const c={},l={id:"frontmatter-title-for-generators",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-generators","aria-hidden":"true"},"#",-1),d=n(),h=n(" for generators"),u={class:"command-title"},g=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq ...rest --separator --terminator --widths</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: sequence values</li><li><code>--separator {string}</code>: separator character (defaults to \\n)</li><li><code>--terminator {string}</code>: terminator character (defaults to \\n)</li><li><code>--widths</code>: equalize widths of all numbers by padding with zeros</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sequence 1 to 10 with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token number">1</span> <span class="token number">10</span>
</code></pre></div><p>sequence 1.0 to 2.0 by 0.1s with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token number">1.0</span> <span class="token number">0.1</span> <span class="token number">2.0</span>
</code></pre></div><p>sequence 1 to 10 with pipe separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;|&#39;</span> <span class="token number">1</span> <span class="token number">10</span>
</code></pre></div><p>sequence 1 to 10 with pipe separator padded with 0</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;|&#39;</span> <span class="token parameter variable">-w</span> <span class="token number">1</span> <span class="token number">10</span>
</code></pre></div><p>sequence 1 to 10 with pipe separator padded by 2s</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> <span class="token parameter variable">-s</span> <span class="token string">&#39; | &#39;</span> <span class="token parameter variable">-w</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">10</span>
</code></pre></div>`,15);function m(e,b){return r(),o("div",null,[a("h1",l,[i,d,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.generators),1),g])}const f=t(c,[["render",m],["__file","seq.html.vue"]]);export{f as default};
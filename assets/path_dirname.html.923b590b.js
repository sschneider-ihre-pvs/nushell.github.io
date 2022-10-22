import{_ as t,o,c as p,a,t as s,d as n,e as r}from"./app.f7bc99d6.js";const c={},l={id:"frontmatter-title-for-default",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),d=n(),h=n(" for default"),u={class:"command-title"},m=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path dirname --columns --replace --num-levels</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li><li><code>--replace {string}</code>: Return original path with dirname replaced by this string</li><li><code>--num-levels {int}</code>: Number of directories to walk up</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get dirname of a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;C:\\Users\\joe\\code\\test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">dirname</span>
</code></pre></div><p>Get dirname of a path in a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span> <span class="token operator">|</span> path <span class="token function">expand</span><span class="token punctuation">)</span> <span class="token operator">|</span> path <span class="token function">dirname</span> <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div><p>Walk up two levels</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;C:\\Users\\joe\\code\\test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">dirname</span> <span class="token parameter variable">-n</span> <span class="token number">2</span>
</code></pre></div><p>Replace the part that would be returned with a custom path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;C:\\Users\\joe\\code\\test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">dirname</span> <span class="token parameter variable">-n</span> <span class="token number">2</span> <span class="token parameter variable">-r</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>viking
</code></pre></div>`,13);function k(e,g){return o(),p("div",null,[a("h1",l,[i,d,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.default),1),m])}const _=t(c,[["render",k],["__file","path_dirname.html.vue"]]);export{_ as default};

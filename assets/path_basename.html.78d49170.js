import{_ as t,o as p,c as o,a,t as e,d as n,e as c}from"./app.f7bc99d6.js";const r={},l={id:"frontmatter-title-for-default",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),u=n(),d=n(" for default"),h={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path basename --columns --replace</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--columns {table}</code>: Optionally operate by column path</li><li><code>--replace {string}</code>: Return original path with basename replaced by this string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get basename of a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;C:\\Users\\joe\\test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">basename</span>
</code></pre></div><p>Get basename of a path in a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token punctuation">..</span> <span class="token operator">|</span> path <span class="token function">basename</span> <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div><p>Get basename of a path in a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token punctuation">[</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Joe<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> path <span class="token function">basename</span> <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div><p>Replace basename of a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;C:\\Users\\joe\\test.txt&#39;</span> <span class="token operator">|</span> path <span class="token function">basename</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;spam.png&#39;</span>
</code></pre></div>`,13);function k(s,g){return p(),o("div",null,[a("h1",l,[i,u,a("code",null,e(s.$frontmatter.title),1),d]),a("div",h,e(s.$frontmatter.default),1),m])}const b=t(r,[["render",k],["__file","path_basename.html.vue"]]);export{b as default};

import{_ as t,o,c as p,a,t as s,d as n,e as r}from"./app.f7bc99d6.js";const l={},c={id:"frontmatter-title-for-default",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),i=n(),h=n(" for default"),u={class:"command-title"},f=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path expand --strict --no-symlink --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--strict</code>: Throw an error if the path could not be expanded</li><li><code>--no-symlink</code>: Do not resolve symbolic links</li><li><code>--columns {table}</code>: Optionally operate by column path</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Expand an absolute path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;C:\\Users\\joe\\foo\\..\\bar&#39;</span> <span class="token operator">|</span> path <span class="token function">expand</span>
</code></pre></div><p>Expand a path in a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path <span class="token function">expand</span> <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div><p>Expand a relative path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;foo\\..\\bar&#39;</span> <span class="token operator">|</span> path <span class="token function">expand</span>
</code></pre></div><p>Expand an absolute path without following symlink</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;foo\\..\\bar&#39;</span> <span class="token operator">|</span> path <span class="token function">expand</span> <span class="token parameter variable">-n</span>
</code></pre></div>`,13);function g(e,m){return o(),p("div",null,[a("h1",c,[d,i,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.default),1),f])}const x=t(l,[["render",g],["__file","path_expand.html.vue"]]);export{x as default};

import{_ as a,o as e,c as s,e as n}from"./app.47c01eab.js";const t={},l=n(`<p>gets the scheme (eg http, file) of a url</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> url scheme <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: optionally operate by path</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get scheme of a url</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;http://www.example.com&#39;</span> <span class="token operator">|</span> url scheme
</code></pre></div><p>You get an empty string if there is no scheme</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;test&#39;</span> <span class="token operator">|</span> url scheme
</code></pre></div>`,12),r=[l];function c(p,o){return e(),s("div",null,r)}var i=a(t,[["render",c],["__file","url-scheme.html.vue"]]);export{i as default};
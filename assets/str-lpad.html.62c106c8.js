import{_ as a,o as s,c as e,e as n}from"./app.6df41ae8.js";const t={},p=n(`<p>pad a string with a character a certain length</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str lpad <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li>...args: optionally check if string contains pattern by column paths</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-l, --length <code>&lt;integer&gt;</code> (required parameter): length to pad to</li><li>-c, --character <code>&lt;string&gt;</code> (required parameter): character to pad with</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Left pad a string with a character a number of places</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;nushell&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">10</span> -c <span class="token string">&#39;*&#39;</span>
</code></pre></div><p>Left pad a string with a character a number of places</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;123&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">10</span> -c <span class="token string">&#39;0&#39;</span>
</code></pre></div><p>Use lpad to truncate a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;123456789&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">3</span> -c <span class="token string">&#39;0&#39;</span>
</code></pre></div><p>Use lpad to pad Unicode</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;\u2589&#39;</span> <span class="token operator">|</span> str lpad -l <span class="token number">10</span> -c <span class="token string">&#39;\u2589&#39;</span>
</code></pre></div>`,16),r=[p];function l(c,o){return s(),e("div",null,r)}var d=a(t,[["render",l],["__file","str-lpad.html.vue"]]);export{d as default};
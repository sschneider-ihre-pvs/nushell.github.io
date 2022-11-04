import{_ as t,o,c as p,a,t as s,d as e,e as c}from"./app.856a9b6a.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u=e(),d=e(" for filters"),h={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; uniq --count --repeated --ignore-case --unique</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--count</code>: Return a table containing the distinct input values together with their counts</li><li><code>--repeated</code>: Return the input values that occur more than once</li><li><code>--ignore-case</code>: Ignore differences in case when comparing input values</li><li><code>--unique</code>: Return the input values that occur once only</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the distinct values of a list/table (remove duplicates so that each value occurs once only)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span>
</code></pre></div><p>Return the input values that occur more than once</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-d</span>
</code></pre></div><p>Return the input values that occur once only</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-u</span>
</code></pre></div><p>Ignore differences in case when comparing input values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span> <span class="token string">&#39;goodbye&#39;</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-i</span>
</code></pre></div><p>Return a table containing the distinct input values together with their counts</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
</code></pre></div>`,15);function g(n,m){return o(),p("div",null,[a("h1",l,[i,u,a("code",null,s(n.$frontmatter.title),1),d]),a("div",h,s(n.$frontmatter.filters),1),k])}const f=t(r,[["render",g],["__file","uniq.html.vue"]]);export{f as default};
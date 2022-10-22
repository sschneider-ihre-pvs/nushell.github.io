import{_ as e,o,c as p,a,t,d as n,e as i}from"./app.f7bc99d6.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d=n(),u=n(" for filters"),h={class:"command-title"},f=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split list (separator)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>separator</code>: the value that denotes what separates the list</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Split a list of chars into two lists</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>a, b, c, d, e, f, g<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">split</span> list d
</code></pre></div><p>Split a list of lists into two lists of lists</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1,2</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token number">2,3</span><span class="token punctuation">]</span>, <span class="token punctuation">[</span><span class="token number">3,4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">split</span> list <span class="token punctuation">[</span><span class="token number">2,3</span><span class="token punctuation">]</span>
</code></pre></div>`,9);function k(s,_){return o(),p("div",null,[a("h1",l,[r,d,a("code",null,t(s.$frontmatter.title),1),u]),a("div",h,t(s.$frontmatter.filters),1),f])}const g=e(c,[["render",k],["__file","split_list.html.vue"]]);export{g as default};

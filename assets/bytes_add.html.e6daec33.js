import{_ as t,o,c as p,a,t as e,d as n,e as c}from"./app.f7bc99d6.js";const d={},r={id:"frontmatter-title-for-bytes",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-bytes","aria-hidden":"true"},"#",-1),i=n(),u=n(" for bytes"),h={class:"command-title"},A=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes add (data) ...rest --index --end</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>data</code>: the binary to add</li><li><code>...rest</code>: optionally matches prefix of text by column paths</li><li><code>--index {int}</code>: index to insert binary data</li><li><code>--end</code>: add to the end of binary</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Add bytes <code>0x[AA]</code> to <code>0x[1F FF AA AA]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes <span class="token function">add</span> 0x<span class="token punctuation">[</span>AA<span class="token punctuation">]</span>
</code></pre></div><p>Add bytes <code>0x[AA BB]</code> to <code>0x[1F FF AA AA]</code> at index 1</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes <span class="token function">add</span> 0x<span class="token punctuation">[</span>AA BB<span class="token punctuation">]</span> <span class="token parameter variable">-i</span> <span class="token number">1</span>
</code></pre></div><p>Add bytes <code>0x[11]</code> to <code>0x[FF AA AA]</code> at the end</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes <span class="token function">add</span> 0x<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span> <span class="token parameter variable">-e</span>
</code></pre></div><p>Add bytes <code>0x[11 22 33]</code> to <code>0x[FF AA AA]</code> at the end, at index 1(the index is start from end)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>FF AA BB<span class="token punctuation">]</span> <span class="token operator">|</span> bytes <span class="token function">add</span> 0x<span class="token punctuation">[</span><span class="token number">11</span> <span class="token number">22</span> <span class="token number">33</span><span class="token punctuation">]</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">-i</span> <span class="token number">1</span>
</code></pre></div>`,13);function b(s,k){return o(),p("div",null,[a("h1",r,[l,i,a("code",null,e(s.$frontmatter.title),1),u]),a("div",h,e(s.$frontmatter.bytes),1),A])}const m=t(d,[["render",b],["__file","bytes_add.html.vue"]]);export{m as default};

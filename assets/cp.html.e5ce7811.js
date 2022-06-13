import{_ as s,u as r,o,c,a as e,t,d as n,e as i}from"./app.6df41ae8.js";const d={computed:{frontmatter(){return r().value}}},p={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=n(),u={style:{"white-space":"pre-wrap"}},_=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; cp (source) (destination) --recursive --verbose --interactive</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>source</code>: the place to copy from</li><li><code>destination</code>: the place to copy to</li><li><code>--recursive</code>: copy recursively through subdirectories</li><li><code>--verbose</code>: do copy in verbose mode (default:false)</li><li><code>--interactive</code>: ask user to confirm action</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Copy myfile to dir_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> myfile dir_b
</code></pre></div><p>Recursively copy dir_a to dir_b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> -r dir_a dir_b
</code></pre></div><p>Recursively copy dir_a to dir_b, and print the feedbacks</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> -r -v dir_a dir_b
</code></pre></div><p>Move many files into a directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> *.txt dir_a
</code></pre></div>`,13);function f(g,m,v,b,x,a){return o(),c("div",null,[e("h1",p,[l,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),_])}var k=s(d,[["render",f],["__file","cp.html.vue"]]);export{k as default};
import{_ as s,u as r,o as n,c as o,a as e,t,d as c,e as i}from"./app.46eb55cb.js";const l={computed:{frontmatter(){return r().value}}},d={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},_=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str-slice (start) --length</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>start</code>: start of slice</li><li><code>--length {int}</code>: optional length</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates slices from the strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>abcded abc321 abc123<span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> str-slice <span class="token number">1</span> -l <span class="token number">2</span>
</code></pre></div>`,7);function m(f,g,x,b,k,a){return n(),o("div",null,[e("h1",d,[p,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),_])}var S=s(l,[["render",m],["__file","_str-slice.html.vue"]]);export{S as default};
import{_ as r,o as n,c as o,a as e,t,d as s,e as c}from"./app.f7bc99d6.js";const i={},d={id:"frontmatter-title-for-generators",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-generators","aria-hidden":"true"},"#",-1),h=s(),p=s(" for generators"),u={class:"command-title"},_=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; seq char ...rest --separator --terminator</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: sequence chars</li><li><code>--separator {string}</code>: separator character (defaults to \\n)</li><li><code>--terminator {string}</code>: terminator character (defaults to \\n)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sequence a to e with newline separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char a e
</code></pre></div><p>sequence a to e with pipe separator separator</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">seq</span> char <span class="token parameter variable">-s</span> <span class="token string">&#39;|&#39;</span> a e
</code></pre></div>`,9);function f(a,g){return n(),o("div",null,[e("h1",d,[l,h,e("code",null,t(a.$frontmatter.title),1),p]),e("div",u,t(a.$frontmatter.generators),1),_])}const x=r(i,[["render",f],["__file","seq_char.html.vue"]]);export{x as default};

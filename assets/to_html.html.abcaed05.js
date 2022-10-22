import{_ as e,o,c as p,a,t,d as n,e as c}from"./app.f7bc99d6.js";const l={},r={id:"frontmatter-title-for-formats",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),u=n(),d=n(" for formats"),h={class:"command-title"},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to html --html-color --no-color --dark --partial --theme --list</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--html-color</code>: change ansi colors to html colors</li><li><code>--no-color</code>: remove all ansi colors in output</li><li><code>--dark</code>: indicate your background color is a darker color</li><li><code>--partial</code>: only output the html for the content itself</li><li><code>--theme {string}</code>: the name of the theme to use (github, blulocolight, ...)</li><li><code>--list</code>: list the names of all available themes</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs an HTML string representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to html
</code></pre></div><p>Optionally, only output the html for the content itself</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to html <span class="token parameter variable">--partial</span>
</code></pre></div><p>Optionally, output the string with a dark background</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to html <span class="token parameter variable">--dark</span>
</code></pre></div>`,11);function k(s,f){return o(),p("div",null,[a("h1",r,[i,u,a("code",null,t(s.$frontmatter.title),1),d]),a("div",h,t(s.$frontmatter.formats),1),m])}const b=e(l,[["render",k],["__file","to_html.html.vue"]]);export{b as default};

import{_ as o,o as r,c,a,t,d as s,e as n}from"./app.f7bc99d6.js";const i={},d={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),l=s(),h=s(" for lazyframe"),u={class:"command-title"},m=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fetch (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: number of rows to be fetched from lazyframe</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Fetch a rows from the dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> fetch <span class="token number">2</span>
</code></pre></div>`,7),f={id:"frontmatter-title-for-network",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#frontmatter-title-for-network","aria-hidden":"true"},"#",-1),k=s(),b=s(" for network"),_={class:"command-title"},x=n(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fetch (URL) --user --password --timeout --headers --raw --output --bin --append</code></p><h2 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h2><ul><li><code>URL</code>: the URL to fetch the contents from</li><li><code>--user {any}</code>: the username when authenticating</li><li><code>--password {any}</code>: the password when authenticating</li><li><code>--timeout {int}</code>: timeout period in seconds</li><li><code>--headers {any}</code>: custom headers you want to add</li><li><code>--raw</code>: fetch contents as text rather than a table</li><li><code>--output {path}</code>: save contents into a file</li><li><code>--bin</code>: if saving into a file, save as raw binary</li><li><code>--append</code>: if saving into a file, append to end of file</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>Performs HTTP GET operation.
</code></pre></div><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Fetch content from url.com</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch url.com
</code></pre></div><p>Fetch content from url.com, with username and password</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch <span class="token parameter variable">-u</span> myuser <span class="token parameter variable">-p</span> mypass url.com
</code></pre></div><p>Fetch content from url.com, with custom header</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch <span class="token parameter variable">-H</span> <span class="token punctuation">[</span>my-header-key my-header-value<span class="token punctuation">]</span> url.com
</code></pre></div>`,13);function v(e,w){return r(),c("div",null,[a("h1",d,[p,l,a("code",null,t(e.$frontmatter.title),1),h]),a("div",u,t(e.$frontmatter.lazyframe),1),m,a("h1",f,[g,k,a("code",null,t(e.$frontmatter.title),1),b]),a("div",_,t(e.$frontmatter.network),1),x])}const z=o(i,[["render",v],["__file","fetch.html.vue"]]);export{z as default};

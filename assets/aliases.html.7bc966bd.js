import{_ as t,r as s,o,c as i,a as l,b as n,w as r,e as d,d as e}from"./app.f7bc99d6.js";const c={},p=d(`<h1 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases" aria-hidden="true">#</a> Aliases</h1><p>Aliases in Nushell offer a way of doing a simple, textual replacement. This allows you to create a shorthand name for a longer command, including its default arguments.</p><p>For example, let&#39;s create an alias called <code>ll</code> which will expand to <code>ls -l</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; alias ll = ls -l
</code></pre></div><p>We can now call this alias:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ll
</code></pre></div><p>Once we do, it&#39;s as if we typed <code>ls -l</code>. This also allows us to pass in flags or positional parameters. For example, we can now also write:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ll -a
</code></pre></div><p>And get the equivalent to having typed <code>ls -l -a</code>.</p><h2 id="how-to-write-an-alias-with-pipes" tabindex="-1"><a class="header-anchor" href="#how-to-write-an-alias-with-pipes" aria-hidden="true">#</a> How to write an alias with Pipes</h2><p>If you want to add a pipe to your alias you must enclose it with parentheses which are a pair of round brackets ( ) used to mark off your set of commands with pipes.</p><div class="language-text ext-text"><pre class="language-text"><code>alias lsname = (ls | get name)
</code></pre></div><p>Here is an alias with more than one pipe:</p><div class="language-text ext-text"><pre class="language-text"><code>alias lt = (ls | sort-by modified -r | sort-by type)
</code></pre></div><h2 id="persisting" tabindex="-1"><a class="header-anchor" href="#persisting" aria-hidden="true">#</a> Persisting</h2><p>To make your alias persistent it must be added to your <em>config.nu</em> file.</p>`,16),h=e("For more details about how to persist aliases so that they're visible when you start up Nushell, see the "),u=e("configuration chapter"),g=e(".");function x(m,w){const a=s("RouterLink");return o(),i("div",null,[p,l("p",null,[h,n(a,{to:"/book/configuration.html"},{default:r(()=>[u]),_:1}),g])])}const _=t(c,[["render",x],["__file","aliases.html.vue"]]);export{_ as default};

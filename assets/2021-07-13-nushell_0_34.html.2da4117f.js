import{_ as r,r as a,o as l,c as i,f as h,a as t,b as n,d as e,e as s}from"./app.f7bc99d6.js";const d={},c=t("h1",{id:"nushell-0-34",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-34","aria-hidden":"true"},"#"),e(" Nushell 0.34")],-1),u=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=t("p",null,"Today, we're releasing 0.34 of Nu. This release is the first to support dataframes and also includes a set of usability improvements.",-1),p=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),m=e("Nu 0.34 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.34.0",target:"_blank",rel:"noopener noreferrer"},g=e("pre-built binaries"),b=e(" or from "),w={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},x=e("crates.io"),v=e(". If you have Rust installed you can install it using "),k=t("code",null,"cargo install nu",-1),y=e("."),A=s(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>If you&#39;d like to try the experimental paging feature in this release, you can install with <code>cargo install nu --features=table-pager</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="dataframes-elferherrera" tabindex="-1"><a class="header-anchor" href="#dataframes-elferherrera" aria-hidden="true">#</a> Dataframes (elferherrera)</h2><p>With 0.34, we&#39;ve introduced a new family of commands to work with dataframes. Dataframes are an efficient way of working with large datasets by storing data as columns and offering a set of operations over them.</p><p>To create a dataframe, you can use the <code>dataframe open</code> command and pass it a source file to load. This command currently supports CSV and parquet files.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let df = (dataframe open .\\Data7602DescendingYearOrder.csv)
</code></pre></div><p>Once loaded, there are a variety of commands you can use to interact with the dataframe (you can get the full list with <code>dataframe --help</code>). For example, to see the first few rows of the dataframe we just loaded, we can use <code>dataframe first</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $df | dataframe first

\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 anzsic06 \u2502  Area   \u2502 year \u2502 geo_count \u2502 ec_count
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 A        \u2502 A100100 \u2502 2000 \u2502        96 \u2502      130
 1 \u2502 A        \u2502 A100200 \u2502 2000 \u2502       198 \u2502      110
 2 \u2502 A        \u2502 A100300 \u2502 2000 \u2502        42 \u2502       25
 3 \u2502 A        \u2502 A100400 \u2502 2000 \u2502        66 \u2502       40
 4 \u2502 A        \u2502 A100500 \u2502 2000 \u2502        63 \u2502       40
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Where dataframes really shine is their performance.</p><p>For example, the above dataset is 5 columns and ~5.5 million rows of data. We&#39;re able to process group it by the year column, sum the results, and display it to the user in 557ms:</p><div class="language-text ext-text"><pre class="language-text"><code># process.nu
let df = (dataframe open Data7602DescendingYearOrder.csv)
let res = ($df | dataframe group-by year | dataframe aggregate sum | dataframe select geo_count)
$res
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; benchmark {source process.nu}

\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502     real time
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 557ms 658us 500ns
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>By comparison, here&#39;s the same example in pandas:</p><div class="language-text ext-text"><pre class="language-text"><code>import pandas as pd

df = pd.read_csv(&quot;Data7602DescendingYearOrder.csv&quot;)
res = df.groupby(&quot;year&quot;)[&quot;geo_count&quot;].sum()
print(res)
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; benchmark {python .\\load.py}

\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502       real time
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 1sec 966ms 954us 800ns
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><blockquote><p>System Details: The benchmarks presented in this section were run using a machine with a processor Intel(R) Core(TM) i7-10710U (CPU @1.10GHz 1.61 GHz) and 16 gb of RAM.</p></blockquote><p>While these results are still early, we&#39;re excited to see what can be possible using Nushell for processing large datasets.</p>`,19),N=e("You can learn more about dataframes, including many examples and a much more in-depth explanation, by reading the new "),j={href:"https://www.nushell.sh/book/dataframes.html",target:"_blank",rel:"noopener noreferrer"},T=e("dataframes chapter of the Nushell book"),q=e("."),D=s(`<p>Note: while all the dataframe functionality is currently grouped behind the <code>dataframe</code> top-level command, we hope to extend support for dataframes to other common Nushell commands.</p><h2 id="improved-multiline-support-jt" tabindex="-1"><a class="header-anchor" href="#improved-multiline-support-jt" aria-hidden="true">#</a> Improved multiline support (jt)</h2><p>We&#39;ve extended multiline expression support to more areas. Now, you can span tables over multiple lines more naturally:</p><div class="language-text ext-text"><pre class="language-text"><code>[
  [name, value];
  [foo, 2]
  [bar, 7]
]
</code></pre></div><p>Subexpression now also span multiple lines. Everything inside of the parentheses are treated as if they were written together:</p><div class="language-text ext-text"><pre class="language-text"><code>(echo foo
| str length)
</code></pre></div><p>This also gives you a way to split up commands that have many arguments over multiple lines:</p><div class="language-text ext-text"><pre class="language-text"><code>(echo foo
bar)
</code></pre></div><h2 id="multiple-shorthand-environment-vars-jt" tabindex="-1"><a class="header-anchor" href="#multiple-shorthand-environment-vars-jt" aria-hidden="true">#</a> Multiple shorthand environment vars (jt)</h2><p>A long-time shortcoming is now fixed in 0.34. You can now pass multiple environment shorthands to the same command:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; FOO=bar BAR=baz $nu.env.FOO + $nu.env.BAR
barbaz
</code></pre></div><h2 id="variable-completions-andrasio" tabindex="-1"><a class="header-anchor" href="#variable-completions-andrasio" aria-hidden="true">#</a> Variable completions (andrasio)</h2><p>In addition to steadily improving the completion engine, we&#39;ve started adding support for completions for built-in variables.</p><p>You can now write <code>$nu.&lt;TAB&gt;</code> to complete into the built-in <code>$nu</code> variable, including completions for <code>$nu.env.S&lt;TAB&gt;</code> for completing into environment variables.</p><p>Other variables that are in scope can also have their names completed.</p><h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2>`,16),I=e("Added the "),R={href:"https://github.com/nushell/nushell/pull/3670",target:"_blank",rel:"noopener noreferrer"},W=t("code",null,"pathvar",-1),$=e(" command for updating the PATH"),O=e(" (nathom)"),B=e("Added a "),U={href:"https://github.com/nushell/nushell/pull/3694",target:"_blank",rel:"noopener noreferrer"},z=t("code",null,"paste",-1),E=e(" command for pasting from clipboard"),F=e(" (1ntEgr8)"),S=e("Added "),V={href:"https://github.com/nushell/nushell/pull/3720",target:"_blank",rel:"noopener noreferrer"},Y=t("code",null,"$nu.lang",-1),C=e(" to reflect on the current commands"),M=e(" (fdncred)"),L=t("h2",{id:"additional-improvements",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#additional-improvements","aria-hidden":"true"},"#"),e(" Additional improvements")],-1),P=e("Updated "),H={href:"https://github.com/nushell/nushell/pull/3758",target:"_blank",rel:"noopener noreferrer"},G=t("code",null,"into binary",-1),J=e(" to be more composable"),K=e(" (fdncred)"),Q=e("Added "),X={href:"https://github.com/nushell/nushell/pull/3754",target:"_blank",rel:"noopener noreferrer"},Z=e("unique option to "),ee=t("code",null,"uniq",-1),te=e(" (mcbattirola)"),oe=e("Removed an "),ne={href:"https://github.com/nushell/nushell/pull/3751",target:"_blank",rel:"noopener noreferrer"},se=e("outdated README note"),re=e(" (yaymukund)"),ae=e("Added more "),le={href:"https://github.com/nushell/nushell/pull/3750",target:"_blank",rel:"noopener noreferrer"},ie=e("comparsion coercions with "),he=t("code",null,"$nothing",-1),de=e(" (jt)"),ce=e("Updated the "),ue={href:"https://github.com/nushell/nushell/pull/3749",target:"_blank",rel:"noopener noreferrer"},_e=t("code",null,"version",-1),pe=e(" command to output more info"),me=e(" (fdncred)"),fe=e("Fixed a "),ge={href:"https://github.com/nushell/nushell/pull/3745",target:"_blank",rel:"noopener noreferrer"},be=e("broken unit test"),we=e(" (fdncred)"),xe=e("Downgraded "),ve={href:"https://github.com/nushell/nushell/pull/3740",target:"_blank",rel:"noopener noreferrer"},ke=e("crossterm to fix pager compilation"),ye=e(" (kubouch)"),Ae=e("Removed "),Ne={href:"https://github.com/nushell/nushell/pull/3732",target:"_blank",rel:"noopener noreferrer"},je=e("unused crate features"),Te=e(" (waywardmonkeys)"),qe=e("Updated a few "),De={href:"https://github.com/nushell/nushell/pull/3723",target:"_blank",rel:"noopener noreferrer"},Ie=e("dependencies"),Re=e(" and "),We={href:"https://github.com/nushell/nushell/pull/3724",target:"_blank",rel:"noopener noreferrer"},$e=e("here"),Oe=e(" and "),Be={href:"https://github.com/nushell/nushell/pull/3739",target:"_blank",rel:"noopener noreferrer"},Ue=e("here"),ze=e(" and "),Ee={href:"https://github.com/nushell/nushell/pull/3741",target:"_blank",rel:"noopener noreferrer"},Fe=e("here"),Se=e(" and "),Ve={href:"https://github.com/nushell/nushell/pull/3757",target:"_blank",rel:"noopener noreferrer"},Ye=e("here"),Ce=e(" (therealprof, waywardmonkeys)"),Me=e("Added "),Le={href:"https://github.com/nushell/nushell/pull/3722",target:"_blank",rel:"noopener noreferrer"},Pe=e("dataframe take command"),He=e(" (elferherrera)"),Ge=e("Added "),Je={href:"https://github.com/nushell/nushell/pull/3717",target:"_blank",rel:"noopener noreferrer"},Ke=e("script to submit winget package during release"),Qe=e(" (TechWatching)"),Xe=e("Aligned "),Ze={href:"https://github.com/nushell/nushell/pull/3713",target:"_blank",rel:"noopener noreferrer"},et=e("dataframe params to match other Nushell commands"),tt=e(" (elferherrera)"),ot=e("Added the "),nt={href:"https://github.com/nushell/nushell/pull/3712",target:"_blank",rel:"noopener noreferrer"},st=e("ansi osc string terminator"),rt=e(" (fdncred)"),at=e("Removed "),lt={href:"https://github.com/nushell/nushell/pull/3709",target:"_blank",rel:"noopener noreferrer"},it=e("unused dependencies"),ht=e(" and "),dt={href:"https://github.com/nushell/nushell/pull/3716",target:"_blank",rel:"noopener noreferrer"},ct=e("also"),ut=e(" (waywardmonkeys, andrasio)"),_t=e("Added "),pt={href:"https://github.com/nushell/nushell/pull/3702",target:"_blank",rel:"noopener noreferrer"},mt=e("casting operations for Series data"),ft=e(" (elferherrera)"),gt=e("Fixed a "),bt={href:"https://github.com/nushell/nushell/pull/3697",target:"_blank",rel:"noopener noreferrer"},wt=e("dataframe series bug with f64"),xt=e(" (elferherrera)"),vt=e("Added "),kt={href:"https://github.com/nushell/nushell/pull/3696",target:"_blank",rel:"noopener noreferrer"},yt=e("all-trim option to "),At=t("code",null,"str trim",-1),Nt=e(" (palashahuja)"),jt=e("Ported more commands to engine-p "),Tt={href:"https://github.com/nushell/nushell/pull/3690",target:"_blank",rel:"noopener noreferrer"},qt=e("1"),Dt=e(" and "),It={href:"https://github.com/nushell/nushell/pull/3753",target:"_blank",rel:"noopener noreferrer"},Rt=e("2"),Wt=e(" (efx)"),$t=e("Added support for "),Ot={href:"https://github.com/nushell/nushell/pull/3688",target:"_blank",rel:"noopener noreferrer"},Bt=e("arbitrarily nested subcommands"),Ut=e(" (jt)"),zt=e("Added support for "),Et={href:"https://github.com/nushell/nushell/pull/3686",target:"_blank",rel:"noopener noreferrer"},Ft=e("string interpolation when calling externals"),St=e(" (voanhduy1512)"),Vt=e("Made "),Yt={href:"https://github.com/nushell/nushell/pull/3684",target:"_blank",rel:"noopener noreferrer"},Ct=e("URL docs more consistent"),Mt=e(" (efx)"),Lt=e("Speed up "),Pt={href:"https://github.com/nushell/nushell/pull/3683",target:"_blank",rel:"noopener noreferrer"},Ht=e("dataframe loading"),Gt=e(" (elferherrera)"),Jt=e("Improved "),Kt={href:"https://github.com/nushell/nushell/pull/3681",target:"_blank",rel:"noopener noreferrer"},Qt=e("parse errors for "),Xt=t("code",null,"def",-1),Zt=e(" (jt)"),eo=e("Updated textview to "),to={href:"https://github.com/nushell/nushell/pull/3680",target:"_blank",rel:"noopener noreferrer"},oo=e("always read its input from the stream"),no=e(" (jt)"),so=e("Dataframe aggregation uses "),ro={href:"https://github.com/nushell/nushell/pull/3678",target:"_blank",rel:"noopener noreferrer"},ao=e("simpler column names"),lo=e(" (elferherrera)"),io=e("Add support for more "),ho={href:"https://github.com/nushell/nushell/pull/3675",target:"_blank",rel:"noopener noreferrer"},co=e("filesize to filesize math"),uo=e(" (fdncred)"),_o=e("Updated the Nu API surface to "),po={href:"https://github.com/nushell/nushell/pull/3673",target:"_blank",rel:"noopener noreferrer"},mo=e("expose more useful functionality"),fo=e(" (stormasm)"),go=e("Fixed a "),bo={href:"https://github.com/nushell/nushell/pull/3669",target:"_blank",rel:"noopener noreferrer"},wo=e("panic during math with large durations"),xo=e(" (luccasmmg)"),vo=t("h1",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),ko=e("Work on "),yo={href:"https://github.com/jntrnr/reedline",target:"_blank",rel:"noopener noreferrer"},Ao=e("reedline"),No=e(" has steadily grown in the background, and is now nearing the time where we will explore integrating it into Nushell as Nushell's line editor."),jo=e("We're also working on a number of "),To={href:"https://github.com/jntrnr/engine-q",target:"_blank",rel:"noopener noreferrer"},qo=e("parser and engine improvements"),Do=e(" which we hope will make their way into future version of Nushell."),Io=t("p",null,"Dataframe support continues to grow, and we're continuing to collaborate with projects that this builds on to ensure we are using the best techniques possible. There's a lot of potential here not only in terms of using dataframes, but where the Apache Arrow support might allow us to grow additional functionality in the future.",-1);function Ro(Wo,$o){const o=a("ExternalLinkIcon");return l(),i("div",null,[c,u,_,h(" more "),p,t("p",null,[m,t("a",f,[g,n(o)]),b,t("a",w,[x,n(o)]),v,k,y]),A,t("p",null,[N,t("a",j,[T,n(o)]),q]),D,t("ul",null,[t("li",null,[I,t("a",R,[W,$,n(o)]),O]),t("li",null,[B,t("a",U,[z,E,n(o)]),F]),t("li",null,[S,t("a",V,[Y,C,n(o)]),M])]),L,t("ul",null,[t("li",null,[P,t("a",H,[G,J,n(o)]),K]),t("li",null,[Q,t("a",X,[Z,ee,n(o)]),te]),t("li",null,[oe,t("a",ne,[se,n(o)]),re]),t("li",null,[ae,t("a",le,[ie,he,n(o)]),de]),t("li",null,[ce,t("a",ue,[_e,pe,n(o)]),me]),t("li",null,[fe,t("a",ge,[be,n(o)]),we]),t("li",null,[xe,t("a",ve,[ke,n(o)]),ye]),t("li",null,[Ae,t("a",Ne,[je,n(o)]),Te]),t("li",null,[qe,t("a",De,[Ie,n(o)]),Re,t("a",We,[$e,n(o)]),Oe,t("a",Be,[Ue,n(o)]),ze,t("a",Ee,[Fe,n(o)]),Se,t("a",Ve,[Ye,n(o)]),Ce]),t("li",null,[Me,t("a",Le,[Pe,n(o)]),He]),t("li",null,[Ge,t("a",Je,[Ke,n(o)]),Qe]),t("li",null,[Xe,t("a",Ze,[et,n(o)]),tt]),t("li",null,[ot,t("a",nt,[st,n(o)]),rt]),t("li",null,[at,t("a",lt,[it,n(o)]),ht,t("a",dt,[ct,n(o)]),ut]),t("li",null,[_t,t("a",pt,[mt,n(o)]),ft]),t("li",null,[gt,t("a",bt,[wt,n(o)]),xt]),t("li",null,[vt,t("a",kt,[yt,At,n(o)]),Nt]),t("li",null,[jt,t("a",Tt,[qt,n(o)]),Dt,t("a",It,[Rt,n(o)]),Wt]),t("li",null,[$t,t("a",Ot,[Bt,n(o)]),Ut]),t("li",null,[zt,t("a",Et,[Ft,n(o)]),St]),t("li",null,[Vt,t("a",Yt,[Ct,n(o)]),Mt]),t("li",null,[Lt,t("a",Pt,[Ht,n(o)]),Gt]),t("li",null,[Jt,t("a",Kt,[Qt,Xt,n(o)]),Zt]),t("li",null,[eo,t("a",to,[oo,n(o)]),no]),t("li",null,[so,t("a",ro,[ao,n(o)]),lo]),t("li",null,[io,t("a",ho,[co,n(o)]),uo]),t("li",null,[_o,t("a",po,[mo,n(o)]),fo]),t("li",null,[go,t("a",bo,[wo,n(o)]),xo])]),vo,t("p",null,[ko,t("a",yo,[Ao,n(o)]),No]),t("p",null,[jo,t("a",To,[qo,n(o)]),Do]),Io])}const Bo=r(d,[["render",Ro],["__file","2021-07-13-nushell_0_34.html.vue"]]);export{Bo as default};

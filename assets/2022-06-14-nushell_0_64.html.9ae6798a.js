import{_ as r,r as l,o as h,c as i,f as a,a as t,b as n,d as e,e as s}from"./app.f7bc99d6.js";const _={},d=t("h1",{id:"nushell-0-64",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-64","aria-hidden":"true"},"#"),e(" Nushell 0.64")],-1),c=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=t("p",null,"Today, we're releasing version 0.64 of Nu. It's the first to include input overloading, input/output types, and lazy dataframes.",-1),p=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),f=e("Nu 0.64 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.64.0",target:"_blank",rel:"noopener noreferrer"},b=e("pre-built binaries"),m=e(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},y=e("crates.io"),w=e(". If you have Rust installed you can install it using "),x=t("code",null,"cargo install nu",-1),v=e("."),A=t("p",null,[e("If you want all the built-in goodies, you can install "),t("code",null,"cargo install nu --features=extra"),e(".")],-1),N=t("p",null,[e("As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use "),t("code",null,"cargo install nu_plugin_<plugin name>"),e(".")],-1),I=t("h1",{id:"themes-of-this-release",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#themes-of-this-release","aria-hidden":"true"},"#"),e(" Themes of this release")],-1),S=t("h2",{id:"input-overloading-elferherrera",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#input-overloading-elferherrera","aria-hidden":"true"},"#"),e(" Input overloading (elferherrera)")],-1),F=e("Commands can now declare their "),U={href:"https://github.com/nushell/nushell/pull/5750",target:"_blank",rel:"noopener noreferrer"},T=e("input and output types"),z=e(". While this support is still initial and isn't yet available in the syntax, we're already using it for one important improvement: simplifying the commands."),q=s(`<p>In this release, dataframe commands can now detect the input type in the pipeline and run without needing to be called with <code>dfr</code> before every command. The end result is much cleaner:</p><p>Before:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [[a b]; [1 2] [3 4]] | dfr to-df | dfr drop a
</code></pre></div><p>After:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [[a b]; [1 2] [3 4]] | to-df | drop a
</code></pre></div><p>This allows dataframe commands to feel more natural and fit more cleanly in with other commands. We&#39;re also looking to make similar improvements to the <code>db</code> command. In the future, you&#39;ll be able to open a data source and then use the standard nushell commands against it, and Nushell will select the best fit based on the type of data source you&#39;re opening.</p><h2 id="lazy-dataframes-elferherrera" tabindex="-1"><a class="header-anchor" href="#lazy-dataframes-elferherrera" aria-hidden="true">#</a> Lazy dataframes (elferherrera)</h2>`,7),C=e("Dataframes now have "),D={href:"https://github.com/nushell/nushell/pull/5687",target:"_blank",rel:"noopener noreferrer"},W=e("lazy operations"),L=e(". These lazy operations allow users to build up multiple steps of a pipeline and execute them in a much more efficient way against the dataframe."),j=s(`<h2 id="future-sqlite-backed-history-phiresky" tabindex="-1"><a class="header-anchor" href="#future-sqlite-backed-history-phiresky" aria-hidden="true">#</a> Future SQLite backed history (phiresky)</h2><p>The API for storing history entries has changed in the background. This now supports also storing your history in a SQLite database. Currently this adds some metadata such as the current working directory, whether a command succeeded, and execution times. In the future this will enable you to query the history in a more rich and meaningful way.</p><p>Currently the simple text based history is still the default. If you want to test out the new history change your config to contain:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env config = {
  ...
  history_file_format: &quot;sqlite&quot; # &quot;sqlite&quot; or &quot;plaintext&quot;
  ...
}
</code></pre></div><h1 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements" aria-hidden="true">#</a> Improvements</h1>`,5),E=e("Using Nu as a login shell now has a "),M={href:"https://github.com/nushell/nushell/pull/5714",target:"_blank",rel:"noopener noreferrer"},R=e("special config file"),P=e(". (sec65)"),B=e("Unix-based Nushell can now "),V={href:"https://github.com/nushell/nushell/pull/5744",target:"_blank",rel:"noopener noreferrer"},Q=e("handle SIGQUIT"),G=e(" (WindSoilder)"),Y=e("This release also includes binaries for "),H={href:"https://github.com/nushell/nushell/releases/tag/0.64.0",target:"_blank",rel:"noopener noreferrer"},O=e("more platforms"),J=e(" (hustcer)"),K=t("p",null,"You can see the full list in the Changelog below.",-1),X=t("h1",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),$=t("p",null,"The new input/output types and type overloading allows for a simpler, more uniform Nushell language. We're looking forward to continuing to improve this as well as improving the Nushell language around it.",-1),Z=e("We've also recent shown an experimental "),ee={href:"https://www.youtube.com/watch?v=B2aLON88New",target:"_blank",rel:"noopener noreferrer"},te=e("graphical version of Nushell"),oe=e(". This experiment is something you can use today across the platforms that Nushell supports."),ne=t("h1",{id:"changelog",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#"),e(" Changelog")],-1),se=t("h2",{id:"nushell",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell","aria-hidden":"true"},"#"),e(" Nushell")],-1),re=e("WindSoilder created "),le={href:"https://github.com/nushell/nushell/pull/5782",target:"_blank",rel:"noopener noreferrer"},he=e("add --values flag to sort record by values, by default, sort record by keys"),ie=e(", and "),ae={href:"https://github.com/nushell/nushell/pull/5778",target:"_blank",rel:"noopener noreferrer"},_e=e("sort not change shape"),de=e(", and "),ce={href:"https://github.com/nushell/nushell/pull/5775",target:"_blank",rel:"noopener noreferrer"},ue=e("path join support multi path"),pe=e(", and "),fe={href:"https://github.com/nushell/nushell/pull/5754",target:"_blank",rel:"noopener noreferrer"},ge=e("fix arg parse"),be=e(", and "),me={href:"https://github.com/nushell/nushell/pull/5751",target:"_blank",rel:"noopener noreferrer"},ke=e("While starting nu, force PWD to be current working directory"),ye=e(", and "),we={href:"https://github.com/nushell/nushell/pull/5744",target:"_blank",rel:"noopener noreferrer"},xe=e("handle SIGQUIT"),ve=e(", and "),Ae={href:"https://github.com/nushell/nushell/pull/5736",target:"_blank",rel:"noopener noreferrer"},Ne=e("add as record tag to transfer result to record"),Ie=e(", and "),Se={href:"https://github.com/nushell/nushell/pull/5731",target:"_blank",rel:"noopener noreferrer"},Fe=e("print warning message if meet non utf-8 path"),Ue=e(", and "),Te={href:"https://github.com/nushell/nushell/pull/5695",target:"_blank",rel:"noopener noreferrer"},ze=e("fix argument type"),qe=e(", and "),Ce={href:"https://github.com/nushell/nushell/pull/5692",target:"_blank",rel:"noopener noreferrer"},De=e("expand env for path"),We=e(", and "),Le={href:"https://github.com/nushell/nushell/pull/5691",target:"_blank",rel:"noopener noreferrer"},je=e("make ls works better with glob"),Ee=e(", and "),Me={href:"https://github.com/nushell/nushell/pull/5680",target:"_blank",rel:"noopener noreferrer"},Re=e("base64 command more friendly"),Pe=e(", and "),Be={href:"https://github.com/nushell/nushell/pull/5645",target:"_blank",rel:"noopener noreferrer"},Ve=e("make cp can copy folders contains dangling symbolic link"),Qe=e(", and "),Ge={href:"https://github.com/nushell/nushell/pull/5633",target:"_blank",rel:"noopener noreferrer"},Ye=e("make sure no duplicate column exists during eval and merge"),He=e("sholderbach created "),Oe={href:"https://github.com/nushell/nushell/pull/5781",target:"_blank",rel:"noopener noreferrer"},Je=e("Pin reedline v0.7.0 for the nushell v0.64.0 release"),Ke=e(", and "),Xe={href:"https://github.com/nushell/nushell/pull/5709",target:"_blank",rel:"noopener noreferrer"},$e=e("Address lints from clippy for beta/nightly"),Ze=e(", and "),et={href:"https://github.com/nushell/nushell/pull/5708",target:"_blank",rel:"noopener noreferrer"},tt=e("Use search terms in the help menu search"),ot=e(", and "),nt={href:"https://github.com/nushell/nushell/pull/5706",target:"_blank",rel:"noopener noreferrer"},st=e("Update nu-ansi-term to remove "),rt=t("code",null,"Deref",-1),lt=e(" impl"),ht=e(", and "),it={href:"https://github.com/nushell/nushell/pull/5704",target:"_blank",rel:"noopener noreferrer"},at=e("Improve internal documentation of "),_t=t("code",null,"save",-1),dt=e(" command"),ct=e(", and "),ut={href:"https://github.com/nushell/nushell/pull/5678",target:"_blank",rel:"noopener noreferrer"},pt=e("Update reedline"),ft=e(", and "),gt={href:"https://github.com/nushell/nushell/pull/5677",target:"_blank",rel:"noopener noreferrer"},bt=e("Clarify error message for "),mt=t("code",null,"let",-1),kt=e(" in pipeline"),yt=e(", and "),wt={href:"https://github.com/nushell/nushell/pull/5654",target:"_blank",rel:"noopener noreferrer"},xt=e("Update reedline: Support more bindings in vi mode"),vt=e(", and "),At={href:"https://github.com/nushell/nushell/pull/5650",target:"_blank",rel:"noopener noreferrer"},Nt=e("Improve test coverage of command examples"),It=e(", and "),St={href:"https://github.com/nushell/nushell/pull/5644",target:"_blank",rel:"noopener noreferrer"},Ft=e("Add search terms for "),Ut=t("code",null,"describe",-1),Tt=e(", and "),zt={href:"https://github.com/nushell/nushell/pull/5634",target:"_blank",rel:"noopener noreferrer"},qt=e("Unpin reedline for regular development"),Ct=e("elferherrera created "),Dt={href:"https://github.com/nushell/nushell/pull/5779",target:"_blank",rel:"noopener noreferrer"},Wt=e("bool type for binary operations"),Lt=e(", and "),jt={href:"https://github.com/nushell/nushell/pull/5771",target:"_blank",rel:"noopener noreferrer"},Et=e("each while command"),Mt=e(", and "),Rt={href:"https://github.com/nushell/nushell/pull/5770",target:"_blank",rel:"noopener noreferrer"},Pt=e("filesize conversion"),Bt=e(", and "),Vt={href:"https://github.com/nushell/nushell/pull/5769",target:"_blank",rel:"noopener noreferrer"},Qt=e("expression to literal"),Gt=e(", and "),Yt={href:"https://github.com/nushell/nushell/pull/5760",target:"_blank",rel:"noopener noreferrer"},Ht=e("Remove dfr from dataframe commands"),Ot=e(", and "),Jt={href:"https://github.com/nushell/nushell/pull/5750",target:"_blank",rel:"noopener noreferrer"},Kt=e("input and output types"),Xt=e(", and "),$t={href:"https://github.com/nushell/nushell/pull/5687",target:"_blank",rel:"noopener noreferrer"},Zt=e("Lazy dataframes"),eo=e("jt "),to={href:"https://github.com/nushell/nushell/pull/5777",target:"_blank",rel:"noopener noreferrer"},oo=e("bumped to 0.64"),no=e(", and "),so={href:"https://github.com/nushell/nushell/pull/5768",target:"_blank",rel:"noopener noreferrer"},ro=e("Force floats to output a decimal in nuon"),lo=e(", and "),ho={href:"https://github.com/nushell/nushell/pull/5635",target:"_blank",rel:"noopener noreferrer"},io=e("bump to dev version"),ao=e("merelymyself created "),_o={href:"https://github.com/nushell/nushell/pull/5774",target:"_blank",rel:"noopener noreferrer"},co=e("Add option to sort-by naturally"),uo=e(", and "),po={href:"https://github.com/nushell/nushell/pull/5759",target:"_blank",rel:"noopener noreferrer"},fo=e("Attempts to add "),go=t("code",null,"//",-1),bo=e(" math operator"),mo=e(", and "),ko={href:"https://github.com/nushell/nushell/pull/5737",target:"_blank",rel:"noopener noreferrer"},yo=e("add search terms to alias"),wo=e(", and "),xo={href:"https://github.com/nushell/nushell/pull/5730",target:"_blank",rel:"noopener noreferrer"},vo=e("Improves help str substring"),Ao=e(", and "),No={href:"https://github.com/nushell/nushell/pull/5712",target:"_blank",rel:"noopener noreferrer"},Io=e("Attempts to add a command that checks if nushell is running with admin priveleges"),So=e(", and "),Fo={href:"https://github.com/nushell/nushell/pull/5710",target:"_blank",rel:"noopener noreferrer"},Uo=e("Make "),To=t("code",null,"range",-1),zo=e(" require its positional argument"),qo=e(", and "),Co={href:"https://github.com/nushell/nushell/pull/5693",target:"_blank",rel:"noopener noreferrer"},Do=e("Small typo fix in "),Wo=t("code",null,"signature.rs",-1),Lo=e(", and "),jo={href:"https://github.com/nushell/nushell/pull/5676",target:"_blank",rel:"noopener noreferrer"},Eo=e("prevent panic with "),Mo=t("code",null,"let",-1),Ro=e(" alone in pipeline"),Po=e(", and "),Bo={href:"https://github.com/nushell/nushell/pull/5673",target:"_blank",rel:"noopener noreferrer"},Vo=e("Add '-o'/"),Qo=t("code",null,"--output",-1),Go=e(" flag to "),Yo=t("code",null,"fetch",-1),Ho=e(" to download to file"),Oo=e(", and "),Jo={href:"https://github.com/nushell/nushell/pull/5657",target:"_blank",rel:"noopener noreferrer"},Ko=e("Add search terms to error make"),Xo=e(", and "),$o={href:"https://github.com/nushell/nushell/pull/5632",target:"_blank",rel:"noopener noreferrer"},Zo=e("Makes a more helpful error for "),en=t("code",null,"let",-1),tn=e(" in pipeline"),on=e("Kangaxx-0 created "),nn={href:"https://github.com/nushell/nushell/pull/5773",target:"_blank",rel:"noopener noreferrer"},sn=e("Add NU config to allow user be able to turn off external completion"),rn=e(", and "),ln={href:"https://github.com/nushell/nushell/pull/5749",target:"_blank",rel:"noopener noreferrer"},hn=e("Support completion for alias and sub-command"),an=e(", and "),_n={href:"https://github.com/nushell/nushell/pull/5642",target:"_blank",rel:"noopener noreferrer"},dn=e("Fix cp bug"),cn=e("fdncred created "),un={href:"https://github.com/nushell/nushell/pull/5765",target:"_blank",rel:"noopener noreferrer"},pn=e("more verbose error handling"),fn=e(", and "),gn={href:"https://github.com/nushell/nushell/pull/5733",target:"_blank",rel:"noopener noreferrer"},bn=e("make "),mn=t("code",null,"to text",-1),kn=e(" work more intuitively"),yn=e(", and "),wn={href:"https://github.com/nushell/nushell/pull/5646",target:"_blank",rel:"noopener noreferrer"},xn=e("add case_sensitive_completions config option"),vn=e("hustcer created "),An={href:"https://github.com/nushell/nushell/pull/5763",target:"_blank",rel:"noopener noreferrer"},Nn=e("Add setup-nu link in README.md"),In=e(", and "),Sn={href:"https://github.com/nushell/nushell/pull/5725",target:"_blank",rel:"noopener noreferrer"},Fn=e("fix: normalize some parameter names"),Un=e(", and "),Tn={href:"https://github.com/nushell/nushell/pull/5696",target:"_blank",rel:"noopener noreferrer"},zn=e("Fix doc building for vuepress-next, avoid using angle brackets"),qn=e(", and "),Cn={href:"https://github.com/nushell/nushell/pull/5685",target:"_blank",rel:"noopener noreferrer"},Dn=e("feat: Add sensitive flag to get, fix #4295"),Wn=e(", and "),Ln={href:"https://github.com/nushell/nushell/pull/5671",target:"_blank",rel:"noopener noreferrer"},jn=e("feat: Add search terms to find, where, exit, which and fetch, update #5093"),En=e(", and "),Mn={href:"https://github.com/nushell/nushell/pull/5649",target:"_blank",rel:"noopener noreferrer"},Rn=e("Refactor and optimize the github release workflow: deliver binary package for more targets"),Pn=e("Mathspy created "),Bn={href:"https://github.com/nushell/nushell/pull/5761",target:"_blank",rel:"noopener noreferrer"},Vn=e("Should we keep old semantics of "),Qn=t("code",null,"uniq",-1),Gn=e(" command?"),Yn=e("rgwood created "),Hn={href:"https://github.com/nushell/nushell/pull/5747",target:"_blank",rel:"noopener noreferrer"},On=e("Temporarily disable rust-cache in tests"),Jn=e(", and "),Kn={href:"https://github.com/nushell/nushell/pull/5718",target:"_blank",rel:"noopener noreferrer"},Xn=e("Clean up README"),$n=e(", and "),Zn={href:"https://github.com/nushell/nushell/pull/5717",target:"_blank",rel:"noopener noreferrer"},es=e("Statically link the CRT on Windows"),ts=e(", and "),os={href:"https://github.com/nushell/nushell/pull/5703",target:"_blank",rel:"noopener noreferrer"},ns=e("Fix "),ss=t("code",null,"ls",-1),rs=e(" for Windows system files"),ls=e(", and "),hs={href:"https://github.com/nushell/nushell/pull/5651",target:"_blank",rel:"noopener noreferrer"},is=e("Don't build OpenSSL on Windows"),as=e("kubouch created "),_s={href:"https://github.com/nushell/nushell/pull/5739",target:"_blank",rel:"noopener noreferrer"},ds=e("Add "),cs=t("code",null,"$nu.scope.engine_state",-1),us=e(", and "),ps={href:"https://github.com/nushell/nushell/pull/5698",target:"_blank",rel:"noopener noreferrer"},fs=e("Fix wrong "),gs=t("code",null,"path",-1),bs=e(" help message"),ms=e(", and "),ks={href:"https://github.com/nushell/nushell/pull/5648",target:"_blank",rel:"noopener noreferrer"},ys=e("Shorten the links of parser keywords help msgs"),ws=e(", and "),xs={href:"https://github.com/nushell/nushell/pull/5647",target:"_blank",rel:"noopener noreferrer"},vs=e("Add 'overlay new' command"),As=e("jaeheonji created "),Ns={href:"https://github.com/nushell/nushell/pull/5723",target:"_blank",rel:"noopener noreferrer"},Is=e("feat: add search terms to category of strings"),Ss=e("phiresky created "),Fs={href:"https://github.com/nushell/nushell/pull/5721",target:"_blank",rel:"noopener noreferrer"},Us=e("SQLite History MVP with timestamp, duration, working directory, exit status metadata"),Ts=e("herlon214 created "),zs={href:"https://github.com/nushell/nushell/pull/5715",target:"_blank",rel:"noopener noreferrer"},qs=e("nu-engine: better display for shape when showing help params"),Cs=e(", and "),Ds={href:"https://github.com/nushell/nushell/pull/5653",target:"_blank",rel:"noopener noreferrer"},Ws=e("nu-cli/completions: add filtering tests for variables completions"),Ls=e(", and "),js={href:"https://github.com/nushell/nushell/pull/5641",target:"_blank",rel:"noopener noreferrer"},Es=e("nu-cli/completions: fix filter for variable completions"),Ms=e("sec65 created "),Rs={href:"https://github.com/nushell/nushell/pull/5714",target:"_blank",rel:"noopener noreferrer"},Ps=e("Added loginshell config file #4620"),Bs=e("VergeDX created "),Vs={href:"https://github.com/nushell/nushell/pull/5705",target:"_blank",rel:"noopener noreferrer"},Qs=e("fix[table]: Panic when passthru small number of "),Gs=t("code",null,"table -w",-1),Ys=e("."),Hs=e(", and "),Os={href:"https://github.com/nushell/nushell/pull/5643",target:"_blank",rel:"noopener noreferrer"},Js=e("feat[table]: Allow specific table width with "),Ks=t("code",null,"-w",-1),Xs=e(", like command "),$s=t("code",null,"grid",-1),Zs=e("."),er=e("PerBothner created "),tr={href:"https://github.com/nushell/nushell/pull/5701",target:"_blank",rel:"noopener noreferrer"},or=e("Minor fixes to shell integation in repl."),nr=e(", and "),sr={href:"https://github.com/nushell/nushell/pull/5699",target:"_blank",rel:"noopener noreferrer"},rr=e("Improve table output of 'to html',"),lr=e("Yethal created "),hr={href:"https://github.com/nushell/nushell/pull/5700",target:"_blank",rel:"noopener noreferrer"},ir=e("Add completions for nu"),ar=e("mjclements created "),_r={href:"https://github.com/nushell/nushell/pull/5667",target:"_blank",rel:"noopener noreferrer"},dr=e("Differentiate internal signature from external signature w.r.t. help"),cr=e("EjPlatzer created "),ur={href:"https://github.com/nushell/nushell/pull/5665",target:"_blank",rel:"noopener noreferrer"},pr=e("Add search terms for "),fr=t("code",null,"all?",-1),gr=e(", "),br=t("code",null,"any?",-1),mr=e(", "),kr=t("code",null,"length",-1),yr=e(", and "),wr=t("code",null,"keybindings",-1),xr=e("tenshik created "),vr={href:"https://github.com/nushell/nushell/pull/5652",target:"_blank",rel:"noopener noreferrer"},Ar=e("feat: add search terms to random & typo fix"),Nr=e("onthebridgetonowhere created "),Ir={href:"https://github.com/nushell/nushell/pull/5312",target:"_blank",rel:"noopener noreferrer"},Sr=e("Fix drop nth bug"),Fr=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),Ur=e("aslilac created "),Tr={href:"https://github.com/nushell/nushell.github.io/pull/499",target:"_blank",rel:"noopener noreferrer"},zr=e('docs(book): Update the "Coming from Bash" page'),qr=e("jcjolley created "),Cr={href:"https://github.com/nushell/nushell.github.io/pull/498",target:"_blank",rel:"noopener noreferrer"},Dr=e("Show how to cast between number types"),Wr=e("f2hafner created "),Lr={href:"https://github.com/nushell/nushell.github.io/pull/497",target:"_blank",rel:"noopener noreferrer"},jr=e("Fixed example causing type_mismatch in working_with_lists.md"),Er=e("hustcer created "),Mr={href:"https://github.com/nushell/nushell.github.io/pull/495",target:"_blank",rel:"noopener noreferrer"},Rr=e("Add nav links for some new de docs, and do dome doc formatting"),Pr=e(", and "),Br={href:"https://github.com/nushell/nushell.github.io/pull/491",target:"_blank",rel:"noopener noreferrer"},Vr=e("Fix side nav links for nu book"),Qr=e(", and "),Gr={href:"https://github.com/nushell/nushell.github.io/pull/490",target:"_blank",rel:"noopener noreferrer"},Yr=e("Fix some broken links"),Hr=e(", and "),Or={href:"https://github.com/nushell/nushell.github.io/pull/487",target:"_blank",rel:"noopener noreferrer"},Jr=e("fix: update deploy workflow for checkout"),Kr=e(", and "),Xr={href:"https://github.com/nushell/nushell.github.io/pull/486",target:"_blank",rel:"noopener noreferrer"},$r=e('Revert "Fix checkout step for feed plugin"'),Zr=e(", and "),el={href:"https://github.com/nushell/nushell.github.io/pull/485",target:"_blank",rel:"noopener noreferrer"},tl=e("Fix checkout step for feed plugin"),ol=e(", and "),nl={href:"https://github.com/nushell/nushell.github.io/pull/484",target:"_blank",rel:"noopener noreferrer"},sl=e("fix feed plugin configs, make it work as expected"),rl=e(", and "),ll={href:"https://github.com/nushell/nushell.github.io/pull/483",target:"_blank",rel:"noopener noreferrer"},hl=e("feat: Add sitemap generator to create sitemap.xml"),il=e(", and "),al={href:"https://github.com/nushell/nushell.github.io/pull/482",target:"_blank",rel:"noopener noreferrer"},_l=e("Fix responsive layout for more screen size"),dl=e(", and "),cl={href:"https://github.com/nushell/nushell.github.io/pull/480",target:"_blank",rel:"noopener noreferrer"},ul=e("Fix responsive layout for mobile devices"),pl=e(", and "),fl={href:"https://github.com/nushell/nushell.github.io/pull/479",target:"_blank",rel:"noopener noreferrer"},gl=e("Update prettier config and run code format"),bl=e(", and "),ml={href:"https://github.com/nushell/nushell.github.io/pull/478",target:"_blank",rel:"noopener noreferrer"},kl=e("fix feed plugin add atom support"),yl=e(", and "),wl={href:"https://github.com/nushell/nushell.github.io/pull/477",target:"_blank",rel:"noopener noreferrer"},xl=e("Fix search box style, make it wider"),vl=e(", and "),Al={href:"https://github.com/nushell/nushell.github.io/pull/476",target:"_blank",rel:"noopener noreferrer"},Nl=e("Fix search box style, make it align left"),Il=e(", and "),Sl={href:"https://github.com/nushell/nushell.github.io/pull/475",target:"_blank",rel:"noopener noreferrer"},Fl=e("Trigger deploy workflow"),Ul=e(", and "),Tl={href:"https://github.com/nushell/nushell.github.io/pull/474",target:"_blank",rel:"noopener noreferrer"},zl=e("Fix command detail page, update make_docs.nu"),ql=e(", and "),Cl={href:"https://github.com/nushell/nushell.github.io/pull/465",target:"_blank",rel:"noopener noreferrer"},Dl=e("Upgrade vuepress to v2 and add dark mode support"),Wl=e("petrisch created "),Ll={href:"https://github.com/nushell/nushell.github.io/pull/494",target:"_blank",rel:"noopener noreferrer"},jl=e("Some new German translation with new snippet links"),El=e("elferherrera created "),Ml={href:"https://github.com/nushell/nushell.github.io/pull/493",target:"_blank",rel:"noopener noreferrer"},Rl=e("remove dfr from dataframe chapter"),Pl=e(", and "),Bl={href:"https://github.com/nushell/nushell.github.io/pull/466",target:"_blank",rel:"noopener noreferrer"},Vl=e("lazyframes section"),Ql=e("lfritz created "),Gl={href:"https://github.com/nushell/nushell.github.io/pull/492",target:"_blank",rel:"noopener noreferrer"},Yl=e("Fix a couple of typos"),Hl=e("CAD97 created "),Ol={href:"https://github.com/nushell/nushell.github.io/pull/489",target:"_blank",rel:"noopener noreferrer"},Jl=e("Replace "),Kl=t("code",null,"str find-replace",-1),Xl=e(" with "),$l=t("code",null,"str replace",-1),Zl=e(" in "),eh=t("code",null,"coming_from_bash.md",-1),th=e("sec65 created "),oh={href:"https://github.com/nushell/nushell.github.io/pull/488",target:"_blank",rel:"noopener noreferrer"},nh=e("Add doc fo loginshell file #4620"),sh=e("Dan-Gamin created "),rh={href:"https://github.com/nushell/nushell.github.io/pull/481",target:"_blank",rel:"noopener noreferrer"},lh=e("Add more documentation about strings"),hh=e("merelymyself created "),ih={href:"https://github.com/nushell/nushell.github.io/pull/471",target:"_blank",rel:"noopener noreferrer"},ah=e("Add documentation for switch flags"),_h=e("fdncred created "),dh={href:"https://github.com/nushell/nushell.github.io/pull/470",target:"_blank",rel:"noopener noreferrer"},ch=e("remove file paths since they're not a thing any longer"),uh=e("jgollenz created "),ph={href:"https://github.com/nushell/nushell.github.io/pull/469",target:"_blank",rel:"noopener noreferrer"},fh=e("Add 'Reading environment variables' section"),gh=e(", and "),bh={href:"https://github.com/nushell/nushell.github.io/pull/462",target:"_blank",rel:"noopener noreferrer"},mh=e("typos"),kh=e("Yethal created "),yh={href:"https://github.com/nushell/nushell.github.io/pull/467",target:"_blank",rel:"noopener noreferrer"},wh=e("Update dataframes.md"),xh=e("kubouch created "),vh={href:"https://github.com/nushell/nushell.github.io/pull/459",target:"_blank",rel:"noopener noreferrer"},Ah=e("Fix config variable name"),Nh=e(", and "),Ih={href:"https://github.com/nushell/nushell.github.io/pull/457",target:"_blank",rel:"noopener noreferrer"},Sh=e("Add 'overlay new' tip"),Fh=e(", and "),Uh={href:"https://github.com/nushell/nushell.github.io/pull/456",target:"_blank",rel:"noopener noreferrer"},Th=e("Add overlays chapter"),zh=e("schuelermine created "),qh={href:"https://github.com/nushell/nushell.github.io/pull/458",target:"_blank",rel:"noopener noreferrer"},Ch=e("book/operators.md: add "),Dh=t("code",null,"not",-1),Wh=e(" operator"),Lh=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu_Scripts")],-1),jh=e("Yethal created "),Eh={href:"https://github.com/nushell/nu_scripts/pull/251",target:"_blank",rel:"noopener noreferrer"},Mh=e("Update branch-protections.nu"),Rh=e(", and "),Ph={href:"https://github.com/nushell/nu_scripts/pull/250",target:"_blank",rel:"noopener noreferrer"},Bh=e("Add branch protections"),Vh=e(", and "),Qh={href:"https://github.com/nushell/nu_scripts/pull/239",target:"_blank",rel:"noopener noreferrer"},Gh=e("Update remoting.nu"),Yh=e(", and "),Hh={href:"https://github.com/nushell/nu_scripts/pull/238",target:"_blank",rel:"noopener noreferrer"},Oh=e("Update ssh script for 0.63.0"),Jh=e(", and "),Kh={href:"https://github.com/nushell/nu_scripts/pull/232",target:"_blank",rel:"noopener noreferrer"},Xh=e("Update make-completions.nu"),$h=e("skelly37 created "),Zh={href:"https://github.com/nushell/nu_scripts/pull/249",target:"_blank",rel:"noopener noreferrer"},ei=e("Update checker for /etc/hosts"),ti=e(", and "),oi={href:"https://github.com/nushell/nu_scripts/pull/248",target:"_blank",rel:"noopener noreferrer"},ni=e("cdpath.nu -- more clear for windows"),si=e(", and "),ri={href:"https://github.com/nushell/nu_scripts/pull/247",target:"_blank",rel:"noopener noreferrer"},li=e("cdpath fixed for windows"),hi=e(", and "),ii={href:"https://github.com/nushell/nu_scripts/pull/245",target:"_blank",rel:"noopener noreferrer"},ai=e("cdpath.nu moved and improved"),_i=e("Dan-Gamin created "),di={href:"https://github.com/nushell/nu_scripts/pull/241",target:"_blank",rel:"noopener noreferrer"},ci=e("Add "),ui=t("code",null,"helpers",-1),pi=e(" folder and add script for running C/C++ quickly"),fi=e(", and "),gi={href:"https://github.com/nushell/nu_scripts/pull/235",target:"_blank",rel:"noopener noreferrer"},bi=e("Add pwd-short to cool-oneliners"),mi=e(", and "),ki={href:"https://github.com/nushell/nu_scripts/pull/233",target:"_blank",rel:"noopener noreferrer"},yi=e("Add more cargo completions"),wi=e("ehdevries created "),xi={href:"https://github.com/nushell/nu_scripts/pull/240",target:"_blank",rel:"noopener noreferrer"},vi=e("Improve panache-git performance for changes with many files"),Ai=e("Jacobious52 created "),Ni={href:"https://github.com/nushell/nu_scripts/pull/237",target:"_blank",rel:"noopener noreferrer"},Ii=e("generated nu completions from fish"),Si=e(", and "),Fi={href:"https://github.com/nushell/nu_scripts/pull/236",target:"_blank",rel:"noopener noreferrer"},Ui=e("autogenerate from Fish shell completions"),Ti=e("sholderbach created "),zi={href:"https://github.com/nushell/nu_scripts/pull/234",target:"_blank",rel:"noopener noreferrer"},qi=e("Script to gather test coverage for nushell"),Ci=e("fdncred created "),Di={href:"https://github.com/nushell/nu_scripts/pull/231",target:"_blank",rel:"noopener noreferrer"},Wi=e("use default bg color for execution time"),Li=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" reedline")],-1),ji=e("sholderbach created "),Ei={href:"https://github.com/nushell/reedline/pull/440",target:"_blank",rel:"noopener noreferrer"},Mi=e("Prepare 0.7.0 release"),Ri=e(", and "),Pi={href:"https://github.com/nushell/reedline/pull/439",target:"_blank",rel:"noopener noreferrer"},Bi=e("Expose the "),Vi=t("code",null,"History",-1),Qi=e(" query functionality"),Gi=e(", and "),Yi={href:"https://github.com/nushell/reedline/pull/437",target:"_blank",rel:"noopener noreferrer"},Hi=e("Update nu-ansi-term/update crate patch versions"),Oi=e(", and "),Ji={href:"https://github.com/nushell/reedline/pull/435",target:"_blank",rel:"noopener noreferrer"},Ki=e("Fix clippy lints that will become warnings"),Xi=e(", and "),$i={href:"https://github.com/nushell/reedline/pull/433",target:"_blank",rel:"noopener noreferrer"},Zi=e("Organize the common keybindings"),ea=e("WindSoilder created "),ta={href:"https://github.com/nushell/reedline/pull/436",target:"_blank",rel:"noopener noreferrer"},oa=e("Don't panic when parent directory does not exist"),na=e("Artturin created "),sa={href:"https://github.com/nushell/reedline/pull/434",target:"_blank",rel:"noopener noreferrer"},ra=e("Move ctrl+a & ctrl+e to common navigation binds"),la=e(", and "),ha={href:"https://github.com/nushell/reedline/pull/432",target:"_blank",rel:"noopener noreferrer"},ia=e("Move some commonly used keybinds to common keybinds"),aa=e("phiresky created "),_a={href:"https://github.com/nushell/reedline/pull/401",target:"_blank",rel:"noopener noreferrer"},da=e("SQLite History (third version)");function ca(ua,pa){const o=l("ExternalLinkIcon");return h(),i("div",null,[d,c,u,a(" more "),p,t("p",null,[f,t("a",g,[b,n(o)]),m,t("a",k,[y,n(o)]),w,x,v]),A,N,I,S,t("p",null,[F,t("a",U,[T,n(o)]),z]),q,t("p",null,[C,t("a",D,[W,n(o)]),L]),j,t("ul",null,[t("li",null,[E,t("a",M,[R,n(o)]),P]),t("li",null,[B,t("a",V,[Q,n(o)]),G]),t("li",null,[Y,t("a",H,[O,n(o)]),J])]),K,X,$,t("p",null,[Z,t("a",ee,[te,n(o)]),oe]),ne,se,t("ul",null,[t("li",null,[re,t("a",le,[he,n(o)]),ie,t("a",ae,[_e,n(o)]),de,t("a",ce,[ue,n(o)]),pe,t("a",fe,[ge,n(o)]),be,t("a",me,[ke,n(o)]),ye,t("a",we,[xe,n(o)]),ve,t("a",Ae,[Ne,n(o)]),Ie,t("a",Se,[Fe,n(o)]),Ue,t("a",Te,[ze,n(o)]),qe,t("a",Ce,[De,n(o)]),We,t("a",Le,[je,n(o)]),Ee,t("a",Me,[Re,n(o)]),Pe,t("a",Be,[Ve,n(o)]),Qe,t("a",Ge,[Ye,n(o)])]),t("li",null,[He,t("a",Oe,[Je,n(o)]),Ke,t("a",Xe,[$e,n(o)]),Ze,t("a",et,[tt,n(o)]),ot,t("a",nt,[st,rt,lt,n(o)]),ht,t("a",it,[at,_t,dt,n(o)]),ct,t("a",ut,[pt,n(o)]),ft,t("a",gt,[bt,mt,kt,n(o)]),yt,t("a",wt,[xt,n(o)]),vt,t("a",At,[Nt,n(o)]),It,t("a",St,[Ft,Ut,n(o)]),Tt,t("a",zt,[qt,n(o)])]),t("li",null,[Ct,t("a",Dt,[Wt,n(o)]),Lt,t("a",jt,[Et,n(o)]),Mt,t("a",Rt,[Pt,n(o)]),Bt,t("a",Vt,[Qt,n(o)]),Gt,t("a",Yt,[Ht,n(o)]),Ot,t("a",Jt,[Kt,n(o)]),Xt,t("a",$t,[Zt,n(o)])]),t("li",null,[eo,t("a",to,[oo,n(o)]),no,t("a",so,[ro,n(o)]),lo,t("a",ho,[io,n(o)])]),t("li",null,[ao,t("a",_o,[co,n(o)]),uo,t("a",po,[fo,go,bo,n(o)]),mo,t("a",ko,[yo,n(o)]),wo,t("a",xo,[vo,n(o)]),Ao,t("a",No,[Io,n(o)]),So,t("a",Fo,[Uo,To,zo,n(o)]),qo,t("a",Co,[Do,Wo,n(o)]),Lo,t("a",jo,[Eo,Mo,Ro,n(o)]),Po,t("a",Bo,[Vo,Qo,Go,Yo,Ho,n(o)]),Oo,t("a",Jo,[Ko,n(o)]),Xo,t("a",$o,[Zo,en,tn,n(o)])]),t("li",null,[on,t("a",nn,[sn,n(o)]),rn,t("a",ln,[hn,n(o)]),an,t("a",_n,[dn,n(o)])]),t("li",null,[cn,t("a",un,[pn,n(o)]),fn,t("a",gn,[bn,mn,kn,n(o)]),yn,t("a",wn,[xn,n(o)])]),t("li",null,[vn,t("a",An,[Nn,n(o)]),In,t("a",Sn,[Fn,n(o)]),Un,t("a",Tn,[zn,n(o)]),qn,t("a",Cn,[Dn,n(o)]),Wn,t("a",Ln,[jn,n(o)]),En,t("a",Mn,[Rn,n(o)])]),t("li",null,[Pn,t("a",Bn,[Vn,Qn,Gn,n(o)])]),t("li",null,[Yn,t("a",Hn,[On,n(o)]),Jn,t("a",Kn,[Xn,n(o)]),$n,t("a",Zn,[es,n(o)]),ts,t("a",os,[ns,ss,rs,n(o)]),ls,t("a",hs,[is,n(o)])]),t("li",null,[as,t("a",_s,[ds,cs,n(o)]),us,t("a",ps,[fs,gs,bs,n(o)]),ms,t("a",ks,[ys,n(o)]),ws,t("a",xs,[vs,n(o)])]),t("li",null,[As,t("a",Ns,[Is,n(o)])]),t("li",null,[Ss,t("a",Fs,[Us,n(o)])]),t("li",null,[Ts,t("a",zs,[qs,n(o)]),Cs,t("a",Ds,[Ws,n(o)]),Ls,t("a",js,[Es,n(o)])]),t("li",null,[Ms,t("a",Rs,[Ps,n(o)])]),t("li",null,[Bs,t("a",Vs,[Qs,Gs,Ys,n(o)]),Hs,t("a",Os,[Js,Ks,Xs,$s,Zs,n(o)])]),t("li",null,[er,t("a",tr,[or,n(o)]),nr,t("a",sr,[rr,n(o)])]),t("li",null,[lr,t("a",hr,[ir,n(o)])]),t("li",null,[ar,t("a",_r,[dr,n(o)])]),t("li",null,[cr,t("a",ur,[pr,fr,gr,br,mr,kr,yr,wr,n(o)])]),t("li",null,[xr,t("a",vr,[Ar,n(o)])]),t("li",null,[Nr,t("a",Ir,[Sr,n(o)])])]),Fr,t("ul",null,[t("li",null,[Ur,t("a",Tr,[zr,n(o)])]),t("li",null,[qr,t("a",Cr,[Dr,n(o)])]),t("li",null,[Wr,t("a",Lr,[jr,n(o)])]),t("li",null,[Er,t("a",Mr,[Rr,n(o)]),Pr,t("a",Br,[Vr,n(o)]),Qr,t("a",Gr,[Yr,n(o)]),Hr,t("a",Or,[Jr,n(o)]),Kr,t("a",Xr,[$r,n(o)]),Zr,t("a",el,[tl,n(o)]),ol,t("a",nl,[sl,n(o)]),rl,t("a",ll,[hl,n(o)]),il,t("a",al,[_l,n(o)]),dl,t("a",cl,[ul,n(o)]),pl,t("a",fl,[gl,n(o)]),bl,t("a",ml,[kl,n(o)]),yl,t("a",wl,[xl,n(o)]),vl,t("a",Al,[Nl,n(o)]),Il,t("a",Sl,[Fl,n(o)]),Ul,t("a",Tl,[zl,n(o)]),ql,t("a",Cl,[Dl,n(o)])]),t("li",null,[Wl,t("a",Ll,[jl,n(o)])]),t("li",null,[El,t("a",Ml,[Rl,n(o)]),Pl,t("a",Bl,[Vl,n(o)])]),t("li",null,[Ql,t("a",Gl,[Yl,n(o)])]),t("li",null,[Hl,t("a",Ol,[Jl,Kl,Xl,$l,Zl,eh,n(o)])]),t("li",null,[th,t("a",oh,[nh,n(o)])]),t("li",null,[sh,t("a",rh,[lh,n(o)])]),t("li",null,[hh,t("a",ih,[ah,n(o)])]),t("li",null,[_h,t("a",dh,[ch,n(o)])]),t("li",null,[uh,t("a",ph,[fh,n(o)]),gh,t("a",bh,[mh,n(o)])]),t("li",null,[kh,t("a",yh,[wh,n(o)])]),t("li",null,[xh,t("a",vh,[Ah,n(o)]),Nh,t("a",Ih,[Sh,n(o)]),Fh,t("a",Uh,[Th,n(o)])]),t("li",null,[zh,t("a",qh,[Ch,Dh,Wh,n(o)])])]),Lh,t("ul",null,[t("li",null,[jh,t("a",Eh,[Mh,n(o)]),Rh,t("a",Ph,[Bh,n(o)]),Vh,t("a",Qh,[Gh,n(o)]),Yh,t("a",Hh,[Oh,n(o)]),Jh,t("a",Kh,[Xh,n(o)])]),t("li",null,[$h,t("a",Zh,[ei,n(o)]),ti,t("a",oi,[ni,n(o)]),si,t("a",ri,[li,n(o)]),hi,t("a",ii,[ai,n(o)])]),t("li",null,[_i,t("a",di,[ci,ui,pi,n(o)]),fi,t("a",gi,[bi,n(o)]),mi,t("a",ki,[yi,n(o)])]),t("li",null,[wi,t("a",xi,[vi,n(o)])]),t("li",null,[Ai,t("a",Ni,[Ii,n(o)]),Si,t("a",Fi,[Ui,n(o)])]),t("li",null,[Ti,t("a",zi,[qi,n(o)])]),t("li",null,[Ci,t("a",Di,[Wi,n(o)])])]),Li,t("ul",null,[t("li",null,[ji,t("a",Ei,[Mi,n(o)]),Ri,t("a",Pi,[Bi,Vi,Qi,n(o)]),Gi,t("a",Yi,[Hi,n(o)]),Oi,t("a",Ji,[Ki,n(o)]),Xi,t("a",$i,[Zi,n(o)])]),t("li",null,[ea,t("a",ta,[oa,n(o)])]),t("li",null,[na,t("a",sa,[ra,n(o)]),la,t("a",ha,[ia,n(o)])]),t("li",null,[aa,t("a",_a,[da,n(o)])])])])}const ga=r(_,[["render",ca],["__file","2022-06-14-nushell_0_64.html.vue"]]);export{ga as default};

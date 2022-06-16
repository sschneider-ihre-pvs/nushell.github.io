import{_ as r,r as l,o as h,c as i,a as t,b as n,d as e,e as s}from"./app.46eb55cb.js";const a={},_=t("h1",{id:"nushell-0-64",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-64","aria-hidden":"true"},"#"),e(" Nushell 0.64")],-1),d=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),c=t("p",null,"Today, we're releasing version 0.64 of Nu. It's the first to include input overloading, input/output types, and lazy dataframes.",-1),u=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),p=e("Nu 0.64 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.64.0",target:"_blank",rel:"noopener noreferrer"},g=e("pre-built binaries"),b=e(" or from "),m={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=e("crates.io"),y=e(". If you have Rust installed you can install it using "),w=t("code",null,"cargo install nu",-1),x=e("."),v=t("p",null,[e("If you want all the built-in goodies, you can install "),t("code",null,"cargo install nu --features=extra"),e(".")],-1),A=t("p",null,[e("As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use "),t("code",null,"cargo install nu_plugin_<plugin name>"),e(".")],-1),N=t("h1",{id:"themes-of-this-release",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#themes-of-this-release","aria-hidden":"true"},"#"),e(" Themes of this release")],-1),I=t("h2",{id:"input-overloading-elferherrera",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#input-overloading-elferherrera","aria-hidden":"true"},"#"),e(" Input overloading (elferherrera)")],-1),S=e("Commands can now declare their "),F={href:"https://github.com/nushell/nushell/pull/5750",target:"_blank",rel:"noopener noreferrer"},U=e("input and output types"),T=e(". While this support is still initial and isn't yet available in the syntax, we're already using it for one important improvement: simplifying the commands."),z=s(`<p>In this release, dataframe commands can now detect the input type in the pipeline and run without needing to be called with <code>dfr</code> before every command. The end result is much cleaner:</p><p>Before:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [[a b]; [1 2] [3 4]] | dfr to-df | dfr drop a
</code></pre></div><p>After:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [[a b]; [1 2] [3 4]] | to-df | drop a
</code></pre></div><p>This allows dataframe commands to feel more natural and fit more cleanly in with other commands. We&#39;re also looking to make similar improvements to the <code>db</code> command. In the future, you&#39;ll be able to open a data source and then use the standard nushell commands against it, and Nushell will select the best fit based on the type of data source you&#39;re opening.</p><h2 id="lazy-dataframes-elferherrera" tabindex="-1"><a class="header-anchor" href="#lazy-dataframes-elferherrera" aria-hidden="true">#</a> Lazy dataframes (elferherrera)</h2>`,7),q=e("Dataframes now have "),C={href:"https://github.com/nushell/nushell/pull/5687",target:"_blank",rel:"noopener noreferrer"},D=e("lazy operations"),W=e(". These lazy operations allow users to build up multiple steps of a pipeline and execute them in a much more efficient way against the dataframe."),L=s(`<h2 id="future-sqlite-backed-history-phiresky" tabindex="-1"><a class="header-anchor" href="#future-sqlite-backed-history-phiresky" aria-hidden="true">#</a> Future SQLite backed history (phiresky)</h2><p>The API for storing history entries has changed in the background. This now supports also storing your history in a SQLite database. Currently this adds some metadata such as the current working directory, whether a command succeeded, and execution times. In the future this will enable you to query the history in a more rich and meaningful way.</p><p>Currently the simple text based history is still the default. If you want to test out the new history change your config to contain:</p><div class="language-text ext-text"><pre class="language-text"><code>let-env config = {
  ...
  history_file_format: &quot;sqlite&quot; # &quot;sqlite&quot; or &quot;plaintext&quot;
  ...
}
</code></pre></div><h1 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements" aria-hidden="true">#</a> Improvements</h1>`,5),j=e("Using Nu as a login shell now has a "),E={href:"https://github.com/nushell/nushell/pull/5714",target:"_blank",rel:"noopener noreferrer"},M=e("special config file"),R=e(". (sec65)"),P=e("Unix-based Nushell can now "),B={href:"https://github.com/nushell/nushell/pull/5744",target:"_blank",rel:"noopener noreferrer"},Q=e("handle SIGQUIT"),V=e(" (WindSoilder)"),G=e("This release also includes binaries for "),Y={href:"https://github.com/nushell/nushell/releases/tag/0.64.0",target:"_blank",rel:"noopener noreferrer"},H=e("more platforms"),O=e(" (hustcer)"),J=t("p",null,"You can see the full list in the Changelog below.",-1),K=t("h1",{id:"looking-ahead",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-ahead","aria-hidden":"true"},"#"),e(" Looking ahead")],-1),X=t("p",null,"The new input/output types and type overloading allows for a simpler, more uniform Nushell language. We're looking forward to continuing to improve this as well as improving the Nushell language around it.",-1),$=e("We've also recent shown an experimental "),Z={href:"https://www.youtube.com/watch?v=B2aLON88New",target:"_blank",rel:"noopener noreferrer"},ee=e("graphical version of Nushell"),te=e(". This experiment is something you can use today across the platforms that Nushell supports."),oe=t("h1",{id:"changelog",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#"),e(" Changelog")],-1),ne=t("h2",{id:"nushell",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell","aria-hidden":"true"},"#"),e(" Nushell")],-1),se=e("WindSoilder created "),re={href:"https://github.com/nushell/nushell/pull/5782",target:"_blank",rel:"noopener noreferrer"},le=e("add --values flag to sort record by values, by default, sort record by keys"),he=e(", and "),ie={href:"https://github.com/nushell/nushell/pull/5778",target:"_blank",rel:"noopener noreferrer"},ae=e("sort not change shape"),_e=e(", and "),de={href:"https://github.com/nushell/nushell/pull/5775",target:"_blank",rel:"noopener noreferrer"},ce=e("path join support multi path"),ue=e(", and "),pe={href:"https://github.com/nushell/nushell/pull/5754",target:"_blank",rel:"noopener noreferrer"},fe=e("fix arg parse"),ge=e(", and "),be={href:"https://github.com/nushell/nushell/pull/5751",target:"_blank",rel:"noopener noreferrer"},me=e("While starting nu, force PWD to be current working directory"),ke=e(", and "),ye={href:"https://github.com/nushell/nushell/pull/5744",target:"_blank",rel:"noopener noreferrer"},we=e("handle SIGQUIT"),xe=e(", and "),ve={href:"https://github.com/nushell/nushell/pull/5736",target:"_blank",rel:"noopener noreferrer"},Ae=e("add as record tag to transfer result to record"),Ne=e(", and "),Ie={href:"https://github.com/nushell/nushell/pull/5731",target:"_blank",rel:"noopener noreferrer"},Se=e("print warning message if meet non utf-8 path"),Fe=e(", and "),Ue={href:"https://github.com/nushell/nushell/pull/5695",target:"_blank",rel:"noopener noreferrer"},Te=e("fix argument type"),ze=e(", and "),qe={href:"https://github.com/nushell/nushell/pull/5692",target:"_blank",rel:"noopener noreferrer"},Ce=e("expand env for path"),De=e(", and "),We={href:"https://github.com/nushell/nushell/pull/5691",target:"_blank",rel:"noopener noreferrer"},Le=e("make ls works better with glob"),je=e(", and "),Ee={href:"https://github.com/nushell/nushell/pull/5680",target:"_blank",rel:"noopener noreferrer"},Me=e("base64 command more friendly"),Re=e(", and "),Pe={href:"https://github.com/nushell/nushell/pull/5645",target:"_blank",rel:"noopener noreferrer"},Be=e("make cp can copy folders contains dangling symbolic link"),Qe=e(", and "),Ve={href:"https://github.com/nushell/nushell/pull/5633",target:"_blank",rel:"noopener noreferrer"},Ge=e("make sure no duplicate column exists during eval and merge"),Ye=e("sholderbach created "),He={href:"https://github.com/nushell/nushell/pull/5781",target:"_blank",rel:"noopener noreferrer"},Oe=e("Pin reedline v0.7.0 for the nushell v0.64.0 release"),Je=e(", and "),Ke={href:"https://github.com/nushell/nushell/pull/5709",target:"_blank",rel:"noopener noreferrer"},Xe=e("Address lints from clippy for beta/nightly"),$e=e(", and "),Ze={href:"https://github.com/nushell/nushell/pull/5708",target:"_blank",rel:"noopener noreferrer"},et=e("Use search terms in the help menu search"),tt=e(", and "),ot={href:"https://github.com/nushell/nushell/pull/5706",target:"_blank",rel:"noopener noreferrer"},nt=e("Update nu-ansi-term to remove "),st=t("code",null,"Deref",-1),rt=e(" impl"),lt=e(", and "),ht={href:"https://github.com/nushell/nushell/pull/5704",target:"_blank",rel:"noopener noreferrer"},it=e("Improve internal documentation of "),at=t("code",null,"save",-1),_t=e(" command"),dt=e(", and "),ct={href:"https://github.com/nushell/nushell/pull/5678",target:"_blank",rel:"noopener noreferrer"},ut=e("Update reedline"),pt=e(", and "),ft={href:"https://github.com/nushell/nushell/pull/5677",target:"_blank",rel:"noopener noreferrer"},gt=e("Clarify error message for "),bt=t("code",null,"let",-1),mt=e(" in pipeline"),kt=e(", and "),yt={href:"https://github.com/nushell/nushell/pull/5654",target:"_blank",rel:"noopener noreferrer"},wt=e("Update reedline: Support more bindings in vi mode"),xt=e(", and "),vt={href:"https://github.com/nushell/nushell/pull/5650",target:"_blank",rel:"noopener noreferrer"},At=e("Improve test coverage of command examples"),Nt=e(", and "),It={href:"https://github.com/nushell/nushell/pull/5644",target:"_blank",rel:"noopener noreferrer"},St=e("Add search terms for "),Ft=t("code",null,"describe",-1),Ut=e(", and "),Tt={href:"https://github.com/nushell/nushell/pull/5634",target:"_blank",rel:"noopener noreferrer"},zt=e("Unpin reedline for regular development"),qt=e("elferherrera created "),Ct={href:"https://github.com/nushell/nushell/pull/5779",target:"_blank",rel:"noopener noreferrer"},Dt=e("bool type for binary operations"),Wt=e(", and "),Lt={href:"https://github.com/nushell/nushell/pull/5771",target:"_blank",rel:"noopener noreferrer"},jt=e("each while command"),Et=e(", and "),Mt={href:"https://github.com/nushell/nushell/pull/5770",target:"_blank",rel:"noopener noreferrer"},Rt=e("filesize conversion"),Pt=e(", and "),Bt={href:"https://github.com/nushell/nushell/pull/5769",target:"_blank",rel:"noopener noreferrer"},Qt=e("expression to literal"),Vt=e(", and "),Gt={href:"https://github.com/nushell/nushell/pull/5760",target:"_blank",rel:"noopener noreferrer"},Yt=e("Remove dfr from dataframe commands"),Ht=e(", and "),Ot={href:"https://github.com/nushell/nushell/pull/5750",target:"_blank",rel:"noopener noreferrer"},Jt=e("input and output types"),Kt=e(", and "),Xt={href:"https://github.com/nushell/nushell/pull/5687",target:"_blank",rel:"noopener noreferrer"},$t=e("Lazy dataframes"),Zt=e("jt "),eo={href:"https://github.com/nushell/nushell/pull/5777",target:"_blank",rel:"noopener noreferrer"},to=e("bumped to 0.64"),oo=e(", and "),no={href:"https://github.com/nushell/nushell/pull/5768",target:"_blank",rel:"noopener noreferrer"},so=e("Force floats to output a decimal in nuon"),ro=e(", and "),lo={href:"https://github.com/nushell/nushell/pull/5635",target:"_blank",rel:"noopener noreferrer"},ho=e("bump to dev version"),io=e("merelymyself created "),ao={href:"https://github.com/nushell/nushell/pull/5774",target:"_blank",rel:"noopener noreferrer"},_o=e("Add option to sort-by naturally"),co=e(", and "),uo={href:"https://github.com/nushell/nushell/pull/5759",target:"_blank",rel:"noopener noreferrer"},po=e("Attempts to add "),fo=t("code",null,"//",-1),go=e(" math operator"),bo=e(", and "),mo={href:"https://github.com/nushell/nushell/pull/5737",target:"_blank",rel:"noopener noreferrer"},ko=e("add search terms to alias"),yo=e(", and "),wo={href:"https://github.com/nushell/nushell/pull/5730",target:"_blank",rel:"noopener noreferrer"},xo=e("Improves help str substring"),vo=e(", and "),Ao={href:"https://github.com/nushell/nushell/pull/5712",target:"_blank",rel:"noopener noreferrer"},No=e("Attempts to add a command that checks if nushell is running with admin priveleges"),Io=e(", and "),So={href:"https://github.com/nushell/nushell/pull/5710",target:"_blank",rel:"noopener noreferrer"},Fo=e("Make "),Uo=t("code",null,"range",-1),To=e(" require its positional argument"),zo=e(", and "),qo={href:"https://github.com/nushell/nushell/pull/5693",target:"_blank",rel:"noopener noreferrer"},Co=e("Small typo fix in "),Do=t("code",null,"signature.rs",-1),Wo=e(", and "),Lo={href:"https://github.com/nushell/nushell/pull/5676",target:"_blank",rel:"noopener noreferrer"},jo=e("prevent panic with "),Eo=t("code",null,"let",-1),Mo=e(" alone in pipeline"),Ro=e(", and "),Po={href:"https://github.com/nushell/nushell/pull/5673",target:"_blank",rel:"noopener noreferrer"},Bo=e("Add '-o'/"),Qo=t("code",null,"--output",-1),Vo=e(" flag to "),Go=t("code",null,"fetch",-1),Yo=e(" to download to file"),Ho=e(", and "),Oo={href:"https://github.com/nushell/nushell/pull/5657",target:"_blank",rel:"noopener noreferrer"},Jo=e("Add search terms to error make"),Ko=e(", and "),Xo={href:"https://github.com/nushell/nushell/pull/5632",target:"_blank",rel:"noopener noreferrer"},$o=e("Makes a more helpful error for "),Zo=t("code",null,"let",-1),en=e(" in pipeline"),tn=e("Kangaxx-0 created "),on={href:"https://github.com/nushell/nushell/pull/5773",target:"_blank",rel:"noopener noreferrer"},nn=e("Add NU config to allow user be able to turn off external completion"),sn=e(", and "),rn={href:"https://github.com/nushell/nushell/pull/5749",target:"_blank",rel:"noopener noreferrer"},ln=e("Support completion for alias and sub-command"),hn=e(", and "),an={href:"https://github.com/nushell/nushell/pull/5642",target:"_blank",rel:"noopener noreferrer"},_n=e("Fix cp bug"),dn=e("fdncred created "),cn={href:"https://github.com/nushell/nushell/pull/5765",target:"_blank",rel:"noopener noreferrer"},un=e("more verbose error handling"),pn=e(", and "),fn={href:"https://github.com/nushell/nushell/pull/5733",target:"_blank",rel:"noopener noreferrer"},gn=e("make "),bn=t("code",null,"to text",-1),mn=e(" work more intuitively"),kn=e(", and "),yn={href:"https://github.com/nushell/nushell/pull/5646",target:"_blank",rel:"noopener noreferrer"},wn=e("add case_sensitive_completions config option"),xn=e("hustcer created "),vn={href:"https://github.com/nushell/nushell/pull/5763",target:"_blank",rel:"noopener noreferrer"},An=e("Add setup-nu link in README.md"),Nn=e(", and "),In={href:"https://github.com/nushell/nushell/pull/5725",target:"_blank",rel:"noopener noreferrer"},Sn=e("fix: normalize some parameter names"),Fn=e(", and "),Un={href:"https://github.com/nushell/nushell/pull/5696",target:"_blank",rel:"noopener noreferrer"},Tn=e("Fix doc building for vuepress-next, avoid using angle brackets"),zn=e(", and "),qn={href:"https://github.com/nushell/nushell/pull/5685",target:"_blank",rel:"noopener noreferrer"},Cn=e("feat: Add sensitive flag to get, fix #4295"),Dn=e(", and "),Wn={href:"https://github.com/nushell/nushell/pull/5671",target:"_blank",rel:"noopener noreferrer"},Ln=e("feat: Add search terms to find, where, exit, which and fetch, update #5093"),jn=e(", and "),En={href:"https://github.com/nushell/nushell/pull/5649",target:"_blank",rel:"noopener noreferrer"},Mn=e("Refactor and optimize the github release workflow: deliver binary package for more targets"),Rn=e("Mathspy created "),Pn={href:"https://github.com/nushell/nushell/pull/5761",target:"_blank",rel:"noopener noreferrer"},Bn=e("Should we keep old semantics of "),Qn=t("code",null,"uniq",-1),Vn=e(" command?"),Gn=e("rgwood created "),Yn={href:"https://github.com/nushell/nushell/pull/5747",target:"_blank",rel:"noopener noreferrer"},Hn=e("Temporarily disable rust-cache in tests"),On=e(", and "),Jn={href:"https://github.com/nushell/nushell/pull/5718",target:"_blank",rel:"noopener noreferrer"},Kn=e("Clean up README"),Xn=e(", and "),$n={href:"https://github.com/nushell/nushell/pull/5717",target:"_blank",rel:"noopener noreferrer"},Zn=e("Statically link the CRT on Windows"),es=e(", and "),ts={href:"https://github.com/nushell/nushell/pull/5703",target:"_blank",rel:"noopener noreferrer"},os=e("Fix "),ns=t("code",null,"ls",-1),ss=e(" for Windows system files"),rs=e(", and "),ls={href:"https://github.com/nushell/nushell/pull/5651",target:"_blank",rel:"noopener noreferrer"},hs=e("Don't build OpenSSL on Windows"),is=e("kubouch created "),as={href:"https://github.com/nushell/nushell/pull/5739",target:"_blank",rel:"noopener noreferrer"},_s=e("Add "),ds=t("code",null,"$nu.scope.engine_state",-1),cs=e(", and "),us={href:"https://github.com/nushell/nushell/pull/5698",target:"_blank",rel:"noopener noreferrer"},ps=e("Fix wrong "),fs=t("code",null,"path",-1),gs=e(" help message"),bs=e(", and "),ms={href:"https://github.com/nushell/nushell/pull/5648",target:"_blank",rel:"noopener noreferrer"},ks=e("Shorten the links of parser keywords help msgs"),ys=e(", and "),ws={href:"https://github.com/nushell/nushell/pull/5647",target:"_blank",rel:"noopener noreferrer"},xs=e("Add 'overlay new' command"),vs=e("jaeheonji created "),As={href:"https://github.com/nushell/nushell/pull/5723",target:"_blank",rel:"noopener noreferrer"},Ns=e("feat: add search terms to category of strings"),Is=e("phiresky created "),Ss={href:"https://github.com/nushell/nushell/pull/5721",target:"_blank",rel:"noopener noreferrer"},Fs=e("SQLite History MVP with timestamp, duration, working directory, exit status metadata"),Us=e("herlon214 created "),Ts={href:"https://github.com/nushell/nushell/pull/5715",target:"_blank",rel:"noopener noreferrer"},zs=e("nu-engine: better display for shape when showing help params"),qs=e(", and "),Cs={href:"https://github.com/nushell/nushell/pull/5653",target:"_blank",rel:"noopener noreferrer"},Ds=e("nu-cli/completions: add filtering tests for variables completions"),Ws=e(", and "),Ls={href:"https://github.com/nushell/nushell/pull/5641",target:"_blank",rel:"noopener noreferrer"},js=e("nu-cli/completions: fix filter for variable completions"),Es=e("sec65 created "),Ms={href:"https://github.com/nushell/nushell/pull/5714",target:"_blank",rel:"noopener noreferrer"},Rs=e("Added loginshell config file #4620"),Ps=e("VergeDX created "),Bs={href:"https://github.com/nushell/nushell/pull/5705",target:"_blank",rel:"noopener noreferrer"},Qs=e("fix[table]: Panic when passthru small number of "),Vs=t("code",null,"table -w",-1),Gs=e("."),Ys=e(", and "),Hs={href:"https://github.com/nushell/nushell/pull/5643",target:"_blank",rel:"noopener noreferrer"},Os=e("feat[table]: Allow specific table width with "),Js=t("code",null,"-w",-1),Ks=e(", like command "),Xs=t("code",null,"grid",-1),$s=e("."),Zs=e("PerBothner created "),er={href:"https://github.com/nushell/nushell/pull/5701",target:"_blank",rel:"noopener noreferrer"},tr=e("Minor fixes to shell integation in repl."),or=e(", and "),nr={href:"https://github.com/nushell/nushell/pull/5699",target:"_blank",rel:"noopener noreferrer"},sr=e("Improve table output of 'to html',"),rr=e("Yethal created "),lr={href:"https://github.com/nushell/nushell/pull/5700",target:"_blank",rel:"noopener noreferrer"},hr=e("Add completions for nu"),ir=e("mjclements created "),ar={href:"https://github.com/nushell/nushell/pull/5667",target:"_blank",rel:"noopener noreferrer"},_r=e("Differentiate internal signature from external signature w.r.t. help"),dr=e("EjPlatzer created "),cr={href:"https://github.com/nushell/nushell/pull/5665",target:"_blank",rel:"noopener noreferrer"},ur=e("Add search terms for "),pr=t("code",null,"all?",-1),fr=e(", "),gr=t("code",null,"any?",-1),br=e(", "),mr=t("code",null,"length",-1),kr=e(", and "),yr=t("code",null,"keybindings",-1),wr=e("tenshik created "),xr={href:"https://github.com/nushell/nushell/pull/5652",target:"_blank",rel:"noopener noreferrer"},vr=e("feat: add search terms to random & typo fix"),Ar=e("onthebridgetonowhere created "),Nr={href:"https://github.com/nushell/nushell/pull/5312",target:"_blank",rel:"noopener noreferrer"},Ir=e("Fix drop nth bug"),Sr=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),Fr=e("aslilac created "),Ur={href:"https://github.com/nushell/nushell.github.io/pull/499",target:"_blank",rel:"noopener noreferrer"},Tr=e('docs(book): Update the "Coming from Bash" page'),zr=e("jcjolley created "),qr={href:"https://github.com/nushell/nushell.github.io/pull/498",target:"_blank",rel:"noopener noreferrer"},Cr=e("Show how to cast between number types"),Dr=e("f2hafner created "),Wr={href:"https://github.com/nushell/nushell.github.io/pull/497",target:"_blank",rel:"noopener noreferrer"},Lr=e("Fixed example causing type_mismatch in working_with_lists.md"),jr=e("hustcer created "),Er={href:"https://github.com/nushell/nushell.github.io/pull/495",target:"_blank",rel:"noopener noreferrer"},Mr=e("Add nav links for some new de docs, and do dome doc formatting"),Rr=e(", and "),Pr={href:"https://github.com/nushell/nushell.github.io/pull/491",target:"_blank",rel:"noopener noreferrer"},Br=e("Fix side nav links for nu book"),Qr=e(", and "),Vr={href:"https://github.com/nushell/nushell.github.io/pull/490",target:"_blank",rel:"noopener noreferrer"},Gr=e("Fix some broken links"),Yr=e(", and "),Hr={href:"https://github.com/nushell/nushell.github.io/pull/487",target:"_blank",rel:"noopener noreferrer"},Or=e("fix: update deploy workflow for checkout"),Jr=e(", and "),Kr={href:"https://github.com/nushell/nushell.github.io/pull/486",target:"_blank",rel:"noopener noreferrer"},Xr=e('Revert "Fix checkout step for feed plugin"'),$r=e(", and "),Zr={href:"https://github.com/nushell/nushell.github.io/pull/485",target:"_blank",rel:"noopener noreferrer"},el=e("Fix checkout step for feed plugin"),tl=e(", and "),ol={href:"https://github.com/nushell/nushell.github.io/pull/484",target:"_blank",rel:"noopener noreferrer"},nl=e("fix feed plugin configs, make it work as expected"),sl=e(", and "),rl={href:"https://github.com/nushell/nushell.github.io/pull/483",target:"_blank",rel:"noopener noreferrer"},ll=e("feat: Add sitemap generator to create sitemap.xml"),hl=e(", and "),il={href:"https://github.com/nushell/nushell.github.io/pull/482",target:"_blank",rel:"noopener noreferrer"},al=e("Fix responsive layout for more screen size"),_l=e(", and "),dl={href:"https://github.com/nushell/nushell.github.io/pull/480",target:"_blank",rel:"noopener noreferrer"},cl=e("Fix responsive layout for mobile devices"),ul=e(", and "),pl={href:"https://github.com/nushell/nushell.github.io/pull/479",target:"_blank",rel:"noopener noreferrer"},fl=e("Update prettier config and run code format"),gl=e(", and "),bl={href:"https://github.com/nushell/nushell.github.io/pull/478",target:"_blank",rel:"noopener noreferrer"},ml=e("fix feed plugin add atom support"),kl=e(", and "),yl={href:"https://github.com/nushell/nushell.github.io/pull/477",target:"_blank",rel:"noopener noreferrer"},wl=e("Fix search box style, make it wider"),xl=e(", and "),vl={href:"https://github.com/nushell/nushell.github.io/pull/476",target:"_blank",rel:"noopener noreferrer"},Al=e("Fix search box style, make it align left"),Nl=e(", and "),Il={href:"https://github.com/nushell/nushell.github.io/pull/475",target:"_blank",rel:"noopener noreferrer"},Sl=e("Trigger deploy workflow"),Fl=e(", and "),Ul={href:"https://github.com/nushell/nushell.github.io/pull/474",target:"_blank",rel:"noopener noreferrer"},Tl=e("Fix command detail page, update make_docs.nu"),zl=e(", and "),ql={href:"https://github.com/nushell/nushell.github.io/pull/465",target:"_blank",rel:"noopener noreferrer"},Cl=e("Upgrade vuepress to v2 and add dark mode support"),Dl=e("petrisch created "),Wl={href:"https://github.com/nushell/nushell.github.io/pull/494",target:"_blank",rel:"noopener noreferrer"},Ll=e("Some new German translation with new snippet links"),jl=e("elferherrera created "),El={href:"https://github.com/nushell/nushell.github.io/pull/493",target:"_blank",rel:"noopener noreferrer"},Ml=e("remove dfr from dataframe chapter"),Rl=e(", and "),Pl={href:"https://github.com/nushell/nushell.github.io/pull/466",target:"_blank",rel:"noopener noreferrer"},Bl=e("lazyframes section"),Ql=e("lfritz created "),Vl={href:"https://github.com/nushell/nushell.github.io/pull/492",target:"_blank",rel:"noopener noreferrer"},Gl=e("Fix a couple of typos"),Yl=e("CAD97 created "),Hl={href:"https://github.com/nushell/nushell.github.io/pull/489",target:"_blank",rel:"noopener noreferrer"},Ol=e("Replace "),Jl=t("code",null,"str find-replace",-1),Kl=e(" with "),Xl=t("code",null,"str replace",-1),$l=e(" in "),Zl=t("code",null,"coming_from_bash.md",-1),eh=e("sec65 created "),th={href:"https://github.com/nushell/nushell.github.io/pull/488",target:"_blank",rel:"noopener noreferrer"},oh=e("Add doc fo loginshell file #4620"),nh=e("Dan-Gamin created "),sh={href:"https://github.com/nushell/nushell.github.io/pull/481",target:"_blank",rel:"noopener noreferrer"},rh=e("Add more documentation about strings"),lh=e("merelymyself created "),hh={href:"https://github.com/nushell/nushell.github.io/pull/471",target:"_blank",rel:"noopener noreferrer"},ih=e("Add documentation for switch flags"),ah=e("fdncred created "),_h={href:"https://github.com/nushell/nushell.github.io/pull/470",target:"_blank",rel:"noopener noreferrer"},dh=e("remove file paths since they're not a thing any longer"),ch=e("jgollenz created "),uh={href:"https://github.com/nushell/nushell.github.io/pull/469",target:"_blank",rel:"noopener noreferrer"},ph=e("Add 'Reading environment variables' section"),fh=e(", and "),gh={href:"https://github.com/nushell/nushell.github.io/pull/462",target:"_blank",rel:"noopener noreferrer"},bh=e("typos"),mh=e("Yethal created "),kh={href:"https://github.com/nushell/nushell.github.io/pull/467",target:"_blank",rel:"noopener noreferrer"},yh=e("Update dataframes.md"),wh=e("kubouch created "),xh={href:"https://github.com/nushell/nushell.github.io/pull/459",target:"_blank",rel:"noopener noreferrer"},vh=e("Fix config variable name"),Ah=e(", and "),Nh={href:"https://github.com/nushell/nushell.github.io/pull/457",target:"_blank",rel:"noopener noreferrer"},Ih=e("Add 'overlay new' tip"),Sh=e(", and "),Fh={href:"https://github.com/nushell/nushell.github.io/pull/456",target:"_blank",rel:"noopener noreferrer"},Uh=e("Add overlays chapter"),Th=e("schuelermine created "),zh={href:"https://github.com/nushell/nushell.github.io/pull/458",target:"_blank",rel:"noopener noreferrer"},qh=e("book/operators.md: add "),Ch=t("code",null,"not",-1),Dh=e(" operator"),Wh=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu_Scripts")],-1),Lh=e("Yethal created "),jh={href:"https://github.com/nushell/nu_scripts/pull/251",target:"_blank",rel:"noopener noreferrer"},Eh=e("Update branch-protections.nu"),Mh=e(", and "),Rh={href:"https://github.com/nushell/nu_scripts/pull/250",target:"_blank",rel:"noopener noreferrer"},Ph=e("Add branch protections"),Bh=e(", and "),Qh={href:"https://github.com/nushell/nu_scripts/pull/239",target:"_blank",rel:"noopener noreferrer"},Vh=e("Update remoting.nu"),Gh=e(", and "),Yh={href:"https://github.com/nushell/nu_scripts/pull/238",target:"_blank",rel:"noopener noreferrer"},Hh=e("Update ssh script for 0.63.0"),Oh=e(", and "),Jh={href:"https://github.com/nushell/nu_scripts/pull/232",target:"_blank",rel:"noopener noreferrer"},Kh=e("Update make-completions.nu"),Xh=e("skelly37 created "),$h={href:"https://github.com/nushell/nu_scripts/pull/249",target:"_blank",rel:"noopener noreferrer"},Zh=e("Update checker for /etc/hosts"),ei=e(", and "),ti={href:"https://github.com/nushell/nu_scripts/pull/248",target:"_blank",rel:"noopener noreferrer"},oi=e("cdpath.nu -- more clear for windows"),ni=e(", and "),si={href:"https://github.com/nushell/nu_scripts/pull/247",target:"_blank",rel:"noopener noreferrer"},ri=e("cdpath fixed for windows"),li=e(", and "),hi={href:"https://github.com/nushell/nu_scripts/pull/245",target:"_blank",rel:"noopener noreferrer"},ii=e("cdpath.nu moved and improved"),ai=e("Dan-Gamin created "),_i={href:"https://github.com/nushell/nu_scripts/pull/241",target:"_blank",rel:"noopener noreferrer"},di=e("Add "),ci=t("code",null,"helpers",-1),ui=e(" folder and add script for running C/C++ quickly"),pi=e(", and "),fi={href:"https://github.com/nushell/nu_scripts/pull/235",target:"_blank",rel:"noopener noreferrer"},gi=e("Add pwd-short to cool-oneliners"),bi=e(", and "),mi={href:"https://github.com/nushell/nu_scripts/pull/233",target:"_blank",rel:"noopener noreferrer"},ki=e("Add more cargo completions"),yi=e("ehdevries created "),wi={href:"https://github.com/nushell/nu_scripts/pull/240",target:"_blank",rel:"noopener noreferrer"},xi=e("Improve panache-git performance for changes with many files"),vi=e("Jacobious52 created "),Ai={href:"https://github.com/nushell/nu_scripts/pull/237",target:"_blank",rel:"noopener noreferrer"},Ni=e("generated nu completions from fish"),Ii=e(", and "),Si={href:"https://github.com/nushell/nu_scripts/pull/236",target:"_blank",rel:"noopener noreferrer"},Fi=e("autogenerate from Fish shell completions"),Ui=e("sholderbach created "),Ti={href:"https://github.com/nushell/nu_scripts/pull/234",target:"_blank",rel:"noopener noreferrer"},zi=e("Script to gather test coverage for nushell"),qi=e("fdncred created "),Ci={href:"https://github.com/nushell/nu_scripts/pull/231",target:"_blank",rel:"noopener noreferrer"},Di=e("use default bg color for execution time"),Wi=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" reedline")],-1),Li=e("sholderbach created "),ji={href:"https://github.com/nushell/reedline/pull/440",target:"_blank",rel:"noopener noreferrer"},Ei=e("Prepare 0.7.0 release"),Mi=e(", and "),Ri={href:"https://github.com/nushell/reedline/pull/439",target:"_blank",rel:"noopener noreferrer"},Pi=e("Expose the "),Bi=t("code",null,"History",-1),Qi=e(" query functionality"),Vi=e(", and "),Gi={href:"https://github.com/nushell/reedline/pull/437",target:"_blank",rel:"noopener noreferrer"},Yi=e("Update nu-ansi-term/update crate patch versions"),Hi=e(", and "),Oi={href:"https://github.com/nushell/reedline/pull/435",target:"_blank",rel:"noopener noreferrer"},Ji=e("Fix clippy lints that will become warnings"),Ki=e(", and "),Xi={href:"https://github.com/nushell/reedline/pull/433",target:"_blank",rel:"noopener noreferrer"},$i=e("Organize the common keybindings"),Zi=e("WindSoilder created "),ea={href:"https://github.com/nushell/reedline/pull/436",target:"_blank",rel:"noopener noreferrer"},ta=e("Don't panic when parent directory does not exist"),oa=e("Artturin created "),na={href:"https://github.com/nushell/reedline/pull/434",target:"_blank",rel:"noopener noreferrer"},sa=e("Move ctrl+a & ctrl+e to common navigation binds"),ra=e(", and "),la={href:"https://github.com/nushell/reedline/pull/432",target:"_blank",rel:"noopener noreferrer"},ha=e("Move some commonly used keybinds to common keybinds"),ia=e("phiresky created "),aa={href:"https://github.com/nushell/reedline/pull/401",target:"_blank",rel:"noopener noreferrer"},_a=e("SQLite History (third version)");function da(ca,ua){const o=l("ExternalLinkIcon");return h(),i("div",null,[_,d,c,u,t("p",null,[p,t("a",f,[g,n(o)]),b,t("a",m,[k,n(o)]),y,w,x]),v,A,N,I,t("p",null,[S,t("a",F,[U,n(o)]),T]),z,t("p",null,[q,t("a",C,[D,n(o)]),W]),L,t("ul",null,[t("li",null,[j,t("a",E,[M,n(o)]),R]),t("li",null,[P,t("a",B,[Q,n(o)]),V]),t("li",null,[G,t("a",Y,[H,n(o)]),O])]),J,K,X,t("p",null,[$,t("a",Z,[ee,n(o)]),te]),oe,ne,t("ul",null,[t("li",null,[se,t("a",re,[le,n(o)]),he,t("a",ie,[ae,n(o)]),_e,t("a",de,[ce,n(o)]),ue,t("a",pe,[fe,n(o)]),ge,t("a",be,[me,n(o)]),ke,t("a",ye,[we,n(o)]),xe,t("a",ve,[Ae,n(o)]),Ne,t("a",Ie,[Se,n(o)]),Fe,t("a",Ue,[Te,n(o)]),ze,t("a",qe,[Ce,n(o)]),De,t("a",We,[Le,n(o)]),je,t("a",Ee,[Me,n(o)]),Re,t("a",Pe,[Be,n(o)]),Qe,t("a",Ve,[Ge,n(o)])]),t("li",null,[Ye,t("a",He,[Oe,n(o)]),Je,t("a",Ke,[Xe,n(o)]),$e,t("a",Ze,[et,n(o)]),tt,t("a",ot,[nt,st,rt,n(o)]),lt,t("a",ht,[it,at,_t,n(o)]),dt,t("a",ct,[ut,n(o)]),pt,t("a",ft,[gt,bt,mt,n(o)]),kt,t("a",yt,[wt,n(o)]),xt,t("a",vt,[At,n(o)]),Nt,t("a",It,[St,Ft,n(o)]),Ut,t("a",Tt,[zt,n(o)])]),t("li",null,[qt,t("a",Ct,[Dt,n(o)]),Wt,t("a",Lt,[jt,n(o)]),Et,t("a",Mt,[Rt,n(o)]),Pt,t("a",Bt,[Qt,n(o)]),Vt,t("a",Gt,[Yt,n(o)]),Ht,t("a",Ot,[Jt,n(o)]),Kt,t("a",Xt,[$t,n(o)])]),t("li",null,[Zt,t("a",eo,[to,n(o)]),oo,t("a",no,[so,n(o)]),ro,t("a",lo,[ho,n(o)])]),t("li",null,[io,t("a",ao,[_o,n(o)]),co,t("a",uo,[po,fo,go,n(o)]),bo,t("a",mo,[ko,n(o)]),yo,t("a",wo,[xo,n(o)]),vo,t("a",Ao,[No,n(o)]),Io,t("a",So,[Fo,Uo,To,n(o)]),zo,t("a",qo,[Co,Do,n(o)]),Wo,t("a",Lo,[jo,Eo,Mo,n(o)]),Ro,t("a",Po,[Bo,Qo,Vo,Go,Yo,n(o)]),Ho,t("a",Oo,[Jo,n(o)]),Ko,t("a",Xo,[$o,Zo,en,n(o)])]),t("li",null,[tn,t("a",on,[nn,n(o)]),sn,t("a",rn,[ln,n(o)]),hn,t("a",an,[_n,n(o)])]),t("li",null,[dn,t("a",cn,[un,n(o)]),pn,t("a",fn,[gn,bn,mn,n(o)]),kn,t("a",yn,[wn,n(o)])]),t("li",null,[xn,t("a",vn,[An,n(o)]),Nn,t("a",In,[Sn,n(o)]),Fn,t("a",Un,[Tn,n(o)]),zn,t("a",qn,[Cn,n(o)]),Dn,t("a",Wn,[Ln,n(o)]),jn,t("a",En,[Mn,n(o)])]),t("li",null,[Rn,t("a",Pn,[Bn,Qn,Vn,n(o)])]),t("li",null,[Gn,t("a",Yn,[Hn,n(o)]),On,t("a",Jn,[Kn,n(o)]),Xn,t("a",$n,[Zn,n(o)]),es,t("a",ts,[os,ns,ss,n(o)]),rs,t("a",ls,[hs,n(o)])]),t("li",null,[is,t("a",as,[_s,ds,n(o)]),cs,t("a",us,[ps,fs,gs,n(o)]),bs,t("a",ms,[ks,n(o)]),ys,t("a",ws,[xs,n(o)])]),t("li",null,[vs,t("a",As,[Ns,n(o)])]),t("li",null,[Is,t("a",Ss,[Fs,n(o)])]),t("li",null,[Us,t("a",Ts,[zs,n(o)]),qs,t("a",Cs,[Ds,n(o)]),Ws,t("a",Ls,[js,n(o)])]),t("li",null,[Es,t("a",Ms,[Rs,n(o)])]),t("li",null,[Ps,t("a",Bs,[Qs,Vs,Gs,n(o)]),Ys,t("a",Hs,[Os,Js,Ks,Xs,$s,n(o)])]),t("li",null,[Zs,t("a",er,[tr,n(o)]),or,t("a",nr,[sr,n(o)])]),t("li",null,[rr,t("a",lr,[hr,n(o)])]),t("li",null,[ir,t("a",ar,[_r,n(o)])]),t("li",null,[dr,t("a",cr,[ur,pr,fr,gr,br,mr,kr,yr,n(o)])]),t("li",null,[wr,t("a",xr,[vr,n(o)])]),t("li",null,[Ar,t("a",Nr,[Ir,n(o)])])]),Sr,t("ul",null,[t("li",null,[Fr,t("a",Ur,[Tr,n(o)])]),t("li",null,[zr,t("a",qr,[Cr,n(o)])]),t("li",null,[Dr,t("a",Wr,[Lr,n(o)])]),t("li",null,[jr,t("a",Er,[Mr,n(o)]),Rr,t("a",Pr,[Br,n(o)]),Qr,t("a",Vr,[Gr,n(o)]),Yr,t("a",Hr,[Or,n(o)]),Jr,t("a",Kr,[Xr,n(o)]),$r,t("a",Zr,[el,n(o)]),tl,t("a",ol,[nl,n(o)]),sl,t("a",rl,[ll,n(o)]),hl,t("a",il,[al,n(o)]),_l,t("a",dl,[cl,n(o)]),ul,t("a",pl,[fl,n(o)]),gl,t("a",bl,[ml,n(o)]),kl,t("a",yl,[wl,n(o)]),xl,t("a",vl,[Al,n(o)]),Nl,t("a",Il,[Sl,n(o)]),Fl,t("a",Ul,[Tl,n(o)]),zl,t("a",ql,[Cl,n(o)])]),t("li",null,[Dl,t("a",Wl,[Ll,n(o)])]),t("li",null,[jl,t("a",El,[Ml,n(o)]),Rl,t("a",Pl,[Bl,n(o)])]),t("li",null,[Ql,t("a",Vl,[Gl,n(o)])]),t("li",null,[Yl,t("a",Hl,[Ol,Jl,Kl,Xl,$l,Zl,n(o)])]),t("li",null,[eh,t("a",th,[oh,n(o)])]),t("li",null,[nh,t("a",sh,[rh,n(o)])]),t("li",null,[lh,t("a",hh,[ih,n(o)])]),t("li",null,[ah,t("a",_h,[dh,n(o)])]),t("li",null,[ch,t("a",uh,[ph,n(o)]),fh,t("a",gh,[bh,n(o)])]),t("li",null,[mh,t("a",kh,[yh,n(o)])]),t("li",null,[wh,t("a",xh,[vh,n(o)]),Ah,t("a",Nh,[Ih,n(o)]),Sh,t("a",Fh,[Uh,n(o)])]),t("li",null,[Th,t("a",zh,[qh,Ch,Dh,n(o)])])]),Wh,t("ul",null,[t("li",null,[Lh,t("a",jh,[Eh,n(o)]),Mh,t("a",Rh,[Ph,n(o)]),Bh,t("a",Qh,[Vh,n(o)]),Gh,t("a",Yh,[Hh,n(o)]),Oh,t("a",Jh,[Kh,n(o)])]),t("li",null,[Xh,t("a",$h,[Zh,n(o)]),ei,t("a",ti,[oi,n(o)]),ni,t("a",si,[ri,n(o)]),li,t("a",hi,[ii,n(o)])]),t("li",null,[ai,t("a",_i,[di,ci,ui,n(o)]),pi,t("a",fi,[gi,n(o)]),bi,t("a",mi,[ki,n(o)])]),t("li",null,[yi,t("a",wi,[xi,n(o)])]),t("li",null,[vi,t("a",Ai,[Ni,n(o)]),Ii,t("a",Si,[Fi,n(o)])]),t("li",null,[Ui,t("a",Ti,[zi,n(o)])]),t("li",null,[qi,t("a",Ci,[Di,n(o)])])]),Wi,t("ul",null,[t("li",null,[Li,t("a",ji,[Ei,n(o)]),Mi,t("a",Ri,[Pi,Bi,Qi,n(o)]),Vi,t("a",Gi,[Yi,n(o)]),Hi,t("a",Oi,[Ji,n(o)]),Ki,t("a",Xi,[$i,n(o)])]),t("li",null,[Zi,t("a",ea,[ta,n(o)])]),t("li",null,[oa,t("a",na,[sa,n(o)]),ra,t("a",la,[ha,n(o)])]),t("li",null,[ia,t("a",aa,[_a,n(o)])])])])}var fa=r(a,[["render",da],["__file","2022-06-14-nushell_0_64.html.vue"]]);export{fa as default};
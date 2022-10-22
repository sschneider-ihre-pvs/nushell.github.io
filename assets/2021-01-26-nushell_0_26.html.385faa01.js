import{_ as s,r,o as l,c as h,f as a,a as t,b as n,d as e,e as i}from"./app.f7bc99d6.js";const d={},c=t("h1",{id:"nushell-0-26",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-26","aria-hidden":"true"},"#"),e(" Nushell 0.26")],-1),_=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),u=t("p",null,"Today, we're releasing 0.26 of Nu. It's a polish release with lots of improvements.",-1),p=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),f=e("Nu 0.26 is available as "),m={href:"https://github.com/nushell/nushell/releases/tag/0.26.0",target:"_blank",rel:"noopener noreferrer"},g=e("pre-built binaries"),b=e(" or from "),k={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=e("crates.io"),v=e(". If you have Rust installed you can install it using "),y=t("code",null,"cargo install nu",-1),x=e("."),N=i(`<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="rest-support-in-custom-commands-lhkipp-jonathandturner" tabindex="-1"><a class="header-anchor" href="#rest-support-in-custom-commands-lhkipp-jonathandturner" aria-hidden="true">#</a> Rest support in custom commands (LhKipp, jonathandturner)</h2><p>You can now refer to a rest argument in your custom command:</p><div class="language-text ext-text"><pre class="language-text"><code>def my-cmd[...rest:int] {
    echo $rest | math sum
}
</code></pre></div><p>Elements of the rest are referred to with positions, like <code>$rest.1</code> for the 2nd position.</p><h2 id="short-flags-in-custom-commands-lhkipp" tabindex="-1"><a class="header-anchor" href="#short-flags-in-custom-commands-lhkipp" aria-hidden="true">#</a> Short flags in custom commands (LhKipp)</h2><p>You can now also added an optional shorthand flag to longhand flags:</p><div class="language-text ext-text"><pre class="language-text"><code>def foo [--bar(-b): int] {
    echo $bar
}

foo -b 10
foo --bar 10
</code></pre></div><h2 id="improved-build-times-jonathandturner-stormasm" tabindex="-1"><a class="header-anchor" href="#improved-build-times-jonathandturner-stormasm" aria-hidden="true">#</a> Improved build times (jonathandturner, stormasm)</h2><p>When building from scratch, you may now notice that Nushell builds slightly faster. This comes from refactoring large crates into smaller crates and replacing some of our support crates with similar crates that compile faster.</p><h2 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements" aria-hidden="true">#</a> Improvements</h2><p>I hope you like improvements. We got a <em>lot</em> of them this release.</p>`,14),I=e("fdcnred added support for using "),j={href:"https://github.com/nushell/nushell/pull/2973",target:"_blank",rel:"noopener noreferrer"},L=e("multi-byte chars as padding"),T=e(", improved "),W={href:"https://github.com/nushell/nushell/pull/2955",target:"_blank",rel:"noopener noreferrer"},P=e("ansi and char support"),V=e(", improved the output of "),B={href:"https://github.com/nushell/nushell/pull/2959",target:"_blank",rel:"noopener noreferrer"},E=t("code",null,"sys",-1),G=e(", optimized some "),C={href:"https://github.com/nushell/nushell/pull/2937",target:"_blank",rel:"noopener noreferrer"},K=e("regex usage"),$=e(", removed "),A={href:"https://github.com/nushell/nushell/pull/2924",target:"_blank",rel:"noopener noreferrer"},R=t("code",null,"set",-1),S=e(" from Windows built-ins"),Y=e(", added support for "),z={href:"https://github.com/nushell/nushell/pull/2906",target:"_blank",rel:"noopener noreferrer"},D=e("comparing a string and a filepath"),F=e("JosephTLyons removed "),J={href:"https://github.com/nushell/nushell/pull/2970",target:"_blank",rel:"noopener noreferrer"},q=e("unnecessary clones"),H=e(" and "),M={href:"https://github.com/nushell/nushell/pull/2969",target:"_blank",rel:"noopener noreferrer"},O=e("fixed some test macros"),Q=e("andrasio added "),U={href:"https://github.com/nushell/nushell/pull/2965",target:"_blank",rel:"noopener noreferrer"},X=e("column path support to many "),Z=t("code",null,"str",-1),ee=e(" commands"),te=e("jonathandturner added "),oe={href:"https://github.com/nushell/nushell/pull/2964",target:"_blank",rel:"noopener noreferrer"},ne=e("error checking for bad rows in column paths"),se=e(", added "),re={href:"https://github.com/nushell/nushell/pull/2952",target:"_blank",rel:"noopener noreferrer"},le=e("proper flushing of stdout"),he=e(", split "),ae={href:"https://github.com/nushell/nushell/pull/2898",target:"_blank",rel:"noopener noreferrer"},ie=e("nu-cli and nu-engine"),de=e(", treat "),ce={href:"https://github.com/nushell/nushell/pull/2890",target:"_blank",rel:"noopener noreferrer"},_e=e("the startup commands a single script"),ue=e(" which improves startup times, fixed "),pe={href:"https://github.com/nushell/nushell/pull/2893",target:"_blank",rel:"noopener noreferrer"},fe=e("reading/writing of bigint/bigdecimal"),me=e("baoyachi updated "),ge={href:"https://github.com/nushell/nushell/pull/2963",target:"_blank",rel:"noopener noreferrer"},be=e("shadow-rs support"),ke=e(", removed some of the "),we={href:"https://github.com/nushell/nushell/pull/2935",target:"_blank",rel:"noopener noreferrer"},ve=e("git support that was no longer needed"),ye=e("kubouch added the "),xe={href:"https://github.com/nushell/nushell/pull/2953",target:"_blank",rel:"noopener noreferrer"},Ne=e("--skip flag to "),Ie=t("code",null,"nth",-1),je=e("ahkrr fixed "),Le={href:"https://github.com/nushell/nushell/pull/2951",target:"_blank",rel:"noopener noreferrer"},Te=e("variable scopes for "),We=t("code",null,"def",-1),Pe=e(" parameters"),Ve=e("brightly-salty "),Be={href:"https://github.com/nushell/nushell/pull/2949",target:"_blank",rel:"noopener noreferrer"},Ee=e("replaces the dirs/directories supporting crates"),Ge=e("jankeronmes fixed "),Ce={href:"https://github.com/nushell/nushell/pull/2948",target:"_blank",rel:"noopener noreferrer"},Ke=e("Gitpod tests"),$e=e("LhKipp fixed a "),Ae={href:"https://github.com/nushell/nushell/pull/2945",target:"_blank",rel:"noopener noreferrer"},Re=e("parser bug that prevented invocations and ranges from being parsed correctly"),Se=e(", added "),Ye={href:"https://github.com/nushell/nushell/pull/2939",target:"_blank",rel:"noopener noreferrer"},ze=t("code",null,"def",-1),De=e(" documentation"),Fe=e(", updated "),Je={href:"https://github.com/nushell/nushell/pull/2925",target:"_blank",rel:"noopener noreferrer"},qe=t("code",null,"alias",-1),He=e(" docs"),Me=e("DivineGod moved "),Oe={href:"https://github.com/nushell/nushell/pull/2927",target:"_blank",rel:"noopener noreferrer"},Qe=e("keybinding_path to nu-data"),Ue=e("Gymea fixed the "),Xe={href:"https://github.com/nushell/nushell/pull/2924",target:"_blank",rel:"noopener noreferrer"},Ze=e("dirs dependency in nu-engine"),et=e(", improved the "),tt={href:"https://github.com/nushell/nushell/pull/2915",target:"_blank",rel:"noopener noreferrer"},ot=t("code",null,"help",-1),nt=e(" logic when the command does not have a description"),st=e(", fixed "),rt={href:"https://github.com/nushell/nushell/pull/2894",target:"_blank",rel:"noopener noreferrer"},lt=t("code",null,"which",-1),ht=e(" output for aliases"),at=e("gillespiecd added the support for "),it={href:"https://github.com/nushell/nushell/pull/2913",target:"_blank",rel:"noopener noreferrer"},dt=e("reverse ranges"),ct=e("stormasm refactored "),_t={href:"https://github.com/nushell/nushell/pull/2910",target:"_blank",rel:"noopener noreferrer"},ut=e("nu-cli and split off commands into nu-command"),pt=e("TrevorAC99 fixed a "),ft={href:"https://github.com/nushell/nushell/pull/2880",target:"_blank",rel:"noopener noreferrer"},mt=e("rust-embed build breakage"),gt=t("h2",{id:"breaking-changes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),e(" Breaking changes")],-1),bt=t("code",null,"ps",-1),kt=e(" and "),wt=t("code",null,"sys",-1),vt=e(" are now served using a "),yt={href:"https://github.com/nushell/nushell/pull/2954",target:"_blank",rel:"noopener noreferrer"},xt=e("different supporting crate"),Nt=e(". The functionality difference between the old crate and the new crate may mean a lack of fields that existed before, or different values than before (as it may be calculated differently)."),It=e("We removed "),jt={href:"https://github.com/nushell/nushell/pull/2940",target:"_blank",rel:"noopener noreferrer"},Lt=t("code",null,"str set",-1),Tt=e(". This command was one of the first of its style and has since been replaced by more general commands like "),Wt=t("code",null,"update",-1),Pt=e("."),Vt=e("Internal architecture: the Primitive case for "),Bt={href:"https://github.com/nushell/nushell/pull/2887",target:"_blank",rel:"noopener noreferrer"},Et=e("lines has been removed"),Gt=e(". Instead, use strings."),Ct=e("Internal architecture: the Path and Pattern primitives are now called "),Kt={href:"https://github.com/nushell/nushell/pull/2889",target:"_blank",rel:"noopener noreferrer"},$t=e("FilePath and GlobPattern"),At=e(" respectively."),Rt=t("h1",{id:"looking-forward",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),e(" Looking forward")],-1),St=t("p",null,"We've been humbled by the feedback we got on the 0.25 release and appreciate the support. Looking forward, we'll be continuing to polish the features that landed in 0.25 as we prepare for using these features in larger scripts and in custom completion logic.",-1);function Yt(zt,Dt){const o=r("ExternalLinkIcon");return l(),h("div",null,[c,_,u,a(" more "),p,t("p",null,[f,t("a",m,[g,n(o)]),b,t("a",k,[w,n(o)]),v,y,x]),N,t("ul",null,[t("li",null,[I,t("a",j,[L,n(o)]),T,t("a",W,[P,n(o)]),V,t("a",B,[E,n(o)]),G,t("a",C,[K,n(o)]),$,t("a",A,[R,S,n(o)]),Y,t("a",z,[D,n(o)])]),t("li",null,[F,t("a",J,[q,n(o)]),H,t("a",M,[O,n(o)])]),t("li",null,[Q,t("a",U,[X,Z,ee,n(o)])]),t("li",null,[te,t("a",oe,[ne,n(o)]),se,t("a",re,[le,n(o)]),he,t("a",ae,[ie,n(o)]),de,t("a",ce,[_e,n(o)]),ue,t("a",pe,[fe,n(o)])]),t("li",null,[me,t("a",ge,[be,n(o)]),ke,t("a",we,[ve,n(o)])]),t("li",null,[ye,t("a",xe,[Ne,Ie,n(o)])]),t("li",null,[je,t("a",Le,[Te,We,Pe,n(o)])]),t("li",null,[Ve,t("a",Be,[Ee,n(o)])]),t("li",null,[Ge,t("a",Ce,[Ke,n(o)])]),t("li",null,[$e,t("a",Ae,[Re,n(o)]),Se,t("a",Ye,[ze,De,n(o)]),Fe,t("a",Je,[qe,He,n(o)])]),t("li",null,[Me,t("a",Oe,[Qe,n(o)])]),t("li",null,[Ue,t("a",Xe,[Ze,n(o)]),et,t("a",tt,[ot,nt,n(o)]),st,t("a",rt,[lt,ht,n(o)])]),t("li",null,[at,t("a",it,[dt,n(o)])]),t("li",null,[ct,t("a",_t,[ut,n(o)])]),t("li",null,[pt,t("a",ft,[mt,n(o)])])]),gt,t("ul",null,[t("li",null,[bt,kt,wt,vt,t("a",yt,[xt,n(o)]),Nt]),t("li",null,[It,t("a",jt,[Lt,n(o)]),Tt,Wt,Pt]),t("li",null,[Vt,t("a",Bt,[Et,n(o)]),Gt]),t("li",null,[Ct,t("a",Kt,[$t,n(o)]),At])]),Rt,St])}const Jt=s(d,[["render",Yt],["__file","2021-01-26-nushell_0_26.html.vue"]]);export{Jt as default};

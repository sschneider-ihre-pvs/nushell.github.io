(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{568:function(e,t,n){"use strict";n.r(t);var r=n(34),l=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"nushell-0-38"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-38"}},[e._v("#")]),e._v(" Nushell 0.38")]),e._v(" "),n("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),n("p",[e._v("Today, we're releasing 0.38 of Nu. This release includes polish to the user interface, improvements to how columns are passed, lots of bug fixes, and updates on the upcoming engine.")]),e._v(" "),n("h1",{attrs:{id:"where-to-get-it"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),n("p",[e._v("Nu 0.38 is available as "),n("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.38.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),n("OutboundLink")],1),e._v(" or from "),n("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),n("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),n("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),n("p",[e._v("If you want all the goodies, you can install "),n("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),n("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),n("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),n("h1",{attrs:{id:"what-s-new"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),n("h2",{attrs:{id:"quickly-jump-to-a-shell-tw4452852"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#quickly-jump-to-a-shell-tw4452852"}},[e._v("#")]),e._v(" Quickly jump to a shell (tw4452852)")]),e._v(" "),n("p",[e._v("If you've used shells, you've no doubt used the "),n("code",[e._v("n")]),e._v(" and "),n("code",[e._v("p")]),e._v(" commands to quickly jump between them. This can be a big time saver when you're working in multiple directories.")]),e._v(" "),n("p",[e._v("In this release, we've added a "),n("code",[e._v("g")]),e._v(" command that helps you quickly jump to a particular shell. This helps in the cases where you end up with more than two shells open and you already know what shell you want to jump to.")]),e._v(" "),n("h2",{attrs:{id:"additional-improvements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-improvements"}},[e._v("#")]),e._v(" Additional improvements")]),e._v(" "),n("ul",[n("li",[e._v("Improvements in "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4027",target:"_blank",rel:"noopener noreferrer"}},[e._v("updated table cell values"),n("OutboundLink")],1),e._v(" (andrasio)")]),e._v(" "),n("li",[n("code",[e._v("update cells")]),e._v(" command now "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4039",target:"_blank",rel:"noopener noreferrer"}},[e._v("can take a list of columns"),n("OutboundLink")],1),e._v(" (ArtoLord)")]),e._v(" "),n("li",[e._v("You can now also "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4062",target:"_blank",rel:"noopener noreferrer"}},[e._v("pass a list of columns to "),n("code",[e._v("select")]),n("OutboundLink")],1),e._v(" (JoshCheek)")]),e._v(" "),n("li",[e._v("Improvements in "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4036",target:"_blank",rel:"noopener noreferrer"}},[e._v("how html table scraping works"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4043",target:"_blank",rel:"noopener noreferrer"}},[e._v("also"),n("OutboundLink")],1),e._v(" (luccasmmg)")]),e._v(" "),n("li",[e._v("Fix to "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4037",target:"_blank",rel:"noopener noreferrer"}},[e._v("compiling on nightly"),n("OutboundLink")],1),e._v(" (gilescope)")]),e._v(" "),n("li",[e._v("Removed "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4038",target:"_blank",rel:"noopener noreferrer"}},[e._v("unused deps"),n("OutboundLink")],1),e._v(" (gilescope)")]),e._v(" "),n("li",[e._v("Completions now "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4023",target:"_blank",rel:"noopener noreferrer"}},[e._v("can complete inside of an argument"),n("OutboundLink")],1),e._v(" (tw4452852)")]),e._v(" "),n("li",[e._v("We now "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4052",target:"_blank",rel:"noopener noreferrer"}},[e._v("expand tilde when reading plugin directories"),n("OutboundLink")],1),e._v(" (hedonihilist)")]),e._v(" "),n("li",[e._v("We also "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4058",target:"_blank",rel:"noopener noreferrer"}},[e._v("turn off ansi colors when not in a TTY"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Fixed some of the "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4061",target:"_blank",rel:"noopener noreferrer"}},[e._v("wasm deps"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Fixed a "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4022",target:"_blank",rel:"noopener noreferrer"}},[e._v("leak of a "),n("code",[e._v("let")]),e._v("-binding"),n("OutboundLink")],1),e._v(" (Pantonshire)")]),e._v(" "),n("li",[e._v("Use "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4021",target:"_blank",rel:"noopener noreferrer"}},[e._v("SIMD-enabled compiler flags"),n("OutboundLink")],1),e._v(" (aminya)")]),e._v(" "),n("li",[e._v("Updated polars "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4013",target:"_blank",rel:"noopener noreferrer"}},[e._v("dependency to 0.16"),n("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),n("li",[e._v("Updates to how "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4008",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("path join")]),e._v(" works"),n("OutboundLink")],1),e._v(" (kubouch)")]),e._v(" "),n("li",[e._v("Moved "),n("code",[e._v("nu-path")]),e._v(" tests into "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4015",target:"_blank",rel:"noopener noreferrer"}},[e._v("integration tests"),n("OutboundLink")],1),e._v(" (kubouch)")]),e._v(" "),n("li",[e._v("New support for "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4048",target:"_blank",rel:"noopener noreferrer"}},[e._v("converting to column paths"),n("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),n("li",[e._v("Cleanup "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4029",target:"_blank",rel:"noopener noreferrer"}},[e._v("fixes to make tests more resilient"),n("OutboundLink")],1),e._v(" (kubouch)")]),e._v(" "),n("li",[e._v("Internal improvement "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4031",target:"_blank",rel:"noopener noreferrer"}},[e._v("to make working with spans easier"),n("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),n("li",[e._v("Fix to "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4033",target:"_blank",rel:"noopener noreferrer"}},[e._v("gitpod"),n("OutboundLink")],1),e._v(" (Merith-TK)")]),e._v(" "),n("li",[e._v("Fix to "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4034",target:"_blank",rel:"noopener noreferrer"}},[e._v("big int handling in "),n("code",[e._v("to")]),n("OutboundLink")],1),e._v(" (pjmore)")]),e._v(" "),n("li",[e._v("Fixed a "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4040",target:"_blank",rel:"noopener noreferrer"}},[e._v("typo"),n("OutboundLink")],1),e._v(" (lildata)")]),e._v(" "),n("li",[e._v("Fixed "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4051",target:"_blank",rel:"noopener noreferrer"}},[e._v("some typos in the tutor"),n("OutboundLink")],1),e._v(" (hojjatabdollahi)")]),e._v(" "),n("li",[e._v("Removed "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4063",target:"_blank",rel:"noopener noreferrer"}},[e._v("the experimental scrolling support as it had broken"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"engine-q"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engine-q"}},[e._v("#")]),e._v(" Engine-q")]),e._v(" "),n("p",[e._v("Engine-q continues to grow to become the upcoming engine for Nushell. Over the last three weeks, it gained basic filesystem support, improved completions, lots of new internal commands including "),n("code",[e._v("select")]),e._v(", "),n("code",[e._v("ps")]),e._v(", "),n("code",[e._v("sys")]),e._v(", and more.")]),e._v(" "),n("p",[e._v("We've also added a full module system, a new error reporter using "),n("a",{attrs:{href:"https://github.com/zkat/miette",target:"_blank",rel:"noopener noreferrer"}},[e._v("miette"),n("OutboundLink")],1),e._v(", and support for externals.")]),e._v(" "),n("p",[e._v("It's grown to the stage that some of us are starting to dogfood using engine-q as our shell.")]),e._v(" "),n("h1",{attrs:{id:"looking-ahead"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[e._v("#")]),e._v(" Looking ahead")]),e._v(" "),n("p",[e._v("For the next few months, as engine-q matures, we'll be contributing to both Nushell and engine-q. This will help Nushell continue to grow and help support users of Nushell. We'll also use the knowledge we get from support Nushell in how we design these last pieces of engine-q.")]),e._v(" "),n("p",[e._v("As it grows, we'll make a way to help us test engine-q until we're confident it's ready to be moved into place.")])])}),[],!1,null,null,null);t.default=l.exports}}]);
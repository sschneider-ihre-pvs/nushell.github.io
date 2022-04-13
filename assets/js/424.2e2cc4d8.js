(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{910:function(e,n,o){"use strict";o.r(n);var t=o(35),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("h2",{attrs:{id:"nushell-configuration-with-env-nu-and-config-nu"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nushell-configuration-with-env-nu-and-config-nu"}},[e._v("#")]),e._v(" Nushell Configuration with "),o("code",[e._v("env.nu")]),e._v(" and "),o("code",[e._v("config.nu")])]),e._v(" "),o("p",[e._v("Nushell uses a configuration system that loads+runs two Nushell script files at launch time:\nFirst, "),o("code",[e._v("env.nu")]),e._v(", then "),o("code",[e._v("config.nu")]),e._v(".\nPaths to these files can be found by calling "),o("code",[e._v("echo $nu.env-path")]),e._v(" and "),o("code",[e._v("echo $nu.config-path")]),e._v(".\n"),o("code",[e._v("env.nu")]),e._v(" is meant to define the environment variables which are then available within "),o("code",[e._v("config.nu")]),e._v(".\n"),o("code",[e._v("config.nu")]),e._v(" can be used to add definitions, aliases, and more to the global namespace.")]),e._v(" "),o("p",[o("em",[e._v("(You can think of the Nushell config loading sequence as executing two "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"}},[e._v("REPL"),o("OutboundLink")],1),e._v(" lines on startup: "),o("code",[e._v("source /path/to/env.nu")]),e._v(" and "),o("code",[e._v("source /path/to/config.nu")]),e._v(". Therefore, using "),o("code",[e._v("env.nu")]),e._v(" for environment and "),o("code",[e._v("config.nu")]),e._v(" for other config is just a convention.)")])]),e._v(" "),o("p",[e._v("When you launch Nushell without these files set up, Nushell will prompt you to download the "),o("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("default env.nu")]),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("default config.nu")]),o("OutboundLink")],1),e._v(".\nYou can browse the default files for default values of environment variables and a list of all configurable settings.")]),e._v(" "),o("h3",{attrs:{id:"configuring-config"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-config"}},[e._v("#")]),e._v(" Configuring "),o("code",[e._v("$config")])]),e._v(" "),o("p",[e._v("Nushell's main settings are kept in the global "),o("code",[e._v("$config")]),e._v(" variable as a record. This record can be created using:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("let $config = {\n  ...\n}\n")])])]),o("p",[e._v("You can also shadow "),o("code",[e._v("$config")]),e._v(" and update it:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("let $config = ($config | upsert <field name> <field value>)\n")])])]),o("p",[e._v("By convention, this variable is defined in the "),o("code",[e._v("config.nu")]),e._v(" file.")]),e._v(" "),o("h3",{attrs:{id:"environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[e._v("#")]),e._v(" Environment")]),e._v(" "),o("p",[e._v("You can set environment variables for the duration of a Nushell session using "),o("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[o("code",[e._v("let-env")])]),e._v(" calls inside the "),o("code",[e._v("env.nu")]),e._v(" file. For example:")],1),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("let-env FOO = 'BAR'\n")])])]),o("p",[e._v("These are some important variables to look at for Nushell-specific settings:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("LS_COLORS")]),e._v(": Sets up colors per file type in ls")]),e._v(" "),o("li",[o("code",[e._v("PROMPT_COMMAND")]),e._v(": Code to execute for setting up the prompt (block or string)")]),e._v(" "),o("li",[o("code",[e._v("PROMPT_COMMAND_RIGHT")]),e._v(": Code to execute for setting up the right prompt (block)")]),e._v(" "),o("li",[o("code",[e._v('PROMPT_INDICATOR = "〉"')]),e._v(': The indicator printed after the prompt (by default ">"-like Unicode symbol)')]),e._v(" "),o("li",[o("code",[e._v('PROMPT_INDICATOR_VI_INSERT = ": "')])]),e._v(" "),o("li",[o("code",[e._v('PROMPT_INDICATOR_VI_NORMAL = "〉 "')])]),e._v(" "),o("li",[o("code",[e._v('PROMPT_MULTILINE_INDICATOR = "::: "')])])]),e._v(" "),o("h3",{attrs:{id:"color-config-section"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#color-config-section"}},[e._v("#")]),e._v(" Color Config section")]),e._v(" "),o("p",[e._v("You can learn more about setting up colors and theming in the "),o("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/How_To_Coloring_and_Theming.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("associated chapter"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"configuring-nu-as-a-login-shell"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-nu-as-a-login-shell"}},[e._v("#")]),e._v(" Configuring Nu as a login shell")]),e._v(" "),o("p",[e._v("To use Nu as a login shell, you'll need to configure the "),o("code",[e._v("$env")]),e._v(" variable. With this, you'll have enough support to run external commands as a login shell.")]),e._v(" "),o("p",[e._v("You can build the full set of environment variables by running Nu inside of another shell, like Bash. Once you're in Nu, you can run a command like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> env | each { |it| echo $\"let-env ($it.name) = '($it.raw)'\" } | str collect (char nl)\n")])])]),o("p",[e._v("This will print out "),o("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[o("code",[e._v("let-env")])]),e._v(" lines, one for each environment variable along with its setting.")],1),e._v(" "),o("p",[e._v("Next, on some distros you'll also need to ensure Nu is in the /etc/shells list:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> cat /etc/shells\n# /etc/shells: valid login shells\n/bin/sh\n/bin/dash\n/bin/bash\n/bin/rbash\n/usr/bin/screen\n/usr/bin/fish\n/home/jonathan/.cargo/bin/nu\n")])])]),o("p",[e._v("With this, you should be able to "),o("code",[e._v("chsh")]),e._v(" and set Nu to be your login shell. After a logout, on your next login you should be greeted with a shiny Nu prompt.")]),e._v(" "),o("h3",{attrs:{id:"macos-keeping-usr-bin-open-as-open"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#macos-keeping-usr-bin-open-as-open"}},[e._v("#")]),e._v(" macOS: Keeping "),o("code",[e._v("/usr/bin/open")]),e._v(" as "),o("code",[e._v("open")])]),e._v(" "),o("p",[e._v("Some tools (e.g. Emacs) rely on an "),o("code",[e._v("open")]),e._v(" command to open files on Mac.\nAs Nushell has its own "),o("RouterLink",{attrs:{to:"/book/commands/open.html"}},[o("code",[e._v("open")])]),e._v(" command which has different semantics and shadows "),o("code",[e._v("/usr/bin/open")]),e._v(", these tools will error out when trying to use it.\nOne way to work around this is to define a custom command for Nushell's "),o("code",[e._v("open")]),e._v(" and create an alias for the system's "),o("code",[e._v("open")]),e._v(" in your "),o("code",[e._v("config.nu")]),e._v(" file like this:")],1),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("def nuopen [arg, --raw (-r)] { if $raw { open -r $arg } else { open $arg } }\nalias open = ^open\n")])])]),o("h2",{attrs:{id:"prompt-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prompt-configuration"}},[e._v("#")]),e._v(" Prompt configuration")]),e._v(" "),o("p",[e._v("Third-party prompts now have their "),o("RouterLink",{attrs:{to:"/book/3rdpartyprompts.html"}},[e._v("own section in the Nushell book")]),e._v(".")],1)])}),[],!1,null,null,null);n.default=a.exports}}]);
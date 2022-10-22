import{_ as e,o as a,c as s,e as n}from"./app.f7bc99d6.js";const t={},o=n(`<h1 id="system" tabindex="-1"><a class="header-anchor" href="#system" aria-hidden="true">#</a> System</h1><p>Nu offers many commands and plugins that help navigate a command-line interface, interface with the filesystem, and monitor your system.</p><h3 id="view-all-files-in-the-current-directory" tabindex="-1"><a class="header-anchor" href="#view-all-files-in-the-current-directory" aria-hidden="true">#</a> View all files in the current directory</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">file</span>
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502              name               \u2502 type \u2502   size   \u2502    modified
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 CODE_OF_CONDUCT.md              \u2502 file \u2502   3.5 KB \u2502 10 months ago
  1 \u2502 CONTRIBUTING.md                 \u2502 file \u2502   1.8 KB \u2502 10 months ago
  2 \u2502 Cargo.lock                      \u2502 file \u2502 118.4 KB \u2502 2 hours ago
  3 \u2502 Cargo.toml                      \u2502 file \u2502   4.1 KB \u2502 2 hours ago
  4 \u2502 Cargo.toml.old                  \u2502 file \u2502   7.2 KB \u2502 2 weeks ago
  5 \u2502 LICENSE                         \u2502 file \u2502   1.1 KB \u2502 4 months ago
  6 \u2502 Makefile.toml                   \u2502 file \u2502    473 B \u2502 10 months ago
  7 \u2502 README.build.txt                \u2502 file \u2502    193 B \u2502 10 months ago
  8 \u2502 README.md                       \u2502 file \u2502  15.8 KB \u2502 3 days ago
  9 \u2502 bands.txt                       \u2502 file \u2502    156 B \u2502 2 hours ago
 10 \u2502 extra_features_cargo_install.sh \u2502 file \u2502     54 B \u2502 4 months ago
 11 \u2502 files                           \u2502 file \u2502      3 B \u2502 an hour ago
 12 \u2502 payload.json                    \u2502 file \u2502     88 B \u2502 21 minutes ago
 13 \u2502 rustfmt.toml                    \u2502 file \u2502     16 B \u2502 10 months ago
 14 \u2502 urls.json                       \u2502 file \u2502    182 B \u2502 25 minutes ago
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><hr><h3 id="view-all-directories-in-the-current-directory" tabindex="-1"><a class="header-anchor" href="#view-all-directories-in-the-current-directory" aria-hidden="true">#</a> View all directories in the current directory</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">dir</span>
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502   name    \u2502 type \u2502  size   \u2502   modified
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 .azureold \u2502 dir  \u2502     0 B \u2502 3 weeks ago
  1 \u2502 .cargo    \u2502 dir  \u2502     0 B \u2502 10 months ago
  2 \u2502 .vscode   \u2502 dir  \u2502     0 B \u2502 10 months ago
  3 \u2502 crates    \u2502 dir  \u2502 12.3 KB \u2502 3 weeks ago
  4 \u2502 docs      \u2502 dir  \u2502  4.1 KB \u2502 a day ago
  5 \u2502 images    \u2502 dir  \u2502  4.1 KB \u2502 2 weeks ago
  6 \u2502 pkg_mgrs  \u2502 dir  \u2502     0 B \u2502 10 months ago
  7 \u2502 samples   \u2502 dir  \u2502     0 B \u2502 10 months ago
  8 \u2502 src       \u2502 dir  \u2502  4.1 KB \u2502 3 hours ago
  9 \u2502 target    \u2502 dir  \u2502     0 B \u2502 2 weeks ago
 10 \u2502 tests     \u2502 dir  \u2502     0 B \u2502 4 months ago
 11 \u2502 wix       \u2502 dir  \u2502     0 B \u2502 2 weeks ago
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><hr><h3 id="find-processes-sorted-by-greatest-cpu-utilization" tabindex="-1"><a class="header-anchor" href="#find-processes-sorted-by-greatest-cpu-utilization" aria-hidden="true">#</a> Find processes sorted by greatest cpu utilization.</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">|</span> sort-by cpu <span class="token operator">|</span> reverse
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502  pid  \u2502        name        \u2502  cpu  \u2502   mem   \u2502 virtual
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 11928 \u2502 nu.exe             \u2502 32.12 \u2502 47.7 MB \u2502 20.9 MB
 1 \u2502 11728 \u2502 Teams.exe          \u2502 10.71 \u2502 53.8 MB \u2502 50.8 MB
 2 \u2502 21460 \u2502 msedgewebview2.exe \u2502  8.43 \u2502 54.0 MB \u2502 36.8 MB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><hr><h3 id="find-and-kill-a-hanging-process" tabindex="-1"><a class="header-anchor" href="#find-and-kill-a-hanging-process" aria-hidden="true">#</a> Find and kill a hanging process</h3><p>Sometimes a process doesn&#39;t shut down correctly. Using <code>ps</code> it&#39;s fairly easy to find the pid of this process.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where name <span class="token operator">==</span> Notepad2.exe
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 pid  \u2502     name     \u2502 cpu  \u2502   mem   \u2502 virtual
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 9268 \u2502 Notepad2.exe \u2502 0.00 \u2502 32.0 MB \u2502  9.8 MB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>This process can be sent the kill signal in a one-liner:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where name <span class="token operator">==</span> Notepad2.exe <span class="token operator">|</span> get pid.0 <span class="token operator">|</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$in</span>
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 SUCCESS: Sent termination signal to the process with PID 9268.
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Notes:</p><ul><li><code>kill</code> is Linux/Unix specific command, it is not built-in to nu.</li><li>filtering with the <code>where</code> command, as shown above, is case-sensitive.</li></ul><hr><h3 id="pipeline-content-to-clipboard" tabindex="-1"><a class="header-anchor" href="#pipeline-content-to-clipboard" aria-hidden="true">#</a> Pipeline content to clipboard</h3><p><em>Note: clip/clipboard-cli is has not been ported yet in the new version</em></p><p>Add the output of a pipeline to your clipboard. Note, this currently needs to be string output.</p><p>Note that <code>clip</code> is not yet enabled by default. If the output of <code>version | get features</code> contains <code>clipboard-cli</code> then your copy of NuShell contains <code>clip</code>. If <code>clip</code> is not available, then your operating system may provide a command that performs a similar function e.g. <code>clip</code> on Windows or <code>pbcopy</code> on macOS.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>sys <span class="token operator">|</span> get mem <span class="token operator">|</span> to json <span class="token operator">|</span> clip
</code></pre></div><p>Output pasted from <code>clip</code> \u{1F603}</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">34047156000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;free&quot;</span><span class="token operator">:</span> <span class="token number">19571089000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;swap total&quot;</span><span class="token operator">:</span> <span class="token number">7516192000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;swap free&quot;</span><span class="token operator">:</span> <span class="token number">7516192000</span>
<span class="token punctuation">}</span>
</code></pre></div>`,36),p=[o];function r(i,c){return a(),s("div",null,p)}const d=e(t,[["render",r],["__file","system.html.vue"]]);export{d as default};

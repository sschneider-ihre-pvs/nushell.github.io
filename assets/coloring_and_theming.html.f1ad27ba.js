import{_ as r,o as l,c as i,a as e,b as a,w as c,e as s,d as t,r as o}from"./app.72d73513.js";const p={},u=s(`<h1 id="coloring-and-theming-in-nu" tabindex="-1"><a class="header-anchor" href="#coloring-and-theming-in-nu" aria-hidden="true">#</a> Coloring and Theming in Nu</h1><p>Many parts of Nushell&#39;s interface can have their color customized. All of these can be set in the <code>config.nu</code> configuration file. If you see the hash/hashtag/pound mark <code>#</code> in the config file it means the text after it is commented out.</p><ol><li>table borders</li><li>primitive values</li><li>shapes (this is the command line syntax)</li><li>prompt</li><li>LS_COLORS</li></ol><h2 id="table-borders" tabindex="-1"><a class="header-anchor" href="#table-borders" aria-hidden="true">#</a> <code>Table borders</code></h2><hr><p>Table borders are controlled by the <code>table_mode</code> setting in <code>config.nu</code>. Here is an example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    table_mode: rounded
<span class="token punctuation">}</span>
</code></pre></div><p>Here are the current options for <code>table_mode</code>:</p><ul><li><code>rounded</code> # of course, this is the best one \u{1F603}</li><li><code>basic</code></li><li><code>compact</code></li><li><code>compact_double</code></li><li><code>light</code></li><li><code>thin</code></li><li><code>with_love</code></li><li><code>reinforced</code></li><li><code>heavy</code></li><li><code>none</code></li><li><code>other</code></li></ul><h3 id="color-symbologies" tabindex="-1"><a class="header-anchor" href="#color-symbologies" aria-hidden="true">#</a> <code>Color symbologies</code></h3><hr><ul><li><code>r</code> - normal color red&#39;s abbreviation</li><li><code>rb</code> - normal color red&#39;s abbreviation with bold attribute</li><li><code>red</code> - normal color red</li><li><code>red_bold</code> - normal color red with bold attribute</li><li><code>&quot;#ff0000&quot;</code> - &quot;#hex&quot; format foreground color red (quotes are required)</li><li><code>{ fg: &quot;#ff0000&quot; bg: &quot;#0000ff&quot; attr: b }</code> - &quot;full #hex&quot; format foreground red in &quot;#hex&quot; format with a background of blue in &quot;#hex&quot; format with an attribute of bold abbreviated.</li></ul><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> <code>attributes</code></h3><hr><table><thead><tr><th>code</th><th>meaning</th></tr></thead><tbody><tr><td>l</td><td>blink</td></tr><tr><td>b</td><td>bold</td></tr><tr><td>d</td><td>dimmed</td></tr><tr><td>h</td><td>hidden</td></tr><tr><td>i</td><td>italic</td></tr><tr><td>r</td><td>reverse</td></tr><tr><td>s</td><td>strikethrough</td></tr><tr><td>u</td><td>underline</td></tr><tr><td>n</td><td>nothing</td></tr><tr><td></td><td>defaults to nothing</td></tr></tbody></table><h3 id="normal-colors-and-abbreviations" tabindex="-1"><a class="header-anchor" href="#normal-colors-and-abbreviations" aria-hidden="true">#</a> <code>normal colors</code> and <code>abbreviations</code></h3><table><thead><tr><th>code</th><th>name</th></tr></thead><tbody><tr><td>g</td><td>green</td></tr><tr><td>gb</td><td>green_bold</td></tr><tr><td>gu</td><td>green_underline</td></tr><tr><td>gi</td><td>green_italic</td></tr><tr><td>gd</td><td>green_dimmed</td></tr><tr><td>gr</td><td>green_reverse</td></tr><tr><td>gbl</td><td>green_blink</td></tr><tr><td>gst</td><td>green_strike</td></tr><tr><td>lg</td><td>light_green</td></tr><tr><td>lgb</td><td>light_green_bold</td></tr><tr><td>lgu</td><td>light_green_underline</td></tr><tr><td>lgi</td><td>light_green_italic</td></tr><tr><td>lgd</td><td>light_green_dimmed</td></tr><tr><td>lgr</td><td>light_green_reverse</td></tr><tr><td>lgbl</td><td>light_green_blink</td></tr><tr><td>lgst</td><td>light_green_strike</td></tr><tr><td>r</td><td>red</td></tr><tr><td>rb</td><td>red_bold</td></tr><tr><td>ru</td><td>red_underline</td></tr><tr><td>ri</td><td>red_italic</td></tr><tr><td>rd</td><td>red_dimmed</td></tr><tr><td>rr</td><td>red_reverse</td></tr><tr><td>rbl</td><td>red_blink</td></tr><tr><td>rst</td><td>red_strike</td></tr><tr><td>lr</td><td>light_red</td></tr><tr><td>lrb</td><td>light_red_bold</td></tr><tr><td>lru</td><td>light_red_underline</td></tr><tr><td>lri</td><td>light_red_italic</td></tr><tr><td>lrd</td><td>light_red_dimmed</td></tr><tr><td>lrr</td><td>light_red_reverse</td></tr><tr><td>lrbl</td><td>light_red_blink</td></tr><tr><td>lrst</td><td>light_red_strike</td></tr><tr><td>u</td><td>blue</td></tr><tr><td>ub</td><td>blue_bold</td></tr><tr><td>uu</td><td>blue_underline</td></tr><tr><td>ui</td><td>blue_italic</td></tr><tr><td>ud</td><td>blue_dimmed</td></tr><tr><td>ur</td><td>blue_reverse</td></tr><tr><td>ubl</td><td>blue_blink</td></tr><tr><td>ust</td><td>blue_strike</td></tr><tr><td>lu</td><td>light_blue</td></tr><tr><td>lub</td><td>light_blue_bold</td></tr><tr><td>luu</td><td>light_blue_underline</td></tr><tr><td>lui</td><td>light_blue_italic</td></tr><tr><td>lud</td><td>light_blue_dimmed</td></tr><tr><td>lur</td><td>light_blue_reverse</td></tr><tr><td>lubl</td><td>light_blue_blink</td></tr><tr><td>lust</td><td>light_blue_strike</td></tr><tr><td>b</td><td>black</td></tr><tr><td>bb</td><td>black_bold</td></tr><tr><td>bu</td><td>black_underline</td></tr><tr><td>bi</td><td>black_italic</td></tr><tr><td>bd</td><td>black_dimmed</td></tr><tr><td>br</td><td>black_reverse</td></tr><tr><td>bbl</td><td>black_blink</td></tr><tr><td>bst</td><td>black_strike</td></tr><tr><td>ligr</td><td>light_gray</td></tr><tr><td>ligrb</td><td>light_gray_bold</td></tr><tr><td>ligru</td><td>light_gray_underline</td></tr><tr><td>ligri</td><td>light_gray_italic</td></tr><tr><td>ligrd</td><td>light_gray_dimmed</td></tr><tr><td>ligrr</td><td>light_gray_reverse</td></tr><tr><td>ligrbl</td><td>light_gray_blink</td></tr><tr><td>ligrst</td><td>light_gray_strike</td></tr><tr><td>y</td><td>yellow</td></tr><tr><td>yb</td><td>yellow_bold</td></tr><tr><td>yu</td><td>yellow_underline</td></tr><tr><td>yi</td><td>yellow_italic</td></tr><tr><td>yd</td><td>yellow_dimmed</td></tr><tr><td>yr</td><td>yellow_reverse</td></tr><tr><td>ybl</td><td>yellow_blink</td></tr><tr><td>yst</td><td>yellow_strike</td></tr><tr><td>ly</td><td>light_yellow</td></tr><tr><td>lyb</td><td>light_yellow_bold</td></tr><tr><td>lyu</td><td>light_yellow_underline</td></tr><tr><td>lyi</td><td>light_yellow_italic</td></tr><tr><td>lyd</td><td>light_yellow_dimmed</td></tr><tr><td>lyr</td><td>light_yellow_reverse</td></tr><tr><td>lybl</td><td>light_yellow_blink</td></tr><tr><td>lyst</td><td>light_yellow_strike</td></tr><tr><td>p</td><td>purple</td></tr><tr><td>pb</td><td>purple_bold</td></tr><tr><td>pu</td><td>purple_underline</td></tr><tr><td>pi</td><td>purple_italic</td></tr><tr><td>pd</td><td>purple_dimmed</td></tr><tr><td>pr</td><td>purple_reverse</td></tr><tr><td>pbl</td><td>purple_blink</td></tr><tr><td>pst</td><td>purple_strike</td></tr><tr><td>lp</td><td>light_purple</td></tr><tr><td>lpb</td><td>light_purple_bold</td></tr><tr><td>lpu</td><td>light_purple_underline</td></tr><tr><td>lpi</td><td>light_purple_italic</td></tr><tr><td>lpd</td><td>light_purple_dimmed</td></tr><tr><td>lpr</td><td>light_purple_reverse</td></tr><tr><td>lpbl</td><td>light_purple_blink</td></tr><tr><td>lpst</td><td>light_purple_strike</td></tr><tr><td>c</td><td>cyan</td></tr><tr><td>cb</td><td>cyan_bold</td></tr><tr><td>cu</td><td>cyan_underline</td></tr><tr><td>ci</td><td>cyan_italic</td></tr><tr><td>cd</td><td>cyan_dimmed</td></tr><tr><td>cr</td><td>cyan_reverse</td></tr><tr><td>cbl</td><td>cyan_blink</td></tr><tr><td>cst</td><td>cyan_strike</td></tr><tr><td>lc</td><td>light_cyan</td></tr><tr><td>lcb</td><td>light_cyan_bold</td></tr><tr><td>lcu</td><td>light_cyan_underline</td></tr><tr><td>lci</td><td>light_cyan_italic</td></tr><tr><td>lcd</td><td>light_cyan_dimmed</td></tr><tr><td>lcr</td><td>light_cyan_reverse</td></tr><tr><td>lcbl</td><td>light_cyan_blink</td></tr><tr><td>lcst</td><td>light_cyan_strike</td></tr><tr><td>w</td><td>white</td></tr><tr><td>wb</td><td>white_bold</td></tr><tr><td>wu</td><td>white_underline</td></tr><tr><td>wi</td><td>white_italic</td></tr><tr><td>wd</td><td>white_dimmed</td></tr><tr><td>wr</td><td>white_reverse</td></tr><tr><td>wbl</td><td>white_blink</td></tr><tr><td>wst</td><td>white_strike</td></tr><tr><td>dgr</td><td>dark_gray</td></tr><tr><td>dgrb</td><td>dark_gray_bold</td></tr><tr><td>dgru</td><td>dark_gray_underline</td></tr><tr><td>dgri</td><td>dark_gray_italic</td></tr><tr><td>dgrd</td><td>dark_gray_dimmed</td></tr><tr><td>dgrr</td><td>dark_gray_reverse</td></tr><tr><td>dgrbl</td><td>dark_gray_blink</td></tr><tr><td>dgrst</td><td>dark_gray_strike</td></tr></tbody></table><h3 id="hex-format" tabindex="-1"><a class="header-anchor" href="#hex-format" aria-hidden="true">#</a> <code>&quot;#hex&quot;</code> format</h3><hr><p>The &quot;#hex&quot; format is one way you typically see colors represented. It&#39;s simply the <code>#</code> character followed by 6 characters. The first two are for <code>red</code>, the second two are for <code>green</code>, and the third two are for <code>blue</code>. It&#39;s important that this string be surrounded in quotes, otherwise Nushell thinks it&#39;s a commented out string.</p><p>Example: The primary <code>red</code> color is <code>&quot;#ff0000&quot;</code> or <code>&quot;#FF0000&quot;</code>. Upper and lower case in letters shouldn&#39;t make a difference.</p><p>This <code>&quot;#hex&quot;</code> format allows us to specify 24-bit truecolor tones to different parts of Nushell.</p><h2 id="full-hex-format" tabindex="-1"><a class="header-anchor" href="#full-hex-format" aria-hidden="true">#</a> <code>full &quot;#hex&quot;</code> format</h2><hr><p>The <code>full &quot;#hex&quot;</code> format is a take on the <code>&quot;#hex&quot;</code> format but allows one to specify the foreground, background, and attributes in one line.</p><p>Example: <code>{ fg: &quot;#ff0000&quot; bg: &quot;#0000ff&quot; attr: b }</code></p><ul><li>foreground of red in &quot;#hex&quot; format</li><li>background of blue in &quot;#hex&quot; format</li><li>attribute of bold abbreviated</li></ul><h2 id="primitive-values" tabindex="-1"><a class="header-anchor" href="#primitive-values" aria-hidden="true">#</a> <code>Primitive values</code></h2><hr><p>Primitive values are things like <code>int</code> and <code>string</code>. Primitive values and shapes can be set with a variety of color symbologies seen above.</p><p>This is the current list of primitives. Not all of these are configurable. The configurable ones are marked with *.</p><table><thead><tr><th>primitive</th><th>default color</th><th>configurable</th></tr></thead><tbody><tr><td><code>any</code></td><td></td><td></td></tr><tr><td><code>binary</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>block</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>bool</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>cellpath</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>condition</code></td><td></td><td></td></tr><tr><td><code>custom</code></td><td></td><td></td></tr><tr><td><code>date</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>duration</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>expression</code></td><td></td><td></td></tr><tr><td><code>filesize</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>float</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>glob</code></td><td></td><td></td></tr><tr><td><code>import</code></td><td></td><td></td></tr><tr><td><code>int</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>list</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>nothing</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>number</code></td><td></td><td></td></tr><tr><td><code>operator</code></td><td></td><td></td></tr><tr><td><code>path</code></td><td></td><td></td></tr><tr><td><code>range</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>record</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>signature</code></td><td></td><td></td></tr><tr><td><code>string</code></td><td>Color::White.normal()</td><td>*</td></tr><tr><td><code>table</code></td><td></td><td></td></tr><tr><td><code>var</code></td><td></td><td></td></tr><tr><td><code>vardecl</code></td><td></td><td></td></tr><tr><td><code>variable</code></td><td></td><td></td></tr></tbody></table><h4 id="special-primitives-not-really-primitives-but-they-exist-solely-for-coloring" tabindex="-1"><a class="header-anchor" href="#special-primitives-not-really-primitives-but-they-exist-solely-for-coloring" aria-hidden="true">#</a> special &quot;primitives&quot; (not really primitives but they exist solely for coloring)</h4><table><thead><tr><th>primitive</th><th>default color</th><th>configurable</th></tr></thead><tbody><tr><td><code>leading_trailing_space_bg</code></td><td>Color::Rgb(128, 128, 128))</td><td>*</td></tr><tr><td><code>header</code></td><td>Color::Green.bold()</td><td>*</td></tr><tr><td><code>empty</code></td><td>Color::Blue.normal()</td><td>*</td></tr><tr><td><code>row_index</code></td><td>Color::Green.bold()</td><td>*</td></tr><tr><td><code>hints</code></td><td>Color::DarkGray.normal()</td><td>*</td></tr></tbody></table><p>Here&#39;s a small example of changing some of these values.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        separator: purple
        leading_trailing_space_bg: <span class="token string">&quot;#ffffff&quot;</span>
        header: gb
        date: wd
        filesize: c
        row_index: cb
        bool: red
        int: green
        duration: blue_bold
        range: purple
        float: red
        string: white
        nothing: red
        binary: red
        cellpath: cyan
        hints: dark_gray
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Here&#39;s another small example using multiple color syntaxes with some comments.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        separator: <span class="token string">&quot;#88b719&quot;</span> <span class="token comment"># this sets only the foreground color like PR #486</span>
        leading_trailing_space_bg: white <span class="token comment"># this sets only the foreground color in the original style</span>
        header: <span class="token punctuation">{</span> <span class="token comment"># this is like PR #489</span>
            fg: <span class="token string">&quot;#B01455&quot;</span>, <span class="token comment"># note, quotes are required on the values with hex colors</span>
            bg: <span class="token string">&quot;#ffb900&quot;</span>,<span class="token comment"># note, commas are not required, it could also be all on one line</span>
            attr: bli <span class="token comment"># note, there are no quotes around this value. it works with or without quotes</span>
        <span class="token punctuation">}</span>
        date: <span class="token string">&quot;#75507B&quot;</span>
        filesize: <span class="token string">&quot;#729fcf&quot;</span>
        row_index: <span class="token punctuation">{</span>
            <span class="token comment"># note, that this is another way to set only the foreground, no need to specify bg and attr</span>
            fg: <span class="token string">&quot;#e50914&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="shape-values" tabindex="-1"><a class="header-anchor" href="#shape-values" aria-hidden="true">#</a> <code>Shape</code> values</h2><p>As mentioned above, <code>shape</code> is a term used to indicate the syntax coloring.</p><p>Here&#39;s the current list of flat shapes.</p><table><thead><tr><th>shape</th><th>default style</th><th>configurable</th></tr></thead><tbody><tr><td><code>shape_block</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_bool</code></td><td>fg(Color::LightCyan)</td><td>*</td></tr><tr><td><code>shape_custom</code></td><td>bold()</td><td>*</td></tr><tr><td><code>shape_external</code></td><td>fg(Color::Cyan)</td><td>*</td></tr><tr><td><code>shape_externalarg</code></td><td>fg(Color::Green).bold()</td><td>*</td></tr><tr><td><code>shape_filepath</code></td><td>fg(Color::Cyan)</td><td>*</td></tr><tr><td><code>shape_flag</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_float</code></td><td>fg(Color::Purple).bold()</td><td>*</td></tr><tr><td><code>shape_garbage</code></td><td>fg(Color::White).on(Color::Red).bold()</td><td>*</td></tr><tr><td><code>shape_globpattern</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_int</code></td><td>fg(Color::Purple).bold()</td><td>*</td></tr><tr><td><code>shape_internalcall</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_list</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_literal</code></td><td>fg(Color::Blue)</td><td>*</td></tr><tr><td><code>shape_nothing</code></td><td>fg(Color::LightCyan)</td><td>*</td></tr><tr><td><code>shape_operator</code></td><td>fg(Color::Yellow)</td><td>*</td></tr><tr><td><code>shape_range</code></td><td>fg(Color::Yellow).bold()</td><td>*</td></tr><tr><td><code>shape_record</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_signature</code></td><td>fg(Color::Green).bold()</td><td>*</td></tr><tr><td><code>shape_string</code></td><td>fg(Color::Green)</td><td>*</td></tr><tr><td><code>shape_string_interpolation</code></td><td>fg(Color::Cyan).bold()</td><td>*</td></tr><tr><td><code>shape_table</code></td><td>fg(Color::Blue).bold()</td><td>*</td></tr><tr><td><code>shape_variable</code></td><td>fg(Color::Purple)</td><td>*</td></tr></tbody></table><p>Here&#39;s a small example of how to apply color to these items. Anything not specified will receive the default color.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    color_config: <span class="token punctuation">{</span>
        shape_garbage: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#FFFFFF&quot;</span> bg: <span class="token string">&quot;#FF0000&quot;</span> attr: b<span class="token punctuation">}</span>
        shape_bool: green
        shape_int: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#0000ff&quot;</span> attr: b<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="prompt-configuration-and-coloring" tabindex="-1"><a class="header-anchor" href="#prompt-configuration-and-coloring" aria-hidden="true">#</a> <code>Prompt</code> configuration and coloring</h2><p>The Nushell prompt is configurable through these environment variables:</p><ul><li><code>PROMPT_COMMAND</code>: Code to execute for setting up the prompt (block)</li><li><code>PROMPT_COMMAND_RIGHT</code>: Code to execute for setting up the <em>RIGHT</em> prompt (block) (see oh-my.nu in nu_scripts)</li><li><code>PROMPT_INDICATOR</code> = &quot;\u3009&quot;: The indicator printed after the prompt (by default &quot;&gt;&quot;-like Unicode symbol)</li><li><code>PROMPT_INDICATOR_VI_INSERT</code> = &quot;: &quot;</li><li><code>PROMPT_INDICATOR_VI_NORMAL</code> = &quot;v &quot;</li><li><code>PROMPT_MULTILINE_INDICATOR</code> = &quot;::: &quot;</li></ul><p>Example: For a simple prompt one could do this. Note that <code>PROMPT_COMMAND</code> requires a <code>block</code> whereas the others require a <code>string</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> build-string <span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%m/%d/%Y %I:%M:%S%.3f&#39;</span><span class="token punctuation">)</span> <span class="token string">&#39;: &#39;</span> <span class="token punctuation">(</span>pwd <span class="token operator">|</span> path <span class="token function">basename</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
</code></pre></div><p>If you don&#39;t like the default <code>PROMPT_INDICATOR</code> you could change it like this.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env PROMPT_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;&gt; &quot;</span>
</code></pre></div>`,51),h=t("Coloring of the prompt is controlled by the "),b=e("code",null,"block",-1),g=t(" in "),_=e("code",null,"PROMPT_COMMAND",-1),m=t(" where you can write your own custom prompt. We've written a slightly fancy one that has git statuses located in the "),k={href:"https://github.com/nushell/nu_scripts/blob/main/prompt/oh-my.nu",target:"_blank",rel:"noopener noreferrer"},f=t("nu_scripts repo"),y=t("."),v=e("h2",{id:"ls-colors-colors-for-the-ls-command",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ls-colors-colors-for-the-ls-command","aria-hidden":"true"},"#"),t(),e("code",null,"LS_COLORS"),t(" colors for the "),e("code",null,"ls"),t(" command")],-1),q=t("Nushell will respect and use the "),w=e("code",null,"LS_COLORS",-1),C=t(" environment variable setting on Mac, Linux, and Windows. This setting allows you to define the color of file types when you do a "),x=e("code",null,"ls",-1),T=t(". For instance, you can make directories one color, _.md markdown files another color, _.toml files yet another color, etc. There are a variety of ways to color your file types."),O=t("There's an exhaustive list "),$={href:"https://github.com/trapd00r/LS_COLORS",target:"_blank",rel:"noopener noreferrer"},L=t("here"),R=t(", which is overkill, but gives you an rudimentary understanding of how to create a ls_colors file that "),I=e("code",null,"dircolors",-1),M=t(" can turn into a "),P=e("code",null,"LS_COLORS",-1),S=t(" environment variable."),N={href:"https://www.linuxhowto.net/how-to-set-colors-for-ls-command/",target:"_blank",rel:"noopener noreferrer"},F=t("This"),D=t(" is a pretty good introduction to "),A=e("code",null,"LS_COLORS",-1),W=t(". I'm sure you can find many more tutorials on the web."),B=t("I like the "),E=e("code",null,"vivid",-1),H=t(" application and currently have it configured in my "),z=e("code",null,"config.nu",-1),G=t(" like this. You can find "),V=e("code",null,"vivid",-1),U=t(),Y={href:"https://github.com/sharkdp/vivid",target:"_blank",rel:"noopener noreferrer"},X=t("here"),j=t("."),K=s(`<p><code>let-env LS_COLORS = (vivid generate molokai | str trim)</code></p><p>If <code>LS_COLORS</code> is not set, nushell will default to a builtin <code>LS_COLORS</code> setting, based on 8-bit (extended) ANSI colors.</p><h2 id="theming" tabindex="-1"><a class="header-anchor" href="#theming" aria-hidden="true">#</a> Theming</h2><p>Theming combines all the coloring above. Here&#39;s a quick example of one we put together quickly to demonstrate the ability to theme. This is a spin on the <code>base16</code> themes that we see so widespread on the web.</p><p>The key to making theming work is to make sure you specify all themes and colors you&#39;re going to use in the <code>config.nu</code> file <em>before</em> you declare the <code>let config = </code> line.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># let&#39;s define some colors</span>

<span class="token builtin class-name">let</span> base00 <span class="token operator">=</span> <span class="token string">&quot;#181818&quot;</span> <span class="token comment"># Default Background</span>
<span class="token builtin class-name">let</span> base01 <span class="token operator">=</span> <span class="token string">&quot;#282828&quot;</span> <span class="token comment"># Lighter Background (Used for status bars, line number and folding marks)</span>
<span class="token builtin class-name">let</span> base02 <span class="token operator">=</span> <span class="token string">&quot;#383838&quot;</span> <span class="token comment"># Selection Background</span>
<span class="token builtin class-name">let</span> base03 <span class="token operator">=</span> <span class="token string">&quot;#585858&quot;</span> <span class="token comment"># Comments, Invisibles, Line Highlighting</span>
<span class="token builtin class-name">let</span> base04 <span class="token operator">=</span> <span class="token string">&quot;#b8b8b8&quot;</span> <span class="token comment"># Dark Foreground (Used for status bars)</span>
<span class="token builtin class-name">let</span> base05 <span class="token operator">=</span> <span class="token string">&quot;#d8d8d8&quot;</span> <span class="token comment"># Default Foreground, Caret, Delimiters, Operators</span>
<span class="token builtin class-name">let</span> base06 <span class="token operator">=</span> <span class="token string">&quot;#e8e8e8&quot;</span> <span class="token comment"># Light Foreground (Not often used)</span>
<span class="token builtin class-name">let</span> base07 <span class="token operator">=</span> <span class="token string">&quot;#f8f8f8&quot;</span> <span class="token comment"># Light Background (Not often used)</span>
<span class="token builtin class-name">let</span> base08 <span class="token operator">=</span> <span class="token string">&quot;#ab4642&quot;</span> <span class="token comment"># Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted</span>
<span class="token builtin class-name">let</span> base09 <span class="token operator">=</span> <span class="token string">&quot;#dc9656&quot;</span> <span class="token comment"># Integers, Boolean, Constants, XML Attributes, Markup Link Url</span>
<span class="token builtin class-name">let</span> base0a <span class="token operator">=</span> <span class="token string">&quot;#f7ca88&quot;</span> <span class="token comment"># Classes, Markup Bold, Search Text Background</span>
<span class="token builtin class-name">let</span> base0b <span class="token operator">=</span> <span class="token string">&quot;#a1b56c&quot;</span> <span class="token comment"># Strings, Inherited Class, Markup Code, Diff Inserted</span>
<span class="token builtin class-name">let</span> base0c <span class="token operator">=</span> <span class="token string">&quot;#86c1b9&quot;</span> <span class="token comment"># Support, Regular Expressions, Escape Characters, Markup Quotes</span>
<span class="token builtin class-name">let</span> base0d <span class="token operator">=</span> <span class="token string">&quot;#7cafc2&quot;</span> <span class="token comment"># Functions, Methods, Attribute IDs, Headings</span>
<span class="token builtin class-name">let</span> base0e <span class="token operator">=</span> <span class="token string">&quot;#ba8baf&quot;</span> <span class="token comment"># Keywords, Storage, Selector, Markup Italic, Diff Changed</span>
<span class="token builtin class-name">let</span> base0f <span class="token operator">=</span> <span class="token string">&quot;#a16946&quot;</span> <span class="token comment"># Deprecated, Opening/Closing Embedded Language Tags, e.g. &lt;?php ?&gt;</span>

<span class="token comment"># we&#39;re creating a theme here that uses the colors we defined above.</span>

<span class="token builtin class-name">let</span> base16_theme <span class="token operator">=</span> <span class="token punctuation">{</span>
    separator: <span class="token variable">$base03</span>
    leading_trailing_space_bg: <span class="token variable">$base04</span>
    header: <span class="token variable">$base0b</span>
    date: <span class="token variable">$base0e</span>
    filesize: <span class="token variable">$base0d</span>
    row_index: <span class="token variable">$base0c</span>
    bool: <span class="token variable">$base08</span>
    int: <span class="token variable">$base0b</span>
    duration: <span class="token variable">$base08</span>
    range: <span class="token variable">$base08</span>
    float: <span class="token variable">$base08</span>
    string: <span class="token variable">$base04</span>
    nothing: <span class="token variable">$base08</span>
    binary: <span class="token variable">$base08</span>
    cellpath: <span class="token variable">$base08</span>
    hints: dark_gray

    <span class="token comment"># shape_garbage: { fg: $base07 bg: $base08 attr: b} # base16 white on red</span>
    <span class="token comment"># but i like the regular white on red for parse errors</span>
    shape_garbage: <span class="token punctuation">{</span> fg: <span class="token string">&quot;#FFFFFF&quot;</span> bg: <span class="token string">&quot;#FF0000&quot;</span> attr: b<span class="token punctuation">}</span>
    shape_bool: <span class="token variable">$base0d</span>
    shape_int: <span class="token punctuation">{</span> fg: <span class="token variable">$base0e</span> attr: b<span class="token punctuation">}</span>
    shape_float: <span class="token punctuation">{</span> fg: <span class="token variable">$base0e</span> attr: b<span class="token punctuation">}</span>
    shape_range: <span class="token punctuation">{</span> fg: <span class="token variable">$base0a</span> attr: b<span class="token punctuation">}</span>
    shape_internalcall: <span class="token punctuation">{</span> fg: <span class="token variable">$base0c</span> attr: b<span class="token punctuation">}</span>
    shape_external: <span class="token variable">$base0c</span>
    shape_externalarg: <span class="token punctuation">{</span> fg: <span class="token variable">$base0b</span> attr: b<span class="token punctuation">}</span>
    shape_literal: <span class="token variable">$base0d</span>
    shape_operator: <span class="token variable">$base0a</span>
    shape_signature: <span class="token punctuation">{</span> fg: <span class="token variable">$base0b</span> attr: b<span class="token punctuation">}</span>
    shape_string: <span class="token variable">$base0b</span>
    shape_filepath: <span class="token variable">$base0d</span>
    shape_globpattern: <span class="token punctuation">{</span> fg: <span class="token variable">$base0d</span> attr: b<span class="token punctuation">}</span>
    shape_variable: <span class="token variable">$base0e</span>
    shape_flag: <span class="token punctuation">{</span> fg: <span class="token variable">$base0d</span> attr: b<span class="token punctuation">}</span>
    shape_custom: <span class="token punctuation">{</span>attr: b<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># now let&#39;s apply our regular config settings but also apply the &quot;color_config:&quot; theme that we specified above.</span>

<span class="token builtin class-name">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  filesize_metric: <span class="token boolean">true</span>
  table_mode: rounded <span class="token comment"># basic, compact, compact_double, light, thin, with_love, rounded, reinforced, heavy, none, other</span>
  use_ls_colors: <span class="token boolean">true</span>
  color_config: <span class="token variable">$base16_theme</span> <span class="token comment"># &lt;-- this is the theme</span>
  use_grid_icons: <span class="token boolean">true</span>
  footer_mode: always <span class="token comment">#always, never, number_of_rows, auto</span>
  animate_prompt: <span class="token boolean">false</span>
  float_precision: <span class="token number">2</span>
  use_ansi_coloring: <span class="token boolean">true</span>
  filesize_format: <span class="token string">&quot;b&quot;</span> <span class="token comment"># b, kb, kib, mb, mib, gb, gib, tb, tib, pb, pib, eb, eib, zb, zib, auto</span>
  edit_mode: emacs <span class="token comment"># vi</span>
  max_history_size: <span class="token number">10000</span>
  log_level: error
<span class="token punctuation">}</span>
</code></pre></div><p>if you want to go full-tilt on theming, you&#39;ll want to theme all the items I mentioned at the very beginning, including LS_COLORS, and the prompt. Good luck!</p><h3 id="working-on-light-background-terminal" tabindex="-1"><a class="header-anchor" href="#working-on-light-background-terminal" aria-hidden="true">#</a> Working on light background terminal</h3><p>Nushell&#39;s default config file contains a light theme definition, if you are working on a light background terminal, you can applied light theme easily.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># in $nu.config-file</span>
let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  color_config: <span class="token variable">$dark_theme</span>   <span class="token comment"># if you want a light theme, replace \`$dark_theme\` to \`$light_theme\`</span>
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre></div><p>You can just change it to light theme by replacing <code>$dark_theme</code> to <code>$light_theme</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># in $nu.config-file</span>
let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
  color_config: <span class="token variable">$light_theme</span>   <span class="token comment"># if you want a light theme, replace \`$dark_theme\` to \`$light_theme\`</span>
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre></div>`,12);function Q(J,Z){const n=o("ExternalLinkIcon"),d=o("RouterLink");return l(),i("div",null,[u,e("p",null,[h,b,g,_,m,e("a",k,[f,a(n)]),y]),v,e("p",null,[q,w,C,a(d,{to:"/book/commands/ls.html"},{default:c(()=>[x]),_:1}),T]),e("p",null,[O,e("a",$,[L,a(n)]),R,I,M,P,S]),e("p",null,[e("a",N,[F,a(n)]),D,A,W]),e("p",null,[B,E,H,z,G,V,U,e("a",Y,[X,a(n)]),j]),K])}var et=r(p,[["render",Q],["__file","coloring_and_theming.html.vue"]]);export{et as default};
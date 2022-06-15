import{_ as s,o as a,c as n,e}from"./app.47c01eab.js";const o={},t=e(`<h1 id="working-with-lists" tabindex="-1"><a class="header-anchor" href="#working-with-lists" aria-hidden="true">#</a> Working with lists</h1><p>A list is an ordered collection of values. The literal syntax for creating a <code>list</code> is to include expressions in square brackets separated by spaces or commas (for readability). For example, <code>[foo bar baz]</code> or <code>[foo, bar, baz]</code>.</p><p>To iterate over the elements in a list, use the <code>each</code> command. The <code>$it</code> special variable holds the output of the previous command. When used in a block passed to the <code>each</code> command, it holds the current item. To change <code>$it</code> to have <code>$it.index</code> and <code>$it.item</code> values, add the <code>--numbered</code> (<code>-n</code>) flag. For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span>Mark Tami Amanda Jeremy<span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$names</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> build-string <span class="token string">&quot;Hello, &quot;</span> <span class="token variable">$it</span> <span class="token string">&quot;!&quot;</span> <span class="token punctuation">}</span>
<span class="token comment"># Outputs &quot;Hello, Mark!&quot; and three more similar lines.</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$names</span> <span class="token operator">|</span> each -n <span class="token punctuation">{</span> build-string <span class="token punctuation">(</span><span class="token variable">$it</span>.index + <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;)&quot;</span> <span class="token variable">$it</span>.item <span class="token punctuation">}</span>
</code></pre></div><p>The <code>split row</code> command creates a list from a string based on a delimiter. For example, <code>let colors = $(echo &quot;red,green,blue&quot; | split row &quot;,&quot;)</code> creates the list <code>[red green blue]</code>.</p><p>To access a list item at a given index, use <code>$name.index</code> where <code>$name</code> is a variable that holds a list. For example, the second element in the list above which is &quot;Tami&quot; can be accessed with <code>$names.1</code>.</p><p>The <code>length</code> command returns the number of items in a list. For example, <code>echo [red green blue] | length</code> outputs <code>3</code>.</p><p>The <code>empty?</code> command determines whether a string, list, or table is empty. It can be used with lists as follows:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red green blue<span class="token punctuation">]</span>
<span class="token operator">=</span> <span class="token variable">$colors</span> <span class="token operator">|</span> empty? <span class="token comment"># false</span>

<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">=</span> <span class="token variable">$colors</span> <span class="token operator">|</span> empty? <span class="token comment"># true</span>
</code></pre></div><p>The <code>in</code> and <code>not in</code> operators are used to test whether a value is in a list. Operators can only be used in &quot;math mode&quot;. One way to enter math mode is to begin an expression with <code>=</code>. For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red green blue<span class="token punctuation">]</span>
<span class="token string">&#39;blue&#39;</span> <span class="token keyword">in</span> <span class="token variable">$colors</span> <span class="token comment"># true</span>
<span class="token string">&#39;yellow&#39;</span> <span class="token keyword">in</span> <span class="token variable">$colors</span> <span class="token comment"># false</span>
</code></pre></div><p>The <code>where</code> command can be used to create a subset of a list. The following example gets all the colors whose names end in &quot;e&quot;.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>red orange yellow green blue purple<span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> where <span class="token punctuation">(</span>echo <span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&#39;e&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># The block passed to where must evaluate to a boolean.</span>
<span class="token comment"># This outputs the list [orange blue purple].</span>

<span class="token builtin class-name">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">7</span> <span class="token number">10</span> <span class="token number">8</span> <span class="token number">6</span> <span class="token number">7</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> where <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># [10 8]</span>
</code></pre></div><p>The <code>any?</code> command determines if any item in a list matches a given condition. For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Do any color names end with &quot;e&quot;?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> any? <span class="token punctuation">(</span>echo <span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span> <span class="token comment"># true</span>

<span class="token comment"># Is the length of any color name less than 3?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> any? <span class="token punctuation">(</span>echo <span class="token variable">$it</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token comment"># false</span>

<span class="token comment"># Are any scores greater than 7?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> any? <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># true</span>

<span class="token comment"># Are any scores odd?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> any? <span class="token variable">$it</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token comment"># true</span>
</code></pre></div><p>The <code>all?</code> command determines if every item in a list matches a given condition. For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Do all color names end with &quot;e&quot;?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> all? <span class="token punctuation">(</span>echo <span class="token variable">$it</span> <span class="token operator">|</span> str ends-with <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span> <span class="token comment"># false</span>

<span class="token comment"># Is the length of all color names greater than or equal to 3?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token operator">|</span> all? <span class="token punctuation">(</span>echo <span class="token variable">$it</span> <span class="token operator">|</span> str length<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">3</span> <span class="token comment"># true</span>

<span class="token comment"># Are all scores greater than 7?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> all? <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">7</span> <span class="token comment"># false</span>

<span class="token comment"># Are all scores even?</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> all? <span class="token variable">$it</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token comment"># false</span>
</code></pre></div><p>The <code>append</code> command appends a single value to the end of a list. The <code>prepend</code> command prepends a single value to the beginning of a list. For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>yellow green<span class="token punctuation">]</span>
<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">(</span>echo <span class="token variable">$colors</span> <span class="token operator">|</span> prepend red<span class="token punctuation">)</span>
<span class="token builtin class-name">let</span> colors <span class="token operator">=</span> <span class="token punctuation">(</span>echo <span class="token variable">$colors</span> <span class="token operator">|</span> append purple<span class="token punctuation">)</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$colors</span> <span class="token comment"># [red yellow green purple]</span>
</code></pre></div><p>The <code>flatten</code> command creates a new list from an existing list by adding items in nested lists to the top-level list. This can be called multiple times to flatten lists nested at any depth. For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">4</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token comment"># [1 2 3 4 5 6]</span>

<span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">5</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> flatten <span class="token operator">|</span> flatten <span class="token operator">|</span> flatten <span class="token comment"># [1 2 3 4 5 6 7 8]</span>
</code></pre></div><p>The <code>reduce</code> command computes a single value from a list. It takes a block which can use the special variables <code>$acc</code> (for accumulator) and <code>$it</code> (for item). To specify an initial value for <code>$acc</code>, use the <code>--fold</code> (<code>-f</code>) flag. To change <code>$it</code> to have <code>$it.index</code> and <code>$it.item</code> values, add the <code>--numbered</code> (<code>-n</code>) flag. This also changes <code>$acc</code> to have a <code>$acc.item</code> value. For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> scores <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">8</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;total =&quot;</span> <span class="token punctuation">(</span>echo <span class="token variable">$scores</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span> <span class="token variable">$acc</span> + <span class="token variable">$it</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 15</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;total =&quot;</span> <span class="token punctuation">(</span>echo <span class="token variable">$scores</span> <span class="token operator">|</span> math <span class="token function">sum</span><span class="token punctuation">)</span> <span class="token comment"># easier approach, same result</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;product =&quot;</span> <span class="token punctuation">(</span>echo <span class="token variable">$scores</span> <span class="token operator">|</span> reduce --fold <span class="token number">1</span> <span class="token punctuation">{</span> <span class="token variable">$acc</span> * <span class="token variable">$it</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment"># 96</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$scores</span> <span class="token operator">|</span> reduce -n <span class="token punctuation">{</span> <span class="token variable">$acc</span>.item + <span class="token variable">$it</span>.index * <span class="token variable">$it</span>.item <span class="token punctuation">}</span>
<span class="token comment"># This should produce 0*3 + 1*8 + 2*4 = 16.</span>
<span class="token comment"># But see https://github.com/nushell/nushell/issues/3298.</span>
</code></pre></div><p>The <code>wrap</code> command converts list to a table. Each list value will be converted to a separate row with single column:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> zones <span class="token operator">=</span> <span class="token punctuation">[</span>UTC CET Europe/Moscow Asia/Yekaterinburg<span class="token punctuation">]</span>

<span class="token comment"># Show world clock for selected time zones</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$zones</span> <span class="token operator">|</span> wrap <span class="token string">&#39;Zone&#39;</span> <span class="token operator">|</span> insert Time <span class="token punctuation">{</span><span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> to-timezone <span class="token variable">$it</span>.Zone <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y.%m.%d %H:%M&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre></div>`,25),p=[t];function c(l,r){return a(),n("div",null,p)}var u=s(o,[["render",c],["__file","working_with_lists.html.vue"]]);export{u as default};
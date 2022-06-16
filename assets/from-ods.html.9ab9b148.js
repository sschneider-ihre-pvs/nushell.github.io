import{_ as n,o as s,c as a,e}from"./app.46eb55cb.js";const p={},t=e(`<p>Parses OpenDocument Spreadsheet binary data into a table. <code>open</code> calls <code>from ods</code> automatically when the file extension is <code>ods</code>. Use this command when <code>open</code> is unable to guess the file type from the extension.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> abc.ods
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 Sheet1
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>table <span class="token number">26</span> rows<span class="token punctuation">]</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> abc.ods --raw
Length: <span class="token number">4816</span> <span class="token punctuation">(</span>0x12d0<span class="token punctuation">)</span> bytes
0000:   <span class="token number">50</span> 4b 03 04  <span class="token number">14</span> 00 00 00  00 00 00 00  00 00 <span class="token number">85</span> 6c   PK<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.l
0010:   <span class="token number">39</span> 8a 2e 00  00 00 2e 00  00 00 08 00  00 00 6d <span class="token number">69</span>   <span class="token number">9</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>.mi
0020:   6d <span class="token number">65</span> <span class="token number">74</span> <span class="token number">79</span>  <span class="token number">70</span> <span class="token number">65</span> <span class="token number">61</span> <span class="token number">70</span>  <span class="token number">70</span> 6c <span class="token number">69</span> <span class="token number">63</span>  <span class="token number">61</span> <span class="token number">74</span> <span class="token number">69</span> 6f   metypeapplicatio
<span class="token punctuation">..</span>.
12a0:   00 <span class="token number">61</span> <span class="token number">10</span> 00  00 4d <span class="token number">45</span> <span class="token number">54</span>  <span class="token number">41</span> 2d <span class="token number">49</span> 4e  <span class="token number">46</span> 2f 6d <span class="token number">61</span>   .a<span class="token punctuation">..</span>.META-INF/ma
12b0:   6e <span class="token number">69</span> <span class="token number">66</span> <span class="token number">65</span>  <span class="token number">73</span> <span class="token number">74</span> 2e <span class="token number">78</span>  6d 6c <span class="token number">50</span> 4b  05 06 00 00   nifest.xmlPK<span class="token punctuation">..</span><span class="token punctuation">..</span>
12c0:   00 00 06 00  06 00 5a 01  00 00 <span class="token number">60</span> <span class="token number">11</span>  00 00 00 00   <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>Z<span class="token punctuation">..</span>.\`<span class="token punctuation">..</span><span class="token punctuation">..</span>.
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> abc.ods --raw <span class="token operator">|</span> from ods
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 Sheet1
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token punctuation">[</span>table <span class="token number">26</span> rows<span class="token punctuation">]</span>
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,5),o=[t];function c(u,l){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","from-ods.html.vue"]]);export{k as default};
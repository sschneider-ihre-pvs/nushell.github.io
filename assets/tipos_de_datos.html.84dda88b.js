import{_ as e,o as a,c as s,e as o}from"./app.f7bc99d6.js";const d={},t=o('<h1 id="tipos-de-datos" tabindex="-1"><a class="header-anchor" href="#tipos-de-datos" aria-hidden="true">#</a> Tipos de datos</h1><p>Tradicionalmente, comandos shell de Unix se han comunidado entre ellos usando cadenas de texto. Un comando generar\xEDa de salida texto a trav\xE9s de la salida est\xE1ndar (com\xFAnmente abreviada &#39;stdout&#39;) y el otro leer texto a trav\xE9s de la entrada est\xE1ndar (o &#39;stdin&#39;).</p><p>Podemos pensar de este tipo de comunicaci\xF3n como basada en cadenas.</p><p>Nu adopta este enfoque para sus comandos y lo hacer crecer para incluir otro tipos de datos. Actualmente, Nu incluye soporte para dos tipos de datos: simple y estructurada.</p><h2 id="datos-simples" tabindex="-1"><a class="header-anchor" href="#datos-simples" aria-hidden="true">#</a> Datos simples</h2><p>Al igual que muchos lenguajes de programaci\xF3n, Nu modela los datos usando un conjunto de tipos de datos simples y estructurados. Tipos de dato simple incluye enteros, decimales, cadenas, booleanos, fechas, y rutas. Tambi\xE9n incluye un tipo especial para tama\xF1os de archivos.</p><h3 id="enteros" tabindex="-1"><a class="header-anchor" href="#enteros" aria-hidden="true">#</a> Enteros</h3><p>Enteros (o redondos). Ejemplos incluye 1, 5, y 100.</p><h3 id="decimales" tabindex="-1"><a class="header-anchor" href="#decimales" aria-hidden="true">#</a> Decimales</h3><p>N\xFAmeros decimales son n\xFAmeros con alg\xFAn component fraccional. Ejemplos incluye 1.5, 2.0, y 15.333.</p><h3 id="cadenas" tabindex="-1"><a class="header-anchor" href="#cadenas" aria-hidden="true">#</a> Cadenas</h3><p>Las cadenas son la manera fundamental de representar texto. Se indican con doble comillas. Ejemplos incluye &quot;Pedro&quot;, &quot;minombre.txt&quot;, and &quot;Lynchburg, VA&quot;.</p><p>Cadenas en Nu son compatibles con Unicode de manera predeterminada, por lo que puedes pasar texto UTF-8 con facilidad.</p><h3 id="booleanos" tabindex="-1"><a class="header-anchor" href="#booleanos" aria-hidden="true">#</a> Booleanos</h3><p>Booleanos son el estado de verdadero o falso. En vez de escribir el valor directamente, com\xFAnmente es el resultado de una comparaci\xF3n.</p><h3 id="fechas" tabindex="-1"><a class="header-anchor" href="#fechas" aria-hidden="true">#</a> Fechas</h3><p>Fechas y horas se mantienen juntas en el valor tipo de dato Date. Valores Date usados por el sistema reconocen la zona horaria y de manera predeterminada usa la zona horaria UTC.</p><h3 id="rutas" tabindex="-1"><a class="header-anchor" href="#rutas" aria-hidden="true">#</a> Rutas</h3><p>Las rutas son una forma independiente de la plataforma para representar rutas de archivos en el sistema operativo dado. Ejemplos incluyen: /usr/bin y C:\\Users\\archivo.txt.</p><h3 id="bytes" tabindex="-1"><a class="header-anchor" href="#bytes" aria-hidden="true">#</a> Bytes</h3><p>Tama\xF1os de archivos se mantienen dentro de un tipo especial de entero llamado bytes. Ejemplos incluye 100, 15kb, y 100mb.</p><h2 id="datos-estructurados" tabindex="-1"><a class="header-anchor" href="#datos-estructurados" aria-hidden="true">#</a> Datos estructurados</h2><p>Los datos estructurados se construyen a partir de los datos simples. Por ejemplo, en lugar de un solo entero, datos estructurados nos ofrece una manera de representar m\xFAltiples enteros en el mismo valor. Esta es una lista actual de los tipos de dato estructurados soportadas: objetos, datos binarios, listas, y bloques.</p><h3 id="objetos" tabindex="-1"><a class="header-anchor" href="#objetos" aria-hidden="true">#</a> Objetos</h3><p>El tipo de dato object representa lo que observar\xEDas en una fila de datos de una tabla. Tiene diferentes elementos de datos y cada elemento de dato se le asigna un nombre de columna.</p><h3 id="datos-binarios" tabindex="-1"><a class="header-anchor" href="#datos-binarios" aria-hidden="true">#</a> Datos binarios</h3><p>Datos binarios como los datos de un archivo de imagen, es un grupo de bytes sin formato.</p><h3 id="listas" tabindex="-1"><a class="header-anchor" href="#listas" aria-hidden="true">#</a> Listas</h3><p>Las listas pueden tener m\xE1s de un valor. Esto les permite ser un buen contenedor de filas de datos de una tabla.</p><h3 id="bloques" tabindex="-1"><a class="header-anchor" href="#bloques" aria-hidden="true">#</a> Bloques</h3><p>Bloques representan bloques de c\xF3digo en Nu. Por ejemplo, en el comando <code>where { $it.size &gt; 10kb }</code> el bloque es la porci\xF3n contenida en las llaves, <code>{ $it.size &gt; 10kb }</code>. Los bloques son una manera \xFAtil de representar c\xF3digo que puede ser ejecutado para cada fila de datos.</p>',31),r=[t];function n(i,l){return a(),s("div",null,r)}const u=e(d,[["render",n],["__file","tipos_de_datos.html.vue"]]);export{u as default};

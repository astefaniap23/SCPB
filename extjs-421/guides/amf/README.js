Ext.data.JsonP.amf({"guide":"<h1 id='amf-section-using-amf-data-in-ext-js'>Using AMF Data in Ext JS</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/amf-section-working-with-amf-packets'>Working with AMF Packets</a></li>\n<li><a href='#!/guide/amf-section-loading-records-into-a-grid'>Loading records into a Grid</a></li>\n</ol>\n</div>\n\n<p><a href=\"http://en.wikipedia.org/wiki/Action_Message_Format\">Action Message Format</a> (AMF)\nis a compact binary format used by Adobe Flash/Flex to serialize ActionScript\nobject graphs.  AMF is typically used to encode messages that are sent between\nan Adobe Flash client and a remote service.  AMF is only a serialization\ntechnology, not a transport, so AMF encoded binary data can be used with any\ntransport such as HTTP or HTTPS.  This guide will show you how to use Ext JS and\nAJAX to consume AMF data sent over HTTP right inside a web browser, with no need\nfor a Flash plugin.  This guide assumes you are already somewhat familiar with\nthe Ext JS <a href=\"#/guide/data\">Data Package</a> and <a href=\"#/guide/grid\">Grids</a>.</p>\n\n<h2 id='amf-section-working-with-amf-packets'>Working with AMF Packets</h2>\n\n<p>AMF-encoded object graphs are typically formatted as an \"AMF Packet\".  Multiple\nheaders and messages are batched into a single AMF Packet.  Lets take a look at\nhow to use Ext JS to decode an AMF Packet and access its headers and messages.\nFirst lets make an AJAX request to a url that returns binary AMF Packet data.</p>\n\n<pre><code><a href=\"#!/api/Ext.Ajax-method-request\" rel=\"Ext.Ajax-method-request\" class=\"docClass\">Ext.Ajax.request</a>({\n    url: 'some/url',\n    binary: true,\n    success: function(response) {\n        console.log(response.responseBytes);\n    }\n});\n</code></pre>\n\n<p>You should see a byte array in your console - either a Uint8Array if it is\nsupported by your browser or just an Array of numbers.  These are the raw\nbytes that compose the AMF Packet. It is important to remember to set the\n<a href=\"#!/api/Ext.data.Connection-cfg-binary\" rel=\"Ext.data.Connection-cfg-binary\" class=\"docClass\">binary</a> config to true on the AJAX request\nso that the response will be interpreted as binary data and the <code>responseBytes</code>\nproperty will be set on the response object.</p>\n\n<p>Now that we have the raw binary data we need to decode it so that we can do\nsomething useful with it.  To do this we use the <a href=\"#!/api/Ext.data.amf.Packet\" rel=\"Ext.data.amf.Packet\" class=\"docClass\">Ext.data.amf.Packet</a>\nclass.  Inside the success callback function add the following code to construct\na new Packet:</p>\n\n<pre><code>var packet = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.data.amf.Packet\" rel=\"Ext.data.amf.Packet\" class=\"docClass\">Ext.data.amf.Packet</a>');\n</code></pre>\n\n<p>This gives us an empty AMF Packet object to work with.  The Packet class contains\nall the logic required to decode the binary AMF-formatted data. To decode the\nAMF byte array, simply pass it to the Packet's\n<a href=\"#!/api/Ext.data.amf.Packet-method-decode\" rel=\"Ext.data.amf.Packet-method-decode\" class=\"docClass\">decode</a> method:</p>\n\n<pre><code>packet.decode(response.responseBytes);\n</code></pre>\n\n<p>We now have a fully decoded AMF Packet. The decoded data can be accessed using\nthe following properties on the packet object:</p>\n\n<ul>\n<li><code><a href=\"#!/api/Ext.data.amf.Packet-property-version\" rel=\"Ext.data.amf.Packet-property-version\" class=\"docClass\">version</a></code> - The Packet's AMF version</li>\n<li><code><a href=\"#!/api/Ext.data.amf.Packet-property-headers\" rel=\"Ext.data.amf.Packet-property-headers\" class=\"docClass\">headers</a></code> - The Packet's headers</li>\n<li><code><a href=\"#!/api/Ext.data.amf.Packet-property-messages\" rel=\"Ext.data.amf.Packet-property-messages\" class=\"docClass\">messages</a></code> - The Packet's messages</li>\n</ul>\n\n\n<h2 id='amf-section-loading-records-into-a-grid'>Loading records into a Grid</h2>\n\n<p>Now that we know how to use the AMF Packet, lets learn how to load some\nAMF-encoded records into an Ext JS <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> using an\n<a href=\"#!/api/Ext.data.amf.Proxy\" rel=\"Ext.data.amf.Proxy\" class=\"docClass\">AMF Proxy</a> and <a href=\"#!/api/Ext.data.amf.Reader\" rel=\"Ext.data.amf.Reader\" class=\"docClass\">AMF Reader</a>\nand display those records in a <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Grid</a>. In this example we\nwill load records from an AMF Packet containing a list of pangrams in several\nlanguages.  Start by defining the <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Pangram', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    fields: [\n        { name: 'language', type: 'string' },\n        { name: 'text', type: 'string' }\n    ]\n});\n</code></pre>\n\n<p>Next create a <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> to contain the Model instances.\nConfigure the store with an <a href=\"#!/api/Ext.data.amf.Proxy\" rel=\"Ext.data.amf.Proxy\" class=\"docClass\">AMF Proxy</a>.  The AMF Proxy\nuses an <a href=\"#!/api/Ext.data.amf.Reader\" rel=\"Ext.data.amf.Reader\" class=\"docClass\">AMF Reader</a> by default so there is no need\nto explicitly configure the reader unless you need to change some of the reader's\ndefault configurations.</p>\n\n<pre><code>var store = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>', {\n    model: 'Pangram',\n    proxy: {\n        type: 'amf',\n        url: 'some/url',\n    },\n    autoLoad: true\n});\n</code></pre>\n\n<p>Finally create a <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Grid</a> that is bound to the store we just\ncreated:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a>', {\n    title: 'AMF0 Pangrams',\n    height: 350,\n    width: 700,\n    store: store,\n    columns: [\n        { text: 'Language', dataIndex: 'language', width: 130 },\n        { text: 'Pangram', dataIndex: 'text', flex: 1 }\n    ],\n    renderTo: <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>()\n});\n</code></pre>\n\n<p><p><img src=\"guides/amf/amf-grid.png\" alt=\"AMF Grid\" width=\"702\" height=\"352\"></p></p>\n\n<p>The above code makes some assumptions about where the raw record data are located\nwithin the packet.  By default <a href=\"#!/api/Ext.data.amf.Reader\" rel=\"Ext.data.amf.Reader\" class=\"docClass\">AMF Reader</a> expects\nthe Packet's first message body to be an array of objects containing the record\ndata.  But this is not always the case - sometimes you need to tell the reader\nwhere to find the records in the message body.  This is done using the reader's\n<a href=\"#!/api/Ext.data.reader.Reader-cfg-root\" rel=\"Ext.data.reader.Reader-cfg-root\" class=\"docClass\">root</a> configuration property:</p>\n\n<pre><code>proxy: {\n    type: 'amf',\n    url: 'some/url',\n    reader: {\n        type: 'amf',\n        root: 'foo.bar'\n    }\n}\n</code></pre>\n\n<p>This tells the reader that the message body is an object containing a property\nnamed \"foo\" which is an object containing a property named \"bar\", and the value\nof \"bar\" is an array of raw record data objects.</p>\n\n<p>AMF Packets can contain multiple messages. You can configure which message the\nreader should look for the records in using the\n<a href=\"#!/api/Ext.data.amf.Reader-cfg-messageIndex\" rel=\"Ext.data.amf.Reader-cfg-messageIndex\" class=\"docClass\">messageIndex</a> config:</p>\n\n<pre><code>reader: {\n    type: 'amf',\n    messageIndex: 42\n}\n</code></pre>\n\n<p>For a working example and full source code see <a href=\"#/example/grid/amf-grid.html\">AMF Grid Example</a></p>\n","title":"Loading data from an AMF data source"});
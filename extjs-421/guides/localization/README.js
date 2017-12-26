Ext.data.JsonP.localization({"guide":"<h1 id='localization-section-localization-in-ext-js'>Localization in Ext JS</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/localization-section-ext%27s-localization-files'>Ext's Localization Files</a></li>\n<li><a href='#!/guide/localization-section-utilizing-localization'>Utilizing Localization</a></li>\n<li><a href='#!/guide/localization-section-internationalizing-your-ext-js-extensions'>Internationalizing your Ext JS extensions</a></li>\n<li><a href='#!/guide/localization-section-localizing-your-own-app'>Localizing your own app</a></li>\n</ol>\n</div>\n\n<hr />\n\n<p>Communicating with users in a language that they understand and with\nconventions that they're used to is vital.  Ext JS comes bundled with\nlocalization files for over 40 languages ranging from Indonesian to\nMacedonian, and it's dead-easy to set up.</p>\n\n<h2 id='localization-section-ext%27s-localization-files'>Ext's Localization Files</h2>\n\n<p>In the root directory of your copy of Ext JS there is a folder called\n<code>locale</code>. This contains all the bundled translations of Ext JS\nframework. You can inspect the contents of each to see exactly what\nthey contain. Here's an excerpt from the Spanish localization file:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>(\"Ext.locale.es.form.field.Number\", {\n    override: \"<a href=\"#!/api/Ext.form.field.Number\" rel=\"Ext.form.field.Number\" class=\"docClass\">Ext.form.field.Number</a>\",\n    decimalSeparator: \",\",\n    decimalPrecision: 2,\n    minText: \"El valor mínimo para este campo es de {0}\",\n    maxText: \"El valor máximo para este campo es de {0}\",\n    nanText: \"{0} no es un número válido\"\n});\n</code></pre>\n\n<p>You can see that it applies an override to <a href=\"#!/api/Ext.form.field.Number\" rel=\"Ext.form.field.Number\" class=\"docClass\">Ext.form.field.Number</a> which applies the Spanish strings to error\nmessages and specifies Spanish decimal separator. Using an override\nensures that these properties will be overridden in class prototype\nright after the class itself is loaded.</p>\n\n<h2 id='localization-section-utilizing-localization'>Utilizing Localization</h2>\n\n<p>The simplest way to localize Ext JS is to just stick an additional\n<code>&lt;script&gt;</code> tag to your HTML:</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;!-- Ensure we're using UTF-8 --&gt;\n    &lt;meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"&gt;\n    &lt;title&gt;Localization example&lt;/title&gt;\n    &lt;!-- Main Ext JS files --&gt;\n    &lt;link rel=\"stylesheet\" type=\"text/css\" href=\"extjs/resources/css/ext-all.css\"&gt;\n    &lt;script type=\"text/javascript\" src=\"extjs/ext-debug.js\"&gt;&lt;/script&gt;\n    &lt;!-- Include the translations --&gt;\n    &lt;script type=\"text/javascript\" src=\"extjs/locale/ext-lang-es.js\"&gt;&lt;/script&gt;\n\n    &lt;script type=\"text/javascript\" src=\"app.js\"&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;body&gt;\n\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p>Switching between different languages can be accomplished by server\nside code that generates an appropriate <code>&lt;script&gt;</code> tag based on the\ncurrently selected locale.</p>\n\n<p>And before you even ask for it - you really should refresh the entire\npage when switching locales.  Ext JS does not support changing the\nlocale on the fly (like updating the texts inside already rendered\ncomponents).</p>\n\n<h2 id='localization-section-internationalizing-your-ext-js-extensions'>Internationalizing your Ext JS extensions</h2>\n\n<p>When you write a custom component or plugin to Ext JS and want to\nshare it with a world take a moment to ensure it follows Ext JS\npractices for localization.  At very minimum every text string that's\nshown to user should be defined as a property:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>(\"Ext.ux.Weather, {\n    sunText: \"It's a nice sunny day\",\n    rainText: \"Bad weather, don't go out\",\n    // ...other code...\n});\n</code></pre>\n\n<p>Also watch out when you're dealing with dates - every language tends\nto have it's own way of writing them.  So when your extension renders\na date, provide a config option to specify the format.</p>\n\n<p>This way users of your extension can easily override the\nlocale-specific parts.</p>\n\n<p>But even better is to build your extension so that it doesn't need any\nadditional localization at all.  Make use of the messages already\ntranslated in Ext JS itself (e.g. use <code>Ext.MessageBox.buttonText.ok</code>\nwhen rendering \"OK\" button).  Default to the default date format when\nrendering dates (<code>Ext.util.Format.dateFormat</code>).</p>\n\n<h2 id='localization-section-localizing-your-own-app'>Localizing your own app</h2>\n\n<p>Ext JS doesn't enforce any particular approach to localization.  It's\nonly the framework itself that uses the approach outlined here.  Feel\nfree to localize your app in whichever way feels best for you.</p>\n\n<p>If you're unsure you can use the same approach that Ext JS uses or you\ncould give a try to good-old GNU Gettext.</p>\n","title":"Localization"});
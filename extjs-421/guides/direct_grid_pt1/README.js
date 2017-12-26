Ext.data.JsonP.direct_grid_pt1({"guide":"<h1 id='direct_grid_pt1-section-mapping-a-grid-to-a-mysql-table-using-direct-and-php'>Mapping a Grid to a MySQL table using Direct and PHP</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/direct_grid_pt1-section-i.-introduction'>I. Introduction</a></li>\n<li><a href='#!/guide/direct_grid_pt1-section-ii.-getting-started'>II. Getting Started</a></li>\n<li><a href='#!/guide/direct_grid_pt1-section-iii.-setting-up'>III. Setting Up</a></li>\n<li><a href='#!/guide/direct_grid_pt1-section-iv.-writing-the-application'>IV. Writing the Application</a></li>\n<li><a href='#!/guide/direct_grid_pt1-section-v.-conclusion'>V. Conclusion</a></li>\n</ol>\n</div>\n\n<p>Duration: around 40 minutes</p>\n\n<h2 id='direct_grid_pt1-section-i.-introduction'>I. Introduction</h2>\n\n<p>In this tutorial we will be looking at how to build a table, or 'grid', that receives its data from a MySQL database. It's aimed at people who have some familiarity with JavaScript, PHP and MySQL but are new to the Ext JS framework. By the end of the tutorial, we'll have a grid component that looks like this:</p>\n\n<p><p><img src=\"guides/direct_grid_pt1/grid-full.png\" alt=\"The finished product\" width=\"575\" height=\"388\"></p></p>\n\n<h2 id='direct_grid_pt1-section-ii.-getting-started'>II. Getting Started</h2>\n\n<h3 id='direct_grid_pt1-section-1.1-requirements'>1.1 Requirements</h3>\n\n<p>You will need:</p>\n\n<ul>\n<li>A server with PHP (5.3+) and MySQL (4.1.3+) installed</li>\n<li>A browser compatible with Ext JS 4</li>\n<li>A text editor</li>\n</ul>\n\n\n<p>For the best debugging experience I recommend Firefox with the Firebug add-on.</p>\n\n<h3 id='direct_grid_pt1-section-1.2-what-is-ext-grid%3F'>1.2 What is Ext Grid?</h3>\n\n<p>A grid in Ext JS is \"essentially a supercharged <code>&lt;table&gt;</code>\" to quote <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">its documentation</a>. It allows you to manipulate data by sorting and filtering, and to fetch new data in, so it's much more dynamic than your run-of-the-mill table. As you can imagine, this allows you to do some pretty cool things.</p>\n\n<h3 id='direct_grid_pt1-section-1.3-what-is-ext-direct%3F'>1.3 What is Ext Direct?</h3>\n\n<p>Good question, Ext Direct provides a way to communicate between the browser and server using less code than traditional methods (i.e. PHP) to actually <em>do</em> stuff with your data.</p>\n\n<h3 id='direct_grid_pt1-section-1.4-what%27s-the-benefit-of-doing-this%3F'>1.4 What's the Benefit of Doing This?</h3>\n\n<p>There are a number of benefits to using Ext Direct to handle your data:</p>\n\n<ul>\n<li>It's platform agnostic, so it doesn't matter whether you're using PHP, Java or C# to serve the data.</li>\n<li>You can serve <em>as much</em> data as you want, with no negative client-side impacts.</li>\n<li>It has <a href=\"#!/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">3 types of 'providers'</a>, that communicate with the server in different ways, we will be using the <code>RemotingProvider</code>.</li>\n<li>It can bundle your AJAX requests into a single request (by default, all those sent in the first 10ms) and so the server only has to send back one response.</li>\n</ul>\n\n\n<p>Now that we've all been persuaded, lets get to building it.</p>\n\n<h2 id='direct_grid_pt1-section-iii.-setting-up'>III. Setting Up</h2>\n\n<p>Following the best practices for an Ext application highlighted in <a href=\"http://docs.sencha.com/ext-js/4-0/#/guide/getting_started\">this guide</a> I've set up a skeleton directory structure with an index.html file and a blank JavaScript file called grid.js.</p>\n\n<p>index.html</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n    &lt;meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"&gt;\n    &lt;title&gt;List of Velociraptor Owners&lt;/title&gt;\n    &lt;!--Ext JS--&gt;\n    &lt;link rel=\"stylesheet\" type=\"text/css\" href=\"resources/css/ext-all.css\"&gt;\n    &lt;script src=\"extjs/ext-all-debug.js\"&gt;&lt;/script&gt;\n    &lt;!--Application JS--&gt;\n    &lt;script src=\"grid.js\"&gt;&lt;/script&gt;\n    &lt;script src=\"php/api.php\"&gt;&lt;/script&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p>Because we're using the HTML5 document type we're allowed to omit the type in a script tag, it assumes that all <code>&lt;script&gt;</code> tags will be JavaScript which helps cut down our bytes. However, you've probably also noticed the peculiar api.php file, surely that can't be JavaScript? All will be explained in time.</p>\n\n<p>Now that the index is pointing to all the right places, unzip your copy of Ext 4 into a folder called 'extjs'. We are now ready to start building the application!</p>\n\n<h2 id='direct_grid_pt1-section-iv.-writing-the-application'>IV. Writing the Application</h2>\n\n<p>We'll start by writing the JavaScript portion to give us something to look at when we start trying to debug the PHP side of the app. Within grid.js we first want to declare what parts of the Ext framework we'll be dealing with, this will probably be a familiar process to ActionScript and Java users but for the rest of us, it's very simple. Because I've seen into the future, I know that we'll be using Ext Direct, Ext Data and Ext Grid, to display the data so we require the following:</p>\n\n<p>grid.js</p>\n\n<pre><code><a href=\"#!/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a>([\n    'Ext.direct.*',\n    'Ext.data.*',\n    'Ext.grid.*'\n]);\n</code></pre>\n\n<p>The asterisk ('<code>*</code>') in this context loads all of the classes within those areas of Ext JS, we could optimize it at the end by only requiring the classes that we use. We then want to make a pretty grid to look at, but first, a slight digression.</p>\n\n<h3 id='direct_grid_pt1-section-4.1-models-and-stores%2C-an-overview'>4.1 Models and Stores, An Overview</h3>\n\n<p>(You can skip this section if you're already familiar with the concept of models and stores)</p>\n\n<p>Models and stores are key to presenting users with dynamic data. A 'model' is a blueprint of what a store will look like. Say you have a menu of beers, the model would define what headings to expect, in this case: type (ale, stout, etc.), name, price, and ABV (alcohol by volume). The 'store' will then contain the individual properties, so, Type: 'Ale', Name: 'Jewel', Price: $4.00, ABV: 5.0%. Stores can be represented in many ways and come from many sources but ultimately end up being converted to JSON for use with Ext.</p>\n\n<h3 id='direct_grid_pt1-section-4.2-back-to-the-app'>4.2 Back to the App</h3>\n\n<p>To create a model we write the following:</p>\n\n<p>grid.js</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('PersonalInfo', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    fields: ['id', 'name', 'address', 'state']\n});\n</code></pre>\n\n<p>What we've done here is give it a name (PersonalInfo), told it that this <em>extends</em> <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>, (thankfully we don't need to write all of the necessary code to get a model working, we simply tell it that this extends what the Ext JS framework already provides) and told it what fields (headings) we're going to present to it. All exciting stuff, I'm sure you'll agree.</p>\n\n<p>Now, we don't want the JavaScript that renders the grid to initiate before the framework has loaded, this is increasingly important with browsers running JavaScript at near-native speeds. To get around this, we want to use <code><a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a></code>, this will wait for Ext to be fully loaded and the DOM to be fully initialized before we start trying to put our grid on it.</p>\n\n<p>grid.js</p>\n\n<pre><code><a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a>(function() {\n    // create the Grid\n    <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a>', {\n        store: {\n            model: 'PersonalInfo',\n            autoLoad: true,\n            proxy: {\n                type: 'direct',\n            }\n        },\n        columns: [{\n            dataIndex: 'id',\n            width: 50,\n            text: 'ID'\n        }],\n        height: 450,\n        width: 700,\n        title: 'Velociraptor Owners',\n        renderTo: <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>()\n    });\n});\n</code></pre>\n\n<p>Once the DOM is ready we use <code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></code> to make a new grid. A grid requires a store, otherwise it won't have a purpose (and it's never nice to have no purpose, is it?), so we give it a store that uses the model we defined earlier with the name of 'PersonalInfo'; and use the proxy type <code>direct</code> to tell it that we'll be using Ext Direct. A proxy tells the application how we'll be communicating with the store, there are many different types which you can find more information on <a href=\"#!/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">in the documentation</a>.</p>\n\n<p>We then gave the grid a single column (wrapped in an array as we'll be adding more later) with the properties of width and text. The only part that may be unfamiliar here is <code>dataIndex</code>, this is what binds the column with the store so it has to be the same name. After that, everything should be self-explanatory apart from <code>renderTo: <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>()</code>, this is a function that gets the body of the document and will attach the grid to it. Remember that we wrap it all in the <code>onReady</code> function? That is so that we don't try to attach it to <code>&lt;body&gt;</code> before <code>&lt;body&gt;</code> exists!</p>\n\n<p>Hopefully, your efforts will be rewarded with this when you refresh the page.</p>\n\n<p><p><img src=\"guides/direct_grid_pt1/grid-bare.png\" alt=\"The grid laid bare\" width=\"752\" height=\"500\"></p></p>\n\n<h3 id='direct_grid_pt1-section-4.3-working-with-mysql'>4.3 Working with MySQL</h3>\n\n<p>Now that we have a basic grid working, we'll move on to serving up our data. What data you ask? Good question, we'll be listing everyone that owns a Velociraptor in the USA, you'd expect this to be a fairly small dataset&mdash;it's not. <a href=\"guides/direct_grid_pt1/grid-tutorial.sql\">Download and execute this .sql file</a> and you'll know who to steer clear of. Disclaimer, all of this data has been automatically generated by a dummy data script, any correlations with reality is purely coincidental.</p>\n\n<p>If all went well, you should now have a MySQL table populated with 1,000 records which we'll display in our grid.</p>\n\n<p>In the root directory of our app, create a folder called 'php' followed by another one inside it called 'classes'. Within classes create a file called 'QueryDatabase.php'.</p>\n\n<p>We'll be taking advantage of PHP's MySQLi extension which works with MySQL 4.1.3 and above (any version released after mid-2004 will work fine).</p>\n\n<p>First, we'll make a new class and declare some variables:</p>\n\n<p>QueryDatabase.php</p>\n\n<pre><code>&lt;?php\nclass QueryDatabase\n{\n    private $_db;\n    protected $_result;\n    public $results;\n\n}\n</code></pre>\n\n<p><em>Within</em> this class, we want to make a function that will connect to the database, (note that you don't write the ..., it's to denote that this block of code continues on from the last one).</p>\n\n<p>QueryDatabase.php</p>\n\n<pre><code>...\n\npublic function __construct()\n{\n    $_db = new mysqli('host', 'username' ,'password', 'database');\n\n    if ($_db-&gt;connect_error) {\n        die('Connection Error (' . $_db-&gt;connect_errno . ') ' . $_db-&gt;connect_error);\n    }\n\n    return $_db;\n}\n</code></pre>\n\n<p>On line 10, replace 'hostname', 'username', 'password' and 'database' with your own configuration. If this all looks a little alien to you, yet you're used to PHP, it uses a style called 'object-oriented' programming, you can <a href=\"https://encrypted.google.com/search?q=object+oriented+php\">read more about it online</a>. The <code>-&gt;</code> is called an arrow operator and gets a method (aka a function) from that object. So we're calling the <code>connect_error</code> and <code>connect_errno</code> functions from the <code>mysqli</code> object in this script with the arrow operators.</p>\n\n<p>We also want to close the database connection once we're done with it which is simply enough done with:</p>\n\n<p>QueryDatabase.php</p>\n\n<pre><code>...\n\npublic function __destruct()\n{\n    $_db = $this-&gt;__construct();\n    $_db-&gt;close();\n\n    return $this;\n}\n</code></pre>\n\n<p>Notice in the parenthesis we've put <code>$_db</code>? This means that this function is going to expect a parameter passed to it, i.e. it's expecting <code>$_db</code> otherwise it'll have nothing to close!</p>\n\n<p>Now we've got a connection to our database opening and closing we can query it. To do this, we'll create a new function called getResults.</p>\n\n<p>QueryDatabase.php</p>\n\n<pre><code>...\n\npublic function getResults($params)\n{\n    $_db = $this-&gt;openConnection();\n\n    $_result = $_db-&gt;query(\"SELECT id, name, address, state FROM owners\") or die('Connect Error (' . $_db-&gt;connect_errno . ') ' . $_db-&gt;connect_error);\n\n    $results = array();\n\n    while ($row = $_result-&gt;fetch_assoc()) {\n        array_push($results, $row);\n    }\n\n    $this-&gt;closeConnection($_db);\n\n    return $results;\n}\n</code></pre>\n\n<p>That's all for our first PHP file! To recap, we declared some variables at the top of the class and then made 3 functions that will help us as we expand our application. The first function defines the database to use with the credentials needed to access it and fails if it cannot connect (hopefully providing a detailed error message). The second is a simple function that closes the database connection.</p>\n\n<p>The third function uses the first function to open a connection and queries the database for all of the records from the fields 'id', 'name', 'address' and 'state'. We could have used the wildcard operator (<code>*</code>) to do the same, but in larger tables you'll probably only want to reveal a subset of fields so it's better to specify them individually. We then push all of the results into a an array called <code>$results</code> in a while statement, close the connection to the database once we're done and return the results. Not too bad so far, right?</p>\n\n<h3 id='direct_grid_pt1-section-4.4-the-complicated-bit'>4.4 The Complicated Bit</h3>\n\n<p>Going up a level to the php directory, create a new file called config.php and write the following:</p>\n\n<p>config.php</p>\n\n<pre><code>&lt;?php\n$API = array(\n    'QueryDatabase'=&gt;array(\n        'methods'=&gt;array(\n            'getResults'=&gt;array(\n                'len'=&gt;1\n            ),\n        )\n    )\n);\n</code></pre>\n\n<p>This exposes what methods (functions) are available to our Ext application to call on the server. At the moment, there's only one that we want to reveal, the 'getResults' method we just created.</p>\n\n<p>That's all there is to our config.php file for now.</p>\n\n<p>To make sure the correct methods are called, we need a router. The router is where the calls from Ext Direct get routed to the correct class using a Remote Procedure Call (RPC).</p>\n\n<p>router.php</p>\n\n<pre><code>&lt;?php\nrequire('config.php');\n\nclass Action {\n    public $action;\n    public $method;\n    public $data;\n    public $tid;\n}\n</code></pre>\n\n<p>Here, we've declared a class and required our config file that contains which methods we expose in our API.</p>\n\n<p>router.php</p>\n\n<pre><code>...\n\n$isForm = false;\n$isUpload = false;\nif(isset($HTTP_RAW_POST_DATA)) {\n    header('Content-Type: text/javascript');\n    $data = json_decode($HTTP_RAW_POST_DATA);\n} else if (isset($_POST['extAction'])) { // form post\n    $isForm = true;\n    $isUpload = $_POST['extUpload'] == 'true';\n    $data = new Action();\n    $data-&gt;action = $_POST['extAction'];\n    $data-&gt;method = $_POST['extMethod'];\n    $data-&gt;tid = isset($_POST['extTID']) ? $_POST['extTID'] : null; // not set for upload\n    $data-&gt;data = array($_POST, $_FILES);\n} else {\n    die('Invalid request.');\n}\n\nfunction doRpc($cdata){\n    global $API;\n    try {\n        if(!isset($API[$cdata-&gt;action])){\n            throw new Exception('Call to undefined action: ' . $cdata-&gt;action);\n        }\n\n        $action = $cdata-&gt;action;\n        $a = $API[$action];\n\n        doAroundCalls($a['before'], $cdata);\n\n        $method = $cdata-&gt;method;\n        $mdef = $a['methods'][$method];\n        if(!$mdef){\n            throw new Exception(\"Call to undefined method: $method on action $action\");\n        }\n        doAroundCalls($mdef['before'], $cdata);\n\n        $r = array(\n            'type'=&gt;'rpc',\n            'tid'=&gt;$cdata-&gt;tid,\n            'action'=&gt;$action,\n            'method'=&gt;$method\n        );\n\n        require_once(\"classes/$action.php\");\n        $o = new $action();\n        if (isset($mdef['len'])) {\n            $params = isset($cdata-&gt;data) &amp;&amp; is_array($cdata-&gt;data) ? $cdata-&gt;data : array();\n        } else {\n            $params = array($cdata-&gt;data);\n        }\n\n        $r['result'] = call_user_func_array(array($o, $method), $params);\n\n        doAroundCalls($mdef['after'], $cdata, $r);\n        doAroundCalls($a['after'], $cdata, $r);\n    }\n    catch(Exception $e){\n        $r['type'] = 'exception';\n        $r['message'] = $e-&gt;getMessage();\n        $r['where'] = $e-&gt;getTraceAsString();\n    }\n    return $r;\n}\n</code></pre>\n\n<p>The doRpc function will provide important information on our data and responses from the server. Basically, if you refresh the page and have a console open you'll see something that looks like this:</p>\n\n<p><p><img src=\"guides/direct_grid_pt1/firebug-post-result.png\" alt=\"Sending a request to router.php and getting a response\" width=\"743\" height=\"231\"></p></p>\n\n<p>You can see the results of our $r variable clearly laid out. If you've made an error the result is where the PHP error text will be, but when everything's gone to plan you'll see all of the records that we have added to our database stored as JSON. The PHP that converts it to JSON is:</p>\n\n<pre><code>...\n\nfunction doAroundCalls(&amp;$fns, &amp;$cdata, &amp;$returnData=null){\n    if(!$fns){\n        return;\n    }\n    if(is_array($fns)){\n        foreach($fns as $f){\n            $f($cdata, $returnData);\n        }\n    }else{\n        $fns($cdata, $returnData);\n    }\n}\n\n$response = null;\nif (is_array($data)) {\n    $response = array();\n    foreach($data as $d){\n        $response[] = doRpc($d);\n    }\n} else {\n    $response = doRpc($data);\n}\nif ($isForm &amp;&amp; $isUpload) {\n    echo '&lt;html&gt;&lt;body&gt;&lt;textarea&gt;';\n    echo json_encode($response);\n    echo '&lt;/textarea&gt;&lt;/body&gt;&lt;/html&gt;';\n} else {\n    echo json_encode($response);\n}\n</code></pre>\n\n<p>Then create a file called 'api.php', remember when we pointed our index.html file to a PHP file but told it that it was JavaScript? This is where the magic happens.</p>\n\n<p>api.php</p>\n\n<pre><code>&lt;?php\nrequire('config.php');\nheader('Content-Type: text/javascript');\n\n// convert API config to <a href=\"#!/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">Ext.Direct</a> spec\n$actions = array();\nforeach ($API as $aname=&gt;&amp;$a) {\n    $methods = array();\n    foreach ($a['methods'] as $mname=&gt;&amp;$m) {\n        if (isset($m['len'])) {\n            $md = array(\n                'name'=&gt;$mname,\n                'len'=&gt;$m['len']\n            );\n        } else {\n            $md = array(\n                'name'=&gt;$mname,\n                'params'=&gt;$m['params']\n            );\n        }\n        if (isset($m['formHandler']) &amp;&amp; $m['formHandler']) {\n            $md['formHandler'] = true;\n        }\n        $methods[] = $md;\n    }\n    $actions[$aname] = $methods;\n}\n\n$cfg = array(\n    'url'=&gt;'php/router.php',\n    'type'=&gt;'remoting',\n    'actions'=&gt;$actions\n);\n\necho '<a href=\"#!/api/Ext-method-ns\" rel=\"Ext-method-ns\" class=\"docClass\">Ext.ns</a>(\"Ext.app\"); Ext.app.REMOTING_API = ';\n\necho json_encode($cfg);\necho ';';\n</code></pre>\n\n<p>The last two files are taken straight from the example in the Ext Direct directory, made by people much smarter than I (hence the sparse comments).</p>\n\n<p>It uses the config.php file we made earlier, sets it's header to JavaScript, so any output the browser will expect to be JavaScript. It then proceeds to turn our config and router PHP files into JSON so the right method is called when Ext Direct calls it. Further information can be found on the <a href=\"http://www.sencha.com/products/extjs/extdirect\">Ext Direct specification page</a>.</p>\n\n<h3 id='direct_grid_pt1-section-4.5-get-it-together'>4.5 Get it Together</h3>\n\n<p>With the hard part now over, the final bits to finish our application are found back in grid.js, we need to tell the proxy what function to call to get the results, tell Ext Direct what type of provider we're using and add the other columns to our grid.</p>\n\n<p>To accomplish this, add the following to the relevant parts of grid.js.</p>\n\n<p>grid.js</p>\n\n<pre><code><a href=\"#!/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a>(function() {\n    //add a provider to our grid\n    <a href=\"#!/api/Ext.direct.Manager-method-addProvider\" rel=\"Ext.direct.Manager-method-addProvider\" class=\"docClass\">Ext.direct.Manager.addProvider</a>(Ext.app.REMOTING_API);\n    ...\n\n    //add directFn to our proxy\n    proxy: {\n        type: 'direct',\n        directFn: QueryDatabase.getResults\n    },\n\n    //add the other columns\n    columns: [{\n        dataIndex: 'id',\n        width: 50,\n        text: 'ID'\n    }, {\n        dataIndex: 'name',\n        flex: 1,\n        text: 'Name'\n    }, {\n        dataIndex: 'address',\n        flex: 1.3,\n        text: 'Address'\n    }, {\n        dataIndex: 'state',\n        flex: 1,\n        text: 'State'\n    }],\n</code></pre>\n\n<p>We finally tell our application to use the Remoting Provider and <code>directFn</code> calls <code>getResults</code> as soon as it's run to add our data to the grid.</p>\n\n<p>The columns are largely the same as we did initially apart from <code>flex</code>, this dynamically sizes the field relative to the others so a <code>flex: 1.3</code> will be slightly larger than <code>flex: 1</code> and, together, fill all of the remaining space left over by our fixed width id column.</p>\n\n<p>Give it a refresh and&hellip; congratulations! You now have a fully populated grid, if you hover over or click any of the headings you will see that you are able to dynamically sort by any of the fields.</p>\n\n<p><p><img src=\"guides/direct_grid_pt1/grid-full.png\" alt=\"The completed grid in all of it's glory\" width=\"575\" height=\"388\"></p></p>\n\n<h2 id='direct_grid_pt1-section-v.-conclusion'>V. Conclusion</h2>\n\n<p>In this tutorial, we've learnt the basics of how to utilize Ext Direct while getting experience with how to create Ext grids as well as writing some pretty advanced PHP. Take some time to experiment with other configuration options by <a href=\"#!/api\">looking at the documentation</a> and getting a feel for what can be achieved and what customizations can be made.</p>\n\n<p>For reference, <a href=\"guides/direct_grid_pt1/reference-files.zip\">here are the working source files</a>.</p>\n\n<p>In the next tutorial, we'll harness a bit more of Ext Direct's power to run server-side functions to create, update and delete from our MySQL database building on top of our current work.</p>\n","title":"Ext Direct and Grid Part 1"});
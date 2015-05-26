/// <reference path="resources.js" />

var loadScripts = {};
(function () {
    
var loadResourceScript = function () {
    loadScript('/javascripts/resources.js', resourceLoadCallback);
};  
    
var resourceLoadCallback = function () {
    loadAllScripts();
};

var loadScript = function (url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    // script.onreadystatechange = callback;
     script.onload = callback;

    // Fire the loading
    head.appendChild(script);
};

var loadStylesheets = function (url)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    // script.onreadystatechange = callback;
    // script.onload = callback;

    // Fire the loading
    head.appendChild(link);
};

var loadAllScripts = function () {
    
// assign all style sheets which would include on the head section of the index.html page.	
 var listOfStyleSheets = [];
 listOfStyleSheets = resources.sheets;

// assign all js scripts which would include on the head section of the index.html page.	
 var listOfScripts = [];
 listOfScripts = resources.scripts;
    
    listOfStyleSheets.forEach(function(sheet) {
       loadStylesheets(sheet.url);
    });
    
    listOfScripts.forEach(function (script) {
        loadScript(script.url);
    });
};



loadScripts.loadResourceScript = loadResourceScript;

})(loadScripts);

loadScripts.loadResourceScript();
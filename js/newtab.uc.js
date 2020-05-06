
(function(){
    var newTabUrl = "file:///D:/config/start-page/index.html";
    
    AboutNewTab.newTabURL = newTabUrl;
    
    Object.defineProperty(AboutNewTab, 'newTabURL', {
        get: function(){ return newTabUrl; },
        set: function(val){}
    });
})();

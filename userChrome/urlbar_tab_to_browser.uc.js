/*
how I hate this company
now they added a forced tabindex on most of the ui
obviously, no one would ever rely on this. let's change it!
*/

(function() {
    let urlbar = document.getElementById("urlbar");
    
    urlbar.addEventListener("keydown", function(e){
        if(e.keyCode == 9){
            e.target.ownerDocument.defaultView.gBrowser.selectedTab.linkedBrowser.focus();
            e.preventDefault();
            e.stopPropagation();
        }
    });
})();

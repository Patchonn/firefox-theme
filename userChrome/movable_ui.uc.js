// movable ui

(function() {
    let movable = [
        //"PanelUI-button",
        "back-button",
        "forward-button",
        "urlbar-container",
        //"nav-bar-overflow-button"
    ];
    
    for(let id of movable) {
        try {
            document.getElementById(id).setAttribute("removable", "true");
        } catch(e) {}
    }
})();


(async function() {
    if (location != 'chrome://browser/content/browser.xul')
        return;  
    /*
    let tabs = document.getElementById("tabbrowser-tabs");
    let newtab = document.getAnonymousElementByAttribute(tabs, "anonid", "tabs-newtab-button");
    newtab.removeAttribute("command");
    newtab.removeAttribute("oncommand");
    newtab.setAttribute("onclick", "BrowserOpenTab()");
    */
    let newtab_full = document.getElementById("new-tab-button");
    newtab_full.removeAttribute("command");
    newtab_full.removeAttribute("oncommand");
    newtab_full.setAttribute("onclick", "BrowserOpenTab()");
}());

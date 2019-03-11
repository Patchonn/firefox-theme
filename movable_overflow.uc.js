(function() {
  if (location != 'chrome://browser/content/browser.xul')
    return;  
  var overflowButton = document.getElementById('nav-bar-overflow-button');
 
  if (!CustomizableUI.getPlacementOfWidget('ucjs_nav-bar-overflow-button')) { 
    try {
      CustomizableUI.createWidget({
        id: 'ucjs_nav-bar-overflow-button',
        type: 'custom',
        defaultArea: CustomizableUI.AREA_NAVBAR,
        onBuild: function(aDocument) {
          var toolbaritem = aDocument.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'toolbaritem');
          toolbaritem.id = 'ucjs_nav-bar-overflow-button';
          toolbaritem.className = 'chromeclass-toolbar-additional';          
          toolbaritem.setAttribute('label', 'Firefox Menu');          
          return toolbaritem;            
        }
      });
      if (!CustomizableUI.getPlacementOfWidget('ucjs_nav-bar-overflow-button')) {     
        overflowButton.style.display = 'none';
        return; 
      };        
    } catch(e) {        
      overflowButton.style.display = 'none';
      return;      
    };    
  };

  setTimeout(function() { 
    document.getElementById('ucjs_nav-bar-overflow-button').appendChild(overflowButton);       
    overflowButton.setAttribute('consumeanchor', 'ucjs_nav-bar-overflow-button');
    /*
    overflowButton.setAttribute('label', 'Firefox Menu');
    overflowButton.setAttribute('tooltiptext', 'Firefox Menu');
    */
  }, 0);

}());
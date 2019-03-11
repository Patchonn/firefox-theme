(function() {
  if (location != 'chrome://browser/content/browser.xul')
    return;  
  var forward = document.getElementById('forward-button');
 
  if (!CustomizableUI.getPlacementOfWidget('ucjs_forward-button')) { 
    try {
      CustomizableUI.createWidget({
        id: 'ucjs_forward-button',
        type: 'custom',
        defaultArea: CustomizableUI.AREA_NAVBAR,
        onBuild: function(aDocument) {
          var toolbaritem = aDocument.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'toolbaritem');
          toolbaritem.id = 'ucjs_forward-button';
          toolbaritem.className = 'chromeclass-toolbar-additional';          
          return toolbaritem;            
        }
      });
      if (!CustomizableUI.getPlacementOfWidget('ucjs_forward-button')) {     
        forward.style.display = 'none';
        return; 
      };        
    } catch(e) {        
      forward.style.display = 'none';
      return;      
    };    
  };

  setTimeout(function() { 
    document.getElementById('ucjs_forward-button').appendChild(forward);       
    forward.setAttribute('consumeanchor', 'ucjs_forward-button');     
  }, 0);

}());
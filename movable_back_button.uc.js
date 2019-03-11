(function() {
  if (location != 'chrome://browser/content/browser.xul')
    return;  
  var back = document.getElementById('back-button');
 
  if (!CustomizableUI.getPlacementOfWidget('ucjs_back-button')) {
    try {
      CustomizableUI.createWidget({
        id: 'ucjs_back-button',
        type: 'custom',
        defaultArea: CustomizableUI.AREA_NAVBAR,
        onBuild: function(aDocument) {
          var toolbaritem = aDocument.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', 'toolbaritem');
          toolbaritem.id = 'ucjs_back-button';
          toolbaritem.className = 'chromeclass-toolbar-additional';          
          return toolbaritem;            
        }
      });
      if (!CustomizableUI.getPlacementOfWidget('ucjs_back-button')) {    
        back.style.display = 'none';
        return;
      };        
    } catch(e) {        
      back.style.display = 'none';
      return;      
    };    
  };
 
  setTimeout(function() {
    document.getElementById('ucjs_back-button').appendChild(back);      
    back.setAttribute('consumeanchor', 'ucjs_back-button');    
  }, 0);
 
}());
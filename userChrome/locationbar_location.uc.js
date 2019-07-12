// 'Classic autocomplete popup with two lined results' script for Firefox 60+ by Aris
// CSS code based on https://github.com/Aris-t2/CustomCSSforFx/blob/master/classic/css/locationbar/ac_popup_classic_with_url_only_fx64.css
// popup width gets adjusted automatically when switching between normal, maximized and fullscreen window modes
// popup width does not get adjusted automatically when switchting between compact, normal and touch toolbar modes

// [!] option: 'Visit...' and 'Search with...' items can be hidden using 'hide_visit_search_items' variable
// [!] option: type icons like boomarks star, switch to tab etc. can be moved to the right using 'move_bookmarks_star_to_the_end' variable


var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

setTimeout(function(){
  try{
	
	classicAcpopup();
	
	var observer = new MutationObserver(function(mutations) {
	  mutations.forEach(function(mutation) {
		classicAcpopup();
	  });    
	});
	
	observer.observe(document.getElementById("main-window"), { attributes: true, attributeFilter: ['sizemode'] });
	
	function classicAcpopup(event){
	
	  var urlbar_width = Math.round(document.getElementById("urlbar").getBoundingClientRect().width);
	  var urlbar_results = 10;
	  
	  try{
	    urlbar_results = Services.prefs.getBranch("browser.urlbar.").getIntPref("maxRichResults");
	  } catch(e){}
	  
	  var uri = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
		#urlbar-results, \
		#PopupAutoCompleteRichResult[autocompleteinput="urlbar"] { \
		  min-width: '+urlbar_width+'px !important; \
		  width: '+urlbar_width+'px !important; \
		  max-width: '+urlbar_width+'px !important; \
		} \
		#urlbar-results .urlbarView-row .urlbarView-title,  \
		#urlbar-results .urlbarView-row .urlbarView-url, \
		#PopupAutoCompleteRichResult[autocompleteinput="urlbar"] .autocomplete-richlistitem .ac-title-text,  \
		#PopupAutoCompleteRichResult[autocompleteinput="urlbar"] .autocomplete-richlistitem .ac-url-text { \
		  min-width: calc( '+urlbar_width+' - 50px) !important; \
		  width: calc( '+urlbar_width+' - 50px) !important; \
		} \
		#urlbarView-results, \
		#PopupAutoCompleteRichResult[autocompleteinput="urlbar"] .autocomplete-richlistbox { \
		  height: auto !important; \
		  max-height: calc(47.5px * '+urlbar_results+') !important; \
		} \
		#urlbar-results { \
		  max-height: calc(47.5px * '+urlbar_results+') !important; \
		} \
	  '), null, null);
	  

	  if (sss.sheetRegistered(uri,sss.AGENT_SHEET)) sss.unregisterSheet(uri,sss.AGENT_SHEET);

	  sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);

	}
	  
  } catch(e){}
},1000);

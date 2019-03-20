// userChrome.js

function load_js_script(js_file_name) {
    Services.scriptloader.loadSubScript(Components.stack.filename.substring(0,
	Components.stack.filename.lastIndexOf("/") + 1) + js_file_name, window);
}

load_js_script("./userChrome/movable_ui.uc.js");
load_js_script("./userChrome/newtab.uc.js");
load_js_script("./userChrome/restart_button.uc.js");
load_js_script("./userChrome/results_into_urlbar.uc.js");
load_js_script("./userChrome/new_tab_command.uc.js");


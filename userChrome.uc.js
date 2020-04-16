// userChrome.js

function load_js_script(js_file_name) {
    Services.scriptloader.loadSubScript(Components.stack.filename.substring(0,
	Components.stack.filename.lastIndexOf("/") + 1) + js_file_name, window);
}

load_js_script("./js/movable_ui.uc.js");
load_js_script("./js/movable_menu_button.uc.js");
load_js_script("./js/movable_overflow_button.uc.js");
load_js_script("./js/newtab.uc.js");
load_js_script("./js/restart_item_in_menu.uc.js");
load_js_script("./js/new_tab_command.uc.js");
load_js_script("./js/urlbar_tab_to_browser.uc.js");


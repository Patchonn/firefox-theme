This theme contains files from CustomCSSforFx which can be found at https://github.com/Aris-t2/CustomCSSforFx
It also contains the files required to use userChrome.js from https://github.com/xiaoxiaoflood/firefox-scripts
The icons are versions of the same icons from Firefox but with a shadow filter. This shadow filter was made so it can be copied into any icon and just work™.


new_tab_command.uc.js forces new tabs to open at the end when middle clicking the new tab button, left clicking is disabled by userChrome.css (right clicking still works when the tabs are overflowing...).

movable_menu_button.uc.js creates a new menu button that is movable and acts exactly the same as the original one.
The original button is also hidden due to compatibility problems.
Removing this script returns the button to its normal place without any problem.

movable_overflow_button.uc.js also creates a new overflow button and hides the original one.

movable_ui.uc.js makes the navigation buttons and url bar movable outside the navigation bar.

urlbar_tab_to_browser.uc.js turns the focus to the browser when pressing the tab key in the url bar so you can quickly access whatever is in your newtab page using only the keyboard.

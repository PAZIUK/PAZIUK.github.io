var MENU_PANE_ID_SUFFIX="Pane";var MENU_TABLE_ID_SUFFIX="Table";var DEFAULT_MENU_TIMEOUT_INTERVAL=400;var menusById=new Array;var optionsById=new Array;
function Menu(id,parent,highlightOnClass,highlightOffClass,paneRightAligned,isOpenedUpwards){this.adjusted=false;this.highlightOnClass=highlightOnClass;this.highlightOffClass=highlightOffClass;this.id=id;this.paneRightAligned=paneRightAligned==null?false:paneRightAligned;this.parent=parent;this.timeoutId=0;this.isOpenedUpwards=isOpenedUpwards?true:false;var menuItem=document.getElementById(this.id);var menuPane=document.getElementById(getPaneIdFromMenuId(this.id));if(menuItem!=null&&menuPane!=null)if(this.parent==
null){menuItem.onclick=menuItemClickHandler;menuItem.onmouseout=menuItemOutHandler;menuItem.onblur=menuItemOutHandler;menuItem.onfocus=menuItemOverHandler;menuItem.onmouseover=menuItemOverHandler;menuItem.onkeydown=menuItemKeydownHandler;menuPane.onmouseout=menuPaneOutHandler;menuPane.onmouseover=menuPaneOverHandler}else{menuItem.onclick=subMenuClickHandler;menuItem.onmouseout=subMenuOutHandler;menuItem.onmouseover=subMenuOverHandler;menuItem.onfocus=subMenuFocusHandler;menuItem.onfocus=menuOptionFocusHandler;
menuItem.onkeydown=menuOptionKeydownHandler}menusById[this.id]=this}function Menu_addOption(optionId,action){var option=new MenuOption(this,optionId,action)}function Menu_close(){var menuPane=document.getElementById(getPaneIdFromMenuId(this.id));if(menuPane!=null){menuPane.style.display="none";if(this.parent==null){var menuItem=document.getElementById(this.id);menuItem.className=menuItem.className.replace(" c2Background","")}if(isInternetExplorer())unShim(getPaneIdFromMenuId(this.id))}}
function Menu_disable(){var menuItem=document.getElementById(this.id);menuItem.className="menuDisabled menuBarSegmentDisabled";menuItem.onclick;menuItem.onclick=""}
function Menu_open(){this.stopCountdown();for(var id in menusById)if(this.id!=id)if(this.parent==null||this.parent.id!=id)menusById[id].close();var menuPane=document.getElementById(getPaneIdFromMenuId(this.id));if(this.parent!=null&&!this.adjusted){var subMenu=document.getElementById(this.id);if(subMenu){if($(subMenu).closest("div.menuPane").closest("div.menuPane").children().length<2)menuPane.style.left=$(subMenu).position().left+$(subMenu).width()-2+"px";else{var column=$(subMenu).closest("table.menuColumn").closest("table.menuColumn");
var columnIndex=column.closest("div.menuPane").children().index(column);if(columnIndex==0)menuPane.style.left=$(subMenu).closest("div.menuPane").closest("div.menuPane").width()-5+"px";else menuPane.style.left=$(subMenu).position().left+$(subMenu).width()-2+"px"}menuPane.style.top=subMenu.offsetTop+"px"}this.adjusted=true}var menuTable=document.getElementById(getTableIdFromMenuId(this.id));var menuItem=document.getElementById(this.id);menuPane.style.display="block";if(this.paneRightAligned)menuPane.style.left=
findPositionX(menuItem)+menuItem.offsetWidth-menuTable.offsetWidth;if(isInternetExplorer())shim(getPaneIdFromMenuId(this.id));if(this.isOpenedUpwards){var offsetTop=$(menuItem).offset().top-$(menuPane).outerHeight()-2;var offsetLeft=$(menuItem).offset().left;$(menuPane).offset({top:offsetTop,left:offsetLeft})}}
function Menu_startCountdown(){this.stopCountdown();this.timeoutId=window.setTimeout("menusById['"+this.id+"'].close()",DEFAULT_MENU_TIMEOUT_INTERVAL);if(this.parent!=null)this.parent.startCountdown()}function Menu_stopCountdown(){if(this.timeoutId>0){window.clearTimeout(this.timeoutId);this.timeoutId=0;if(this.parent!=null)this.parent.stopCountdown()}}Menu.prototype.addOption=Menu_addOption;Menu.prototype.close=Menu_close;Menu.prototype.disable=Menu_disable;Menu.prototype.open=Menu_open;
Menu.prototype.startCountdown=Menu_startCountdown;Menu.prototype.stopCountdown=Menu_stopCountdown;
function MenuOption(menu,optionId,action){this.action=action;this.id=optionId;this.menu=menu;var option=document.getElementById(this.id);if(option!=null){option.className=this.menu.highlightOffClass;option.onclick=menuOptionClickHandler;option.onmouseout=menuOptionOutHandler;option.onmouseover=menuOptionOverHandler;option.onkeydown=menuOptionKeydownHandler;option.onfocus=menuOptionFocusHandler;option.onblur=menuOptionBlurHandler;optionsById[this.id]=this}}
function MenuOption_executeAction(){if(this.action!=null){this.highlight(false);if(this.menu.parent!=null){var parentOption=optionsById[this.menu.id];parentOption.highlight(false)}var menu=this.menu;while(menu!=null){menu.close();menu=menu.parent}eval(this.action)}}
function MenuOption_highlight(on){var row=document.getElementById(this.id);if(on)row.className=this.menu.highlightOnClass;else row.className=this.menu.highlightOffClass;if(this.menu.parent==null){var menuItem=document.getElementById(this.menu.id);if(menuItem.className.indexOf("menuDisabled")==-1&&menuItem.className.indexOf("c2Background")==-1)menuItem.className+=" c2Background"}}MenuOption.prototype.executeAction=MenuOption_executeAction;MenuOption.prototype.highlight=MenuOption_highlight;
function getMenuIdFromPaneId(paneId){return paneId.substring(0,paneId.length-MENU_PANE_ID_SUFFIX.length)}function getPaneIdFromMenuId(menuId){return menuId+MENU_PANE_ID_SUFFIX}function getTableIdFromMenuId(menuId){return menuId+MENU_TABLE_ID_SUFFIX}function menuItemClickHandler(){var menu=menusById[this.id];menu.open()}
function menuItemKeydownHandler(event){if(13==event.which||32==event.which){this.trigger("click");event.preventDefault()}else if(40==event.which){this.trigger("click");document.getElementById(getPaneIdFromMenuId(this.id)).getElementsByTagName("tr")[0].focus();event.preventDefault()}}function menuItemOutHandler(){var menu=menusById[this.id];if(menu){menu.startCountdown();var menuItem=document.getElementById(this.id);menuItem.className=menuItem.className.replace(" c2Background","")}}
function menuItemOverHandler(){var menu=menusById[this.id];if(menu){menu.stopCountdown();var menuItem=document.getElementById(this.id);if(menuItem.className.indexOf("menuDisabled")==-1)menuItem.className+=" c2Background"}}
function menuPaneOutHandler(e){var source=e?e.target:event.fromElement;var target=e?e.relatedTarget:event.toElement;var menuPane=source;while(menuPane.nodeName!="DIV")menuPane=menuPane.parentNode;if(target!=null)if(target.className!="menuItem"){var menu=menusById[getMenuIdFromPaneId(menuPane.id)];menu.startCountdown()}}function menuPaneOverHandler(){var menu=menusById[getMenuIdFromPaneId(this.id)];menu.stopCountdown()}
function menuOptionClickHandler(event){var option=optionsById[this.id];option.executeAction();if(isChrome()||isSafari())if(event.stopPropagation)event.stopPropagation();else event.cancelBubble=true}function menuOptionOutHandler(){var option=optionsById[this.id];option.highlight(false)}function menuOptionOverHandler(){var option=optionsById[this.id];option.highlight(true)}
function menuOptionFocusHandler(){$(this).trigger("onmouseover");$(this).siblings().trigger("onmouseout");var target=$(this).closest("div.menuPane").prev("div.menu");if(target.length>0)$(target[0]).trigger("onmouseover");else{$(this).parents("div.menuPane").last().trigger("onmouseover");$(this).parents("div.menuPane").last().prev("div.menu").trigger("onmouseover")}}
function menuOptionBlurHandler(){var embeddedMenu=$(this).find("div.menuPane");var target=$(this).closest("div.menuPane").prev("div.menu");if(embeddedMenu.length==0)$(this).trigger("onmouseout");if(target.length>0)$(target[0]).trigger("onmouseout")}
function menuOptionKeydownHandler(event){var handled=false,option=$(this),tbody=option.parent(),menuPane=option.closest("div.menuPane")[0];if(13==event.which||32==event.which){this.trigger("click");handled=true}else if(38==event.which){var options=$(tbody).children("tr [tabindex]");if(options[0]==this){if(option.parents("div.menuPane").length==1){var menuFocus=document.getElementById(getMenuIdFromPaneId(menuPane.id));menuFocus.focus();var menu=menusById[menuFocus.id];if(menu)menu.startCountdown()}}else{var index=
options.index(this);var item=options[index-1];item.focus()}handled=true}else if(40==event.which){var options=$(tbody).children("tr [tabindex]");if(options[options.length-1]!=this){var index=options.index(this);var item=options[index+1];item.focus()}handled=true}else if(37==event.which){var parents=option.parents("div.menuPane");if(parents.length>1){var parent=option.closest("div.menuPane").closest("tr")[0];parent.focus()}handled=true}else if(39==event.which){var subMenu=option.find("div.menuPane");
if(subMenu.length>0){this.trigger("click");subMenu.find("tr").get(0).focus()}handled=true}if(handled){event.preventDefault();event.stopPropagation();return false}}function subMenuOutHandler(){var menu=menusById[this.id];menu.startCountdown();var option=optionsById[this.id];option.highlight(false)}function subMenuOverHandler(){var menu=menusById[this.id];menu.open();var option=optionsById[this.id];option.highlight(true)}
function subMenuFocusHandler(){var option=optionsById[this.id];option.highlight(true)}function subMenuClickHandler(){var menu=menusById[this.id];menu.open()};
"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[8564],{8564:(e,t,n)=>{n.r(t),n.d(t,{wUnit:()=>l});var r=n(1570),i=n(866),a=n(8548),o=n(4171),c=n(6323),l={commandList:[],testFrame:null,currentTestCount:-1,totalTestCount:-1,lock:!1,options:{interval:0,showSuccess:!0,showLog:!1},start:function(){try{this.testFrame=parent.document.getElementById("testFrame"),this.testSuiteFrame=parent.document.getElementById("testSuiteFrame"),this.selenium_myiframe=parent.document.getElementById("selenium_myiframe"),this.commandList=[],this.currentTestCount=-1,this.totalTestCount=-1,this.totalTestCount=-1,this.lock=!1}catch(e){i.Y.printStackTrace(e)}},stop:function(){},log:function(){try{for(var e=!0,t=[],n=0;n<this.commandList.length;n++)0==this.commandList[n].success&&(t.push(n),o.v.printLog("--fail.."+n),e=!1);""!=o.v.getErrorLog()&&(e=!1);var r=o.v.getObjectStr(0,this.commandList,{log:!0,includeFunction:!1,maxDepth:2,include:null,exclude:"event parentComponent defaultOptions"});r="\n\n--------------object log----------------\n\n"+r,o.v.printLog(r),o.v.printLog("  wUnit TEST : "+e),1==this.options.showSuccess&&(e?alert("wUnit Test SUCCESS"):alert("wUnit Test FAIL "+t.length+"\n see : "+t));var c=a.I.getConfiguration("/WebSquare/wUnit/showLogPopup/@value");c="string"!=typeof c||"false"!=c.toLowerCase(),0!=e&&1!=this.options.showLog||!c||o.v.showLog()}catch(e){i.Y.printStackTrace(e)}},runTimeout:function(){try{var e=this,t=e.options.interval;this.currentTestCount<this.commandList.length&&"pause"==this.commandList[this.currentTestCount].command&&(t+=parseInt(this.commandList[this.currentTestCount].target)),setTimeout((function(){e.executeCommand(e.currentTestCount)?(e.currentTestCount++,e.runTimeout()):e.log()}),t)}catch(e){i.Y.printStackTrace(e)}},run:function(){try{1==c.Z.getBoolean(WebSquare.net.getParameter("bySelenium"))?this.options.showSuccess=!1:(this.currentTestCount=0,this.totalTestCount=this.commandList.length,this.runTimeout())}catch(e){i.Y.printStackTrace(e)}},executeCommand:function(e){try{if(e>this.commandList.length||!this.commandList[e])return!1;var t=this.commandList[e].command,n="";switch(null!=r.q.strictModeFrame&&(n=r.q.strictModeFrame.id),t){case"set":new Function(c.Z.scopingFuncBody(this.commandList[e].target,n))(),this.commandList[e].success="pass";break;case"assert":void 0!==(a=new Function(c.Z.scopingFuncBody(this.commandList[e].target,n))())&&null!=a&&(a=a.toString()),a==this.commandList[e].value?(this.commandList[e].success=!0,this.commandList[e].message=""):(this.commandList[e].success=!1,this.commandList[e].message="value '"+this.commandList[e].value+"' is different from the actual value '"+a+"'");break;case"assertNot":void 0!==(a=new Function(c.Z.scopingFuncBody(this.commandList[e].target,n))())&&null!=a&&(a=a.toString()),a!=this.commandList[e].value?(this.commandList[e].success=!0,this.commandList[e].message=""):(this.commandList[e].success=!1,this.commandList[e].message="value '"+this.commandList[e].value+"' is same with the actual value '"+a+"'");break;case"object":break;case"exec":var a=new Function(c.Z.scopingFuncBody("WebSquare.wUnit."+this.commandList[e].target,n))();this.commandList[e].success="pass";break;case"assertExec":void 0!==(a=new Function(c.Z.scopingFuncBody("WebSquare.wUnit."+this.commandList[e].target,n))())&&null!=a&&(a=a.toString()),a==this.commandList[e].value?(this.commandList[e].success=!0,this.commandList[e].message=""):(this.commandList[e].success=!1,this.commandList[e].message="value '"+this.commandList[e].value+"' is different from the actual value '"+a+"'");break;case"robot":this.commandList[e].success=!0}}catch(t){return o.v.printLog("[wUnit] error to execute command.  idx:"+e),this.commandList[e].success=!1,this.commandList[e].message=t.toString(),i.Y.printStackTrace(t),!1}return!0},setOptions:function(e){r.q.extend(this.options,e)},addCommand:function(e,t,n){try{e=e||"",t=t||"",n=n||"",this.commandList.push({command:e,target:t,value:n,success:null,
message:""})}catch(e){i.Y.printStackTrace(e)}},click:function(e){try{var t=document.getElementById(e);t&&t.click()}catch(e){i.Y.printStackTrace(e,null,this)}},editGridCell:function(e,t,n){try{var r=document.getElementById(e+"_cell_"+t+"_"+n);r&&r.click()}catch(e){i.Y.printStackTrace(e,null,this)}},getGridScrollX:function(e){try{var t=document.getElementById(e+"_scrollX_right");return t?t.scrollLeft:null}catch(e){i.Y.printStackTrace(e,null,this)}},getGridScrollXRange:function(e,t,n){try{var r=document.getElementById(e+"_scrollX_right");return r?t<=r.scrollLeft&&r.scrollLeft<=n:null}catch(e){i.Y.printStackTrace(e,null,this)}},checkCell:function(e){try{var t=this.getEditCellDom(e),n=WebSquare.text.getSelection(t);return n.start!=n.end}catch(e){i.Y.printStackTrace(e,null,this)}},getEditCellInfo:function(e){try{var t=c.Z.getComponentById(e);if(t){var n=t.getFocusedColumnIndex(),r=t.getFocusedRowIndex(),a=document.getElementById(e+"_cell_"+r+"_"+n);if(a)return t.getCellInfo(a)}return null}catch(e){i.Y.printStackTrace(e,null,this)}},getEditCellDom:function(e){try{var t=this.getEditCellInfo(e);return document.getElementById(t.mainGridId+t.id)}catch(e){i.Y.printStackTrace(e,null,this)}},openGridCalendar:function(e){try{var t=this.getEditCellDom(e);t&&this.openCalendar(t.id)}catch(e){i.Y.printStackTrace(e,null,this)}},openCalendar:function(e){try{var t=document.getElementById(e+"_img");t&&t.click()}catch(e){i.Y.printStackTrace(e,null,this)}},openSelectbox:function(e){try{var t=document.getElementById(e+"_button");t&&t.click()}catch(e){i.Y.printStackTrace(e,null,this)}},checkInputCalendarPos:function(e){try{return!0}catch(e){i.Y.printStackTrace(e,null,this)}},checkGridSelectboxPos:function(e){try{var t=this.getEditCellDom(e);return t?this.checkSelectboxPos(t.id):null}catch(e){i.Y.printStackTrace(e,null,this)}},checkSelectboxPos:function(e){try{var t=document.getElementById(e),n=WebSquare.style.getAbsoluteLeft(t),r=WebSquare.style.getAbsoluteTop(t),a=(r=WebSquare.style.getAbsoluteTop(t),t.offsetHeight),o=document.getElementById(e+"_itemTable"),c=WebSquare.style.getAbsoluteLeft(o),l=WebSquare.style.getAbsoluteTop(o),s=o.offsetHeight;return Math.abs(n-c)<3&&(Math.abs(r+a-l)<3||Math.abs(l+s-r)<3)}catch(e){i.Y.printStackTrace(e,null,this)}},keyinInput:function(e,t,n){try{var r=a.I.getComponentById(n)||c.Z.getComponentById(e),o=document.getElementById(e);if(r&&o){r.focus&&r.focus();for(var l=0;l<t.length;l++){var s=t.charCodeAt(l),u={charCode:s,keyCode:s,target:o};r.handleKeydownEvent&&(r.handleKeydownEvent(u),WebSquare.event.fireEvent(r,"onkeydown","")),r.handleKeypressEvent&&(r.validator.validateKeyPress(r.render,r.getValue(),u)&&(o.value=o.value+String.fromCharCode(s)),WebSquare.event.fireEvent(r,"onkeypress","")),r.handleKeyupEvent&&(r.handleKeyupEvent(u),WebSquare.event.fireEvent(r,"onkeyup",""))}r.blur&&r.blur()}}catch(e){i.Y.printStackTrace(e,null,this)}},keyinInputCalendar:function(e,t){try{var n=c.Z.getComponentById(e),r=document.getElementById(e+"_input");if(n&&r){n.focus&&n.focus();for(var a=0;a<t.length;a++){var o=t.charCodeAt(a),l={charCode:o,keyCode:o};n.handleKeydownEvent&&n.handleKeydownEvent(l),n.handleKeypressEvent&&n.validator.validateKeyPress(n.render,n.getValue(),l)&&(r.value=r.value+String.fromCharCode(o)),n.handleKeyupEvent&&n.handleKeyupEvent(l)}n.blur&&n.blur()}}catch(e){i.Y.printStackTrace(e,null,this)}},keyinGridCell:function(e,t,n){try{var r=c.Z.getComponentById(n||"grid1"),a=document.getElementById(e),o=r.getCellInfo(a),l=r.dom[o.mainGridId+o.id],s=document.getElementById(l.id);if(l&&s){l.focus&&l.focus();for(var u=0;u<t.length;u++){var d=t.charCodeAt(u),m={charCode:d,keyCode:d,target:s};l.handleKeydownEvent&&l.handleKeydownEvent(m),l.handleKeypressEvent&&l.validator.validateKeyPress(l.render,l.getValue(),m)&&(s.value=s.value+String.fromCharCode(d)),l.handleKeyupEvent&&l.handleKeyupEvent(m)}l.blur&&l.blur()}}catch(e){i.Y.printStackTrace(e,null,this)}},getGridCellDisplayData:function(e,t){try{
var n=document.getElementById(e),r=n?n.innerHTML:"";return r=r.replace(/<[^<|>]*>/g,"")}catch(e){i.Y.printStackTrace(e,null,this)}},getInnerHTML:function(e,t){try{var n=document.getElementById(e);return n?n.innerHTML:null}catch(e){i.Y.printStackTrace(e,null,this)}},getProperty:function(e,t){try{var n=document.getElementById(e);return n?n[t]:null}catch(e){i.Y.printStackTrace(e,null,this)}},getStyle:function(e,t){try{var n=document.getElementById(e);return n?c.Z.getStyleProperty(n,t):null}catch(e){i.Y.printStackTrace(e,null,this)}},doesExist:function(e){try{return!!document.getElementById(e)}catch(e){i.Y.printStackTrace(e,null,this)}},isVisible:function(e){try{var t=document.getElementById(e);return t?"none"!=c.Z.getStyleProperty(t,"display")&&("hidden"!=c.Z.getStyleProperty(t,"visibility")&&(0!=t.offsetWidth&&0!=t.offsetHeight)):null}catch(e){i.Y.printStackTrace(e,null,this)}},clickSelectboxIndex:function(e,t){var n=c.Z.getComponentById(e);if("native"==n.options.renderType)n.setSelectedIndex(t);else{l.click(e+"_button");var r=document.getElementById(e+"_itemTable").firstChild.firstChild.childNodes;setTimeout((function(){r[t].firstChild.click()}),20)}},getTextNode:function(e){return document.getElementById(e).firstChild.data},compareXML:function(e,t,n,r){var i=e.documentElement,a=t.documentElement,c=l.compareNode(i,a,n,r);return c||(o.v.printLog("Org XML "+WebSquare.xml.indent(e)),o.v.printLog("Target XML "+WebSquare.xml.indent(t))),c},compareNode:function(e,t,n,r){if(null==e)return o.v.printLog("src node is null"),!1;if(null==t)return o.v.printLog("dest node is null"),!1;if(e.nodeName!=t.nodeName)return o.v.printLog("Nodes have different names. org["+e.nodeName+"] target["+t.nodeName+"]"),!1;if(void 0!==r)for(var i=0;i<r.length;i++)e.removeAttribute(r[i]),t.removeAttribute(r[i]);if(n){var a=e.attributes;for(i=0;null!=a&&i<a.length;i++){var c=a[i];if(WebSquare.nodeValueDeprecated){if(t.getAttribute(c.name)!=c.value)return o.v.printLog("Attribute ["+c.name+"] Previous value ["+c.value+"] Changed value ["+t.getAttribute(c.name)+"]"),!1}else if(t.getAttribute(c.nodeName)!=c.nodeValue)return o.v.printLog("Attribute ["+c.nodeName+"] Previous value["+c.nodeValue+"] Changed value ["+t.getAttribute(c.nodeName)+"]"),!1}}for(var s=e.firstChild,u=t.firstChild;null!=s;){if(null==u)return o.v.printLog(e.nodeName+" The number of subnodes is different. org["+e.childNodes.length+"] target["+t.childNodes.length+"]"),!1;for(;null!=s&&(3==s.nodeType||4==s.nodeType||8==s.nodeType);)s=s.nextSibling;for(;null!=u&&(3==u.nodeType||4==u.nodeType||8==u.nodeType);)u=u.nextSibling;if(null==s||null==u)break;if(s.nodeType!=u.nodeType)return o.v.printLog(e.nodeName+" There are different types of subnodes. org["+s.nodeType+"] target["+u.nodeType+"]"),!1;if(1==s.nodeType){if(!l.compareNode(s,u,n,r))return!1}else if(3==s.nodeType){if(s.nodeValue!=u.nodeValue)return o.v.printLog(e.nodeName+" The TextNode value of the subnode is different. org["+s.nodeType+"] target["+u.nodeType+"]"),!1}else if(4==s.nodeType&&s.nodeValue!=u.nodeValue)return o.v.printLog(e.nodeName+" The CData value of the subnode is different. org["+s.nodeType+"] target["+u.nodeType+"]"),!1;s=s.nextSibling,u=u.nextSibling}if(null!=s){for(;null!=s&&(8==s.nodeType||3==s.nodeType||4==s.nodeType);)s=s.nextSibling;if(null!=s)return o.v.printLog(e.nodeName+" The number of subnodes is different. org["+e.childNodes.length+"] target["+t.childNodes.length+"]"),!1}if(null!=u){for(;null!=u&&(8==u.nodeType||3==u.nodeType||4==u.nodeType);)u=u.nextSibling;if(null!=u)return o.v.printLog(e.nodeName+" The number of subnodes is different. org["+e.childNodes.length+"] target["+t.childNodes.length+"]"),!1}return!0},getObjById:function(e){try{if("string"!=typeof e){var t=e;try{t=new Function("param","return param")(e)}catch(n){t=e}return t}if(WebSquare.idCache[WebSquare.idToUUID[e]])return WebSquare.idCache[WebSquare.idToUUID[e]];try{t=new Function("return "+e)()}catch(e){o.v.printLog(e.message)}
if(null==t&&WebSquare.strictMode){var n=e,r=WebSquare.strictModeFrame.id+"_";"G_"===e.slice(0,2)?n="G_"+r+e.slice(2):e.slice(0,r.length)!==r&&(n=r+e),n=n.replace(new RegExp("("+WebSquare.strictModeFrame.id+"\\_){2,}","g"),r);var i=WebSquare.idCache[WebSquare.idToUUID[n]];if(i)t=i;else try{t=new Function("return "+n)()}catch(n){t=e}}return null==t&&(t=e),t}catch(t){return e}},getDomById:function(e){try{if("string"!=typeof e){var t=e;try{t=new Function("param","return param")(e)}catch(n){t=e}return t}if(null==(t=document.getElementById(e))&&WebSquare.strictMode){var n=WebSquare.strictModeFrame.id+"_",r=new RegExp("("+WebSquare.strictModeFrame.id+"\\_){2,}","g"),i=(n+e).replace(r,n);if(null==(t=document.getElementById(i))){var a=i.indexOf("G_");a>=0&&(i=(i=i.slice(0,a+2)+n+i.slice(a+2)).replace(r,n),null==(t=document.getElementById(i))&&(i=(n+i).replace(r,n),t=document.getElementById(i))),null==t&&(t=document.getElementById(i.replace(n,"")))}}return t}catch(e){return null}},getJq:function(e){try{var t=$(e);if(0===t.length){var n=e.wq_trim(),r=n.slice(1),a=WebSquare.strictModeFrame.id+"_";"G_"===r.slice(0,2)?r="G_"+a+r.slice(2):r.slice(0,a.length)!==a&&(r=a+r),t=$(n.slice(0,1)+r)}return t}catch(e){i.Y.printStackTrace(e,null,this)}}}}}]);
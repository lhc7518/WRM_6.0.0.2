"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[5751],{5751:(t,e,i)=>{i.r(e),i.d(e,{pageList:()=>h});var s=i(1570),o=i(866),a=i(2847),n=i(6323),l=i(3885),p=i(2725),h=function(t,e,i){l.q.call(this,t,e,i)};s.q.extend(h.prototype,l.q.prototype),h.prototype.defaultOptions={pluginType:"uiplugin.pageList",pluginName:"pageList",userEvents:["onclick","onchange","onviewchange","oninputblur"],useConfig:!0,defaultClass:"w2pageList_label",selectedStyle:"",selectedClass:"w2pageList_label_selected",displayFormat:"#",useDelim:!1,delimiter:"",pageSize:10,pagingType:"1",buttonShowType:"1",naviType:"config",nativeTooltip:!0,leftPageBackImage:"",leftPageImage:"",rightPageImage:"",rightPageBackImage:"",deliImage:"",leftPageBackImageClass:"w2pageList_col_prevPage",leftPageImageClass:"w2pageList_col_prev",rightPageImageClass:"w2pageList_col_next",rightPageBackImageClass:"w2pageList_col_nextPage",deliImageClass:"w2pageList_delimiter",leftPageBackImageStyle:"",leftPageImageStyle:"",rightPageImageStyle:"",rightPageBackImageStyle:"",deliImageStyle:"",indexWidth:-1,deliWidth:-1,shiftMoveButtonWidth:-1,oneMoveButtonWidth:-1,renderType:"table",href:"",displayButtonType:"display",displaySearchbox:!1,displaySelectedIndex:!1,iconType:"png",accessibility:!1},h.prototype.initialize=function(t){try{this.pageCount=0,1==this.options.displaySearchbox?(this.displayIndex=0,this.selectedIndex=0):(this.displayIndex=1,this.selectedIndex=-1),this.default_leftPageBackImage=s.q._resourceURI+"uiplugin/pageList/images/b_first."+this.options.iconType,this.default_leftPageImage=s.q._resourceURI+"uiplugin/pageList/images/b_prev."+this.options.iconType,this.default_rightPageImage=s.q._resourceURI+"uiplugin/pageList/images/b_next."+this.options.iconType,this.default_rightPageBackImage=s.q._resourceURI+"uiplugin/pageList/images/b_end."+this.options.iconType,this.options=WebSquare.cssManager.styleToClass(this.id,this.options),this.options.leftPageBackImage=this.options.leftPageBackImage?this.options.leftPageBackImage:this.default_leftPageBackImage,this.options.leftPageImage=this.options.leftPageImage?this.options.leftPageImage:this.default_leftPageImage,this.options.rightPageImage=this.options.rightPageImage?this.options.rightPageImage:this.default_rightPageImage,this.options.rightPageBackImage=this.options.rightPageBackImage?this.options.rightPageBackImage:this.default_rightPageBackImage,this.labelStyle="",-1!=this.options.indexWidth&&(this.labelStyle+="width:"+this.options.indexWidth+"px;"),-1!=this.options.deliWidth&&(this.options.deliImageStyle+=this.getSeperator(this.options.deliImageStyle)+"width:"+this.options.deliWidth+"px;"),-1!=this.options.shiftMoveButtonWidth&&(this.options.leftPageBackImageStyle+=this.getSeperator(this.options.leftPageBackImageStyle)+"width:"+this.options.shiftMoveButtonWidth+"px;",this.options.rightPageBackImageStyle+=this.getSeperator(this.options.rightPageBackImageStyle)+"width:"+this.options.shiftMoveButtonWidth+"px;"),-1!=this.options.oneMoveButtonWidth&&(this.options.leftPageImageStyle+=this.getSeperator(this.options.rightPageBackImageStyle)+"width:"+this.options.oneMoveButtonWidth+"px;",this.options.rightPageImageStyle+=this.getSeperator(this.options.rightPageBackImageStyle)+"width:"+this.options.oneMoveButtonWidth+"px;"),""!=this.options.deliImage&&(this.options.deliImageStyle+=this.getSeperator(this.options.deliImageStyle)+"background-image:url("+this.options.deliImage+");"),"list"==this.options.renderType?(this.options.leftPageBackImageStyle+=this.getSeperator(this.options.leftPageBackImageStyle)+"background-image:none;",this.options.leftPageImageStyle+=this.getSeperator(this.options.leftPageImageStyle)+"background-image:none;",this.options.rightPageImageStyle+=this.getSeperator(this.options.rightPageImageStyle)+"background-image:none;",
this.options.rightPageBackImageStyle+=this.getSeperator(this.options.rightPageBackImageStyle)+"background-image:none;"):(this.options.leftPageBackImage!=this.default_leftPageBackImage&&(this.options.leftPageBackImageStyle+=this.getSeperator(this.options.leftPageBackImageStyle)+"background-image:url("+this.options.leftPageBackImage+");"),this.options.leftPageImage!=this.default_leftPageImage&&(this.options.leftPageImageStyle+=this.getSeperator(this.options.leftPageImageStyle)+"background-image:url("+this.options.leftPageImage+");"),this.options.rightPageImage!=this.default_rightPageImage&&(this.options.rightPageImageStyle+=this.getSeperator(this.options.rightPageImageStyle)+"background-image:url("+this.options.rightPageImage+");"),this.options.rightPageBackImage!=this.default_rightPageBackImage&&(this.options.rightPageBackImageStyle+=this.getSeperator(this.options.rightPageBackImageStyle)+"background-image:url("+this.options.rightPageBackImage+");")),"3"==this.options.buttonShowType&&(this.options.pagingType="2")}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.toHTML=function(){try{var t=[],e=n.Z.getDataPrefix("index"),i=""==this.options.style?"":"style='"+this.options.style+"'",s=""==this.options.tabIndex?"tabIndex='0'":"tabIndex='"+this.options.tabIndex+"'",a=""==this.options.href?"":"href='"+this.options.href+"'",l=""==this.options.leftPageImageStyle?"":"style='"+this.options.leftPageImageStyle+"'",h=""==this.options.leftPageBackImageStyle?"":"style='"+this.options.leftPageBackImageStyle+"'",g=""==this.options.leftPageImage?"":"src='"+this.options.leftPageImage+"'",r=""==this.options.leftPageBackImage?"":"src='"+this.options.leftPageBackImage+"'",d=""==this.options.rightPageImageStyle?"":"style='"+this.options.rightPageImageStyle+"'",u=""==this.options.rightPageBackImageStyle?"":"style='"+this.options.rightPageBackImageStyle+"'",c=""==this.options.rightPageImage?"":"src='"+this.options.rightPageImage+"'",y=""==this.options.rightPageBackImage?"":"src='"+this.options.rightPageBackImage+"'",_=""==this.labelStyle?"":"style='"+this.labelStyle+"'",v=""==this.options.deliImageStyle?"":"style='"+this.options.deliImageStyle+"'";this.prevPageButtonId=this.id+"_prevPage_btn",this.nextPageButtonId=this.id+"_nextPage_btn",this.prevButtonId=this.id+"_prev_btn",this.nextButtonId=this.id+"_next_btn";var I,m=n.Z.getBoolean(this.options.displaySearchbox);if(t.push("<div id='"+this.id+"' "+i+" class='w2pageList w2pageList_pagePrev_last w2pageList_prev_last "+this.options.className+"'>"),1==this.options.accessibility){t.push("<ul class='w2pageList_ul'>"),"0"==this.options.buttonShowType||"1"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("pagelist_previousList_page"):"",t.push("<li id='"+this.prevPageButtonId+"' class='w2pageList_control_pagePrev' "+h+"><button type='button' class='"+this.options.leftPageBackImageClass+"' title='"+p.B.getMessage("pagelist_previousList_page")+"'></button></li>")):"3"==this.options.buttonShowType||"4"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_first_page"):"",t.push("<li id='"+this.prevPageButtonId+"' class='w2pageList_control_pagePrev' "+h+"><button type='button' class='"+this.options.leftPageBackImageClass+"' title='"+p.B.getMessage("Pagelist_first_page")+"'></button></li>")):(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_previous_page"):"",t.push("<li id='"+this.prevPageButtonId+"' class='w2pageList_control_pagePrev' "+h+"><button type='button' class='"+this.options.leftPageBackImageClass+"' title='"+p.B.getMessage("Pagelist_previous_page")+"'></button></li>")),"1"!=this.options.buttonShowType&&"3"!=this.options.buttonShowType&&"4"!=this.options.buttonShowType||(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_previous_page"):"",
t.push("<li id='"+this.prevButtonId+"' class='w2pageList_control_prev' "+l+"><button type='button' class='"+this.options.leftPageImageClass+"' title='"+p.B.getMessage("Pagelist_previous_page")+"'></button></li>"));var b=Math.min(this.pageCount,this.displayIndex+this.options.pageSize-1);if(m)t.push("<li class='w2pageList_li_label' "+_+"><input id='"+this.id+"_input' style='ime-mode:disabled' value ='"+this.displayIndex+"'class='w2pageList_input' onkeydown='window."+WebSquare.noConflict+".comp."+this.id+".onInputKeyEventHandler(event)'onblur='window."+WebSquare.noConflict+".comp."+this.id+".onBlurEvent(event)'onkeypress='window."+WebSquare.noConflict+".comp."+this.id+".onInputKeyEventHandler(event)'/><span> /"+this.pageCount+"</span></li>");else for(var S=this.displayIndex;S<=b;S++)this.options.href?t.push("<li class='w2pageList_li_label' "+_+"><a id='"+this.id+"_page_"+S+"' "+a+" class='w2pageList_control_label "+this.options.defaultClass+"' "+e+"='"+S+"' role='button'>"+this.getLabel(S)+"</a></li>"):t.push("<li class='w2pageList_li_label' "+_+"><a id='"+this.id+"_page_"+S+"' href=#"+this.id+"_page_"+S+" class='w2pageList_control_label "+this.options.defaultClass+"' "+e+"='"+S+"' role='button'>"+this.getLabel(S)+"</a></li>"),1==this.options.useDelim&&S<b&&t.push("<li class='w2pageList_col_delimiter "+this.options.deliImageClass+"' "+v+">"+this.options.delimiter+"</li>");"1"!=this.options.buttonShowType&&"3"!=this.options.buttonShowType&&"4"!=this.options.buttonShowType||(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_next_page"):"",t.push("<li id='"+this.nextButtonId+"' class='w2pageList_control_next' "+d+"><button type='button' class='"+this.options.rightPageImageClass+"' title='"+p.B.getMessage("Pagelist_next_page")+"'></button></li>")),"0"==this.options.buttonShowType||"1"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("pagelist_nextList_page"):"",t.push("<li id='"+this.nextPageButtonId+"' class='w2pageList_control_pageNext' "+u+"><button type='button' class='"+this.options.rightPageBackImageClass+"' title='"+p.B.getMessage("pagelist_nextList_page")+"'></button></li>")):"3"==this.options.buttonShowType||"4"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_last_page"):"",t.push("<li id='"+this.nextPageButtonId+"' class='w2pageList_control_pageNext' "+u+"'><button type='button' class='"+this.options.rightPageBackImageClass+"' title='"+p.B.getMessage("Pagelist_last_page")+"'></button></li>")):(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_next_page"):"",t.push("<li id='"+this.nextPageButtonId+"' class='w2pageList_control_pageNext' "+u+"'><button type='button' class='"+this.options.rightPageBackImageClass+"' title='"+p.B.getMessage("Pagelist_next_page")+"'></button></li>")),t.push("</ul>")}else if("list"==this.options.renderType){t.push("<ul class='w2pageList_ul'>"),"0"==this.options.buttonShowType||"1"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("pagelist_previousList_page"):"",t.push("<li id='"+this.prevPageButtonId+"' class='w2pageList_control_pagePrev "+this.options.leftPageBackImageClass+"' "+h+"><a href=#"+this.prevPageButtonId+" title='"+I+"'><img "+r+" alt='"+p.B.getMessage("pagelist_previousList_page")+"'/></a></li>")):"3"==this.options.buttonShowType||"4"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_first_page"):"",t.push("<li id='"+this.prevPageButtonId+"' class='w2pageList_control_pagePrev "+this.options.leftPageBackImageClass+"' "+h+"><a href=#"+this.prevPageButtonId+" title='"+I+"'><img "+r+" alt='"+p.B.getMessage("Pagelist_first_page")+"'/></a></li>")):(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_previous_page"):"",t.push("<li id='"+this.prevPageButtonId+"' class='w2pageList_control_pagePrev "+this.options.leftPageBackImageClass+"' "+h+"><a href=#"+this.prevPageButtonId+" title='"+I+"'><img "+r+" alt='"+p.B.getMessage("Pagelist_previous_page")+"'/></a></li>")),
"1"!=this.options.buttonShowType&&"3"!=this.options.buttonShowType&&"4"!=this.options.buttonShowType||(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_previous_page"):"",t.push("<li id='"+this.prevButtonId+"' class='w2pageList_control_prev "+this.options.leftPageImageClass+"' "+l+"><a href=#"+this.prevButtonId+" title='"+I+"'><img "+g+" alt='"+p.B.getMessage("Pagelist_previous_page")+"'/></a></li>"));b=Math.min(this.pageCount,this.displayIndex+this.options.pageSize-1);if(m)t.push("<li class='w2pageList_li_label' "+_+"><input id='"+this.id+"_input' style='ime-mode:disabled' value ='"+this.displayIndex+"'class='w2pageList_input' onkeydown='window."+WebSquare.noConflict+".comp."+this.id+".onInputKeyEventHandler(event)'onblur='window."+WebSquare.noConflict+".comp."+this.id+".onBlurEvent(event)'onkeypress='window."+WebSquare.noConflict+".comp."+this.id+".onInputKeyEventHandler(event)'/><span> /"+this.pageCount+"</span></li>");else for(S=this.displayIndex;S<=b;S++)I=this.options.nativeTooltip?this.getLabel(S):"",this.options.href?t.push("<li class='w2pageList_li_label' "+_+"><a id='"+this.id+"_page_"+S+"' "+a+" class='w2pageList_control_label "+this.options.defaultClass+"' "+e+"='"+S+"' role='button' title='"+I+"'>"+this.getLabel(S)+"</a></li>"):t.push("<li class='w2pageList_li_label' "+_+"><a id='"+this.id+"_page_"+S+"' href=#"+this.id+"_page_"+S+" class='w2pageList_control_label "+this.options.defaultClass+"' "+e+"='"+S+"' role='button' title='"+I+"'>"+this.getLabel(S)+"</a></li>"),1==this.options.useDelim&&S<b&&t.push("<li class='w2pageList_col_delimiter "+this.options.deliImageClass+"' "+v+">"+this.options.delimiter+"</li>");"1"!=this.options.buttonShowType&&"3"!=this.options.buttonShowType&&"4"!=this.options.buttonShowType||(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_next_page"):"",t.push("<li id='"+this.nextButtonId+"' class='w2pageList_control_next "+this.options.rightPageImageClass+"' "+d+"><a href=#"+this.nextButtonId+" title='"+I+"'><img "+c+" alt='"+p.B.getMessage("Pagelist_next_page")+"'/></a></li>")),"0"==this.options.buttonShowType||"1"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("pagelist_nextList_page"):"",t.push("<li id='"+this.nextPageButtonId+"' class='w2pageList_control_pageNext "+this.options.rightPageBackImageClass+"' "+u+"><a href=#"+this.nextPageButtonId+" title='"+I+"'><img "+y+" alt='"+p.B.getMessage("pagelist_nextList_page")+"'/></a></li>")):"3"==this.options.buttonShowType||"4"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_last_page"):"",t.push("<li id='"+this.nextPageButtonId+"' class='w2pageList_control_pageNext "+this.options.rightPageBackImageClass+"' "+u+"'><a href=#"+this.nextPageButtonId+" title='"+I+"'><img "+y+" alt='"+p.B.getMessage("Pagelist_last_page")+"'/></a></li>")):(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_next_page"):"",t.push("<li id='"+this.nextPageButtonId+"' class='w2pageList_control_pageNext "+this.options.rightPageBackImageClass+"' "+u+"'><a href=#"+this.nextPageButtonId+" title='"+I+"'><img "+y+" alt='"+p.B.getMessage("Pagelist_next_page")+"'/></a></li>")),t.push("</ul>")}else{t.push("<table class='w2pageList_table'><tr>"),"0"==this.options.buttonShowType||"1"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("pagelist_previousList_page"):"",t.push("<td  id='"+this.prevPageButtonId+"' role='button' class='w2pageList_control_pagePrev "+this.options.leftPageBackImageClass+"' "+h+" role='button' "+s+" title='"+I+"'></td>")):"3"==this.options.buttonShowType||"4"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_first_page"):"",t.push("<td  id='"+this.prevPageButtonId+"' role='button' class='w2pageList_control_pagePrev "+this.options.leftPageBackImageClass+"' "+h+" role='button' "+s+" title='"+I+"'></td>")):(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_previous_page"):"",
t.push("<td  id='"+this.prevPageButtonId+"' role='button' class='w2pageList_control_pagePrev "+this.options.leftPageBackImageClass+"' "+h+" role='button' "+s+" title='"+I+"'></td>")),"1"!=this.options.buttonShowType&&"3"!=this.options.buttonShowType&&"4"!=this.options.buttonShowType||(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_previous_page"):"",t.push("<td id='"+this.prevButtonId+"' role='button' class='w2pageList_control_prev "+this.options.leftPageImageClass+"' "+l+" role='button' "+s+" title='"+I+"'></td>"));b=Math.min(this.pageCount,this.displayIndex+this.options.pageSize-1);if(m)t.push("<td class='w2pageList_col_label_input' "+_+"><div><input id='"+this.id+"_input' style='ime-mode:disabled' value ='"+this.displayIndex+"'class='w2pageList_input' onkeydown='window."+WebSquare.noConflict+".comp."+this.id+".onInputKeyEventHandler(event)'onblur='window."+WebSquare.noConflict+".comp."+this.id+".onBlurEvent(event)'onkeypress='window."+WebSquare.noConflict+".comp."+this.id+".onInputKeyEventHandler(event)'/><span> /"+this.pageCount+"</span></div></td>");else for(S=this.displayIndex;S<=b;S++)I=this.options.nativeTooltip?this.getLabel(S):"",t.push("<td class='w2pageList_col_label' "+_+"><div id='"+this.id+"_page_"+S+"' class='w2pageList_control_label "+this.options.defaultClass+"' "+e+"='"+S+"' role='button' "+s+" title='"+I+"'>"+this.getLabel(S)+"</div></td>"),1==this.options.useDelim&&S<b&&t.push("<td class='w2pageList_col_delimiter "+this.options.deliImageClass+"' "+v+">"+this.options.delimiter+"</td>");"1"!=this.options.buttonShowType&&"3"!=this.options.buttonShowType&&"4"!=this.options.buttonShowType||(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_next_page"):"",t.push("<td id='"+this.nextButtonId+"' role='button' class='w2pageList_control_next "+this.options.rightPageImageClass+"' "+d+" "+s+" title='"+I+"'></td>")),"0"==this.options.buttonShowType||"1"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("pagelist_nextList_page"):"",t.push("<td id='"+this.nextPageButtonId+"' role='button' class='w2pageList_control_pageNext "+this.options.rightPageBackImageClass+"' "+u+" "+s+" title='"+I+"'></td>")):"3"==this.options.buttonShowType||"4"==this.options.buttonShowType?(I=this.options.nativeTooltip?p.B.getMessage("Pagelist_last_page"):"",t.push("<td id='"+this.nextPageButtonId+"' role='button' class='w2pageList_control_pageNext "+this.options.rightPageBackImageClass+"' "+u+" "+s+" title='"+I+"'></td>")):(I=this.options.nativeTooltip?p.B.getMessage("pagelist_next_page"):"",t.push("<td id='"+this.nextPageButtonId+"' role='button' class='w2pageList_control_pageNext "+this.options.rightPageBackImageClass+"' "+u+" "+s+" title='"+I+"'></td>")),t.push("</tr></table>")}return t.push("</div>"),t.join("")}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setAction=function(){try{this.event.addListener(this.render,"onclick",this.event.bindAsEventListener(this,this.handleClickEvent)),this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseoverEvent)),this.event.addListener(this.render,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseoutEvent)),this.event.addListener(this.render,"onkeydown",this.event.bindAsEventListener(this,this.handleKeydownEvent))}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.handleKeydownEvent=function(t){try{if(13!=(t.charCode?t.charCode:t.keyCode))return;var e=t.srcElement||t.target;"a"==e.nodeName.toLowerCase()?null==e.getAttribute("href")&&this.handleClickEvent(t):this.handleClickEvent(t)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.getLabel=function(t){try{return WebSquare.text.formatCurrency(t,this.options.displayFormat)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.getCount=function(){try{return this.pageCount}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setCount=function(t,e){try{var i=e||!1;if(e&&t<this.selectedIndex&&($l("range exception for "+this.id),i=!1),
this.options.displaySearchbox)var s=parseInt(t,10)||0;else s="string"==typeof t?parseInt(t,10)||0:t;this.pageCount=s,(0==i||this.selectedIndex<1)&&(this.displayIndex=1),this.redraw(),0==i||this.selectedIndex<1?this.setSelectedIndex(1):this.setSelectedIndex(this.selectedIndex)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setSelectedIndex=function(t){try{if(0==this.pageCount){if("auto"==this.options.displayButtonType||"autoOver"==this.options.displayButtonType){var e=document.getElementById(this.prevPageButtonId),i=document.getElementById(this.prevButtonId),s=document.getElementById(this.nextButtonId),l=document.getElementById(this.nextPageButtonId);e&&(e.style.visibility="hidden"),i&&(i.style.visibility="hidden"),s&&(s.style.visibility="hidden"),l&&(l.style.visibility="hidden")}return}if(n.Z.isNull(t))return;if((t=parseInt(t,10))<1||t>this.pageCount||isNaN(t))return void $l("range exception for "+this.id);var p=this.selectedIndex;this.setDisplayIndex(t);var h=document.getElementById(this.id+"_page_"+this.selectedIndex);h&&(this.changeClass(h,this.options.selectedClass,this.options.defaultClass),h.removeAttribute("title")),this.selectedIndex=t,this.changeButtonCursor(t);var g=document.getElementById(this.id+"_page_"+t);g&&(this.changeClass(g,this.options.defaultClass,this.options.selectedClass),g.setAttribute("title",WebSquare.language.getMessage("Pagelist_selected",g.textContent||g.innerText))),p>0&&p!=this.selectedIndex&&a.f.fireEvent(this,"onchange",this.selectedIndex,p);var r=this.options.displayButtonType,d=this.options.pagingType;if("display"!=r){e=document.getElementById(this.prevPageButtonId),i=document.getElementById(this.prevButtonId),s=document.getElementById(this.nextButtonId),l=document.getElementById(this.nextPageButtonId);var u=!1,c=!1,y=!1;if("auto"==r||"autoOver"==r||"autoHidden"==r){if("autoHidden"==r){if("4"==this.options.buttonShowType)1==this.selectedIndex?c=!0:this.selectedIndex==this.pageCount&&(u=!0);else if(this.options.pageSize>=this.pageCount)y=!0;else if("1"==d){var _=this.pageCount-this.options.pageSize+1;this.selectedIndex<=this.options.pageSize&&this.selectedIndex<_?c=!0:this.selectedIndex>=_&&(u=!0)}else if("2"==d){var v;v=0==parseInt(this.pageCount%this.options.pageSize)?this.pageCount-this.options.pageSize+1:this.pageCount-parseInt(this.pageCount%this.options.pageSize)+1,this.selectedIndex<=this.options.pageSize?c=!0:this.selectedIndex>=v&&(u=!0)}}else 1===this.selectedIndex?c=!0:this.selectedIndex==this.pageCount&&(u=!0);c?(e&&(e.style.visibility="hidden"),i&&(i.style.visibility="hidden"),s&&(s.style.visibility="visible"),l&&(l.style.visibility="visible")):u?(e&&(e.style.visibility="visible"),i&&(i.style.visibility="visible"),s&&(s.style.visibility="hidden"),l&&(l.style.visibility="hidden")):y?(e&&(e.style.visibility="hidden"),i&&(i.style.visibility="hidden"),s&&(s.style.visibility="hidden"),l&&(l.style.visibility="hidden")):(e&&(e.style.visibility="visible"),i&&(i.style.visibility="visible"),s&&(s.style.visibility="visible"),l&&(l.style.visibility="visible"))}("displayOver"==r||"autoOver"==r)&&this.options.pageSize>=this.pageCount&&(e&&(e.style.visibility="hidden"),i&&(i.style.visibility="hidden"),s&&(s.style.visibility="hidden"),l&&(l.style.visibility="hidden"))}}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setFocus=function(t){try{if(0==this.pageCount)return;if(n.Z.isNull(t))return;if((t=t.toString())<1||t>this.pageCount)return void $l("range exception for "+this.id);var e=document.getElementById(this.id+"_page_"+t);e&&e.focus()}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setIdxClass=function(t){try{this.setSelectedIndex(t)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.getSelectedIndex=function(){try{return this.selectedIndex}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setValue=function(t){try{if(n.Z.isNull(t))return;t=t.toString(),this.options.displaySearchbox&&isNaN(t)&&(t=this.selectedIndex),this.setSelectedIndex(t)}catch(t){
o.Y.printStackTrace(t,null,this)}},h.prototype.moveLeft=function(){try{this.setSelectedIndex(this.selectedIndex-1),this.setFocus(this.selectedIndex)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.moveRight=function(){try{this.setSelectedIndex(this.selectedIndex+1),this.setFocus(this.selectedIndex)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.pageLeft=function(){try{if(this.options.displaySearchbox)var t=1;else t=this.selectedIndex-this.options.pageSize;this.setDisplayIndex(t),this.setSelectedIndex(this.displayIndex),this.setFocus(this.selectedIndex)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.pageLeftLast=function(){try{if(1==this.displayIndex)this.setSelectedIndex(1);else{var t=this.selectedIndex-this.options.pageSize;this.setDisplayIndex(t);var e=this.displayIndex+this.options.pageSize-1;this.setSelectedIndex(e),this.setFocus(this.selectedIndex)}}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.pageRight=function(){try{if(this.options.displaySearchbox)var t=this.selectedIndex+this.pageCount;else t=this.selectedIndex+this.options.pageSize;this.setDisplayIndex(t),1==this.options.pagingType&&t>this.pageCount?this.setSelectedIndex(this.pageCount):this.setSelectedIndex(this.displayIndex),this.setFocus(this.selectedIndex)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setDisplayIndex=function(t){try{if(0==this.pageCount)return;var e;if(this.options.displaySearchbox)document.getElementById(this.id+"_input").value=t,e=t;else t=parseInt(t,10),e=parseInt((t-1)/this.options.pageSize)*this.options.pageSize+1,"1"==this.options.pagingType&&"3"!=this.options.buttonShowType&&t+this.options.pageSize>this.pageCount&&(e=this.pageCount-this.options.pageSize+1);if("2"==this.options.buttonShowType&&"1"==this.options.naviType&&(e=t),e<1&&(e=1),e>this.pageCount&&(e=this.pageCount),this.displayIndex==e||isNaN(e))return;this.displayIndex=e,this.redraw()}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.changeButtonCursor=function(t){try{"3"==this.options.buttonShowType||"2"==this.options.buttonShowType?(1==this.displayIndex?this.addClass("w2pageList_prev_last"):this.removeClass("w2pageList_prev_last"),this.displayIndex+this.options.pageSize>this.pageCount?this.addClass("w2pageList_next_last"):this.removeClass("w2pageList_next_last"),1==t?this.addClass("w2pageList_pagePrev_last"):this.removeClass("w2pageList_pagePrev_last"),t==this.pageCount?this.addClass("w2pageList_pageNext_last"):this.removeClass("w2pageList_pageNext_last")):(1==this.displayIndex?this.addClass("w2pageList_pagePrev_last"):this.removeClass("w2pageList_pagePrev_last"),this.displayIndex+this.options.pageSize>this.pageCount?this.addClass("w2pageList_pageNext_last"):this.removeClass("w2pageList_pageNext_last"),1==t?this.addClass("w2pageList_prev_last"):this.removeClass("w2pageList_prev_last"),t==this.pageCount?this.addClass("w2pageList_next_last"):this.removeClass("w2pageList_next_last"))}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.setPageSize=function(t){try{this.options.pageSize="string"==typeof t?parseInt(t,10)||this.options.pageSize:t||this.options.pageSize}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.getPageSize=function(){try{return this.options.pageSize}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.getSeperator=function(t){try{var e="";return 0!=t.length&&(e=";"),e}catch(t){WebSquare.exception.printStackTrace(t,null,this)}},h.prototype.handleClickEvent=function(t){try{for(var e=n.Z.getDataPrefix("index"),i=this.event.getTargetIterator(t,this.render),s=this.getSelectedIndex();i.next();)if(i.match("w2pageList_control_pagePrev")&&("2"==this.options.buttonShowType?this.moveLeft():"3"==this.options.buttonShowType||"4"==this.options.buttonShowType?this.setSelectedIndex(1):("0"==this.options.buttonShowType||this.options.buttonShowType,this.pageLeft()),a.f.fireEvent(this,"onclick",this.getSelectedIndex()),"list"==this.options.renderType&&a.f.stopEvent(t)),
i.match("w2pageList_control_prev")&&("3"==this.options.buttonShowType?this.pageLeftLast():this.moveLeft(),a.f.fireEvent(this,"onclick",this.getSelectedIndex()),"list"==this.options.renderType&&a.f.stopEvent(t)),i.match("w2pageList_control_next")&&("3"==this.options.buttonShowType?this.pageRight():this.moveRight(),a.f.fireEvent(this,"onclick",this.getSelectedIndex()),"list"==this.options.renderType&&a.f.stopEvent(t)),i.match("w2pageList_control_pageNext")&&("2"==this.options.buttonShowType?this.moveRight():"3"==this.options.buttonShowType||"4"==this.options.buttonShowType?this.setSelectedIndex(this.pageCount):("0"==this.options.buttonShowType||this.options.buttonShowType,this.pageRight()),a.f.fireEvent(this,"onclick",this.getSelectedIndex()),"list"==this.options.renderType&&a.f.stopEvent(t)),i.match("w2pageList_control_label")){var l=i.getElement().getAttribute(e);this.setSelectedIndex(l),a.f.fireEvent(this,"onclick",l),"list"==this.options.renderType&&a.f.stopEvent(t)}i=null;var p=this.getSelectedIndex();if(s!=p){var h={oldSelectedIndex:s,newSelectedIndex:p};a.f.fireEvent(this,"onviewchange",h)}}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.handleMouseoverEvent=function(t){try{a.f.stopEvent(t);for(var e=this.event.getTargetIterator(t,this.render);e.next();)e.match("w2pageList_control_label")?this.addClass(e.getElement(),"w2pageList_label_over"):e.match("w2pageList_col_prev")?this.addClass(e.getElement(),"w2pageList_col_prev_over"):e.match("w2pageList_col_next")?this.addClass(e.getElement(),"w2pageList_col_next_over"):e.match("w2pageList_col_prevPage")?this.addClass(e.getElement(),"w2pageList_col_prevPage_over"):e.match("w2pageList_col_nextPage")&&this.addClass(e.getElement(),"w2pageList_col_nextPage_over");e=null}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.handleMouseoutEvent=function(t){try{a.f.stopEvent(t);for(var e=this.event.getTargetIterator(t,this.render);e.next();)e.match("w2pageList_control_label")?this.removeClass(e.getElement(),"w2pageList_label_over"):e.match("w2pageList_col_prev")?this.removeClass(e.getElement(),"w2pageList_col_prev_over"):e.match("w2pageList_col_next")?this.removeClass(e.getElement(),"w2pageList_col_next_over"):e.match("w2pageList_col_prevPage")?this.removeClass(e.getElement(),"w2pageList_col_prevPage_over"):e.match("w2pageList_col_nextPage")&&this.removeClass(e.getElement(),"w2pageList_col_nextPage_over");e=null}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.onInputKeyEventHandler=function(t){try{var e=t.charCode?t.charCode:t.keyCode,i=48<=e&&e<=57||96<=e&&e<=105,s=document.getElementById(this.id+"_input");13==e&&(s.blur(),this.options.displaySelectedIndex&&(s.value>this.pageCount||s.value<=0||""==s.value||null==s.value)?(s.value=this.selectedIndex,this.setValue(s.value)):this.setValue(s.value)),i&&16!=e||8==e||37==e&&"ArrowLeft"==t.key||39==e&&"ArrowRight"==t.key||a.f.stopEvent(t)}catch(t){o.Y.printStackTrace(t,null,this)}},h.prototype.onBlurEvent=function(t){try{var e=document.getElementById(this.id+"_input");this.options.displaySelectedIndex&&(e.value>this.pageCount||e.value<=0||""==e.value||null==e.value)?(e.value=this.selectedIndex,this.setValue(e.value)):this.setValue(e.value),a.f.fireEvent(this,"oninputblur",e.value)}catch(t){o.Y.printStackTrace(t,null,this)}}}}]);
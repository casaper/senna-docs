System.register(["./p-11664c1d.system.js"],(function(t){"use strict";var e,r,n;return{setters:[function(t){e=t.r;r=t.h;n=t.H}],execute:function(){var a="table{background:transparent;border:var(--sen-table-border-width, 0) solid var(--sen-table-border-color, #DEDCDC);border-spacing:0}th,td{text-align:left;padding:var(--sen-table-cell-padding-y, 0.4rem) var(--sen-table-cell-padding-x, 0.6rem)}th{background:var(--sen-table-header-bg, #F8F6F6)}tr:hover{background:var(--sen-table-row-active-bg, #E9E6E6)}";var l=t("sen_table",function(){function t(t){e(this,t);this.headers=[];this.data=[]}t.prototype.render=function(){var t=this;return r(n,null,r("table",{class:"table"},r("thead",null,this.headers.map((function(t){return r("th",{style:{textAlign:t.textAlign}},t.value)}))),r("tbody",null,this.data.map((function(e){return r("tr",null,t.headers.map((function(t){return r("td",{style:{textAlign:e[t.key].textAlign||t.textAlign}},e[t.key])})))})))))};return t}());l.style=a}}}));
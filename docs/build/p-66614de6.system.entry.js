var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;for(var o=Array(t),n=0,r=0;r<e;r++)for(var a=arguments[r],s=0,i=a.length;s<i;s++,n++)o[n]=a[s];return o};System.register(["./p-3caa821a.system.js"],(function(t){"use strict";var r,e,o;return{setters:[function(t){r=t.r;e=t.h;o=t.H}],execute:function(){var n="docs-page-footer{margin-top:6rem}docs-page-footer contributor-list{margin-right:0.5em}docs-page-footer .last-updated{color:var(--text-color--light);font-weight:normal;margin-left:auto;text-decoration:underline}docs-page-footer .page-footer__row{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-size:12px;margin-top:2rem}";var a=function(){function t(t){r(this,t)}t.prototype.hostData=function(){return{role:"contentinfo"}};t.prototype.__stencil_render=function(){var t=this.page;if(t===null||!t.github){return null}var r=t.github,o=r.path,n=r.lastUpdated;var a=Array.from(new Set(__spreadArrays(t.github.contributors||[],t.contributors||[])));var s="https://github.com/senna-ui/senna-docs/commits/master/"+o;var i=n?new Date(n).toISOString().slice(0,10):null;var l=function(t){return s+"?author="+t};var u=t.previousText&&t.previousUrl||t.nextText&&t.nextUrl?e("docs-pagination",{page:t}):"";return[u,e("div",{class:"page-footer__row"},a.length>0?e("contributor-list",{contributors:a,link:l}):null,i!==null?e("a",{class:"last-updated",href:s},"Updated ",i):"")]};t.prototype.render=function(){return e(o,this.hostData(),this.__stencil_render())};return t}();t("docs_page_footer",a);a.style=n}}}));
System.register(["./p-3caa821a.system.js","./p-4bf330c1.system.js"],(function(e){"use strict";var t,s,l,o,n;return{setters:[function(e){t=e.r;s=e.h;l=e.g;o=e.H},function(e){n=e.D}],execute:function(){var i="docs-menu-collapsible{display:block;outline:none;border-top:1px solid #DEE3EA;padding-bottom:.35rem}docs-menu-collapsible .docs-menu-collapsible__title{--item-spacing:10px;font-weight:600;font-size:12px;line-height:14px;letter-spacing:0.06em;text-transform:uppercase;color:#020814;display:-ms-flexbox;display:flex;padding-top:16px;padding-right:20px;padding-left:calc(14px + 1 * 10px);letter-spacing:.085em}docs-menu-collapsible .docs-menu-collapsible__title svg{width:14px;fill:#5B708B;margin-left:auto;height:18px;display:inline-block;-webkit-transition:.2s transform ease;transition:.2s transform ease}docs-menu-collapsible.docs-menu-collapsible--status-closed .docs-menu-collapsible__title svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}docs-menu-collapsible.docs-menu-collapsible--status-closed .docs-menu-collapsible__contents{display:none}docs-menu-collapsible .docs-menu-collapsible__contents .Nav{padding-bottom:0;padding-top:.6rem}";var a=function(){function e(e){t(this,e);this.isOpen=true}e.prototype.hostData=function(){return{class:"docs-menu-collapsible--status-open",role:"button",tabindex:"0","aria-label":"Collapsible Menu"}};e.prototype.toggle=function(){this.isOpen=!this.isOpen;c(this.el,"docs-menu-collapsible--status-");this.el.classList.add("docs-menu-collapsible--status-"+(this.isOpen?"open":"closed"))};e.prototype.__stencil_render=function(){var e=this;return[s("a",{onClick:function(){return e.toggle()},class:"docs-menu-collapsible__title"},this.heading,s(n,null)),s("div",{class:"docs-menu-collapsible__contents"},s("slot",null))]};Object.defineProperty(e.prototype,"el",{get:function(){return l(this)},enumerable:false,configurable:true});e.prototype.render=function(){return s(o,this.hostData(),this.__stencil_render())};return e}();e("docs_menu_collapsible",a);var c=function(e,t){e.classList.forEach((function(s){if(s.startsWith(t)){e.classList.remove(s)}}))};a.style=i}}}));
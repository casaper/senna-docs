System.register(["./p-3caa821a.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var o="docs-button{background-color:rgba(var(--accent-color-rgb), var(--bg-alpha, 0.06));border-radius:6px;color:var(--accent-color);display:inline-block;font-weight:600;white-space:nowrap}docs-button a,docs-button button{color:inherit;display:inline-block;font-size:inherit;font-weight:inherit;padding:0.75em 1.5em}docs-button button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;line-height:inherit}docs-button svg{fill:currentColor;height:1em;margin-bottom:-0.125em;width:1em}docs-button[round]{border-radius:2em}@media (hover: hover){docs-button:hover{--bg-alpha:0.08}docs-button:active{--bg-alpha:0.10}}";var r=function(){function t(t){e(this,t);this.round=false}t.prototype.render=function(){if(this.href!==undefined){var t=/^\/docs/.test(this.href);if(t){return n("stencil-route-link",{url:this.href},n("slot",null))}return n("a",{href:this.href},n("slot",null))}return n("button",null,n("slot",null))};return t}();t("docs_button",r);r.style=o}}}));
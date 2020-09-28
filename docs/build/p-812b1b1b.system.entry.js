System.register(["./p-3caa821a.system.js","./p-9545a4b3.system.js"],(function(o){"use strict";var e,c,r,l;return{setters:[function(o){e=o.r;c=o.h;r=o.g},function(o){l=o.C}],execute:function(){var d=function(o,e){if(o===void 0){o="#ffffff"}if(e===void 0){e="#000000"}var c=new l(o);var r="";for(var d=5;d<100;d=d+5){var t=d+"0";var n=d/100;r+="  --sen-color-step-"+t+': <code-color mode="md" value="'+c.mix(e,n).hex+'"></code-color>;';if(d<95){r+="\n"}}return r};var t=".stepped-color-pickers{display:-ms-flexbox;display:flex;margin-bottom:20px}color-gen-variable-selector{display:block;width:50%;margin:5px;border:0;-webkit-box-shadow:0 4px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.08);box-shadow:0 4px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.08);border-radius:4px}@media (max-width: 900px){.stepped-color-pickers{-ms-flex-direction:column;flex-direction:column}color-gen-variable-selector{width:100%}}color-gen-css-text .css-text__code{height:630px}color-gen-css-text code-color code{background:transparent;color:inherit;margin:0 0 0 6px;padding:0}stepped-color-generator .stepped-color-header h3{margin-bottom:1.5em}";var n=function(){function o(o){e(this,o);this.cssText=s;this.backgroundColor="#ffffff";this.textColor="#000000"}o.prototype.onColorChange=function(){var o=this.el.querySelector("#background").value;var e=this.el.querySelector("#text").value;this.backgroundColor=o;this.textColor=e;var c=new l(o);var r=new l(e);var t=d(o,e);this.cssText=':root {\n  --ion-background-color: <code-color mode="md" value="'+o+'"></code-color>;\n  --ion-background-color-rgb: <code-color mode="md" value="'+o+'" display="'+c.toList()+'"></code-color>;\n\n  --ion-text-color: <code-color mode="md" value="'+e+'"></code-color>;\n  --ion-text-color-rgb: <code-color mode="md" value="'+e+'" display="'+r.toList()+'"></code-color>;\n\n'+t+"\n}"};o.prototype.onCssTextChange=function(o){this.cssText=o.detail};o.prototype.render=function(){return[c("div",{class:"stepped-color-pickers"},c("color-gen-variable-selector",{id:"background",name:"Background",value:this.backgroundColor}),c("color-gen-variable-selector",{id:"text",name:"Text",value:this.textColor})),c("color-gen-css-text",{cssText:this.cssText})]};Object.defineProperty(o.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return o}();o("stepped_color_generator",n);var s='\n:root {\n  --ion-background-color: <code-color mode="md" value="#ffffff"></code-color>;\n  --ion-background-color-rgb: <code-color mode="md" value="#ffffff" display="255,255,255"></code-color>;\n\n  --ion-text-color: <code-color mode="md" value="#000000"></code-color>;\n  --ion-text-color-rgb: <code-color mode="md" value="#000000" display="0,0,0"></code-color>;\n\n  --sen-color-step-50: <code-color mode="md" value="#f2f2f2"></code-color>;\n  --sen-color-step-100: <code-color mode="md" value="#e6e6e6"></code-color>;\n  --sen-color-step-150: <code-color mode="md" value="#d9d9d9"></code-color>;\n  --sen-color-step-200: <code-color mode="md" value="#cccccc"></code-color>;\n  --sen-color-step-250: <code-color mode="md" value="#bfbfbf"></code-color>;\n  --sen-color-step-300: <code-color mode="md" value="#b3b3b3"></code-color>;\n  --sen-color-step-350: <code-color mode="md" value="#a6a6a6"></code-color>;\n  --sen-color-step-400: <code-color mode="md" value="#999999"></code-color>;\n  --sen-color-step-450: <code-color mode="md" value="#8c8c8c"></code-color>;\n  --sen-color-step-500: <code-color mode="md" value="#808080"></code-color>;\n  --sen-color-step-550: <code-color mode="md" value="#737373"></code-color>;\n  --sen-color-step-600: <code-color mode="md" value="#666666"></code-color>;\n  --sen-color-step-650: <code-color mode="md" value="#595959"></code-color>;\n  --sen-color-step-700: <code-color mode="md" value="#4d4d4d"></code-color>;\n  --sen-color-step-750: <code-color mode="md" value="#404040"></code-color>;\n  --sen-color-step-800: <code-color mode="md" value="#333333"></code-color>;\n  --sen-color-step-850: <code-color mode="md" value="#262626"></code-color>;\n  --sen-color-step-900: <code-color mode="md" value="#191919"></code-color>;\n  --sen-color-step-950: <code-color mode="md" value="#0d0d0d"></code-color>;\n}\n'.trim();n.style=t}}}));
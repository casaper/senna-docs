import{r as o,h as e,g as c}from"./p-2bb7e3b8.js";import{C as r}from"./p-7f4bf43e.js";class d{constructor(e){o(this,e),this.cssText=l,this.backgroundColor="#ffffff",this.textColor="#000000"}onColorChange(){const o=this.el.querySelector("#background").value,e=this.el.querySelector("#text").value;this.backgroundColor=o,this.textColor=e;const c=new r(o),d=new r(e),l=((o="#ffffff",e="#000000")=>{const c=new r(o);let d="";for(let r=5;r<100;r+=5)d+=`  --sen-color-step-${r+"0"}: <code-color mode="md" value="${c.mix(e,r/100).hex}"></code-color>;`,r<95&&(d+="\n");return d})(o,e);this.cssText=`:root {\n  --ion-background-color: <code-color mode="md" value="${o}"></code-color>;\n  --ion-background-color-rgb: <code-color mode="md" value="${o}" display="${c.toList()}"></code-color>;\n\n  --ion-text-color: <code-color mode="md" value="${e}"></code-color>;\n  --ion-text-color-rgb: <code-color mode="md" value="${e}" display="${d.toList()}"></code-color>;\n\n${l}\n}`}onCssTextChange(o){this.cssText=o.detail}render(){return[e("div",{class:"stepped-color-pickers"},e("color-gen-variable-selector",{id:"background",name:"Background",value:this.backgroundColor}),e("color-gen-variable-selector",{id:"text",name:"Text",value:this.textColor})),e("color-gen-css-text",{cssText:this.cssText})]}get el(){return c(this)}}const l='\n:root {\n  --ion-background-color: <code-color mode="md" value="#ffffff"></code-color>;\n  --ion-background-color-rgb: <code-color mode="md" value="#ffffff" display="255,255,255"></code-color>;\n\n  --ion-text-color: <code-color mode="md" value="#000000"></code-color>;\n  --ion-text-color-rgb: <code-color mode="md" value="#000000" display="0,0,0"></code-color>;\n\n  --sen-color-step-50: <code-color mode="md" value="#f2f2f2"></code-color>;\n  --sen-color-step-100: <code-color mode="md" value="#e6e6e6"></code-color>;\n  --sen-color-step-150: <code-color mode="md" value="#d9d9d9"></code-color>;\n  --sen-color-step-200: <code-color mode="md" value="#cccccc"></code-color>;\n  --sen-color-step-250: <code-color mode="md" value="#bfbfbf"></code-color>;\n  --sen-color-step-300: <code-color mode="md" value="#b3b3b3"></code-color>;\n  --sen-color-step-350: <code-color mode="md" value="#a6a6a6"></code-color>;\n  --sen-color-step-400: <code-color mode="md" value="#999999"></code-color>;\n  --sen-color-step-450: <code-color mode="md" value="#8c8c8c"></code-color>;\n  --sen-color-step-500: <code-color mode="md" value="#808080"></code-color>;\n  --sen-color-step-550: <code-color mode="md" value="#737373"></code-color>;\n  --sen-color-step-600: <code-color mode="md" value="#666666"></code-color>;\n  --sen-color-step-650: <code-color mode="md" value="#595959"></code-color>;\n  --sen-color-step-700: <code-color mode="md" value="#4d4d4d"></code-color>;\n  --sen-color-step-750: <code-color mode="md" value="#404040"></code-color>;\n  --sen-color-step-800: <code-color mode="md" value="#333333"></code-color>;\n  --sen-color-step-850: <code-color mode="md" value="#262626"></code-color>;\n  --sen-color-step-900: <code-color mode="md" value="#191919"></code-color>;\n  --sen-color-step-950: <code-color mode="md" value="#0d0d0d"></code-color>;\n}\n'.trim();d.style=".stepped-color-pickers{display:-ms-flexbox;display:flex;margin-bottom:20px}color-gen-variable-selector{display:block;width:50%;margin:5px;border:0;-webkit-box-shadow:0 4px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.08);box-shadow:0 4px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.08);border-radius:4px}@media (max-width: 900px){.stepped-color-pickers{-ms-flex-direction:column;flex-direction:column}color-gen-variable-selector{width:100%}}color-gen-css-text .css-text__code{height:630px}color-gen-css-text code-color code{background:transparent;color:inherit;margin:0 0 0 6px;padding:0}stepped-color-generator .stepped-color-header h3{margin-bottom:1.5em}";export{d as stepped_color_generator}
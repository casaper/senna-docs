import{r as o,h as t,g as e}from"./p-2bb7e3b8.js";class r{constructor(t){o(this,t),this.colors=["primary","secondary","tertiary","success","warning","danger","dark","medium","light"],this.activeColor=""}toggleActiveColor(o){this.activeColor=this.activeColor!==o?o:""}render(){const o=this.colors.map(o=>{const e=this.activeColor===o,r=getComputedStyle(this.el).getPropertyValue("--sen-color-"+o),n=getComputedStyle(this.el).getPropertyValue(`--sen-color-${o}-shade`),s=getComputedStyle(this.el).getPropertyValue(`--sen-color-${o}-tint`);return t("li",{class:{"color-menu-item":!0,"color-menu-item-active":e},style:{"background-color":`var(--sen-color-${o})`,color:`var(--sen-color-${o}-contrast)`}},t("div",{class:"color-menu-text",onClick:()=>this.toggleActiveColor(o)},o[0].toUpperCase()+o.substr(1),t("div",{class:"color-menu-value"},r)),t("svg",{width:"10px",height:"6px",viewBox:"0 0 10 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{id:"Welcome",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},t("g",{id:"Desktop-HD",transform:"translate(-1025.000000, -335.000000)",stroke:"currentColor","stroke-width":"2"},t("polyline",{id:"arrow",transform:"translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) ",points:"1028 334 1032 338.020022 1028 342"})))),t("ul",{class:"color-submenu"},t("li",{class:"color-submenu-item",style:{"background-color":`var(--sen-color-${o}-shade)`,color:`var(--sen-color-${o}-contrast)`}},t("div",{class:"color-menu-text"},"Shade",t("div",{class:"color-menu-value"},n))),t("li",{class:"color-submenu-item",style:{"background-color":`var(--sen-color-${o}-tint)`,color:`var(--sen-color-${o}-contrast)`}},t("div",{class:"color-menu-text"},"Tint",t("div",{class:"color-menu-value"},s)))))});return t("ul",{class:"color-menu"},o)}get el(){return e(this)}}r.style="color-accordion{display:block;padding-top:20px;margin-bottom:80px}.color-menu,.color-submenu{display:block;margin:0;padding:0;list-style-type:none}.color-menu-item{display:list-item;position:relative;margin-bottom:5px;list-style-type:none;font-family:var(--code-font-family);font-size:14px}.color-menu-item .color-menu-text{height:55px}.color-menu-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.color-menu-item>.color-menu-text{cursor:pointer}.color-menu-item svg{-webkit-transition:100ms -webkit-transform;transition:100ms -webkit-transform;transition:100ms transform;transition:100ms transform, 100ms -webkit-transform;position:absolute;top:24px;right:12px;pointer-events:none}.color-submenu{height:0;opacity:0}.color-submenu-item{display:list-item;margin:0;font-family:var(--code-font-family);font-size:13px;pointer-events:none;-webkit-transition:160ms height, 160ms opacity;transition:160ms height, 160ms opacity}.color-submenu-item .color-menu-text{height:40px}.color-menu-value{margin-left:auto;padding-right:40px}.color-menu-text{padding-left:20px}.color-menu-item-active svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.color-menu-item-active .color-submenu{height:80px;opacity:1;pointer-events:all}";export{r as color_accordion}
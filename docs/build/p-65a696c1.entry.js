import{r as t,h as e,H as o}from"./p-2bb7e3b8.js";import{O as s}from"./p-810552fb.js";class i{constructor(e){t(this,e),this.rounded=!1}hostData(){return{class:{"Item-rounded":this.rounded}}}__stencil_render(){const t=void 0===this.href,o=void 0!==this.href&&/^http/.test(this.href),i=e("header",{class:"Item-header"},this.header," ",o?e(s,null):null),r=[this.icon&&e("img",{src:this.icon,class:"Item-icon"}),e("div",{class:"Item-container"},this.ionicon&&e("ion-icon",{name:this.ionicon,class:"Item-ionicon"}),i,e("div",{class:"Item-content"},e("slot",null)))];return t?e("div",{class:"Item"},r):o?e("a",{class:"Item",href:this.href},r):e("stencil-route-link",{url:this.href,anchorClass:"Item"},r)}render(){return e(o,this.hostData(),this.__stencil_render())}}i.style="docs-item{display:block;font-size:12px;max-width:30em}.Item{background-color:var(--background);border-radius:4px;color:var(--text-color--light);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-size:14px;font-weight:normal;height:100%;-ms-flex-pack:start;justify-content:flex-start;line-height:1.6;-webkit-transition:-webkit-box-shadow 150ms ease-out, -webkit-transform 150ms ease-out;transition:-webkit-box-shadow 150ms ease-out, -webkit-transform 150ms ease-out;transition:box-shadow 150ms ease-out, transform 150ms ease-out;transition:box-shadow 150ms ease-out, transform 150ms ease-out, -webkit-box-shadow 150ms ease-out, -webkit-transform 150ms ease-out;width:100%;overflow:hidden;padding:1.65em 0 1.65em}.Item-container{padding-left:2em;padding-right:2em}.Item-icon{width:56px;height:56px;margin-bottom:1.2em;-o-object-fit:cover;object-fit:cover;-webkit-transition:150ms -webkit-transform ease-out;transition:150ms -webkit-transform ease-out;transition:150ms transform ease-out;transition:150ms transform ease-out, 150ms -webkit-transform ease-out;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.Item-rounded .Item-icon{border-radius:50%}.Item-ionicon{width:56px;height:56px;float:left;margin-right:1em}@media (hover: hover){.Item[href]:hover{-webkit-box-shadow:0 0.35em 1.175em rgba(2, 8, 20, 0.1), 0 0.175em 0.5em rgba(2, 8, 20, 0.08);box-shadow:0 0.35em 1.175em rgba(2, 8, 20, 0.1), 0 0.175em 0.5em rgba(2, 8, 20, 0.08);-webkit-transform:translateY(-2px);transform:translateY(-2px)}.Item[href]:hover .Item-icon{-webkit-transform:scale(.8, .8);transform:scale(.8, .8)}}.Item-content>*:first-child{margin-top:0}.Item-content>*:last-child{margin-bottom:0}.Item-content>*{margin:0 0 0.65em}.Item-header{color:var(--text-color--dark);font-size:16px;font-weight:600;line-height:1.4;margin-bottom:0.45em}.Item-without-image .Item-header{font-size:1.2em;margin-bottom:0.3em}.Item-header>svg{fill:currentColor;height:1em;margin-bottom:-0.125em;width:auto}.markdown-content p docs-item{margin-top:1em}";export{i as docs_item}
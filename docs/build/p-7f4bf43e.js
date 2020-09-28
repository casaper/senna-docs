const t=t=>{const s=t.toString(16);return 1===s.length?"0"+s:s},s=t=>"#"+(t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(t,s,r,h)=>s+s+r+r+h+h)).replace("#",""),r=({r:s,g:r,b:h})=>"#"+t(s)+t(r)+t(h),h=({r:t,g:s,b:r})=>{t=Math.max(Math.min(t/255,1),0),s=Math.max(Math.min(s/255,1),0),r=Math.max(Math.min(r/255,1),0);const h=Math.max(t,s,r),n=Math.min(t,s,r),i=Math.min(1,Math.max(0,(h+n)/2));let a,e,o;return h!==n?(a=h-n,o=i>.5?a/(2-h-n):a/(h+n),e=h===t?(s-r)/a+(s<r?6:0):h===s?(r-t)/a+2:(t-s)/a+4,e/=6):e=o=0,{h:Math.round(360*e),s:Math.round(100*o),l:Math.round(100*i)}};class n{constructor(t){var n,i;if("string"==typeof t&&/rgb\(/.test(t)){const s=null!==(n=/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.exec(t))&&void 0!==n?n:[];t={r:parseInt(s[0],10),g:parseInt(s[1],10),b:parseInt(s[2],10)}}else if("string"==typeof t&&/hsl\(/.test(t)){const s=null!==(i=/hsl\((\d{1,3}), ?(\d{1,3}%), ?(\d{1,3}%)\)/.exec(t))&&void 0!==i?i:[];t={h:parseInt(s[0],10),s:parseInt(s[1],10),l:parseInt(s[2],10)}}if("string"==typeof t)t=t.replace(/\s/g,""),this.hex=s(t),this.rgb=(t=>{t=(t=s(t)).replace("#","");const r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:255&r}})(this.hex),this.hsl=h(this.rgb);else if("r"in t&&"g"in t&&"b"in t)this.rgb=t,this.hex=r(this.rgb),this.hsl=h(this.rgb);else{if(!("h"in t&&"s"in t&&"l"in t))throw new Error("Incorrect value passed.");this.hsl=t,this.rgb=(({h:t,s,l:r})=>{if(t/=360,r/=100,0==(s/=100))return{r:r=Math.round(255*r),g:r,b:r};const h=(t,s,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(s-t)*r:r<.5?s:r<2/3?t+(s-t)*(2/3-r)*6:t),n=r<.5?r*(1+s):r+s-r*s,i=2*r-n,a=h(i,n,t+1/3),e=h(i,n,t),o=h(i,n,t-1/3);return{r:Math.round(255*a),g:Math.round(255*e),b:Math.round(255*o)}})(this.hsl),this.hex=r(this.rgb)}this.yiq=(({r:t,g:s,b:r})=>(299*t+587*s+114*r)/1e3)(this.rgb)}static isColor(t){return!!/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(t)||/(^#[0-9a-fA-F]+)/.test(t.trim())}contrast(t=128){return new n(this.yiq>=t?"#000":"#fff")}mix(t,s=.5){const r=t instanceof n?t:new n(t);return new n(((t,s,r=.5)=>{const h=this.rgb,n=s.rgb,i=1-r;return{r:Math.round(r*n.r+i*h.r),g:Math.round(r*n.g+i*h.g),b:Math.round(r*n.b+i*h.b)}})(0,r,s))}shade(t=.12){return this.mix({r:0,g:0,b:0},t)}tint(t=.1){return this.mix({r:255,g:255,b:255},t)}toList(){const{r:t,g:s,b:r}=this.rgb;return`${t},${s},${r}`}}export{n as C}
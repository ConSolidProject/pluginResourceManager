"use strict";(self.webpackChunkresourcemanager=self.webpackChunkresourcemanager||[]).push([[985],{85985:(e,t,r)=>{r.r(t),r.d(t,{MuiThemeProvider:()=>O,ServerStyleSheets:()=>q,StylesProvider:()=>j.ZP,ThemeProvider:()=>O,alpha:()=>n.Fq,createGenerateClassName:()=>A.Z,createMuiTheme:()=>o.A,createStyles:()=>s,createTheme:()=>o.Z,darken:()=>n._j,decomposeColor:()=>n.tB,duration:()=>b.x9,easing:()=>b.Ui,emphasize:()=>n._4,fade:()=>n.U1,getContrastRatio:()=>n.mi,getLuminance:()=>n.H3,hexToRgb:()=>n.oo,hslToRgb:()=>n.ve,jssPreset:()=>U.Z,lighten:()=>n.$n,makeStyles:()=>f,recomposeColor:()=>n.wy,responsiveFontSizes:()=>S,rgbToHex:()=>n.vq,styled:()=>T.Z,unstable_createMuiStrictModeTheme:()=>a,useTheme:()=>k.Z,withStyles:()=>w.Z,withTheme:()=>N});var n=r(59693),o=r(48904),i=r(35953);function a(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return o.Z.apply(void 0,[(0,i.Z)({unstable_strictMode:!0},e)].concat(r))}function s(e){return e}var u=r(87462),c=r(73914),l=r(99700);const f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,c.Z)(e,(0,u.Z)({defaultTheme:l.Z},t))};var h=r(60288),m=r(4942);function v(e){return String(parseFloat(e)).length===String(e).length}function p(e){return parseFloat(e)}function d(e){return function(t,r){var n=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(n===r)return t;var o=p(t);if("px"!==n)if("em"===n)o=p(t)*p(e);else if("rem"===n)return o=p(t)*p(e),t;var i=o;if("px"!==r)if("em"===r)i=o/p(e);else{if("rem"!==r)return t;i=o/p(e)}return parseFloat(i.toFixed(5))+r}}function Z(e){var t=e.size,r=e.grid,n=t-t%r,o=n+r;return t-n<o-t?n:o}function g(e){var t=e.lineHeight;return e.pixels/(t*e.htmlFontSize)}function y(e){var t=e.cssProperty,r=e.min,n=e.max,o=e.unit,i=void 0===o?"rem":o,a=e.breakpoints,s=void 0===a?[600,960,1280]:a,u=e.transform,c=void 0===u?null:u,l=(0,m.Z)({},t,"".concat(r).concat(i)),f=(n-r)/s[s.length-1];return s.forEach((function(e){var n=r+f*e;null!==c&&(n=c(n)),l["@media (min-width:".concat(e,"px)")]=(0,m.Z)({},t,"".concat(Math.round(1e4*n)/1e4).concat(i))})),l}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.breakpoints,n=void 0===r?["sm","md","lg"]:r,o=t.disableAlign,i=void 0!==o&&o,a=t.factor,s=void 0===a?2:a,c=t.variants,l=void 0===c?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:c,f=(0,u.Z)({},e);f.typography=(0,u.Z)({},f.typography);var m=f.typography,p=d(m.htmlFontSize),S=n.map((function(e){return f.breakpoints.values[e]}));return l.forEach((function(e){var t=m[e],r=parseFloat(p(t.fontSize,"rem"));if(!(r<=1)){var n=r,o=1+(n-1)/s,a=t.lineHeight;if(!v(a)&&!i)throw new Error((0,h.Z)(6));v(a)||(a=parseFloat(p(a,"rem"))/parseFloat(r));var c=null;i||(c=function(e){return Z({size:e,grid:g({pixels:4,lineHeight:a,htmlFontSize:m.htmlFontSize})})}),m[e]=(0,u.Z)({},t,y({cssProperty:"fontSize",min:o,max:n,unit:"rem",breakpoints:S,transform:c}))}})),f}var T=r(61911),b=r(43366),k=r(8920),w=r(14670),x=r(45987),E=r(7271),F=r.n(E),P=(r(45697),r(8679)),R=r.n(P),z=r(159);function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,r=function(e){var r=F().forwardRef((function(r,n){var o=r.innerRef,i=(0,x.Z)(r,["innerRef"]),a=(0,z.Z)()||t;return F().createElement(e,(0,u.Z)({theme:a,ref:o||n},i))}));return R()(r,e),r};return r}M();const N=M({defaultTheme:l.Z});var C=r(15671),H=r(43144),_=r(54013),j=r(26975),A=r(5034),q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,C.Z)(this,e),this.options=t}return(0,H.Z)(e,[{key:"collect",value:function(e){var t=new Map;this.sheetsRegistry=new _.xE;var r=(0,A.Z)();return F().createElement(j.ZP,(0,u.Z)({sheetsManager:t,serverGenerateClassName:r,sheetsRegistry:this.sheetsRegistry},this.options),e)}},{key:"toString",value:function(){return this.sheetsRegistry?this.sheetsRegistry.toString():""}},{key:"getStyleElement",value:function(e){return F().createElement("style",(0,u.Z)({id:"jss-server-side",key:"jss-server-side",dangerouslySetInnerHTML:{__html:this.toString()}},e))}}]),e}(),G=r(83800),L=r(17076);const O=function(e){var t=e.children,r=e.theme,n=(0,z.Z)(),o=F().useMemo((function(){var e=null===n?r:function(e,t){return"function"==typeof t?t(e):(0,u.Z)({},e,t)}(n,r);return null!=e&&(e[L.Z]=null!==n),e}),[r,n]);return F().createElement(G.Z.Provider,{value:o},t)};var U=r(60246)},61911:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),o=r(45987),i=r(7271),a=r.n(i),s=r(86010),u=(r(45697),r(8679)),c=r.n(u),l=r(73914);function f(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}var h=r(99700);const m=function(e){var t=function(e){return function(t){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=i.name,h=(0,o.Z)(i,["name"]),m=u,v="function"==typeof t?function(e){return{root:function(r){return t((0,n.Z)({theme:e},r))}}}:{root:t},p=(0,l.Z)(v,(0,n.Z)({Component:e,name:u||e.displayName,classNamePrefix:m},h));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var d=a().forwardRef((function(t,i){var u=t.children,c=t.className,l=t.clone,h=t.component,m=(0,o.Z)(t,["children","className","clone","component"]),v=p(t),d=(0,s.Z)(v.root,c),Z=m;if(r&&(Z=f(Z,r)),l)return a().cloneElement(u,(0,n.Z)({className:(0,s.Z)(u.props.className,d)},Z));if("function"==typeof u)return u((0,n.Z)({className:d},Z));var g=h||e;return a().createElement(g,(0,n.Z)({ref:i,className:d},Z),u)}));return c()(d,e),d}}(e);return function(e,r){return t(e,(0,n.Z)({defaultTheme:h.Z},r))}}},8920:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(159),o=(r(7271),r(99700));function i(){return(0,n.Z)()||o.Z}},15671:(e,t,r)=>{function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:()=>n})}}]);
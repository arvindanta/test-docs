System.register(["./p-36d8f81a.system.js","./p-d9705044.system.js"],(function(e){"use strict";var o,n,i,r;return{setters:[function(e){o=e.r;n=e.h;i=e.i},function(e){r=e.a}],execute:function(){var t=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.accordion-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background:var(--fw-accordion-title-background-color, #ffffff);border:var(--fw-accordion-title-border, none);border-end-start-radius:0;border-end-end-radius:0;border-start-end-radius:var(--fw-accordion-border-radius, 8px);border-start-start-radius:var(--fw-accordion-border-radius, 8px);padding-inline:20px;padding-block:10px;cursor:pointer}.accordion-header.collapsed{border-radius:var(--fw-accordion-border-radius, 8px)}.accordion-header.collapsed .accordion-icon{--fw-icon-color:var(\n    --fw-accordion-title-collapsed-icon-color,\n    $accordion-title-icon-color\n  )}.accordion-header.no-bounding-box{border-radius:0}.accordion-header .accordion-title{-ms-flex-positive:1;flex-grow:1;line-height:var(--fw-accordion-title-line-height, 19px);font-size:var(--fw-accordion-title-font-size, 16px);font-weight:var(--fw-accordion-title-font-weight, bold)}.accordion-header .accordion-title.truncate{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.accordion-header .accordion-icon{-ms-flex-positive:0;flex-grow:0;--fw-icon-color:var(\n    --fw-accordion-title-expanded-icon-color,\n    $accordion-title-icon-color\n  )}';var a=function(e){var o=e.expanded,i=e.iconSize;var r;switch(i){case"small":r=7;break;case"medium":r=10;break;case"large":r=14;break}var t=o?"up":"down";return n("fw-icon",{class:"accordion-icon",name:"chevron-".concat(t),size:r,library:"system"})};var c=e("fw_accordion_title",function(){function e(e){o(this,e);this.toggleState=function(){};this.expanded=true;this.type="default";this.truncateOnOverflow=true;this.iconSize="medium"}e.prototype.componentWillLoad=function(){this.expandedIcon=this.el.querySelector('[slot="expanded-icon"');this.collapsedIcon=this.el.querySelector('[slot="collapsed-icon"')};e.prototype.render=function(){return n("div",{class:{"accordion-header":true,collapsed:!this.expanded,"no-bounding-box":this.type==="no_bounding_box"},role:"button",tabindex:"0",onKeyDown:r(this.toggleState),onClick:this.toggleState,"aria-expanded":this.expanded.toString()},n("div",{class:{"accordion-title":true,truncate:this.truncateOnOverflow}},n("slot",null)),this.expandedIcon&&this.collapsedIcon?n("div",{class:"accordion-icon"},n("slot",{name:this.expanded?"expanded-icon":"collapsed-icon"})):n(a,{expanded:this.expanded,iconSize:this.iconSize}))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return e}());c.style=t}}}));
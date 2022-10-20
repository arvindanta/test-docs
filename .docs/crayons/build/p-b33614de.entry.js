import{r as e,h as o,i}from"./p-16e19467.js";import{h as t}from"./p-79178ffe.js";import{T as n}from"./p-00eeee31.js";const a=class{constructor(o){e(this,o)}render(){return o("div",{class:"content"},o("slot",null))}};a.style=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex:1;flex:1;overflow-y:auto;font-size:14px;font-weight:400;color:#12344d;line-height:20px}.content{-webkit-padding-after:32px;padding-block-end:32px;padding-inline:32px;-webkit-padding-before:12px;padding-block-start:12px;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box}';const s=class{constructor(o){e(this,o),this.submitText="",this.cancelText="",this.submitDisabled=!1,this.submitColor="primary",this.custom=null,this.submit=()=>{},this.close=()=>{}}componentWillLoad(){null===this.custom&&(this.custom=t(this.el))}render(){return o("div",{class:"modal-footer-container"},o("div",{class:"modal-footer"},this.custom?o("slot",null):o("span",null,o("fw-button",{color:"secondary",onClick:()=>this.close()},this.cancelText||n.t("modal.cancel")),o("fw-button",{color:this.submitColor,disabled:this.submitDisabled,onClick:()=>this.submit()},this.submitText||n.t("modal.ok")))))}get el(){return i(this)}};s.style=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-footer-container{padding-inline:16px;padding-block:12px;-webkit-box-sizing:border-box;box-sizing:border-box;height:56px;background-color:#f5f7f9;border-end-start-radius:4px;border-end-end-radius:4px;border-start-end-radius:0;border-start-start-radius:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex:none;flex:none}.modal-footer-container fw-button{-webkit-margin-start:12px;margin-inline-start:12px}';const l=class{constructor(o){e(this,o),this.icon="",this.custom=null}componentWillLoad(){null===this.custom&&(this.custom=t(this.el))}renderIcon(){return o("span",{class:"modal-title-icon"},o("fw-icon",{name:this.icon,size:16}))}render(){return o("div",{class:"modal-header-container"},o("div",{class:"modal-header"},this.custom?o("slot",null):o("div",{class:"modal-header-body"},o("div",{class:"modal-title"},""!==this.icon?this.renderIcon():null,o("label",{class:"title-label"},this.titleText)),this.description&&o("label",{class:"description"},this.description))))}get el(){return i(this)}};l.style=':host{font-family:var(--fw-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", roboto, oxygen, ubuntu, cantarell, "Open Sans", "Helvetica Neue", sans-serif);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-box-sizing:border-box;box-sizing:border-box}.modal-header-container{-webkit-padding-after:0;padding-block-end:0;padding-inline:32px;-webkit-padding-before:32px;padding-block-start:32px;position:relative;background:#fff;border-end-start-radius:0;border-end-end-radius:0;border-start-end-radius:4px;border-start-start-radius:4px;-webkit-transition:all 0.1s linear;transition:all 0.1s linear;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:none;flex:none}.modal-header-container .modal-header{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;font-size:18px;font-weight:600;line-height:24px;color:#12344d}.modal-header-container .modal-header .modal-header-body{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:0px}.modal-header-container .modal-header .modal-header-body .modal-title{width:100%;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:10px;color:#12344d}.modal-header-container .modal-header .modal-header-body .modal-title .modal-title-icon{width:auto;height:24px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.modal-header-container .modal-header .modal-header-body .modal-title .title-label{font-size:18px;font-weight:600;line-height:24px}.modal-header-container .modal-header .modal-header-body .description{font-size:14px;font-weight:400;color:#475867;line-height:20px;padding-inline:0px;padding-block:6px}';export{a as fw_modal_content,s as fw_modal_footer,l as fw_modal_title}
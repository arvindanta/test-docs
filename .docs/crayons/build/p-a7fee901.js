import{h as e}from"./p-16e19467.js";const r=(r,t)=>{const i=!!r.label,l=!!r.hintText||r.hasHintTextSlot,a=!!r.errorText||r.hasErrorTextSlot,n=!!r.warningText||r.hasWarningTextSlot,o="normal"===r.state,d="error"===r.state,s="warning"===r.state;return e("div",{class:{"field-control":!0}},i&&e("label",{id:r.labelId,class:{"field-control-label":!0,required:r.required},htmlFor:r.inputId,"aria-hidden":i?"false":"true"},r.label),t,o&&l&&e("div",{id:r.hintTextId,class:"field-control-hint-text","aria-hidden":l?"false":"true"},e("slot",{name:"hint-text"},r.hintText)),d&&a&&e("div",{id:r.errorTextId,class:"field-control-error-text","aria-hidden":a?"false":"true"},e("slot",{name:"error-text"},r.errorText)),s&&n&&e("div",{id:r.warningTextId,class:"field-control-warning-text","aria-hidden":n?"false":"true"},e("slot",{name:"warning-text"},r.warningText)))};export{r as F}
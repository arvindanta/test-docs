var __awaiter=this&&this.__awaiter||function(e,s,t,n){function r(e){return e instanceof t?e:new t((function(s){s(e)}))}return new(t||(t=Promise))((function(t,o){function a(e){try{u(n.next(e))}catch(s){o(s)}}function i(e){try{u(n["throw"](e))}catch(s){o(s)}}function u(e){e.done?t(e.value):r(e.value).then(a,i)}u((n=n.apply(e,s||[])).next())}))};var __generator=this&&this.__generator||function(e,s){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,a;return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(e){return function(s){return u([e,s])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;r=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1];o=a;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(a);break}if(o[2])t.ops.pop();t.trys.pop();continue}a=s.call(e,t)}catch(i){a=[6,i];r=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-36d8f81a.system.js"],(function(e,s){"use strict";var t,n;return{setters:[function(e){t=e.g;n=e.f}],execute:function(){var r=function(e,s,t){var n=e.get(s);if(!n){e.set(s,[t])}else if(!n.includes(t)){n.push(t)}};var o=function(e,s){var t;return function(){var n=[];for(var r=0;r<arguments.length;r++){n[r]=arguments[r]}if(t){clearTimeout(t)}t=setTimeout((function(){t=0;e.apply(void 0,n)}),s)}};var a=function(e){return!("isConnected"in e)||e.isConnected};var i=o((function(e){for(var s=0,t=e.keys();s<t.length;s++){var n=t[s];e.set(n,e.get(n).filter(a))}}),2e3);var u=function(){if(typeof t!=="function"){return{}}var e=new Map;return{dispose:function(){return e.clear()},get:function(s){var n=t();if(n){r(e,s,n)}},set:function(s){var t=e.get(s);if(t){e.set(s,t.filter(n))}i(e)},reset:function(){e.forEach((function(e){return e.forEach(n)}));i(e)}}};var d=function(e,s){if(s===void 0){s=function(e,s){return e!==s}}var t=new Map(Object.entries(e!==null&&e!==void 0?e:{}));var n={dispose:[],get:[],set:[],reset:[]};var r=function(){t=new Map(Object.entries(e!==null&&e!==void 0?e:{}));n.reset.forEach((function(e){return e()}))};var o=function(){n.dispose.forEach((function(e){return e()}));r()};var a=function(e){n.get.forEach((function(s){return s(e)}));return t.get(e)};var i=function(e,r){var o=t.get(e);if(s(r,o,e)){t.set(e,r);n.set.forEach((function(s){return s(e,r,o)}))}};var u=typeof Proxy==="undefined"?{}:new Proxy(e,{get:function(e,s){return a(s)},ownKeys:function(e){return Array.from(t.keys())},getOwnPropertyDescriptor:function(){return{enumerable:true,configurable:true}},has:function(e,s){return t.has(s)},set:function(e,s,t){i(s,t);return true}});var d=function(e,s){n[e].push(s);return function(){c(n[e],s)}};var l=function(s,t){var n=d("set",(function(e,n){if(e===s){t(n)}}));var r=d("reset",(function(){return t(e[s])}));return function(){n();r()}};var m=function(){var e=[];for(var s=0;s<arguments.length;s++){e[s]=arguments[s]}var t=e.reduce((function(e,s){if(s.set){e.push(d("set",s.set))}if(s.get){e.push(d("get",s.get))}if(s.reset){e.push(d("reset",s.reset))}if(s.dispose){e.push(d("dispose",s.dispose))}return e}),[]);return function(){return t.forEach((function(e){return e()}))}};var f=function(e){var s=t.get(e);n.set.forEach((function(t){return t(e,s,s)}))};return{state:u,get:a,set:i,on:d,onChange:l,use:m,dispose:o,reset:r,forceUpdate:f}};var c=function(e,s){var t=e.indexOf(s);if(t>=0){e[t]=e[e.length-1];e.length--}};var l=function(e,s){var t=d(e,s);t.use(u());return t};var m=["af","ar","ar-DZ","ar-EG","ar-MA","ar-SA","ar-TN","az","be","bg","bn","bs","ca","cs","cy","da","de","de-AT","el","en-AU","en-CA","en-GB","en-IE","en-IN","en-NZ","en-US","en-ZA","eo","es","et","eu","fa-IR","fi","fr","fr-CA","fr-CH","fy","gd","gl","gu","he","hi","hr","ht","hu","hy","id","is","it","ja","ja-Hira","ka","kk","km","kn","ko","lb","lt","lv","mk","mn","ms","mt","nb","nl","nl-BE","nn","pl","pt","pt-BR","ro","ru","sk","sl","sq","sr","sr-Latn","sv","ta","te","th","tr","ug","uk","uz","uz-Cyrl","vi","zh-CN","zh-HK","zh-TW"];var f={ar:"ar-SA",bg:"bg-BG",bs:"bs-BA",ca:"ca-ES",cs:"cs-CZ",da:"da-DK",de:"de-DE",el:"el-GR",en:"en-US",es:"es-ES",et:"et-EE",fi:"fi-FI",fil:"fil-PH",fr:"fr-FR",he:"he-IL",hr:"hr-HR",hu:"hu-HU",id:"id-ID",is:"is-IS",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lt:"lt-LT",lv:"lv-LV",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",sr:"sr-SP",sc:"sv-SE",th:"th-TH",tr:"tr-TR",uk:"uk-UA",vi:"vi-VN",zh:"zh-CN"};function p(e){switch(e){case"../../../node_modules/date-fns/esm/locale/af/index.js":return s.import("./p-228e4476.system.js");case"../../../node_modules/date-fns/esm/locale/ar/index.js":return s.import("./p-6f3e96eb.system.js");case"../../../node_modules/date-fns/esm/locale/ar-DZ/index.js":return s.import("./p-99a8178f.system.js");case"../../../node_modules/date-fns/esm/locale/ar-EG/index.js":return s.import("./p-5e262214.system.js");case"../../../node_modules/date-fns/esm/locale/ar-MA/index.js":return s.import("./p-ec87fdf0.system.js");case"../../../node_modules/date-fns/esm/locale/ar-SA/index.js":return s.import("./p-3b83a8ee.system.js");case"../../../node_modules/date-fns/esm/locale/ar-TN/index.js":return s.import("./p-cf6c46cc.system.js");case"../../../node_modules/date-fns/esm/locale/az/index.js":return s.import("./p-8ed2101b.system.js");case"../../../node_modules/date-fns/esm/locale/be/index.js":return s.import("./p-365dc431.system.js");case"../../../node_modules/date-fns/esm/locale/bg/index.js":return s.import("./p-6c4b32a5.system.js");case"../../../node_modules/date-fns/esm/locale/bn/index.js":return s.import("./p-31819035.system.js");case"../../../node_modules/date-fns/esm/locale/bs/index.js":return s.import("./p-e6d73809.system.js");case"../../../node_modules/date-fns/esm/locale/ca/index.js":return s.import("./p-ad28ec94.system.js");case"../../../node_modules/date-fns/esm/locale/cs/index.js":return s.import("./p-f98a15a1.system.js");case"../../../node_modules/date-fns/esm/locale/cy/index.js":return s.import("./p-506b67fa.system.js");case"../../../node_modules/date-fns/esm/locale/da/index.js":return s.import("./p-1256df78.system.js");case"../../../node_modules/date-fns/esm/locale/de/index.js":return s.import("./p-3a50f5e2.system.js");case"../../../node_modules/date-fns/esm/locale/de-AT/index.js":return s.import("./p-87062c5f.system.js");case"../../../node_modules/date-fns/esm/locale/el/index.js":return s.import("./p-d18781c6.system.js");case"../../../node_modules/date-fns/esm/locale/en-AU/index.js":return s.import("./p-b31056d9.system.js");case"../../../node_modules/date-fns/esm/locale/en-CA/index.js":return s.import("./p-02d1990a.system.js");case"../../../node_modules/date-fns/esm/locale/en-GB/index.js":return s.import("./p-621948b9.system.js");case"../../../node_modules/date-fns/esm/locale/en-IE/index.js":return s.import("./p-5857198a.system.js");case"../../../node_modules/date-fns/esm/locale/en-IN/index.js":return s.import("./p-db624803.system.js");case"../../../node_modules/date-fns/esm/locale/en-NZ/index.js":return s.import("./p-b7fe8f5c.system.js");case"../../../node_modules/date-fns/esm/locale/en-US/index.js":return s.import("./p-1e09d5ed.system.js");case"../../../node_modules/date-fns/esm/locale/en-ZA/index.js":return s.import("./p-0a99857e.system.js");case"../../../node_modules/date-fns/esm/locale/eo/index.js":return s.import("./p-8ce0803d.system.js");case"../../../node_modules/date-fns/esm/locale/es/index.js":return s.import("./p-7b145639.system.js");case"../../../node_modules/date-fns/esm/locale/et/index.js":return s.import("./p-e09a35a6.system.js");case"../../../node_modules/date-fns/esm/locale/eu/index.js":return s.import("./p-adafbf13.system.js");case"../../../node_modules/date-fns/esm/locale/fa-IR/index.js":return s.import("./p-1bcf2b33.system.js");case"../../../node_modules/date-fns/esm/locale/fi/index.js":return s.import("./p-79bf2958.system.js");case"../../../node_modules/date-fns/esm/locale/fr/index.js":return s.import("./p-44306af8.system.js");case"../../../node_modules/date-fns/esm/locale/fr-CA/index.js":return s.import("./p-e08019f7.system.js");case"../../../node_modules/date-fns/esm/locale/fr-CH/index.js":return s.import("./p-33f78cdd.system.js");case"../../../node_modules/date-fns/esm/locale/fy/index.js":return s.import("./p-bad56f56.system.js");case"../../../node_modules/date-fns/esm/locale/gd/index.js":return s.import("./p-37ac176b.system.js");case"../../../node_modules/date-fns/esm/locale/gl/index.js":return s.import("./p-cd1d2323.system.js");case"../../../node_modules/date-fns/esm/locale/gu/index.js":return s.import("./p-10f9ff81.system.js");case"../../../node_modules/date-fns/esm/locale/he/index.js":return s.import("./p-d2687af4.system.js");case"../../../node_modules/date-fns/esm/locale/hi/index.js":return s.import("./p-fc188a21.system.js");case"../../../node_modules/date-fns/esm/locale/hr/index.js":return s.import("./p-fb1e5725.system.js");case"../../../node_modules/date-fns/esm/locale/ht/index.js":return s.import("./p-6e567f71.system.js");case"../../../node_modules/date-fns/esm/locale/hu/index.js":return s.import("./p-135a1a51.system.js");case"../../../node_modules/date-fns/esm/locale/hy/index.js":return s.import("./p-a978bd22.system.js");case"../../../node_modules/date-fns/esm/locale/id/index.js":return s.import("./p-6cd6e5a3.system.js");case"../../../node_modules/date-fns/esm/locale/is/index.js":return s.import("./p-c5e537cc.system.js");case"../../../node_modules/date-fns/esm/locale/it/index.js":return s.import("./p-b94ae2c3.system.js");case"../../../node_modules/date-fns/esm/locale/ja/index.js":return s.import("./p-05d0ccfb.system.js");case"../../../node_modules/date-fns/esm/locale/ja-Hira/index.js":return s.import("./p-17d5e96f.system.js");case"../../../node_modules/date-fns/esm/locale/ka/index.js":return s.import("./p-fdfd8211.system.js");case"../../../node_modules/date-fns/esm/locale/kk/index.js":return s.import("./p-7beffb0e.system.js");case"../../../node_modules/date-fns/esm/locale/km/index.js":return s.import("./p-c94fad96.system.js");case"../../../node_modules/date-fns/esm/locale/kn/index.js":return s.import("./p-706fa9be.system.js");case"../../../node_modules/date-fns/esm/locale/ko/index.js":return s.import("./p-b619bc97.system.js");case"../../../node_modules/date-fns/esm/locale/lb/index.js":return s.import("./p-34c89bb0.system.js");case"../../../node_modules/date-fns/esm/locale/lt/index.js":return s.import("./p-28f3aabb.system.js");case"../../../node_modules/date-fns/esm/locale/lv/index.js":return s.import("./p-1099067f.system.js");case"../../../node_modules/date-fns/esm/locale/mk/index.js":return s.import("./p-9280ecd0.system.js");case"../../../node_modules/date-fns/esm/locale/mn/index.js":return s.import("./p-f8e0db10.system.js");case"../../../node_modules/date-fns/esm/locale/ms/index.js":return s.import("./p-61ce8020.system.js");case"../../../node_modules/date-fns/esm/locale/mt/index.js":return s.import("./p-5275e831.system.js");case"../../../node_modules/date-fns/esm/locale/nb/index.js":return s.import("./p-23d4a630.system.js");case"../../../node_modules/date-fns/esm/locale/nl/index.js":return s.import("./p-8fa62fbd.system.js");case"../../../node_modules/date-fns/esm/locale/nl-BE/index.js":return s.import("./p-28ed2b78.system.js");case"../../../node_modules/date-fns/esm/locale/nn/index.js":return s.import("./p-2dbfc6b0.system.js");case"../../../node_modules/date-fns/esm/locale/pl/index.js":return s.import("./p-b02356f5.system.js");case"../../../node_modules/date-fns/esm/locale/pt/index.js":return s.import("./p-4feddb20.system.js");case"../../../node_modules/date-fns/esm/locale/pt-BR/index.js":return s.import("./p-9496f035.system.js");case"../../../node_modules/date-fns/esm/locale/ro/index.js":return s.import("./p-41f27290.system.js");case"../../../node_modules/date-fns/esm/locale/ru/index.js":return s.import("./p-e5a5cddb.system.js");case"../../../node_modules/date-fns/esm/locale/sk/index.js":return s.import("./p-f49ee387.system.js");case"../../../node_modules/date-fns/esm/locale/sl/index.js":return s.import("./p-ed149d38.system.js");case"../../../node_modules/date-fns/esm/locale/sq/index.js":return s.import("./p-2a1f3916.system.js");case"../../../node_modules/date-fns/esm/locale/sr/index.js":return s.import("./p-95923534.system.js");case"../../../node_modules/date-fns/esm/locale/sr-Latn/index.js":return s.import("./p-8684aec2.system.js");case"../../../node_modules/date-fns/esm/locale/sv/index.js":return s.import("./p-65ec3a51.system.js");case"../../../node_modules/date-fns/esm/locale/ta/index.js":return s.import("./p-0244fedc.system.js");case"../../../node_modules/date-fns/esm/locale/te/index.js":return s.import("./p-f0ee0980.system.js");case"../../../node_modules/date-fns/esm/locale/th/index.js":return s.import("./p-4265744a.system.js");case"../../../node_modules/date-fns/esm/locale/tr/index.js":return s.import("./p-89f51bf7.system.js");case"../../../node_modules/date-fns/esm/locale/ug/index.js":return s.import("./p-99222ca2.system.js");case"../../../node_modules/date-fns/esm/locale/uk/index.js":return s.import("./p-ec98d6d7.system.js");case"../../../node_modules/date-fns/esm/locale/uz/index.js":return s.import("./p-905bc28d.system.js");case"../../../node_modules/date-fns/esm/locale/uz-Cyrl/index.js":return s.import("./p-ad0854eb.system.js");case"../../../node_modules/date-fns/esm/locale/vi/index.js":return s.import("./p-26b400c2.system.js");case"../../../node_modules/date-fns/esm/locale/zh-CN/index.js":return s.import("./p-604bc9db.system.js");case"../../../node_modules/date-fns/esm/locale/zh-HK/index.js":return s.import("./p-7a849d36.system.js");case"../../../node_modules/date-fns/esm/locale/zh-TW/index.js":return s.import("./p-1e73c09f.system.js");default:return new Promise((function(s,t){(typeof queueMicrotask==="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}function j(e){switch(e){case"../i18n/ar-SA.json":return s.import("./p-4e2ba805.system.js");case"../i18n/bg-BG.json":return s.import("./p-bc9a531a.system.js");case"../i18n/bs-BA.json":return s.import("./p-7e5d72ab.system.js");case"../i18n/ca-ES.json":return s.import("./p-f9f66fb3.system.js");case"../i18n/cs-CZ.json":return s.import("./p-fe8a9f2f.system.js");case"../i18n/da-DK.json":return s.import("./p-c4da880b.system.js");case"../i18n/de-DE.json":return s.import("./p-8cdad9fa.system.js");case"../i18n/el-GR.json":return s.import("./p-a2022e27.system.js");case"../i18n/en-US.json":return s.import("./p-0d767279.system.js");case"../i18n/es-ES.json":return s.import("./p-03ce1178.system.js");case"../i18n/es-MX.json":return s.import("./p-c49575a0.system.js");case"../i18n/et-EE.json":return s.import("./p-77aeb036.system.js");case"../i18n/fi-FI.json":return s.import("./p-fcb4d8b8.system.js");case"../i18n/fil-PH.json":return s.import("./p-c5a88060.system.js");case"../i18n/fr-FR.json":return s.import("./p-94421db4.system.js");case"../i18n/he-IL.json":return s.import("./p-0d4dd1cc.system.js");case"../i18n/hr-HR.json":return s.import("./p-bb71fb46.system.js");case"../i18n/hu-HU.json":return s.import("./p-f041467f.system.js");case"../i18n/id-ID.json":return s.import("./p-f6e3b98c.system.js");case"../i18n/is-IS.json":return s.import("./p-f1683f93.system.js");case"../i18n/it-IT.json":return s.import("./p-deb5a681.system.js");case"../i18n/ja-JP.json":return s.import("./p-5df673d8.system.js");case"../i18n/ko-KR.json":return s.import("./p-2bceb643.system.js");case"../i18n/lt-LT.json":return s.import("./p-37d0235e.system.js");case"../i18n/lv-LV.json":return s.import("./p-0c9ddf91.system.js");case"../i18n/nl-NL.json":return s.import("./p-46880cde.system.js");case"../i18n/no-NO.json":return s.import("./p-b13bd3da.system.js");case"../i18n/pl-PL.json":return s.import("./p-776d1334.system.js");case"../i18n/pt-BR.json":return s.import("./p-e3f27d76.system.js");case"../i18n/pt-PT.json":return s.import("./p-1fffff12.system.js");case"../i18n/ro-RO.json":return s.import("./p-0b93c98c.system.js");case"../i18n/ru-RU.json":return s.import("./p-4ca35c78.system.js");case"../i18n/sk-SK.json":return s.import("./p-ff0e7cef.system.js");case"../i18n/sl-SI.json":return s.import("./p-d8441d01.system.js");case"../i18n/sr-SP.json":return s.import("./p-90567b9b.system.js");case"../i18n/sv-SE.json":return s.import("./p-a925fd52.system.js");case"../i18n/th-TH.json":return s.import("./p-f1f95ae6.system.js");case"../i18n/tr-TR.json":return s.import("./p-fc53a473.system.js");case"../i18n/uk-UA.json":return s.import("./p-fbbdaa1f.system.js");case"../i18n/vi-VN.json":return s.import("./p-04817e59.system.js");case"../i18n/zh-CN.json":return s.import("./p-492e8f5c.system.js");case"../i18n/zh-TW.json":return s.import("./p-54fc7bc1.system.js");default:return new Promise((function(s,t){(typeof queueMicrotask==="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}function y(e){if(e===void 0){e=document.body}var s=e.closest("[lang]");if(!s)return undefined;var t=s.lang;if(!t)return undefined;if(t.indexOf("-")!==-1){t=t.split("-")[0]}if(t.indexOf("_")!==-1){t=t.split("_")[0]}return t}function h(){if(typeof window==="undefined"||typeof window.navigator==="undefined"){return undefined}var e=window.navigator.languages&&window.navigator.languages.length>0?window.navigator.languages[0]:null;e=e||window.navigator.language;if(typeof e==="undefined"){return"en"}if(e.indexOf("-")!==-1){e=e.split("-")[0]}if(e.indexOf("_")!==-1){e=e.split("_")[0]}return e}function _(){var e=y()||h();return e||"en"}function b(e,s){if(s===void 0){s={}}if(!e)return"";return e===null||e===void 0?void 0:e.split(".").reduce((function(e,s){return e?e[s]:undefined}),s)}function v(e,s){return Object.entries(s).reduce((function(e,s){var t=s[0],n=s[1];return e.replace(new RegExp("{{[  ]*".concat(t,"[  ]*}}"),"gm"),String(g(n)))}),e)}function g(e){return typeof e==="function"?e():e}function x(e){var s=e.key,t=e.values,n=e.obj,r=e.lang,o=e.context;var a;var i=(a=b(s,n))!==null&&a!==void 0?a:s;return t?v(i,t):i}var w=function(){function e(){var e=this;this.requests=new Map;var s=l({lang:"",globalStrings:null,customTranslations:{}}),t=s.state,n=s.onChange;this.state=t;this.onChange=n;this.langCodeMapping=f;this.onChange("lang",(function(s){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.fetchTranslations(s);return[4,this.fetchDateLangModule(s)];case 1:e.sent();return[2]}}))}))}));this.onChange("customTranslations",(function(s){return __awaiter(e,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(r){switch(r.label){case 0:e=this.state.lang||_();if(!!this.state.globalStrings)return[3,2];return[4,this.fetchTranslations(e)];case 1:r.sent();r.label=2;case 2:t=(s===null||s===void 0?void 0:s[e])||{};n=Object.assign(Object.assign({},this.state.globalStrings),t);this.state.globalStrings=n;return[2]}}))}))}));if("MutationObserver"in window){var r=new MutationObserver((function(s){return __awaiter(e,void 0,void 0,(function(){var e;return __generator(this,(function(t){if(s[0].attributeName==="lang"){e=document.documentElement.getAttribute("lang");if(e!==s[0].oldValue){this.state.lang=e}}return[2]}))}))}));r.observe(document.documentElement,{attributes:true,attributeFilter:["lang"],attributeOldValue:true})}this.initialize()}e.prototype.initialize=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,Promise.all([this.fetchTranslations(),this.fetchDateLangModule()]).catch((function(e){return console.error("Error occurred in intialising i18n lib ".concat(e.message))}))];case 1:e.sent();return[2]}}))}))};e.prototype.setLang=function(e){this.state.lang=e};e.prototype.getLang=function(){return this.state.lang};e.prototype.getDateLangModule=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(s){switch(s.label){case 0:return[4,this.fetchDateLangModule(e||this.state.lang)];case 1:return[2,s.sent()]}}))}))};e.prototype.fetchTranslations=function(e){return __awaiter(this,void 0,void 0,(function(){var s,t;var n=this;return __generator(this,(function(r){s=e||_();t=s.includes("-")?s:f["".concat(s)]||"en-US";this.state.lang=s;return[2,this.fetchDefaultTranslations(t).then((function(e){var t;var r=((t=n.state.customTranslations)===null||t===void 0?void 0:t[s])||{};var o=Object.assign(Object.assign({},e),r);n.state.globalStrings=o;return o}))]}))}))};e.prototype.fetchDefaultTranslations=function(e){var s=this;var t=this.requests.get(e);if(!t){t=j("../i18n/".concat(e,".json")).then((function(e){return e.default})).then((function(e){return e})).catch((function(){return __awaiter(s,void 0,void 0,(function(){return __generator(this,(function(s){switch(s.label){case 0:console.warn("Error loading config for lang: ".concat(e," from pre-defined set. defaulting to en-US translation"));return[4,this.fetchDefaultTranslations("en-US")];case 1:return[2,s.sent()]}}))}))}));this.requests.set(e,t)}return t};e.prototype.fetchDateLangModule=function(e){return __awaiter(this,void 0,void 0,(function(){var s,t,n,r;var o=this;return __generator(this,(function(a){s=e||_();t=this.requests.get("date_"+s);if(!t){n=s;r=m.indexOf(n);if(r>=0){n=m[r]}else{n=n.includes("-")?n.split("-")[0]:n}if(n==="en")n="en-US";t=p("../../../node_modules/date-fns/esm/locale/".concat(n,"/index.js")).then((function(e){return e.default})).then((function(e){return e})).catch((function(e){return __awaiter(o,void 0,void 0,(function(){var s;return __generator(this,(function(t){switch(t.label){case 0:console.warn("Error loading date lang module for : ".concat(n," from date-fns set"),e);return[4,this.fetchDateLangModule("en-US").catch((function(e){console.error(" Error in fetching default date lang module ",e.message);return{}}))];case 1:s=t.sent();return[2,s]}}))}))}));this.requests.set("date_"+s,t)}return[2,t]}))}))};e.prototype.setTranslations=function(e){this.state.customTranslations=e};e.prototype.t=function(e,s,t){if(e===void 0){e=""}var n;return(n=x({key:e,values:s,obj:this.state.globalStrings,lang:this.state.lang,context:t}))!==null&&n!==void 0?n:e};return e}();var k=e("T",new w)}}}));
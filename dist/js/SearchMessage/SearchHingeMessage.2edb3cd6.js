import{h as e,f as a}from"../FooterMessage/FooterMessage.3604fb1f.js";import{u as s}from"../vue-router/vue-router.54516376.js";import{s as l,a as t}from"../../assets/index-192558f5.js";import{J as i,e as n,o as r,Q as o,R as u,ag as m,X as p,V as d,u as c,a as g,W as h,U as j}from"../@vue/@vue.ea94fe5c.js";import"../@element-plus/@element-plus.3d22e86d.js";import"../element-plus/element-plus.73c1d346.js";import"../lodash-es/lodash-es.9f1a9679.js";import"../@vueuse/@vueuse.0db932b9.js";import"../@popperjs/@popperjs.0e77d79c.js";import"../@ctrl/@ctrl.91de2ec7.js";import"../dayjs/dayjs.87797484.js";import"../async-validator/async-validator.cf877c1f.js";import"../memoize-one/memoize-one.63ab667a.js";import"../escape-html/escape-html.1935ddb3.js";import"../normalize-wheel-es/normalize-wheel-es.500438c6.js";import"../@floating-ui/@floating-ui.945a406c.js";import"../vuex/vuex.a4784625.js";import"../axios/axios.5be20913.js";const f={class:"demo-image__preview"},v=t(i({__name:"SearchHingeMessage",setup(t){const i=s(),v=i.query.id,H=i.query.search;l.commit("updateSearch",H),l.dispatch("searchHinge");const _=n(!1);return setInterval((()=>{_.value=!0}),1),(s,t)=>{const i=m("el-breadcrumb-item"),n=m("el-breadcrumb"),b=m("el-col"),y=m("el-image"),x=m("el-card"),w=m("el-row"),M=m("el-scrollbar");return r(),o(M,null,{default:u((()=>[p(e),p(w,{style:{"background-color":"rgb(235, 235, 235)","padding-top":"2%","padding-bottom":"2%"}},{default:u((()=>[p(b,{style:{"padding-bottom":"2%","padding-left":"10%"}},{default:u((()=>[p(n,null,{default:u((()=>[p(i,{to:{path:"/"}},{default:u((()=>[d("首页")])),_:1}),p(i,null,{default:u((()=>[d("产品信息")])),_:1})])),_:1})])),_:1}),p(b,null,{default:u((()=>[_.value&&null!=c(v)&&null!=c(H)?(r(),o(x,{key:0,class:"box-card",style:{width:"80%",margin:"0 auto","padding-bottom":"2%"}},{default:u((()=>[g("div",f,[p(y,{style:{width:"100%",height:"200px"},src:c(l).state.searchHinge[c(v)].url},null,8,["src"])]),g("h1",null,h(c(l).state.searchHinge[c(v)].name),1),g("ul",null,[g("li",null,"型号："+h(c(l).state.searchHinge[c(v)].model),1),g("li",null,"铰杯安装："+h(c(l).state.searchHinge[c(v)].hingeCupInstallation),1),g("li",null,"门板/门框材质："+h(c(l).state.searchHinge[c(v)].installationMaterial),1),g("li",null,"安装方式："+h(c(l).state.searchHinge[c(v)].installationMethod),1),g("li",null,"关闭系统："+h(c(l).state.searchHinge[c(v)].shutDownSystem),1),g("li",null,"阻尼系统："+h(c(l).state.searchHinge[c(v)].dampingSystem),1),g("li",null,"开启角度："+h(c(l).state.searchHinge[c(v)].openingAngle),1),g("li",null,"大角度铰链："+h(c(l).state.searchHinge[c(v)].largeAngleHinge),1),g("li",null,"门板调节："+h(c(l).state.searchHinge[c(v)].doorPanelAdjustment),1),g("li",null,"铰链底座："+h(c(l).state.searchHinge[c(v)].hingeBase),1),g("li",null,"可選設備："+h(c(l).state.searchHinge[c(v)].optionalEquipment),1)])])),_:1})):j("",!0)])),_:1})])),_:1}),p(a)])),_:1})}}}),[["__scopeId","data-v-26613d2b"]]);export{v as default};

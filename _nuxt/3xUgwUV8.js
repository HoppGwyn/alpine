import{u as m}from"./D1uuC1Iy.js";import{d as v,r as h,I as f,c as e,e as o,M as i,g as p,f as t,F as y,Z as C,p as b,j as k,t as g,l as I}from"./MLbxgc3-.js";const n=s=>(b("data-v-852b9bff"),s=s(),k(),s),S={key:0,class:"copied"},w=n(()=>t("div",{class:"scrim"},null,-1)),x=n(()=>t("div",{class:"content"}," Copied! ",-1)),B=[w,x],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),j={class:"window"},F=n(()=>t("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(s){const a=s,{copy:l}=m(),c=h("init"),r=f(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(e(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(e(),o("div",S,B)):p("",!0),T,t("div",j,[(e(!0),o(y,null,C(i(r),d=>(e(),o("span",{key:d,class:"line"},[F,t("span",N,g(d),1)]))),128))]),i(c)!=="copied"?(e(),o("div",V," Click to copy ")):p("",!0)]))}}),L=I(q,[["__scopeId","data-v-852b9bff"]]);export{L as default};

import{_ as u,o as a,c,a as t,t as s,g as _,h as b,p as m,b as h,d as i,F as v,e as p,f as g}from"./index-a2b10b28.js";const n=e=>(m("data-v-36b171b8"),e=e(),h(),e),S={class:"col-lg-6 col-sm-6 mb-5"},y={class:"card-instituciones"},N={class:"content-instituciones"},f={key:0},w=n(()=>t("i",{class:"bi bi-globe"},null,-1)),C=["href"],D={key:1},I=n(()=>t("i",{class:"bi bi-envelope"},null,-1)),$=["href"],k=n(()=>t("i",{class:"bi bi-telephone"},null,-1)),x=["href"],M=n(()=>t("i",{class:"bi bi-geo-alt"},null,-1)),B={__name:"ItemCardDirectory",props:{title:{type:String,required:!0},webSite:{type:String},email:{type:String},phoneNumer:{type:String,required:!0},address:{type:String,required:!0}},setup(e){return(r,l)=>(a(),c("div",S,[t("div",y,[t("div",N,[t("h3",null,s(e.title),1),e.webSite?(a(),c("p",f,[w,t("a",{href:e.webSite,target:"_blank"},s(e.webSite),9,C)])):_("",!0),e.email?(a(),c("p",D,[I,t("a",{href:"mailto:+503"+e.email,target:"_blank"},s(e.email),9,$)])):_("",!0),t("p",null,[k,t("a",{href:"tel:"+e.phoneNumer},s(e.phoneNumer),9,x)]),t("p",null,[M,b(s(e.address),1)])])])]))}},o=u(B,[["__scopeId","data-v-36b171b8"]]);const d=e=>(m("data-v-3407bd57"),e=e(),h(),e),V=p('<section class="section-directorio" data-v-3407bd57><div class="section-directorio-sombra" data-v-3407bd57><div class="container" data-v-3407bd57><div class="content" data-v-3407bd57><h1 class="titulo" data-v-3407bd57>Instituciones Ligadas al Proyecto</h1><div class="sub-titulo" data-v-3407bd57><h2 data-v-3407bd57>Trabajando juntos, hacemos más...</h2></div></div></div></div></section>',1),E={class:"section-card"},L={class:"custom-container"},F=d(()=>t("div",{class:"section-icon"},[t("i",{class:"bi bi-layers-fill"})],-1)),j=d(()=>t("p",{class:"mini-section-title"},"Directorio",-1)),q=d(()=>t("h1",{class:"section-title"},"Nuestras Alianzas",-1)),A={class:"row"},P={__name:"Directory",setup(e){return(r,l)=>(a(),c(v,null,[V,t("section",E,[t("div",L,[F,j,q,t("div",A,[i(o,{title:"Mesa de Cambio Climático de El Salvador",email:"mesacambioclimatico@gmail.com",phoneNumer:"7744-4576",address:"San Salvador, El Salvador."}),i(o,{title:"Ministerio de Medio Ambiente",webSite:"https://www.ambiente.gob.sv/",phoneNumer:"2665-8383",address:"Colonia Ciudad Jardín, calle Los Naranjos, #22, San Miguel."}),i(o,{title:"Fundación Segundo Montes",email:"Fsegundomontes@gmail.com",phoneNumer:"2680-5574",address:"Carretera a Perkin Km 192 1/2, caserío San Luis, Meanguera Morazán"}),i(o,{title:"Programa de las Naciones Unidas para el Desarrollo",email:"https://www.undp.org/es",phoneNumer:"2263-0066",address:"Edificio Naciones Unidas, Blvd. Orden de Malta Sur, No. 2-B, Elena, Antiguo Cuscatlan, La Libertad."})])])])],64))}},z=u(P,[["__scopeId","data-v-3407bd57"]]),U={__name:"DirectoryView",setup(e){return(r,l)=>(a(),g(z))}};export{U as default};
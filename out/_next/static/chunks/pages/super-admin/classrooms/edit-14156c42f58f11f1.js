(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{39343:function(o,l,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/super-admin/classrooms/edit",function(){return i(28619)}])},28619:function(o,l,i){"use strict";i.r(l),i.d(l,{default:function(){return d}});var t=i(85893),n=i(67294),e=i(46427);function d(o){var l,i,d,u,a,r,s,c,v;let{solve:g,Page:f}=o,[p,_]=n.useState(null),[m,h]=n.useState({});return n.useEffect(()=>{let o;null===p&&g.Router.query.get("id")&&g.Request({config:{url:"all-orgs-without-paginate",pointer:"orgs",method:"get"},dependencies:{callback(l){var i;o=null==l?void 0:null===(i=l.data)||void 0===i?void 0:i.data;let t=g.Router.query.get("id");o={orgs:o},g.Request({config:{url:"classrooms/".concat(t),pointer:"cls",method:"get"},dependencies:{callback(l){var i,t,n;let{organization:e}=null!==(n=null==l?void 0:null===(i=l.data)||void 0===i?void 0:i.data)&&void 0!==n?n:{};o={...o,cls:null==l?void 0:null===(t=l.data)||void 0===t?void 0:t.data},null!=p||_(o)}}})}}})},[g.Router.query.get("id")]),console.log(null==p?void 0:null===(l=p.org)||void 0===l?void 0:null===(i=l.manager)||void 0===i?void 0:i.id),(0,t.jsx)(e.Z,{solve:g,header:{title:"ایجاد موسسه"},content:p?{step0:{btn:{action:"back"},form:{config:{editorDefaultVals:[{key:"organization_id",val:null==p?void 0:null===(d=p.cls)||void 0===d?void 0:null===(u=d.organization)||void 0===u?void 0:u.id}],url:"classrooms/".concat(g.Router.query.get("id"),"?_method=PUT"),content_type:"multipart/form-data",route:!0,push_notif:!0,initial:{title:null==p?void 0:null===(a=p.cls)||void 0===a?void 0:a.title,organization_id:null==p?void 0:null===(r=p.cls)||void 0===r?void 0:null===(s=r.organization)||void 0===s?void 0:s.id}},structure:[[{input:{name:"title",type:"text",placeholder:"نام کلاس"}},{select:{name:"organization_id",placeholder:"انتخاب موسسه",data:null==p?void 0:p.orgs,args:{defaultValue:null==p?void 0:null===(c=p.cls)||void 0===c?void 0:null===(v=c.organization)||void 0===v?void 0:v.id}}}]]}}}:{loading:!0}})}}},function(o){o.O(0,[675,427,774,888,179],function(){return o(o.s=39343)}),_N_E=o.O()}]);
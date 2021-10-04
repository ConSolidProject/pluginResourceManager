"use strict";(self.webpackChunkresourcemanager=self.webpackChunkresourcemanager||[]).push([[385],{88385:(e,n,t)=>{t.r(n),t.d(n,{default:()=>U});var r=t(7271),a=t.n(r),o=t(97650),i=t.n(o),c=t(15861),s=t(29439),l=t(87757),d=t.n(l),f=t(5034),u=t(26975),p=t(97591),m=t(12459),w=t(41740),g=t.n(w),h=t(74283),b=t(87477),y=t(75073);const v=function(e){var n=e.project,t=e.setTrigger,o=e.store,i=(0,r.useState)(null),l=(0,s.Z)(i,2),f=l[0],u=l[1],w=(0,r.useState)(null),v=(0,s.Z)(w,2),x=v[0],k=v[1],E=(0,r.useState)(""),I=(0,s.Z)(E,2),D=I[0],L=I[1],R=(0,r.useState)(""),P=(0,s.Z)(R,2),C=P[0],S=P[1],B=(0,r.useState)(!1),T=(0,s.Z)(B,2),F=T[0],G=(T[1],(0,r.useState)(!1)),j=(0,s.Z)(G,2),A=j[0],Z=j[1],O=(0,r.useState)(!1),X=(0,s.Z)(O,2),q=X[0],N=X[1],_=(0,r.useState)(null),M=(0,s.Z)(_,2),U=(M[0],M[1]);function Q(){return(Q=(0,c.Z)(d().mark((function r(){var a,i,c,s,l,u;return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=(0,y.getDefaultSession)(),k(!0),r.next=5,(0,h.getMyProjectRepository)(n,a);case 5:return i=r.sent,c=f.name.split(".")[0],!1===(s=g().lookup(f.name))&&(s="text/plain"),r.next=11,(0,h.checkExistence)("".concat(i).concat(f.name),a);case 11:if(!r.sent){r.next=14;break}throw Error("A resource with this name already exists!");case 14:return l="".concat(i).concat(f.name,".props.ttl"),u="  \n    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> \n  \n    INSERT DATA {\n      <".concat(i).concat(c,'> a <http://www.w3.org/ns/dcat#Dataset> ;\n      <http://purl.org/dc/terms/title> "').concat(C,'"@en ;\n      <http://www.w3.org/ns/dcat#keyword> "').concat(D,'"@en ;\n      <http://purl.org/dc/terms/creator> <').concat(a.info.webId,'> ;\n      <http://purl.org/dc/terms/issued> "').concat((new Date).toISOString(),'"^^xsd:dateTime ;\n      <http://purl.org/dc/terms/modified> "').concat((new Date).toISOString(),'"^^xsd:dateTime ;\n      <http://www.w3.org/ns/dcat#distribution> <').concat(i).concat(f.name,">.\n\n  <").concat(i).concat(f.name,'> a <http://www.w3.org/ns/dcat#Distribution>;\n      <http://purl.org/dc/terms/title> "').concat(s," distribution of dataset: ").concat(C,'";\n      <http://www.w3.org/ns/dcat#downloadURL> <').concat(i).concat(f.name,">;\n      <http://www.w3.org/ns/dcat#mediaType> <https://www.iana.org/assignments/media-types/").concat(s,"> .\n    }"),r.next=18,(0,h.update)(u,l,a);case 18:return r.next=20,(0,h.uploadResource)("".concat(i).concat(f.name),f,{mimeType:s},a);case 20:if(!A||!q){r.next=30;break}if(console.log("making artefacts"),"model/gltf+json"!==s){r.next=27;break}return r.next=25,(0,b.createGlobalArtefactsFromGltf)("".concat(i).concat(f.name),i+"artefactRegistry.ttl",o,n,a);case 25:r.next=30;break;case 27:if("text/turtle"!==s){r.next=30;break}return r.next=30,(0,b.createGlobalArtefactsFromLbd)("".concat(i).concat(f.name),i+"artefactRegistry.ttl",o,n,a);case 30:t((function(e){return e+1})),k(!1),e.onClose(),r.next=40;break;case 35:r.prev=35,r.t0=r.catch(0),k(!1),console.log(r.t0),U(r.t0.message);case 40:case"end":return r.stop()}}),r,null,[[0,35]])})))).apply(this,arguments)}return a().createElement("div",null,a().createElement(p.Dialog,{open:e.open,onClose:e.onClose,"aria-labelledby":"form-dialog-title"},a().createElement(p.DialogTitle,{id:"form-dialog-title"},"Upload a resource"),a().createElement(p.DialogContent,null,a().createElement(p.DialogContentText,null,"Upload a resource to your project vault.")),a().createElement(p.TextField,{style:{margin:10},variant:"standard",type:"file",onChange:function(e){e.preventDefault(),console.log("e.target.files[0]",e.target.files[0]);var n=g().lookup(e.target.files[0].name);console.log("mimeType",n),"model/gltf+json"!==n&&"text/turtle"!==n||Z(!0),u(e.target.files[0])}}),a().createElement(p.TextField,{style:{margin:10},variant:"standard",value:C,onChange:function(e){return S(e.target.value)},label:"Description"}),a().createElement(p.TextField,{style:{margin:10},variant:"standard",value:D,onChange:function(e){return L(e.target.value)},label:"Label"}),a().createElement(p.DialogActions,null,A?a().createElement(p.FormControlLabel,{control:a().createElement(p.Checkbox,{checked:q,onChange:function(){return N((function(e){return!e}))},color:"primary"}),label:"Create global identifiers for GLTF or LBD"}):a().createElement("p",null),a().createElement(p.Button,{onClick:e.onClose,color:"primary"},"Cancel"),a().createElement(p.Button,{onClick:function(){return Q.apply(this,arguments)},variant:"contained",color:"primary",component:"span",startIcon:a().createElement(m.Z,{fontSize:"large"}),disabled:!f&&!F||x},"Upload",x&&a().createElement(p.CircularProgress,{size:20})," "))))};var x=t(93433),k=t(28428);function E(e){var n=e.dataset,t=e.setActiveResources,r=e.activeResources,o=e.session,i=(n.artefactRegistry,n.accessRights),s=(n.metadata,n.main);function l(){return(l=(0,c.Z)(d().mark((function e(){var a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("dataset",n),e.next=3,(0,h.deleteResource)(n,o);case 3:a=r.filter((function(e,n,t){return e.main!==s})),t(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a().createElement("div",{style:{marginLeft:25}},a().createElement(p.Grid,{container:!0,spacing:2},a().createElement(p.Grid,{item:!0,xs:8}," ",a().createElement(p.FormControl,null,a().createElement(p.FormGroup,null,a().createElement(p.FormControlLabel,{control:a().createElement(p.Switch,{checked:r.map((function(e){return e.main})).includes(s),onChange:function(e){if(r.map((function(e){return e.main})).includes(s)){var a=r.filter((function(e,n,t){return e.main!==s}));t(a)}else t([].concat((0,x.Z)(r),[n]))},color:"primary"}),color:"primary",label:s.split("/")[s.split("/").length-1]})))),a().createElement(p.Grid,{item:!0,xs:4}," ",i.includes("write")?a().createElement(p.IconButton,{style:{bottom:5},color:"primary","aria-label":"upload picture",component:"span",onClick:function(){return l.apply(this,arguments)}},a().createElement(k.Z,null)):a().createElement(a().Fragment,null))))}function I(e){var n=e.sharedProps,t=n.projects,o=n.setActiveResources,i=n.activeResources,c=n.trigger,l=n.session,d=(0,r.useState)([]),f=(0,s.Z)(d,2),u=f[0],m=f[1],w=t[0];return(0,r.useEffect)((function(){(0,b.getProjectResourcesByStakeholder)(w,l).then((function(e){return m(e)}))}),[i,c]),a().createElement("div",null,Object.keys(u).map((function(e){return a().createElement("div",{style:{marginBottom:20},key:e},a().createElement(p.Typography,null,e,": "),u[e].map((function(e){return a().createElement("div",{key:e.metadata},a().createElement(E,{session:l,dataset:e,activeResources:i,setActiveResources:o}))})))})))}t(73736);var D=t(99170).DataFactory,L=(D.namedNode,D.literal,D.defaultGraph,D.quad,t(44919));L.container,L.linkSet,t(55877),t(81092).newEngine,t(87477).getProjectResourcesByStakeholder;var R=t(4147),P=(0,f.Z)({productionPrefix:R.name,seed:R.name});const C=function(e){var n=(0,r.useState)("stakeholder"),t=(0,s.Z)(n,2),o=t[0],i=t[1],l=(0,r.useState)(!1),f=(0,s.Z)(l,2),m=f[0],w=f[1],g=(0,r.useState)(),h=(0,s.Z)(g,2),y=(h[0],h[1],(0,r.useState)(!1)),x=(0,s.Z)(y,2),k=x[0],E=x[1],D=(0,r.useState)(),L=(0,s.Z)(D,2),R=(L[0],L[1],e.sharedProps),C=(e.inactive,R.projects),S=R.setTrigger,B=(R.trigger,R.store),T=R.activeResources,F=R.session,G=C[0];function j(){return(j=(0,c.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,(0,b.alignGltfAndLbd)(T,F,B,G);case 4:E(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),E(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return e.inactive?a().createElement(a().Fragment,null):a().createElement(u.ZP,{generateClassName:P},a().createElement("h3",{style:{margin:10}},"Resource overview"),a().createElement(p.FormControl,{style:{margin:20}},a().createElement(p.InputLabel,{id:"demo-simple-select-helper-label"},"Mapping"),a().createElement(p.Select,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:o,onChange:function(e){return i(e.target.value)}},a().createElement(p.MenuItem,{value:"stakeholder"},"Stakeholder")),a().createElement(p.FormHelperText,null,"Choose how project resources should be organised")),a().createElement("hr",null),a().createElement("div",null),function(){if("stakeholder"===o)return a().createElement(I,{sharedProps:R})}(),a().createElement("div",null),a().createElement("div",null,F.info.isLoggedIn?a().createElement("div",null,a().createElement(p.Button,{disabled:k,variant:"contained",color:"primary",style:{margin:10,position:"fixed",bottom:10,left:170},onClick:function(e){return function(){return j.apply(this,arguments)}(!0)}},"ALIGN"),a().createElement(p.Button,{variant:"contained",color:"primary",style:{margin:10,position:"fixed",bottom:10,left:70},onClick:function(e){return w(!0)}},"Upload"),a().createElement(v,{onClose:(0,c.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(!1);case 1:case"end":return e.stop()}}),e)}))),setTrigger:S,store:B,open:m,project:G})):a().createElement(a().Fragment,null)))};var S=t(24853),B=t(99170),T=((0,S.atom)({key:"session",default:new y.Session}),(0,S.atom)({key:"projects",default:["http://localhost:5000/jeroen/lbd/642f0417-ce23-4d9d-8806-c078aed93ae1/"]})),F=(0,S.atom)({key:"activeResources",default:[]}),G=(0,S.atom)({key:"selectedElements",default:[]}),j=(0,S.atom)({key:"selectionId",default:""}),A=(0,S.atom)({key:"trigger",default:"0"}),Z=(0,S.atom)({key:"store",default:new B.Store}),O=t(12780),X=t(89875),q=t(97581),N=t(4147);t(4147);var _=function(e,n,t){var r;if(t)r=a().createElement(t,null);else{var o={};n&&(o=n),r=a().createElement(C,o)}i().render(r,e)},M=document.querySelector("#a4fead9a-19b3-4663-aecd-b7854874ea34");M&&_(M,{},(function(){var e={url:"http://example.org/remoteEntry.js",scope:N.name,label:N.name,module:"./index",dimensions:{x:0,y:0,h:850,w:400}},n=function(e,n){return function(){var t=(0,r.useState)(!0),o=(0,s.Z)(t,2),i=o[0],c=o[1],l=(0,S.useRecoilState)(F),d=(0,s.Z)(l,2),f=d[0],u=d[1],m=(0,S.useRecoilState)(G),w=(0,s.Z)(m,2),g=w[0],b=w[1],v=(0,S.useRecoilState)(T),x=(0,s.Z)(v,2),k=x[0],E=x[1],I=(0,S.useRecoilState)(j),D=(0,s.Z)(I,2),L=D[0],R=D[1],P=(0,S.useRecoilState)(A),C=(0,s.Z)(P,2),B=C[0],O=C[1],N=(0,S.useRecoilValue)(Z),_={projects:k,setProjects:E,activeResources:f,setActiveResources:u,selectedElements:g,setSelectedElements:b,selectionId:L,setSelectionId:R,trigger:B,setTrigger:O,store:N,session:(0,y.getDefaultSession)()};return(0,r.useEffect)((function(){k.length>0&&(0,h.loadProjectMetadata)(k[0],N,(0,y.getDefaultSession)()).then((function(){return console.log("loaded")})).catch((function(e){return console.log("err",e)}))}),[B]),a().createElement("div",null,a().createElement(p.IconButton,{style:{position:"absolute",right:i?450:0},variant:"contained",color:"primary",onClick:function(){return c(!i)}},i?a().createElement(a().Fragment,null):a().createElement(X.default,null)),a().createElement(q.Options,{openOptions:i,setOpenOptions:c,trigger:B,setTrigger:O,projects:k,setProjects:E,store:N})," ",k.length>0?a().createElement(e,{sharedProps:_,module:n,children:null,inactive:!1}):a().createElement("p",null,"Select a project first"))}}(C,e);return a().createElement("div",{style:{width:e.dimensions.w,height:e.dimensions.h}},a().createElement(S.RecoilRoot,null,a().createElement(O.QueryClientProvider,{client:new O.QueryClient},a().createElement(n,{module:e}))))}));const U=_},87477:(e,n,t)=>{t.r(n),t.d(n,{getProjectResourcesByStakeholder:()=>m,alignGuids:()=>b,createGlobalArtefactsFromGltf:()=>v,createGlobalArtefactsFromLbd:()=>k,alignGltfAndLbd:()=>g});var r=t(93433),a=t(15861),o=t(87757),i=t.n(o),c=t(74283),s=t(55877),l=t(41740),d=t.n(l);function f(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var p=t(81092).newEngine;function m(e,n){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(i().mark((function e(n,t){var r,a,o,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={},e.next=4,(0,c.getStakeholdersFromProject)(n,t);case 4:return a=e.sent,e.next=7,(0,c.getProjectId)(n);case 7:return o=e.sent,s=a.map((function(e){return(0,c.getProjectDataFromStakeholder)(e,o,t)})),e.next=11,Promise.all(s);case 11:return e.sent.forEach((function(e){return r[e.stakeholder]=e.data})),e.abrupt("return",r);case 16:throw e.prev=16,e.t0=e.catch(0),console.log("error getting",e.t0),e.t0;case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function g(e,n,t,r){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function e(n,t,a,o){var s,l,u,m,w,g,h,b,y,v,x,k,E,I,D,L,R,P,C,S,B,T,F,G,j,A,Z,O,X,q,N,_,M,U;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,s=n.filter((function(e){return d().lookup(e.main).endsWith("model/gltf+json")})),l=n.filter((function(e){return d().lookup(e.main).endsWith("text/turtle")})),u=p(),m=f(s),e.prev=5,m.s();case 7:if((w=m.n()).done){e.next=93;break}return g=w.value,h="  PREFIX lbd: <https://lbdserver.org/vocabulary#>\n  SELECT ?id ?art WHERE {\n    ?art lbd:hasLinkElement ?le .\n    ?le lbd:hasIdentifier ?ident ; lbd:hasDocument <".concat(g.main,">.\n    ?ident lbd:identifier ?id .\n  }"),b="PREFIX owl: <http://www.w3.org/2002/07/owl#>\n  INSERT DATA { ",e.next=13,u.query(h,{sources:(0,r.Z)(s.map((function(e){return e.artefactRegistry})))});case 13:return y=e.sent,e.next=16,y.bindings();case 16:v=e.sent,x=f(v),e.prev=18,x.s();case 20:if((k=x.n()).done){e.next=77;break}E=k.value,I=f(l),e.prev=23,I.s();case 25:if((D=I.n()).done){e.next=67;break}return L=D.value,R="PREFIX owl: <http://www.w3.org/2002/07/owl#>\n      INSERT DATA {",P=E.get("?art").value,C=E.get("?id").value,S='\n      prefix schema: <http://schema.org/> \n      prefix props: <https://w3id.org/props#>\n    \n      select ?element \n      where \n      { ?element props:globalIdIfcRoot ?root .\n        ?root schema:value "'.concat(C,'" .\n      }'),e.next=33,(0,c.executeQuery)(S,[L.main],t);case 33:return B=e.sent,e.next=36,B.bindings();case 36:T=e.sent,F=f(T),e.prev=38,F.s();case 40:if((G=F.n()).done){e.next=54;break}return j=G.value,A=j.get("?element").value,Z="  PREFIX lbd: <https://lbdserver.org/vocabulary#>\n        SELECT ?artefact WHERE {\n          ?artefact lbd:hasLinkElement ?le .\n          ?le lbd:hasDocument <".concat(L.main,"> ; lbd:hasIdentifier ?ident . \n          ?ident lbd:identifier <").concat(A,"> .\n        }"),e.next=46,u.query(Z,{sources:[a]});case 46:return O=e.sent,e.next=49,O.bindings();case 49:X=e.sent,q=f(X);try{for(q.s();!(N=q.n()).done;)_=N.value,M=_.get("?artefact").value,U="\n            <".concat(M,"> owl:sameAs <").concat(P,"> .\n            <").concat(P,"> owl:sameAs <").concat(M,"> .\n          "),b+=U,R+=U}catch(e){q.e(e)}finally{q.f()}case 52:e.next=40;break;case 54:e.next=59;break;case 56:e.prev=56,e.t0=e.catch(38),F.e(e.t0);case 59:return e.prev=59,F.f(),e.finish(59);case 62:return R+="}",e.next=65,(0,c.update)(R,L.artefactRegistry,t);case 65:e.next=25;break;case 67:e.next=72;break;case 69:e.prev=69,e.t1=e.catch(23),I.e(e.t1);case 72:return e.prev=72,I.f(),e.finish(72);case 75:e.next=20;break;case 77:e.next=82;break;case 79:e.prev=79,e.t2=e.catch(18),x.e(e.t2);case 82:return e.prev=82,x.f(),e.finish(82);case 85:return b+="}",e.next=88,(0,c.update)(b,g.artefactRegistry,t);case 88:return e.next=90,(0,c.loadProjectMetadata)(o,a,t);case 90:return e.abrupt("return");case 91:e.next=7;break;case 93:e.next=98;break;case 95:e.prev=95,e.t3=e.catch(5),m.e(e.t3);case 98:return e.prev=98,m.f(),e.finish(98);case 101:e.next=106;break;case 103:e.prev=103,e.t4=e.catch(0),console.log("error",e.t4);case 106:case"end":return e.stop()}}),e,null,[[0,103],[5,95,98,101],[18,79,82,85],[23,69,72,75],[38,56,59,62]])})))).apply(this,arguments)}function b(e,n,t,r){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(i().mark((function e(n,t,r,a){var o,l,d,u,m,w,g,h,b,y,v,x,k,E,I,D,L,R,P;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=p(),l="http://localhost:5000/jeroen/lbd/642f0417-ce23-4d9d-8806-c078aed93ae1/architectural_duplex.gltf",d="http://localhost:5000/jeroen/lbd/642f0417-ce23-4d9d-8806-c078aed93ae1/architectural_duplex.ttl",u="http://localhost:5000/jeroen/lbd/642f0417-ce23-4d9d-8806-c078aed93ae1/artefactRegistry.ttl",e.next=6,n.fetch(l);case 6:return m=e.sent,e.next=9,m.json();case 9:w=e.sent,g="\n  PREFIX lbd: <https://lbdserver.org/vocabulary#>\n  PREFIX loc: <".concat(u,"#>\n\n  INSERT DATA { "),h=f(w.nodes),e.prev=12,h.s();case 14:if((b=h.n()).done){e.next=27;break}if(!((y=b.value).name&&y.name.length>10)){e.next=25;break}return v='\n      prefix ldp: <http://www.w3.org/ns/ldp#>\n      prefix dcat: <http://www.w3.org/ns/dcat#>\n      prefix schema: <http://schema.org/> \n      prefix props: <https://w3id.org/props#>\n\n      select ?element \n      where \n      { ?element props:globalIdIfcRoot ?root .\n        ?root schema:value "'.concat(y.name,'" .\n      }'),e.next=20,o.query(v,{sources:[d]});case 20:return x=e.sent,e.next=23,x.bindings();case 23:(k=e.sent).length>0&&(E=k[0].get("?element").id,I=(0,s.v4)(),D=(0,s.v4)(),L=(0,s.v4)(),R=(0,s.v4)(),P=(0,s.v4)(),g+="\n        loc:artefact_".concat(I," lbd:hasLinkElement loc:le_").concat(D,", loc:le_").concat(L," .\n        loc:le_").concat(D," lbd:hasDocument <").concat(l,"> ;\n            lbd:hasIdentifier loc:identifier_").concat(R," .\n        loc:identifier_").concat(R,' lbd:identifier "').concat(y.name,'" ; a lbd:StringBasedIdentifier .\n\n        loc:le_').concat(L," lbd:hasIdentifier loc:identifier_").concat(P," ;\n          lbd:hasDocument <").concat(d,"> .\n        loc:identifier_").concat(P," a lbd:URIBasedIdentifier ;\n           lbd:identifier <").concat(E,"> .\n      "));case 25:e.next=14;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(12),h.e(e.t0);case 32:return e.prev=32,h.f(),e.finish(32);case 35:return g+=" } ",e.next=38,(0,c.update)(g,u,n);case 38:return e.next=40,(0,c.update)(g,a,n);case 40:case"end":return e.stop()}}),e,null,[[12,29,32,35]])})))).apply(this,arguments)}function v(e,n,t,r,a){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(i().mark((function e(n,t,r,a,o){var l,d,u,p,m,w,g,h,b;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.fetch(n);case 2:return l=e.sent,e.next=5,l.json();case 5:d=e.sent,u="\n  PREFIX lbd: <https://lbdserver.org/vocabulary#>\n  PREFIX owl: <http://www.w3.org/2002/07/owl#>\n  PREFIX omg: <https://w3id.org/omg#>\n  PREFIX fog: <https://w3id/fog#>\n  PREFIX dct: <http://purl.org/dc/terms/>\n  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n  PREFIX loc: <".concat(t,"#>\n\n  INSERT DATA { "),p=f(d.nodes);try{for(p.s();!(m=p.n()).done;)if((w=m.value).name)try{g=(0,s.v4)(),h=(0,s.v4)(),b=(0,s.v4)(),u+=" loc:artefact_".concat(g," lbd:hasLinkElement loc:le_").concat(h," .\n          loc:le_").concat(h," lbd:hasIdentifier loc:identifier_").concat(b," ;\n            lbd:hasDocument <").concat(n,"> .\n          loc:identifier_").concat(b,' lbd:identifier "').concat(w.name,'" . ')}catch(e){console.log("error",e)}}catch(e){p.e(e)}finally{p.f()}return u+="}",e.next=12,(0,c.update)(u,t,o);case 12:return e.next=14,(0,c.loadProjectMetadata)(a,r,o);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,n,t,r,a){return E.apply(this,arguments)}function E(){return E=(0,a.Z)(i().mark((function e(n,t,r,o,l){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)(i().mark((function e(d,f){var u,p;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u="\n      PREFIX lbd: <https://lbdserver.org/vocabulary#>\n      PREFIX owl: <http://www.w3.org/2002/07/owl#>\n      PREFIX omg: <https://w3id.org/omg#>\n      PREFIX fog: <https://w3id/fog#>\n      PREFIX dct: <http://purl.org/dc/terms/>\n      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n      PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n      PREFIX loc: <".concat(t,"#>\n    \n      INSERT DATA { "),e.next=5,(0,c.executeQuery)("\n      prefix ldp: <http://www.w3.org/ns/ldp#>\n      prefix dcat: <http://www.w3.org/ns/dcat#>\n      prefix schema: <http://schema.org/> \n      prefix props: <https://w3id.org/props#>\n    \n      select ?element \n      where \n      { ?element props:globalIdIfcRoot ?root .\n        ?root schema:value ?id .\n      }",[n],l);case 5:(p=e.sent).bindingsStream.on("data",(function(e){var t=e.get("?element").value,r=(0,s.v4)(),a=(0,s.v4)(),o=(0,s.v4)();u+=" loc:artefact_".concat(r," lbd:hasLinkElement loc:le_").concat(a," .\n              loc:le_").concat(a," lbd:hasIdentifier loc:identifier_").concat(o," ;\n                lbd:hasDocument <").concat(n,"> .\n              loc:identifier_").concat(o," lbd:identifier <").concat(t,"> ; a lbd:URIBasedIdentifier . ")})),p.bindingsStream.on("end",(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u+="}",e.next=3,(0,c.update)(u,t,l);case 3:return e.next=5,(0,c.loadProjectMetadata)(o,r,l);case 5:d();case 6:case"end":return e.stop()}}),e)})))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),f(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}},44919:(e,n,t)=>{t.r(n),t.d(n,{container:()=>r,linkSet:()=>a});var r='\n@prefix : <http://www.iso-icdd.org/examples/part1/usecase1A/requirements/index.rdf#> .\n@prefix ct: <http://www.iso-icdd.org/part1/2019/Container#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\n<http://www.iso-icdd.org/examples/part1/usecase1A/requirements/index.rdf> a ct:ContainerDescription,\n        owl:Ontology ;\n    ct:conformanceIndicator "ICDD-Part1-Container" ;\n    ct:containsDocument :id39a2f462-8685-4258-8e33-8e1441bc1c3f,\n        :id57460da1-87ec-4d74-b8d4-cf0f5f16bf9f,\n        :id5889c5d9-8b9e-4ecb-9ec2-9db56e4ecbf1,\n        :id9a34f397-aa5a-4f25-9109-4b4839ff1505,\n        :id9f01cef7-8939-4ee4-ac88-27d49df430c3,\n        :idb57cbae5-5e10-448d-855b-f09b4b146814,\n        :idc59e723b-95a8-4e84-9154-54db44a240a1 ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "icdd showcase 1a:  Requirements container" ;\n    ct:publisher :idd849fa6d-8491-4af1-904f-99a760571c87 ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" ;\n    owl:imports <http://www.iso-icdd.org/part1/2019/Container> .\n\n:id39a2f462-8685-4258-8e33-8e1441bc1c3f a ct:InternalDocument ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "Excel template for the timesheet" ;\n    ct:filename "TimeSheetTemplate.xlsx" ;\n    ct:filetype "xlsx" ;\n    ct:format "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ;\n    ct:name "TimeSheetTemplate.xlsx" ;\n    ct:pending false ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" .\n\n:id57460da1-87ec-4d74-b8d4-cf0f5f16bf9f a ct:InternalDocument ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "Excel inspection report. One row in Excel must be for each construction part" ;\n    ct:filename "inspection_48D-100.xls" ;\n    ct:filetype "xls" ;\n    ct:name "inspection_48D-100.xls" ;\n    ct:pending true ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" .\n\n:id5889c5d9-8b9e-4ecb-9ec2-9db56e4ecbf1 a ct:InternalDocument ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "IDS including decomposition requirements for the IFC file" ;\n    ct:filename "IDSV1.pdf" ;\n    ct:filetype "pdf" ;\n    ct:format "application/pdf" ;\n    ct:name "IDSV1.pdf" ;\n    ct:pending false ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" .\n\n:id9a34f397-aa5a-4f25-9109-4b4839ff1505 a ct:InternalDocument ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "Excel template for the inspection report" ;\n    ct:filename "InspectionReportTemplate.xlsx" ;\n    ct:filetype "xlsx" ;\n    ct:format "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ;\n    ct:name "InspectionReportTemplate.xlsx" ;\n    ct:pending false ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" .\n\n:id9f01cef7-8939-4ee4-ac88-27d49df430c3 a ct:InternalDocument ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "An IFC/BIM model of viaduct Asset 48D-100" ;\n    ct:filename "48D-100.ifc" ;\n    ct:filetype "ifc" ;\n    ct:name "48D-100.IFC" ;\n    ct:pending true ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" .\n\n:idb57cbae5-5e10-448d-855b-f09b4b146814 a ct:InternalDocument ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "a photo is required for each issue" ;\n    ct:filename "issuePhoto.png" ;\n    ct:filetype "png" ;\n    ct:name "IssuePhoto.png" ;\n    ct:pending true ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" .\n\n:idc59e723b-95a8-4e84-9154-54db44a240a1 a ct:InternalDocument ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "Time sheet" ;\n    ct:filename "timesheet.xls" ;\n    ct:filetype "xls" ;\n    ct:name "timesheet.xls" ;\n    ct:pending true ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" .\n\n:idd849fa6d-8491-4af1-904f-99a760571c87 a ct:Organisation ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "a working group preparing Part 1 and Part 2 of the ICDD" ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" .\n\n:id0b80ea4e-eba1-481f-bc97-309c0de355b9 a ct:Person ;\n    ct:creationDate "2018-05-28T14:13:28.167000"^^xsd:dateTime ;\n    ct:creator :id0b80ea4e-eba1-481f-bc97-309c0de355b9 ;\n    ct:description "works at BuildingBits.nl" ;\n    ct:name "Hans Schevers" ;\n    ct:versionDescription "first version" ;\n    ct:versionID "1" .\n',a='\n@prefix : <http://www.iso-icdd.org/draft/Linkset.rdf#> .\n@prefix ct: <http://www.iso-icdd.org/draft/Container.rdf#> .\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix xml: <http://www.w3.org/XML/1998/namespace> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n\n<http://www.iso-icdd.org/draft/Linkset.rdf> a owl:Ontology ;\n    owl:imports <http://www.iso-icdd.org/draft/Container.rdf> ;\n    owl:versionInfo "Created with TopBraid Composer" .\n\n:Directed1toNLink a owl:Class ;\n    rdfs:label "Directed1to NLink"@en-GB ;\n    rdfs:comment "an ls:Directed1toNLink is a subtype of ls:DirectedLink mandating exactly 1 ls:hasFromLinkElement"@en-GB ;\n    rdfs:subClassOf [ a owl:Restriction ;\n            owl:cardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onProperty :hasFromLinkElement ],\n        :DirectedLink .\n\n:DirectedBinaryLink a owl:Class ;\n    rdfs:label "Directed binary link"@en-GB ;\n    rdfs:comment "a subtype of a binary link (that has exactly 2 LinkElements) that uses the subproperties hasFromLinkElement and hasToLinkElement to denote a direction of this link"@en-GB ;\n    rdfs:subClassOf [ a owl:Restriction ;\n            owl:cardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onProperty :hasToLinkElement ],\n        [ a owl:Restriction ;\n            owl:cardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onProperty :hasFromLinkElement ],\n        :BinaryLink,\n        :DirectedLink .\n\n:querySortExpression a owl:DatatypeProperty,\n        owl:FunctionalProperty ;\n    rdfs:label "query sort expression"@en-GB ;\n    rdfs:comment "the query sorting string"@en-GB ;\n    rdfs:domain :QueryBasedIdentifier ;\n    rdfs:range xsd:string .\n\n:url a owl:DatatypeProperty ;\n    rdfs:label "url"@en-GB ;\n    rdfs:comment "an url for referring to a document via an URL"@en-GB ;\n    rdfs:domain :URLBasedIdentifier ;\n    rdfs:range xsd:anyURI .\n\n:BinaryLink a owl:Class ;\n    rdfs:label "Binary link"@en-GB ;\n    rdfs:comment "An ls:Link comprising exactly 2 individuals of class ls:LinkElement"@en-GB ;\n    rdfs:subClassOf [ a owl:Restriction ;\n            owl:cardinality "2"^^xsd:nonNegativeInteger ;\n            owl:onProperty :hasLinkElement ],\n        :Link ;\n    owl:equivalentClass [ a owl:Class ;\n            owl:intersectionOf ( :Link [ a owl:Restriction ;\n                        owl:cardinality "2"^^xsd:nonNegativeInteger ;\n                        owl:onProperty :hasLinkElement ] ) ] .\n\n:hasDocument a owl:ObjectProperty ;\n    rdfs:label "has document"@en-GB ;\n    rdfs:comment "a reference from a ls:LinkElement to a ls:Document"@en-GB ;\n    rdfs:domain :LinkElement ;\n    rdfs:range ct:Document .\n\n:hasIdentifier a owl:ObjectProperty ;\n    rdfs:label "has identifier"@en-GB ;\n    rdfs:comment "a reference from ls:LinkElement to an ls:Identifier"@en-GB ;\n    rdfs:domain :LinkElement ;\n    rdfs:range :Identifier .\n\n:identifier a owl:DatatypeProperty,\n        owl:FunctionalProperty ;\n    rdfs:label "identifier"@en-GB ;\n    rdfs:comment "a string datatype property containing the identifier"@en-GB ;\n    rdfs:domain :StringBasedIdentifier ;\n    rdfs:range xsd:string .\n\n:identifierField a owl:DatatypeProperty,\n        owl:FunctionalProperty ;\n    rdfs:label "identifier field"@en-GB ;\n    rdfs:comment "a string datatype for defining the field where the identifier can be found (optionally)"@en-GB ;\n    rdfs:domain :StringBasedIdentifier ;\n    rdfs:range xsd:string .\n\n:queryExpression a owl:DatatypeProperty,\n        owl:FunctionalProperty ;\n    rdfs:label "query expression"@en-GB ;\n    rdfs:comment "the query resulting into a identifier"@en-GB ;\n    rdfs:domain :QueryBasedIdentifier ;\n    rdfs:range xsd:string .\n\n:queryLanguage a owl:DatatypeProperty,\n        owl:FunctionalProperty ;\n    rdfs:label "query language"@en-GB ;\n    rdfs:comment "a query lanugage specification"@en-GB ;\n    rdfs:domain :QueryBasedIdentifier ;\n    rdfs:range xsd:string .\n\n:URLBasedIdentifier a owl:Class ;\n    rdfs:label "URLBased identifier"@en-GB ;\n    rdfs:comment "URL based identifier for referring to documents via an URL"@en-GB ;\n    rdfs:subClassOf :Identifier .\n\n:hasToLinkElement a owl:ObjectProperty ;\n    rdfs:label "outgoing link element"@en-GB ;\n    rdfs:comment "a reference from a ls:Link to a ls:LinkElement. It is a sub property of ls:hasLinkElement"@en-GB ;\n    rdfs:domain :DirectedLink ;\n    rdfs:range :LinkElement ;\n    rdfs:subPropertyOf :hasLinkElement .\n\n:StringBasedIdentifier a owl:Class ;\n    rdfs:label "String based identifier"@en-GB ;\n    rdfs:comment "identification of an entity within a document via a String ID"@en-GB ;\n    rdfs:subClassOf [ a owl:Restriction ;\n            owl:maxCardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onProperty :identifierField ],\n        [ a owl:Restriction ;\n            owl:cardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onProperty :identifier ],\n        :Identifier .\n\n:hasFromLinkElement a owl:ObjectProperty ;\n    rdfs:label "incoming link element"@en-GB ;\n    rdfs:comment "a reference from a ls:Link to a ls:LinkElement. It is a sub property of ls:hasLinkElement"@en-GB ;\n    rdfs:domain :DirectedLink ;\n    rdfs:range :LinkElement ;\n    rdfs:subPropertyOf :hasLinkElement .\n\n:DirectedLink a owl:Class ;\n    rdfs:label "Directed link"@en-GB ;\n    rdfs:comment "a  subtype of a binary link (that has exactly 2 instances of ls:LinkElement) that uses the subproperties ls:hasFromLinkElement and ls:hasToLinkElement to denote a direction of this link"@en-GB ;\n    rdfs:subClassOf [ a owl:Restriction ;\n            owl:minCardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onProperty :hasToLinkElement ],\n        [ a owl:Restriction ;\n            owl:minCardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onProperty :hasFromLinkElement ],\n        :Link .\n\n:Link a owl:Class ;\n    rdfs:label "Link"@en-GB ;\n    rdfs:comment "A grouping of 1 or more ls:Link elements"@en-GB ;\n    rdfs:subClassOf [ a owl:Restriction ;\n            owl:minCardinality "2"^^xsd:nonNegativeInteger ;\n            owl:onProperty :hasLinkElement ] .\n\n:QueryBasedIdentifier a owl:Class ;\n    rdfs:label "Query based identifier"@en-GB ;\n    rdfs:comment "a identifier of an entity in a document based upon a query"@en-GB ;\n    rdfs:subClassOf [ a owl:Restriction ;\n            owl:cardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onProperty :queryExpression ],\n        [ a owl:Restriction ;\n            owl:cardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onProperty :queryLanguage ],\n        :Identifier .\n\n:Identifier a owl:Class ;\n    rdfs:label "Identifier"@en-GB ;\n    rdfs:comment "an abstract class for identification of an entity within a document."@en-GB ;\n    rdfs:subClassOf [ a owl:Class ;\n            owl:unionOf ( :QueryBasedIdentifier :StringBasedIdentifier :URLBasedIdentifier ) ] .\n\n:LinkElement a owl:Class ;\n    rdfs:label "Link element"@en-GB ;\n    rdfs:comment "A proxy class for referencing to a model or to an entity in a document"@en-GB ;\n    rdfs:subClassOf [ a owl:Restriction ;\n            owl:maxQualifiedCardinality "1"^^xsd:nonNegativeInteger ;\n            owl:onClass :Identifier ;\n            owl:onProperty :hasIdentifier ],\n        [ a owl:Restriction ;\n            owl:onClass ct:Document ;\n            owl:onProperty :hasDocument ;\n            owl:qualifiedCardinality "1"^^xsd:nonNegativeInteger ] .\n\n:hasLinkElement a owl:ObjectProperty ;\n    rdfs:label "has link element"@en-GB ;\n    rdfs:comment "a reference from a ls:Link to a ls:LinkElement"@en-GB ;\n    rdfs:domain :Link ;\n    rdfs:range :LinkElement .\n'},4147:e=>{e.exports=JSON.parse('{"name":"resourcemanager","version":"1.0.0","port":8081,"domain":"https://consolidproject.github.io/pluginResourceManager/","scripts":{"start":"webpack serve --config config/webpack.dev.js","build":"webpack --config config/webpack.prod.js"},"dependencies":{"@comunica/actor-init-sparql":"^1.22.0","@comunica/actor-init-sparql-solid":"^1.0.0","@inrupt/solid-client-authn-browser":"^1.11.2","@material-ui/core":"^4.11.0","@material-ui/icons":"^4.9.1","assert":"^2.0.0","browserify-fs":"^1.0.0","browserify-zlib":"^0.2.0","buffer":"^6.0.3","child_process":"^1.0.2","consolid":"^1.0.3","consolid-react-ui":"0.0.10","crypto-browserify":"^3.12.0","dgram":"^1.0.1","dgram-browserify":"0.0.13","dns":"^0.2.2","events":"^3.3.0","fetch-sparql-endpoint":"^2.3.1","fs":"0.0.1-security","graphql-ld-comunica-solid":"^1.0.1","http2":"^3.3.7","https-browserify":"^1.0.0","jszip":"^3.7.1","mime-types":"^2.1.32","n3":"^1.11.1","net":"^1.0.2","os-browserify":"^0.3.0","path-browserify":"^1.0.1","process":"^0.11.10","react":"^17.0.1","react-dom":"^17.0.1","react-query":"^3.24.3","react-router-dom":"^5.2.0","recoil":"^0.4.1","source-map-loader":"^3.0.0","stream-browserify":"^3.0.0","stream-http":"^3.2.0","tls":"0.0.1","util":"^0.12.4"},"devDependencies":{"@babel/core":"^7.12.3","@babel/plugin-transform-runtime":"^7.12.1","@babel/preset-env":"^7.12.1","@babel/preset-react":"^7.12.1","babel-loader":"^8.1.0","clean-webpack-plugin":"^3.0.0","css-loader":"^5.0.0","html-webpack-plugin":"^4.5.0","style-loader":"^2.0.0","webpack":"^5.4.0","webpack-cli":"^4.1.0","webpack-dev-server":"^3.11.0","webpack-merge":"^5.2.0"}}')}}]);
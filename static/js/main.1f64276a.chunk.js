(this["webpackJsonpbasic-test-set"]=this["webpackJsonpbasic-test-set"]||[]).push([[0],{46:function(t,e,n){},47:function(t,e,n){},49:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(16),s=n.n(a),i=(n(46),n(2)),o=n(18),l=n(7),u=n(14),j=(n(47),n(5)),d=n.n(j),b=n(17),p=(n(49),n(8)),f=n(0);var h=function(t){var e=t.number,n=t.setAnswer,c=t.rootDir,a=Array.from(Array(9).keys());return r.a.useEffect((function(){function t(){return(t=Object(b.a)(d.a.mark((function t(){var r,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=function(){p.a(this).classed("clicked",!p.a(this).classed("clicked")),n(e,p.a(this).data()[0]+1)},r=p.b("#Options_".concat(e)),90,90,r.attr("preserveAspectRatio","xMinYMin meet").style("background-color","transparent").attr("viewBox","0 0 ".concat(90," ").concat(90)).classed("svg-content",!0).selectAll("*").remove(),r.append("defs").selectAll("pattern").data(a).enter().append("pattern").attr("id",(function(t){return"img_".concat(e,"_").concat(t)})).attr("width","100%").attr("height","100%").attr("patternContentUnits","objectBoundingBox").append("image").attr("height","1").attr("width","1").attr("xlink:href",(function(t){return"".concat(c,"/options/option").concat(t+1,".png")})),r.append("g").selectAll("rect").data(a).enter().append("rect").attr("id",(function(t){return"rect_".concat(e,"_").concat(t)})).attr("x",(function(t){return 30*parseInt(t/3)+1})).attr("y",(function(t){return t%3*30+1})).attr("width",28).attr("height",28).style("fill",(function(t){return"url(#img_".concat(e,"_").concat(t,")")})).on("click",s);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("in useEffect"),function(){t.apply(this,arguments)}()}),[]),Object(f.jsxs)("div",{className:"Question",children:[Object(f.jsx)("div",{className:"Question-Title",children:Object(f.jsxs)("text",{className:"Question-Text",children:["Question ",e]})}),Object(f.jsxs)("div",{className:"Container",children:[Object(f.jsx)("img",{src:c+"/attribution/basic_fv.png",className:"Target-FV",alt:"logo"}),Object(f.jsx)("div",{className:"Option-box",children:Object(f.jsx)("svg",{id:"Options_"+e,className:"Options"})})]})]})};var O=function(){var t=[132,210,233,291,355,356,360,577,660,735,840,862,904,906,908,997,1173,1526,1591,1797,1895,1943,1954,1994,1997,2031].map((function(t){return"full_spec11/nueron_"+t+"/Madry"})),e=t.length,n=Object(c.useState)(Array.from(Array(e).keys()).reduce((function(t,e){return t[e+1]=[],t}),{})),r=Object(u.a)(n,2),a=r[0],s=r[1],j={name:"",age:"",gender:"",major:"",backgrounds:""},d=Object(c.useState)(j),b=Object(u.a)(d,2),p=b[0],O=b[1];function x(t,e){s((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},t,n[t].includes(e)?n[t].filter((function(t){return t!==e})):[].concat(Object(o.a)(n[t]),[e])))}))}function m(t,e){O((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},t,e.target.value))}))}return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)("p",{children:"Interpretability Test (Experiment1)"})}),Object(f.jsxs)("div",{className:"userInfoForm",children:[Object(f.jsxs)("div",{className:"Form-above",children:[Object(f.jsx)("div",{className:"Form-Left",children:Object.keys(j).slice(0,2).map((function(t){return console.log(t),Object(f.jsxs)("div",{className:"Input-Row",children:[Object(f.jsxs)("text",{style:{width:"60px"},children:[" ",t," "]}),Object(f.jsx)("input",{type:"text",value:p[t],onChange:function(e){return m(t,e)}})]})}))}),Object(f.jsx)("div",{className:"Form-Left",children:Object.keys(j).slice(2,4).map((function(t){return console.log(t),Object(f.jsxs)("div",{className:"Input-Row",children:[Object(f.jsxs)("text",{style:{width:"60px"},children:[" ",t," "]}),Object(f.jsx)("input",{type:"text",value:p[t],onChange:function(e){return m(t,e)}})]})}))})]}),Object(f.jsxs)("div",{className:"Input-full-Row",children:[Object(f.jsxs)("text",{style:{width:"100px"},children:[" ",Object.keys(p).slice(-1)[0]," "]}),Object(f.jsx)("textarea",{type:"text",value:p[Object.keys(p).slice(-1)[0]],onChange:function(t){return m(Object.keys(p).slice(-1)[0],t)}})]})]}),Array.from(Array(e).keys()).map((function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(h,{number:e+1,setAnswer:x,rootDir:t[e]})})})),Object(f.jsx)("button",{onClick:function(){var t=[];return Object.keys(a).forEach((function(e){3!==a[e].length&&t.push(e)})),0==t.length&&function(t,e,n){var c=document.createElement("a"),r=new Blob([t],{type:n});c.href=URL.createObjectURL(r),c.download=e,c.click()}(JSON.stringify(p),"experiment1_"+p.name+".json","text/plain"),alert(JSON.stringify(p)+"\n"+"".concat(t.length>0?"pick only 3 options: "+t:"All Done!!!!")+"\n"+JSON.stringify(a))},children:"Submit"})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),x()}},[[51,1,2]]]);
//# sourceMappingURL=main.1f64276a.chunk.js.map
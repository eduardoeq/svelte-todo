import{S as B,i as I,s as L,l as b,a as w,r as N,m as $,n as x,h as m,c as T,u as D,p as d,b as M,F as f,O as q,P as S,Q as j,E as k,R as W,v as z,e as H,f as v,g as G,d as J,t as E,N as K,L as X,w as P,x as U,y as A,B as F}from"../chunks/index-afa04101.js";import{w as Y}from"../chunks/index-e1d37c59.js";const O=Y([]),Z=c=>{O.update(e=>[...e,{text:c,completed:!1,id:Date.now()}])},ee=c=>{O.update(e=>e.filter(o=>o.id!==c))},te=c=>{O.update(e=>{let o=-1;for(let t=0;t<e.length;t++)if(e[t].id===c){o=t;break}return o!==-1&&(e[o].completed=!e[o].completed),e})};function oe(c){let e,o,t,n,r,s,l,a,u,i;return{c(){e=b("form"),o=b("div"),t=b("label"),n=w(),r=b("input"),s=w(),l=b("button"),a=N("Submit"),this.h()},l(h){e=$(h,"FORM",{class:!0});var p=x(e);o=$(p,"DIV",{class:!0});var y=x(o);t=$(y,"LABEL",{class:!0,for:!0}),x(t).forEach(m),n=T(y),r=$(y,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),y.forEach(m),s=T(p),l=$(p,"BUTTON",{type:!0,class:!0});var _=x(l);a=D(_,"Submit"),_.forEach(m),p.forEach(m),this.h()},h(){d(t,"class","font-bold mb-2 text-grey-800"),d(t,"for","todo"),d(r,"class","appearence-none shadow-sm border border-gray-200 focus:outline-none focus:border-gray-500 rounded-lg p-2"),d(r,"type","text"),d(r,"name","todo"),d(r,"placeholder","What do you have to do?"),d(o,"class","flex flex-col text-sm mb-2"),d(l,"type","submit"),d(l,"class","w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"),d(e,"class","my-6")},m(h,p){M(h,e,p),f(e,o),f(o,t),f(o,n),f(o,r),q(r,c[0]),f(e,s),f(e,l),f(l,a),u||(i=[S(r,"input",c[2]),S(e,"submit",j(c[1]))],u=!0)},p(h,[p]){p&1&&r.value!==h[0]&&q(r,h[0])},i:k,o:k,d(h){h&&m(e),u=!1,W(i)}}}function ne(c,e,o){let t="";const n=()=>{Z(t),o(0,t=""),console.log("submiting")};function r(){t=this.value,o(0,t)}return[t,n,r]}class se extends B{constructor(e){super(),I(this,e,ne,oe,L,{})}}function le(c){let e,o,t,n,r,s=c[0].text+"",l,a,u,i,h,p,y;return{c(){e=b("li"),o=b("input"),n=w(),r=b("span"),l=N(s),u=w(),i=b("button"),h=N("Delete"),this.h()},l(_){e=$(_,"LI",{class:!0});var g=x(e);o=$(g,"INPUT",{name:!0,type:!0,class:!0}),n=T(g),r=$(g,"SPAN",{class:!0});var R=x(r);l=D(R,s),R.forEach(m),u=T(g),i=$(g,"BUTTON",{type:!0,class:!0});var C=x(i);h=D(C,"Delete"),C.forEach(m),g.forEach(m),this.h()},h(){d(o,"name","completed"),d(o,"type","checkbox"),o.checked=t=c[0].completed,d(o,"class","mr-2 form-checkbox h-5 w-5"),d(r,"class",a=`flex-1 text-fgray-800 ${c[0].completed?"line-through":""}`),d(i,"type","button"),d(i,"class","text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"),d(e,"class","bg-white flex items-center shadow-sm border border-gray-200 rounder-lg my-2 py-2 px-4")},m(_,g){M(_,e,g),f(e,o),f(e,n),f(e,r),f(r,l),f(e,u),f(e,i),f(i,h),p||(y=[S(o,"change",c[1]),S(i,"click",c[2])],p=!0)},p(_,[g]){g&1&&t!==(t=_[0].completed)&&(o.checked=t),g&1&&s!==(s=_[0].text+"")&&z(l,s),g&1&&a!==(a=`flex-1 text-fgray-800 ${_[0].completed?"line-through":""}`)&&d(r,"class",a)},i:k,o:k,d(_){_&&m(e),p=!1,W(y)}}}function re(c,e,o){let{todo:t}=e;const n=()=>te(t.id),r=()=>ee(t.id);return c.$$set=s=>{"todo"in s&&o(0,t=s.todo)},[t,n,r]}class ae extends B{constructor(e){super(),I(this,e,re,le,L,{todo:0})}}function Q(c,e,o){const t=c.slice();return t[1]=e[o],t}function V(c){let e,o;return e=new ae({props:{todo:c[1],"index{todo.id}":!0}}),{c(){P(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,n){A(e,t,n),o=!0},p(t,n){const r={};n&1&&(r.todo=t[1]),e.$set(r)},i(t){o||(v(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){F(e,t)}}}function ce(c){let e,o,t=c[0],n=[];for(let s=0;s<t.length;s+=1)n[s]=V(Q(c,t,s));const r=s=>E(n[s],1,1,()=>{n[s]=null});return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=H()},l(s){for(let l=0;l<n.length;l+=1)n[l].l(s);e=H()},m(s,l){for(let a=0;a<n.length;a+=1)n[a].m(s,l);M(s,e,l),o=!0},p(s,[l]){if(l&1){t=s[0];let a;for(a=0;a<t.length;a+=1){const u=Q(s,t,a);n[a]?(n[a].p(u,l),v(n[a],1)):(n[a]=V(u),n[a].c(),v(n[a],1),n[a].m(e.parentNode,e))}for(G(),a=t.length;a<n.length;a+=1)r(a);J()}},i(s){if(!o){for(let l=0;l<t.length;l+=1)v(n[l]);o=!0}},o(s){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)E(n[l]);o=!1},d(s){K(n,s),s&&m(e)}}}function ue(c,e,o){let t;return X(c,O,n=>o(0,t=n)),[t]}class ie extends B{constructor(e){super(),I(this,e,ue,ce,L,{})}}function de(c){let e,o,t,n,r,s,l,a;return r=new se({}),l=new ie({}),{c(){e=b("main"),o=b("h1"),t=N("My ToDos"),n=w(),P(r.$$.fragment),s=w(),P(l.$$.fragment),this.h()},l(u){e=$(u,"MAIN",{});var i=x(e);o=$(i,"H1",{class:!0});var h=x(o);t=D(h,"My ToDos"),h.forEach(m),n=T(i),U(r.$$.fragment,i),s=T(i),U(l.$$.fragment,i),i.forEach(m),this.h()},h(){d(o,"class","text-2xl font-bold text-center text-gray-800 md:text-3xl")},m(u,i){M(u,e,i),f(e,o),f(o,t),f(e,n),A(r,e,null),f(e,s),A(l,e,null),a=!0},p:k,i(u){a||(v(r.$$.fragment,u),v(l.$$.fragment,u),a=!0)},o(u){E(r.$$.fragment,u),E(l.$$.fragment,u),a=!1},d(u){u&&m(e),F(r),F(l)}}}class me extends B{constructor(e){super(),I(this,e,null,de,L,{})}}export{me as default};

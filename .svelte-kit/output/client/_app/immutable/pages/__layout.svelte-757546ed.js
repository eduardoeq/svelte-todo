import{S as E,i as w,s as I,l as p,r as v,a as H,m as g,n as d,u as $,h as m,c as S,p as f,b as C,F as _,E as x,G as N,H as V,w as j,x as q,y as B,I as D,J as F,K as G,f as y,t as A,B as J,L as K}from"../chunks/index-afa04101.js";function L(s){let e,a,l,o,u,t,n,r;return{c(){e=p("nav"),a=p("a"),l=v("Home"),u=H(),t=p("a"),n=v("About"),this.h()},l(i){e=g(i,"NAV",{class:!0});var c=d(e);a=g(c,"A",{class:!0,href:!0});var b=d(a);l=$(b,"Home"),b.forEach(m),u=S(c),t=g(c,"A",{class:!0,href:!0});var h=d(t);n=$(h,"About"),h.forEach(m),c.forEach(m),this.h()},h(){f(a,"class",o="mx-4 text-lg "+(s[0]==""?"font-semibold text-blue-600":"")),f(a,"href","/"),f(t,"class",r="mx-4 text-lg "+(s[0]=="about"?"font-semibold text-blue-600":"")),f(t,"href","/about"),f(e,"class","flex justify-center w-full my-12")},m(i,c){C(i,e,c),_(e,a),_(a,l),_(e,u),_(e,t),_(t,n)},p(i,[c]){c&1&&o!==(o="mx-4 text-lg "+(i[0]==""?"font-semibold text-blue-600":""))&&f(a,"class",o),c&1&&r!==(r="mx-4 text-lg "+(i[0]=="about"?"font-semibold text-blue-600":""))&&f(t,"class",r)},i:x,o:x,d(i){i&&m(e)}}}function k(s,e,a){let{page:l}=e;return s.$$set=o=>{"page"in o&&a(0,l=o.page)},[l]}class z extends E{constructor(e){super(),w(this,e,k,L,I,{page:0})}}const M=()=>{const s=N("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},O={subscribe(s){return M().page.subscribe(s)}};function P(s){let e,a,l,o;a=new z({props:{page:s[0].routeId}});const u=s[2].default,t=V(u,s,s[1],null);return{c(){e=p("div"),j(a.$$.fragment),l=H(),t&&t.c(),this.h()},l(n){e=g(n,"DIV",{class:!0});var r=d(e);q(a.$$.fragment,r),l=S(r),t&&t.l(r),r.forEach(m),this.h()},h(){f(e,"class","container mx-auto my-6 max-w-lg")},m(n,r){C(n,e,r),B(a,e,null),_(e,l),t&&t.m(e,null),o=!0},p(n,[r]){const i={};r&1&&(i.page=n[0].routeId),a.$set(i),t&&t.p&&(!o||r&2)&&D(t,u,n,n[1],o?G(u,n[1],r,null):F(n[1]),null)},i(n){o||(y(a.$$.fragment,n),y(t,n),o=!0)},o(n){A(a.$$.fragment,n),A(t,n),o=!1},d(n){n&&m(e),J(a),t&&t.d(n)}}}function Q(s,e,a){let l;K(s,O,t=>a(0,l=t));let{$$slots:o={},$$scope:u}=e;return s.$$set=t=>{"$$scope"in t&&a(1,u=t.$$scope)},[l,u,o]}class T extends E{constructor(e){super(),w(this,e,Q,P,I,{})}}export{T as default};

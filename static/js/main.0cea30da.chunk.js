(this.webpackJsonpwatzit=this.webpackJsonpwatzit||[]).push([[0],[,,,,function(e,t,n){},,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(5),r=n.n(c),o=(n(4),n(2)),l=n(1);n(11);function u(e){var t=e.handleClick,n=e.id,i=e.type,c=e.flipped,r=e.height,o=e.width,l=e.disabled,u=e.solved;return a.a.createElement("div",{className:"flip-container ".concat(c?"flipped":""),style:{width:o,height:r},onClick:function(){return l?null:t(n)}},a.a.createElement("div",{className:"flipper"},a.a.createElement("img",{alt:"Memory Game Card",style:{height:r,width:o},className:c?"front":"back",src:c||u?"/img/".concat(i,".png"):"/img/CardBack.png"})))}n(12);function d(e){var t=e.cards,n=e.dimension,i=e.flipped,c=e.handleClick,r=e.disabled,o=e.solved;return a.a.createElement("div",{className:"board"},t.map((function(e){return a.a.createElement(u,{key:e.id,id:e.id,type:e.type,width:n/4.5,height:n/4.5,flipped:i.includes(e.id),handleClick:c,disabled:r||o.includes(e.id),solved:o.includes(e.id)})})))}function s(){var e=0;return function(e){for(var t=e.slice(0),n=0;n<e.length-1;n++){var i=Math.floor(Math.random()*(n+1)),a=t[n];t[n]=t[i],t[i]=a}return t}(["react","redux","angular","aws","firebase","node-js","ruby","vue"].reduce((function(t,n){return t.push({id:e++,type:n}),t.push({id:e++,type:n}),t}),[]))}var f=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)([]),u=Object(l.a)(r,2),f=u[0],m=u[1],h=Object(i.useState)(400),p=Object(l.a)(h,2),v=p[0],b=p[1],w=Object(i.useState)([]),E=Object(l.a)(w,2),g=E[0],j=E[1],O=Object(i.useState)(!1),y=Object(l.a)(O,2),k=y[0],C=y[1],S=Object(i.useState)(!1),z=Object(l.a)(S,2),N=z[0],W=z[1];Object(i.useEffect)((function(){L(),c(s())}),[]),Object(i.useEffect)((function(){var e=window.addEventListener("resize",L);return function(){return window.removeEventListener("resize",e)}}));var M=function(){m([]),C(!1)},B=function(){W(!1)},x=function(e){var t=n.find((function(t){return t.id===e})),i=n.find((function(e){return f[0]===e.id}));return i.type===t.type&&i.id!==t.id},J=function(e){return f.includes(e)},L=function(){b(Math.min(document.documentElement.clientWidth,.8*document.documentElement.clientHeight))};return a.a.createElement("div",{className:"App"},a.a.createElement("h3",null,"Watzit?"),a.a.createElement("h2",null,"Can you remember where the cards are?"),a.a.createElement(d,{dimension:v,cards:n,flipped:f,handleClick:function(e){if(C(!0),0===f.length)m([e]),C(!1);else{if(J(e))return void C(!1);m([f[0],e]),x(e)&&14===g.length?(W(!0),j([].concat(Object(o.a)(g),[f[0],e])),setTimeout((function(){c([]),m([]),j([]),C(!1),c(s()),B()}),3e3)):x(e)?(j([].concat(Object(o.a)(g),[f[0],e])),M()):setTimeout(M,800)}},disabled:k,solved:g}),a.a.createElement("div",null,N?a.a.createElement("h4",null,"You Win!"):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.0cea30da.chunk.js.map
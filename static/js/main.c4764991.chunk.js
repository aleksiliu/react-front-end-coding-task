(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t.p+"static/media/close.11e81073.svg"},,,,function(e,n,t){e.exports=t(25)},,,,,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(2),r=t.n(o),i=(t(15),t(8)),s=t(3),l=t(4),u=t(7),d=t(5),h=t(9),m=(t(17),t(19),t(21),function(e){return c.a.createElement("button",{className:e.variant,onClick:e.onClick},e.children)}),p=t(6),f=t.n(p),k=function(e){var n=e.handleClose,t=e.show,a=e.children;return c.a.createElement("div",{className:t?"modal show":"modal hide"},c.a.createElement("img",{src:f.a,alt:"",className:"close",onClick:n}),c.a.createElement("section",{className:"modal-main"},a,c.a.createElement(m,{variant:"secondary",onClick:n},"Done")))},C=(t(23),function(e){var n=e.type,t=void 0===n?"checkbox":n,a=(e.value,e.isChecked),o=e.onChange;return c.a.createElement("input",{type:t,name:"isChecked",checked:a,onChange:o})}),E=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(c)))).state={show:!1,products:[{product:"Liability insurance",price:66.35,id:1,isChecked:!1},{product:"Repairs expenses insurance",price:83.49,id:2,isChecked:!1},{product:"Destruction insurance",price:83.49,id:3,isChecked:!1}]},t.onChange=function(e){t.setState({products:t.state.products.map(function(n){return n.id===e?Object(i.a)({},n,{isChecked:!n.isChecked}):n})})},t.showModal=function(){t.setState({show:!0})},t.hideModal=function(){t.setState({show:!1})},t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content"},c.a.createElement("h1",null," Car insurance "),c.a.createElement("p",null,"Take good care of your beloved car and purchase an insurance."),c.a.createElement(k,{show:this.state.show,handleClose:this.hideModal},c.a.createElement("h2",null," Select the insurance"),c.a.createElement("form",null,this.state.products.map(function(n){return c.a.createElement("label",{key:n.id,className:n.isChecked?"selected":""},c.a.createElement("span",{className:"product-title"},n.product)," ",c.a.createElement("span",null,n.price,"\u20ac"),c.a.createElement(C,{name:"isChecked",type:"checkbox",checked:n.isChecked,onChange:function(){return e.onChange(n.id)}}))})),c.a.createElement("div",{className:"selected-items"},c.a.createElement("p",null,"Total"," ",c.a.createElement("span",null,this.state.products.filter(function(e){return e.isChecked}).map(function(e){return e.price}).reduce(function(e,n){return e+n},0).toFixed(2),"\u20ac")))),c.a.createElement(m,{variant:"primary",onClick:function(){e.showModal()}},"See more")))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.c4764991.chunk.js.map
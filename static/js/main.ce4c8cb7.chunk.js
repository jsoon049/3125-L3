(this.webpackJsonplab3=this.webpackJsonplab3||[]).push([[0],{19:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),s=c(20),i=c.n(s),n=(c(27),c(8)),o=c(2),l=c(7),d=(c(28),c(0)),j=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{className:"brand",children:"Got Foodz"}),Object(d.jsx)("span",{onClick:function(){return r(!0)},className:"openbtn",children:"\u2630 Menu"}),Object(d.jsxs)("div",{className:c?"sidenav active":"sidenav",children:[Object(d.jsx)("button",{className:"closebtn",onClick:function(){return r(!1)},children:"\xd7"}),Object(d.jsxs)("ul",{className:"sidenavUL",children:[Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/3125-L3/",onClick:function(){return r(!1)},children:"Dietary Restrictions"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/3125-L3/product",onClick:function(){return r(!1)},children:"View Products"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/3125-L3/cart",onClick:function(){return r(!1)},children:"My Cart"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/3125-L3/delivery",onClick:function(){return r(!1)},children:"Delivery Info"})}),Object(d.jsx)("li",{children:Object(d.jsx)(n.b,{to:"/3125-L3/faq",onClick:function(){return r(!1)},children:"Frequently Asked Questions"})})]})]})]})},u=c(14),b=c(10),m=(c(38),function(){var e=r.a.useState({lactose:JSON.parse(sessionStorage.getItem("lactoseFree"))||!1,nuts:JSON.parse(sessionStorage.getItem("nutFree"))||!1,organic:JSON.parse(sessionStorage.getItem("organic"))||!1}),t=Object(l.a)(e,2),c=t[0],a=t[1],s=function(e){var t=e.target.checked;a(Object(b.a)(Object(b.a)({},c),{},Object(u.a)({},e.target.name,t)))};return Object(d.jsxs)("div",{className:"customer",children:[Object(d.jsx)("h1",{className:"customerTitle",children:"Dietary Restrictions"}),Object(d.jsxs)("div",{className:"customerContainer",children:[Object(d.jsx)("p",{className:"instructions",children:"If applicable, please select one or more of the dietary restrictions below"}),Object(d.jsxs)("div",{className:"checkbox-wrapper",children:[Object(d.jsxs)("label",{children:["Would you like to see our lactose-free products?",Object(d.jsx)("input",{className:"customerInput",type:"checkbox",onChange:s,defaultChecked:c.lactose,name:"lactose"})]}),Object(d.jsxs)("label",{children:["Would you like to see our nut-free products?",Object(d.jsx)("input",{className:"customerInput",type:"checkbox",onChange:s,defaultChecked:c.nuts,name:"nuts"})]}),Object(d.jsxs)("label",{children:["Would you like to see our organic products?",Object(d.jsx)("input",{className:"customerInput",type:"checkbox",onChange:s,defaultChecked:c.organic,name:"organic"})]}),Object(d.jsx)("button",{className:"btn",onClick:function(){sessionStorage.setItem("lactoseFree",JSON.stringify(c.lactose)),sessionStorage.setItem("nutFree",JSON.stringify(c.nuts)),sessionStorage.setItem("organic",JSON.stringify(c.organic)),alert("Saved Preferences!")},children:"Save Dietary Restrictions"})]})]})]})}),p=c(22),h=function(e,t){switch(t.type){case"ADD_ITEM":return Object(b.a)(Object(b.a)({},e),{},{cart:[t.payload].concat(Object(p.a)(e.cart))});default:return e}},O={cart:[]},x=Object(a.createContext)(O),g=function(e){var t=Object(a.useReducer)(h,O),c=Object(l.a)(t,2),r=c[0],s=c[1];return Object(d.jsx)(x.Provider,{value:{cart:r.cart,addToCart:function(e){alert("".concat(e.name," added to cart")),s({type:"ADD_ITEM",payload:e})}},children:e.children})},f=function(e){var t=e.product,c=Object(a.useContext)(x).addToCart;return Object(d.jsxs)("div",{className:"product-card",children:[Object(d.jsx)("img",{src:t.image,alt:t.alt,className:"cart-item-image"}),Object(d.jsx)("p",{className:"prodtext prodName",children:t.name}),Object(d.jsx)("p",{className:"prodtext prodPrice",children:"$"+t.price}),Object(d.jsx)("button",{className:"btn",onClick:function(){return c(t)},children:"Add To Cart"})]})},N=(c(39),c.p+"static/media/apple.c9978e4d.jpeg"),v=c.p+"static/media/banana.0d6e0e7c.jpg",y=c.p+"static/media/brocolli.c480ab26.jpeg",F=c.p+"static/media/bread.d5f6ac86.jpeg",C=c.p+"static/media/cheese.f2daf99d.jpeg",w=c.p+"static/media/chips.bdcbdd9c.jpeg",k=c.p+"static/media/granola.a934272d.jpeg",S=c.p+"static/media/icecream.76ad4316.jpeg",I=c.p+"static/media/milk.eca5843a.jpeg",q=c.p+"static/media/nutella.db822641.jpeg",A=c.p+"static/media/salmon.65293535.jpeg",L=c.p+"static/media/yogurt.2881bc38.jpeg",P=function(){var e=[{name:"Yogurt",lactoseFree:!1,nutFree:!0,organic:!1,price:5.99,image:L,alt:"image of yogurt"},{name:"Almond Granola",lactoseFree:!0,nutFree:!1,organic:!0,price:4.49,image:k,alt:"image of granola"},{name:"Salmon",lactoseFree:!0,nutFree:!0,organic:!1,price:8.99,image:A,alt:"image of salmon"},{name:"Apple",lactoseFree:!0,nutFree:!0,organic:!0,price:1.15,image:N,alt:"image of apple"},{name:"Banana",lactoseFree:!0,nutFree:!0,organic:!0,price:1.45,image:v,alt:"image of banana"},{name:"Chips",lactoseFree:!0,nutFree:!0,organic:!1,price:3.67,image:w,alt:"image of chips"},{name:"Nutella",lactoseFree:!0,nutFree:!1,organic:!1,price:5.49,image:q,alt:"image of nutella"},{name:"Brocolli",lactoseFree:!0,nutFree:!0,organic:!0,price:2.49,image:y,alt:"image of brocolli"},{name:"Milk",lactoseFree:!1,nutFree:!0,organic:!1,price:4.37,image:I,alt:"image of milk"},{name:"Peanut Butter Ice Cream",lactoseFree:!1,nutFree:!1,organic:!1,price:5.99,image:S,alt:"image of peanut butter ice cream"},{name:"Bread",lactoseFree:!0,nutFree:!0,organic:!0,price:2.99,image:F,alt:"image of bread"},{name:"Cheese",lactoseFree:!1,nutFree:!0,organic:!1,price:3.99,image:C,alt:"image of cheese"}],t=Object(a.useState)(e),c=Object(l.a)(t,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var t=[],c=0;if(null!=sessionStorage.getItem("lactoseFree")){var a=JSON.parse(sessionStorage.getItem("lactoseFree"));!0===a&&(c+=1);var r=JSON.parse(sessionStorage.getItem("nutFree"));!0===r&&(c+=1);var i=JSON.parse(sessionStorage.getItem("organic"));!0===i&&(c+=1);for(var n=0;n<e.length;n+=1)c>=2?(!0===a&&!0===r&&!0===e[n].lactoseFree&&!0===e[n].nutFree||!0===a&&!0===i&&!0===e[n].lactoseFree&&!0===e[n].organic||!0===r&&!0===i&&!0===e[n].nutFree&&!0===e[n].organic)&&t.push(e[n]):(!0===a&&!0===e[n].lactoseFree||!0===r&&!0===e[n].nutFree||!0===i&&!0===e[n].organic||!1===a&&!1===r&&!1===i)&&t.push(e[n])}else for(var o=0;o<e.length;o+=1)t.push(e[o]);var l=t;t.sort((function(e,t){return e.price-t.price})),s(l)}),[]),Object(d.jsxs)("div",{className:"prod",id:"prod",children:[Object(d.jsx)("h1",{children:"Products"}),Object(d.jsx)("div",{className:"prod_container",children:Object(d.jsx)("div",{className:"prod_wrapper",children:r.map((function(e,t){return Object(d.jsx)("ul",{className:"prod_ul",children:Object(d.jsx)(f,{product:e})},t)}))})})]})},z=(c(19),function(e){var t=e.product;return Object(d.jsxs)("div",{className:"cart-items",children:[Object(d.jsx)("p",{className:"cart-item-text itemName",children:t.name}),Object(d.jsx)("p",{className:"cart-item-text",children:"$"+t.price})]})}),J=function(){var e=Object(a.useContext)(x).cart,t=0,c=[].concat(e);if(e.length>0){for(var r=0;r<c.length;r+=1)t+=c[r].price;t=parseFloat(t).toFixed(2),c.sort((function(e,t){return e.price-t.price}))}return Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsx)("h1",{children:"Your Cart"}),Object(d.jsx)("div",{className:"cartContainer",children:e.length>0?Object(d.jsxs)("div",{className:"cart-wrapper",children:[c.map((function(e,t){return Object(d.jsx)(z,{product:e},t)})),Object(d.jsx)("p",{className:"totalPrice",children:"Total Price: $"+t})]}):Object(d.jsx)("h2",{className:"no-items",children:"No items in your shopping cart!"})})]})},D=(c(40),function(){var e=Object(a.useContext)(x).cart,t=0,c=[].concat(e);if(e.length>0){for(var r=0;r<c.length;r+=1)t+=c[r].price;t=parseFloat(t).toFixed(2),c.sort((function(e,t){return e.price-t.price}))}return Object(d.jsxs)("div",{className:"deliveryContainer",children:[Object(d.jsx)("h1",{children:"Online Delivery Form"}),Object(d.jsx)("p",{className:"instructions deliveryInstructions",children:"If you would like to order your groceries online and have them delivered to your house, please fill up the form below."}),Object(d.jsxs)("div",{className:"delivery-wrapper",children:[Object(d.jsx)("div",{className:"cartContainer delivery-cart-container",children:e.length>0?Object(d.jsxs)("div",{className:"delivery-cart-wrapper",children:[Object(d.jsx)("h1",{className:"delivery-cart-title",children:"Your Order"}),c.map((function(e,t){return Object(d.jsx)(z,{product:e},t)})),Object(d.jsx)("p",{className:"totalPrice",children:"Total Price: $"+t})]}):Object(d.jsx)("h2",{className:"no-items",children:"Add products to your order!"})}),Object(d.jsxs)("form",{method:"post",action:"",className:"form-wrapper",children:[Object(d.jsxs)("div",{className:"question-wrapper",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"First Name"})}),Object(d.jsx)("input",{type:"text",name:"first name",size:"50",className:"delivery-input"})]}),Object(d.jsxs)("div",{className:"question-wrapper",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Last Name"})}),Object(d.jsx)("input",{type:"text",name:"last name",size:"50",className:"delivery-input"})]}),Object(d.jsxs)("div",{className:"question-wrapper",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Street Address"})}),Object(d.jsx)("input",{type:"text",name:"streetaddress",size:"50",className:"delivery-input"})]}),Object(d.jsxs)("div",{className:"question-wrapper",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Suite/Apt #"})}),Object(d.jsx)("input",{type:"text",name:"aptnum",size:"50",className:"delivery-input"})]}),Object(d.jsxs)("div",{className:"question-wrapper",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"City"})}),Object(d.jsx)("input",{type:"text",name:"city",size:"50",className:"delivery-input"})]}),Object(d.jsxs)("div",{className:"question-wrapper",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Postal Code"})}),Object(d.jsx)("input",{type:"text",name:"postalcode",size:"50",className:"delivery-input"})]}),Object(d.jsxs)("div",{className:"question-wrapper",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Email"})}),Object(d.jsx)("input",{type:"email",name:"email",size:"50",className:"delivery-input"})]}),Object(d.jsxs)("div",{className:"question-wrapper",children:[Object(d.jsx)("label",{className:"form-label",children:Object(d.jsx)("strong",{children:"Phone Number"})}),Object(d.jsx)("input",{type:"tel",name:"phonenumber",size:"50",className:"delivery-input"})]}),Object(d.jsxs)("div",{className:"button-wrapper",children:[Object(d.jsx)("input",{type:"button",value:"Submit Form",className:"btn submit"}),Object(d.jsx)("input",{type:"reset",value:"Clear Form",className:"btn"})]})]})]})]})}),T=function(e){var t=e.title,c=e.content,r=Object(a.useState)(!1),s=Object(l.a)(r,2),i=s[0],n=s[1];return Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsxs)("div",{className:i?"accordion-title active":"accordion-title",onClick:function(){return n(!i)},children:[Object(d.jsx)("h3",{children:t}),Object(d.jsx)("h3",{children:i?"-":"+"})]}),i&&Object(d.jsx)("p",{className:"accordion-content",children:c})]})},M=(c(41),function(){return Object(d.jsxs)("div",{className:"faqContainer",children:[Object(d.jsx)("h1",{children:"Frequently Asked Questions (FAQ)"}),Object(d.jsxs)("div",{className:"accordion",children:[Object(d.jsx)(T,{title:"How to navigate this website?",content:"Click the icon with the 3 horizontal bars at the top left of the page to access the sidebar menu. From there select a specific section of the site you would like to view."}),Object(d.jsx)(T,{title:"How to customize your dietary restrictions?",content:"Navigate to the sidebar menu and click on the customer section.  Select the checkboxes if that particular dietary restrition applies for you and  click on the save preferences button to save your preferences."}),Object(d.jsx)(T,{title:"How to add a product to your shopping cart?",content:"Navigate to the sidebar menu and click on the product section.  All of our products will be shown unless you added some dietary restrictions. Click on the add to cart button to add a product to your cart. A message will appear on your screen as confirmation that the product was succesfully added to your cart."}),Object(d.jsx)(T,{title:"How to view your cart?",content:"Navigate to the sidebar menu and click on the cart section.  From there you will be able view all the items in your cart along with their price. Your total price will also be shown."})]})]})}),_=(c(42),function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("p",{className:"footer_text",children:"Website designed by Casper the Friendly Ghost"})})});c(43);var B=function(){return Object(d.jsx)("div",{className:"appContainer",id:"appContainer",children:Object(d.jsx)(g,{children:Object(d.jsxs)(n.a,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/3125-L3/",children:Object(d.jsx)(m,{})}),Object(d.jsx)(o.a,{path:"/3125-L3/product",children:Object(d.jsx)(P,{})}),Object(d.jsx)(o.a,{path:"/3125-L3/cart",children:Object(d.jsx)(J,{})}),Object(d.jsx)(o.a,{path:"/3125-L3/delivery",children:Object(d.jsx)(D,{})}),Object(d.jsx)(o.a,{path:"/3125-L3/faq",children:Object(d.jsx)(M,{})})]}),Object(d.jsx)(_,{})]})})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ce4c8cb7.chunk.js.map
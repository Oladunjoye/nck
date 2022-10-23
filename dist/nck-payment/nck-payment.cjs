var a=require("react"),e=require("react-bootstrap");function r(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,t(a,e)}function t(a,e){return t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,e){return a.__proto__=e,a},t(a,e)}var o=/*#__PURE__*/function(a){function t(){return a.apply(this,arguments)||this}return r(t,a),t.prototype.render=function(){var a=this.props.state,r=a.card,t=a.date;return h(e.Col,{xs:!0,sm:6},h("div",{className:"col-sm-5 card"},h("div",{className:"card__front card__part"},h("p",{className:"card-info"},"Card number"),h("p",{className:"card-info"},r||"4324 5433 9382 1030 "),h("img",{className:"card-image",src:"https://image.ibb.co/cZeFjx/little_square.png",alt:"Square crest"}),h("p",{className:" card-info"},"Expiration date"),h("p",{className:" card-info"},t||"03/24"),h("div",{className:"card-lower"},h("p",{className:" card-info",id:"john"},"John Doe"),h("img",{className:"mc",src:"images/mastercard.svg",alt:"mastercard"}))),h("div",{className:"card__back card__part"},h("div",{className:"card__back-content"},h("div",{className:"card__secret"},h("p",{className:"card__secret--last"},"420")),h("img",{className:"card__back-logo card__logo",src:"https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png",alt:"Visa"})))))},t}(a.Component),l=/*#__PURE__*/function(a){function t(){return a.apply(this,arguments)||this}return r(t,a),t.prototype.render=function(){var a=this.props.handleChange,r=this.props.state,t=r.card,o=r.date;return h(e.Col,{xs:!0,sm:!0,md:6},h(e.Form,null,h(e.Form.Group,{as:e.Row,controlId:"formBasicEmail"},h(e.Col,{sm:6},h(e.Form.Label,null,"Credit card number"),h(e.Form.Control,{name:"card",value:t,required:!0,onChange:a,type:"number",placeholder:"4324 5433 9382 1030 ",className:"form-control-self"})),h(e.Col,{sm:6},h(e.Form.Label,null,"Expiration date"),h(e.Form.Control,{name:"date",value:o,type:"text",title:"Use the pattern MM/YY",required:!0,pattern:"(0[1-9]|1[0-2])/[0-9]{2}",onChange:a,placeholder:"03/24",className:"form-control-self"}))),h(e.Form.Group,{as:e.Row,controlId:"formBasicEmail"},h(e.Col,{sm:6},h(e.Form.Label,null,"Security code "),h(e.Form.Control,{type:"password",placeholder:"420",className:"form-control-self"})),h(e.Col,{sm:6},h(e.Form.Label,null,"Postal code"),h(e.Form.Control,{type:"number",placeholder:"10119",className:"form-control-self"}))),h(e.Form.Group,{id:"formGridCheckbox"},h(e.Form.Check,{type:"radio",label:"Use this card for next time purchase "})),h(e.Button,{onSubmit:function(a){return a.preventDefault()},type:"submit",variant:"primary",size:"lg",block:!0},"  Add card     ")))},t}(a.Component);function s(){return h("section",{className:"summary container"},h("div",{className:"summary-title"},h("p",null,"Subtotal"),h("p",null,"Estimated TAX"),h("p",null,"Promotional Code : ",h("span",{className:"promo"},"Z4KXLM9A"))),h("div",{className:"summary-price"},h("p",null,"₦2497.00"),h("p",null,"₦119.64"),h("p",null,"₦-60.00")))}var n=/*#__PURE__*/function(a){function t(){for(var e,r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return(e=a.call.apply(a,[this].concat(t))||this).state={card:"",date:""},e.handleChange=function(a){var r;e.setState(((r={})[a.target.name]=a.target.value,r)),console.log(e.state)},e}return r(t,a),t.prototype.render=function(){return h("div",{className:"container"},h("nav",null,h("ul",null,h("li",null,"Trips"),h("li",null,"Recently viewed"),h("li",null,"Bookings"),h("img",{src:"images/avatar2.png",alt:"Profile"}))),h("hr",null),h("div",{className:"container section-2"},h("div",{className:"details-head "},h("div",null,h("h2",{id:"payment-info"},"Payment Information"),h("p",{id:"choose-method"},"Choose your method of payment")),h("div",{className:"logos"},h("img",{src:"images/visa.svg",alt:"Visa"}),h("img",{src:"images/discover.svg",alt:"Discover"}),h("img",{src:"images/paypal.svg",alt:"Paypal"}))),h(e.Row,null,h(o,{state:this.state}),h(l,{handleChange:this.handleChange,state:this.state})),h("hr",null)),h(s,null),h("hr",null),h("section",{className:"final container"},h(e.Button,{className:"paynow",size:"lg"},"Complete payment"),h("p",{className:"total"}," TOTAL :₦2556.00")))},t}(a.Component);class c extends a.Component{render(){const{card:a,date:r}=this.props.state;return h(e.Col,{xs:!0,sm:6},h("div",{className:"col-sm-5 card"},h("div",{className:"card__front card__part"},h("p",{className:"card-info"},"Card number"),h("p",{className:"card-info"},a||"4324 5433 9382 1030 "),h("img",{className:"card-image",src:"https://image.ibb.co/cZeFjx/little_square.png",alt:"Square crest"}),h("p",{className:" card-info"},"Expiration date"),h("p",{className:" card-info"},r||"03/24"),h("div",{className:"card-lower"},h("p",{className:" card-info",id:"john"},"John Doe"),h("img",{className:"mc",src:"images/mastercard.svg",alt:"mastercard"}))),h("div",{className:"card__back card__part"},h("div",{className:"card__back-content"},h("div",{className:"card__secret"},h("p",{className:"card__secret--last"},"420")),h("img",{className:"card__back-logo card__logo",src:"https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png",alt:"Visa"})))))}}class i extends a.Component{render(){const{handleChange:a}=this.props,{card:r,date:t}=this.props.state;return h(e.Col,{xs:!0,sm:!0,md:6},h(e.Form,null,h(e.Form.Group,{as:e.Row,controlId:"formBasicEmail"},h(e.Col,{sm:6},h(e.Form.Label,null,"Credit card number"),h(e.Form.Control,{name:"card",value:r,required:!0,onChange:a,type:"number",placeholder:"4324 5433 9382 1030 ",className:"form-control-self"})),h(e.Col,{sm:6},h(e.Form.Label,null,"Expiration date"),h(e.Form.Control,{name:"date",value:t,type:"text",title:"Use the pattern MM/YY",required:!0,pattern:"(0[1-9]|1[0-2])/[0-9]{2}",onChange:a,placeholder:"03/24",className:"form-control-self"}))),h(e.Form.Group,{as:e.Row,controlId:"formBasicEmail"},h(e.Col,{sm:6},h(e.Form.Label,null,"Security code "),h(e.Form.Control,{type:"password",placeholder:"420",className:"form-control-self"})),h(e.Col,{sm:6},h(e.Form.Label,null,"Postal code"),h(e.Form.Control,{type:"number",placeholder:"10119",className:"form-control-self"}))),h(e.Form.Group,{id:"formGridCheckbox"},h(e.Form.Check,{type:"radio",label:"Use this card for next time purchase "})),h(e.Button,{onSubmit:a=>a.preventDefault(),type:"submit",variant:"primary",size:"lg",block:!0},"  Add card     ")))}}function m(){return h("section",{className:"summary container"},h("div",{className:"summary-title"},h("p",null,"Subtotal"),h("p",null,"Estimated TAX"),h("p",null,"Promotional Code : ",h("span",{className:"promo"},"Z4KXLM9A"))),h("div",{className:"summary-price"},h("p",null,"₦2497.00"),h("p",null,"₦119.64"),h("p",null,"₦-60.00")))}var d=/*#__PURE__*/function(a){function t(){for(var e,r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return(e=a.call.apply(a,[this].concat(t))||this).state={card:"",date:""},e.handleChange=function(a){var r;e.setState(((r={})[a.target.name]=a.target.value,r)),console.log(e.state)},e}return r(t,a),t.prototype.render=function(){return h("div",{className:"container"},h("nav",null,h("ul",null,h("li",null,"Trips"),h("li",null,"Recently viewed"),h("li",null,"Bookings"),h("img",{src:"images/avatar2.png",alt:"Profile"}))),h("hr",null),h("div",{className:"container section-2"},h("div",{className:"details-head "},h("div",null,h("h2",{id:"payment-info"},"Payment Information"),h("p",{id:"choose-method"},"Choose your method of payment")),h("div",{className:"logos"},h("img",{src:"images/visa.svg",alt:"Visa"}),h("img",{src:"images/discover.svg",alt:"Discover"}),h("img",{src:"images/paypal.svg",alt:"Paypal"}))),h(e.Row,null,h(c,{state:this.state}),h(i,{handleChange:this.handleChange,state:this.state})),h("hr",null)),h(m,null),h("hr",null),h("section",{className:"final container"},h(e.Button,{className:"paynow",size:"lg"},"Complete payment"),h("p",{className:"total"}," TOTAL :₦2556.00")))},t}(a.Component);exports.apple=n,exports.google=d;
//# sourceMappingURL=nck-payment.cjs.map

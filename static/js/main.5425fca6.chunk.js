(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(t,e,n){},53:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){},83:function(t,e,n){},84:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n(1),c=n.n(s),i=n(18),r=n.n(i),o=(n(53),n(8)),l=n(9),d=n(11),h=n(10),j=n(2),b=(n(17),n(28)),u=n.n(b),p=n(43),O=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).export=function(t,e){u()(document.querySelector("#capture"),{canvas:null,backgroundColor:null}).then((function(n){var a=n.toDataURL("image/png");if("pdf"===t){var s=new p.a({orientation:"landscape",unit:"mm",format:"a6"});s.addImage(a,"PNG",0,5,105,148),s.save("".concat(e,".pdf"))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{className:"output_btn",children:Object(a.jsx)("button",{className:"btn",onClick:function(){return t.export("pdf","HappyNewYear")},children:"\u0421\u041a\u0410\u0427\u0410\u0422\u042c"})})}}]),n}(c.a.Component),x=n(14);var m=function(t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"bg-header",children:[Object(a.jsx)("div",{className:"header-bottom",children:Object(a.jsx)("p",{children:"\u0421\u043e\u0431\u0435\u0440\u0438 \u0441\u0432\u043e\u044e \u043e\u0442\u043a\u0440\u044b\u0442\u043a\u0443"})}),Object(a.jsx)(x.b,{className:"btn",to:"/",children:"\u041d\u0410\u0417\u0410\u0414"}),Object(a.jsx)(O,{})]}),Object(a.jsx)("div",{className:"snowContainer",children:Object(a.jsx)("div",{id:"snow"})})]})},v=n(21),g=n(16),f=(n(76),n(45)),S=(n(77),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={tagged:!1,message:"",input:""},t.handleInputChange=function(e,n){t.setState(Object(f.a)({},n,e.target.value))},t}return Object(l.a)(n,[{key:"handleClick",value:function(t){this.setState({tagged:!0}),t.preventDefault()}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{id:"id",children:[Object(a.jsx)("textarea",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",type:"text",onChange:function(e){return t.handleInputChange(e,"input")}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn-input",onClick:function(e){return t.handleClick(e)},children:(this.state.tagged,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")}),Object(a.jsx)("div",{className:"congratulations",children:this.state.tagged?this.state.input:"\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})]})}}]),n}(s.Component)),N=n(12),k=n.n(N),C=(n(81),n.p+"static/media/Spruce1.da7dd5cf.png"),w=n.p+"static/media/Spruce2.d28e86cc.png",y=n.p+"static/media/Spruce3.c8053e01.png",D=n.p+"static/media/Spruce4.f58d7917.png",_=n.p+"static/media/prise.829a57d5.png",P=n.p+"static/media/rudolf.a1b24d88.png",T=n.p+"static/media/Santa.4271796d.png",A=n.p+"static/media/snowman.494df399.png",I=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"handlebox",children:[Object(a.jsx)(k.a,{position:null,onStart:this.handleStart,onDrag:this.handleDrag,children:Object(a.jsx)("div",{className:"handle",children:Object(a.jsx)("img",{src:C,alt:"Spruce1"})})}),Object(a.jsx)(k.a,{handle:".handle",defaultPosition:{x:0,y:0},position:null,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:Object(a.jsx)("div",{className:"handle",children:Object(a.jsx)("img",{src:w,alt:"Spruce2"})})}),Object(a.jsx)(k.a,{handle:".handle",defaultPosition:{x:0,y:0},position:null,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:Object(a.jsx)("div",{className:"handle",children:Object(a.jsx)("img",{src:y,alt:"Spruce3"})})}),Object(a.jsx)(k.a,{handle:".handle",defaultPosition:{x:0,y:0},position:null,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:Object(a.jsx)("div",{className:"handle",children:Object(a.jsx)("img",{src:D,alt:"Spruce4"})})})]}),Object(a.jsxs)("div",{className:"handlebox",children:[Object(a.jsx)(k.a,{handle:".handle",defaultPosition:{x:0,y:0},position:null,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:Object(a.jsx)("div",{className:"handle",children:Object(a.jsx)("img",{src:_,alt:"Prise"})})}),Object(a.jsx)(k.a,{handle:".handle",defaultPosition:{x:0,y:0},position:null,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:Object(a.jsx)("div",{className:"handle",children:Object(a.jsx)("img",{src:P,alt:"Rudolf"})})}),Object(a.jsx)(k.a,{handle:".handle",defaultPosition:{x:0,y:0},position:null,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:Object(a.jsx)("div",{className:"handle",children:Object(a.jsx)("img",{src:T,alt:"Santa"})})}),Object(a.jsx)(k.a,{handle:".handle",defaultPosition:{x:0,y:0},position:null,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop,children:Object(a.jsx)("div",{className:"handle",children:Object(a.jsx)("img",{src:A,alt:"Snowman"})})})]})]})}}]),n}(s.Component),E=(n(82),n(19)),G=n.n(E),L=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).onClick=a.onClick.bind(Object(g.a)(a)),a.onClick2=a.onClick2.bind(Object(g.a)(a)),a.onClick3=a.onClick3.bind(Object(g.a)(a)),a.state={show:!1,show2:!1,show3:!1},a}return Object(l.a)(n,[{key:"onClick",value:function(){this.setState({show:!this.state.show})}},{key:"onClick2",value:function(){this.setState({show2:!this.state.show2})}},{key:"onClick3",value:function(){this.setState({show3:!this.state.show3})}},{key:"render",value:function(){var t,e=this.state.show,n=this.state.show2,s=this.state.show3;return t=this.state.show?"one":this.state.show2?"two":this.state.show3?"three":"left_block",Object(a.jsxs)("div",{className:"main_block",children:[Object(a.jsx)("div",{className:t,id:"capture",children:Object(a.jsx)("div",{className:"left_block_text"})}),Object(a.jsxs)("div",{className:"right_block",children:[Object(a.jsxs)("div",{className:"right_block_btn",children:[Object(a.jsx)("p",{children:"1. \u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0444\u043e\u043d"}),Object(a.jsx)("button",{onClick:this.onClick,className:G()("bg_btn1 bg_btn",{"change-class":e}),children:Object(a.jsx)("div",{className:"bottom_text",children:"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})}),Object(a.jsx)("button",{onClick:this.onClick2,className:G()("bg_btn2 bg_btn",{"change-class":n}),children:Object(a.jsx)("div",{className:"bottom_text",children:"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})}),Object(a.jsx)("button",{onClick:this.onClick3,className:G()("bg_btn3 bg_btn",{"change-class":s}),children:Object(a.jsx)("div",{className:"bottom_text",children:"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})})]}),Object(a.jsx)("p",{children:"2. \u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u0442\u0438\u043a\u0435\u0440\u044b \u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u043a\u0443"}),Object(a.jsx)(I,{}),Object(a.jsx)("p",{className:"red",children:"3. \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0442\u0435\u043a\u0441\u0442"}),Object(a.jsx)(S,{})]})]})}}]),n}(s.Component);var J=function(){return Object(a.jsx)(v.CSSTransitionGroup,{transitionName:"worksTransition",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{}),Object(a.jsx)("div",{className:"contentproject",children:Object(a.jsx)(L,{})})]})})};n(83);var R=function(t){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"bg-header",children:[Object(a.jsx)("div",{className:"header-bottom",children:Object(a.jsx)("p",{children:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u041d\u043e\u0432\u0433\u043e\u0434\u043d\u0438\u0445 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u043a"})}),Object(a.jsx)(x.b,{className:"btn",to:"/card",children:"\u041d\u0410\u0427\u0410\u0422\u042c"})]}),Object(a.jsx)("div",{className:"snowContainer",children:Object(a.jsx)("div",{id:"snow"})})]})};var q=function(){return Object(a.jsx)(v.CSSTransitionGroup,{transitionName:"worksTransition",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(R,{}),Object(a.jsx)("div",{className:"content"})]})})};var B=function(){return Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",component:q}),Object(a.jsx)(j.a,{path:"/card",component:J})]})},H=n(47),U=n(46),Y=n.p+"static/media/ikson-first-snow.0b0b904c.mp3",z=function(){var t=Object(U.a)(Y),e=Object(H.a)(t,1)[0];return setTimeout(e)},F=(n(84),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(B,{}),Object(a.jsx)(z,{})]})}}]),n}(s.Component));r.a.render(Object(a.jsx)(x.a,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[85,1,3]]]);
//# sourceMappingURL=main.5425fca6.chunk.js.map
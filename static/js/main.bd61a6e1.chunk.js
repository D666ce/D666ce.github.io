(this["webpackJsonpgamepad-tester"]=this["webpackJsonpgamepad-tester"]||[]).push([[0],{46:function(e,t,a){e.exports=a(58)},51:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),i=a(84);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);var o=a(42),s=a(16),d=a(36),m=a(77),u=a(79),p=a(80),g=a(87),f=a(83),E=a(24),h=a(31),x=a(59),b=a(85),v=a(81),y=a(86),w=a(82);function j(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",enableBackground:"new 0 0 58.189 58.189",version:"1.1",viewBox:"0 0 58.189 58.189",width:"350px",height:"350px",xmlSpace:"preserve"},r.a.createElement("path",{fill:"#38454F",d:"M29.095 39.268h9.446c1.701 0 3.346.609 4.638 1.716l9.128 7.828c.611.524 1.505.614 2.184.183 9.496-6.01-2.022-29.728-4.305-34.034-.242-.457-.641-2.936-1.126-3.113l-7.676-2.791a2.248 2.248 0 00-2.017.242s-2.164 1.383-2.649 1.383H21.744c-.485 0-2.921-1.383-2.921-1.383a2.25 2.25 0 00-2.017-.242L9.13 11.848c-.486.177-.884 2.656-1.126 3.113-2.283 4.306-13.801 28.024-4.305 34.034.68.43 1.574.34 2.184-.183l9.128-7.828a7.129 7.129 0 014.638-1.716h9.446z"}),r.a.createElement("circle",{cx:"36.786",cy:"30.268",r:"4",fill:"#546A79"}),r.a.createElement("circle",{cx:"13.786",cy:"20.268",r:"4",fill:"#546A79"}),r.a.createElement("circle",{cx:"43.786",cy:"16.268",r:"2",fill:"#EBBA16"}),r.a.createElement("circle",{cx:"39.786",cy:"20.268",r:"2",fill:"#7383BF"}),r.a.createElement("circle",{cx:"47.786",cy:"20.268",r:"2",fill:"#D75A4A"}),r.a.createElement("circle",{cx:"43.786",cy:"24.268",r:"2",fill:"#61B872"}),r.a.createElement("path",{fill:"#AFB6BB",d:"M31.786 11.712c0-.192-.019-.38-.054-.561a1.077 1.077 0 00-.215-.469h-2.479c-.085.007-.165.03-.251.03-.087 0-.167-.022-.251-.03h-2.489a1 1 0 00-.192.4 3.007 3.007 0 000 1.271 3.014 3.014 0 002.404 2.314 3.002 3.002 0 003.527-2.955z"}),r.a.createElement("path",{fill:"#546A79",d:"M27.286 27.921H24v-3.286a.714.714 0 00-.714-.714h-2.571a.714.714 0 00-.714.714v3.286h-3.286a.714.714 0 00-.714.714v2.571c0 .395.32.714.714.714H20v3.286c0 .395.32.714.714.714h2.571c.395 0 .714-.32.714-.714V31.92h3.286c.395 0 .714-.32.714-.714v-2.571a.713.713 0 00-.713-.714z"}))}var O=Object(m.a)((function(e){return{root:{width:"550px",justifyContent:"center",alignItems:"center"},paper:{padding:"0 40px 25px 40px"},button:{width:"110px"}}}));function k(e){var t=O(),a=Object(n.useState)({delay:0,duration:1e3,weakMagnitude:0,strongMagnitude:1,isNeedRepeat:!1,pressedButtons:[]}),c=Object(s.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(null),d=Object(s.a)(o,2),m=d[0],k=d[1],B=Object(n.useState)(!1),M=Object(s.a)(B,2),N=M[0],C=M[1],S=e.instance,A=l.delay,I=l.duration,V=l.weakMagnitude,D=l.strongMagnitude,L=l.isNeedRepeat,z=function(){var e={startDelay:A,duration:I,weakMagnitude:V,strongMagnitude:D};return console.log("Vibration pulse started with parameters: %o",e),S.vibrationActuator.playEffect("dual-rumble",e)},H=function(){L?(W(),z(),k(setInterval(z,.6*I)),C(!0)):z()},W=function(){m&&clearInterval(m),C(!1)},F=function(e,t){i(Object(h.a)(Object(h.a)({},l),{},Object(E.a)({},e,t))),N&&(W(),H())};return Object(n.useEffect)((function(){return function(){m&&clearInterval(m)}}),[]),r.a.createElement(u.a,{container:!0,spacing:3,className:t.root},r.a.createElement(p.a,{className:t.paper},r.a.createElement(u.a,{container:!0,justify:"center"},r.a.createElement(j,null)),r.a.createElement(g.a,{style:{marginBottom:"20px",textAlign:"center"}},S.id),r.a.createElement(x.a,{gutterBottom:!0},"Delay: ",A," ms"),r.a.createElement(b.a,{"aria-labelledby":"input-slider",value:A,defaultValue:0,step:10,min:0,max:2e3,onChange:function(e,t){return F("delay",t)}}),r.a.createElement(x.a,{gutterBottom:!0},"Duration: ",I," ms"),r.a.createElement(b.a,{"aria-labelledby":"input-slider",value:I,defaultValue:1e3,step:100,min:100,max:5e3,onChange:function(e,t){return F("duration",t)}}),r.a.createElement(x.a,{gutterBottom:!0},"Weak magnitude"),r.a.createElement(b.a,{"aria-labelledby":"input-slider",value:V,defaultValue:1,step:.01,min:0,max:1,onChange:function(e,t){return F("weakMagnitude",t)}}),r.a.createElement(x.a,{gutterBottom:!0},"Strong magnitude"),r.a.createElement(b.a,{"aria-labelledby":"input-slider",value:D,defaultValue:1,step:.01,min:0,max:1,onChange:function(e,t){return F("strongMagnitude",t)}}),r.a.createElement(u.a,{container:!0,className:t.root,spacing:2},r.a.createElement(u.a,{item:!0,xs:5},r.a.createElement(v.a,{control:r.a.createElement(y.a,{checked:L,disabled:N,onChange:function(){return F("isNeedRepeat",!L)}}),label:"Interval repeat"})),r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement(w.a,{className:t.button,variant:"contained",onClick:H,disabled:N},"Start")),r.a.createElement(u.a,{item:!0,xs:3},r.a.createElement(w.a,{className:t.button,variant:"contained",onClick:W,disabled:!N},"Stop")),r.a.createElement(u.a,{item:!0,xs:12},N&&r.a.createElement(f.a,{color:"secondary"})))))}var B=Object(m.a)((function(e){return{header:{backgroundColor:"#282c34",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",color:"white"},root:{width:"1500px",justifyContent:"center",alignItems:"center"},paper:{padding:"25px"},progress:{margin:"20px 0 0 0"},gamepad:{margin:"70px"}}}));var M=function(){var e=B(),t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],l=a[1],i=function(e){console.log("Gamepad connected at index ".concat(e.gamepad.index)),l([].concat(Object(o.a)(c),[e.gamepad]))},m=function(e){console.log("Gamepad disconnected from index ".concat(e.gamepad.index)),delete c[e.gamepad.index],l(c)};return Object(n.useEffect)((function(){return window.addEventListener("gamepadconnected",i),window.addEventListener("gamepaddisconnected",m),function(){window.removeEventListener("gamepadconnected",i),window.removeEventListener("gamepaddisconnected",m)}}),[]),r.a.createElement("header",{className:e.header},c.length?r.a.createElement(u.a,{container:!0,spacing:0,className:e.root},Object(d.map)(c,(function(t){return r.a.createElement(u.a,{key:t.index,className:e.gamepad,item:!0,xs:"auto"},r.a.createElement(k,{instance:t}))}))):r.a.createElement(p.a,{className:e.paper},"Waiting for gamepad connection",r.a.createElement(g.a,{style:{textAlign:"center"}},"(If your gamepad is already connected - press any button)"),r.a.createElement(f.a,{color:"secondary",className:e.progress})))},N=a(41),C=Object(N.a)({overrides:{MuiSlider:{thumb:{color:"#f50057"},track:{color:"#f50057"},rail:{color:"#f50057"}}},palette:{type:"dark"}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{theme:C},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.bd61a6e1.chunk.js.map
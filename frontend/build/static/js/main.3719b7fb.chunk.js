(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,o=a(0),s=a.n(o),c=a(3),r=a.n(c),l=(a(13),a(1)),i=a(4),m=a(5),u=a(7),g=a(6);a(14),a(15),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT;n="https:"!==window.location.protocol?new WebSocket("ws://".concat(window.location.host,"/ws")):new WebSocket("wss://".concat(window.location.host,"/ws"));var d=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={chatHistory:[],message:"Hello",username:"anonymous"},n.lastMessage=s.a.createRef(),n.usernameRef=s.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;e=function(e){console.log("Connected"),console.log("msg.data:",e.data);var a=JSON.parse(e.data),n=a.message,o=a.username;t.setState({chatHistory:[].concat(Object(l.a)(t.state.chatHistory),[{value:n,incoming:!0,username:o}])})},console.log("Connecting..."),n.onopen=function(){console.log("Successfully Connected")},n.onmessage=function(t){console.log("onmessage",t),e(t)},n.onclose=function(e){console.log("Socket Closed Connection ",e)},n.onerror=function(e){console.log("Socket Error: ",e)}}},{key:"handleSendMessage",value:function(e){try{this.setState({chatHistory:[].concat(Object(l.a)(this.state.chatHistory),[{value:e,incoming:!1,username:this.state.username}])}),window.scrollTo(0,this.lastMessage.current.offsetTop),function(e){console.log("sending message: ",e),n.send(e)}(JSON.stringify({message:e,username:this.state.username}))}catch(t){console.log("error attempting to send a message")}}},{key:"render",value:function(){var e=this,t=this.state,a=(t.message,t.chatHistory);return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},s.a.createElement("div",{className:"userName"},s.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"username",ref:this.usernameRef}),s.a.createElement("button",{className:"btn btn-secondary my-2 my-sm-0",type:"button",onClick:function(){e.setState({username:e.usernameRef.current.value},(function(){console.log("username:",e.state.username)}))}},"Enter"),s.a.createElement("label",null,this.state.username))),s.a.createElement("div",{className:"container wrapper mb-5"},a.map((function(e,t){return e.incoming?s.a.createElement("div",{className:"col-lg-4",key:t},s.a.createElement("div",{className:"chat-bubble chat-bubble--left"},e.value),s.a.createElement("p",{className:"user-name"},e.username)):s.a.createElement("div",{className:"col-lg-4 offset-lg-9",key:t},s.a.createElement("div",{className:"chat-bubble chat-bubble--right"},e.value))}))),s.a.createElement("div",{className:"footer",ref:this.lastMessage},s.a.createElement("input",{id:"message-input",className:"form-control ml-sm-3",type:"text",placeholder:"write message...",onKeyUp:function(t){"Enter"===t.key&&(console.log("your msg:",t.target.value),e.handleSendMessage(t.target.value),t.target.value="")}}),s.a.createElement("button",{className:"btn btn-secondary",onClick:function(){e.handleSendMessage(document.getElementById("message-input").value),document.getElementById("message-input").value=""}},s.a.createElement("i",{className:"fa fa-paper-plane","aria-hidden":"true"}))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.3719b7fb.chunk.js.map
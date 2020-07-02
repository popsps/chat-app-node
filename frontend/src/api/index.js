const port = process.env.PORT || 8085

// const socket = new WebSocket(`wss://chat-app0773.herokuapp.com/:${port}/ws`);
// const socket = new WebSocket(`ws://localhost:${port}/ws`);

// console.log("client port : ", port)
// console.log("location.protocol: ", window.location.protocol )
let socket
if(window.location.protocol !== 'https:')
  {
    socket = new WebSocket(`ws://${window.location.host}/ws`);
  }
else
  {
    socket = new WebSocket(`wss://${window.location.host}/ws`);
  }
//wss https
//ws http
// console.log("location host: ", window.location.host)
// console.log("location host: ", window.location.port)
// console.log("location host: ", window.location.hostname)
let connect = callBack => {
  console.log("Connecting...");

  socket.onopen = () => {
    console.log("Successfully Connected");
  };
  // receive message from server to client
  socket.onmessage = msg => {
    console.log("onmessage", msg);
    callBack(msg);
  };
  socket.onclose = ev => {
    console.log("Socket Closed Connection ", ev);
  };
  socket.onerror = error => {
    console.log("Socket Error: ", error);
  }
};

// send message from client to server
let sendMsg = msg => {
  console.log('sending message: ', msg);
  socket.send(msg);
};

export {connect, sendMsg}
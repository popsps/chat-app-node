import React from 'react';
import './Materia.css';
import './App.css'
import {connect, sendMsg} from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
      message: "Hello",
      username: "anonymous"
    }
    this.lastMessage = React.createRef()
    this.usernameRef = React.createRef()
  }

  componentDidMount() {
    connect(msg => {
      console.log("Connected");
      console.log("msg.data:", msg.data)
      const {message, username} = JSON.parse(msg.data)
      this.setState({
        chatHistory: [...this.state.chatHistory, {
          value: message,
          incoming: true,
          username: username
        }]
      });

    });
  }


  handleSendMessage(msg) {
    try {
      this.setState({
        chatHistory: [...this.state.chatHistory, {
          value: msg,
          incoming: false,
          username: this.state.username
        }]
      });
      window.scrollTo(0, this.lastMessage.current.offsetTop)
      sendMsg(JSON.stringify({message: msg, username: this.state.username}))
    } catch (e) {
      console.log('error attempting to send a message')
    }
  }

  render() {
    const {message, chatHistory} = this.state;
    let inRow = true;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="userName">
            <input className="form-control mr-sm-2" type="text"
                   placeholder="username"
                   ref={this.usernameRef}/>
            <button className="btn btn-secondary my-2 my-sm-0" type="button"
                    onClick={() => {
                      this.setState({
                        username: this.usernameRef.current.value
                      }, () => {
                        console.log('username:', this.state.username)
                      })
                    }}>Enter
            </button>
            <label>{this.state.username}</label>
          </div>
        </nav>
        <div className='container wrapper mb-5'>
          {chatHistory.map((msg, index) => {
            if (msg.incoming) {
              return (
                <div className="col-lg-4" key={index}>
                  <div className="chat-bubble chat-bubble--left">
                    {msg.value}
                  </div>
                  <p className='user-name'>
                    {msg.username}
                  </p>
                </div>
              )
            } else {
              return (
                <div className="col-lg-4 offset-lg-9" key={index}>
                  <div className="chat-bubble chat-bubble--right">
                    {msg.value}
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className='footer' ref={this.lastMessage}>
          <input id='message-input' className="form-control ml-sm-3" type="text" placeholder="write message..."
                 onKeyUp={(e) => {
                   if (e.key === 'Enter') {
                     console.log('your msg:', e.target.value)
                     this.handleSendMessage(e.target.value)
                     e.target.value = ""
                   }
                 }}/>
          <button className='btn btn-secondary' onClick={() => {
            this.handleSendMessage(document.getElementById('message-input').value)
            document.getElementById('message-input').value = ""
          }}>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>

        </div>
      </div>
    );
  }
}


export default App;

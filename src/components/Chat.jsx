import Messages from './Messages'
import Input from './Input'
import '../styles/c_styles/chat.scss'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-header">
        <span className="chat-header__name">Grisha</span>
        <ul className="chat-header__functions">
          <li>
            <button>
              <img src="./images/cam.png" alt="cam" />
            </button>
          </li>
          <li>
            <button>
              <img src="./images/add.png" alt="add" />
            </button>
          </li>
          <li>
            <button>
              <img src="./images/more.png" alt="more" />
            </button>
          </li>
        </ul>
      </div>
      <Messages />
			<Input />
    </div>
  )
}

export default Chat

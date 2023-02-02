import '../styles/c_styles/message.scss'

const Message = () => {
  return (
    <div className="message">
      <div className="message__info">
        <img src="./images/users/main-user.jpg" alt="user" />
        <span>Just now</span>
      </div>
      <div className="message__content">
        <p>Hello</p>
        <img src="./images/users/main-user.jpg" alt="user" />
      </div>
    </div>
  )
}

export default Message

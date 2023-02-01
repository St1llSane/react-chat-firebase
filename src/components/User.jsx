import '../styles/c_styles/user.scss'

export const User = () => {
  return (
    <div className="user">
      <img src="./images/users/user-1.jpg" alt="user" />
      <div className="user__info">
        <span>Grisha Svetov</span>
				<p>Hello!</p>
      </div>
    </div>
  )
}

export default User

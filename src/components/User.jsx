import '../styles/c_styles/user.scss'

export const User = () => {
  return (
    <div className="user">
      <img src="./users/user-1.jpg" alt="" />
      <div className="user__info">
        <span>Grisha Svetov</span>
				<p>Hello!</p>
      </div>
    </div>
  )
}

export default User

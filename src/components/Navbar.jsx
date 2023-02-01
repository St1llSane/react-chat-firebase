import '../styles/c_styles/navbar.scss'
import mainUser from '../images/users/mainUser.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Still Chat</h1>
      <div className="user">
        <a href='#'>
          <img src={mainUser} alt="avatar" />
          <span>Alexander Vetrov</span>
        </a>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar

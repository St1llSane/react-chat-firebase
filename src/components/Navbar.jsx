import '../styles/c_styles/navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Still Chat</h1>
      <div className="user">
        <a href='#'>
          <img src="./images/users/main-user.jpg" alt="avatar" />
          <span>Alexander Vetrov</span>
        </a>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar

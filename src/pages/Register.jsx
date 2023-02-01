import '../styles/c_styles/login.scss'
import addAvatar from '../images/addAvatar.png'

const Register = () => {
  return (
    <section className="form-container">
      <div className="form-wrapper">
        <h1 className="logo">Still Chat</h1>
        <span className="title">Register</span>
        <form className="form-wrapper__form">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="add-avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </section>
  )
}

export default Register

import '../styles/c_styles/login.scss'

const Login = () => {
  return (
    <section className="form-container">
      <div className="form-wrapper">
        <h1 className="logo">Still Chat</h1>
        <span className="title">Login</span>
        <form className="form-wrapper__form">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Log in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </section>
  )
}

export default Login

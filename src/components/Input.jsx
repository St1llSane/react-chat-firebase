import '../styles/c_styles/input.scss'

const Input = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Write message..." />
      <ul className="input__functions">
        <li>
          <button>
            <img src="./images/attach.png" alt="" />
          </button>
        </li>
        <li>
          <input type="file" id="input-file" />
          <label htmlFor="input-file">
            <img src="./images/img.png" alt="" />
          </label>
        </li>
      </ul>
			<button className='input__send'>Send</button>
    </form>
  )
}

export default Input

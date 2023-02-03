import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import '../styles/c_styles/login.scss'

const Register = () => {
  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    console.log(e.target[0].value)
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })

            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })

            await setDoc(doc(db, 'userChats', res.user.uid), {})
          })
        }
      )
    } catch (error) {
      setErr(true)
    }
  }

  return (
    <section className="form-container">
      <div className="form-wrapper">
        <h1 className="logo">Still Chat</h1>
        <span className="title">Register</span>
        <form className="form-wrapper__form" onSubmit={handleSubmit}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" />
          <label htmlFor="file">
            <img src="./images/add-avatar.png" alt="add-avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You have an account? Login</p>
      </div>
      {err && <span>Произошла ошибка!</span>}
    </section>
  )
}

export default Register

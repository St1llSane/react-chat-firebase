import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import '../styles/c_styles/home.scss'

const Home = () => {
  return (
    <section className="home">
      <div className="home-wrapper">
				<Sidebar />
				<Chat />
			</div>
    </section>
  )
}

export default Home

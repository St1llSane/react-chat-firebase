import Navbar from './Navbar'
import Search from './Search'
import '../styles/c_styles/sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
			<Search />
    </div>
  )
}

export default Sidebar

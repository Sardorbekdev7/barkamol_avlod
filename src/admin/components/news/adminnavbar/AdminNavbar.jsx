import { Link } from "react-router-dom"
import './style/style.css'
const AdminNavbar = () => {
  return (
    <div>
        <div className='navbar'>
            <Link to={'xodimlar/'}>Xodimlar</Link>
            <Link to={'/admin/'}>Yangiliklar</Link>
            <Link to={'videos'}>Videolar</Link>
            <Link to={'sponsors'}>Xomiylar</Link>
            <Link to={'photos'}>Rasmlar</Link>
            <Link to={'subscribe'}>Bog'lanish</Link>
            <Link to={'statistics'}>Statistika</Link>
            <Link to={'about'}>About</Link>
            <Link to={'category'}>Kategoriya</Link>
            <Link to={'courses'}>Kurslar</Link>
        </div>
    </div>
  )
}

export default AdminNavbar
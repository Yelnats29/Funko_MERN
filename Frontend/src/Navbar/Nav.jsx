import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <>
            <nav>
                <Link to='/'><h2>Home</h2></Link>
                <Link to='/funkopops/new'><h2>Create</h2></Link>
                <Link to='/funkopops'><h2>Collection</h2></Link>
            </nav>
        </>
    )
}

export default Nav
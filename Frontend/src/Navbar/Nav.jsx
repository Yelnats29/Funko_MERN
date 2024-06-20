import { Link } from 'react-router-dom';
import './Nav.css'

// const Nav = () => {
//     return (
//         <>
//             <nav>
//                 <Link to='/'><h2>Home</h2></Link>
//                 <Link to='/funkopops/new'><h2>Create</h2></Link>
//                 <Link to='/funkopops'><h2>Collection</h2></Link>
//             </nav>
//         </>
//     )
// }

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Random Collection</Link>
                <div className="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/funkopops/new'>Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/funkopops'>Collection</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav
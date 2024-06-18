import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav>
                <Link to='/funkopops'><h2>Home</h2></Link>
                <Link to='/funkopops/new'><h2>Create</h2></Link>
                <Link to='/funkopops/:funkoId'><h2>Collection</h2></Link>
            </nav>
        </>
    )
}

export default Nav
import { useEffect, useState } from 'react'; // Import React and necessary hooks from React
import { Link } from 'react-router-dom'; // Import Link component for navigation
import axios from 'axios'; // Import axios for making HTTP requests
import './home.css'; // Import CSS file for styling


const Home = () => {
    const [funkoPop, setFunkoPop] = useState([]);

    useEffect(() => {
        // Make a GET request to the API to fetch Funko Pop data
        axios.get('http://localhost:3000/api/funkopops/')
            .then(response => {
                // On success, update the 'Funko Pops' state with the fetched data
                setFunkoPop(response.data);
            })
            .catch(error => {
                // Log any errors to the console
                console.error('There was an error fetching the Funko Pops!', error);
            });
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts  

    return (
        <>
            <div id='home-wrapper'>
                {/* Main heading for the page */}
                <h1>Welcome to the Funko Collection</h1>
                <div id="home-container">
                    {/* List of Funko Pops */}
                    <ul>
                        {funkoPop.map(funko => (
                            // Generate a list item for each Funko Pop
                            <li key={funko._id}>
                                {/* Link to the show page of each Funko Pop */}
                                <Link to={`/funkopops/${funko._id}`}>{funko.name} - ${funko.price}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Home



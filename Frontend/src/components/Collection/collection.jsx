import { useEffect, useState } from 'react'; // Import React and necessary hooks from React
import { Link } from 'react-router-dom'; // Import Link component for navigation
import axios from 'axios'; // Import axios for making HTTP requests
import './collection.css'; // Import CSS file for styling
import Search from '../Searchbar/searchbar';


const Collection = () => {
    const [funkoPop, setFunkoPop] = useState([]);
    const [filteredFunkos, setFilteredFunkos] = useState([]);

    useEffect(() => {
        // Make a GET request to the API to fetch Funko Pop data
        axios.get('http://localhost:3000/api/funkopops/')
            .then(response => {
                // On success, update the 'Funko Pops' state with the fetched data
                setFunkoPop(response.data);
                setFilteredFunkos(response.data);
            })
            .catch(error => {
                // Log any errors to the console
                console.error('There was an error fetching the Funko Pops!', error);
            });
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts  

    const handleSearch = (search) => {
        const filtered = funkoPop.filter((funko) => funko.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredFunkos(filtered);
    };

    return (
        <>
        <div className="home-container">
        <h1>Welcome To My Randomly Generated Collection</h1>
        <h5>It's Weird To Me Too!</h5>
            <Search onSearch={handleSearch} results={filteredFunkos} />
            <div className="funkos-list">
                {filteredFunkos.map((funko) => (
                    <div key={funko._id} className="funko-item">
                        <h2><Link to={`/funkopops/${funko._id}`}>{funko.name} - ${funko.price}</Link></h2>
                        <p>{funko.series}</p>
                        <p>{funko.releaseYear}</p>
                        <img src={funko.imageUrl} alt={funko.name} />
                        <p>{funko.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};


{/* //         <>
//             <div id='collection-wrapper'> 
//                 <h1>Welcome to the Funko Collection</h1>
//                 <div id="collection-container">
//                     {/* List of Funko Pops */}
//                     <ul>
//                         {funkoPop.map(funko => ( */}
//                             // Generate a list item for each Funko Pop
//                             <li key={funko._id}>
//                                 {/* Link to the show page of each Funko Pop */}
//                                 <Link to={`/funkopops/${funko._id}`}>{funko.name} - ${funko.price}</Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// };

export default Collection



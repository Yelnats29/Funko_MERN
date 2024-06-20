import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import './show.css'


const ShowFunkoPop = ({ deleteFunkoPops }) => {
    const [funko, setFunko] = useState('');
    const { funkoId } = useParams();



    useEffect(() => {
        // Make a GET request to the API to fetch Funko Pop data
        axios.get(`http://54.196.232.39:3000/api/funkopops/${funkoId}`)
            .then(response => {
                // On success, update the 'Funko Pops' state with the fetched data
                setFunko(response.data);
            })
            .catch(error => {
                // Log any errors to the console
                console.error('There was an error fetching the Funko Pops!', error);
            });
    }, [funkoId]);


    //   return (
    //     <div id="show-wrapper">
    //         <h1>Here Are The Details...</h1>
    //         <div id="show-container">
    //           <h3>Name: </h3>
    //           <p>{funko.name}</p>
    //           <h3>Series</h3>
    //           <p>{funko.series}</p>
    //           <h3>Release Year</h3>
    //           <p>{funko.releaseYear}</p>
    //           <h3>Price:</h3>
    //           <p>${funko.price}</p>
    //           <h3>Image:</h3>
    //           <p>{funko.imageUrl}</p>
    //           <h3>Description:</h3>
    //           <p>{funko.description}</p>
    //           <div className="button-container">
    //             <Link to="/funkopops"><button>Back to List</button></Link>
    //             <Link to={`/funkopops/${funkoId}/edit`}><button>Edit</button></Link>
    //             <button onClick={()=>deleteFunkoPops(funkoId)}>Delete</button>
    //           </div>
    //         </div>
    //     </div>
    //   );
    // };


    return (
        <div className="container mt-4">
            <div className="card mb-4">
                <img src={funko.imageUrl} className="card-img-top" alt={funko.name} />
                <div className="card-body">
                    <h5 className="card-title">{funko.name}</h5>
                    <p className="card-text">{funko.series}</p>
                    <p className="card-text">{funko.releaseYear}</p>
                    <p className="card-text">${funko.price}</p>
                    <p className="card-text">{funko.description}</p>
                    <Link to={"/funkopops"} className='btn btn-primary'>Back to List</Link>
                    <Link to={`/funkopops/${funkoId}/edit`} className='btn btn-warning me-2'>Edit</Link>
                    <button onClick={() => deleteFunkoPops(funkoId)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};


export default ShowFunkoPop;

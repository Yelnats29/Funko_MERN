import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './update.css';

const updateFunkoPop = ({updateFunkoPops}) => {
    const navigate = useNavigate()
    const { funkoId } = useParams();
    const [updateFunko, setUpdateFunko] = useState({
        name: '',
        series: '',
        releaseYear: '',
        price: '',
        imageUrl: '',
        description: ''
    })

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/funkopops/${funkoId}`)
            .then((response) => setUpdateFunko(response.data))
            .catch((error) =>
                console.error("There was an error fetching the funko pop!", error)
            );
    }, [funkoId]);

    const handleInputChange = (e) => {
        setUpdateFunko({ ...updateFunko, [e.target.name]: e.target.value });
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateFunkoPops(updateFunko, funkoId);

        navigate(`/funkopops/${funko._id}`);
    };


    return (
        <>
        <div id="update-wrapper" >
            <h1>Edit Selected Funko Pop</h1>
            <div id="update-container">
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                    <input
                        id='name'
                        type="text"
                        required
                        // placeholder='Name'
                        name="name"
                        value={updateFunko.name}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="series">Series:</label><br />
                    <input
                        id='series'
                        type="text"
                        required
                        // placeholder='Series'
                        name="series"
                        value={updateFunko.series}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="releaseYear">Release Year:</label><br />
                    <input
                        id='releaseYear'
                        type="number"
                        required
                        // placeholder='Release Year'
                        name="releaseYear"
                        value={updateFunko.releaseYear}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="price">Price:</label><br />
                    <input
                        id='price'
                        type="number"
                        required
                        // placeholder='Price'
                        name="price"
                        value={updateFunko.price}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="imageUrl">Image:</label><br />
                    <input
                        id='imageUrl'
                        type="text"
                        required
                        // placeholder='Price'
                        name="imageUrl"
                        value={updateFunko.imageUrl}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="description">Description:</label><br />
                    <input
                        id='description'
                        type="text"
                        required
                        // placeholder='Description'
                        name="description"
                        value={updateFunko.description}
                        onChange={handleInputChange}
                    /><br />
                    <div className="button-container">
                    <br /><button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}


export default updateFunkoPop;
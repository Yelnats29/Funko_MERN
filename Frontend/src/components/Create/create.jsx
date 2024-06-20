import { useState } from "react";
import './create.css';

const CreateFunkoPop = ({createFunkoPops}) => {
    const [inputFunkoPop, setInputFunkoPop] = useState('');
    const [name, setName] = useState('');
    const [series, setSeries] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    // Updates the input fields with the current state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'funkoPop':
                setInputFunkoPop(value);
                break;
            case 'name':
                setName(value);
                break;
            case 'series':
                setSeries(value);
                break;
            case 'releaseYear':
                setReleaseYear(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'imageUrl':
                setImageUrl(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    };

    // Creates a new funko pop and resets the inputs
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newFunkoPop = {
            name,
            series,
            releaseYear,
            price,
            imageUrl,
            description
        };

        await createFunkoPops(newFunkoPop);



        // Reset input fields
        setInputFunkoPop('');
        setName('');
        setSeries('');
        setReleaseYear('');
        setPrice('');
        setImageUrl('');
        setDescription('');
    };

    return ( 
        <div id='create-wrapper'>
            <h1 id='create-header'>Create Something Weird</h1>
            <div id='create-container'>
                <form className='add-funkopop' onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        id='name'
                        type="text"
                        required
                        // placeholder='Name'
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="series">Series:</label><br />
                    <input
                        id='series'
                        type="text"
                        required
                        // placeholder='Series'
                        name="series"
                        value={series}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="releaseYear">Release Year:</label><br />
                    <input
                        id='releaseYear'
                        type="number"
                        required
                        // placeholder='Release Year'
                        name="releaseYear"
                        value={releaseYear}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="price">Price:</label><br />
                    <input
                        id='price'
                        type="number"
                        required
                        // placeholder='Price'
                        name="price"
                        value={price}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="imageUrl">Image:</label><br />
                    <input
                        id='imageUrl'
                        type="text"
                        required
                        // placeholder='Price'
                        name="imageUrl"
                        value={imageUrl}
                        onChange={handleInputChange}
                    /><br />
                    <label htmlFor="description">Description:</label><br />
                    <input
                        id='description'
                        type="text"
                        required
                        // placeholder='Description'
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                    /><br />
                    <div className="button-container">
                    <br /><button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default CreateFunkoPop;

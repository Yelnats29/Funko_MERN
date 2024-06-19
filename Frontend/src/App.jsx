import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as FunkoPopServices from '../services/FunkoPopService'
import FunkoHome from './components/Home/home'
import FunkoShow from './components/Show/show'
import FunkoCreate from './components/Create/create'
import FunkoUpdate from './components/Update/update'
import Navbar from './Navbar/Nav'
import './App.css'

const App = () => {
  const [funkoArray, setFunkoArray] = useState([]);

  const navigate = useNavigate();
  
  // function to show all funko pops
    const getAllFunkoPops = async () => {
      const allFunkoPops = await FunkoPopServices.index()
      setFunkoArray(allFunkoPops)
    };


// function to create a new funko pop
  const createFunkoPops = async (funkoPop) => {
    await FunkoPopServices.create(funkoPop)
    getAllFunkoPops()
    navigate('/funkopops')
  }

// function to update funko pop
const updateFunkoPops = async (funko, funkoId) => {
  await FunkoPopServices.updateFunkoPop(funko, funkoId)
  getAllFunkoPops()
  navigate(`/funkopops/${funko._id}`)
};


//function to delete funko pop
const deleteFunkoPops = async (funkoId) => {
  await FunkoPopServices.deleteFunkoPop(funkoId)
  getAllFunkoPops()
  navigate('/funkopops')
};


useEffect(() => {
  getAllFunkoPops()
}, [])



  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/funkopops' element={<FunkoHome {...{funkoArray}}/>}/>
        <Route path='/funkopops/:funkoId' element={<FunkoShow deleteFunkoPops={deleteFunkoPops}/>}/>
        <Route path='/funkopops/new' element={<FunkoCreate createFunkoPops={createFunkoPops}/>}/>
        <Route path='/funkopops/:funkoId/edit' element={<FunkoUpdate updateFunkoPops={updateFunkoPops}/>}/>
      </Routes>
    </>
  );
};

export default App

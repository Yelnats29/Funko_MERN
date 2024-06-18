import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as FunkoPopServices from '../services/FunkoPopService'
import FunkoHome from './components/Home/home'
import FunkoShow from './components/Show/show'
import FunkoCreate from './components/Create/create'
import FunkoUpdate from './components/Update/update'
import Navbar from './Navbar/Nav'
import './App.css'

function App() {
  const [funkoArray, setFunkoArray] = useState([]);

  const Navigate = useNavigate();
  
  // function to show all funko pops
    const getAllFunkoPops = async () => {
      const allFunkoPops = await FunkoPopServices.index()
      setFunkoArray(allFunkoPops)
    };


// function to create a new funko pop
  const createFunkoPops = async (funkoPop) => {
    await FunkoPopServices.create(funkoPop)
    getAllFunkoPops()
    Navigate('/funkopops')
  }

// function to update funko pop
const updateFunkoPops = async (funkoPop) => {
  await FunkoPopServices.updateFunkoPop(funkoPop, funko._id)
  getAllFunkoPops()
  Navigate(`/funkopops/${funko._id}`)
};


//function to delete funko pop
const deleteFunkoPops = async (funkoId) => {
  await FunkoPopServices.deleteFunkoPop(funkoId)
  getAllFunkoPops()
  Navigate('/funkopops')
};


useEffect(() => {
  getAllFunkoPops()
}, [])



  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/funkopops' element={<FunkoHome {...{funkoArray}}/>}/>
        <Route path='/funkopops/:funkoId' element={<FunkoShow {...{funkoArray, deleteFunkoPops}}/>}/>
        <Route path='/funkopops/new' element={<FunkoCreate {...{funkoArray, createFunkoPops}}/>}/>
        <Route path='/funkopops/:funkoId/edit' element={<FunkoUpdate {...{funkoArray, updateFunkoPops}}/>}/>
      </Routes>
    </>
  )
}

export default App

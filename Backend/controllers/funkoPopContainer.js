const express = require('express');
const router = express.Router();
const FunkoPop = require('../models/funkoSchema.js');


// CREATE - POST -  /funkoPop
// create new Funko Pop
router.post('/api/funkopops', async (req, res) => {
    // Add a message to test the route on Postman
    // res.json({ message: 'Create Route' });
    try {
        // Create a new funko with the data from req.body
        const createdFunko = await FunkoPop.create(req.body);
        res.status(201).json(createdFunko); // 201 Created
    } catch (error) {
        // Setup for error handling
        res.status(500).json({ error: error.message });
    }
});


// READ - GET - HOME PAGE - /funkoPop
// index for all Funko Pops
router.get('/api/funkopops', async (req, res) => {
    try {
        const foundFunko = await FunkoPop.find();
        res.status(200).json(foundFunko);  // 200 OK
    } catch (error) {
        res.status(500).json({ error: error.message }); // 500 Internal Server Error
    }
});



// READ - GET - SHOW ROUTE- /funkoPop/:funkoId
// show Funko
router.get('/api/funkopops/:funkoId', async (req, res) => {
    try {
        // Add query to find a single Funko Pop
        const foundFunko = await FunkoPop.findById(req.params.funkoId);
        // Add error handling if a funko is not found
        if (!foundFunko) {
            res.status(404);
            throw new Error('Funko Pop not found.');
        }
        res.status(200).json(foundFunko); // 200 OK
    } catch (error) {
        // Add error handling code for 404 errors
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            // Add else statement to handle all other errors
            res.status(500).json({ error: error.message });
        }
    }
});


// DELETE - DELETE - /funkoPop/:funkoId
// delete Funko
router.delete('/api/funkopops/:funkoId', async (req, res) => {
    try {
        const deletedFunko = await FunkoPop.findByIdAndDelete(req.params.funkoId)
        // Add a check for a not found Funko Pop
        if (!deletedFunko) {
            res.status(404);
            throw new Error('Funko Pop not found.');
        }
        res.status(200).json(deletedFunko)
    } catch (error) {
        res.status(404).json({ error: error.message })
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
});


// UPDATE - PUT - /funkoPop/:funkoId
// update Funko
router.put('/api/funkopops/:funkoId', async (req, res) => {
    try {
        // Add query to update a single Funko Pop
        const updatedFunko = await FunkoPop.findByIdAndUpdate(req.params.funkoId, { new: true, runValidators: true });
        // Add a check for a not found Funko Pop
        if (!updatedFunko) {
            res.status(404);
            throw new Error('Funko Pop not found.');
        }
        // Add a JSON response with the updated task
        res.status(200).json(updatedFunko);
    } catch (error) {
        // Add code for errors
        if (res.statusCode === 404) {
            res.json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
});


module.exports = router;
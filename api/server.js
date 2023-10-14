// Import required libraries and modules






// Middleware setup



// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/cars", {
    

}).then(() => console.log("Connected to DB!")).catch(err => console.error);

// Import Car model from the 'models' directory


// Define routes and their handlers

// GET request to retrieve all cars
app.get('/cars', async (req, res) => {
    
    
});

// POST request to create a new car
app.post('/car/new', (req, res) => {
    const car = new Car({
        
        
    });
    car.save();
    res.json(car);
});

// DELETE request to delete a car by its ID
app.delete('/car/delete/:id', async (req, res) => {
    
    
});

// GET request to retrieve all cars sorted by speed in descending order
app.get('/cars/sortCarsBySpeed', async (req, res) => {
    
    
});

// GET request to toggle the 'choose' property of a car by its ID
app.get('/car/choose/:id', async (req, res) => {
    const carId = req.params.id;

    try {
        // Attempt to find the car by ID
        let car = await Car.findById(carId);

        // If the car doesn't exist, create a new entry with the provided ID
        if (!car) {
            car = new Car({
                
                
                
            });
        }

        // Toggle the 'choose' property and save the car
        car.choose = !car.choose;
        await car.save();

        res.json(car);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Start the Express server on port 3001
app.listen(3001, () => console.log("Server is running on port 3001!"));
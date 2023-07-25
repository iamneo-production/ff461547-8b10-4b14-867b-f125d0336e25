import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarAdmin = () => {
  useEffect(()=>{
    document.title = "Car Admin | Travel.com"
},[])
  const [carData, setCarData] = useState([]);
  const [carForm, setCarForm] = useState({
    carid: '',
    carname: '',
    location: '',
    pickUpDate: '',
    no_of_seat: '',
    price: '',
    status: '',
  });
  const [editingCarId, setEditingCarId] = useState(null);

  const fetchCars = () => {
    axios
      .get('/findcar')
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
      });
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/findcar', carForm)
      .then(() => {
        fetchCars();
        // Clear the form fields after successful submission
        setCarForm({
          carid: '',
          carname: '',
          location: '',
          pickUpDate: '',
          no_of_seat: '',
          price: '',
          status: '',
        });
      })
      .catch((error) => {
        console.error('Error posting car data:', error);
      });
  };

  const fetchCarById = (carId) => {
    axios
      .get(`/findcarbyId?carid=${carId}`)
      .then((response) => {
        setCarForm(response.data);
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
      });
  };

  const handleEditCar = (carId) => {
    console.log(carId);
    setEditingCarId(carId);
    fetchCarById(carId);
  };


  const handleEditSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/findcar', carForm)
      .then(() => {
        fetchCars();
        setCarForm({
          carid: '',
          carname: '',
          location: '',
          pickUpDate: '',
          no_of_seat: '',
          price: '',
          status: '',
        });
        setEditingCarId(null);
      })
      .catch((error) => {
        console.error('Error editing car data:', error);
      });
  };
  const handleDeleteCar = (carId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this car? This action cannot be undone.");
    if (confirmDelete) {
      axios
        .delete(`/deletebyCarId?carid=${carId}`)
        .then(() => {
          fetchCars();
        })
        .catch((error) => {
          console.error('Error deleting car data:', error);
        });
    }
  };

  return (
    <div className="container mx-auto my-8">
        <div className="text-center">
        <h1>Car Admin Page</h1>
        <h6>Here Admin Can Able to Alter the Car Details </h6>
        <p>(View,Add,Edit & Delete)</p>
        </div>
      <div className="flex">
        
        {/* Left Side - Add Car Form */}
        <div className="w-1/2 p-4">
          {!editingCarId ? (
            <div className="w-full p-4" style={{ backgroundColor: '#f8b4b4' }}>
           <div>
              <h2 className="text-2xl font-bold mb-4 text-center">ADD CAR DETAILS</h2>
              <form onSubmit={handleSubmit}>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Car Id / Car Number</label>
              <input
                type="text"
                name="carid"
                value={carForm.carid}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
                min="1" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Car Name</label>
              <input
                type="text"
                name="carname"
                value={carForm.carname}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Car Location</label>
              <input
                type="text"
                name="location"
                value={carForm.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Date of Posting</label>
              <input
                type="date"
                name="pickUpDate"
                value={carForm.pickUpDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Number of Seats</label>
              <input
                type="number"
                name="no_of_seat"
                value={carForm.no_of_seat}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
                min="1" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Price / Hour</label>
              <input
                type="number"
                name="price"
                value={carForm.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
                min="1" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Status</label>
              <input
                type="text"
                name="status"
                value={carForm.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div  className="text-center">
             <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                  ADD CAR DETAILS
                </button></div>
              </form>
            </div>
            </div>
          ) : (
            <div className="w-full p-4" style={{ backgroundColor: '#f8b4b4' }}>
            <div>
              <h2 className=" text-center text-2xl font-bold mb-4">EDIT CAR DETAILS</h2>
              <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Car Id / Car Number</label>
              <input
                type="text"
                name="carid"
                value={carForm.carid}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
                min="1" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Car Name</label>
              <input
                type="text"
                name="carname"
                value={carForm.carname}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Car Location</label>
              <input
                type="text"
                name="location"
                value={carForm.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Date of Posting</label>
              <input
                type="date"
                name="pickUpDate"
                value={carForm.pickUpDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Number of Seats</label>
              <input
                type="number"
                name="no_of_seat"
                value={carForm.no_of_seat}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
                min="1" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Price / Hour</label>
              <input
                type="number"
                name="price"
                value={carForm.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
                min="1" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Status</label>
              <input
                type="text"
                name="status"
                value={carForm.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div  className="text-center">
             <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                  SAVE CHANGES
                </button></div>
              </form>
            </div>
            </div>
          )}
        </div>

        {/* Right Side - Display Car Data */}
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">LIST OF CARS</h2>
          <div>
            {carData.map((car) => (
              <div key={car.carid} className="mb-4 border rounded-lg p-2">
                <p><i>Car ID: {car.carid}</i></p>
                <p className="font-bold">Car Name: {car.carname}</p>
                <p>Location: {car.location}</p>
                <p>Available from: {car.pickUpDate}</p>
                <p>Seat: {car.no_of_seat-1}+1</p>
                <p>Price: {car.price}/Hour</p>
                 <p>(Fuel Charge + Rs.15/km after 1 hour)</p>
               
                <p>Status: {car.status}</p>
                 <p>Car Photo:
                <img src={require(`../car_rental/carAssests/img/carList_imgs/${car.carname.toLowerCase().replace(/\s+/g, '')}.jpg`)} alt='Car' className="w-100" />
                </p>
                <button onClick={() => handleEditCar(car.carid)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                  EDIT
                </button>
                <button onClick={() => handleDeleteCar(car.carid)} className="bg-red-500 text-white font-bold py-2 px-4 rounded ml-2">
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAdmin;
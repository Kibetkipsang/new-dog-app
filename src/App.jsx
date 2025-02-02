import React from 'react';
import { useEffect, useState } from 'react';
import DogList from './DogList';
import AddingDog from './AddDog';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [dogs, setDogs] = useState([]);

  
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setDogs((prevDogs) => [...prevDogs, data.message])) 
      .catch((error) => console.error('Error fetching dog image:', error));
  }, []);

  
  const removeDog = (index) => {
    setDogs((prevDogs) => [...prevDogs.slice(0, index), ...prevDogs.slice(index + 1)]);
  };


  const addDog = (imageUrl) => {
    setDogs((prevDogs) => [...prevDogs, imageUrl]);
  };

  
  const updateDog = (index, freshUrl) => {
    setDogs((prevDogs) => [...prevDogs.slice(0, index), freshUrl, ...prevDogs.slice(index + 1)]);
  };

  return (
    <Router>
      <div>
       
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/add">Add Dog</Link>
        </nav>

       
        <Routes>
          <Route
            path="/"
            element={
              <DogList
                dogs={dogs}
                removeDog={removeDog}
                updateDog={updateDog}
              />
            }
          />
          <Route path="/add" element={<AddingDog addDog={addDog} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
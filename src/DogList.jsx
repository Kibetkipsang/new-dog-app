import React from 'react';
import DogImage from './DogImage';

function DogList({dogs, removeDog, updateDog}){

    return(
        <div>
            <h2>Dog List</h2>
            {dogs.length === 0 ? (<p>No dogs Available! Add dog</p>) : 
            dogs.map((dog, index) => (
                <DogImage
                key={index}
                imageUrl={dog}
                onDelete={() => removeDog(index)}
                onUpdate={(freshUrl) => updateDog(index, freshUrl)} 
                
                />))
            }
        </div>
    )
}

export default DogList;
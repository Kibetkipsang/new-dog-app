import React from 'react';
import { useState } from 'react'

function AddingDog({addDog}){

const [imageUrl, setImageUrl] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    if (imageUrl.trim()) { 
      addDog(imageUrl);
      setImageUrl(''); 
    } else {
      alert('Please enter a valid image URL.'); 
    }
  };

    return(
        <div>
            <h2>Add Dog</h2>
            <form onSubmit={handleSubmit} >
            <input 
            type='text' 
            placeholder='Enter Dog Image URL' 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} />
            <button type="submit">Add Dog</button>
            </form>
        </div>
    )

}

export default AddingDog;
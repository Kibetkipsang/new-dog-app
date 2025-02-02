import React from 'react';
import { useState } from 'react';

function DogImage({imageUrl, onDelete, onUpdate}){
const [freshUrl, setFreshUrl] = useState(imageUrl)
const [isUpdating, setIsUpdating] = useState(false)

function handleUpdate(){
    onUpdate(freshUrl)
        setIsUpdating(false)
    
}
    return (
        <div>
            {isUpdating ? (
            <>
            
            <input type='text' value={freshUrl} onChange={(e) => setFreshUrl(e.target.value)} />
            <button onClick={handleUpdate}>Save</button>
            
            </>
            ): 
            (<img src={imageUrl} alt= "Our dog" />)
            }
     <button onClick={() => setIsUpdating(!isUpdating)}>{isUpdating? "cancel" : "Edit"}</button>
     <button onClick={onDelete}>Delete</button>
        </div>
    )
}




export default DogImage;
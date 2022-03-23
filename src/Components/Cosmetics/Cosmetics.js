import React, { useEffect, useState } from 'react';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics,setCosmetics]=useState([])
  useEffect( ()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setCosmetics(data))
  },[])
  
    return (
        <div>
            {
                cosmetics.map(cosmetic => <ShowCosmeticsDetails key={cosmetic.id} name={cosmetic.name} price={cosmetic.price} id={cosmetic.id}></ShowCosmeticsDetails> )
            }
            
        </div>
    );
};
const ShowCosmeticsDetails=(props)=>{
    const id=props.id
    const addToCart = (id) =>{
        console.log(id);
    }
    

    return(
        <div className='cosmeticsStyle'>
        

            <h1>Name: {props.name}</h1>
            <p> Price: {props.price} </p>
            <p>Id : {props.id}</p>
            <button onClick={() => addToCart(id)}>Click</button>
        
        </div>
    )
}

export default Cosmetics;
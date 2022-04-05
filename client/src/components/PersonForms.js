import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [barcode, setBarcode] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/item', {
            name,
            type,
            desc,
            barcode
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label for="cars">Choose a category:</label>
                    <select onChange={(e)=>setType(e.target.value)} value={type}>
                        <option value=""></option>
                        <option value="Alcoholic drinks">Alcoholic drinks</option>
                        <option value="Beverages">Beverages (Not Alcoholic)</option>
                        <option value="Food">Food</option>
                        <option value="Personal Care">Personal Care</option>
                    </select>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <p>
                <label>Barcode</label><br/>
                <input type="text" onChange={(e)=>setBarcode(e.target.value)} value={barcode}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';

const ItemDetail = (props) => {

    const [item, setItem] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/item/${props.barcode}`)
        .then(res=>setItem(res.data))
        .catch(err=>console.log("Error: ", err))
    },[])


    return (
        <div className='itemListContainer displayF'>
            <h1>Item List</h1>
                <div>
                    <h2>
                            {item.name}
                    </h2>
                    <p> 
                            {item.type}
                    </p>
                    <p>
                        {item.barcode}
                    </p>
                    <p>
                        {item._id}
                    </p>
                    </div>
                </div>
    )
}

export default ItemDetail
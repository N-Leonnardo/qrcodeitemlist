import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Qrcodescanner from '../components/Qrcodescanner';
import ItemList from '../components/ItemList';
import Navbar from '../components/Navbar'

import '../styles/views/Admin.css'

const Admin = () => {
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/item')
        .then(res=>setItem(res.data))
        .catch(err=>console.log("Error: ", err))
    },[])


    return(
        <div className='admincss'>
            <Navbar/>
            <div className='containers-Display'>
                <Qrcodescanner />
                <ItemList item={item}/>
            </div>
        </div>
    )
}

export default Admin
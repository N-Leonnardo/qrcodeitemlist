import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Qrcodescanner from '../components/Qrcodescanner';
import ItemList from '../components/ItemList';
import '../styles/Main.css'

const Main = () => {
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/item')
        .then(res=>setItem(res.data))
        .catch(err=>console.log("Error: ", err))
    },[])


    return(
        <div className='maincss'>
            <Qrcodescanner />
            <ItemList item={item}/>
        </div>
    )
}

export default Main
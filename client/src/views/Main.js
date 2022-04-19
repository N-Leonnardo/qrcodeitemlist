import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'
import ItemShowcase from '../components/ItemShowcase';
import '../styles/views/Main.css'


const Main = () => {
    
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
    axios.get('http://localhost:8000/api/item')
    .then(res=>setItem(res.data))
    .catch(err=>console.log("Error: ", err))
    },[])


    return(
        <div className='maincss'>
            <Navbar/>
            <ItemShowcase item={item} />
        </div>
    )
}

export default Main
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core';
import '../styles/Qrcodescanner.css';
import axios from 'axios';
import BarcodeScannerComponent from "react-qr-barcode-scanner";


function Qrcodescanner() {
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
        window.location.reload(false);
}

  return (
    <div>
          <div className='displayf'>
              
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
                <p>
                    {barcode}
                </p>
            </p>
            <input type="submit"/>
        </form>

                <div>
                <BarcodeScannerComponent
                    width={500}
                    height={400}
                    onUpdate={(err, result) => {
                      if (result) setBarcode(result.text);
                    }}
                  />
                  <p>{barcode}</p>

                </div>
                <div>


                </div>
          </div>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    conatiner: {
      marginTop: 10
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));
export default Qrcodescanner;

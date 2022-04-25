import React, {useState} from 'react';
import axios from 'axios';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import '../styles/components/Qrcodescanner.css'


function Qrcodescanner() {
  const [name, setName] = useState(""); 
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [barcode, setBarcode] = useState("");
  const [img, setImg] = useState("")




  const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/item', {
        name,
        type,
        desc,
        barcode,
        img
    })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        window.location.reload(false);
}

  return (
    <div>
          <div className='containerForm displayf'>
            <h1>Scan your item here</h1>
              
                <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p className='flexvertical' >
                <label for="category">Choose a category:</label>
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
                <label>Image</label><br/>
                <input type="text" onChange={(e)=>setImg(e.target.value)} value={img}/>
                <img 
                className='img-preview'
                src={img} />
            </p>
            <p>
                <label>Barcode</label><br/>
                <p>
                    {barcode}
                </p>
            </p>

                <div className='scanner'>
                <BarcodeScannerComponent
                    width={300}
                    height={400}
                    onUpdate={(err, result) => {
                      if (result) setBarcode(result.text);
                    }}
                  />
                  <p>{barcode}</p>

                </div>
                    <input className='submitbtn' type="submit"/>
                </form>
                <div>


                </div>
          </div>

    </div>
  );
}

;
export default Qrcodescanner;

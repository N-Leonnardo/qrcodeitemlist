import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import ItemDetail from './ItemDetail';

const ItemShowcase = (props) => {
    const [barcode, setBarcode] = useState("")
    


    return (
        <div className='displayF'>
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
            <div>
                <ItemDetail barcode={barcode}/>
            </div>

        </div>
    )
}
export default ItemShowcase
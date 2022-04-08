import React from 'react';
import '../styles/ItemList.css'

export default props => {
    return (
        <div>
            <h1>Item List</h1>
            <table className='greyGridTable'>
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Type
                        </td>
                        <td>
                            Barcode
                        </td>
                    </tr>
                </thead>
                <tbody>
                        {props.item.map((item, index)=>(
                    <tr>
                    <td>
                        <h2>
                            {item.name}
                        </h2>

                    </td>
                    <td>
                        <h4>
                            {item.type}
                        </h4>
                    </td>
                    <td>
                        {item.barcode}
                    </td>
                    </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
import React from 'react';
import '../styles/components/ItemList.css'

const ItemList = (props) => {
    return (
        <div className='itemListContainer displayF'>
            <h1>Item List</h1>
            <table className='steelBlueCols'>
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
                        <td>
                            Actions
                        </td>
                        <td>
                            Image
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
                    <td>
                        {item._id}
                    </td>
                    <td>
                    <img src={item.img} alt="Girl in a jacket" width="50" height="50"/>
                    </td>
                    </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default ItemList
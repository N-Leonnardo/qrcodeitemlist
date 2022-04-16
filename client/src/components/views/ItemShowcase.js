import React from 'react';
import '../../styles/components/ItemShowcase.css'


const ItemShowcase = (props) => {
    return (
        <div className='gridItem'>
                        {props.item.map((item, index)=>(
                    <div className='item-box'>

                    <img className='product-img' src={item.img}/>
                    <h1>
                            {item.name}
                    </h1>
                    <p>
                            {item.type}
                    </p>
                            </div>
                        ))}
        </div>
    )
}
export default ItemShowcase
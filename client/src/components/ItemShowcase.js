import React from 'react';


const ItemShowcase = (props) => {
    return (
        <div className='displayF'>
        <div className='gridItem'>
                        {props.item.map((item, index)=>(
                    <div className='item-box displayF'>

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
        </div>
    )
}
export default ItemShowcase
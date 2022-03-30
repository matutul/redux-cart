import React from 'react';

const Product = (props) => {
    const {name, id} = props.product;
    const {addToCart} = props;
    return (
        <div style={{width: '300px', margin: '10px', backgroundColor: '#228896', padding: '20px', borderRadius: '10px'}}>
            <p style={{color: '#f5f5f5', fontSize: '20px', marginTop: '0'}}>Product Name: {name}</p>
            <button onClick={() => addToCart(id)} style={{ backgroundColor: '#A9C52F', color: 'white', borderRadius: '20px', border: 'none', padding: '8px 25px', fontSize: '18px'}}>Add to Cart</button>
        </div>
    );
};

export default Product;
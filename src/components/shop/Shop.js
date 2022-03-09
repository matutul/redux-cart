import React from 'react';
import Product from '../product/Product';

const Shop = () => {
    const products = [
        { name: "Lenovo Laptop", id: 1 },
        { name: "Asus Laptop", id: 2 },
        { name: "Dell Laptop", id: 3 },
        { name: "HP Laptop", id: 4 },
        { name: "Doel Laptop", id: 5 },
        { name: "Sony Laptop", id: 6 }
    ];
    products.map(pd => console.log(pd.name));
    return (
        <div>
            <h1>This is Shop</h1>
            <div className="productList" style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    products.map(pd => <Product key={pd.id} product={pd}></Product>)
                }
            </div>

        </div>
    );
};

export default Shop;
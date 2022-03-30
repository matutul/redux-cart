import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../product/Product';

const Shop = (props) => {
    const { products, addToCart } = props;
    return (
        <div>
            <h1>This is Shop</h1>
            <div className="productList" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    products.map(pd => <Product key={pd.id} product={pd} addToCart={addToCart}></Product>)
                }
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return ({
        cart: state.cart,
        products: state.products
    })
}

const mapDispatchToProps = {
        addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
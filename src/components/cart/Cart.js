import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div style={{ color: '#f5f5f5' }}>
            <span style={{ fontSize: '20px' }}>This is cart</span>
            <ul>
                {
                    cart.map(id => <li>{id}<span>  </span><button onClick={() => removeFromCart(id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return ({
        cart: state.cart
    })
}
const mapDispatchToProps = {
    removeFromCart: removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
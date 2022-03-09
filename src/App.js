import './App.css';
import Cart from './components/cart/Cart';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div>
      <div className="topbar" style={{ backgroundColor: '#283739', padding: '40px 0' }}>
        <div className="cart" style={{width: '80%', margin: 'auto'}}>
          <Cart></Cart>
        </div>
      </div>
      <div className="mainbody" style={{ width: '80%', margin: "auto" }}>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;

import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import ShoppingPage from './Pages/Shop/ShoppingPage';
import Footer from './Pages/Home/Footer';
import DetailPage from './Pages/Cart/DetailPage';
import NavBarTop from './Components/NavBarTop';
import CartItem from './Pages/ShopingCart/CartItem';

function App() {
  return (
    <div className="App">
      <NavBarTop/>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shoppingpage' element={<ShoppingPage/>}/>
        <Route path='/detailpage/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartItem/>}/>
      </Routes>
     
      <Footer/>
      {/* <DisplayProducts/> */}
    </div>
  );
} 

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './screens/AddProduct';
import ShowProducts from './screens/ShowProduct';
import EditProduct from './screens/EditProduct';
import ProductDetail from './screens/ProductDetail';
import Home from './screens/Home';
import NavBar from './screens/Navbar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route exact path='/addProduct' element={<AddProduct />} />
        <Route exact path='/products' element={<ShowProducts />} />
        <Route exact path='/product/edit/:id' element={<EditProduct />} />
        <Route exact path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
import React from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Store of My Products</h1>
                <Routes>
                    <Route path='/' element={<ProductList />} />
                    <Route path='/product/:id' element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
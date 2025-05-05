import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products').then(res => res.json()).then(data => setProducts(data));
    }, []);

    return (<div> {
        products.map(product => (<div key={
                product.id
            }
            style={
                {margin: '20px'}
        }>
            <Link to={
                `/product/${
                    product.id
                }`
            }>
                <img src={
                        product.image
                    }
                    alt={
                        product.name
                    }
                    width="200"/>
                <h3> {
                    product.name
                }</h3>
                <p>price: ${
                    product.price
                }</p>

            </Link>
        </div>))
    } </div>);

}

export default ProductList;

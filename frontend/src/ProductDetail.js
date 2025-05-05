import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function ProductDetail() {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/products/${id}`).then(res => res.json()).then(data => setProduct(data));
    }, [id]);

    if (!product) 
        return <div> Loading(please verify if ID is correct) 
            ...</div>;
        

        return (<div>
            <h2> {
                product.name
            }</h2>
            <img src={
                    product.image
                }
                alt={
                    product.name
                }
                with="300"/>
            <p> {
                product.description
            }</p>
            <h4>Price: ${
                product.price
            }</h4>
            <h4>comments</h4>
            <ul> {
                product.comments.map((c, i) => (<li key={i}>
                    <strong> {
                        c.user
                    }</strong>: {
                    c.text
                }
                    (⭐ {
                    c.rating
                })
                </li>))
            } </ul>
        </div>);
    }


export default ProductDetail;

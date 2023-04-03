import React from 'react';
import products from '../data';
import './products.css';
import cart from "../ressources/shopingcart.svg"

const Products = () => {
    return (
        <section className="products">
            <h2 className="products__title">Our Plushis</h2>
            <div className="products__grid">
                {products.map((product) => (
                    <div data-aos="fade-up" data-aos-duration="1000" key={product.id} className="product-card">
                        <img src={`/images/${product.image}`} alt={product.name} className="product-card__image" />
                        <h3 className="product-card__title">{product.name}</h3>
                        <p className="product-card__description">{product.description}</p>
                        <p className="product-card__price">${product.price}</p>
                        <img className="product-card__kart" src={cart} alt="kart"></img>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
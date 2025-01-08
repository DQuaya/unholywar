import React, { useState } from 'react';
import ProductTop from '../ProductTop/ProductTop';

const ShirtsData = [
    {
      id: 1,
      image: "https://i.ibb.co/mBnJRV2/fimg-12.png",
      name: "UnHolyWar",
      price: { original: "$350.00", discounted: "$250.00" },
      rating: 4,
      category: "Sweaters",
      discount: "25% off",
    },
    {
      id: 2,
      image: "https://i.ibb.co/Wpbm0VR/IMG-1670-2.png",
      name: "UnHolyWar",
      price: { original: "$350.00", discounted: "$250.00" },
      rating: 4,
      category: "Sweaters",
    },
    {
        id: 3,
        image: "https://i.ibb.co/dQNt01c/IMG-2728-2.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 4,
        image: "https://i.ibb.co/Pwq4z8Y/IMG-4501-2.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 5,
        image: "https://i.ibb.co/8BPJY6H/IMG-4599-2.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 6,
        image: "https://i.ibb.co/FxSYhGm/IMG-4626-2.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 7,
        image: "https://i.ibb.co/4J6tDP5/IMG-4627-2.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 8,
        image: "https://i.ibb.co/jkzYP3P/fimg-10.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 9,
        image: "https://i.ibb.co/1Td4FyF/IMG-1197.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 10,
        image: "https://i.ibb.co/Z8RFDn4/fimg-9.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 11,
        image: "https://i.ibb.co/QvgnnLV/IMG-1198.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 12,
        image: "https://i.ibb.co/cb4z9jb/fimg-15.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 13,
        image: "https://i.ibb.co/FqJWTPL/IMG-2422.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 14,
        image: "https://i.ibb.co/184cz5g/new1.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 15,
        image: "https://i.ibb.co/L8z1zsQ/new2.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 16,
        image: "https://i.ibb.co/FBbzBk0/new3.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 17,
        image: "https://i.ibb.co/ZhnxM7x/new4.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
      {
        id: 18,
        image: "https://i.ibb.co/pxpmLYX/new5.png",
        name: "UnHolyWar",
        price: { original: "$350.00", discounted: "$250.00" },
        rating: 4,
        category: "Sweaters",
      },
    // Add other shirt items here...
  ];
function Sweaters({ onAddToCart }) {

   
  return (
    <>
    <ProductTop/>
    <section className="product" id="product">
      <h1 className="heading">
        Latest <span>Products</span>
      </h1>
      <div className="box-container">
        {ShirtsData.map((shirt) => (
          <div className="box" key={shirt.id}>
            <div className="content">
              <img src={shirt.image} alt={shirt.name} />
              <h3>{shirt.name}<br/><span>{shirt.category}</span></h3>
              <div className="price">
                {shirt.price.discounted} <span>{shirt.price.original}</span>
              </div>
              <div className="stars">
                {Array.from({ length: shirt.rating }).map((_, index) => (
                  <i className="fa fa-star" key={index}></i>
                ))}
              </div>
              <button className="btn" onClick={() => onAddToCart(shirt)}>
                BUY
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
)
}

export default Sweaters

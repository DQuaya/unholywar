import React from 'react'
import './Shirts.css';
import ProductTop from '../ProductTop/ProductTop';

const ShirtsData = [
    {
      id: 1,
      image: "https://i.ibb.co/xJvXPrS/ds-img1.png",
      name: "UnHolyWar",
      price: { original: "$250.00", discounted: "$200.00" },
      rating: 4,
      category: "Shirts",
      discount: "25% off",
    },
    {
      id: 2,
      image: "https://i.ibb.co/6ydZdSs/ds-img3.png",
      name: "UnHolyWar",
      price: { original: "$250.00", discounted: "$200.00" },
      rating: 4,
      category: "Shirts",
    },
    // {
    //     id: 3,
    //     image: "https://i.ibb.co/ZJwpggR/IMG-1.png",
    //     name: "UnHolyWar",
    //     price: { original: "$250.00", discounted: "$200.00" },
    //     rating: 4,
    //     category: "Shirts",
    //   },
      {
        id: 4,
        image: "https://i.ibb.co/DCGSD3m/IMG-1355-2.png",
        name: "UnHolyWar",
        price: { original: "$250.00", discounted: "$200.00" },
        rating: 4,
        category: "Shirts",
      },
      {
        id: 5,
        image: "https://i.ibb.co/3sP7H9S/IMG-1357-3-copy.png",
        name: "UnHolyWar",
        price: { original: "$250.00", discounted: "$200.00" },
        rating: 4,
        category: "Shirts",
      },
      {
        id: 6,
        image: "https://i.ibb.co/Kqyr4tC/IMG-1664-2.png",
        name: "UnHolyWar",
        price: { original: "$250.00", discounted: "$200.00" },
        rating: 4,
        category: "Shirts",
      },
      {
        id: 7,
        image: "https://i.ibb.co/9G96Mz4/IMG-1665-2.png",
        name: "UnHolyWar",
        price: { original: "$250.00", discounted: "$200.00" },
        rating: 4,
        category: "Shirts",
      },
      {
        id: 8,
        image: "https://i.ibb.co/XbD3XFK/simg-10.png",
        name: "UnHolyWar",
        price: { original: "$250.00", discounted: "$200.00" },
        rating: 4,
        category: "Shirts",
      },
      {
        id: 9,
        image: "https://i.ibb.co/hDnBXmg/simg-11.png",
        name: "UnHolyWar",
        price: { original: "$250.00", discounted: "$200.00" },
        rating: 4,
        category: "Shirts",
      },
      {
        id: 10,
        image: "https://i.ibb.co/Dbc7WbQ/simg-8.png",
        name: "UnHolyWar",
        price: { original: "$250.00", discounted: "$200.00" },
        rating: 4,
        category: "Shirts",
      },
      // {
      //   id: 11,
      //   image: "https://i.ibb.co/pjGMGLv/IMG-1541.png",
      //   name: "UnHolyWar",
      //   price: { original: "$250.00", discounted: "$200.00" },
      //   rating: 4,
      //   category: "Shirts",
      // },
      // {
      //   id: 12,
      //   image: "https://i.ibb.co/pjGMGLv/IMG-1641.png",
      //   name: "UnHolyWar",
      //   price: { original: "$250.00", discounted: "$200.00" },
      //   rating: 4,
      //   category: "Shirts",
      // },
    // Add other shirt items here...
  ];
function Shirts({ onAddToCart }) {
  return (
    <>
    <ProductTop/>
    <section className="product" id="product">
      <h1 className="heading">
        Latest <span>Products</span>
      </h1>
      <div className="box-container">
        {ShirtsData.length > 0 ? (
          ShirtsData.map((shirt) => (
            <div className="box" key={shirt.id}>
              <div className="content">
                <img src={shirt.image} alt={shirt.name} />
                <h3>
                  {shirt.name}
                  <br />
                  <span>{shirt.category}</span>
                </h3>
                <div className="price">
                  {shirt.price.discounted} <span>{shirt.price.original}</span>
                </div>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i
                      className={`fa ${index < shirt.rating ? "fa-star" : "fa-star-o"}`}
                      key={index}
                    ></i>
                  ))}
                </div>
                <button onClick={() => onAddToCart(shirt)} className="btn">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No shirts available at the moment.</p>
        )}
      </div>
    </section>
    </>
  )
}

export default Shirts

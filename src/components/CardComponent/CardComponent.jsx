import React from 'react';

const CardComponent = ({ item }) => {
    const { id, image, name, years, products, likes } = item;
    return (
        <div className="card bg-base-100 h-fit shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="logo"
                    className="w-full h-44 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{name}</h2>
                <div>
                    <p>Years of Operation: {years}</p>
                    <p>Number of Products: {products}</p>
                    <p>Likes: {likes}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Products</button>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
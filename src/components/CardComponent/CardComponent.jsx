import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CardComponent = ({ item }) => {
    const { dark, setDark } = useContext(AuthContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#444444',
    };
    
    const { _id, image,businessName, years, products, likes } = item;
    return (
        <div style={containerStyle} className="card bg-base-100 h-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="logo"
                    className="w-full h-44 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{businessName}</h2>
                <div>
                    <p>Years of Operation: {years}</p>
                    <p>Number of Products: {products}</p>
                    <p>Likes: {likes}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/businesses/${_id}`}><button className="btn btn-primary">View Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const ProductCard = ({ item }) => {
    const { dark, setDark } = useContext(AuthContext);

    const handleDark = () => {
        setDark(!dark);
        console.log(dark);
    }

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#f5f5f5' : '#444444',
    };
    const { _id, productName, productImage, materialsUsed, craftingMethod, rating, isFavorite, businessName } = item;


    return (
        <div style={containerStyle} className="card bg-base-100 h-96 shadow-xl">
            <figure>
                <img
                    src={productImage}
                    alt="Product Image"
                    className="w-full h-44 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{productName}</h2>
                <div>
                    <p><span className='font-semibold'>Crafting Method:</span> {craftingMethod}</p>
                    <p><span className='font-semibold'>Materials Used:</span> {materialsUsed}</p>
                    <p className='flex'>
                       <span className='font-semibold'>Rating:</span> <Rating
                            className="ml-2"
                            style={{ maxWidth: 80 }}
                            value={rating}
                            readOnly
                        />
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        {isFavorite ? 'Unfavorite' : 'Favorite'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

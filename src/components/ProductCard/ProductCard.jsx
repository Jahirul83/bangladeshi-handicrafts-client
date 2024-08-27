

const ProductCard = ({ item }) => {
    const { _id, productName, productImage, materialsUsed, craftingMethod, rating, isFavorite, businessName } = item;
    return (
        <div className="card bg-base-100 h-96 shadow-xl">
            <figure>
                <img
                    src={productImage}
                    alt="logo"
                    className="w-full h-44 object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title uppercase">{productName}</h2>
                <div>
                    <p>Years of Operation: {craftingMethod}</p>
                    <p>Number of Products: {materialsUsed}</p>
                    <p>Likes: {rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
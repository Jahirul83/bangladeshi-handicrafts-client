import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import ProductCard from '../../../../components/ProductCard/ProductCard';

const BusinessDetails = () => {

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const [Products, setProducts] = useState(null);
    const businessDetails = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        axiosPublic.get('/products')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const { _id, image, businessName, years, products, likes } = businessDetails;

    return (
        <div>
            <div className="mb-20">
                <div className="relative min-h-screen my-14">
                    <img className="w-screen h-screen" src={image} alt="" />
                    <div className="absolute bottom-2 -mt-10 bg-opacity-50 bg-slate-900 p-6 w-full">

                    </div>
                </div>
                <div className="my-12">
                    <h2 className="text-3xl">{businessName}</h2>
                    <p className="my-3">{years}</p>
                    <p className="my-3">{products}</p>
                    <p className="my-3">{likes}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    Products.map(item =>
                        <ProductCard
                        key={item.id}
                        item={item}
                        ></ProductCard>
                    )
                }
                {/* {console.log(Object.keys(Products[0]))} */}
            </div>

        </div>
    );
};

export default BusinessDetails;
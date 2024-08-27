import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { AiFillLike } from 'react-icons/ai';
import { AuthContext } from '../../../../providers/AuthProvider';

const BusinessDetails = () => {

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const [Products, setProducts] = useState(null);
    const businessDetails = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { dark, setDark } = useContext(AuthContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };



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
            <div style={containerStyle} className="mb-3">
                <div className="relative min-h-screen my-14">
                    <img className="w-screen h-screen" src={image} alt="" />
                    <div className="absolute bottom-2 -mt-10 bg-opacity-50 bg-slate-900 p-6 w-full">

                    </div>
                </div>
                <div className="p-6">
                    <h2 className="text-3xl">{businessName}</h2>
                    <p className="mt-3">we are operating our business {years} years</p>
                    <p className="mt-3"> we have more then {products} product</p>
                    <p className="flex gap-2 mt-3 justify-start items-center"><AiFillLike /> {likes}</p>
                </div>
            </div>
            <div style={containerStyle}>
                <SectionTitle heading={businessName} subHeading={"Our Products"}></SectionTitle>


                <div style={containerStyle} className="grid grid-cols-1 md:grid-cols-4 gap-4 my-3">
                    {
                        Products.map(item =>
                            <ProductCard
                                key={item.id}
                                item={item}
                            ></ProductCard>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default BusinessDetails;
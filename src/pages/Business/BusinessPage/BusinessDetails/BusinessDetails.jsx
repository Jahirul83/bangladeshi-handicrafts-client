import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const BusinessDetails = () => {

    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const [businessDetails, setBusinessDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data using the custom axios instance
        axiosPublic.get(`/businesses/${id}`)
            .then((response) => {
                setBusinessDetails(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id, axiosPublic]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const { _id, image, businessName, years, products, likes } = businessDetails;

    return (
        <div>
        </div>
    );
};

export default BusinessDetails;
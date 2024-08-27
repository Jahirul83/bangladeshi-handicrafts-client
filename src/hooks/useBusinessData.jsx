import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useBusinessData = () => {

    const [business, setBusiness] = useState([]);
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();


    
    useEffect(()=>{
        axiosPublic.get('/businesses')
        .then(res => {
            setBusiness(res.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching businesses:', error);
            setLoading(false);
        });
    },[axiosPublic])
    return [business,loading]
};

export default useBusinessData;
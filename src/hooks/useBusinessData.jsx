import React, { useEffect, useState } from 'react';

const useBusinessData = () => {

    const [business, setBusiness] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/businesses')
        .then(res => res.json())
        .then(data => {
            setBusiness(data);
            setLoading(false);
            // console.log(business);
        })
    },[])
    return [business,loading]
};

export default useBusinessData;
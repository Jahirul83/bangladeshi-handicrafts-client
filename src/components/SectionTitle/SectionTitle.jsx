import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-4/6 text-center my-4">
            <h3 className="text-2xl uppercase py-4 text-green-700">{heading}</h3>
            <p className="text-red-700 mb-2 text-lg border-b-4 border-red-700 pb-3">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;
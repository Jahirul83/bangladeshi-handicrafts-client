import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-4/6 text-center my-8">
            <h3 className="text-2xl uppercase py-4">{heading}</h3>
            <p className="text-orange-700 mb-2 text-lg">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;
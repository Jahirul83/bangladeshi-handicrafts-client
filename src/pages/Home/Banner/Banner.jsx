import React from 'react';
import banner1 from '../../../assets/banner1.jpeg';

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${banner1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold uppercase">Welcome to Bangladeshi Handicrafts!</h1>
                        <p className="mb-5">
                            Explore the finest handcrafted goods from Bangladesh. This month, we feature <strong>Artisan Creations</strong>, known for their exquisite handwoven textiles and bamboo crafts.
                        </p>
                        <button className="btn btn-primary uppercase">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

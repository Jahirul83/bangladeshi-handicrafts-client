import { useContext } from 'react';
import person from '../../../assets/banner3.jpg';
import parts from '../../../assets/banner4.jpg';
import { AuthContext } from '../../../providers/AuthProvider';

const About = () => {
    const { dark, setDark } = useContext(AuthContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };
    return (
        <div style={containerStyle} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        src={person}
                        className="w-3/4 rounded-lg shadow-2xl"
                        alt="Person crafting"
                    />
                    <img
                        src={parts}
                        className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
                        alt="Handicraft materials"
                    />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className="text-3xl text-orange-500 font-bold">History of Handicrafts in Bangladesh</h3>
                    <h1 className="text-5xl font-bold">A Legacy of Tradition and Craftsmanship</h1>
                    <p className="py-6">
                        Handicrafts in Bangladesh have a deep-rooted history that dates back centuries. From the vibrant streets of Dhaka to the rural villages scattered across the country, artisans have perfected their skills, creating a diverse range of crafts that reflect the cultural and historical heritage of the region. Each craft embodies a unique story, preserving the techniques and traditions passed down from generation to generation.
                    </p>
                    <p className="py-6">
                        The handicraft sector in Bangladesh is not just about creating beautiful objects; it's about sustaining a way of life and a cultural identity. From traditional nakshi kantha embroidery to terracotta pottery, each piece reflects the rich tapestry of Bangladeshi history, blending influences from various ethnic groups, religions, and foreign traders who have shaped our cultural landscape over the centuries.
                    </p>
                    <p className="py-6">
                        Today, Bangladeshi handicrafts continue to thrive, celebrated both domestically and internationally for their quality and craftsmanship. Our mission is to honor this heritage by supporting our artisans and bringing their stories and skills to a global audience.
                    </p>
                    <button className="btn text-white btn-primary">Learn More About Our Heritage</button>
                </div>

            </div>
        </div>
    );
};

export default About;

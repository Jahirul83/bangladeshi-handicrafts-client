import { useContext } from "react";
import Banner from "../Banner/Banner";
import BusinessSection from "../BusinessSection/BusinessSection";
import { AuthContext } from "../../../providers/AuthProvider";


const Home = () => {
    const { dark, setDark } = useContext(AuthContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };
    return (
        <div style={containerStyle}>
            <Banner></Banner>
            <BusinessSection></BusinessSection>
        </div>
    );
};

export default Home;
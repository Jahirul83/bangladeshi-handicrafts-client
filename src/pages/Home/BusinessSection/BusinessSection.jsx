import { useContext } from "react";
import CardComponent from "../../../components/CardComponent/CardComponent";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useBusinessData from "../../../hooks/useBusinessData";
import { AuthContext } from "../../../providers/AuthProvider";

const BusinessSection = () => {
    const [business] = useBusinessData();
    const { dark, setDark } = useContext(AuthContext);

    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: dark ? '#ffffff' : '#333333',
    };

    return (
        <div style={containerStyle} className="p-5">
            <SectionTitle
            heading={"Featured Handicraft Businesses"}
            subHeading={"Explore the unique craftsmanship of our local artisans"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    business.map(item =>
                        <CardComponent
                        key={item.id}
                        item={item}
                        ></CardComponent>
                    )
                }
            </div>
        </div>
    );
};

export default BusinessSection;
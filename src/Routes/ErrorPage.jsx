import { NavLink } from "react-router-dom";
import errorImg from "../assets/404.gif"


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <img src={errorImg} alt="" />
                <h2 className="text-6xl text-center">ERROR</h2>
                <p className="text-2xl mb-5 text-center uppercase">Page Not Found</p>
                <div className="flex justify-center items-center">
                    <NavLink to="/"><button className="btn btn-primary uppercase">Go back to home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
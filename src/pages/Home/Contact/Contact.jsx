
import { useContext } from 'react';
import contactPic from '../../../assets/undraw_People_search_re_5rre.png'
import { AuthContext } from '../../../providers/AuthProvider';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';




const Contact = () => {
    const { dark } = useContext(AuthContext);
    const containerStyle = {
        backgroundColor: dark ? '#333333' : '#ffffff',
        color: '#333333',
    };



    return (
        <div>
            <SectionTitle heading={"Contact us"} subHeading={"Send Your Email"}></SectionTitle>
            <div style={containerStyle} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={contactPic} className='max-w-sm w-1/2 md:w-full' />
                    <div>
                        <form className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-center font-semibold text-3xl">Contact Us</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <label className="input-group">
                                        <span>Name</span>
                                        <input type="text" placeholder="Your name" className='input w-full' name="from_name" required />
                                    </label>
                                    <label className="input-group">
                                        <span>Email</span>
                                        <input type="text" placeholder="info@site.com" className='input w-full' name="user_email" required />
                                    </label>
                                </div>
                                <textarea className="textarea textarea-ghost border-inherit" placeholder="message" name="message"></textarea>
                                <div className="card-actions justify-end">
                                    <input type="submit" placeholder="Send" className='btn btn-primary' required />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
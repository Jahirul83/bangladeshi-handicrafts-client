import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import LoginImg from '../../assets/undraw_Login_re_4vu2.png'

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    const handleGoogleLogin = () => {
        SignInWithGoogle()
            .then((result) => {
                console.log(result?.user);
                swal("Good job!", "You clicked the button!", "success");
                navigate(location?.state ? location.state : '/');
            }).catch((err) => {
                console.error(err);
            });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <img className='w-full h-96 py-6 hidden sm:block' src={LoginImg} alt="" />
                    </div>
                    <div className="card-body bg-green-300 rounded-lg">
                        <h2 className="text-4xl text-center font-bold uppercase">Login</h2>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                            <p className="text-center">or <br />
                                <button onClick={handleGoogleLogin} className="btn btn-block"><FcGoogle></FcGoogle>Google</button>
                            </p>
                            <p>if You do not have an account <Link className="btn btn-link" to='/register'>Register</Link></p>
                            {/* {
                                error && <p className="text-red-600">{error.message}</p>
                            } */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;
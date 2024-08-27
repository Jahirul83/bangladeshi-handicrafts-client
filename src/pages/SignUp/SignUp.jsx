import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import signUpImg from '../../assets/undraw_Sign_up_n6im.png'


const SignUp = () => {


  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();



  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user created successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
      })
  }




  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold uppercase">Sign Up now!</h1>
            <img className='w-full h-96 py-6 hidden sm:block' src={signUpImg} alt="" />
          </div>
          <div className="card-body shrink-0 w-full max-w-sm shadow-2xl bg-green-300 rounded-lg">
            <h2 className="text-4xl text-center font-bold uppercase">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                })}
                  name="password" placeholder="password" className="input input-bordered" />

                {errors.password?.type === 'required' && <p className="text-red-600">password is required</p>}

                {errors.password?.type === 'minLength' && <p className="text-red-600">password must be 6 character</p>}

                {errors.password?.type === 'maxLength' && <p className="text-red-600">password must be less then 20 character</p>}

                {errors.password?.type === 'pattern' && <p className="text-red-600">password must have 1 uppercase 1 lowercase and special characters</p>}



                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
                {/* <button className="btn btn-primary">Sign Up</button> */}
              </div>
            </form>
            <p className="px-6"><small>Already have an account <Link className="btn btn-link" to="/login">Login</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
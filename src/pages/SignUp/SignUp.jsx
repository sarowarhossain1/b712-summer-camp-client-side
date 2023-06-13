import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import signUp from '../../assets/cover/signUp.jpg'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'


const SignUp = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
         const saveUser = {name: data.name, email: data.email}
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
          .then(res => res.json())
          .then(data =>{
            if(data.insertedId){
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'user Create Successfully.',
                showConfirmButton: false,
                timer: 1500
              })   
                navigate('/');
            }
          })
        })
        .catch(error =>console.log(error))
    })
  }

    return (
        <>
         <Helmet>
                <title>Unick | Sign Up</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200 login-background gap-12 container-img ">
        <div className="hero-content flex-col md:w-2/4 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <img className='h-[500px]' src={signUp} alt="" />
          </div>
          <div className="card  md:w-full max-w-sm shadow-2xl bg-base-100">
             <h3 className='text-center mt-5 text-orange-400 font-medium'>SignUp</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name",  { required: true })} name="name"  placeholder="Name" className="input input-bordered" />
                {errors.name && <span className='text-red-400'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL",  { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className='text-red-400'>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                {errors.email && <span className='text-red-400'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true,
                   minLength: 6,
                    maxLength: 20,
                    pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ 
                     })} name="password" placeholder="Password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className='text-red-600'>Password must be 6 characters</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be less then 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one uppercase, one lower case, one number and one special characters</p>}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="SigUp" />
              </div>
            </form>
            <p><small className=' text-center text-orange-400 cursor-pointer p-12 font-medium '>Already registered?  <Link to="/login">Go to log in</Link></small></p>
          </div>
        </div>
      </div>
        </>
    );
};

export default SignUp;
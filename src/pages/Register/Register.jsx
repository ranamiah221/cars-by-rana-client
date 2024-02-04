import { Link } from "react-router-dom";
import register from '../../assets/images/login/login.svg' 
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";

const Register = () => {
  const {createUser}=useContext(AuthContext);
  const handleSignUp=(event)=>{
    event.preventDefault();
    const form = event.target;
    // const name= form.name.value;
    // const photo=form.photoUrl.value;
    const email=form.email.value;
    const password= form.password.value;
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      alert('user create successful');
    })
    .catch(error=>{
      console.log(error);
      alert(`${error} try again`);
    })
    
  }
    return (
        <div className="hero min-h-screen flex justify-between items-center px-16">
        <div className="w-1/2">
            <img src={register} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h2 className='text-2xl font-medium text-center mt-4'>Sign Up</h2> 
          <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name='name'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name='photoUrl'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name='password'
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
            <div className='text-center'>
            <p className='text-base font-medium'> Sign up with or</p>
            <div>
                {/* social login.... */}
            </div>
            <p className='text-base font-medium'>Already Account ? Please <Link to='/login'><span className='text-blue-500'>Sign In</span></Link></p>
            </div>
            
          </form>
        </div>
     
    </div>
    );
};

export default Register;
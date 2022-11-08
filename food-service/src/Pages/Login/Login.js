import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import img from '../../image/login3.jpg'



const Login = () => {
    const {login} = useContext(AuthContext)
  
      const handleLogin = (event) =>{
          event.preventDefault()
          const form = event.target ;
          const email = form.email.value ;
          const password = form.password.value;
          console.log(email, password)
  
          login(email, password)
          .then(result=>{
            const user = result.user;
            console.log(user);
          })
          .catch(err=>{
            console.error('error', err)
          })
            
          
          
        
      }
  

    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
    <div className="text-center lg:text-left">
        <img className='rounded' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 text-center py-20">
    <h1 className="text-5xl font-bold">Login!</h1>
      <form onSubmit={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
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
            <input className="btn btn-primary" type="submit" value="Login" />
            
          
        </div>
      </form>
      <p className='text-red-800 font-bold text-center'>New to Genius Car <Link to="/signup">Acount</Link> </p>
     
    </div>
  </div>
</div>
    );
};

export default Login;
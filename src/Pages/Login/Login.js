import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {

  const {singIn, googleSignPop} = useContext(AuthContext);
  
  const handleSubmit= event=>{
    event.preventDefault()
    const form = event.target;
    const email= form.email.value;
    const password = form.password.value;
    console.log(email,password);
    singIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(err => console.error(err))
}

  const handleGoogleLogin = () => {
    googleSignPop()
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(err => console.error(err))
  }
  
    return (
        <div>
          <div className="my-10 justify-center flex">
      <div className="w-96 p-7 shadow-xl rounded-xl">
         <div >
            <h2 className="text-2xl text-center px-2 font-semibold text-secondary">LOGIN</h2>
         </div>

        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
          <input name="email" type="email" className="input input-bordered w-full max-w-xs"  placeholder="email" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input name="password" type="password" className="input input-bordered w-full max-w-xs" placeholder="password" />
            
            <label className="label"><span className="label-text">Forgot password?</span></label>
          </div>

          <input type="submit" value="Login" className="btn btn-primary w-full" />
        </form>
        <p className="my-3">New to Puran bazar? <Link to='/signup' className="text-secondary">Create new account</Link></p>

        <div className="divider">Social Login</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary w-full">Continue with Google</button>
      </div>
    </div>
        </div>
    );
};

export default Login;
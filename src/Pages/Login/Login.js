import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const {singIn, googleSignPop} = useContext(AuthContext)
    const location = useLocation();
    const [loginError, setLoginError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    // const navigate = useNavigate();

  

    const handleLogin = data => {
        console.log(data)
        singIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
        //   toast.success(`Login successful`)
          setLoginUserEmail(data.email)
          setLoginError('')
          toast.success('Login successful')
        })
        .catch(error => {
          console.error(error)
          setLoginError(error.message)
        })
      }

    return (
        <div className="h-[500px] justify-center flex">
      <div className="w-96 p-7 shadow-xl rounded-xl">
         <div >
            <h2 className="text-2xl text-center px-2 font-semibold text-secondary">LOGIN</h2>
         </div>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
          <input type="email" 
          {...register("email", {required: "Email Address is required"})}
           className="input input-bordered w-full max-w-xs"  placeholder="email" />
           {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password"
            {...register("password", 
            {required: "Password is required", 
            minLength: {value: 6, message: 'Password length minimum 6 charecter'}})}
            className="input input-bordered w-full max-w-xs" placeholder="password" />
            {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}
            
            <label className="label"><span className="label-text">Forgot password?</span></label>
          </div>
          {loginError && <p className="text-red-500">{loginError}</p>}

          <input type="submit" value="Login" className="btn btn-primary w-full" />
        </form>
        <p className="my-3">New to Puran bazar? <Link to='/signup' className="text-secondary">Create new account</Link></p>

        <div className="divider">OR</div>
        <button className="btn btn-outline btn-primary w-full">Continue with Google</button>
      </div>
    </div>
    );
};

export default Login;
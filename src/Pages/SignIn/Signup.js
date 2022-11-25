import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const {createUser, googleSignPop, updateUserdata} = useContext(AuthContext);
    

    const handleSubmit= event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            handleUpdateProfile(name);
            saveUserRole(name, email, role);
            
            toast.success('Signup Successful')
        })
        .catch(err => console.error(err))
    }
    
    const handleUpdateProfile = (name) => {
        console.log(name);
        const userInfo = {
            displayName: name
        }
        updateUserdata(userInfo)
        .then(() => {

        })
        .catch(err => console.error(err));
    }

    const handleGoogleSignup = () => {
        googleSignPop()
        .then(result => {
            const user = result.user;
            console.log(user);
            const role = 'Buyer';
            saveUserRole(user.displayName, user.email, role)
        })
        .catch(err => console.error(err))
    }

    const saveUserRole = (name, email, role) => {
        const user = {name, email, role};
        // console.log(name, email, role);
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="mt-5 mb-10 justify-center flex">
      <div className="w-96 p-7 shadow-xl rounded-xl px-10 pb-10">
         <div >
            <h2 className="text-2xl text-center px-2 font-semibold text-secondary">SIGN UP</h2>
         </div>

        <form onSubmit={handleSubmit}>
           <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Name</span></label>
            <input name='name' type="text" className="input input-bordered w-full max-w-xs"  placeholder="name" />
           </div>

           <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input name='email' type="email" className="input input-bordered w-full max-w-xs"  placeholder="email" />
           </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input name='password' type="password" className="input input-bordered w-full max-w-xs" placeholder="password" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Chose your role</span></label>
            <select name='role' className="select select-bordered w-full max-w-xs">
                <option selected>Buyer</option>
                <option>Seller</option>
            </select>
          </div>

          <input type="submit" value="sign up" className="btn btn-primary w-full mt-5" />
            
          
        </form>
        <p className="my-3 text-center">Already have an account? <Link to='/login' className="text-secondary">Login</Link></p>


        <div className="divider">SOCIAL LOGIN</div>
        <button onClick={handleGoogleSignup} className="btn btn-outline btn-primary w-full">Continue with Google</button>
      </div>
    </div>
    );
};

export default Signup;
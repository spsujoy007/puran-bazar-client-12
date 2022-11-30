import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const SingleProductCard = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const phone = useLoaderData();
    const {_id, name, picture, report, sellername, location, resaleprice, yearsofuse, condition, originalprice, description, useremail, date
      } = phone;

      const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const orderInfo = {
          name,
          email: form.email.value,
          sellername,
          resaleprice,
          phone: form.phone.value,
          location: form.location.value
        }
        fetch('https://puran-bazar-server-ten.vercel.app/orders', {
          method: 'POST',
          headers: {
            'content-type': "application/json"
          },
          body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
          toast.success('Booking confirmed')
          navigate('/dashboard')
        })
        .catch(error => console.error(error))
      } 

      const handleReportProduct = id => {
        const permission = window.confirm(`Are you report ${name}`);
        if(permission){
          fetch(`https://puran-bazar-server-ten.vercel.app/usedphones?id=${id}`, {
            method: "PUT"
          })
          .then(res => res.json())
          .then(data => {
            if(data.modifiedCount > 0){
              toast.success('Product reported')
            }
          })
        }
      }

      const [isVerfied, setIsVerfied] = useState(null);
      useEffect(() => {
        fetch(`https://puran-bazar-server-ten.vercel.app/users`)
        .then(res => res.json())
        .then(data => setIsVerfied(data))
      }, [isVerfied]);

    return (
      <div className="">
  <div className="md:flex">
    {/* //for product image */}
    <div className='md:w-[35%]'>
        <img src={picture} className="w-full md:w-80 rounded-lg" alt=""/>
    </div>
    
    {/* For info */}
    <div className='md:w-[65%] md:mt-0 mt-10 md:mr-24'>
    <div className="">
        <h1 className='text-3xl mb-2'>{name}</h1>
        <hr />
    </div>
      <p className=' mt-5'>{description}</p>
      <div className='p-3 shadow-md md:w-1/2 rounded-xl'>
      <p className='mt-1 flex items-center'><span className='text-secondary mr-3'>Location:</span> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>

    <div className=''>
    <div className='md:flex justify-between text-xl'>
    <p>Resale Price: ৳{resaleprice}</p>
    <p className='text-gray-400 lowercase'><s >৳{originalprice}</s></p>
    </div>
    <p className='text-secondary my-2'>Use: ({yearsofuse} years)</p>
    <p>Publishing date: <span className='text-primary'>{date}</span> </p>
    <p className='mt-2'><span className='font-semibold text-secondary uppercase'>Condition:</span> {condition}</p>
    </div>
      </div>

      {/* user information */}
      <div className='mt-3 p-3 shadow-md rounded-xl md:w-1/2 flex items-center'>
        <h1 className='text-2xl uppercase font-semibold '>Seller: <span className='text-secondary'>{sellername}</span></h1>
        {
          isVerfied?.map(verifyuser => 
          <>{verifyuser?.email === useremail && verifyuser?.verified && 
          <FaCheckCircle className='text-blue-500 ml-2 text-xl'></FaCheckCircle>}
          </>)
        }
      </div>

        {/* Report to admin  */}
      {
        report ? 
        <button disabled className="btn btn-error mt-5 btn-sm"><FaInfoCircle className='mr-2'></FaInfoCircle> Report to admin</button>
        :
        <button onClick={() => handleReportProduct(_id)} className="btn btn-error mt-5 btn-sm"><FaInfoCircle className='mr-2'></FaInfoCircle> Report to admin</button>
      }

      <div className="md:flex justify-end">
    <label htmlFor="booking-modal" className="btn btn-primary mt-5 md:px-20 ">Book now</label>
        {/* The button to open modal */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    
    <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking for {name}</h3>
                    <form onSubmit={handleBooking}>
                        <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-3" disabled />
                        <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3" disabled />
                        <div className='flex justify-between'>
                            <p className='badge badge-error'>Resale Price: ৳{resaleprice}</p>
                        </div>
                        <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full my-3" required />
                        <textarea name='location' className="textarea textarea-bordered w-full my-3" placeholder="You Location" required></textarea>
                        {
                            !user && <p>Please login to create a Booking</p>
                        }
                        <input htmlFor="booking-modal" type="submit" value='Submit' className={user ?
                            "btn btn-secondary w-full"
                            :
                            "btn btn-accent w-full btn-disabled"
                        } > 
                        </input>
                    </form>
                </div>
            </div>
        </div>
  </div>
</div>
      </div>

    </div>
    );
};

export default SingleProductCard;
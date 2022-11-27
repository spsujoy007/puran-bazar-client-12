import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({modalInfo: phone, setModalInfo}) => {
    const {user} = useContext(AuthContext);
    const userName = user.displayName;

    const {id, name, picture, sellername, location, resaleprice, yearsofuse,              originalprice, description, email, date
    } = phone;


    const handleBooking = (event) => {
      event.preventDefault();
      const form = event.target;
      const orderInfo = {
        name,
        email: form.email.value,
        userName,
        resaleprice,
        location: form.location.value
      }
      console.log(orderInfo);
      fetch(`http://localhost:5000/orders?email=${user?.email}`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(orderInfo)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data)
    })
    .catch(err => {
        console.error(err)
    })
    } 

    return (
        <div>
            {/* Put this part before </body> tag */}
<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    
    <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            
                    <label onClick={() => setModalInfo(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <h3 className="text-lg font-bold">Booking for {name}</h3>
                    <form onSubmit={handleBooking}>
                        <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-3" disabled />
                        <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3" disabled />
                        <div className='flex justify-between'>
                            <p className='badge badge-error'>Fixed Price: ৳{resaleprice}</p>
                        </div>
                        <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full my-3" required />
                        <textarea name='location' className="textarea textarea-bordered w-full my-3" placeholder="You Location" required></textarea>
                        {
                            !user && <p>Please login to create a Booking</p>
                        }
                        
      <label htmlFor="booking-modal" type='/' className="btn">Yay!</label>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BookingModal;
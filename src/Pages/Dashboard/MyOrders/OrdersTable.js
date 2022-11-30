import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const OrdersTable = ({order}) => {
    const {user} = useContext(AuthContext)
    const {name, resaleprice, _id } = order;

    const handleDeleteProduct = (id) => {
        const permission = window.confirm('Are you sure want to delete this item?');
        if(permission){
           fetch(`https://puran-bazar-server-ten.vercel.app/orders?email=${user?.email}&id=${id}`, {
             method: "DELETE"
           })
           .then(res => res.json())
           .then(data => {
               toast.success('Product deleted!')
                console.log(data);
           })
        }
    }

    return (
      <tr>
        <td>{name}</td>
        <td>৳{resaleprice}</td>
        <td>
            <button onClick={() => handleDeleteProduct(_id)} className='btn btn-danger px-[18px] rounded-full'>X</button>
        </td>
        <td>
            <button className='btn btn-secondary px-6'>Pay</button>
        </td>
      </tr>
    );
};

export default OrdersTable;
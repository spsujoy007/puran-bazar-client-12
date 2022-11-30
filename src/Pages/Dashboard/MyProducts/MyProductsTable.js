import React from 'react';
import toast from 'react-hot-toast';

const MyProductsTable = ({product}) => {
    const {name, resaleprice, picture, _id, advertising} = product;

    const handleDeleteProduct = id => {
        const permission = window.confirm('When you delete this item its cannot undone this')
        if(permission){
            fetch(`http://localhost:5000/myproducts?id=${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast.success('Product deleted')
                }
                
            })
        }
    }

    const handleAdvertiseProduct = (id) => {
        const permission = window.confirm('Are you sure to advertise this product')
        if(permission){
            fetch(`http://localhost:5000/myproducts?id=${id}`, {
                method: "PUT"
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    toast.success('Advertised successfull')
                }
                
            })
        }
    }

    return (
      <tr className="hover">
      <td>
        <div className="avatar">
            <div className="w-24 rounded">
            <img src={picture} alt={name.split(0,5)} />
            </div>
        </div>
      </td>
      <td>{name}</td>
      <td>৳{resaleprice}</td>
      <td>
        <button onClick={() => handleDeleteProduct(_id)} className='btn btn-error text-white btn-sm'>Delete</button>
      </td>
      <td>
        {
            advertising ?
            <button disabled className='btn btn-secondary btn-sm'>Advertised</button>
            :
            <button onClick={() => handleAdvertiseProduct(_id)} className='btn btn-secondary btn-sm'>Advertise</button>
        }
      </td>
    </tr>
    );
};

export default MyProductsTable;
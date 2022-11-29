import React from 'react';
import toast from 'react-hot-toast';

const MyProductsTable = ({product}) => {
    const {name, resaleprice, picture, _id} = product;

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
        <button onClick={() => handleDeleteProduct(_id)} className='btn btn-secondary btn-sm'>Delete</button>
      </td>
    </tr>
    );
};

export default MyProductsTable;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductsTable from './MyProductsTable';

const MyProducts = () => {
    const {user} = useContext(AuthContext)

    const {data: myproducts = [], refetch, isLoading} = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`);
            const data = res.json();
            return data
        }
    })

    refetch();

    if(isLoading){
        return <progress className="progress w-56"></progress>
    }

    return (
        <div className='mt-3'>
            <h1 className='text-xl uppercase text-secondary'>Your Total Product: {myproducts.length}</h1>
            <div className="overflow-x-auto mt-2">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Picture</th>
        <th>Product name</th>
        <th>Price</th>
        <th>Delete</th>
        <th>Advertise Product</th>
      </tr>
    </thead>
    <tbody>
        {
            myproducts.map(myproduct => <MyProductsTable
                key={myproduct._id}
                product={myproduct}
            ></MyProductsTable>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProducts;
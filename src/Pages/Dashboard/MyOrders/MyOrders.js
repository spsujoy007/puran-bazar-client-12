import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import OrdersTable from './OrdersTable';

const MyOrders = () => {
    const {user} = useContext(AuthContext)

    const {data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    refetch()
    
    if(isLoading){
            <h1 className='text-6xl'>Loading</h1>
    }

    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table w-full">
    <thead>
      <tr>
        <th>Product name</th>
        <th>Price</th>
        <th>Remove</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      
    {
    orders.map((order, idx) => <OrdersTable
        key={order._id}
        order={order}
    ></OrdersTable>
    )
}

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;
// 
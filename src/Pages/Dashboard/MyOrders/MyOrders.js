import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import OrdersTable from './OrdersTable';

const MyOrders = () => {
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    const {data: orders = [], refetch, isLoading} = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`);
            const data = await res.json();
            setLoading(false)
            if(isLoading){
                    <progress className="progress progress-primary w-56"></progress>
            }
            return data;
        }
    })
    refetch()
    console.log(orders)
    if(loading){
        <progress className="progress progress-primary w-56"></progress>
}

    return (
        <div>
            <h2 className='text-xl'>{orders.length}</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
    <thead>
      <tr>
        <th>Serial number</th>
        <th>Product name</th>
        <th>Price</th>
        <th>Report</th>
        <th>Remove</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      
    {
    orders.map((order, idx) => <OrdersTable
        key={order._id}
        order={order}
        idx={idx}
    ></OrdersTable>)
}

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;
// 
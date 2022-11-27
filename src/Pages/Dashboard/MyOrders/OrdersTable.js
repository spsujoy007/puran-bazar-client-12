import React from 'react';

const OrdersTable = ({order, idx}) => {
    const {name, resaleprice, } = order;
    return (
      <tr>
        <th>{idx+1}</th>
        <td>{name}</td>
        <td>৳{resaleprice}</td>
        <td>
            <button className='btn btn-error btn-xs'>Report</button>
        </td>
        <td>
            <button className='btn btn-danger px-[18px] rounded-full'>X</button>
        </td>
        <td>
            <button className='btn btn-secondary px-6'>Pay</button>
        </td>
      </tr>
    );
};

export default OrdersTable;
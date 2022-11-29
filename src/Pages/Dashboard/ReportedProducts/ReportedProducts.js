import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportedProductTable from './ReportedProductTable';

const ReportedProducts = () => {

    const {data: reporteditems = [], refetch, isLoading} = useQuery({
        queryKey: ['reporteditems'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/usedphones`);
            const data = await res.json();
            return data;
        }
    })

    refetch();
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <h2 className='text-2xl font-semibold my-3'><span className='text-primary uppercase'>Reported items:</span></h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Product picture</th>
        <th>Product name</th>
        <th>Seller name</th>
      </tr>
    </thead>
    <tbody>
      {
        reporteditems.map((reporteditem) => <ReportedProductTable
            key={reporteditem?._id}
            reporteditem={reporteditem}
        ></ReportedProductTable>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReportedProducts;
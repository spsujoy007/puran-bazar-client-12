import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PhoneCard from './PhoneCard';

const AllPhoneSec = () => {

    const {data: phones = []} = useQuery({
        queryKey: ['phones'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/usedphones');
            const data = res.json();
            return data
        }
    });

    return (
        <div>
            <h1 className='text-2xl mt-5'>All Used Phones</h1>
            <p className='text-secondary mb-3'>Chose your own choise</p> <hr />
            <div className='md:grid grid-cols-2 gap-10 mt-2'>
            {
                phones.map(phone => <PhoneCard
                    key={phone._id}
                    phone={phone}
                ></PhoneCard>)
            }
        </div>
        </div>
    );
};

export default AllPhoneSec;
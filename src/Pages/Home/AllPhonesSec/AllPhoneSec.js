import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PhoneCard from './PhoneCard';

const AllPhoneSec = () => {

    const {data: phones = [], refetch, isLoading} = useQuery({
        queryKey: ['phones'],
        queryFn: async () => {
            const res = await fetch('https://puran-bazar-server-ten.vercel.app/usedphones');
            const data = await res.json();
            return data
        }
    });
    refetch();
    if(isLoading){
        return <progress className='progress w-full progress-primary'></progress>
    }

    return (
        <div>
            <h1 className='text-2xl mt-5 uppercase'>All Used Phones</h1>
            <p className='text-secondary mb-3'>You can filter by category button</p> <hr />
            <div className='md:grid grid-cols-2 gap-10 mt-2'>
            {
                phones.map((phone ) => <PhoneCard
                    key={phone._id}
                    phone={phone}
                ></PhoneCard>)
            }
        </div>
        </div>
    );
};

export default AllPhoneSec;
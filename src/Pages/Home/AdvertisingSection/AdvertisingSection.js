import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PhoneCard from '../AllPhonesSec/PhoneCard';

const AdvertisingSection = () => {

    const {data: advertisedItems = [], refetch, isLoading} = useQuery({
        queryKey: [],
        queryFn: async() => {
            const res = await fetch(`https://puran-bazar-server-ten.vercel.app/advertiseditems`);
            const data = await res.json();
            return data;
        }
    })

    refetch();

    if(isLoading){
        return <progress className='progress-secondary progress w-full'></progress>
    }

    return (
        <div>
            <div className='lg:grid gap-10 mb-5 grid-cols-2'> 
            {
                advertisedItems.map(phone => <PhoneCard
                    key={phone._key}
                    phone={phone}
                ></PhoneCard>)
            }
            </div>
        </div>
    );
};

export default AdvertisingSection;
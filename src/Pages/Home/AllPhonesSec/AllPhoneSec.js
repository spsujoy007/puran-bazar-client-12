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
            {
                phones.map(phone => <PhoneCard
                    key={phone._id}
                    phone={phone}
                ></PhoneCard>)
            }
        </div>
    );
};

export default AllPhoneSec;
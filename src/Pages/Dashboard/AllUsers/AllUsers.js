import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const {data: users = [], refetch, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    })

    refetch();
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }

    const handleVerfiyUser = (id) => {
        const permission = window.confirm('Are you sure to verify this user?');
        if(permission){
            fetch(`http://localhost:5000/users?id=${id}`, {
                method: "PUT"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast.success('User verified')
                }
            })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>User name</th>
        <th>User email</th>
        <th>Role</th>
        <th>Verify</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) => <tr key={user?._id} className="hover">
        <th>{i+1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.role}</td>
        <td>
            {
            user?.verified ? 
            <button disabled className='btn btn-primary btn-sm'>Verify</button>
            :
            <button onClick={() => handleVerfiyUser(user?._id)} className='btn btn-primary btn-sm'>Verify</button>
            }
        </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;
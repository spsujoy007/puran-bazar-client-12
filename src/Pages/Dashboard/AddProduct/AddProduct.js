import React from 'react';

const AddProduct = () => {

    const handleAddProduct = (event) => {
        event.preventDefault();
    } 

    return (
        <div>
            <div className="md:ml-12 ">
      <div className="w-full p-7 rounded-xl border-2 border-secondary">
        <div className=''>
            <h2 className='text-2xl text-secondary'>Here you can add a product.</h2>

        </div>

        <form onSubmit={handleAddProduct}>
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Product name</span></label>
            <input name="email" type="email" className="input input-bordered w-full"  placeholder="email" />
          </div>

          <div className="form-control w-full ">
            <label className="label"><span className="label-text">Password</span></label>

            <input name="password" type="password" className="input input-bordered w-full" placeholder="password" />
          </div>

          <div className='flex justify-end'>
            <input type="submit" value="Add Product" className="btn btn-secondary w-62 mt-5" />
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default AddProduct;
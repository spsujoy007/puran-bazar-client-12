import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const picture = form.picture.files[0];
        const location = form.location.value;
        const sellername = form.sellername.value;
        const originalprice = form.originalprice.value;
        const resaleprice = form.resaleprice.value;
        const category = form.category.value;
        const yearsofuse = form.yearsofuse.value;
        const description = form.description.value;
        console.log(name, picture, location, sellername, originalprice, resaleprice, category, yearsofuse, description);
    } 

    return (
        <div>
            <div className="md:ml-12 ">
      <div className="w-full p-7 rounded-xl border-2 border-secondary border-dashed">
        <div className=''>
            <h2 className='text-2xl text-secondary m-0'>Here you can add a product.</h2>

        </div>

        <form onSubmit={handleAddProduct}>
          <div className='flex gap-10'>

          {/* left side input */}
          <div className='w-[50%]'>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Product name</span></label>
            <input name="name" type="text" className="input input-bordered w-full"  placeholder="product name" />
          </div>
          
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Product picture</span></label>
            <input name="picture" type="file" className="file-input file-input-bordered w-full"  placeholder="your product picture" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Location</span></label>
            <input name="location" type="text" className="input input-bordered w-full"  placeholder="your location" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Seller name</span></label>
            <input defaultValue={user.displayName} readOnly name="sellername" type="text" className="input input-bordered w-full"  placeholder="sellername" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Original Price</span></label>
            <input name="originalprice" type="text" className="input input-bordered w-full"  placeholder="Original price" />
          </div>
          </div>

          
          {/* right side input  */}
          <div className='w-[50%]'>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Resale Price</span></label>
            <input name="resaleprice" type="text" className="input input-bordered w-full"  placeholder="Resale price" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Select Category</span></label>
            <select name='category' required className="select select-bordered w-full">
                <option>Apple</option>
                <option>Redmi</option>
                <option>Samsung</option>
                <option>Vivo</option>
                <option>One Plus</option>
                <option>Oppo</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Years of use?</span></label>
            <input name="yearsofuse" type="number" className="input input-bordered w-full"  placeholder="Years of use" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Description</span></label>
            <input name="description" type="text" className="input input-bordered w-full"  placeholder="description" />
          </div>
          </div>
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
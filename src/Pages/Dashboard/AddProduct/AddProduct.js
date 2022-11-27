import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const useremail = user.email;
    // console.log(useremail);
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    //get the current time
    // const current = new Date();
    // const time = current.toLocaleTimeString("en-US", {
    //   hour: "2-digit",
    //   minute: "2-digit",
    // });
    // console.log(time);
    
    //get the current date
    const currentdate = new Date();
    const date = currentdate.toLocaleDateString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log(date);
    
    
    const handleAddProduct = (event) => {
        event.preventDefault();
        const confirmation = window.confirm("Are you sure you want to add this item?")

        const form = event.target;
        const name = form.name.value;
        const picture = form.picture.files[0];
        // console.log(picture);
        const location = form.location.value;
        const sellername = form.sellername.value;
        const originalprice = form.originalprice.value;
        const resaleprice = form.resaleprice.value;
        const category = form.category.value;
        const yearsofuse = form.yearsofuse.value;
        const description = form.description.value;
        // console.log(name, picture, location, sellername, originalprice, resaleprice, category, yearsofuse, description);
        
        const formData = new FormData()
        formData.append('image', picture);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(pictureData => {
            console.log(pictureData)
            if(pictureData.success){

                const newProduct = {
                    name,
                    picture : pictureData.data.url,
                    sellername,
                    location,
                    resaleprice,
                    originalprice,
                    yearsofuse,
                    category,
                    description,
                    useremail,
                    date
                };
                console.log(newProduct)

                if(confirmation) {
                    //Add new product with post method
                fetch('http://localhost:5000/usedphones', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success("Product added");
                    form.reset();
                })
                }
            }
        })
        .catch(err => console.error(err))
 
    }

    return (
        <div>
            <div className="md:ml-12 mr-5">
      <div className="w-full p-7 rounded-xl border-2 border-secondary border-dashed">
        <div className=''>
            <h2 className='text-2xl text-secondary m-0'>Here you can add a product.</h2>

        </div>

        <form onSubmit={handleAddProduct}>
          <div className='md:flex gap-10'>

          {/* left side input */}
          <div className='md:w-[50%]'>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Product name</span></label>
            <input required name="name" type="text" className="input input-bordered w-full"  placeholder="product name" />
          </div>
          
          <div className="form-control w-full">
            <label className="label"><span className="label-text">Product picture</span></label>
            <input required name="picture" type="file" className="file-input file-input-bordered w-full"  placeholder="your product picture" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Location</span></label>
            <input required name="location" type="text" className="input input-bordered w-full"  placeholder="your location" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Seller name</span></label>
            <input required defaultValue={user.displayName} readOnly name="sellername" type="text" className="input input-bordered w-full"  placeholder="sellername" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Original Price</span></label>
            <input required name="originalprice" type="text" className="input input-bordered w-full"  placeholder="Original price" />
          </div>
          </div>

          
          {/* right side input  */}
          <div className='md:w-[50%]'>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Resale Price</span></label>
            <input required name="resaleprice" type="text" className="input input-bordered w-full"  placeholder="Resale price" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Select Category</span></label>
            <select name='category' required className="select select-bordered w-full">
                <option>Apple</option>
                <option>Redmi</option>
                <option>Samsung</option>
                <option>Vivo</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Years of use?</span></label>
            <input required name="yearsofuse" type="number" className="input input-bordered w-full"  placeholder="Years of use" />
          </div>

          <div className="form-control w-full">
            <label className="label"><span className="label-text">Description</span></label>
            <textarea required name="description" type="text" className="input input-bordered w-full h-[132px]"  placeholder="description" />
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
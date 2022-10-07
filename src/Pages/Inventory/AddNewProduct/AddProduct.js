import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { BsImageFill } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const handleUpload = async (event) => {
        event.preventDefault()
        const email = user.email;
        const product_name = event.target.name.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const imageStorageKey = '46852d765f11248a385285a8456eb942'
        const image = event.target.picture.files;
        const formData = new FormData();
        formData.append('image', image[0]);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const product = { email, product_name, supplier, price, quantity, picture: img, description };
                    // send to your database.
                    fetch('https://bike-pro-server.onrender.com/product', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully');
                                event.target.reset();
                            }
                            else {
                                toast.error("Failed to add Product");
                            }
                        })
                }

            })

    }
    return (
        <div>
            <h1 className='text-xl font-medium text-left p-3 md:p-5'>Add New Product</h1>
            <div className='bg-base-100 rounded-t-lg h-[85vh] md:mx-5'>
                <div className='p-10 lg:w-1/2'>
                    <ToastContainer />
                    <form onSubmit={handleUpload}>

                        <div className="relative z-0 w-full mb-6 group border p-5 flex justify-between items-center cursor-pointer">
                            <input className='cursor-pointer' type="file" name="picture" id="picture" required />
                            <label for="picture"><BsImageFill className='text-3xl cursor-pointer' /></label>
                        </div>

                        <div className="relative z-0 w-full group mb-6">
                            <input type="text" name="name" id="name" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=' ' autoComplete='off' required />
                            <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                        </div>


                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="supplier" id="supplier" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer" placeholder='  ' autoComplete='off' required />
                            <label for="supplier" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supplier</label>
                        </div>
                        <div className="grid xl:grid-cols-2 xl:gap-6 mb-6">
                            <div className="relative z-0 w-full group">
                                <input type="number" name="price" id="price" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=' ' required />
                                <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                            </div>
                            <div className="relative z-0 w-full group">
                                <input type="number" name="quantity" id="quantity" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=' ' required />
                                <label for="quantity" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <textarea rows="2" type="text" name="description" id="description" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=' ' required />
                            <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <input type="submit" className=" cursor-pointer text-white rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2 text-center" value="Upload" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
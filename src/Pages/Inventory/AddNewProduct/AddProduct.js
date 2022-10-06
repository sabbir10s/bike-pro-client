import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
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
                    fetch('http://localhost:5000/product', {
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
            <h1 className='text-xl font-bold text-left pb-3'>Add New Product</h1>
            <div className='bg-base-100 '>
                <div className='p-10 w-1/2'>
                    <ToastContainer />
                    <form onSubmit={handleUpload}>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="file" name="picture" id="picture" required />
                            <label for="picture" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="name" id="name" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='' autoComplete='off' required />
                            <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                        </div>


                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="supplier" id="supplier" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='  ' autoComplete='off' required />
                            <label for="supplier" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supplier</label>
                        </div>
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="number" name="price" id="price" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='' required />
                                <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="number" name="quantity" id="quantity" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='' required />
                                <label for="quantity" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                            </div>
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <textarea rows="3" type="text" name="description" id="description" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='' required />
                            <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <input type="submit" className=" cursor-pointer text-white rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2 text-center" value="Upload" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
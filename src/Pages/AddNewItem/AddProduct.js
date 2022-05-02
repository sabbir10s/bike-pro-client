import React from 'react';

const AddProduct = () => {
    const handleUpload = event => {
        event.preventDefault()
        const product_name = event.target.product_name.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
    }
    return (
        <div className='mx-auto w-[30%] border-2 border-[#ff634e] p-5 shadow-xl'>
            <form>
                <h1 className='text-xl py-1 mb-5 text-center text-[#ff634e]'>Add New Product</h1>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="product_name" id='product_name' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff634e] focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='  ' required />
                    <label for="product_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="supplier" id="supplier" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff634e] focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='  ' required />
                    <label for="supplier" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supplier</label>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff634e] focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='  ' required />
                        <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="number" name="quantity" id="quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff634e] focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder=' ' required />
                        <label for="quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="image" id='image' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff634e] focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='  ' required />
                    <label for="image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <textarea rows="3" type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff634e] focus:outline-none focus:ring-0 focus:border-[#ff634e] peer" placeholder='  ' required />
                    <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff634e] peer-focus:dark:text-[#ff634e] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                <button type="submit" className="text-white bg-[#ff634e] hover:bg-[#1b3e41] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:w-auto px-5 py-2 lg:w-[30%] text-center">Upload</button>
            </form>

        </div>
    );
};

export default AddProduct;
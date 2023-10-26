import Button from '@/components/Button';
import { prisma } from '@/lib/db/prisma';
import type { Metadata } from 'next'
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Add Product - WallisEmporium',
}

async function AddProducts(formData: FormData) {
    "use server";

// get the given fileds by the name attribute 

    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.
    toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

//check if the fields are provided and if not throw an error

    if(!name || !description || !imageUrl || !price){
        throw Error("Missing required fields, hatina kuuya kuzotamba wangu")
    }

    await prisma.product.create({
        data: {name, description,imageUrl,price}
    });

    redirect("/");
}



export default function AddProduct() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className=" m-5 text-gray-700 text-4xl font-bold">Add Product</h2>
      <div className="bg-gradient-to-r from-transparent via-blue-100 to-transparent w-full h-1 mb-5"></div>
      <form action={AddProducts}>
    
    <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            required
            name="name"
            className="w-full border dark:bg-gray-800 dark:text-gray-200 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"

            // className="input input-bordered max-w-xs dark:bg-gray-800 dark:text-gray-200 focus:dark:bg-gray-900 focus:dark:border-violet-400 py-2 pl-10 text-sm w-full"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Product Description
          </label>
          <textarea
            className="textarea w-full border dark:bg-gray-800 dark:text-gray-200 border-gray-300 rounded-lg py-4 px-4 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Type here"
            required
            name="description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
            Image Url
          </label>
          <input
            type="url"
            placeholder="Type here"
            required
            name="imageUrl"
            className="w-full border dark:bg-gray-800 dark:text-gray-200 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
          />
          </div>


          <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            required
            name="price" 
		    placeholder="$ 999,99" 
            className='w-full border dark:bg-gray-800 dark:text-gray-200 border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-500' />
		    {/* <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700">$</span> */}
	    </div>


        <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out w-full"
        >Add Product</Button>
       

      </form>
    </div>
  );
}

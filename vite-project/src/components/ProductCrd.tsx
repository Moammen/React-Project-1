import Images from "./Images";  
import Button from "./UI/Button";
import type { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";

interface Iprops {
    key?: string;
    productList: IProduct;
};

const ProductCrd = ({productList}: Iprops) => {

    return (
        <div key={productList.id} className="max-w-md md:max-w-lg mx-auto  border border-gray-300 bg-amber-5 rounded-md p-2 flex gap-0.5 flex-col items-start">
            <Images imageUrl={productList.imageURL} altText="Product Image" className="border border-gray-300 bg-amber-5 rounded-md"/>
            <h3 className="text-lg font-semibold">{productList.title}</h3>
            <p className="text-gray-400 flex-1">{textSlicer(productList.description, 100)}</p>
                <div className="flex space-x-1 mt-2 ">   
                    {productList.colors.map((color, index) => (
                        <span key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
                    ))}
                </div>
                <div className="flex justify-between items-stretch mt-2 w-full" >
                    <span>${productList.price}</span>
                    <Images imageUrl={productList.imageURL} altText="Product Image" 
                    className="border border-gray-300 bg-amber-5 rounded-full w-6 h-6 object-cover  "/>
                </div>
                <div className="flex space-x-2 mt-2  justify-between items-stretch w-full">
                    <Button className="bg-blue-500 text-white hover:bg-blue-600" width="w-full" >
                        Add to Cart
                    </Button>
                    <Button className="bg-gray-500 text-white hover:bg-gray-600" width="w-full">
                        View Details
                    </Button>
                </div>
        </div>  
    )};
export default ProductCrd;
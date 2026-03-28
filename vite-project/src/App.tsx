import './index.css'
import ProductCrd from './components/ProductCrd';
import type { IProduct } from './interfaces';
import { productList, formInputList } from './components/data';
import Modal from './components/UI/Modal';
import { useState } from 'react';
import Input from './components/UI/Input';
import { Button } from '@headlessui/react';

function App() {
/*-------------state for modal------------------*/
  const [product, setProduct ] = useState<IProduct>({
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    },  
  })
  const [isOpen, setIsOpen] = useState(false)

/*-------------Handlers for modal----------------__*/
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  console.log(product);
  };
/*-------------Rendering Products------------------*/
  const products = productList.map((product : IProduct) => (<ProductCrd key={product.id} productList={product} />));  
  const formInputs = formInputList.map((input) => (
    <div key={input.id} className="mb-4">
      <label htmlFor={input.id} className="block text-gray-700 text-sm font-bold mb-2">
        {input.label}
      </label>
      <Input type={input.type} id={input.id} name={input.name} onChange={handleInputChange} value={product[input.name ]} />
    </div>
  ));



  return (
 <main className="container mx-auto lg:max-w-7xl p-4">
  <Button onClick={openModal} className="bg-blue-500 text-white hover:bg-blue-600 p-1 rounded-md">Open Modal</Button>

    <Modal isOpen={isOpen} closeModal={closeModal}  title="Product Details">
      {formInputs}
      <div className="flex flex-row  gap-4">
        <Button className="bg-blue-500 text-white hover:bg-blue-600 p-1 rounded-md flex-1" >Submit</Button>   
        <Button className="bg-gray-500 text-white hover:bg-gray-600 p-1 rounded-md flex-1" onClick={closeModal}>Cancel</Button>   
      </div>
    </Modal> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  rounded-lg m-5 p-5 border-0">
      {products}
    </div>
 </main>

  )
}

export default App

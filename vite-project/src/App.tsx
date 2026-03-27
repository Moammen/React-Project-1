import './index.css'
import ProductCrd from './components/ProductCrd';
import type { IProduct } from './interfaces';
import { productList , formInputList } from './components/data';
import Modal from './components/UI/Modal';
import { useState } from 'react';
import { Button } from '@headlessui/react';

function App() {

/*-------------Rendering Products------------------*/
  const products = productList.map((product : IProduct) => (<ProductCrd key={product.id} productList={product} />));  
  const formInputs = formInputList.map((input) => (
    <div key={input.id} className="mb-4">
      <label htmlFor={input.id} className="block text-gray-700 font-bold mb-2">
        {input.label}
      </label>
      <input
        type={input.type}
        id={input.id}
        name={input.name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  ));

/*-------------state for modal------------------*/
  const [isOpen, setIsOpen] = useState(false)
/*-------------Handlers for modal----------------__*/
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }





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

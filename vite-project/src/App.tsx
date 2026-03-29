import './index.css'
import ProductCrd from './components/ProductCrd';
import type { IProduct } from './interfaces';
import { productList, formInputList , categories  } from './data';
import Modal from './components/UI/Modal';
import { useState } from 'react';
import Input from './components/UI/Input';
import { Button } from '@headlessui/react';
import { productValidation } from './validation';
import ErrorMessage from './components/ErrorMessage';
import CircleColor from './components/CircleColor';
import {colors} from './data';
import SelectMenu from './components/UI/SelectMenu';







function App() {

  const defaultProduct: IProduct = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      avatar: '',
    },  
  }   

/*-------------state for modal------------------*/
  const [productInitList, setProductInitList ] = useState<IProduct[]>(productList)
  const [product, setProduct ] = useState<IProduct>(defaultProduct)
  const [isOpen, setIsOpen] = useState(false)
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [selected, setSelected] = useState(categories[0])
  
  console.log(tempColor);
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
    })
    );
    setErrors(() => ({
      ...errors,
      [name]: "",
    }));


  console.log(product);
  };
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = productValidation(product);
    setErrors(errors);
    const hasErrors = Object.values(errors).some((error) => error !== '') ;
    if (hasErrors) {
      console.log('Form has validation errors. Please fix them before submitting.');
      return;
    }
    setProductInitList((prevList) => [...prevList, { ...product, id: (prevList.length + 1).toString(), colors: tempColor , category: selected }]);
    // Here you can add logic to send the product data to a server or update your state
    closeModal();
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
    });
    setTempColor([]);
    setProduct(defaultProduct)
    console.log(selected)
  }
  function onCansel() {
    setProduct(defaultProduct)
    closeModal();
    setErrors({
      title: "",
      description: "",
      imageURL: "",
      price: "",
    });
    setTempColor([]);
    
  }




/*-------------Rendering Products----------------__*/
  const products = productInitList.map((product : IProduct) => (<ProductCrd key={product.id} productList={product} />));  
  
  const formInputs = formInputList.map((input) => (
    <div key={input.id} className="mb-4">
      <label htmlFor={input.id} className="block text-gray-700 text-sm font-bold mb-2">
        {input.label}
      </label>
      <Input type={input.type} id={input.id} name={input.name} onChange={handleInputChange} value={product[input.name ]} />
      <ErrorMessage message={errors[input.name ]} />

    </div>
  ));
  const colorCircles = colors.map((color) => (
    <CircleColor key={color} color={color} onClick={() => {
      if (tempColor.includes(color)) {
        setTempColor((prev) => prev.filter((c) => c !== color));
      } else {
        setTempColor((prev) => [...prev, color]);
      }
    }} />
  )); 
  const selectedColors = tempColor.map((color) => (
    <span key={color} className=" p-1 text-sm text-white rounded-md" style={{ backgroundColor: color }}> {color}</span>
  ));

  return (
 <main className="container mx-auto lg:max-w-7xl p-4">

  <Button onClick={openModal} className="bg-blue-500 text-white w-full hover:bg-blue-600 p-1 rounded-md">Open Modal</Button>

    <Modal isOpen={isOpen} closeModal={closeModal}  title="Product Details">
        <form className="w-full max-w-lg" onSubmit={submitHandler}>
        {formInputs}
        <div className="my-4">
          <SelectMenu  selected={selected} setSelected={setSelected}/>
        </div>
        <div className="flex space-x-1 my-2 ">   
          {colorCircles }
        </div>
        <div className="flex space-x-1 my-2 ">   
          {selectedColors}
        </div>

        <div className="flex flex-row  gap-4">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 p-1 rounded-md flex-1" type="submit">Submit</Button>   
          <Button className="bg-gray-500 text-white hover:bg-gray-600 p-1 rounded-md flex-1"  onClick={onCansel}>Cancel</Button>   
        </div>
        </form>
    </Modal> 

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  rounded-lg m-5 p-5 border-0">
      {products}
    </div>
 </main>

  )
}

export default App

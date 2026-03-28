import type { InputHTMLAttributes } from "react";    
interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
}


const Input = ({...rest}: Iprops) => {
    return (
      <input
        className="shadow appearance-none
         border rounded-md border-gray-300 
          w-full py-2 px-3 text-gray-700 leading-tight
         focus:outline-none focus:shadow-outline  focus:ring-1 focus:border-blue-100
         focus:ring-blue-300 focus:ring-opacity-50"
        {...rest}
      />
    )};
export default Input;
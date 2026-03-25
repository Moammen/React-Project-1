import type { ReactNode } from "react";
interface Iprops {
    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-auto" | "w-1/2" | "w-1/3" | "w-1/4" | "w-fit";
};

const Button = ({ children , className , width , ...rest }: Iprops) => {
    return (
        <>
        <button className={`${className || ''}  px-1 py-1 rounded-md flex-1 ${width || 'w-auto'}`} {...rest}>
            {children}
        </button>
        </>
    )};
export default Button;
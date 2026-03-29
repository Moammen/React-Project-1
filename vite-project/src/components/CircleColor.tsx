import type { HTMLAttributes } from "react";

interface Iprops extends HTMLAttributes<HTMLSpanElement> {
    color: string,
};

const CircleColor = ({color , ...rest}: Iprops) => {
    return  <span  className="block w-6 h-6  rounded-full cursor-pointer" style={{ backgroundColor: color }} {...rest}></span>
};
export default CircleColor;
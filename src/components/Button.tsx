"use client";

// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { ComponentProps } from "react";


type ButtonProps = {
     children: React.ReactNode,
     className?: string,
}  & ComponentProps<"button">


export default function Button({children, className, ...props}:ButtonProps) {

    const {pending} =useFormStatus();
  return (
    <button
         {...props}
         className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out ${className}`}
         type="submit"
         disabled={pending}
         >
             {pending && <span className="loading loading-spinner"/> }
             {children}
    </button>
  )
}

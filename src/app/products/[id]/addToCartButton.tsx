"use client"

import { Span } from "next/dist/trace";
import { useState, useTransition } from "react"

interface AddToCartButtonProps{
    productId: string,
    incrementProductQuality:(product:string)=>Promise<void>
}

export default function AddToCartButton({productId, incrementProductQuality}:AddToCartButtonProps){

    const[isPendind, startTransition]=useTransition();
    const[sucess, setSucess]=useState(false);

 return(

    <div className="flex items-center gap-2">
        <button
        className="btn btn-primary"
        onClick={()=>{
            setSucess(false);
            startTransition(async()=>{
                await incrementProductQuality(productId)
                setSucess(true);
            })
        }}
        >
            Add to cart
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 64 64"
  fill="none"
>
  
  <path
    d="M12 24h40c2.209 0 4-1.791 4-4s-1.791-4-4-4H12c-2.209 0-4 1.791-4 4s1.791 4 4 4z"
    fill="#666"
  ></path>
  <path
    d="M57 12H23v8c0 4.418-3.582 8-8 8H7c-2.209 0-4 1.791-4 4s1.791 4 4 4h8v33c0 1.105.895 2 2 2h40c1.105 0 2-.895 2-2V28h8c2.209 0 4-1.791 4-4s-1.791-4-4-4z"
    fill="#888"
  ></path>
  <circle cx="18" cy="56" r="4" fill="#444"></circle>
  <circle cx="46" cy="56" r="4" fill="#444"></circle>
  
  <path
    d="M62 18c0-2.209-1.791-4-4-4h-7v-2c0-1.105-.895-2-2-2H23c-1.105 0-2 .895-2 2v2H11c-2.209 0-4 1.791-4 4s1.791 4 4 4h7v2c0 1.105.895 2 2 2h28c1.105 0 2-.895 2-2v-2h7c2.209 0 4-1.791 4-4z"
    fill="#666"
  ></path>
</svg>


        </button>

        {isPendind && <span className="loading loading-spinner loading-md"></span> }

        {!isPendind && sucess && ( <span className="text-success"> Successfully added to Cart.</span>
         )}
  </div>  

 ) 
}
"use client"
import { ShoppingCart } from "@/lib/db/cart"
import formatPrice from "@/lib/db/format"
import Link from "next/link"

interface ShoppingCartButtonProps{
    cart: ShoppingCart | null
}

export default function ShoppingCartButton({cart}:ShoppingCartButtonProps) {

    function closeDropdown(){
        const elem = document.activeElement as HTMLElement
        if(elem){
            elem.blur
        }
    }
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
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
        <span className="badge badge-sm indicator-item">
            {cart?.size || 0}
        </span>

        </div>
      </label>
      <div
      tabIndex={0}
      className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-30">
        <div className="card-body">
        <span className="text-lg font-bold">{cart?.size || 0} Items</span>
        <span className="text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}

        </span>
        <div className="card-actions">
            <Link
                href="/cart"
                className="btn btn-primary btn-block"
                onClick={closeDropdown}>
                View Cart
            </Link>
        </div>
        </div>
       
      </div>
    </div>
    
  )
}

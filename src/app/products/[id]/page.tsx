import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma"
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation"
import { title } from "process";
import { cache } from "react";
import AddToCartButton from "./addToCartButton";
import incrementProductQuantity from "./actions";

interface ProductProps{
    params:{
        id: string,
    }
}
// not that generateMetadata() if a build in function

const getProduct = cache(async(id:string)=>{
    const product = await prisma.product.findUnique({where:{id}})
    // in case this id does not exist
    if(!product) notFound();
    return product;
})

export async function generateMetadata({params:{id}}:ProductProps): Promise<Metadata> {

    const product = await getProduct(id);

    return{
        title: product.name + " | WallisEmphorium",
        description: product.description,
        openGraph:{
            images:[{url: product.imageUrl}],
        }
    }
        
    
    
}

export default async function ProductPage({params:{id}}:ProductProps) {
  const product = await getProduct(id);
  return (
    <div className=" flex flex-col lg:flex-row gap-6 lg:items-center">
        <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
        />
      <div>
        <h1 className="text-5xl font-bold mb-3">{product.name}</h1>
        <PriceTag price={product.price} className="mt-6"/>
        <p className="py-6">{product.description}</p>
        <AddToCartButton productId={product.id} incrementProductQuality={incrementProductQuantity}/>
      </div>
    </div>
  )
}

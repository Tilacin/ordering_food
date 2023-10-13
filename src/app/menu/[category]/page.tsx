
import { products } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//все продукты в одной категории


const CategoryPage = () => {
  const menuCategory = products.filter((product)=> console.log(product.category))
  
  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link className="w-full h-[60vh] sm:w-1/2 lg:w-1/3 border-r-2 border-b-2 border-red-500  p-4 flex flex-col justify-between group odd:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
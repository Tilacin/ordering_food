import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//Меню с категориями

function MenuPage() {
  return (
    <div className=" p-2 lg:px-20 xl:px-20    flex flex-col md:flex-row items-center  ">
      {menu.map((category) => (
        <Link href={`/menu/${category.slug}`} key={category.id} 
        >
          <div className="flex flex-col m-1   hover:bg-orange-100  items-center justify-center border-none hover:border-solid border-2 hover:border-red-100  rounded-lg ">
            <h1 className="uppercase font-bold text-2xl text-red-500 m-1">
              {category.title}
            </h1>
            <p className="flex  text-sm m- text-orange-500 font-bold items-center justify-center ">
              {category.desc}
            </p>
            <div className="overflow-hidden">
              <Image
                className=" hover:scale-110 transition duration-500 cursor-pointer object-cover p-2 "
                src={category.img}
                width={450}
                height={250}
                alt="cart"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPage;


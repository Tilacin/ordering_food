import Image from "next/image";
import React from "react";

function SingleProductPage() {
  return (
    <div className="p-2 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      <div className="flex flex-col m-2 hover:bg-orange-100  ">
        <h1 className="uppercase font-bold text-2xl text-red-500 ">
          Первое
        </h1>
        <div className="overflow-hidden">
          <Image
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover "
            src="/main_first.jpg"
            width={450}
            height={250}
            alt="cart"
          />
        </div>
      </div>
      <div className="flex flex-col m-2 hover:bg-orange-100">
        <h1 className="uppercase font-bold text-2xl text-red-500">
          Второе
        </h1>
        <div className="overflow-hidden">
          <Image
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover "
            src="/main_second.jpg"
            width={450}
            height={250}
            alt="cart"
          />
        </div>
      </div>
      <div className="flex flex-col m-2 hover:bg-orange-100">
        <h1 className="uppercase font-bold text-2xl text-red-500">Напитки</h1>
        <div className="overflow-hidden">
          <Image
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover "
            src="/main_drinks.jpg"
            width={450}
            height={250}
            alt="cart"
          />
        </div>
      </div>
      <div className="flex flex-col m-2 hover:bg-orange-100">
        <h1 className="uppercase font-bold text-2xl text-red-500">Десерты</h1>
        <div className="overflow-hidden">
          <Image
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover "
            src="/main_dessert.jpg"
            width={450}
            height={250}
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleProductPage;

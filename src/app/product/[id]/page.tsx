
import Image from "next/image";
import React from "react";

function SingleProductPage() {
  return (
    <div className="flex justify-around  items-center px-2">
      <div className="flex flex-col">
        Первые блюда
        <Image src="/main_first.jpg" width={450} height={250} alt="cart"/>
        </div>
      <div>
        Вторые блюда
        <Image src="/main_second.jpg" width={450} height={250} alt="cart"/>
        </div>
      <div>
        Напитки
        <Image src="/main_drinks.jpg"  width={450} height={250} alt="cart"/>
        </div>
      <div>
        Десерты
        <Image src="/main_dessert.jpg" width={450} height={250} alt="cart"/>
        </div>
    </div>
  );
}

export default SingleProductPage;

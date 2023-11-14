"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();





  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email,
          }),
        });
        const data =await res.json()
        router.push(`/pay/${data.id}`)
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* КОНТЕЙНЕР ДЛЯ ПРОДУКТОВ */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* ОТДЕЛЬНЫЙ ЭЛЕМЕНТ */}
        {products.map((item) => (
          <div className="flex items-center justify-between mb-4 max-sm:flex-col" key={item.id}>
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">
                {item.title} x{item.quantity}
              </h1>
              
            </div>
            <h2 className="font-bold">${item.price}</h2>
            <button
              className="cursor-pointer bg-red-200 p-1 rounded-md"
              onClick={() => removeFromCart(item)}
            >
             отмена
            </button>
          </div>
        ))}
      </div>
     
      
      {/* ПЛАТЕЖНЫЙ КОНТЕЙНЕР */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Всего продуктов ({totalItems} )</span>
          <span className="">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Стоимость обслуживания</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Стоимость доставки</span>
          <span className="text-green-500">БЕСПЛАТНО!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">ИТОГО(ВКЛ. НДС)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button
          className="flex justify-center mx-auto  bg-red-500 text-white p-3 rounded-md w-1/2 self-end"
          onClick={handleCheckout}
        >
          ОПЛАТИТЬ
        </button>
      </div>
    </div>
  );
};

export default CartPage;

//1:58
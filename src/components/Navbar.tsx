import React from "react";
import Menu from "./NavbarMini";
import Link from "next/link";


function MenuBlack() {
  const user = false;
  //justify-betweenmin-h-screen 
  return (
    <div className="h-12 flex p-4  items-center bg-black  border-b-2 border-b-yellow-500 md:h-16 xl:px-20 lg:px-20
    " >
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/" className="relative text-xl text-gray-500 font-bold no-underline px-3 py-2 transition hover:text-yellow-300 font-serif	" >Главная
          <span className="absolute z-0 left-0 top-0 w-full h-full border-solid border-b-2 border-yellow-300 rounded-2xl translate-y-2 opacity-0 transition hover:scale-100 hover:translate-y-0 hover:opacity-100"></span>
        </Link>

        <Link href="/menu" className="relative text-xl text-gray-500 font-bold no-underline px-3 py-2 transition hover:text-yellow-300 font-serif	">Меню
          <span className="absolute z-0 left-0 top-0 w-full h-full border-solid border-b-2 border-yellow-300 rounded-2xl translate-y-2 opacity-0 transition hover:scale-100 hover:translate-y-0 hover:opacity-100"></span>
        </Link>
      </div>
      {/* логотип */}
      <div className="text-xl font-bold flex-1">
        <Link href="/" className="text-3xl text-yellow-300 font-serif" >CulinArt

        </Link>
        
      </div>
      {/* мобильное меню */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* правильные ссылки */}
      <div className="hidden md:flex gap-4 items-center ">
        {!user ? (
          <>
          <Link href="/sign-in" className="relative text-xl text-gray-500 font-bold no-underline  px-3 py-2 transition hover:text-yellow-300 font-serif	"> Авторизация
            <span className="absolute z-0 left-0 top-0 w-full h-full border-solid border-b-2 border-yellow-300 rounded-2xl translate-y-2 opacity-0 transition hover:scale-100 hover:translate-y-0 hover:opacity-100"></span>
          </Link>
          <Link href="/cart" className="relative text-xl text-gray-500 font-bold no-underline px-3 py-2 transition hover:text-yellow-300 font-serif	">Корзина
          <span className="absolute z-0 left-0 top-0 w-full h-full border-solid border-b-2 border-yellow-300 rounded-2xl translate-y-2 opacity-0 transition hover:scale-100 hover:translate-y-0 hover:opacity-100"></span>
        </Link></>
        ) : (
          <Link href="/orders" className="relative text-lg text-gray-500 font-medium no-underline px-3 py-2 transition hover:text-cyan-300 font-serif	" >Заказы<span className="absolute z-0 left-0 top-0 w-full h-full border-solid border-b-2 border-cyan-300 rounded-2xl translate-y-12 opacity-0 transition hover:scale-100 hover:translate-y-0 hover:opacity-100"></span> </Link>
        )}
       
      </div>
      
    </div>
  );
}

export default MenuBlack;

import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";

function Navbar() {
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase bg-orange-100 md:h-16 xl:px-20 lg:px-20">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Главная</Link>
        <Link href="/product/1">Меню</Link>
        
        
      </div>
      {/* логотип */}
      <div className="text-xl font-bold flex-1">
        <Link href="/">Доставка еды</Link>
      </div>
      {/* мобильное меню */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* правильные ссылки */}
      <div className="hidden md:flex gap-4 items-center ">
        {!user ? (
          <Link href="/login">Авторизация</Link>
        ) : (
          <Link href="/orders">Заказы</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  );
}

export default Navbar;

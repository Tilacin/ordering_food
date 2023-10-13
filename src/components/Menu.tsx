"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const links = [
  { id: 1, title: "Главная", url: "/" },
  { id: 2, title: "Меню", url: "/menu" },
  
  { id: 4, title: "Корзина", url: "/cart" },
];

function Menu() {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div className="p-4">
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-black absolute left-0 top-2 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center  z-10">
          {links.map((item) => (
            <Link className="relative text-2xl text-gray-500 font-bold no-underline px-3 py-2 transition hover:text-yellow-300 font-serif	" href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
              <span className="absolute z-0 left-0 top-0 w-full h-full border-solid border-b-2 border-yellow-300 rounded-2xl translate-y-2 opacity-0 transition hover:scale-100 hover:translate-y-0 hover:opacity-100"></span>
            </Link>
          ))}

          <Link className="relative text-2xl text-gray-500 font-bold no-underline px-3 py-2 transition hover:text-yellow-300 font-serif	"
            href={user ? "/orders" : "/login"}
            onClick={() => setOpen(false)}
          >
            {user ? "Orders" : "Авторизация"}
            <span className="absolute z-0 left-0 top-0 w-full h-full border-solid border-b-2 border-yellow-300 rounded-2xl translate-y-2 opacity-0 transition hover:scale-100 hover:translate-y-0 hover:opacity-100"></span>
          </Link>
          <Link className="relative text-2xl text-gray-500 font-bold no-underline px-3 py-2 transition hover:text-yellow-300 font-serif	"
          href="/cart" onClick={() => setOpen(false)}>
             <span className="absolute z-0 left-0 top-0 w-full h-full border-solid border-b-2 border-yellow-300 rounded-2xl translate-y-2 opacity-0 transition hover:scale-100 hover:translate-y-0 hover:opacity-100"></span>
            </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;

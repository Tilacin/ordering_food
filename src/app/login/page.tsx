import Image from "next/image";
import Link from "next/link";
import React from "react";
//7:00
const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center bg-black font-serif ">
      {/* здесь */}
      <div className="relative flex items-center justify-center bg-transparent h-[70%] w-[90%] sm:h-[70%] sm:w-[70%] md:h-[70%] md:w-[60%] lg:w-[60%] 2xl:w-1/2 border-solid border-4 border-gray-500 rounded-xl duration-500 ease-in-out hover:shadow-2xl hover:border-red-600 hover:ring-inset hover:backdrop-sepia-[65]"
      
      >
      <form >
        <h2 className="text-2xl text-center text-[#fff] duration-500 ease-in-out">Авторизация</h2>
        <div className="relative w-80 my-8">
          <span className="absolute left-2 text-sm leading-10 duration-500 ease-in-out">
            🧓
          </span>
          <input type="text" placeholder="имя пользователя" required className="w-full h-12 bg-transparent border-solid border-2 border-gray-500 outline-[none]  rounded-md text-lg text-[#fff]px-0 pr-2 pl-8 duration-500 ease-in-out placeholder:text-gray-500"/>
        </div>
        <div className="relative w-80 my-8">
          <span className="absolute left-2 text-sm leading-10 duration-500 ease-in-out">
            🔐
          </span>
          <input type="password" placeholder="Пароль" required className="w-full h-12 bg-transparent border-solid border-2 border-gray-500 outline-[none]  rounded-md text-lg text-[#fff] px-0 pr-2 pl-8 duration-500 ease-in-out placeholder:text-gray-500"/>
        </div>
        <div className=" mb-4">
          <Link href="#" className="text-[#fff] text-lg decoration-0 hover:underline">Забыли пароль?</Link>🤦‍♂️
        </div>
        <button type="submit" className="relative w-full h-11 bg-gray-500  border-none outline-[none] rounded-md text-[#fff] cursor-pointer font-medium duration-500 ease-in-out">Вход</button>
        
        <div className="text-center my-6">
          <p className="text-[#fff]">У вас нет аккаунта? <Link href="#" className="text-gray-500 font-medium duration-500 ease-in-out hover:underline">Зарегистрироваться</Link></p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;

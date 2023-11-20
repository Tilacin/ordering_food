import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import prisma from "@/utils/connect";

import { ProductType } from "@/types/types";


const orders = async () => {
  let allOrders = await prisma.order.findMany();

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="flex justify-between px-4 pt-4">
        <h2>Заказы</h2>
        <h2>С возвращением, админ</h2>
      </div>
      <div className="p-2">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Продукт</span>
            <span>Цена</span>
            <span className="sm:text-left text-right">Статус</span>
            <span className="hidden md:grid">Дата заказа</span>
            <span className="hidden sm:grid">Почта</span>
          </div>
          <ul>
            {allOrders.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <ol className="text-gray-800 font-bold">
  {order.products.map((product: any, index: number) => (
    <li key={index}>
      {(product as ProductType).title}
    </li>
  ))}
</ol>
                </div>
                <div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">${+order.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 sm:text-left text-right">
                  <span
                    className={
                      order.status == "Paid!"
                        ? "bg-green-200 p-2 rounded-lg"
                        : order.status == "Not Paid!"
                        ? "bg-red-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">
                  {order.createdAt.toLocaleString()}
                </p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.userEmail}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;

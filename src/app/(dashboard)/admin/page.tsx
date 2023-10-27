import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <h2 className="text-2xl">
        Админка - с возвращением {session?.user.username}
      </h2>
    );
  }

  return <h2 className="text-2xl">Авторизируйтесь что бы войти в админку</h2>;
};

export default page;

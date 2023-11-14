import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";


interface YandexSignInButtonProps {
  children: ReactNode;
}

const YandexSignInButton: FC<YandexSignInButtonProps> = ({ children }) => {
  const { data: session } = useSession();
  const loginWithYandex = () => signIn("yandex",{callbackUrl: 'http://localhost:3000/'});
  return (
    <Button className={`w-full flex items-center bg-white border border-gray-300 text-gray-700 text-center py-2 px-4  text-sm cursor-pointer mb-2 ${session ? 'bg-green-500 border-green-800' : 'bg-red-500 border-red-800'} text-white`} onClick={loginWithYandex}>
     
      {children}

    </Button>
  );
};

export default YandexSignInButton;

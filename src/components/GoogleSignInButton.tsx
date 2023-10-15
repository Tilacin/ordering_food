import { FC, ReactNode } from "react";
import { Button } from "./ui/button";

interface GoogleSignInButtonProps {
  children: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => console.log("Войти с помощью гугл аккаунта");

  return (
    <Button className="w-full" onClick={loginWithGoogle}>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;

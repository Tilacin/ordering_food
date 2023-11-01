import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface GoogleSignInButtonProps {
  children: ReactNode;
}


const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  
  const loginWithGoogle = () => signIn("google")
   
   

  return (
    <Button className="w-full" onClick={loginWithGoogle}>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;

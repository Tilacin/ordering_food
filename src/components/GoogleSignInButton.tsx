import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";


interface GoogleSignInButtonProps {
  children: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const { data: session } = useSession();
  const loginWithGoogle = () => signIn("google",{callbackUrl: 'http://localhost:3000/'});
  return (
    <Button className="w-full" onClick={loginWithGoogle}>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;

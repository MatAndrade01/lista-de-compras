import ButtonMode from "../ButtonMode/ButtonMode";
import UserPhoto from "../UserPhoto/UserPhoto";
import { ReactNode } from "react";

interface HeaderMobileProps {
  children: ReactNode;
}

export const HeaderMobile = ({ children }: HeaderMobileProps) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-800 h-15 flex justify-between items-center">
        <UserPhoto />
        <ButtonMode />
      </header>
      <div className="pt-15"> {}
        {children}
      </div>
    </>
  );
};

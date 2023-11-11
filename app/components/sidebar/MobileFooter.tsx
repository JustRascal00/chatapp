"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";
import AvatarMobile from "../AvatarMobile"; // Import the AvatarMobile component
import { useState } from "react";
import { User } from "@prisma/client";
import Avatar from "../Avatar";
import SettingsModal from "./SettingsModal";


interface MobileFooterProps {
  currentUser: User
}

const MobileFooter: React.FC<MobileFooterProps> = ({
  currentUser
}) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  console.log({ currentUser, }, 'TEST')


  return (
    <>
     <SettingsModal 
      currentUser={currentUser}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
     />
    <div
     className=" 
     fixed 
     justify-between 
     w-full 
     bottom-0 
     z-40 flex 
     items-center 
     bg-white 
     border-t-[1px] 
     lg:hidden 
     gap-4
      "
    >
      <nav className="flex overflow-x-auto">
          <ul role="list" className="flex space-x-2">
            {routes.map((item) =>(
                <MobileItem 
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
                />
            ))}
          </ul>
        </nav>
        <nav className="
          ml-auto 
          transition
          flex items-center
          pr-4
        "
      >
        <div 
          onClick={() => setIsOpen(true)}
          className="
          mt-2
          cursor-pointer
          hover:opacity-75
          transition
          "
        >
          <Avatar user={currentUser}/>
          </div>
        </nav>
    </div>
    </>
  );
}


export default MobileFooter;
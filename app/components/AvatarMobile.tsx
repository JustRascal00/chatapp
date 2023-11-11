import { User } from "@prisma/client";
import Image from "next/image";
import useActiveList from "../hooks/useActiveList";

interface AvatarMobileProps {
  user?: User;
  onClick?: () => void; // Define an onClick prop
}

const AvatarMobile: React.FC<AvatarMobileProps> = ({ user, onClick }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  const handleAvatarClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
    <div className="relative" onClick={handleAvatarClick}>
      <div
        className="
          relative 
          inline-block 
          rounded-full 
          overflow-hidden
          h-8
          w-8
          sm:h-11
          sm:w-11
        "
      >
        <Image
          fill
          src={user?.image || '/images/placeholder.jpg'}
          alt="Avatar"
        />
      </div>
      {isActive && (
        <span
          className="
            absolute 
            block 
            rounded-full 
            bg-green-500 
            ring-2 
            ring-white 
            top-0 
            right-0
            h-2 
            w-2 
            sm:h-3 
            sm:w-3
          "
        />
      )}
    </div>
    </>
  );
}

export default AvatarMobile;
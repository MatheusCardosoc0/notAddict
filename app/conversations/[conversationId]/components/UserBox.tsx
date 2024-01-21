import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/modals/LoadingModal";

interface UserBoxProps {
  data: User
}

const UserBox: React.FC<UserBoxProps> = ({
  data
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios.post('/api/conversations', { userId: data.id })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <>
      {isLoading && (
        <LoadingModal />
      )}
      <div
        onClick={handleClick}
        className="
          min-w-[140px]
          max-w-[140px] 
          relative 
          flex 
          flex-col
          items-center 
          space-x-3 
          bg-neutral-700
          border-r-4
          border-b-4
          border-[#00000079]
          text-white 
          p-3 
          hover:bg-neutral-100
          rounded-lg
          transition
          cursor-pointer
          justify-center
        "
      >
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-center">
                {data.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserBox;
/* eslint-disable @next/next/no-img-element */
'use client';

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import { MdOutlineGroupAdd, MdSearch } from 'react-icons/md';
import clsx from "clsx";
import { find, uniq } from 'lodash';

import useConversation from "@/app/hooks/useConversation";
import { pusherClient } from "@/app/libs/pusher";
import GroupChatModal from "@/app/components/modals/GroupChatModal";
import ConversationBox from "./ConversationBox";
import { FullConversationType } from "@/app/types";
import Link from "next/link";
import UserBox from "@/app/conversations/[conversationId]/components/UserBox";

interface ConversationListProps {
  initialItems: FullConversationType[];
  users: User[];
  title?: string;
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
  users
}) => {
  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState(false)

  console.log(users)

  const router = useRouter();
  const session = useSession();

  const { conversationId, isOpen } = useConversation();

  const pusherKey = useMemo(() => {
    return session.data?.user?.email
  }, [session.data?.user?.email])

  useEffect(() => {
    if (!pusherKey) {
      return;
    }

    pusherClient.subscribe(pusherKey);

    const updateHandler = (conversation: FullConversationType) => {
      setItems((current) => current.map((currentConversation) => {
        if (currentConversation.id === conversation.id) {
          return {
            ...currentConversation,
            messages: conversation.messages
          };
        }

        return currentConversation;
      }));
    }

    const newHandler = (conversation: FullConversationType) => {
      setItems((current) => {
        if (find(current, { id: conversation.id })) {
          return current;
        }

        return [conversation, ...current]
      });
    }

    const removeHandler = (conversation: FullConversationType) => {
      setItems((current) => {
        return [...current.filter((convo) => convo.id !== conversation.id)]
      });
    }

    pusherClient.bind('conversation:update', updateHandler)
    pusherClient.bind('conversation:new', newHandler)
    pusherClient.bind('conversation:remove', removeHandler)
  }, [pusherKey, router]);

  return (
    <>
      <GroupChatModal
        users={users}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <aside className="w-full py-2 mt-8">
        <div className="px-6">
          <div className="flex justify-between mb-4 pt-4">
            <div className="text-2xl font-bold text-neutral-800">
              {allUsers ? "Usuários" : "Mensagens"}
            </div>
            <div className="flex items-center gap-4" >
              <div
                title="Criar grupo"
                onClick={() => setIsModalOpen(true)}
                className="
                rounded-full 
                p-2 
                bg-blue-300 
                text-gray-900 
                cursor-pointer 
                hover:opacity-75 
                transition
              "
              >
                <MdOutlineGroupAdd size={28} />
              </div>
              <div
                title="Buscar usuários"
                onClick={() => setAllUsers(prev => !prev)}
                className="
                rounded-full 
                p-2 
                bg-blue-300 
                text-gray-900 
                cursor-pointer 
                hover:opacity-75 
                transition
              "
              >
                <MdSearch size={28} />
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-[90%] overflow-x-scroll gap-4 pb-4" >
            {!allUsers && (
              items.map((item) => (
                <ConversationBox
                  key={item.id}
                  data={item}
                  selected={conversationId === item.id}
                />
              ))
            )}
            {allUsers && (
              users.map(user => (
                <UserBox key={user.id} data={user} />
              ))
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

export default ConversationList;

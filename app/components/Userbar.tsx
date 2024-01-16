"use client"

/* eslint-disable @next/next/no-img-element */
import { User } from "@prisma/client"
import Lottie from "lottie-react"
import Clock from '@/app/assets/clock.json'
import { TbStarsFilled } from "react-icons/tb"

interface UserbarProps {
  currentUser: User
}

const Userbar: React.FC<UserbarProps> = ({
  currentUser
}) => {
  return (
    <header
      className="flex gap-4 w-full"
    >
      <div
        className="bg-white rounded-md drop-shadow-[1px_1px_2px_black] flex flex-col p-4 items-center justify-center gap-3"
      >
        <img
          className="rounded-full w-[120px]"
          src={currentUser.image || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"} alt="userImage" />
        <span className="text-sm font-semibold text-center" >
          {currentUser.name}
        </span>
      </div>
      <div
        className="flex w-full gap-4"
      >
        <div className="flex-[2] flex bg-gradient-to-tr from-sky-600 to-blue-700 rounded-lg drop-shadow-[1px_1px_2px_black] border-b-4 border-r-2 border-[#00000051] p-2 justify-between" >
          <div
            className="flex flex-col gap-4 text-white"
          >
            <h3 className="text-xl font-semibold" >Tempo longe do(s) vicio(s)</h3>
            <div>
              <div
                className="flex"
              >
                <div className="flex flex-col p-1 w-[120px] text-lg items-center ">
                  <p>Tempo atual</p>
                  <p>7:43</p>
                </div>
                <div className="flex flex-col p-1 w-[140px] text-lg items-center ">
                  <p >Tempo Maximo</p>
                  <p>1:5:22</p>
                </div>
              </div>
              <button className="bg-red-500 mt-12 font-bold text-white p-2 rounded-lg" >Recaida</button>
            </div>
          </div>
          <div className="w-[200px]" >
            <Lottie animationData={Clock} />
          </div>
        </div>
        <div className="flex-1 bg-yellow-500 rounded-lg drop-shadow-[1px_1px_2px_black] flex items-center justify-center text-lg flex-col font-bold p-2" >
          <TbStarsFilled className="text-4xl" />
          <p className="text-center" >7 pontos de vontade</p>
        </div>
      </div>
    </header>
  )
}

export default Userbar

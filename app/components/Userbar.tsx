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
      className="flex flex-col gap-4 w-full lg:flex-row"
    >
      <div
        className="bg-white rounded-md border-b-4 border-r-4 border-[#00000051] flex flex-col p-4 items-center justify-center gap-3"
      >
        <img
          className="rounded-full w-[120px]"
          src={currentUser.image || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"} alt="userImage" />
        <span className="text-sm font-semibold text-center" >
          {currentUser.name}
        </span>
      </div>
      <div
        className="flex flex-col lg:flex-row w-full gap-4"
      >
        <div className="flex-[2] flex bg-gradient-to-tr from-teal-400 to-green-500 rounded-lg border-b-4 border-r-4 border-[#00000051] p-2 justify-between" >
          <div
            className="flex flex-col gap-4 text-white"
          >
            <h3 className="text-xl font-semibold drop-shadow-[1px_1px_1px_#0000007a]">Tempo longe do(s) vicio(s)</h3>
            <div>
              <div
                className="flex gap-2"
              >
                <div className="flex flex-col w-[120px] text-lg items-center drop-shadow-[1px_1px_1px_#0000007a] bg-sky-500 rounded-lg p-2">
                  <p>Tempo atual</p>
                  <p>7:43</p>
                </div>
                <div className="flex flex-col w-[140px] text-lg items-center drop-shadow-[1px_1px_1px_#0000007a] bg-indigo-500 rounded-lg p-2">
                  <p >Tempo Maximo</p>
                  <p>1:5:22</p>
                </div>
              </div>
              <button className="bg-red-500 drop-shadow-[1px_1px_1px_#0000007a] text-2xl mt-12 font-bold text-white p-2 rounded-lg" >Recaida</button>
            </div>
          </div>
          <div className="w-[200px]" >
            <Lottie animationData={Clock} />
          </div>
        </div>
        <div className="flex-1 bg-yellow-500 rounded-lg border-b-4 border-r-4 border-[#00000051] flex items-center justify-center flex-col gap-3 font-bold p-2" >
          <p className="text-2xl text-white drop-shadow-[1px_1px_1px_#0000007a]" >Pontos de Vontade</p>
          <div
            className="flex items-center gap-3"
          >
            <p className="text-white drop-shadow-[1px_1px_1px_#0000007a] text-5xl">7</p>
            <TbStarsFilled className="text-6xl text-white drop-shadow-[1px_1px_1px_#0000007a]" />
          </div>


        </div>
      </div>
    </header>
  )
}

export default Userbar

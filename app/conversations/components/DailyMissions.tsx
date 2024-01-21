import { FaCheckCircle, FaHourglassStart, FaKey, FaStar } from 'react-icons/fa'
import { IoCloseCircle, IoStarHalfSharp, IoTrophy } from 'react-icons/io5'

const Icons = [
    { Icon: IoStarHalfSharp },
    { Icon: FaKey },
    { Icon: IoStarHalfSharp },
    { Icon: FaStar },
    { Icon: FaHourglassStart },
    { Icon: FaStar },
    { Icon: IoTrophy }
]

const DailyMissions = () => {
    return (
        <div
            className="flex flex-col lg:flex-row w-full justify-between mt-12 gap-4"
        >
            <div className='flex items-center w-full max-w-[620px] text-3xl py-4 px-2 mx-auto bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-500 rounded-lg flex-col gap-12 border-r-4 border-b-4 border-[#0000003b]' >
                <div
                    className='flex flex-col gap-3 text-base'
                >
                    <h3 className='text-3xl font-bold' >Recompensa por login</h3>
                    <span className='text-sm' >Toda semana novas recompenas, para aqueles que estão na luta contra seus vicios, ao completar uma semana livre, você conquistará um novo trofeu para sua conta.</span>
                </div>

                <div className='flex items-center justify-between w-full' >
                    {Icons.map((Icon, i) => (
                        <span
                            key={i}
                            className='flex p-2 rounded-md bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-[1px_1px_1px_black] hover:brightness-125 hover:scale-125 duration-500 cursor-pointer'
                        >
                            <p className={`text-base`} >{i + 1}</p>
                            <Icon.Icon className={`${i > 1 && "text-4xl"} ${i > 3 && "text-5xl"} ${i == 6 && "text-6xl"}`} />
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex gap-4 mx-auto'>
                <div
                    className='flex flex-col gap-6 max-w-[340px] bg-neutral-200 rounded-lg border-r-4 border-b-4 border-[#0000003b] p-2 text-base'
                >
                    <h3 className='text-2xl font-semibold' >Missões diarias</h3>
                    <div className='flex flex-col gap-3' >
                        <span
                            className='flex justify-between w-full font-medium bg-white rounded-lg p-2 items-center drop-shadow-[1px_1px_1px_black] hover:brightness-90 cursor-pointer'
                        >
                            <p>Não reacair</p>
                            <IoCloseCircle className='text-3xl text-red-500' />
                        </span>
                        <span
                            className='flex justify-between w-full font-medium bg-white rounded-lg p-2 items-center drop-shadow-[1px_1px_1px_black] hover:brightness-90 cursor-pointer'
                        >
                            <p>Conversar com 1 pessoas da mesma categoria que a sua</p>
                            <IoCloseCircle className='text-3xl text-red-500' />
                        </span>
                        <span
                            className='flex justify-between w-full font-medium bg-white rounded-lg p-2 items-center drop-shadow-[1px_1px_1px_black] hover:brightness-90 cursor-pointer'
                        >
                            <p>Visualizar o chat regional</p>
                            <IoCloseCircle className='text-3xl text-red-500' />
                        </span>
                    </div>
                </div>
                <div
                    className='flex flex-col gap-6 max-w-[340px] bg-neutral-200 rounded-lg border-r-4 border-b-4 border-[#0000003b] p-2 text-base'
                >
                    <h3 className='text-2xl font-semibold' >Missões semanais</h3>
                    <div className='flex flex-col gap-3' >
                        <span
                            className='flex justify-between w-full font-medium bg-white rounded-lg p-2 items-center drop-shadow-[1px_1px_1px_black] hover:brightness-90 cursor-pointer'
                        >
                            <p>Realizar uma nova amizade</p>
                            <IoCloseCircle className='text-3xl text-red-500' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyMissions
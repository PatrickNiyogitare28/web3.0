import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si'; 
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120] flex justify-center items-center border-[0.5px] border-gray-400 text-white';

const Input = ({placeholder, name, type, value, handleChange}) => {
    <input 
     placeholder={placeholder}
     type={type}
     step="0.0001"
     value={value}
     onChange={(e) => handleChange(e, name)}
     className="my-2 w-full rounded-sm outline-none bg-transparent text-white border-none text-sm white-glassmorpism  "
    />
}

const Welcome = () => {
    const connectWallet = () => {

    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Cryto <br/> accross the world</h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">Explore the crypto world. Buy and sell crypto currencies easily on Krypto. </p>
                    <button 
                    type="button" 
                    onClick={connectWallet}
                    className="flex flext-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button>
                    <div className="grid sm:grid-cols-3 gird-cols-2 w-ful mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliability
                        </div>
                        <div className={commonStyles}>
                            Security 
                        </div>
                        <div className={`rounded-tr-2xl `+commonStyles}>
                            Ethereum 
                        </div>
                        <div className={commonStyles}>
                            Security 
                        </div>
                        <div className={commonStyles}>
                            Low fees 
                        </div>
                        <div className={`rounded-br-2xl `+commonStyles}>
                            Blockchain
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-w  flex  justify-around flex-center items-center">
                                    <SiEthereum fontSize={21} color="#ffff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#ffff" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    Address
                                </p>
                                <p className="text-white font-semibold text-lg">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => {}} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Welcome;
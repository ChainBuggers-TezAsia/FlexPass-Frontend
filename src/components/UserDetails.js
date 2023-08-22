import profileImg from '../assets/profile-img.png'
import React from 'react'
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from "@taquito/beacon-wallet";

const Tezos = new TezosToolkit('https://ghostnet.ecadinfra.com');
const wallet = new BeaconWallet({ name: "FlexPass" });


Tezos.setWalletProvider(wallet);

async function requestPermissions() {
  try {
    console.log("Requesting permissions...");
    const permissions = await wallet.client.requestPermissions();
    console.log("Got permissions:", permissions.address);
  } catch (error) {
    console.log("Got error:", error);
  }
}

function handleConnectWallet() {
  requestPermissions();
}

export default function UserDetails() {
  return (
    <div className='flex flex-col cursor-pointer text-semibold text-white font-poppins font-semibold justify-center items-center'>
      {/* Header */}
      <div className='px-14 py-12 flex items-center'>
        <img className='mr-5' src={profileImg} />
        <div className='flex flex-col'>
          <div className='text-5xl'>Elie James</div>
          <div className='font-3xl'>+91 9381215863</div>
        </div>
      </div>
      {/* Body */}
      <div className='flex flex-col items-center my-5'>
        <button className="rounded-full bg-blue-900 my-5">
          <div className="rounded-[20px] [background:linear-gradient(-38.77deg,_rgba(191,_191,_191,_0.06),_rgba(0,_0,_0,_0)),_rgba(0,_0,_0,_0.14)] shadow-[-8px_4px_5px_rgba(0,_0,_0,_0.24)] [backdrop-filter:blur(53px)] w-48 h-16  text-white text-5xl text-center font-noto-sans px-4 py-4">
            <div className='text-4xl cursor-pointer pb-4' onClick={handleConnectWallet}>
              Profile
            </div>
          </div>
        </button>
        <button className="rounded-full bg-blue-900 my-5">
          <div className="rounded-[20px] [background:linear-gradient(-38.77deg,_rgba(191,_191,_191,_0.06),_rgba(0,_0,_0,_0)),_rgba(0,_0,_0,_0.14)] shadow-[-8px_4px_5px_rgba(0,_0,_0,_0.24)] [backdrop-filter:blur(53px)] w-48 h-16  text-white text-5xl text-center font-noto-sans px-4 py-4">
            <div className='text-4xl cursor-pointer pb-4' onClick={handleConnectWallet}>
              My Tickets
            </div>
          </div>
        </button>
        <button className="rounded-full bg-blue-900 my-5">
          <div className="rounded-[20px] [background:linear-gradient(-38.77deg,_rgba(191,_191,_191,_0.06),_rgba(0,_0,_0,_0)),_rgba(0,_0,_0,_0.14)] shadow-[-8px_4px_5px_rgba(0,_0,_0,_0.24)] [backdrop-filter:blur(53px)] w-48 h-16  text-white text-5xl text-center font-noto-sans px-4 py-4">
            <div className='text-4xl cursor-pointer pb-4' onClick={handleConnectWallet}>
              Wallet
            </div>
          </div>
        </button>
        <button className="rounded-full bg-blue-900 my-5">
          <div className="rounded-[20px] [background:linear-gradient(-38.77deg,_rgba(191,_191,_191,_0.06),_rgba(0,_0,_0,_0)),_rgba(0,_0,_0,_0.14)] shadow-[-8px_4px_5px_rgba(0,_0,_0,_0.24)] [backdrop-filter:blur(53px)] w-48 h-16  text-white text-5xl text-center font-noto-sans px-4 py-4">
            <div className='text-4xl cursor-pointer pb-4' onClick={handleConnectWallet}>
              Log Out
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}


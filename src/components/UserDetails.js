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
        <div className='flex flex-col text-semibold text-white font-poppins font-semibold justify-start items-center'>
            {/* Header */}
            <div className='px-14 py-12 flex items-center'>
                <img className='mr-5' src={profileImg} />
                <div className='flex flex-col'>
                    <div className='text-5xl'>Elie James</div>
                    <div className='font-3xl'>+91 9381215863</div>
                </div>
            </div>
            {/* Body */}
            <div className='flex flex-col '>
                <div className='text-5xl pb-4'>Profile</div>
                <div className='text-5xl pb-4'>My Tickets</div>
                <div className='text-5xl pb-4' onClick={handleConnectWallet}>Wallet</div>
            </div>
        </div>
    )
}


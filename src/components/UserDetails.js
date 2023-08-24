// import profileImg from "../assets/profile-img.png";
// import React, { useState } from "react";
// import { BsTicketPerforatedFill } from "react-icons/bs";
// import { FaWallet } from "react-icons/fa";
// import { TezosToolkit } from "@taquito/taquito";
// import { BeaconWallet } from "@taquito/beacon-wallet";
// import { TempleWallet } from '@temple-wallet/dapp';


// const Tezos = new TezosToolkit('https://testnet-tezos.giganode.io');

// // const Tezos = new TezosToolkit("https://ghostnet.ecadinfra.com");
// // const wallet = new BeaconWallet({
// //   name: "FlexPass",
// //   preferredNetwork: "ghostnet", // or "testnet" based on your use case
// // });

// // Tezos.setWalletProvider(wallet);

// // async function requestPermissions() {
// //   try {
// //     console.log("Requesting permissions...");
// //     const permissions = await wallet.client.requestPermissions();
// //     console.log("Got permissions:", permissions.address);
// //   } catch (error) {
// //     console.log("Got error:", error);
// //   }
// // }

// //import { TempleWallet } from '@temple-wallet/dapp';
// TempleWallet.isAvailable()
//   .then(() => {
//     const mywallet = new TempleWallet('Flexpass');
//     mywallet
//       .connect('ghostnet')
//       .then(() => {
//         Tezos.setWalletProvider(mywallet);
//         return mywallet.getPKH();
//       })
//       .then((pkh) => {
//         console.log(`Your address: ${pkh}`);
//       });
//   })
//   .catch((err) => console.log(err));

// // function handleConnectWallet() {
// //   requestPermissions();
// // }

// const handleConnectWallet = async () => {
//   try {
//     const available = await TempleWallet.isAvailable();
//     if (!available) {
//       console.log("Temple Wallet is not available");
//       return;
//     }

//     const wallet = new TempleWallet("MyAwesomeDapp");
//     await wallet.connect("ghostnet");

//     Tezos.setWalletProvider(wallet);

//     const pkh = await wallet.getPKH();
//     console.log(`Connected with address: ${pkh}`);
//   } catch (error) {
//     console.error("Error connecting wallet:", error);
//   }
// };

// export default function UserDetails(props) {
  
//   const handleTicket = () => {
//     props.setButton(1);
//   };
//   const handleWallet = () => {
//     props.setButton(2);
//   };
//   console.log("log", props.userData);

//   return (
//     <div className="flex flex-col cursor-pointer text-semibold text-white font-poppins font-semibold justify-center items-center">
//       {/* Header */}
//       <div className="pt-12 flex flex-col items-center">
//         <img className="m-auto" src={profileImg} />
//         <div className="flex flex-col my-5 text-center">
//           <div className="text-5xl">{props.userData.name}</div>
//           <div className="font-3xl">+91 {props.userData.phone}</div>
//         </div>
//       </div>
//       <div className="flex flex-col items-center my-5">
//         <button
//           className={`rounded-2xl ${
//             props.button === 2 ? "bg-transparent" : "bg-white"
//           } my-5`}
//         >
//           <div className={`rounded-[10px]  w-48 h-16  ${
//             props.button === 2 ? "text-white" : "text-[#333333]"
//           } text-5xl text-center font-noto-sans px-4 py-4`}>
//             <div
//               className="text-4xl cursor-pointer pb-4 flex justify-around"
//               onClick={handleTicket}
//             >
//               <span className="py-1">
//                 <BsTicketPerforatedFill color={props.button === 2 ? 'white': '#333333'} />
//               </span>
//               <span>Tickets</span>
//             </div>
//           </div>
//         </button>
//         <button
//           className={`rounded-2xl ${
//             props.button === 1 ? "bg-transparent" : "bg-white"
//           } my-5`}
//         >
//           <div className={`rounded-[10px]  w-48 h-16  ${
//             props.button === 1 ? "text-white" : "text-[#333333]"
//           } text-5xl text-center font-noto-sans px-4 py-4`}>
//             <div
//               className="text-4xl cursor-pointer pb-4 flex justify-around"
//               onClick={handleConnectWallet}
//               // onClick={handleWallet}
//             >
//               <span className="py-1">
//                 <FaWallet color={props.button === 1 ? 'white': '#333333'} />
//               </span>
//               <span>Wallet</span>
//             </div>
//           </div>
//         </button>
//         {/* <button className="rounded-full bg-blue-900 my-5">
//           <div className="rounded-[20px] [background:linear-gradient(-38.77deg,_rgba(191,_191,_191,_0.06),_rgba(0,_0,_0,_0)),_rgba(0,_0,_0,_0.14)] shadow-[-8px_4px_5px_rgba(0,_0,_0,_0.24)] [backdrop-filter:blur(53px)] w-48 h-16  text-white text-5xl text-center font-noto-sans px-4 py-4">
//             <div className='text-4xl cursor-pointer pb-4' onClick={handleConnectWallet}>
//               Log Out
//             </div>
//           </div>
//         </button> */}
//       </div>
//     </div>
//   );
// }
import profileImg from "../assets/profile-img.jpg";
import React from "react";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { TezosToolkit } from "@taquito/taquito";
import { TempleWallet } from '@temple-wallet/dapp';

// Initialize Tezos toolkit
const Tezos = new TezosToolkit('https://testnet-tezos.giganode.io');

export default function UserDetails(props) {
  const handleTicket = () => {
    props.setButton(1);
  };
  const handleWallet = () => {
    props.setButton(2);
  };

  return (
    <div className="flex flex-col cursor-pointer text-semibold text-white font-poppins font-semibold justify-center items-center">
      {/* Header */}
      <div className="pt-12 flex flex-col items-center">
        <img className="m-auto" src={profileImg} alt="Profile" />
        <div className="flex flex-col my-5 text-center">
          <div className="text-5xl">{props.userData.name}</div>
          <div className="font-3xl">+91 {props.userData.phone}</div>
        </div>
      </div>
      <div className="flex flex-col items-center my-5">
        <button
          className={`rounded-2xl ${props.button === 2 ? "bg-transparent" : "bg-white"
            } my-5`}
        >
          <div className={`rounded-[10px] w-48 h-16  ${
            props.button === 2 ? "text-white" : "text-[#333333]"
          } text-5xl text-center font-noto-sans px-4 py-4`}>
            <div
              className="text-4xl cursor-pointer pb-4 flex justify-around"
              onClick={handleTicket}
            >
              <span className="py-1">
                <BsTicketPerforatedFill
                  color={props.button === 2 ? "white" : "#333333"}
                />
              </span>
              <span>Tickets</span>
            </div>
          </div>
        </button>
        <button
          className={`rounded-2xl ${props.button === 1 ? "bg-transparent" : "bg-white"
            } my-5`}
        >
          <div className={`rounded-[10px] w-48 h-16  ${
            props.button === 1 ? "text-white" : "text-[#333333]"
          } text-5xl text-center font-noto-sans px-4 py-4`}>
            <div
              className="text-4xl cursor-pointer pb-4 flex justify-around"
              onClick={handleConnectWallet}
            >
              <span className="py-1">
                <FaWallet color={props.button === 1 ? "white" : "#333333"} />
              </span>
              <span>Wallet</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}


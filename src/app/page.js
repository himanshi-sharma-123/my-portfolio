import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex md:ml-10 mt-3.5 md:mt-0">
        <Image src={"/hero.avif"} width={2000} height={2000} />
      </div>
      <div className="flex flex-col md:ml-4 mt-5 md:mt-0">
        <div className="text-3xl mt-10 md:text-5xl md:mt-20 sm:text-3xl">
          Hey, this is Himanshi Sharma, a full stack developer currently
          pursuing B.Tech at GGSPIU
        </div>
        <div className="mt-10">
          <button className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-4 px-6 rounded-full">
            Wanna chat?
          </button>
        </div>
      </div>
    </div>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex">
//       <div className="flex ml-10 -mt-3.5">
//         <Image src={"/hero.avif"} width={2000} height={2000} />
//       </div>
//       <div className="flex flex-col">
//         <div className="text-5xl mt-20">
//           Hey, this is Himanshi Sharma, a full stack developer currently
//           pursuing B.Tech at GGSPIU
//         </div>
//         <div className="ml-19 mt-5">
//           <button className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-4 px-6 rounded-full mb-2 md:mb-0 md:mr-4 mt-5">
//             Wanna chat?
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";

const details = [
  {
    id: 1,
    image: "/bookD.png",
    colorClass: "bg-blue-500",
    title: "Book Store",
    textC: "slate-50",
    tools: "Reactjs, Vitejs",
    timeline: "Dec 7 - 11, 2023",
    description:
      "Built a website which is equipped with 4+ features designed to store, manage and upload books for sale. The functionalities encompass user authentication through Firebase for login and signup, complemented by a chatbot for engaging user interactions. Incorporating modules for book inventory, this system facilitates tracking of available books and customer profiles. By utilizing this computerized setup, it mitigates the risk of losing book or customer records, a common occurrence in non-computerized systems.",
    video: "/bookV.mp4",
    github: "https://github.com/himanshi-sharma-123/Book-Store",
    live: "https://books-web-store.netlify.app/",
  },
  {
    id: 2,
    image: "/memeD.jpeg",
    colorClass: "bg-purple-950",
    title: "Meme Generator",
    textC: "fuchsia-400",
    tools: "Reactjs, Rest API",
    timeline: "April, 2023",
    description:
      "Developed a web-based Meme Generator allowing users to create custom memes by combining text and images, utilizing an API with access to a diverse library of 100+ images.",
    video: "/memeV.mp4",
    github: "https://github.com/himanshi-sharma-123/meme-generator",
    live: "https://meme-generator-flax-delta.vercel.app/",
  },
  {
    id: 3,
    image: "/paymentD.png",
    colorClass: "bg-orange-400",
    title: "Payment Gateway",
    textC: "red-800",
    tools: "HTML, CSS, Javascript",
    timeline: "May - June, 2023",
    description:
      " Developed a web application using with HTML, CSS from scratch as the part of The Sparks Foundation Internship by using Razorpay as a Payment Integration",
    video: "/paymentV.mp4",
    github: "https://github.com/himanshi-sharma-123/Payment-Integration",
    live: "https://payment-integration-gateway.netlify.app/",
  },
  {
    id: 4,
    image: "/travelD.jpeg",
    colorClass: "bg-pink-500",
    title: "My Travel Journal",
    textC: "orange-500",
    tools: "Reactjs, React Props Learning",
    timeline: "April, 2023",
    description:
      "It is a static website that I built to learn Reactjs and props",
    video: "/travelV.mp4",
    github: "https://github.com/himanshi-sharma-123/travel-journal",
    live: "https://himanshi-sharma-mytraveljournal.netlify.app/",
  },
];

function ProjectDetail({ params }) {
  const detail = details.find((d) => d.id == params.id);
  return (
    <div className="flex flex-col justify-between min-h-screen mt-6 mx-10 font-mono">
      <div
        className={`flex flex-col md:flex-row md:gap-20 md:ml-10 mt-3.5 md:mt-0 ${detail.colorClass}`}
      >
        <div>
          <h1
            className={`text-6xl mt-20 ml-5 md:ml-20 font-mono italic font-bold text-center text-${detail.textC}`}
          >
            {detail.title}
          </h1>
        </div>
        <div className="mt-10 md:mt-0 md:ml-40">
          <Image
            src={detail.image}
            width={500}
            height={500} // Adjust the height as needed
            className="bg-cover bg-center w-full md:w-auto"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-40 mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">🧰Tools</h1>
          <h2 className="text-1xl text-gray-500 font-bold">{detail.tools}</h2>
        </div>
        <div className="mt-5 md:mt-0">
          <h1 className="text-3xl font-bold">🕛Timeline</h1>
          <h2 className="text-1xl text-gray-500 font-bold">
            {detail.timeline}
          </h2>
        </div>
        <div className="mt-5 md:mt-0 flex flex-row gap-10">
          <Link
            href={detail.github}
            className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 cursor-custom block"
          >
            Github
          </Link>
          <Link
            href={detail.live}
            className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 cursor-custom block"
          >
            Live Site
          </Link>
          {/* <Link
            href="/"
            className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 cursor-custom block"
          >
            Demo Video
          </Link> */}
        </div>
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-3xl mt-20 font-bold">🌴Brief</h1>
            <p className="mt-7 ml-7">{detail.description}</p>
          </div>
          <video
            controls
            width="500"
            height="250"
            className="ml-20 mt-10 md:mt-0 md:ml-0 self-center md:self-auto"
          >
            <source src={detail.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
export default ProjectDetail;

// <p className="text-left grid grid-cols-1 gap-6 sm:grid-cols-2 mt-7 ">

// import Image from "next/image";
// import Link from "next/link";

// const details = [
//   {
//     id: 1,
//     image: "/bookD.png",
//     colorClass: "bg-blue-500",
//     title: "Book Store",
//     textC: "slate-50",
//     tools: "Reactjs, Vitejs",
//     timeline: "Dec 7 - 11, 2023",
//     description:
//       "Built a website which is equipped with 4+ features designed to store, manage and upload books for sale. The functionalities encompass user authentication through Firebase for login and signup, complemented by a chatbot for engaging user interactions. Incorporating modules for book inventory, this system facilitates tracking of available books and customer profiles. By utilizing this computerized setup, it mitigates the risk of losing book or customer records, a common occurrence in non-computerized systems.",
//   },
//   {
//     id: 2,
//     image: "/memeD.jpeg",
//     colorClass: "bg-purple-950",
//     title: "Meme Generator",
//     textC: "fuchsia-400",
//     tools: "Reactjs, Rest API",
//     timeline: "April, 2023",
//     description:
//       "Developed a web-based Meme Generator allowing users to create custom memes by combining text and images, utilizing an API with access to a diverse library of 100+ images.",
//   },
//   {
//     id: 3,
//     image: "/paymentD.png",
//     colorClass: "bg-orange-400",
//     title: "Payment Gateway",
//     textC: "red-800",
//     tools: "HTML, CSS, Javascript",
//     timeline: "May - June, 2023",
//     description:
//       " Developed a web application using with HTML, CSS from scratch as the part of The Sparks Foundation Internship by using Razorpay as a Payment Integration",
//   },
//   {
//     id: 4,
//     image: "/travelD.jpeg",
//     colorClass: "bg-pink-500",
//     title: "My Travel Journal",
//     textC: "orange-500",
//     tools: "Reactjs, React Props Learning",
//     timeline: "April, 2023",

//     description:
//       "It is a static website that I built to learn Reactjs and props",
//   },
// ];

// function ProjectDetail({ params }) {
//   const detail = details.find((d) => d.id == params.id);
//   return (
//     <div className="flex flex-col justify-between min-h-screen mt-6 mx-10 font-mono">
//       <div
//         className={`flex flex-row gap-20 md:ml-10 mt-3.5 md:mt-0 ${detail.colorClass}`}
//       >
//         <div>
//           <h1
//             className={`text-6xl mt-20 ml-20 font-mono italic font-bold text-center text-${detail.textC}`}
//           >
//             {detail.title}
//           </h1>
//         </div>
//         <div className="ml-40">
//           <Image
//             src={detail.image}
//             width={500}
//             height={500} // Adjust the height as needed
//             className="bg-cover bg-center w-full mt-7 px-5"
//           />
//         </div>
//       </div>
//       <div className="flex flex-row gap-40 mt-10">
//         <div className="flex flex-col">
//           <h1 className="text-3xl font-bold">Tools</h1>
//           <h2 className="text-1xl text-gray-500 font-bold">{detail.tools}</h2>
//         </div>
//         <div className="ml-20">
//           <h1 className="text-3xl font-bold">Timeline</h1>
//           <h2 className="text-1xl text-gray-500 font-bold">
//             {detail.timeline}
//           </h2>
//         </div>
//         <div className="mt-3">
//           <Link
//             href="/"
//             className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4 cursor-custom"
//           >
//             Github
//           </Link>
//           <Link
//             href="/"
//             className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full ml-10 mb-2 md:mb-0 md:mr-4 cursor-custom"
//           >
//             Live Site
//           </Link>
//           <Link
//             href="/"
//             className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full ml-10 mb-2 md:mb-0 md:mr-4 cursor-custom"
//           >
//             Demo Video
//           </Link>
//         </div>
//       </div>

//       <div>
//         <h1 className="text-3xl mt-20 font-bold">Brief</h1>
//         <p className="text-left grid grid-cols-1 gap-6 sm:grid-cols-2 mt-7 ">
//           {detail.description}
//         </p>
//       </div>
//     </div>
//   );
// }
// export default ProjectDetail;

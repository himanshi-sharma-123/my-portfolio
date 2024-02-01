import Image from "next/image";
import Link from "next/link";

const details = [
  {
    id: 1,
    image: "/bookD.png",
    colorClass: "bg-blue-500",
    title: "Book Store",
    tools: "Reactjs, Vitejs",
    timeline: "Dec 7 - 11, 2023",
    description:
      "Built a website which is equipped with 4+ features designed to store, manage and upload books for sale. The functionalities encompass user authentication through Firebase for login and signup, complemented by a chatbot for engaging user interactions. Incorporating modules for book inventory, this system facilitates tracking of available books and customer profiles. By utilizing this computerized setup, it mitigates the risk of losing book or customer records, a common occurrence in non-computerized systems.",
  },
  {
    id: 2,
    image: "/memeD.jpg",
    colorClass: "bg-green-500",
    title: "Meme Generator",
    tools: "Reactjs, Rest API",
    timeline: "April, 2023",
    description:
      "Developed a web-based Meme Generator allowing users to create custom memes by combining text and images, utilizing an API with access to a diverse library of 100+ images.",
  },
  {
    id: 3,
    image: "/paymentD.png",
    colorClass: "bg-gray-500",
    title: "donation",
    tools: "HTML, CSS, Javascript",
    timeline: "May - June, 2023",
    description:
      " Developed a web application using with HTML, CSS from scratch as the part of The Sparks Foundation Internship by using Razorpay as a Payment Integration",
  },
  {
    id: 4,
    image: "/travelD.jpeg",
    colorClass: "bg-pink-500",

    title: "My Travel Journal",
    tools: "Reactjs, React Props Learning",
    timeline: "April, 2023",

    description:
      "It is a static website that I built to learn Reactjs and props",
  },
];

function ProjectDetail({ params }) {
  const detail = details.find((d) => d.id == params.id);
  return (
    <div className="flex flex-col justify-between min-h-screen mt-6 mx-10">
      <div className="flex flex-row gap-20 md:ml-10 mt-3.5 md:mt-0">
        <div>
          <h1 className="text-7xl mt-20 ml-20">{detail.title}</h1>
        </div>
        <div className="ml-20">
          <Image
            src={detail.image}
            width={500}
            height={500} // Adjust the height as needed
            className="bg-cover bg-center w-full top-0 left-0 mt-0"
          />
        </div>
      </div>
      <div className="flex flex-row gap-40 mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Tools</h1>
          <h2 className="text-1xl">{detail.tools}</h2>
        </div>
        <div className="ml-20">
          <h1 className="text-3xl font-bold">Timeline</h1>
          <h2 className="text-1xl">{detail.timeline}</h2>
        </div>
        <div className="mt-3">
          <Link
            href="/"
            className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4"
          >
            Github
          </Link>
          <Link
            href="/"
            className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full ml-10 mb-2 md:mb-0 md:mr-4"
          >
            Live Site
          </Link>
          <Link
            href="/"
            className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full ml-10 mb-2 md:mb-0 md:mr-4"
          >
            Demo Video
          </Link>
        </div>
      </div>

      <div>
        <h1 className="text-3xl mt-20 font-bold">Brief</h1>
        <p className="text-left grid grid-cols-1 gap-6 sm:grid-cols-2 mt-7">
          {detail.description}
        </p>
      </div>
      <div>
        <h1>Images</h1>
      </div>
    </div>
  );
}
export default ProjectDetail;

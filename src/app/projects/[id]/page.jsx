import Image from "next/image";
import Link from "next/link";

const details = [
  {
    id: 1,
    image: "/book store.png",
    colorClass: "bg-blue-500",
    title: "Book Store",
    tools: "Reactjs, Vitejs",
    timeline: "Dec 7 - 11, 2023",
    description:
      "• Built a website which is equipped with 4+ features designed to store, manage and upload books for sale. • The functionalities encompass user authentication through Firebase for login and signup, complemented by a chatbot for engaging user interactions.",
  },
  {
    id: 2,
    image: "/book store (1).png",
    colorClass: "bg-green-500",
    title: "Meme Generator",
    tools: "Reactjs",

    description:
      "Discover the alchemy of words as you embark on a journey through‘Express Your Book Love.’ This guide unveils the art of crafting heartfelt essays, inviting you to weave prose that mirrors the depth of your passion for cherished reads",
  },
  {
    id: 3,
    image: "/Payment Gateway Integration.png",
    colorClass: "bg-gray-500",

    title: "donation",
    tools: "HTML, CSS",

    description:
      "Discover the alchemy of words as you embark on a journey through‘Express Your Book Love.’ This guide unveils the art of crafting heartfelt essays, inviting you to weave prose that mirrors the depth of your passion for cherished reads",
  },
  {
    id: 4,
    image: "/my travel journal.png",
    colorClass: "bg-pink-500",

    title: "Travel Journal",
    tools: "Reactjs",

    description:
      "Discover the alchemy of words as you embark on a journey through‘Express Your Book Love.’ This guide unveils the art of crafting heartfelt essays, inviting you to weave prose that mirrors the depth of your passion for cherished reads",
  },
];

function ProjectDetail({ params }) {
  const detail = details.find((d) => d.id == params.id);
  return (
    <div className="flex flex-col justify-between min-h-screen mt-6 mx-10">
      <div className="flex md:ml-10 mt-3.5 md:mt-0">
        <Image src={detail.image} alt="" width={500} height={500} />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-5xl">Tools</h1>
          <h2 className="text-3xl">{detail.tools}</h2>
        </div>
        <div className="ml-10">
          <h1 className="text-5xl">Timeline</h1>
          <h2 className="text-3xl">{detail.timeline}</h2>
        </div>
      </div>
      <div>
        <h1>Brief</h1>
        <p>{detail.description}</p>
      </div>
      <div>
        <h1>Links</h1>
        <Link
          href="/"
          className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4"
        >
          Github
        </Link>
        <Link
          href="/"
          className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4"
        >
          Live Site
        </Link>
        <Link
          href="/"
          className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-3 px-8 rounded-full mb-2 md:mb-0 md:mr-4"
        >
          Demo Video
        </Link>
      </div>
      <div>
        <h1>Images</h1>
      </div>
    </div>
  );
}
export default ProjectDetail;

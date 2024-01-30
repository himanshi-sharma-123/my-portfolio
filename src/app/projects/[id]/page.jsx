"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const details = [
  {
    id: 1,
    image: "/book store.png",
    title: "Book Store",
    description:
      "Discover the alchemy of words as you embark on a journey through‘Express Your Book Love.’ This guide unveils the art of crafting heartfelt essays, inviting you to weave prose that mirrors the depth of your passion for cherished reads",
  },
  {
    id: 2,
    image: "/book store (1).png",
    title: "Meme Generator",
    description:
      "Discover the alchemy of words as you embark on a journey through‘Express Your Book Love.’ This guide unveils the art of crafting heartfelt essays, inviting you to weave prose that mirrors the depth of your passion for cherished reads",
  },
  {
    id: 3,
    image: "/Payment Gateway Integration.png",
    title: "donation",
    description:
      "Discover the alchemy of words as you embark on a journey through‘Express Your Book Love.’ This guide unveils the art of crafting heartfelt essays, inviting you to weave prose that mirrors the depth of your passion for cherished reads",
  },
  {
    id: 4,
    image: "/my travel journal.png",
    title: "Book Store",
    description:
      "Discover the alchemy of words as you embark on a journey through‘Express Your Book Love.’ This guide unveils the art of crafting heartfelt essays, inviting you to weave prose that mirrors the depth of your passion for cherished reads",
  },
];

function ProjectDetail({ params }) {
  const router = useRouter();
  const detail = details.find((d) => d.id == params.id);
  return (
    <div>
      <div>
        <Image src={detail.image} alt="" width={500} height={500} />
        <h1>{detail.title}</h1>
        <p>{detail.description}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;

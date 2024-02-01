import Image from "next/image";
import { Card } from "flowbite-react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const projects = [
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
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="flex md:ml-10 mt-3.5 md:mt-0">
          <Image
            src={"/hero.png"}
            width={2000}
            height={2000}
            alt="image"
            className={styles.img}
          />
        </div>
        <div className="flex flex-col md:ml-4 mt-5 md:mt-0">
          <div className="text-3xl mt-10 md:text-5xl md:mt-20 sm:text-3xl">
            Hey, this is Himanshi Sharma, a full stack developer currently
            pursuing B.Tech at GGSPIU
          </div>
          <div className="mt-10">
            <Link
              href="/"
              className="bg-white border-2 border-black hover:bg-black hover:text-white hover:border-white py-4 px-6 rounded-full"
            >
              Wanna chat?
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-28 px-4 lg:px-24">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <div className="grid gap-20 my-12 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {projects.map((project, id) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <Card
                className="w-full hover:scale-110 duration-500 cursor-pointer"
                key={project.id}
              >
                <Image
                  src={project.image}
                  alt="book store"
                  width={500}
                  height={300}
                />
                <h6 className="font-bold">{project.title}</h6>
                <hr />
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

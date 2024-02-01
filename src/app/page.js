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
        "Built a website which is equipped with 4+ features designed to store, manage and upload books for sale....",
    },
    {
      id: 2,
      image: "/book store (1).png",
      title: "Meme Generator",
      description:
        "Developed a web-based Meme Generator allowing users to create custom memes by....",
    },
    {
      id: 3,
      image: "/Payment Gateway Integration.png",
      title: "Payment Gateway ",
      description:
        "Developed a web application using with HTML, CSS from scratch as the part of The....",
    },
    {
      id: 4,
      image: "/my travel journal.png",
      title: "My Travel Journal",
      description: "It is a static website that I....",
    },
  ];
  return (
    <div className="flex flex-col mt-0">
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
          <div className="text-3xl mt-10 md:text-5xl md:mt-20 sm:text-3xl italic font-mono">
            Hey!!, I am{" "}
            <span className="font-bold text-gray-500">Himanshi Sharma</span>,
            currently pursuing my B.Tech at GGSPIU. I am aspiring to become a{" "}
            <span className="font-bold text-gray-500">
              full-stack developer
            </span>
            .
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
        <h1 className="text-7xl font-bold text-center italic font-mono text-gray-500">
          Projects
        </h1>
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
                <h6 className="font-bold font-serif text-gray-500 italic text-3xl">
                  {project.title}
                </h6>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
                <h1 className="italic font-mono text-1xl font-bold text-gray-500">
                  Wanna know more? Click on the project
                </h1>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

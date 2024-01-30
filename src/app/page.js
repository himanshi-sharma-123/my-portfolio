import Image from "next/image";
import { Card } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
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
      <div className="mt-28 px-4 lg:px-24">
        <h1 className="text-5xl font-bold text-center">Projects</h1>
        <div className="grid gap-20 my-12 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          <Card className="w-full hover:scale-110 duration-500 cursor-pointer">
            <Image
              src="/book store.png"
              alt="book store"
              width={500}
              height={300}
            />
            <h6 className="font-bold">Book Store</h6>
            <hr />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Discover the alchemy of words as you embark on a journey through
              ‘Express Your Book Love.’ This guide unveils the art of crafting
              heartfelt essays, inviting you to weave prose that mirrors the
              depth of your passion for cherished reads.
            </p>
          </Card>
          <Card className="w-full hover:scale-110 duration-500 cursor-pointer">
            <Image
              src="/my travel journal.png"
              alt="travel"
              width={500}
              height={500}
            />
            <h6 className="font-bold">travel</h6>
            <hr />
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Embark on a profound journey through the sacred history of Ayodhya
              and the Shri Ram Janmabhoomi Movement. Explore the enduring
              legacy, archaeological revelations, and the unyielding spirit that
              shaped this monumental movement. Discover the cultural hymn
              echoing through generations, celebrated in books that unravel the
              movement’s intellectual depths.
            </p>
          </Card>
          <Card className="w-full hover:scale-110 duration-500 cursor-pointer">
            <Image
              src="/Payment Gateway Integration.png"
              alt="donation"
              width={500}
              height={500}
            />
            <Link href="https://www.bookgeeks.in/irrfan-khan-books-beyond-acting/">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-decoration-line: underline">
                Irrfan Khan Beyond Acting: A Literary Journey Through Essential
                Books and Influences
              </h5>
            </Link>
            <h6 className="font-bold">
              by Sankalpita Singh <span>January 18, 2024</span>
            </h6>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Illuminating the global stage, Irrfan Khan’s versatile legacy
              transcends borders. Explore his journey from acclaimed dramas to
              Hollywood blockbusters. In our homage, discover four must-read
              books, delving into his life, art, and friendship with directors.
              Share your favorite performances and recommendations in the
              comments. Join us in celebrating this cinematic maestro.{" "}
            </p>
          </Card>
          <Card className="w-full hover:scale-110 duration-500 cursor-pointer">
            <Image
              src="/book store (1).png"
              alt="meme generator"
              width={500}
              height={500}
            />
            <Link href="https://www.bookgeeks.in/indian-fantasy-novels-unveiling-the-creme-de-la-creme-of-2023/">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-decoration-line: underline">
                Best Indian Fantasy Novels: Unveiling the Crème de la crème of
                2023
              </h5>
            </Link>
            <h6 className="font-bold">
              by Sankalpita Singh <span>October 29, 2023</span>
            </h6>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              In this article, we have curated a selection of four extraordinary
              Indian fantasy novels, all freshly published in 2023. These
              literary gems represent the pinnacle of Indian fantasy writing for
              this year, showcasing the evolution and expansion of the genre in
              India. These books are a testament to the boundless creativity of
              Indian authors, offering readers a portal to captivating new
              worlds.{" "}
            </p>
          </Card>
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

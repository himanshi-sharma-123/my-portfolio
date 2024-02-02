import Image from "next/image";
import React from "react";

function About() {
  const internships = [
    {
      id: 1,
      firm: "MagicStep Solutions Private Limited",
      title: "Nodejs Developer",
      timeline: "July - August, 2023",
      first:
        "• As a Node.js developer, contributed to the development of two live applications within the company:”CUTE” and ”CUBE.” ",
      second:
        "• Developed and implemented REST API routes using Node.js and Express.js frameworks, resulting in a 40% reduction in response time and improving overall application performance.",
      third:
        "• Worked collaboratively with 8+ team members and experienced developers to complete assigned tasks.",
    },
    {
      id: 2,
      firm: "The Sparks Foundation",
      title: "Web Development and Designing Intern",
      timeline: "May - June, 2023",
      first:
        "• Designed a website from the ground up utilizing frameworks such as Node.js, Express.js, and MongoDB. ",
      second: "• Reviewed the work of more than 10 peers.",
    },
    {
      id: 3,
      firm: "Coding Ninjas",
      title: "Teaching Assistant ",
      timeline: "June - Oct, 2022",
      first:
        "• Mentored 767 students in enhancing their logical reasoning abilities. ",
      second: "• 1.1K Doubts Resolved with 4.65 average rating",
      third:
        "• Improve proficiency in Data Structures and Algorithms (DSA) to 70%.",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:ml-40 md:mt-10 hidden lg:block ">
          <Image src="/me.png" alt="my-image" width={2000} height={3000} />
        </div>
        <div className="md:px-10 md:ml-20 md:mt-10 ">
          <div className="ml-10">
            <h1 className="font-mono italic text-5xl font-bold ">
              Fun Facts about me...
            </h1>
          </div>
          <div className="ml-10 mt-8">
            <div className="font-mono">
              😊I have gained a comprehensive understanding of Software
              Engineering principles, Data Structures and Algorithms,
              Programming languages like Java, Azure Fundamentals Certified.
              <div className="mt-5">
                <h1 className="text-1xl font-bold font-mono">
                  💡Here are few key points I want to share:
                </h1>
                <ul className="mt-5">
                  <li className="font-mono">
                    <span className="font-bold font-mono">
                      🌴Technical Proficiency:{" "}
                    </span>
                    I have a solid foundation in both frontend and backend
                    development technologies. I am proficient in languages such
                    as HTML, CSS, Javascript, and have experience with popular
                    front-end frameworks like React and Redux. On the backend, I
                    have worked with languages like Nodejs, Express.js and have
                    experience with databases such as MongoDB. I am also
                    familiar with version control systems like Git.{" "}
                  </li>
                  <li className="mt-5 font-mono">
                    <span className="font-bold font-mono">
                      🍵Project Experience:{" "}
                    </span>
                    I have had the opportunity to work on various web
                    development projects during my academic studies and personal
                    projects. These experiences have allowed me to apply my
                    technical knowledge to real-world scenarios and have honed
                    my problem-solving skills.
                  </li>{" "}
                  <li className="mt-5 font-mono">
                    <span className="font-bold font-mono">
                      🤝Collaborative Approach:{" "}
                    </span>
                    I value collaboration and communication within a team. I
                    believe that effective teamwork is crucial to building
                    successful software products, and I am eager to work closely
                    with colleagues to achieve common goals.
                  </li>
                  <li className="mt-5 font-mono">
                    <span className="font-bold font-mono">
                      🌺Passion for Innovation:{" "}
                    </span>
                    I am not only interested in coding but also in the creative
                    aspects of web development. I enjoy finding innovative
                    solutions to complex problems and creating user-friendly
                    interfaces that enhance the user experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10 ">
        <div className="md:w-1/2 md:ml-20">
          <h1 className="text-5xl font-bold font-mono itlatic text-gray-500">
            Internships
          </h1>
          {internships.map((internship, id) => (
            <div key={id} className="mt-10 item-center">
              <h1 className="text-3xl font-mono font-bold">
                {internship.firm}
              </h1>
              <h1 className=" mt-4 font-mono font-bold text-gray-500">
                ➡️{internship.title}
              </h1>
              <h1 className="font-mono font-bold text-gray-500">
                🕛{internship.timeline}
              </h1>
              <h1 className="text-left font-mono">{internship.first}</h1>
              <h1 className="text-left font-mono">{internship.second}</h1>
              <h1 className="text-left font-mono">{internship.third}</h1>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 md:mr-20 md:mt-10 ml-60 hidden lg:block">
          <Image src="/intern.png" alt="my-image" width={1000} height={1000} />
        </div>
      </div>
      <div className="text-center mt-10 ml-20">
        <Image src="/memory.jpeg" width={1300} height={1300} />
      </div>
    </div>
  );
}

export default About;

// import Image from "next/image";
// import React from "react";

// function About() {
//   const internships = [
//     {
//       id: 1,
//       firm: "MagicStep Solutions Private Limited",
//       title: "Nodejs Developer",
//       timeline: "July - August, 2023",
//       first:
//         "• As a Node.js developer, contributed to the development of two live applications within the company:”CUTE” and ”CUBE.” ",
//       second:
//         "• Developed and implemented REST API routes using Node.js and Express.js frameworks, resulting in a 40% reduction in response time and improving overall application performance.",
//       third:
//         "• Worked collaboratively with 8+ team members and experienced developers to complete assigned tasks.",
//     },
//     {
//       id: 2,
//       firm: "The Sparks Foundation",
//       title: "Web Development and Designing Intern",
//       timeline: "May - June, 2023",
//       first:
//         "• Designed a website from the ground up utilizing frameworks such as Node.js, Express.js, and MongoDB. ",
//       second: "• Reviewed the work of more than 10 peers.",
//     },
//     {
//       id: 3,
//       firm: "Coding Ninjas",
//       title: "Teaching Assistant ",
//       timeline: "June - Oct, 2022",
//       first:
//         "• Mentored 767 students in enhancing their logical reasoning abilities. ",
//       second: "• 1.1K Doubts Resolved with 4.65 average rating",
//       third:
//         "• Improve proficiency in Data Structures and Algorithms (DSA) to 70%.",
//     },
//   ];
//   return (
//     <div>
//       <div className="flex flex-row">
//         <div className="ml-40 mt-10">
//           <Image src="/me.png" alt="my-image" width={2000} height={3000} />
//         </div>
//         <div className="px-10 ml-20 mt-10">
//           <div className="ml-10">
//             <h1 className="font-mono italic text-5xl font-bold ">
//               Fun Facts about me...
//             </h1>
//           </div>
//           <div className="ml-10 mt-8">
//             <p className="font-mono">
//               I have gained a comprehensive understanding of Software
//               Engineering principles, Data Structures and Algorithms,
//               Programming languages like Java, Azure Fundamentals Certified.
//               <p className="mt-5">
//                 <h1 className="text-1xl font-bold font-mono">
//                   Here are few key points I want to share:
//                 </h1>
//                 <ul className="mt-5">
//                   <li className="font-mono">
//                     <span className="font-bold font-mono">
//                       Technical Proficiency:{" "}
//                     </span>
//                     I have a solid foundation in both frontend and backend
//                     development technologies. I am proficient in languages such
//                     as HTML, CSS, Javascript, and have experience with popular
//                     front-end frameworks like React and Redux. On the backend, I
//                     have worked with languages like Nodejs, Express.js and have
//                     experience with databases such as MongoDB. I am also
//                     familiar with version control systems like Git.{" "}
//                   </li>
//                   <li className="mt-5 font-mono">
//                     <span className="font-bold font-mono">
//                       Project Experience:{" "}
//                     </span>
//                     I have had the opportunity to work on various web
//                     development projects during my academic studies and personal
//                     projects. These experiences have allowed me to apply my
//                     technical knowledge to real-world scenarios and have honed
//                     my problem-solving skills.
//                   </li>{" "}
//                   <li className="mt-5 font-mono">
//                     <span className="font-bold font-mono">
//                       Collaborative Approach:{" "}
//                     </span>
//                     I value collaboration and communication within a team. I
//                     believe that effective teamwork is crucial to building
//                     successful software products, and I am eager to work closely
//                     with colleagues to achieve common goals.
//                   </li>
//                   <li className="mt-5 font-mono">
//                     <span className="font-bold font-mono">
//                       Passion for Innovation:{" "}
//                     </span>
//                     I am not only interested in coding but also in the creative
//                     aspects of web development. I enjoy finding innovative
//                     solutions to complex problems and creating user-friendly
//                     interfaces that enhance the user experience.
//                   </li>
//                 </ul>
//               </p>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-row mt-10 ml-20">
//         <div>
//           <h1 className="text-5xl font-bold font-mono itlatic text-gray-500">
//             Internships
//           </h1>
//           {internships.map((internship, id) => (
//             <div key={id} className="mt-10">
//               <h1 className="text-3xl font-mono font-bold">
//                 {internship.firm}
//               </h1>
//               <h1 className=" mt-4 font-mono font-bold text-gray-500">
//                 {internship.title}
//               </h1>
//               <h1 className="font-mono font-bold text-gray-500">
//                 {internship.timeline}
//               </h1>
//               <h1 className="text-left font-mono">{internship.first}</h1>
//               <h1 className="text-left font-mono">{internship.second}</h1>
//               <h1 className="text-left font-mono">{internship.third}</h1>
//             </div>
//           ))}
//         </div>
//         <div className="mr-40 ml-40 mt-10">
//           <Image src="/intern.png" alt="my-image" width={1000} height={1000} />
//         </div>
//       </div>
//       <div>
//         <Image
//           src="/memory.jpeg"
//           width={1300}
//           height={1300}
//           className="ml-20"
//         />
//       </div>
//     </div>
//   );
// }

// export default About;

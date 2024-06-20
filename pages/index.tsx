import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import product2 from "./product2/page"

export default function Home() {
  return (
    <>
  
  

    <div className="main1 flex flex-col items-center justify-center min-h-screen py-2 bg-green-300	">
      
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */} 

      <main className=" flex flex-col items-center justify-center w-full flex-1 px-20 text-center  ">
        <h1 className="text-6xl font-bold first-letter:text-[#40d860]">
          JIT{" "}
          <a className="text-blue-600" href="#">
            Just-in-Time Mode!
          </a>
        </h1>

        <p className="mt-3 text-2xl ">
        The JIT mode is a key part of Tailwind CSS design and functionality, which provides significant improvements to build times and enables all variants out of the box.{" "}
          <code className=" border-sky-500	p-3 font-mono text-lg bg-gray-100 rounded-md">
          instead of generating a massive CSS files containing all possible styles as in the traditional build process
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-slate-400	border-solid border-2 border-sky-900"
          >
            <h3 className="text-2xl font-bold">1- setup NextJS Project &rarr;</h3>
            <p className="mt-4 text-xl">
            npx create-next-app@latest my-project --typescript --eslint
            </p>
          </a>

          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-red-300	border-dashed border-2 border-black-900"
          >
            <h3 className="text-1xl font-bold">2- Install Tailwind CSS dependencies  &rarr;</h3>
            <p className="mt-4 text-xl">
            npm install -D tailwindcss postcss autoprefixer 
            npx tailwindcss init -p
            </p>
          </a>

          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-orange-300	border-dotted border-2 border-sky-900"
          >
            <h3 className="text-1xl font-bold">Configure your template paths &rarr;</h3>
            <p className="mt-4 text-xl">
            tailwind.config.js
            </p>
          </a>

          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 bg-amber-300  border-double border-4 border-sky-900"
          >
            <h3 className="text-1xl font-bold">setup global.css &rarr;</h3>
            <p className="mt-4 text-xl">
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "} Hassan Farooq 
          {/* <Image src="./vercel.svg" alt="Vercel Logo" className="h-4 ml-2"   /> */}
          {/* <img src="/" alt="Vercel Logo" className="h-4 ml-2" /> */}
        </a>
      </footer>
    </div>
  
    </>

  );
}

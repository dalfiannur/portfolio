import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-dark-blue min-h-screen flex items-center justify-center">
      <div className="flex-1 max-w-screen-xl">
        <div className="flex justify-between">
          <div className="select-none">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-500 text-8xl font-bold flex">
              Code Better<div className="text-indigo-500 animate-bounce">.</div>
            </h2>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-white to-indigo-500 text-8xl font-bold flex">
              Code Faster<div className="text-white animate-bounce">.</div>
            </h2>
          </div>
          <div>
            <div className="w-32 h-32 rounded-full bg-white" />
          </div>
        </div>
        <div className="flex gap-20 mt-32">
          <div className="flex-1 rounded-3xl overflow-hidden">
            <div className="p-10 bg-indigo-500 rounded-br-3xl flex items-center gap-10  ">
              <div className="w-20 h-20 rounded border-4 border-white" />
              <h3 className="text-white text-4xl font-bold tracking-wider font-sans">
                <Link href="/about" className="select-all">Dikry Alfiannur</Link>
              </h3>
            </div>
            <div className="flex bg-dark-blue">
              <div className="flex-1 bg-gradient-to-b from-indigo-500 to-dark-blue rounded-b-3xl">
                <h3 className="select-none m-10 text-white text-5xl font-bold">
                  Javascript Developer
                </h3>
              </div>
              <div className="bg-indigo-500 rounded-br-[50px] h-full flex items-center">
                <div className="bg-dark-blue rounded-tl-3xl flex flex-col justify-center w-full h-full">
                  <div className="text-white text-2xl mt-10 mx-10">Let's</div>
                  <div className="mx-10 mt-2">
                    <Link
                      href="/contact"
                      className="select-none text-4xl whitespace-nowrap font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-500 animate-pulse"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-20">
            <div className="rounded-2xl p-5">
              <h4 className="select-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-white font-bold text-4xl">
                Favotite Stacks
              </h4>
              <ul className="mt-20 grid grid-cols-2 gap-10">
                <li>
                  <Link href="https://nestjs.com" target="_blank">
                    <Image
                      width={60}
                      height={60}
                      alt="NestJS"
                      src="/images/nestjs-logo.svg"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://nextjs.org" target="_blank">
                    <Image
                      width={60}
                      height={60}
                      alt="NextJS"
                      src="/images/nextjs-logo.png"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://tailwindcss.com" target="_blank">
                    <Image
                      width={60}
                      height={60}
                      alt="TailwindCSS"
                      src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://postgresql.org" target="_blank">
                    <Image
                      width={60}
                      height={60}
                      alt="PostgreSQL"
                      src="/images/postgresql-logo.png"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="select-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-white text-4xl font-bold p-5">
                Opensource Projects
              </h4>
              <h5 className="my-10 text-center text-6xl text-indigo-500 select-none">6</h5>
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="text-white font-bold text-xl animate-pulse"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

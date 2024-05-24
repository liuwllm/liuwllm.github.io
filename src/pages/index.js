import Head from "next/head";
import {AiFillMail, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from "next/legacy/image";
import Link from "next/link";
import profile from "../../public/profile.jpg"
import sunshelf from "../../public/sunshelf.png"
import ewcapp from "../../public/ewcapp.png"
import HeaderComponent from "@/components/common/header";
import cookEasy from "../../public/cookeasythumb.png";
import letThemCook from "../../public/letthemcook.jpg";
import momentune from "../../public/momentune.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>William Liu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-gradient-to-b from-slate-200 to-slate-100 min-h-screen font-sans">
        <HeaderComponent />          
            <div className="flex flex-wrap justify-around mx-5 my-3 p-5 sm:mx-20 sm:my-10 sm:p-10 ">
              <div className="flex flex-col justify-center text-left">
                <div>
                  <h2 className="text-3xl sm:text-5xl py-2 font-medium">Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">William</span>.</h2>
                  <p className="text-base sm:text-lg py-5 leading-8 text-slate-800">I'm a developer and designer focused on creating seamless experiences through software.</p>
                </div>
                <div className="text-3xl sm:text-5xl flex justify-start gap-16">
                  <a href="mailto:liu.wllm@gmail.com" className="text-slate-600 hover:text-blue-700"><AiFillMail className="cursor-pointer" /></a>
                  <a href="https://www.linkedin.com/in/liuwllm" className="text-slate-600 hover:text-blue-700"><AiFillLinkedin className="cursor-pointer" /></a>
                  <a href="https://www.github.com/liuwllm" className="text-slate-600 hover:text-blue-700"><AiFillGithub className="cursor-pointer" /></a>
                </div>
              </div>
              <div className="flex p-10 shrink-0 items-center">
                <div className="relative rounded-full w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden">
                  <Image src={profile} layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
            <div className="flex justify-start mx-5 p-3 sm:mx-20 sm:p-10">
              <div className="flex flex-col justify-center text-left">
                <div id="projects"><h2 className="text-left text-5xl py-3 font-medium text-slate-800">Projects</h2></div>
                <div className="flex flex-col sm:flex-row justify-center my-5">
                  <div className="flex relative rounded-lg shrink-0 overflow-hidden w-56 h-44 sm:72 sm:60 md:w-96 md:h-80 hover:opacity-70 cursor-pointer">
                    <a href="https://github.com/liuwllm/sunshelf"><Image src={sunshelf} layout="fill" objectFit="cover" /></a>
                  </div>
                  <div className="flex flex-col justify-center py-5 px-0 sm:px-10">
                    <a href="https://github.com/liuwllm/sunshelf"><h2 className="text-left text-2xl sm:text-4xl font-medium text-blue-700 hover:text-blue-500 cursor-pointer mb-5">Sunshelf</h2></a>
                    <p className="text-left text-base sm:text-lg text-slate-800">Sunshelf is a web application built using React, Flask, and MongoDB that allows users to more easily learn to read Japanese. Users 
                    may upload text documents to the web application, which will then be scraped for Japanese kanji characters. After finding all characters, the application uses MeCab to segment the text
                    into individual Japanese words. The words are looked up using JMdict and presented as exportable flashcards to the user. These flashcards can be imported into flashcard software such as 
                    Anki to more easily facilitate learning kanji. </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center">
                  <div className="flex relative rounded-lg shrink-0 overflow-hidden w-56 h-44 sm:72 sm:60 md:w-96 md:h-80 hover:opacity-70 cursor-pointer">
                    <a href="https://devpost.com/software/memory-lanez"><Image src={momentune} layout="fill" objectFit="cover" /></a>
                  </div>
                  <div className="flex flex-col justify-center py-5 px-0 sm:px-10">
                  <a href="https://devpost.com/software/memory-lanez"><h2 className="text-left text-2xl sm:text-4xl font-medium text-blue-700 hover:text-blue-500 cursor-pointer mb-5">Momentune</h2></a>
                    <p className="text-left text-base sm:text-lg text-slate-800">Momentune is a web application built using Next.js with Typescript and Python. Momentune uses the OpenAI and Spotify API to analyze
                    the emotion of a set of uploaded photos and generate a corresponding a playlist. Momentune features a mobile-first user interface built using Typescript.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center">
                  <div className="flex relative rounded-lg shrink-0 overflow-hidden w-56 h-44 sm:72 sm:60 md:w-96 md:h-80 hover:opacity-70 cursor-pointer">
                    <a href="https://devpost.com/software/let-them-cook"><Image src={letThemCook} layout="fill" objectFit="cover" /></a>
                  </div>
                  <div className="flex flex-col justify-center py-5 px-0 sm:px-10">
                  <a href="https://devpost.com/software/let-them-cook"><h2 className="text-left text-2xl sm:text-4xl font-medium text-blue-700 hover:text-blue-500 cursor-pointer mb-5">Let Them Cook</h2></a>
                    <p className="text-left text-base sm:text-lg text-slate-800">Let Them Cook is a web application built using React and Flask to make it easier for people to cook. Using a list of inputted ingredients,
                    recipes from a database will be searched through and selected to best match the user's list. Recipes were scraped from online cooking websites using a Python web scraper. The project won Best Beginner
                    Hack at Pride Hacks 2023.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center">
                  <div className="flex relative rounded-lg shrink-0 overflow-hidden w-56 h-44 sm:72 sm:60 md:w-96 md:h-80 hover:opacity-70 cursor-pointer">
                    <a href="https://github.com/christopherlam888/the-ewc/"><Image src={ewcapp} layout="fill" objectFit="cover" /></a>
                  </div>
                  <div className="flex flex-col justify-center py-5 px-0 sm:px-10">
                  <a href="https://github.com/christopherlam888/the-ewc/"><h2 className="text-left text-2xl sm:text-4xl font-medium text-blue-700 hover:text-blue-500 cursor-pointer mb-5">Everyday Watch Collector App</h2></a>
                    <p className="text-left text-base sm:text-lg text-slate-800">The Everyday Watch Collector app is a mobile app helping users learn more about horology and watch terminology, for which I built 
                    the front-end. The front-end was developed using XML in Android Studio, with a mockup created in <a href="https://www.figma.com/file/8ovOoiZKMXkb0tq0kwb9MN/UI?node-id=0%3A1" target="_blank"><span className="text-blue-700 hover:text-blue-500 font-medium">Figma</span></a>.
                    The app consists of a glossary page containing common watch terms and a videos page which directs users to videos reviewing watches and going over related horology topics.
                    </p>
                  </div>
                </div>  
                <div className="flex flex-col sm:flex-row justify-start my-5">
                  <div className="flex relative rounded-lg shrink-0 overflow-hidden w-56 h-44 sm:72 sm:60 md:w-96 md:h-80 hover:opacity-70 cursor-pointer">
                    <Link href="/cookeasy"><Image src={cookEasy} layout="fill" objectFit="cover" /></Link>
                  </div>
                  <div className="flex flex-col justify-center py-5 px-0 sm:px-10">
                    <Link href="/cookeasy"><h2 className="text-left text-2xl sm:text-4xl font-medium text-blue-700 hover:text-blue-500 cursor-pointer mb-5">CookEasy</h2></Link>
                    <p className="text-left text-base sm:text-lg text-slate-800">CookEasy is a UX case study aimed at creating a software solution to promote meal planning and cooking at home. 
                    Research was conducted for the case study over the course of 4 days, and a prototype was subsequently designed in Figma. The designed app focuses on a modular approach to meal
                    planning and features integration with online recipes and grocery delivery apps to encourage at-home cooking.</p>
                  </div>
                </div>
              </div>
            </div>
      </main>
    </div>
  );
}

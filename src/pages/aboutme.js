import Head from "next/head";
import Image from "next/legacy/image";
import HeaderComponent from "@/components/common/header";
import korea from "../../public/korea.jpg";
import japan from "../../public/japan.jpg";
import cook from "../../public/cook.jpg";
import design from "../../public/design.jpg";

export default function About() {
    return (
    <div>
        <Head>
            <title>William Liu | About Me</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <main className="bg-gradient-to-b from-slate-200 to-slate-100 min-h-screen min-w-fit font-sans">
            <HeaderComponent />
            <div className="flex flex-col sm:flex-row justify-around mx-5 sm:mx-20">
                <div className="flex flex-col justify-center p-10">
                    <h2 className="text-5xl font-medium text-slate-800 py-2">About Me</h2>
                    <p className="text-xl text-slate-800 pt-4">Hello! I'm a student at Western University planning to study a dual degree in Computer Science and Business. I'm 
                    someone who's passionate about learning and creating, combining an analytical mind with creative aspirations.</p>
                    <p className="text-xl text-slate-800 pt-4">Some of my hobbies include:</p>
                    <p className="text-2xl text-slate-800 pt-2 pl-5"><span className="text-blue-700 font-medium">learning languages</span>,</p>
                    <p className="text-xl text-slate-800 pt-1 pl-7">I've learnt French up to around a B2 level. Currently, I'm trying to improve my reading and writing in Mandarin 
                    in addition to learning a bit of Japanese on the side. I'm also hoping to learn Korean sometime in the future.</p>
                    <p className="text-2xl text-slate-800 pt-2 pl-5"><span className="text-blue-700 font-medium">graphic design</span>,</p>
                    <p className="text-xl text-slate-800 pt-1 pl-7">I started having an interest in graphic design while working on my Grade 8 yearbook. Since then, 
                    I've done graphics anywhere they're needed from social media posts for school clubs to business presentations to personal projects.</p> 
                    <p className="text-2xl text-slate-800 pt-2 pl-5"><span className="text-blue-700 font-medium">cooking</span>.</p>
                    <p className="text-xl text-slate-800 pt-1 pl-7">Much of the inspiration for what I've cooked have come from cravings during quarantine. I've dabbled
                    with recipes such as oven fries, pasta bolognese, and chicken congee. My go-to when cooking, however, is stir-fry, especially given its versatility.</p> 
                </div>
                <div className="flex flex-col p-2 shrink-0 justify-center items-center">
                    <div className="flex flex-row flex-wrap shrink-0">
                        <div className="relative rounded-lg w-48 h-48 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden">
                            <Image src={korea} layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative rounded-lg w-48 h-48 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden">
                            <Image src={cook} layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap shrink-0">
                        <div className="relative rounded-lg w-48 h-48 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden">
                            <Image src={design} layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative rounded-lg w-48 h-48 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 overflow-hidden">
                            <Image src={japan} layout="fill" objectFit="cover" />
                        </div>
                    </div>
                 </div>
            </div>
        </main>
    </div>
    )
}

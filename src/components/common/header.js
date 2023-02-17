import logo from "../../../public/logo.png"
import Link from "next/link";
import Image from "next/legacy/image";

const links = [{ label: 'Solutions', href: '#solutions', id: 'solutions' }]

function HeaderComponent() {    
    return (        
            <nav className="p-10 mb-10 flex flex-col sm:flex-row justify-between items-center">
                <Link href="/#"><Image src={logo} height="48px" width="48px" /></Link>
                <ul className="flex justify-end gap-8">
                    <li><Link className="group text-lg sm:text-xl font-medium text-center sm:text-left text-slate-800 transition duration-200" href="/aboutme">About Me<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-700"></span></Link></li>
                    <li><Link className="group text-lg sm:text-xl font-medium text-slate-800 transition duration-200" href="/#work">Work<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-700"></span></Link></li>
                    <li><Link className="group text-lg sm:text-xl font-medium text-slate-800 transition duration-200" href="/William_Liu_Resume.pdf" locale={false} target="_blank" rel="noopener noreferrer">Resume<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-700"></span></Link></li>
                </ul>
            </nav>
    )
}
export default HeaderComponent
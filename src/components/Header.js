import {Montserrat, Monsieur_La_Doulaise} from 'next/font/google'
import Link from "next/link";

const montserrat = Montserrat({subsets: ['latin'], weight: ["400"]})
const monsieurLaDoulaise = Monsieur_La_Doulaise({subsets: ['latin'], weight: ["400"]})

export default function Header() {
    return (
        <header className={`fixed backdrop-blur-sm z-50 top-0 left-0 right-0 ${montserrat.className}`}>
            <div className={"container flex justify-between items-center py-5"}>
                <div className={`logo ${monsieurLaDoulaise.className} text-5xl`}>
                    <span>Beauty Nation Od</span>
                </div>
                <div className={"flex items-center text-white"}>
                    <nav className={"drop-shadow "}>
                        <Link href="/#home" className={"mr-[50px]"}>Home</Link>
                        <Link href="/#about" className={"mr-[50px]"}>About</Link>
                        <Link href="/#products" className={"mr-[50px]"}>Products</Link>
                        <Link href="/#contact" className={"mr-[50px]"}>Contact</Link>
                    </nav>
                    <button className={"border border-white rounded uppercase px-[2.3rem] py-4"}>Book</button>
                </div>
            </div>
        </header>
    )
}

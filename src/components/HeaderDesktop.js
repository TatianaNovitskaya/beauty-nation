import {Montserrat, Monsieur_La_Doulaise} from 'next/font/google'
import Link from "next/link";

const montserrat = Montserrat({subsets: ['latin'], weight: ["400"]})
const monsieurLaDoulaise = Monsieur_La_Doulaise({subsets: ['latin'], weight: ["400"]})

export default function HeaderDesktop() {
    return (
        <>
            <header className={`fixed backdrop-blur-sm z-50 top-0 left-0 right-0 ${montserrat.className}`}>
                <div className={"container flex justify-between items-center py-5"}>
                    <div className={`logo ${monsieurLaDoulaise.className} text-5xl`}>
                        <span className={"drop-shadow-[2px_2px_2px_rgba(255,255,255,1)]"}>Beauty Nation Od</span>
                    </div>
                    <div className={"flex items-center text-white"}>
                        <nav className={""}>
                            <Link href="/#home"
                                  className={"mr-[50px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]"}>Home</Link>
                            <Link href="/#about"
                                  className={"mr-[50px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]"}>About</Link>
                            <Link href="/#products"
                                  className={"mr-[50px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]"}>Products</Link>
                            <Link href="/#contact"
                                  className={"mr-[50px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]"}>Contact</Link>
                        </nav>
                        <button
                            className={"border drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)] border-white rounded-[2rem] uppercase px-[2.3rem] py-4"}>Book
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

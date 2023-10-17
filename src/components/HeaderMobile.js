'use client';
import Link from "next/link";
import {Montserrat, Monsieur_La_Doulaise} from 'next/font/google'
import {useCallback, useState} from "react";
import styles from './header.module.css'

const montserrat = Montserrat({subsets: ['latin'], weight: ["400"]})
const monsieurLaDoulaise = Monsieur_La_Doulaise({subsets: ['latin'], weight: ["400"]})
export default function HeaderMobile() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleMenu = useCallback(() => {
        setIsNavOpen(!isNavOpen)
    }, [isNavOpen])

    return (
        <>
            <header className={`py-4 sticky top-0 left-0 right-0 backdrop-blur-sm z-50 ${montserrat.className}`}>
                <div className={"container mx-auto px-4 md:px-7 flex justify-between items-center"}>
                        <div className={`logo ${monsieurLaDoulaise.className} text-4xl`}>
                            <span className={"drop-shadow-[2px_2px_2px_rgba(255,255,255,1)]"}>Beauty Nation Od</span>
                        </div>
                    <nav>
                        <section className={"MOBILE-MENU flex lg:hidden"}>
                            <div
                                className={"HAMBURGER-ICON space-y-2"}
                                onClick={toggleMenu}
                            >
                                <span className={"block h-0.5 w-8 animate-pulse bg-[#D8B192]"}></span>
                                <span className={"block h-0.5 w-8 animate-pulse bg-[#D8B192]"}></span>
                                <span className={"block h-0.5 w-8 animate-pulse bg-[#D8B192]"}></span>
                            </div>

                            <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
                                <div className={"absolute top-0 right-0 px-8 py-8"} onClick={toggleMenu}>
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                                <ul className={"flex flex-col items-center justify-between"}>
                                        <Link href="/#home" className={"text-3xl my-3"} onClick={toggleMenu}>Home</Link>
                                        <Link href="/#about" className={"text-3xl my-3"} onClick={toggleMenu}>About</Link>
                                        <Link href="/#projects" className={"text-3xl my-3"} onClick={toggleMenu}>Products</Link>
                                        <Link href="/#services" className={"text-3xl my-3"} onClick={toggleMenu}>Contact</Link>
                                </ul>
                            </div>
                        </section>
                    </nav>
                </div>
            </header>
        </>
    )
}

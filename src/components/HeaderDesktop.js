'use client';


import styles from "@/components/header.module.css";
import {useCallback, useState} from "react";
import {Montserrat, Monsieur_La_Doulaise} from 'next/font/google'
import Link from "next/link";

const montserrat = Montserrat({subsets: ['latin'], weight: ["400"]})
const monsieurLaDoulaise = Monsieur_La_Doulaise({subsets: ['latin'], weight: ["400"]})


export default function HeaderDesktop() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleMenu = useCallback(() => {
        setIsNavOpen(!isNavOpen)
    }, [isNavOpen])
    return (
        <>
            <header
                className={`py-4 w-full fixed backdrop-blur-sm z-50 top-0 left-0 right-0 ${montserrat.className} z-50`}>
                <div className={"container mx-auto px-7 flex justify-between items-center"}>
                    <div className={"header_logo flex items-center"}>
                        <div className={`logo ${monsieurLaDoulaise.className} text-4xl md:text-5xl`}>
                            <span className={"drop-shadow-[2px_2px_2px_rgba(255,255,255,1)]"}>Beauty Nation Od</span>
                        </div>
                    </div>
                    <nav className={" hidden lg:block"}>
                        <ul className={"flex items-center text-white"}>
                            <li><Link href="/#home"
                                      className={"hover:underline hover:underline-offset-4 transition-all mr-[50px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]"}>Home</Link>
                            </li>
                            <li><Link href="/#about"
                                      className={"hover:underline hover:underline-offset-4 transition-all mr-[50px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]"}>About</Link>
                            </li>
                            <li><Link href="/#price"
                                      className={"hover:underline hover:underline-offset-4 transition-all mr-[50px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]"}>Price</Link>
                            </li>
                            <li><Link href="/#contact"
                                      className={"hover:underline hover:underline-offset-4 transition-all mr-[50px] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.7)]"}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={'lg:hidden'}>
                        <section className="MOBILE-MENU flex">
                            <div
                                className="HAMBURGER-ICON space-y-2"
                                onClick={toggleMenu}
                            >
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            </div>

                            <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
                                <div className="absolute top-0 right-0 px-8 py-8" onClick={toggleMenu}>
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"/>
                                        <line x1="6" y1="6" x2="18" y2="18"/>
                                    </svg>
                                </div>
                                <nav className="flex flex-col items-center justify-between">
                                    <Link href="/#home" className={"text-3xl my-3"} onClick={toggleMenu}>Home</Link>
                                    <Link href="/#about" className={"text-3xl my-3"} onClick={toggleMenu}>About</Link>
                                    <Link href="/#price" className={"text-3xl my-3"} onClick={toggleMenu}>Price</Link>
                                    <Link href="/#contact" className={"text-3xl my-3"}
                                          onClick={toggleMenu}>Contact</Link>
                                </nav>
                            </div>
                        </section>
                    </div>
                </div>
            </header>
        </>
    )
}

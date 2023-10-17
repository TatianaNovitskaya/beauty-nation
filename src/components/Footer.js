import {Montserrat, Monsieur_La_Doulaise} from 'next/font/google'
import Link from "next/link";
import Image from "next/image";

const montserrat = Montserrat({subsets: ['latin'], weight: ["400"]})
const monsieurLaDoulaise = Monsieur_La_Doulaise({subsets: ['latin'], weight: ["400"]})

export default function Footer() {
    return (
        <footer className={`bg-[#D8B192] ${montserrat.className}`}>
            <div className={"container py-[2rem] md:py-[4.25rem] text-white "}>
                <div className={"flex flex-col md:flex-row justify-between z-30"}>
                    <div className={`logo ${monsieurLaDoulaise.className} text-center md:text-left text-5xl`}>
                        <span>Beauty Nation Od</span>
                    </div>
                    <div className={"hidden md:block"}>
                        <nav className={"flex flex-col "}>
                            <p className={"font-semibold mb-4"}>Menu</p>
                            <Link href="/#home" className={"mb-[10px] hover:underline hover:underline-offset-4 transition-all leading-none"}>Home</Link>
                            <Link href="/#about" className={"mb-[10px] hover:underline hover:underline-offset-4 transition-all leading-none"}>About</Link>
                            <Link href="/#products" className={"mb-[10px] hover:underline hover:underline-offset-4 transition-all leading-none "}>Products</Link>
                            <Link href="/#contact" className={"mb-[10px] hover:underline hover:underline-offset-4 transition-all leading-none"}>Contact</Link>
                        </nav>
                    </div>
                    <div className={"text-center mt-[2rem] md:text-left md:mt-0"}>
                        <p className={"font-semibold mb-4"}>Contact</p>
                        <Link href={"mailto:tihonova.vicktoriya@gmail.com"}
                              className={"block"}>tihonova.vicktoriya@gmail.com</Link>
                        <Link href={"tel:+38(097)-675-5656"}
                              className={"block text-[1.5rem] font-semibold"}>(097)-675-5656</Link>
                        <address>
                            Downtown, Odesa, Ukraine
                        </address>
                    </div>
                    <div className={"text-center mt-[2rem] md:text-left md:mt-0"}>
                        <p className={"font-semibold mb-4"}>Social</p>
                        <Link href={"https://www.instagram.com/beauty_nation_od/"}
                              className={"w-[48px] h-[48px] mx-auto md:m-0 flex justify-center items-center rounded-full bg-orange-50"}>
                            <Image src={"/instagram.svg"} alt={"instagram"} width={18} height={18}/>
                        </Link>

                    </div>
                </div>
                <hr className={"bg-white my-5 md:my-10"}/>
                <p className={"text-[14px] md:text-base"}>Copyright reserved © 2023</p>
            </div>

        </footer>
    )
}

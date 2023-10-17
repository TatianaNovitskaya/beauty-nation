import {Montserrat, Parisienne} from 'next/font/google'
import Image from "next/image";

const montserrat = Montserrat({subsets: ['latin'], weight: ["400", "600"]})
const parisienne = Parisienne({subsets: ['latin'], weight: ["400"]})

export default function About() {
    return (
        <section className={"py-[4rem]"} id={"about"}>
            <div className={`${montserrat.className} flex text-[#767676] container  h-full relative grid-cols-2 gap-[3rem]`}>
                <div className={"w-1/2 relative"}>
                    <Image src={"/work-6.jpg"} alt={"work-6"} width={563} height={704} className={"relative z-10"}/>
                    <Image src={"/decor-2.png"} alt={"decor-2"} width={463} height={504} className={"absolute left-0 -bottom-[8rem] rotate-90"}/>
                    <Image src={"/work-1.jpg"} alt={"work-23"} className={"absolute z-20 rounded-tl-[10rem] drop-shadow-2xl left-[25%] top-[50%] translate-x-1/2 rounded-tr-[10rem]"} width={310} height={838}/>
                </div>
                <div className={"w-1/2"}>
                    <article>
                        <h2 className={`${parisienne.className} text-center text-[3.5rem] text-[#D8B192] mb-1.5rem`}>About</h2>
                        <p className={"indent-6 my-[0.7rem]"}>Hello, I`&apos;`m Viktoriya, your trusted nail artist and dedicated nail enthusiast. Welcome to my world of creativity, where I transform nails into pieces of art and self-expression.</p>
                        <p className={"indent-6 my-[0.7rem]"}>My journey into the world of nail art began as a passion and evolved into a profession. I`&apos;`ve always had a keen eye for detail and an artistic spirit that found its canvas in the beauty of nails. Over the years, I`&apos;`ve honed my skills and techniques, staying up-to-date with the latest trends and innovations in the nail industry.</p>
                        <p className={"indent-6 my-[0.7rem]"}>My mission is to not only make your nails look stunning but also to ensure they remain healthy and strong. I prioritize sanitation and hygiene, using top-quality products to give you a safe and unforgettable nail experience.</p>
                        <p className={"indent-6 my-[0.7rem]"}>Whether you`&apos;`re looking for a classic manicure or a bold, unique nail design, I am here to bring your vision to life. Your nails are an extension of your personality, and I`&apos;`m here to help you express yourself through them. From timeless elegance to avant-garde creativity, I have got you covered.</p>
                        <p className={"indent-6 my-[0.7rem]"}>I`&apos;`m looking forward to meeting you and being a part of your nail journey. Let`&apos;`s create nail art that reflects your personality and enhances your style. Book your appointment with me today, and let`&apos;`s turn your nails into a work of art.</p>
                        <p className={"indent-6 my-[0.7rem]"}>Thank you for choosing me as your nail master.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

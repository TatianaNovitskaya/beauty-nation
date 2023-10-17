import {Parisienne, Montserrat} from 'next/font/google'
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({subsets: ['latin'], weight: ["400", "600"]})
const parisienne = Parisienne({subsets: ['latin'], weight: ["400"]})

export default function Contact() {
    return (
        <section className={"py-[2rem] md:py-[4.25rem]"} id={"contact"}>
            <div className={`${montserrat.className} container flex  items-center flex-col-reverse md:flex-row w-full h-full relative  grid-cols-2 gap-[3rem] `}>
                <div className={"w-full md:w-1/2 relative flex justify-center items-center"}>
                    <Image src={"/decor-3.png"} alt={"decor-3"} width={616} height={611} className={"hidden md:block pointer-events-none absolute -top-[5rem] -right-[15rem]"}/>
                    <Image src={"/decor-1.png"} alt={"decor-1"} width={616} height={611} className={"hidden md:block pointer-events-none absolute -bottom-[1rem] left-[17rem]"}/>
                    <Image src={"/work-17.jpg"} alt={"work-17"} width={500} height={250} className={"rounded-tl-[10rem] z-10 rounded-bl-[10rem]"} style={{objectFit: 'cover'}}/>

                </div>
                <div className={"w-full md:w-1/2 text-center text-[#767676]"}>
                    <h2 className={`${parisienne.className}  text-[3.5rem] text-[#D8B192] mb-1.5rem`}>Contact me</h2>
                    <p>give me a call to schedule a treatment</p>
                    <Link href={"tel:+38(097)-675-5656"} className={"inline-block text-[1.5rem] font-semibold mt-[1.5rem]"}>(097)-675-5656</Link>
                </div>
            </div>
        </section>
    )
}

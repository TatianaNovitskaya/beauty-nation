import {Montserrat} from 'next/font/google'
import Image from "next/image";

const montserrat = Montserrat({subsets: ['latin'], weight: ["400", "600"]})

export default function Service() {
    return (
        <section className={"py-[4.75rem]"}>
            <div className={`${montserrat.className} text-[#767676] container flex flex-col md:flex-row h-full relative md:justify-around items-center md:items-baseline md:grid-cols-3 gap-[2rem] md:gap-[10rem]`}>
                <div className={"flex flex-col items-center w-1/2 md:w-1/3 text-center"}>
                    <Image src={"/icon-1.svg"} alt={"icon"} width={125} height={113}/>
                    <p className={"mt-[1.56rem] text-[1.25rem] font-semibold"}>Nail Care</p>
                    <span className={"mt-[0.7rem]"}>Regular nail care, including trimming, moisturizing promotes healthy and attractive nails.</span>
                </div>
                <div className={"flex flex-col items-center w-1/2 md:w-1/3 text-center"}>
                    <Image src={"/icon-2.svg"} alt={"icon-2"} width={143} height={163}/>
                    <p className={"mt-[1.56rem] text-[1.25rem] font-semibold"}>Nail Art</p>
                    <span className={"mt-[0.7rem]"}>Nail art is a creative way to express yourself through intricate designs on your nails.</span>
                </div>
                <div className={"flex flex-col items-center w-1/2 md:w-1/3 text-center"}>
                    <Image src={"/icon-3.svg"} alt={"icon-2"} width={143} height={163}/>
                    <p className={"mt-[1.56rem] text-[1.25rem] font-semibold"}>Tips & Trends</p>
                    <span className={"mt-[0.7rem]"}>Discover expert tips for healthier and more beautiful nails.</span>
                </div>
            </div>
        </section>
    )
}

import {Montserrat} from 'next/font/google'
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({subsets: ['latin'], weight: ["400", "600"]})

export default function Works() {
    return (
        <section className={""}>
            <div className={`${montserrat.className} flex w-full h-full relative flex-wrap items-baseline grid-cols-5 gap-[0rem] `}>
                <Image src={"/work-2.jpg"} alt={"work-2"} width={384} height={409} className={"w-[20%]"}/>
                <Image src={"/work-3.jpg"} alt={"work-3"} width={384} height={409} className={"w-[20%]"}/>
                <Image src={"/work-4.jpg"} alt={"work-4"} width={384} height={409} className={"w-[20%]"}/>
                <Image src={"/work-7.jpg"} alt={"work-7"} width={384} height={409} className={"w-[20%]"}/>
                <Image src={"/work-8.jpg"} alt={"work-8"} width={384} height={409} className={"w-[20%]"}/>
                <Image src={"/work-9.jpg"} alt={"work-9"} width={384} height={409} className={"w-[20%]"}/>
                <Image src={"/work-10.jpg"} alt={"work-10"} width={384} height={409} className={"w-[20%]"}/>
                <Image src={"/work-19.jpg"} alt={"work-19"} width={384} height={409} className={"w-[20%]"}/>
                <Image src={"/work-16.jpg"} alt={"work-16"} width={384} height={409} className={"w-[20%]"}/>
                <Image src={"/work-22.jpg"} alt={"work-22"} width={384} height={409} className={"w-[20%]"}/>
                <Link href={"https://www.instagram.com/beauty_nation_od/"} className={"hover:scale-105 transition-transform absolute bg-[#FCF8EF] py-10 px-20 shadow-1 flex flex-col justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "}>
                    <Image src={"/instagram.svg"} alt={"instagram"} width={48} height={48}/>
                    <p className={"uppercase text-[#D8B192] text-[2.5rem] font-semibold"}>follow me</p>
                </Link>
            </div>
        </section>
    )
}

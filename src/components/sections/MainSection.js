import { Parisienne } from 'next/font/google'
import Image from "next/image";

const parisienne = Parisienne({ subsets: ['latin'], weight: ["400"] })

export default function MainSection(){
    return(
        <section>
            <div className={"container flex flex-col lg:flex-row h-full relative -mt-[5rem] lg:mt-0"}>
                <Image src={"/work-23.jpg"} alt={"work-23"} className={"hidden lg:block absolute z-20 rounded-tl-[10rem] drop-shadow-2xl left-[25%] top-[50%] translate-x-1/2 rounded-tr-[10rem]"} width={310} height={838}/>
                <div className={"w-full py-[2.25rem]  lg:w-1/2 lg:pt-[6.25rem] lg:pb-[8.25rem]"}>
                    <div className={"relative mt-[3rem] lg:mt-[5rem]"}>
                        <h1 className={`${parisienne.className} font-bold text-[2.75rem] md:text-[4rem] text-center `}>Nail Perfection, Your Reflection.</h1>
                        <Image src={"/decor-3.png"} alt={"decor-3"} width={616} height={611} className={" hidden lg:block absolute -top-[22rem] left-[11rem]"}/>
                        <Image src={"/decor-1.png"} alt={"decor-2"} width={616} height={611} className={"hidden lg:block absolute -bottom-[20rem] -left-[5rem]"}/>
                        <Image src={"/nail-1.png"} alt={"nail"} width={441} height={294} className={"hidden lg:block mx-auto z-10"}/>

                    </div>
                </div>
                <div className={"w-full lg:w-1/2 h-[15rem] md:h-[25rem] lg:h-auto relative"}>
                    <Image src={"/work-11.jpg"} alt={"work-1"} className={"w-full"} style={{objectFit: 'cover'}} fill={true}/>
                </div>
            </div>
        </section>
    )
}

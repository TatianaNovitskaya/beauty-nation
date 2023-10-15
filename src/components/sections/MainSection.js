import { Inter, Montserrat } from 'next/font/google'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })
const montserrat = Inter({ subsets: ['latin'] })

export default function MainSection(){
    return(
        <section className={""}>
            <div className={"container flex h-full relative"}>
                <Image src={"/work-23.jpg"} alt={"work-23"} className={"absolute z-20 rounded-tl-[10rem] drop-shadow-2xl left-[25%] top-[50%] translate-x-1/2 rounded-tr-[10rem]"} width={310} height={838}/>
                <div className={"w-1/2 pt-[6.25rem] pb-[8.25rem]"}>
                    <div className={"relative mt-[10rem]"}>
                        <Image src={"/decor-3.png"} alt={"decor-3"} width={616} height={611} className={"absolute -top-[12rem] left-0"}/>
                        <Image src={"/decor-1.png"} alt={"decor-2"} width={616} height={611} className={"absolute -top-[15rem] left-[5rem]"}/>
                        <Image src={"/nail-1.png"} alt={"nail"} width={441} height={294} className={"mx-auto z-10"}/>
                        <span></span>
                    </div>
                </div>
                <div className={"w-1/2 relative"}>
                    <Image src={"/work-11.jpg"} alt={"work-1"} className={"w-full"} style={{objectFit: 'cover'}} fill={true}/>
                </div>
            </div>
        </section>
    )
}

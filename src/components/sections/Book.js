import {Inter, Montserrat} from 'next/font/google'
import Image from "next/image";

const inter = Inter({subsets: ['latin'], weight: ["400", "700"]})
const montserrat = Inter({subsets: ['latin']})

export default function Book() {
    return (
        <section className={"py-[4.75rem]"}>
            <div className={"container flex h-full relative"}>
                <form className={`${inter.className} w-full flex items-center justify-between`}>
                    <div className="">
                        <label className={"flex items-center"}>
                            <Image src={"/calendar-frame.svg"} alt={"calendar"} width={14} height={14}
                                   className={"mr-[0.5rem]"}/>
                            <span className={"uppercase text-[#D8B192] "}>date *</span>
                        </label>
                        <input type="date" required={true} id={"date"} min="2023-01-01" max="2023-12-31"
                               className={"bg-inherit w-full  mt-4 focus:outline-none placeholder:text-[#767676] border-b border-[#767676]"}/>
                    </div>
                    <div className="">
                        <label className={"flex items-center"}>
                            <Image src={"/person.svg"} alt={"person"} width={15} height={15} className={"mr-[0.5rem]"}/>
                            <span className={"uppercase text-[#D8B192] "}>name *</span>
                        </label>
                        <input type="text" required={true} placeholder={"Your name"} className={"bg-inherit w-full  mt-4 focus:outline-none placeholder:text-[#767676] border-b border-[#767676]"}/>
                    </div>
                    <div className="">
                        <label className={"flex items-center"}>
                            <Image src={"/phone.svg"} alt={"phone"} width={15} height={15} className={"mr-[0.5rem]"}/>
                            <span className={"uppercase text-[#D8B192] "}>phone *</span>
                        </label>
                        <input type="tel" required={true}  placeholder={"Your phone"} className={"bg-inherit w-full  mt-4 focus:outline-none placeholder:text-[#767676] border-b border-[#767676]"}/>
                    </div>
                    <div className="">
                        <label className={"flex items-center"}>
                            <Image src={"/cup.svg"} alt={"cup"} width={15} height={15}/>
                            <span className={"uppercase text-[#D8B192] "}>service</span>
                        </label>
                        <input type="text" className={"bg-inherit w-full  mt-4 focus:outline-none placeholder:text-[#767676] border-b border-[#767676]"}/>
                    </div>
                    <button type={"submit"} className={`${montserrat.className} py-4 px-[3.45rem] bg-[#D8B192] uppercase text-white rounded-[3.125rem]`}>book now</button>
                </form>
            </div>
        </section>
    )
}

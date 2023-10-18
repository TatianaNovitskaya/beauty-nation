import {Montserrat, Parisienne} from 'next/font/google'
import Image from "next/image";

const montserrat = Montserrat({subsets: ['latin'], weight: ["400", "600"]})
const parisienne = Parisienne({subsets: ['latin'], weight: ["400"]})

export default function Price() {
    return (
        <section className={"py-[4rem]"} id={"price"}>
            <div className={`${montserrat.className} flex flex-col-reverse items-center md:items-start md:flex-row-reverse text-[#767676] container h-full relative grid-cols-2 gap-[3rem]`}>
                <div className={"w-full md:w-1/2"}>
                    <article>
                        <h2 className={`${parisienne.className} text-center text-[3.5rem] text-[#D8B192] mb-1.5rem`}>Treatments & Prices</h2>
                        <div className={`flex justify-between grid-cols-2 gap-5 mb-[1.5rem]`}>
                            <div className={"w-[75%]"}>
                                <p className={"font-semibold text-[1.25rem]"}>Classic Manicure</p>
                                <span>Enjoy a classic manicure that includes nail shaping, cuticle care, a hand massage, and your choice of polish color.</span>
                            </div>
                            <div className="">
                                <p className={"font-semibold text-[1.25rem]"}>$25</p>
                            </div>
                        </div>
                        <div className={`flex justify-between grid-cols-2 gap-5 mb-[1.5rem]`}>
                            <div className={"w-[75%]"}>
                                <p className={"font-semibold text-[1.25rem]"}>Pedicure </p>
                                <span>Pedicure includes a soothing foot soak, exfoliation, callus removal, nail shaping, cuticle care, and a massage.</span>
                            </div>
                            <div className="">
                                <p className={"font-semibold text-[1.25rem]"}>$40</p>
                            </div>
                        </div>
                        <div className={`flex justify-between grid-cols-2 gap-5 mb-[1.5rem]`}>
                            <div className={"w-[75%]"}>
                                <p className={"font-semibold text-[1.25rem]"}>Gel Manicure</p>
                                <span>I&apos;ll shape your nails, care for your cuticles, and apply a high-quality gel polish of your choice.</span>
                            </div>
                            <div className="">
                                <p className={"font-semibold text-[1.25rem]"}>$40</p>
                            </div>
                        </div>
                        <div className={`flex justify-between grid-cols-2 gap-5 mb-[1.5rem]`}>
                            <div className={"w-[75%]"}>
                                <p className={"font-semibold text-[1.25rem]"}>Acrylic Nail Extensions</p>
                                <span>Transform your nails with acrylic extensions.</span>
                            </div>
                            <div className="">
                                <p className={"font-semibold text-[1.25rem]"}>$50</p>
                            </div>
                        </div>
                        <div className={`flex justify-between grid-cols-2 gap-5 mb-[1.5rem]`}>
                            <div className={"w-[75%]"}>
                                <p className={"font-semibold text-[1.25rem]"}>Nail Art</p>
                                <span>Express your unique style with our nail art options.</span>
                            </div>
                            <div className="">
                                <p className={"font-semibold text-[1.25rem]"}>from $5</p>
                            </div>
                        </div>
                        <div className={`flex justify-between grid-cols-2 gap-5 mb-[1.5rem]`}>
                            <div className={"w-[75%]"}>
                                <p className={"font-semibold text-[1.25rem]"}>Nail Repair</p>
                                <span>If you have a damaged nail or need a quick fix, our nail repair service will have your nails looking flawless again.</span>
                            </div>
                            <div className="">
                                <p className={"font-semibold text-[1.25rem]"}>$5 per nail</p>
                            </div>
                        </div>
                        <div className={`flex justify-between grid-cols-2 gap-5 mb-[1.5rem]`}>
                            <div className={"w-[75%]"}>
                                <p className={"font-semibold text-[1.25rem]"}>Nail Polish Change</p>
                                <span>Service includes the removal of old polish and the application of a fresh coat in the color of your choice.</span>
                            </div>
                            <div className="">
                                <p className={"font-semibold text-[1.25rem]"}>$15</p>
                            </div>
                        </div>
                        <div className={`flex justify-between grid-cols-2 gap-5 mb-[1.5rem]`}>
                            <div className={"w-[75%]"}>
                                <p className={"font-semibold text-[1.25rem]"}>Nail Enhancement Removal</p>
                                <span>Our gentle removal process will keep your natural nails healthy.</span>
                            </div>
                            <div className="">
                                <p className={"font-semibold text-[1.25rem]"}>$20</p>
                            </div>
                        </div>
                        <p className={"italic "}>Note: Prices may vary based on nail length, additional services, and design complexity. Please contact us for a personalized quote.</p>
                    </article>
                </div>
                <div className={"w-[80%] md:w-1/2 relative"}>
                    <Image src={"/work-5.jpg"} alt={"work-5"} width={563} height={704} className={"relative z-10"}/>
                    <Image src={"/decor-2.png"} alt={"decor-2"} width={463} height={504} className={"hidden ma:block absolute left-0 -bottom-[7rem] rotate-180"}/>
                    <Image src={"/work-21.jpg"} alt={"work-21"} className={"hidden ma:block absolute z-20 rounded-tl-[10rem] drop-shadow-2xl left-[25%] top-[50%] translate-x-1/2 rounded-tr-[10rem]"} width={310} height={838}/>
                </div>
            </div>
        </section>
    )
}

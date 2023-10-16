
import MainSection from "@/components/sections/MainSection";
import Book from "@/components/sections/Book";
import Service from "@/components/sections/Service";
import About from "@/components/sections/About";
import Price from "@/components/sections/Price";

export default function Home() {
  return (
    <main className={"bg-orange-50"}>
      <MainSection/>
      <Book/>
      <Service/>
      <About/>
      <Price/>
    </main>
  )
}

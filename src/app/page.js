
import MainSection from "@/components/sections/MainSection";
import Book from "@/components/sections/Book";
import Service from "@/components/sections/Service";

export default function Home() {
  return (
    <main className={"bg-orange-50"}>
      <MainSection/>
      <Book/>
      <Service/>
    </main>
  )
}

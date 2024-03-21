import Image from "next/image";
import Header from "@/app/components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
// import Experience "./components/Experience";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 sm:p-20 p-4 bg-[hsl(36,100%,99%)] text-black relative ">
      <Header />
      <About />
      <Experience />
    </div>
  );
}

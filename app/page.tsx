import Image from "next/image";
import Hero from "../components/Hero";
import PinContainer from "../components/ui/3d-pin";
import Header from "@/components/Header";
import { MotionConfig } from "framer-motion";


export default function Home() {
  return (
    <main > 
      <Header />
      <Hero />
    </main>
    
  );
}

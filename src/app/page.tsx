'use client'
import { Loader } from "@/components/Loader";
import { useState, useEffect, useRef } from "react";
import { motion,   
  AnimatePresence,
  useScroll,
  useMotionValueEvent, } from "framer-motion";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { FlipLink } from "@/components/FlipLink";
import { ArrowDownRight, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeartSection from "@/components/HeartSection/HeartSection";
import dynamic from "next/dynamic";
import { HeaderSection } from "@/components/HeaderSection";

const Scene = dynamic(() => import('../components/HeartSection/Scene'), {
  ssr: false
})


export default function Home() {
  const [ isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      {
        isLoading ? (
          <Loader setLoading={setIsLoading} />
        ) : (
          <section className='h-screen w-screen text-black relative bg-primary'>
            <HeaderSection /> 
          </section>
        )
      }
    </>
  );
}

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
            <div className='h-fit flex py-12 bg-slate-50'>
              <p className='w-[30%]'>
                I&apos;m passionate about building delightful user experiences with cool technologies!
              </p>
              <div className='w-[70%] flex flex-1 items-center flex-col'>
              <h3 className='font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-pink-500'>About Me</h3>
              <hr className='border-b border-slate-500 w-[200px] mb-4' />
              <ul className='text-xl flex flex-col items-start'>
                <li>
                Co-Founder, Carbo Cat
                </li>
                <li>
                Fullstack SWE, Extensis
                </li>
              </ul>
              <ul className='text-xl flex flex-col items-start'>
                <li>
                M.S Caltech
                </li>
                <li>
                B.S Chapman University
                </li>
              </ul>
              </div>
            </div>
          </section>
        )
      }
    </>
  );
}

'use client'

import { motion } from "framer-motion"
import { AuroraBackground } from "../AuroraBackground"
import Scene from "../HeartScene/Scene"
import { ArrowDown, ArrowDownRight } from "lucide-react"
import { FlipLink } from "../FlipLink"
import { useRef, useState, useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeaderSection(){
    const firstText = useRef(null)
    const secondText = useRef(null)
    const slider = useRef(null)
    const [ scrollTextVisible, setScrollTextVisible ] = useState<boolean>(true)
  
  
    let xPercent = 0
    let direction = 1
  
    // This uses gsap, but ideally you use just framer/gsap.  Just used both for the purpose of experimentation/fun :)
    // Check the SkillSection for an example of framer scroll animations....

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      requestAnimationFrame(animation)
  
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          scrub: true,
          onUpdate: e => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            direction = e.direction * -1
            e.progress < 0.05 ? setScrollTextVisible(true) : setScrollTextVisible(false)
          }
        },
        x: "-=300px",
      })
    })
  
    const animation = () => {
      if (xPercent <= -100){
        xPercent = 0
      }
      if (xPercent > 0){
        xPercent = - 100
      }
      gsap.set(firstText.current, {xPercent: xPercent})
      gsap.set(secondText.current, {xPercent: xPercent})
      xPercent += 0.1 * direction
      requestAnimationFrame(animation)
    }
    return(

<AuroraBackground className='min-h-[500px]' showRadialGradient>
<div className='h-full w-full relative flex flex-col items-center mt-32 z-50 mb-12'>
  <div className='flex flex-col'>
    <div className='mt-16 sm:mt-0 h-[400px] flex w-full'>
      <Scene />
    </div>
  <motion.h1 
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0,
    duration: 0.8,
    ease: "easeInOut",
    type: "tween"
  }}
  className={`bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent mb-4`}><span className='font-bold'>D</span>aniel <span className='font-bold'>K</span> <span className='font-bold'>C</span>hang</motion.h1>
  <div className='flex items-center justify-center flex-col sm:flex-row  sm:gap-x-8 gap-y-4'>
  <span className="flex text-white gap-x-3 w-[220px] sm:w-fit">
  <ArrowDownRight height={25} width={25} />
  <FlipLink href='https://www.linkedin.com/in/daniel-k-chang/'>
    LinkedIn
  </FlipLink>
  </span>
  <span className="flex text-white gap-x-3 w-[220px] sm:w-fit">
  <ArrowDownRight height={25} width={25} />
  <FlipLink href='https://github.com/Chang254'>
    GitHub
  </FlipLink>
  </span>
  <span className="flex text-white gap-x-3 w-[220px] sm:w-fit">
  <ArrowDownRight height={25} width={25} />
  <FlipLink href='mailto:dkchang213@gmail.com'>
    Contact
  </FlipLink>
  </span>
  </div>
  </div>
</div>
<div className='mb-12 mt-12'>
  <div ref={slider} className = 'relative whitespace-nowrap flex'>
  <p ref={firstText} className='m-0 px-4 text-slate-200 text-[50px] md:text-[8vw] font-bold'>
  Fullstack Software Engineer -
  </p>
  <p ref={secondText} className='m-0 px-4 text-slate-200 text-[50px] md:text-[8vw] font-bold absolute left-[100%]'>
  Fullstack Software Engineer -
  </p>
  </div>
</div>
<motion.span         initial={{
opacity: 1,
y: -100,
}}
animate={{
y: scrollTextVisible ? 0 : -50,
opacity: scrollTextVisible ? 1 : 0,
}}
transition={{
duration: 0.2,
}} className = 'mb-16 text-2xl text-tiffany flex flex-col items-center w-screen'>Scroll Down<ArrowDown/></motion.span>

</AuroraBackground>
    )
}

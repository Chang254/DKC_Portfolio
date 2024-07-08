'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const summaryOpacity = {
  initial: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: {duration: 0.5}
  },
  closed: {
    opacity: 0
  }
}

const slideUp = {
  initial: {
    y: "100%"
  },
  open: (i: number) => ({
    y: 0,
    transition: {duration: 0.5, delay: 0.01 * i},
  }),
  closed: {
    y: "100%"
  }
}

export default function AboutSection(){

  const aboutContainer = useRef(null)
  const isInView = useInView(aboutContainer)
  const paragraph = "I'm currently building Carbo Cat, an online learning platform for organic chemistry and working as a Fullstack Software Engineer @ Extensis.  If you are interested in working with me, please don't hesitate to reach out! My time is limited at the moment, but I'm always excited to turn your ideas into reality!"
  

    return(
        <section className='h-full flex flex-col py-[50px] sm:py-[200px] bg-primary text-slate-200 ' ref={aboutContainer}>
        <div className='flex flex-col sm:flex-row w-full h-fit'>
        <p className='w-full sm:w-[50%] text-lg sm:text-2xl flex items-center px-12 flex-wrap gap-x-2'>
         {
          paragraph.split(" ").map( (word, index) => {
            return <span key={index} className="overflow-hidden inline-flex overflow-hidden">
              <motion.span
              variants = {slideUp}
                initial="initial"
                animate = {isInView ? "open" : "closed"}
                custom={index}
              >
                {word}
              </motion.span>
            </span>
          })
         }
        </p>
        <motion.div variants={summaryOpacity} initial = "initial" animate = { isInView ? "open" : "closed"} className='w-full mt-8 sm:mt-0 sm:w-[50%] flex flex-1 items-center flex-col'>
        <h3 className='w-[300px] py-2 text-5xl font-bold bg-gradient-to-r from-cyan-500 to-tiffany text-transparent bg-clip-text'>Summary</h3>
        <hr className='border-b border-slate-500 w-[300px] mt-2 mb-4' />
        <ul className='text-2xl flex flex-col items-start w-[300px]'>
          <li>
          Co-Founder, Carbo Cat
          </li>
          <li>
          Fullstack SWE, Extensis
          </li>
        </ul>
        <ul className='text-2xl flex flex-col items-start w-[300px] mt-3'>
          <li>
          M.S Caltech
          </li>
          <li>
          B.S Chapman University
          </li>
        </ul>
        <div className='w-full flex items-center justify-center mt-12 gap-x-8 text-2xl'>
          <a href='/DKC_Resume.pdf' target="_blank" className='font-bold bg-gradient-to-r from-cyan-300 via-violet-200 to-pink-300 text-transparent bg-clip-text bg-300% animate-gradient'>
            Resume
          </a>
          <a href='mailto:dkchang213@gmail.com' className='font-bold bg-gradient-to-r from-cyan-500 via-slate-200 to-violet-400 text-transparent bg-clip-text bg-300% animate-gradient'>
            Contact
          </a>
        </div>
        </motion.div>
        </div>
      </section>
    )
}
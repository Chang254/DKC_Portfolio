'use client'
import { useEffect, useRef } from "react"
import { useLenis } from "@studio-freight/react-lenis"
import Image from "next/image"
import { useScroll, useTransform, motion, MotionValue } from "framer-motion"


const sliders = [
    {
        id: 'Languages',
        text: 'TypeScript Python TypeScript Python',
        src: '/Arctic.JPG',
        alt: 'Daniel at Arctic Station',
        left: '-55%',
        direction: 1
    },
    {
        id: 'Frontend',
        text: 'Next.js React Redux Next.js React Redux',
        src: '/Luna.jpeg',
        alt: 'Luna the baby kitten!',
        left: '-35%',
        direction: -1
    },
    {
        id: 'Backend',
        text: 'Node.js SQL NoSQL Node.js SQL NoSQL Node.js SQL NoSQL',
        src: '/Nature.jpeg',
        alt: 'Daniel in Nature',
        left: '-45%',
        direction: 1
    },
    {
        id: 'Misc.',
        text: 'tRPC Prisma',
        src: '/Uno.jpeg',
        alt: 'Uno the cat',
        left: '-75%',
        direction: -1
    },
    {
        id: 'Misc2.',
        text: 'AWS Electron',
        src: '/Work.jpeg',
        alt: 'Work setup',
        left: '-55%',
        direction: 1
    },
]

export default function SkillSection(){

    const skillContainer = useRef(null)

    const lenis = useLenis()
    useEffect(() => {
        function raf(time:number){
            lenis?.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    })

    const { scrollYProgress } = useScroll({
        target: skillContainer,
        offset: ['start end', 'end start']
    })

    return(
        <section className='overflow-hidden h-full py-12 w-[100vw] bg-slate-200 text-slate-950'>
            <div ref={skillContainer}>
                {
                    sliders.map((slider) => (
                        <Slider
                            key={slider.id}
                            left={slider.left}
                            progress={scrollYProgress}
                            direction={slider.direction}
                            text={slider.text}
                            src={slider.src}
                        />
                    ))
                }
            </div>
        </section>
    )
}

interface SliderProps {
    left: string;
    text: string;
    src: string;
    progress: MotionValue<number>;
    direction: number;
}

function Slider({left, text, src, progress, direction}: SliderProps){

    const x = useTransform(progress, [0 , 1], [-250 * direction, 250 * direction])

    return (
        <motion.div className = 'relative flex whitespace-nowrap'
            style = {{left, x}}
        >
            <Phrase text={text} src={src} />
            <Phrase text={text} src={src} />
            <Phrase text={text} src={src} />
        </motion.div>
    )
}

interface PhraseProps {
    text: string;
    src: string;
}


function Phrase({text, src}: PhraseProps){
    return(
        <div className={'flex px-5 gap-5 items-center'}>
            <p className='text-[8vw]'>
                {text}
            </p>
            <span className='relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden'>
                <Image style={{objectFit: "cover"}} src={src} fill={true} alt='Daniel' />
            </span>
        </div>
    )
}
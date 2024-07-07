import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LoaderProps {
    setLoading: (s: boolean) => void
}

const containerImage = {
    hidden: {
        height: "90vh",
        width: "90vh"
    },
    show: {
        height: "100vh",
        width: "100vw",
        transition: {
            duration: 3,
            type: "tween",
            ease: "easeInOut",
        }
    }
}

const imageScale = {
    hidden: {
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    },
    show: (i: number) => ({
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: {
            delay: i,
            duration: 1.5,
            type: "tween",
            ease: "easeInOut"
        }
    })
}

const textOpacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.2, delay: 0.2
        }
    }
}

export function Loader({setLoading} : LoaderProps){
    const [ isPreloadDone, setIsPreloadDone ] = useState<boolean>(false)
    const [ index, setIndex ] = useState<number>(0)
    const words = ["Hey", "안녕", "你好", "สวัสดีครับ", "I'm DKC",]

    useEffect(() => {
        if (index === words.length){
            return setIsPreloadDone(true) 
        }
        setTimeout(() => {
            setIndex(index + 1)
        }, index === 0 ? 1000 : index !== words.length - 1 ? 300 : 700)
    }, [index])

    return (
        <div className='flex items-center h-screen w-screen bg-primary'>
            {
                !isPreloadDone
                    ? <motion.p variants = {textOpacity} initial="initial" animate="enter" className='h-full w-full flex items-center justify-center text-3xl text-white font-bold' >{words[index]}</motion.p>
                    : 
                    (<motion.div className="flex items-center relative overflow-hidden"
                    variants = {containerImage}
                    initial="hidden"
                    animate="show"
                >
                    <div className='relative h-screen w-screen'>
                        <motion.div variants={imageScale} initial="hidden" animate="show" custom={0.4} className='absolute origin-left z-10 bg-black w-full h-full'>
                        <Image fill={true} src="/carbocat.svg" alt="CarboCat" />          
                        </motion.div>
                        {/* <motion.div variants={imageScale} initial="hidden" animate="show" custom={0.6} className='absolute origin-left z-20 w-full h-full'>
                        <Image fill={true} src="/pdx.svg" alt="CarboCat" />   
                        </motion.div> */}
                        <motion.div variants={imageScale} initial="hidden" animate="show" custom={0.8} className='flex items-center justify-center absolute origin-left z-30 bg-white w-full h-full'>
                        <Image height={1000} width={1000} src="/DKC-logo.png" alt="CarboCat" />   
                        </motion.div>
                        <motion.div layoutId="smooth" onAnimationComplete = {() => setLoading(false)} variants={imageScale} custom={1.0} initial="hidden" animate="show" className='absolute origin-left z-40 bg-primary h-full w-full' />                      
                    </div>
                </motion.div>)
            }

        </div>
    )
}
'use client'
import { Loader } from "@/components/Loader";
import { useState } from 'react'
import { HeaderSection } from "@/components/Sections/HeaderSection";
import AboutSection from "@/components/Sections/AboutSection";
import SkillSection from "@/components/Sections/SkillSection";


export default function Home() {
  const [ isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      {
        isLoading ? (
          <Loader setLoading={setIsLoading} />
        ) : (
          <section className='h-fit w-full text-black relative bg-primary'>
            <HeaderSection /> 
            <SkillSection />
            <AboutSection />
          </section>
        )
      }
    </>
  );
}

export default function AboutSection(){
    return(
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
    )
}
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('../../components/HeartSection/Scene'), {
    ssr: false
})

export default function Page(){
    return (
        <section className='h-screen w-screen relative'>
            <Scene />
        </section>
    )
}
import React from 'react'

function Hero() {
  return (
    <section className="container relative ">
        <div className="hidden md:block w-full container relative md:h-[600px] xl:h-[900px] ">
        <img src={require('../img/headerBg.jpg')} alt='bg' className='hidden md:block absolute md:h-[600px] xl:h-[900px] left-1/2 -translate-x-1/2 -top-36 z-10 w-full'/>
        <img src={require('../img/hero.png')} alt='hero' className='hidden md:block absolute max-h-[80%]  bottom-36 left-1/2 -translate-x-1/2  z-20'/>
        <div className="absolute w-full font-['Ledger'] text-xl md:text-4xl xl:text-6xl text-center text-white top-1/3 xl:top-1/2 left-1/2 -translate-x-1/2  z-20">
                Маленькая парикмахерская<br />с большой историей</div>

        </div>
        <div className="flex flex-col text-center w-full pt-20 md:pt-0 mb-4 sm:mb-10 z-30">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">"ЛУЧ" — мужская парикмахерская с богатой историей</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">У НАС ЕСТЬ ВСЁ, ЧТО ТРЕБУЕТСЯ НАСТОЯЩЕМУ МУЖЧИНЕ: АТМОСФЕРА БРУТАЛЬНОСТИ И МУЖСКОГО ДУХА, ПРОФЕССИОНАЛИЗМ МАСТЕРОВ И ПЕРСОНАЛЬНЫЙ ПОДХОД.</p>
        </div>
    </section>
  )
}

export default Hero
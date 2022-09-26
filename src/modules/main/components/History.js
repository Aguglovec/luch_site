import React from 'react'

function History() {
  return (
<section className="">
  <div className="container px-5 md:px-10 py-12 lg:py-20 mx-auto flex flex-wrap bg-[#E5FAFF] bg-opacity-50">
    <div className="flex w-full mb-8 flex-wrap ">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold w-full text-center lg:mb-0 mb-4">История</h1>
    </div>
    <div className='flex w-full flex-wrap mb-12'>
    <div className="flex flex-wrap w-3/5">
      <div className="md:p-2 p-1 w-full ">
        <img alt="gallery" className="w-full object-cover h-full  block" src={require('../img/history1.jpg')} />
      </div>
    </div>

    <div className="flex flex-col flex-wrap w-2/5 ">
      <div className="md:p-2 p-1 ">
        <img alt="gallery" className="w-full object-cover h-full  block" src={require('../img/history2.jpg')} />
      </div>
      <div className="md:p-2 p-1 ">
        <img alt="gallery" className="w-full object-cover h-full  block" src={require('../img/history3.jpg')} />
      </div>
      <div className="md:p-2 p-1 ">
      <h1 className="text-base sm:text-xl lg:text-3xl  w-full text-center ">Основатели с клиентами</h1>
      </div>
    </div>
    </div>
      <p className="text-base sm:text-2xl lg:text-4xl w-full px-4 lg:px-10 lg:mb-14 mb-8">Цирюльникъ был основан в 1949 году молодыми, творческимим парикмахерами, дети и внуки которых, работают здесь по сей день. </p>
      <p className="text-base sm:text-2xl lg:text-4xl w-full px-4 lg:px-10 lg:mb-14 mb-8">В этой парикмахерской сохранился стиль и исторические ценности послевоенного периода.</p>
      <p className="text-base sm:text-2xl lg:text-4xl w-full px-4 lg:px-10 lg:mb-14 mb-8">Здесь вы прикаснётесь к истории Одессы, а так-же получите удовольствие от стрижки. </p>
      <p className="text-base sm:text-2xl lg:text-4xl w-full px-4 lg:px-10 lg:mb-14 mb-8">Окунитесь в атмосферу Одесской Молдованки!</p>






  </div>
</section>

    )
}

export default History
import React from 'react';
import coffee from '../img/coffee.svg';
import prize from '../img/prize.svg';
import hand from '../img/hand.svg';

function Services() {
  return (
<section >
  <div className="container px-5 pt-10 mx-auto ">
    <div className="flex flex-wrap sm:mx-auto sm:mb-2">
      <div className="p-1 md:w-1/4 w-1/2 flex h-full items-center justify-center">

        <img src={require('../img/service1.jpg')} alt="БРИТЬЁ" className=''/>
          <span className="absolute text-white text-center text-base sm:text-xl xl:text-3xl font-extrabold ">БРИТЬЁ</span>
      </div>
      <div className="p-1 md:w-1/4 w-1/2 flex h-full items-center justify-center">

        <img src={require('../img/service2.jpg')} alt="СТРИЖКА" className=''/>
          <span className="absolute text-white text-center text-base sm:text-xl xl:text-3xl font-extrabold ">СТРИЖКА<br />УКЛАДКА</span>
      </div>
      <div className="p-1 md:w-1/4 w-1/2 flex h-full items-center justify-center">

        <img src={require('../img/service3.jpg')} alt="МЫТЬЁ" className=''/>
          <span className="absolute text-white text-center text-base sm:text-xl xl:text-3xl font-extrabold ">МЫТЬЁ<br />УХОД ЗА КОЖЕЙ</span>
      </div>
      <div className="p-1 md:w-1/4 w-1/2 flex h-full items-center justify-center">

        <img src={require('../img/service4.jpg')} alt="РИСУНОК" className=''/>
          <span className="absolute text-white text-center text-base sm:text-xl xl:text-3xl font-extrabold">РИСУНОК</span>
      </div>
    </div>
  </div>

  <div className="container px-5 py-8 mx-auto flex sm:flex-row flex-col justify-start ">
    <div className="flex items-center lg:w-3/5 mx-auto flex-row sm:flex-col ">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  flex-shrink-0">
      <img src={coffee} alt="coffee" className='sm:w-16 sm:h-16'/>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 px-2">
        <p className="leading-relaxed text-base">ВАМ ОБЯЗАТЕЛЬНО ПРЕДЛОЖАТ ЧАШЕЧКУ  КОФЕ ИЛИ ЧАЯ</p>
      </div>
    </div>

    <div className="flex items-center lg:w-3/5 mx-auto flex-row sm:flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  flex-shrink-0">
      <img src={prize} alt="prize" className='sm:w-16 sm:h-16'/>

      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 px-2">
        <p className="leading-relaxed text-base">МЫ ПОСТРИЖЕМ И ПОБРЕЕМ ВАС НА ВЫСШЕМ УРОВНЕ</p>
      </div>
    </div>

    <div className="flex items-center lg:w-3/5 mx-auto flex-row sm:flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  flex-shrink-0">
      <img src={hand} alt="hand" className='sm:w-16 sm:h-16'/>

      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 px-2">
        <p className="leading-relaxed text-base">ВЫ НЕ УСПЕЕТЕ ЗАМЕТИТЬ, КАК СНОВА ЗАХОТИТЕ ВЕРНУТЬСЯ</p>
      </div>
    </div>
  </div>


  
</section>
  )
}

export default Services
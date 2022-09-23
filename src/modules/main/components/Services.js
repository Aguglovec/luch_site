import React from 'react'

function Services() {
  return (
<section >
  <div className="container px-5 py-24 mx-auto flex sm:flex-row flex-col">
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 flex-row sm:flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <p className="leading-relaxed text-base">ВАМ ОБЯЗАТЕЛЬНО ПРЕДЛОЖАТ ЧАШЕЧКУ  КОФЕ ИЛИ ЧАЯ</p>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 flex-row sm:flex-col">
    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <p className="leading-relaxed text-base">МЫ ПОСТРИЖЕМ И ПОБРЕЕМ ВАС НА ВЫСШЕМ УРОВНЕ</p>
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto flex-row sm:flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <p className="leading-relaxed text-base">ВЫ НЕ УСПЕЕТЕ ЗАМЕТИТЬ, КАК СНОВА ЗАХОТИТЕ ВЕРНУТЬСЯ</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Services
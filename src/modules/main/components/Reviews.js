import React from 'react'

function Reviews() {
  return (
    <div className="container px-5 md:px-10 py-12 lg:py-20 mx-auto flex flex-wrap bg-[#E5FAFF] bg-opacity-50">

    <div className="flex w-full mb-8 flex-wrap ">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold w-full text-center lg:mb-0 mb-4">Отзывы</h1>
    </div>

    <div className="flex flex-row items-center justify-around">
                <div className="relative lg:max-w-lg md:w-1/6 w-2/6 min-w-[84px] mb-10 md:mb-0 ">
                    <img className="m-2  relative object-cover object-center z-30" alt="user1" src="./img/user1.png" />
                </div>
                <div className="lg:w-3/4 md:w-1/2 lg:px-8 md:px-3 px-2 flex flex-col md:items-start md:text-left items-center bg-white rounded-3xl shadow-[7px_4px_4px_0px_rgba(0,0,0,0.25)]">
                    <p className="sm:text-lg text-sm mb-4 ">Увляжняющая сыворотка очень помогла избавиться от сухости кожи на лбу. В сочетание с кремами работает безотказно!</p>
                </div>
            </div>

            <div className="flex flex-row items-center justify-around">
                <div className="lg:w-3/4 md:w-1/2 lg:px-8 md:px-3 px-2 flex flex-col md:items-start md:text-left items-center bg-white rounded-3xl shadow-[7px_4px_4px_0px_rgba(0,0,0,0.25)]">
                    <p className="sm:text-lg text-sm mb-4 ">Сыворотка помогла. Спасибо за детальную консультацию и оперативную доставку.</p>
                </div>
                <div className="relative lg:max-w-lg md:w-1/6 w-2/6 min-w-[84px] mb-10 md:mb-0 ">
                    <img className=" m-2 relative object-cover object-center z-30" alt="user1" src="./img/user2.png" />
                </div>
            </div>

            <div className="flex flex-row items-center justify-around">
                <div className="relative lg:max-w-lg md:w-1/6 w-2/6 min-w-[84px] mb-10 md:mb-0 ">
                    <img className="m-2  relative object-cover object-center z-30" alt="user1" src="./img/user3.png" />
                </div>
                <div className="lg:w-3/4 md:w-1/2 lg:px-8 md:px-3 px-3 flex flex-col md:items-start md:text-left items-center bg-white rounded-3xl shadow-[7px_4px_4px_0px_rgba(0,0,0,0.25)]">
                    <p className="sm:text-lg text-sm mb-4 ">Моё любимое косметическое средство. как я раньше без него жила. кожа просто сияет, купила сыворотку для отбелевания, ушли за месяц все пигментные пятна под глазами. Спасибо!</p>
                </div>
            </div>


    </div>
  )
}

export default Reviews
import React from 'react'

function Gallery() {
  return (
<section className="">
  <div className="container px-5 md:px-10 py-12 lg:py-20 mx-auto flex flex-wrap bg-[#FFF8E6] bg-opacity-50">
    <div className="flex w-full mb-8 flex-wrap ">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold w-full text-center lg:mb-0 mb-4">Фотогалерея</h1>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-full">
        <div className="md:p-2 p-1 w-2/5 ">
          <img alt="gallery" className="w-full object-cover h-full object-center shadow-[5px_6px_4px_rgba(0,0,0,0.4)] block" src={require('../img/gallery1.jpg')} />
        </div>
        <div className="md:p-2 p-1 w-3/5 ">
          <img alt="gallery" className="w-full object-cover h-full object-center shadow-[5px_6px_4px_rgba(0,0,0,0.4)] block" src={require('../img/gallery2.jpg')} />
        </div>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="md:p-2 p-1 w-1/3 ">
          <img alt="gallery" className="w-full object-cover h-full object-center shadow-[5px_6px_4px_rgba(0,0,0,0.4)] block" src={require('../img/gallery3.jpg')} />
        </div>
        <div className="md:p-2 p-1 w-1/3 ">
          <img alt="gallery" className="w-full object-cover h-full object-center shadow-[5px_6px_4px_rgba(0,0,0,0.4)] block" src={require('../img/gallery4.jpg')} />
        </div>
        <div className="md:p-2 p-1 w-1/3 ">
          <img alt="gallery" className="w-full object-cover h-full object-center shadow-[5px_6px_4px_rgba(0,0,0,0.4)] block" src={require('../img/gallery5.jpg')} />
        </div>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="md:p-2 p-1 w-[65%] ">
          <img alt="gallery" className="w-full object-cover h-full object-center shadow-[5px_6px_4px_rgba(0,0,0,0.4)] block" src={require('../img/gallery6.jpg')} />
        </div>
        <div className="md:p-2 p-1 w-[35%] ">
          <img alt="gallery" className="w-full object-cover h-full object-center shadow-[5px_6px_4px_rgba(0,0,0,0.4)] block" src={require('../img/gallery7.jpg')} />
        </div>
      </div>



      </div>
  </div>
</section>
  )
}

export default Gallery
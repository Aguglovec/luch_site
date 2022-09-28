import React from 'react'

function ReviewItem({review}) {

  return (
    <div className="flex items-center w-full md:w-4/5 lg:w-3/5  flex-row ">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white flex-shrink-0">
      </div>
      <div className="flex-grow text-left mt-6 sm:mt-0 px-2">
        <p className="leading-relaxed text-base font-bold">{review.name}</p>
        <p className="leading-relaxed text-base">{review.review}</p>
      </div>
    </div>
  )
}

export default ReviewItem
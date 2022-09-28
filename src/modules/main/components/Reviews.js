import React from 'react';
import { reviews } from '../../../config';
import ReviewItem from './ReviewItem';


function Reviews() {
  return (
    <div className="container px-5 md:px-10 py-12 lg:py-20 mx-auto flex flex-wrap justify-center gap-4 bg-[#E5FAFF] bg-opacity-50">

        <div className="flex w-full mb-8 flex-wrap ">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold w-full text-center lg:mb-0 mb-4">Отзывы</h1>
        </div>

{reviews.map(review => {
  return <ReviewItem review={review} key={review.id}/>
})}


    </div>
  )
}

export default Reviews
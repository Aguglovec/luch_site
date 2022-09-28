import React from 'react';
import { staff } from '../../../config';
import TeamItem from './TeamItem';


function Team() {
  return (
<section className="font-robotoCond">
<div className="container px-2 sm:px-5 md:px-1 py-6 lg:py-20 mx-auto flex flex-wrap justify-center ">
  <div className="flex w-full  flex-wrap ">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold w-full text-center lg:mb-0 mb-4">Наши мастера</h1>
    </div>

    <div className="w-full flex flex-wrap justify-center">
      
      {staff.map(person => {
          return (
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3">
          <TeamItem person={person} key={person.id}/>
          </div>
          )
      })}
      
    </div>
  </div>
</section>
  )
}

export default Team
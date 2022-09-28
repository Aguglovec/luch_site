import React from 'react'

function TeamItem({person}) {
  return (
    <div className="h-full flex flex-row sm:flex-col items-center sm:justify-start justify-center sm:text-center text-left">
        <img alt="team" className=" w-36 sm:w-full object-cover object-center " src={person.pic} />
        <div className="flex-grow pl-2 sm:pl-0">
        <h2 className="font-bold text-3xl">{person.name}</h2>
        <h3 className="text-gray-500 text-base   mb-3">{person.descr}</h3>
        </div>
    </div>
    )
}
    
export default TeamItem
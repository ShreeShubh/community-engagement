import { mentorsData, qcData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const Mentors = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-5 mb-5">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl sm:text-3xl text-ce-brown text-center font-semibold">
          Mentors
        </h1>
        <div className="border-2 border-ce-red w-20 mb-2" />
      </div>
      <div className="flex justify-center mt-7">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-16">
          {mentorsData.map((item) => {
            return (
              <li key={item.id}>
                <div className="flex flex-col items-center gap-5">
                  <Image
                    src={item.iconUrl}
                    width={303}
                    height={298}
                    alt={item.tiile}
                    className=""
                  />
                  <div className="flex flex-col items-center px-10">
                    <h3 className="text-2xl text-ce-brown text-center font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-lg text-ce-black text-center">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Mentors

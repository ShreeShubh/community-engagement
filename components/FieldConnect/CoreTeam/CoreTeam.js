import { coreTeamData, qcData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const CoreTeam = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-16 px-5 mb-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl text-ce-brown text-center font-semibold">
          Core Team
        </h1>
        <div className="border-2 border-ce-red w-32 mb-2" />
      </div>

      <div className="flex justify-center mt-7">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-16">
          {coreTeamData.map((item) => {
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
                  <h3 className="text-3xl text-ce-brown text-center font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-xl text-ce-black text-center">
                    {item.designation}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default CoreTeam

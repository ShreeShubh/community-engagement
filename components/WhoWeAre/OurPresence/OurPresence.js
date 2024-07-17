import React from 'react'

const OurPresence = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 mb-16">
          <h2 className="text-ce-brown text-2xl sm:text-3xl text-center">
            Our Presence
          </h2>
          <div className="border-2 border-ce-red w-20 mb-2" />
          <div className="flex flex-col md:flex-row items-start gap-10 mt-5">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <div className="border-4 border-ce-vivid-green bg-ce-light-green text-ce-brown px-6 md:px-12 py-5 flex justify-center items-center">
                <div className="flex flex-col gap-5 text-center md:text-left">
                  <h4 className="text-xl md:text-3xl font-semibold">
                    Domestic Presence
                  </h4>
                </div>
              </div>
              <div className="px-6 md:px-10 py-3">
                <p className="text-lg md:text-xl text-ce-black">
                  Our Field Connect team is present across India.
                </p>
              </div>
            </div>
            <div className="hidden md:block border-l-2 border-dashed border-ce-gray h-[200px] mt-28"></div>
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <div className="border-4 border-ce-vivid-green bg-ce-light-green text-ce-brown px-6 md:px-12 py-5 flex justify-center items-center">
                <div className="flex flex-col gap-5 text-center md:text-left">
                  <h4 className="text-xl md:text-3xl font-semibold">
                    International Reach
                  </h4>
                </div>
              </div>
              <div className="px-6 md:px-10 py-3">
                <p className="text-lg md:text-xl text-ce-black">
                  We extend our field operations internationally through
                  partnerships with locally verified organisations in
                  Bangladesh, Sri Lanka, Nepal, the Philippines, Indonesia,
                  Malaysia, Singapore, and various African countries including
                  South Africa and Kenya. We are also present in Turkey, the
                  UAE, the UK, Jordan, and Saudi Arabia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPresence

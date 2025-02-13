'use client'

import Header from '@/components/Header/Header'
import Services from '@/components/Services/Services'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className="h-[700px] bg-[url('/webBanner/banner08.png')] bg-cover mb-16">
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-24 mb-16">
        <div className="max-w-screen-xl mx-auto px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] text-ce-brown text-center font-semibold">
              Services
            </h1>
            <div className="border-2 border-ce-red w-32 mb-2" />
          </div>
        </div>
      </div>
      <Services />
    </>
  )
}

export default page

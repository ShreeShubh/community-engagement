import CoreTeam from '@/components/FieldConnect/CoreTeam/CoreTeam'
import MentorAndAdvisors from '@/components/FieldConnect/MentorAndAdvisors/MentorAndAdvisors'
import Mentors from '@/components/FieldConnect/Mentors/Mentors'
import PortfolioManager from '@/components/FieldConnect/PortfolioManager/PortfolioManager'
import Header from '@/components/Header/Header'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="h-[100vh] bg-[url('/whyChooseUs/banner.png')] bg-cover bg-center mb-16">
        <Header />
        <div className="text-end mt-16">
          <Link href="contact-us">
            <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-40 mb-16">
        <div className="max-w-screen-xl mx-auto px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-6xl text-ce-brown text-center font-semibold">
              Field Connect
            </h1>
            <div className="border-2 border-ce-red w-32 mb-2" />
            <h2 className="text-3xl text-ce-brown text-center">
              Data Quality Assurance and Control Process
            </h2>
          </div>
          <p className="text-2xl text-ce-gray text-center mb-3">
            Social research is on the rise, driven by the need to understand
            complex social dynamics beyond mere consumer preferences. This surge
            highlights a crucial gap: the need for well-trained fieldworkers who
            can gather high-quality data, essential for informed decision-making
            and positive social impact.
          </p>
          <p className="text-2xl text-ce-gray text-center">
            To address this, the Community Engagement unit of the Catalyst Group
            has launched Field Connect, an initiative aimed at building a
            passionate, future-ready, committed, trained, and ethically
            certified team. This team, comprising over 2,681 skilled field
            researchers spread across India—including remote areas—enables
            rapid, effective community engagement. Our researchers are equipped
            to handle both quantitative and qualitative data collection,
            ensuring our partners can reach diverse communities and drive
            impactful solutions.
          </p>
        </div>
      </div>
      <PortfolioManager />
      <CoreTeam />
      <Mentors />
      <MentorAndAdvisors />
    </>
  )
}

export default page

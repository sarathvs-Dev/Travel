import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { HOW_IT_WORKS_STEPS } from '@/constants'

export const metadata = {
  title: 'How Travel Buddy Works | Travel Buddy',
  description: 'See how Travel Buddy takes you from download to trail in four simple steps.',
}

const HowItWorksPage = () => {
  return (
    <section className="max-container padding-container py-10 pb-32 lg:py-20">
      <div className="flex flex-col items-start">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <h1 className="bold-40 lg:bold-64 max-w-[600px]">
          How Travel Buddy Works
        </h1>
        <p className="regular-16 mt-6 text-gray-30 max-w-[600px]">
          From download to destination, Travel Buddy guides every step of your adventure &mdash; even when you&apos;re off the grid.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {HOW_IT_WORKS_STEPS.map((item) => (
          <div key={item.step} className="flex flex-col gap-3 rounded-3xl border border-gray-10 p-7">
            <span className="bold-40 text-green-50">{item.step}</span>
            <h2 className="bold-20">{item.title}</h2>
            <p className="regular-16 text-gray-30">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-5 sm:flex-row">
        <Link href="/">
          <Button type="button" title="Download App" variant="btn_green" />
        </Link>
        <Link href="/pricing">
          <Button type="button" title="See Pricing" variant="btn_outline_dark" />
        </Link>
      </div>
    </section>
  )
}

export default HowItWorksPage

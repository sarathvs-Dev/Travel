import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { PRICING_PLANS } from '@/constants'

export const metadata = {
  title: 'Pricing | Hilink',
  description: 'Simple plans for every kind of adventurer.',
}

const PricingPage = () => {
  return (
    <section className="max-container padding-container py-10 pb-32 lg:py-20">
      <div className="flex flex-col items-start">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Simple pricing
        </p>
        <h1 className="bold-40 lg:bold-64 max-w-[600px]">
          Plans for Every Adventurer
        </h1>
        <p className="regular-16 mt-6 text-gray-30 max-w-[600px]">
          Start for free, upgrade whenever your next expedition needs more.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col gap-6 rounded-3xl border p-8 ${
              plan.name === 'Adventurer'
                ? 'border-green-50 bg-green-90 text-white'
                : 'border-gray-10'
            }`}
          >
            <div>
              <h2 className="bold-20">{plan.name}</h2>
              <p className={`regular-16 mt-2 ${plan.name === 'Adventurer' ? 'text-gray-10' : 'text-gray-30'}`}>
                {plan.description}
              </p>
            </div>

            <div className="flex items-end gap-1">
              <span className="bold-40">{plan.price}</span>
              {plan.period && <span className="regular-16">{plan.period}</span>}
            </div>

            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="regular-16 flex items-center gap-3">
                  <span className={`h-1.5 w-1.5 rounded-full ${plan.name === 'Adventurer' ? 'bg-white' : 'bg-green-50'}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/contact-us" className="mt-auto">
              <Button type="button" title="Choose Plan" variant={plan.variant} full />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PricingPage

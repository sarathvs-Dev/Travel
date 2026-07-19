import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { SERVICES } from '@/constants'

export const metadata = {
  title: 'Services | Travel Buddy',
  description: 'Everything Travel Buddy offers to get you safely into the wild and back.',
}

const ServicesPage = () => {
  return (
    <section className="max-container padding-container py-10 pb-32 lg:py-20">
      <div className="flex flex-col items-start">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          What we offer
        </p>
        <h1 className="bold-40 lg:bold-64 max-w-[600px]">
          Our Services
        </h1>
        <p className="regular-16 mt-6 text-gray-30 max-w-[600px]">
          Whatever your adventure needs, Travel Buddy has a service built to support it.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.title} className="flex flex-col items-start gap-4 rounded-3xl bg-feature-bg bg-cover p-7">
            <div className="rounded-full bg-green-50 p-4">
              <Image src={service.icon} alt={service.title} width={28} height={28} />
            </div>
            <h2 className="bold-20 lg:bold-32">{service.title}</h2>
            <p className="regular-16 text-gray-30">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Link href="/contact-us">
          <Button type="button" title="Get in Touch" variant="btn_green" />
        </Link>
      </div>
    </section>
  )
}

export default ServicesPage

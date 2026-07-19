import Image from 'next/image'
import Button from '@/components/Button'
import { FOOTER_CONTACT_INFO, SOCIALS } from '@/constants'

export const metadata = {
  title: 'Contact Us | Travel Buddy',
  description: 'Get in touch with the Travel Buddy team.',
}

const ContactUsPage = () => {
  return (
    <section className="max-container padding-container py-10 pb-32 lg:py-20">
      <div className="flex flex-col items-start">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Get in touch
        </p>
        <h1 className="bold-40 lg:bold-64 max-w-[600px]">
          Contact Us
        </h1>
        <p className="regular-16 mt-6 text-gray-30 max-w-[600px]">
          Questions about your next trip? Our team is ready to help you plan it.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:justify-between">
        <form className="flex w-full max-w-[520px] flex-col gap-5">
          <input
            type="text"
            placeholder="Your name"
            className="regular-16 w-full rounded-full border border-gray-10 px-6 py-3 outline-none"
          />
          <input
            type="email"
            placeholder="Your email"
            className="regular-16 w-full rounded-full border border-gray-10 px-6 py-3 outline-none"
          />
          <textarea
            placeholder="Your message"
            rows={5}
            className="regular-16 w-full rounded-3xl border border-gray-10 px-6 py-3 outline-none"
          />
          <Button type="submit" title="Send Message" variant="btn_green" full />
        </form>

        <div className="flex flex-col gap-8">
          <div>
            <h4 className="bold-18 whitespace-nowrap">{FOOTER_CONTACT_INFO.title}</h4>
            <div className="mt-4 flex flex-col gap-3">
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <div key={link.label} className="flex gap-4">
                  <p className="regular-16 whitespace-nowrap text-gray-30">{link.label}:</p>
                  <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="bold-18 whitespace-nowrap">{SOCIALS.title}</h4>
            <ul className="regular-14 mt-4 flex gap-4 text-gray-30">
              {SOCIALS.links.map((link) => (
                <li key={link}>
                  <Image src={link} alt="social" width={24} height={24} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsPage

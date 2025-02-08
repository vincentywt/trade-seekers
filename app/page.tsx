import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Expertise you can trust,<br />
          results that last
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Find the best tradespeople for your home improvement projects. From HVAC technicians to electricians and plumbers, we connect you with verified professionals in your area.
        </p>
        <div className="space-x-4">
          <Link 
            href="/services" 
            className="bg-[#A2906C] hover:bg-[#E5CA9A] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Find a Pro
          </Link>
          <Link 
            href="/about" 
            className="border border-[#A2906C] text-[#A2906C] hover:bg-[#A2906C]/10 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1A2A42] p-6 rounded-lg">
              <div className="text-[#A2906C] text-2xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <Link 
                href={service.link}
                className="text-[#A2906C] hover:text-[#E5CA9A] font-semibold"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1A2A42] rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Get started today and find the perfect tradesperson for your needs. Our platform makes it easy to compare, connect, and hire trusted professionals.
        </p>
        <Link 
          href="/services" 
          className="bg-[#A2906C] hover:bg-[#E5CA9A] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Get Started
        </Link>
      </section>
    </div>
  )
}

const services = [
  {
    icon: '🔧',
    title: 'HVAC Technicians',
    description: 'Expert heating and cooling solutions for your home.',
    link: '/services/hvac'
  },
  {
    icon: '🚿',
    title: 'Plumbers',
    description: 'Reliable plumbing services for all your needs.',
    link: '/services/plumbing'
  },
  {
    icon: '💡',
    title: 'Electricians',
    description: 'Safe and efficient electrical work by certified pros.',
    link: '/services/electrical'
  }
]

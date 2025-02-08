import Link from 'next/link'

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  
  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Service Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg text-gray-300">{service.description}</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Details */}
        <div className="lg:col-span-2">
          <div className="bg-[#1A2A42] p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-[#A2906C] mr-3">•</div>
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-[#1A2A42] p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Starting Price</span>
                <span className="text-[#A2906C] font-semibold">${service.startingPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Average Cost</span>
                <span className="text-[#A2906C] font-semibold">${service.averageCost}</span>
              </div>
            </div>
          </div>

          {/* Ideal For Section */}
          <div className="bg-[#1A2A42] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Ideal For</h2>
            <p className="text-gray-300">{service.idealFor}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Call to Action */}
          <div className="bg-[#1A2A42] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Ready to Hire?</h2>
            <p className="text-gray-300 mb-6">
              Get started today and connect with qualified professionals in your area.
            </p>
            <Link
              href="/contact"
              className="bg-[#A2906C] hover:bg-[#E5CA9A] text-white font-semibold py-3 px-6 rounded-lg w-full block text-center transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Related Services */}
          <div className="bg-[#1A2A42] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Related Services</h2>
            <div className="space-y-3">
              {relatedServices.map((related, index) => (
                <Link
                  key={index}
                  href={`/services/${related.slug}`}
                  className="text-[#A2906C] hover:text-[#E5CA9A] block"
                >
                  {related.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    slug: 'hvac',
    title: 'HVAC Installation & Repair',
    description: 'Professional heating and cooling system services.',
    features: [
      'Installation of new HVAC systems',
      'Regular maintenance and tune-ups',
      'Emergency repair services',
      'Energy efficiency assessments',
      'Duct cleaning and sealing'
    ],
    startingPrice: 150,
    averageCost: 300,
    idealFor: 'Homeowners looking to improve their heating and cooling systems or businesses needing climate control solutions.'
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Services',
    description: 'Comprehensive plumbing solutions for homes and businesses.',
    features: [
      'Pipe installation and repair',
      'Drain cleaning and unclogging',
      'Water heater installation',
      'Leak detection and repair',
      'Bathroom and kitchen plumbing'
    ],
    startingPrice: 100,
    averageCost: 250,
    idealFor: 'Property owners dealing with plumbing issues or planning renovations.'
  },
  {
    slug: 'electrical',
    title: 'Electrical Work',
    description: 'Certified electrical installations and repairs.',
    features: [
      'Wiring installation and repair',
      'Circuit breaker services',
      'Lighting installation',
      'Electrical safety inspections',
      'Generator installation'
    ],
    startingPrice: 120,
    averageCost: 280,
    idealFor: 'Homeowners and businesses needing electrical upgrades or repairs.'
  }
]

const relatedServices = [
  {
    slug: 'carpentry',
    title: 'Carpentry Services'
  },
  {
    slug: 'painting',
    title: 'Painting Services'
  },
  {
    slug: 'landscaping',
    title: 'Landscaping Services'
  }
]

import Link from 'next/link'
import { Search, Fan, Droplet, Zap, Hammer, Paintbrush, TreePine } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find & Compare Trades</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover and evaluate qualified tradespeople in your area. Compare ratings, reviews, and get multiple quotes for your project.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a service..."
            className="w-full bg-[#1A2A42] rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#A2906C]"
          />
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            href={`/services/${service.slug}`}
            className="bg-[#1A2A42] rounded-lg p-6 hover:scale-[1.02] transition-transform"
          >
            <div className="space-y-4">
              {/* Service Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#142137] flex items-center justify-center">
                <service.icon className="text-[#A2906C]" size={24} />
              </div>

              {/* Service Details */}
              <div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Starting at</span>
                  <span className="text-[#A2906C] font-semibold">${service.startingPrice}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const services = [
  {
    slug: 'hvac',
    title: 'HVAC Services',
    description: 'Heating, ventilation, and air conditioning solutions.',
    startingPrice: 150,
    icon: Fan
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Services',
    description: 'Comprehensive plumbing solutions for homes and businesses.',
    startingPrice: 100,
    icon: Droplet
  },
  {
    slug: 'electrical',
    title: 'Electrical Services',
    description: 'Certified electrical installations and repairs.',
    startingPrice: 120,
    icon: Zap
  },
  {
    slug: 'carpentry',
    title: 'Carpentry Services',
    description: 'Custom woodworking and furniture solutions.',
    startingPrice: 200,
    icon: Hammer
  },
  {
    slug: 'painting',
    title: 'Painting Services',
    description: 'Interior and exterior painting professionals.',
    startingPrice: 80,
    icon: Paintbrush
  },
  {
    slug: 'landscaping',
    title: 'Landscaping Services',
    description: 'Garden design and maintenance experts.',
    startingPrice: 150,
    icon: TreePine
  }
]

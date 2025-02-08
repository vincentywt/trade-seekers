import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#142137]/90 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            TradeSeekers
          </Link>

          <div className="flex space-x-8">
            <Link href="/services" className="hover:text-[#A2906C] transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-[#A2906C] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#A2906C] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded-md bg-[#A2906C] hover:bg-[#E5CA9A] transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-md bg-[#E5CA9A] hover:bg-[#A2906C] transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

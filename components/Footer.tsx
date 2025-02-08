export default function Footer() {
  return (
    <footer className="bg-[#142137] mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TradeSeekers</h3>
            <p className="text-gray-300">
              Connecting you with trusted tradespeople for all your home improvement needs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-gray-300 hover:text-[#A2906C]">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-[#A2906C]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-[#A2906C]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-[#A2906C]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-[#A2906C]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@tradeseekers.com</li>
              <li className="text-gray-300">Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          © {new Date().getFullYear()} TradeSeekers. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

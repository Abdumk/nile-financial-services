import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaComments, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import ThemeToggle from '../components/ThemeToggle'
import LiveChat from '../components/LiveChat'
import BookingModal from '../components/BookingModal'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-primary dark:bg-gray-900 text-white py-2 px-4 transition-colors">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+1 571-306-9039" className="flex items-center gap-2 hover:text-gold transition">
              <FaPhone className="text-xs" />
              <span>+1 571-306-9039</span>
            </a>
            <a href="mailto:admin@nilefinancialservices.com" className="hidden sm:flex items-center gap-2 hover:text-gold transition">
              <FaEnvelope className="text-xs" />
              <span>admin@nilefinancialservices.com</span>
            </a>
          </div>
          <div className="hidden md:block text-gold font-semibold">
            Authorized IRS E-File Provider
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-primary dark:text-blue-400">
                Addis <span className="text-gold">Financial Services</span>
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition ${
                    isActive(link.path)
                      ? 'text-gold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggle />
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-gold text-white px-6 py-2 rounded-lg hover:bg-gold-dark transition font-semibold"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-primary dark:text-gold text-2xl"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-slide-up bg-white dark:bg-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 ${
                    isActive(link.path)
                      ? 'text-gold font-semibold'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsBookingOpen(true)
                  setIsMenuOpen(false)
                }}
                className="block mt-2 mx-4 w-[calc(100%-2rem)] bg-gold text-white px-6 py-2 rounded-lg text-center font-semibold"
              >
                Book Appointment
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Addis <span className="text-gold">Financial Services</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner for tax preparation, financial solutions, and insurance services.
              </p>
              <div className="flex gap-4">
                <span className="bg-gold text-white px-3 py-1 rounded text-sm">IRS Authorized</span>
                <span className="bg-primary text-white px-3 py-1 rounded text-sm">Licensed</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gold">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-gold transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-gold transition">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info & Location */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gold">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-3">
                  <FaPhone className="mt-1 text-gold flex-shrink-0" />
                  <a href="tel:+1 571-306-9039" className="hover:text-gold transition">
                    ++1 571-306-9039
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-gold flex-shrink-0" />
                  <a href="mailto:admin@nilefinancialservices.com" className="hover:text-gold transition break-all">
                    admin@nilefinancialservices.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Service Areas:</p>
                    <p className="text-sm">Dumfries, VA</p>
                    <p className="text-sm">Alexandria, VA · Fairfax, VA</p>
                    <p className="text-sm">Washington, DC · Maryland</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="mt-1 text-gold flex-shrink-0" />
                  <div>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gold">Follow Us</h4>
              <p className="text-gray-400 text-sm mb-4">
                Stay connected with us through our social media channels for the latest updates & insights.
              </p>
              <div className="flex gap-3 mb-4">
                <a
                  href="https://twitter.com/Nilefinancials1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-400 text-white p-3 rounded-full transition transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="https://facebook.com/NILETAXSERVICES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-full transition transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://instagram.com/nilefinancialservices_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-pink-600 text-white p-3 rounded-full transition transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/king-demissie-5a882191/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-700 text-white p-3 rounded-full transition transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://wa.me/+15713069039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-green-500 text-white p-3 rounded-full transition transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Addis Financial Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Live Chat Component */}
      <LiveChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Chatbot Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-gold text-white p-4 rounded-full shadow-lg hover:bg-gold-dark transition transform hover:scale-110 z-40"
        aria-label="Open chat"
      >
        <FaComments className="w-6 h-6" />
      </button>
    </div>
  )
}

export default Layout

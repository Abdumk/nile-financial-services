import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFileInvoiceDollar, FaShieldAlt, FaBolt, FaChartLine, FaCheckCircle, FaAward, FaUsers, FaLock } from 'react-icons/fa'
import BookingModal from '../components/BookingModal'
import irsCertificate from '../assets/irs-certificate.png'

const Home = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const services = [
    {
      icon: <FaFileInvoiceDollar className="text-5xl text-gold" />,
      title: 'Individual & Business Tax Preparation',
      features: [
        'Authorized IRS e-file provider',
        'Accurate, timely filing',
        'Maximize deductions, minimize liabilities'
      ]
    },
    {
      icon: <FaShieldAlt className="text-5xl text-gold" />,
      title: 'Health & Life Insurance Services',
      features: [
        'Licensed Health & Life Insurance producers',
        'ACA (ObamaCare) enrollment',
        'Personalized support with choosing the right plans'
      ]
    },
    {
      icon: <FaBolt className="text-5xl text-gold" />,
      title: 'E-file & Fast Refunds',
      features: [
        'Secure electronic filing',
        'Faster refund processing',
        'Track your refund status'
      ]
    },
    {
      icon: <FaChartLine className="text-5xl text-gold" />,
      title: 'Tax Planning & Consultation',
      features: [
        'Optimize future tax obligations',
        'Strategic financial guidance',
        'Year-round support'
      ]
    }
  ]

  const whyChooseUs = [
    { icon: <FaAward />, text: 'Over 10 years of experience' },
    { icon: <FaShieldAlt />, text: 'Licensed in Health & Life Insurance' },
    { icon: <FaUsers />, text: 'Friendly, professional service' },
    { icon: <FaCheckCircle />, text: 'Maximum deductions & credits' },
    { icon: <FaLock />, text: 'Safe, secure, confidential' },
    { icon: <FaFileInvoiceDollar />, text: 'Authorized IRS e-file provider' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-blue-900 text-white py-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner for<br />
            <span className="text-gold">Tax Preparation & Financial Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Professional tax services and insurance guidance you can trust
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:+1 571-306-9039" className="flex items-center gap-2 text-xl">
              <FaFileInvoiceDollar className="text-gold" />
              <span className="font-semibold">Call Now: +1 571-306-9039</span>
            </a>
            <span className="hidden sm:block text-gold">|</span>
            <a href="mailto:admin@nilefinancialservices.com" className="text-lg hover:text-gold transition">
              admin@nilefinancialservices.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-dark transition transform hover:scale-105"
            >
              Book Appointment
            </button>
            <Link
              to="/about"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Tax Season Banner */}
      <section className="bg-gold text-white py-6 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <FaFileInvoiceDollar className="text-5xl" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Tax Season 2025 is Here!
              </h2>
              <p className="text-lg">
                Get your taxes done by experts you can trust! IRS Authorized E-File Provider
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive financial solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <FaCheckCircle className="text-gold mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary dark:text-blue-400 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Experience the difference with Addis Financial Services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gold hover:text-white transition group"
              >
                <div className="text-3xl text-gold group-hover:text-white transition">
                  {item.icon}
                </div>
                <p className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-white transition">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* IRS Certificate Badge */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-lg shadow-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Authorized IRS E-File Provider</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <img 
                  src={irsCertificate} 
                  alt="IRS E-File Certificate" 
                  className="w-48 h-auto object-contain rounded-lg shadow-2xl cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => window.open(irsCertificate, '_blank')}
                />
                <div className="text-left text-white">
                  <p className="text-lg mb-4">
                    We are officially authorized by the IRS to electronically file tax returns.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-gold" />
                      <span>Secure electronic filing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-gold" />
                      <span>Faster refund processing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle className="text-gold" />
                      <span>IRS compliance guaranteed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us Today</h2>
          <p className="text-xl mb-8">Ready to get started? We're here to help!</p>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gold">Location</h3>
              <p>Available Upon Request</p>
              <p className="text-sm mt-2 text-blue-200">We serve clients nationwide</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gold">Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-sm mt-2 text-blue-200">Sunday: Closed</p>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1 571-306-9039"
              className="bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-dark transition"
            >
              Call: +1 571-306-9039
            </a>
            <a
              href="mailto:admin@nilefinancialservices.com"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  )
}

export default Home

import { FaLifeRing, FaHeartbeat, FaFileInvoiceDollar, FaBook, FaBolt, FaDollarSign, FaStar, FaQuoteLeft, FaCertificate } from 'react-icons/fa'
import ownerPhoto from '../assets/owner-photo.jpg'
import testimonial1Photo from '../assets/testimonial-1.jpg'
import testimonial2Photo from '../assets/testimonial-2.jpg'
import irsCertificate from '../assets/irs-certificate.png'

const About = () => {
  const services = [
    {
      icon: <FaLifeRing className="text-5xl text-gold mb-4" />,
      title: 'Life Insurance Policies',
      description: 'We secure your family\'s future with personalized life insurance guidance.'
    },
    {
      icon: <FaHeartbeat className="text-5xl text-gold mb-4" />,
      title: 'Individual & Family Health Insurance Plans',
      description: 'Licensed professionals helping clients through ACA (ObamaCare) enrollment and choosing the right coverage.'
    },
    {
      icon: <FaFileInvoiceDollar className="text-5xl text-gold mb-4" />,
      title: 'Individual & Business Tax Preparation',
      description: 'Accurate, compliant tax filing for individuals and companies.'
    },
    {
      icon: <FaBook className="text-5xl text-gold mb-4" />,
      title: 'Bookkeeping / Accounting',
      description: 'Organized and up-to-date financial record management.'
    },
    {
      icon: <FaBolt className="text-5xl text-gold mb-4" />,
      title: 'E-file & Fast Refunds',
      description: 'Fast, secure electronic filing for quick refunds.'
    },
    {
      icon: <FaDollarSign className="text-5xl text-gold mb-4" />,
      title: 'Affordable Rates & Personalized Service',
      description: 'Budget-friendly financial solutions designed specifically for clients\' needs.'
    }
  ]

  const testimonials = [
    {
      name: 'Milkyas Taddes',
      role: 'Business Owner',
      photo: testimonial1Photo,
      text: 'As a business owner, I needed expert financial guidance. Addis Financial Services helped me save money and grow my business with confidence!',
      rating: 5
    },
    {
      name: 'Lindsey Pazou',
      role: 'Client',
      photo: testimonial2Photo,
      text: 'Professional, reliable, and trustworthy. The team at Addis Financial Services made tax season stress-free and helped me maximize my refund.',
      rating: 5
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Find Out More About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted partner for comprehensive financial solutions
          </p>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary dark:text-blue-400 mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">The face behind Addis Financial Services</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img 
                src={ownerPhoto} 
                alt="Company Owner" 
                className="w-64 h-64 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">King Demissie</h3>
              <p className="text-xl text-gold mb-4">Founder & CEO</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                With over 10 years of experience in tax preparation and financial services, King Demissie founded Addis Financial Services to provide personalized, professional financial guidance to individuals and businesses.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                As a licensed Health & Life Insurance producer and authorized IRS e-file provider, King is committed to helping clients maximize their financial potential while ensuring compliance and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary dark:text-blue-400 mb-6">Welcome to Addis Financial Services</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We provide comprehensive tax solutions and financial guidance tailored to your needs. 
              Our experienced team delivers high-quality services to help you achieve your goals.
            </p>
            <div className="bg-gold/10 dark:bg-gold/20 border-l-4 border-gold p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-3">Our Purpose</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our mission is to offer reliable tax, insurance, and financial services that support 
                individuals, families, and businesses in achieving financial security and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IRS Certification */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary dark:text-blue-400 mb-4">
              <FaCertificate className="inline mr-3 text-gold" />
              Certifications & Credentials
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Authorized and Licensed to Serve You</p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-xl">
            <div className="flex flex-col items-center">
              <img 
                src={irsCertificate} 
                alt="IRS E-File Certificate" 
                className="max-w-full h-auto max-h-[600px] object-contain rounded-lg shadow-2xl mb-6 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => window.open(irsCertificate, '_blank')}
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-2">Authorized IRS E-File Provider</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We are officially authorized by the IRS to electronically file tax returns, ensuring secure, fast, and accurate processing.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="bg-gold text-white px-4 py-2 rounded-full font-semibold">IRS Authorized</span>
                  <span className="bg-primary text-white px-4 py-2 rounded-full font-semibold">Licensed Insurance Producer</span>
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary dark:text-blue-400 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Comprehensive services designed for your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Addis Financial Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaStar className="text-gold" />
                Experience & Expertise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Over 10 years of professional experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Licensed Health & Life Insurance Producers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Authorized IRS e-file provider</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">✓</span>
                  <span>Certified tax professionals</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gold to-gold-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <FaStar />
                Client-Focused Service
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Personalized financial solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Friendly, professional support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Safe, secure, and confidential</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Affordable rates for all clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <FaQuoteLeft className="text-4xl text-gold mb-4" />
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gold shadow-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-primary dark:text-blue-400 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-gold text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your financial goals
          </p>
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
    </div>
  )
}

export default About

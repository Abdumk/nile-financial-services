import { FaLifeRing, FaHeartbeat, FaFileInvoiceDollar, FaBook, FaBolt, FaDollarSign, FaStar, FaQuoteLeft } from 'react-icons/fa'

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
      name: 'Jane Smith',
      role: 'Business Owner',
      text: 'As a business owner, I needed expert financial guidance. Nile Financial Services helped me save money and grow my business with confidence!',
      rating: 5
    },
    {
      name: 'Lindsey Pazou',
      role: 'Client',
      text: 'Professional, reliable, and trustworthy. The team at Nile Financial Services made tax season stress-free and helped me maximize my refund.',
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

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Welcome to Addis Financial Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We provide comprehensive tax solutions and financial guidance tailored to your needs. 
              Our experienced team delivers high-quality services to help you achieve your goals.
            </p>
            <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-primary mb-3">Our Purpose</h3>
              <p className="text-lg text-gray-700">
                Our mission is to offer reliable tax, insurance, and financial services that support 
                individuals, families, and businesses in achieving financial security and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive services designed for your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <FaQuoteLeft className="text-4xl text-gold mb-4" />
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-primary text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-gold" />
                    ))}
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
              href="tel:571-306-9039"
              className="bg-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold-dark transition"
            >
              Call: 571-306-9039
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

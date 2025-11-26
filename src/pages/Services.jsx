import { FaShieldAlt, FaHeartbeat, FaLifeRing, FaBalanceScale, FaChartLine, FaBook, FaBolt, FaFileInvoiceDollar, FaBriefcase } from 'react-icons/fa'

const Services = () => {
  const insuranceServices = [
    {
      icon: <FaShieldAlt className="text-5xl text-gold mb-4" />,
      title: 'Health & Life Insurance Services',
      description: 'Nile Financial Services now offers licensed Health and Life Insurance Producer support. We guide individuals and families through:',
      features: [
        'ACA (ObamaCare) enrollment',
        'Plan comparisons',
        'Savings eligibility',
        'Special and open enrollment periods'
      ]
    },
    {
      icon: <FaHeartbeat className="text-5xl text-gold mb-4" />,
      title: 'Individual & Family Health Insurance Plans',
      description: 'Comprehensive guidance to choose suitable coverage with financial protection.',
      features: [
        'Personalized plan selection',
        'Coverage analysis',
        'Premium optimization',
        'Family protection plans'
      ]
    },
    {
      icon: <FaLifeRing className="text-5xl text-gold mb-4" />,
      title: 'Life Insurance Policies',
      description: 'Reliable life insurance options for long-term family security.',
      features: [
        'Term life insurance',
        'Whole life insurance',
        'Family security planning',
        'Beneficiary guidance'
      ]
    },
    {
      icon: <FaBalanceScale className="text-5xl text-gold mb-4" />,
      title: 'Marketplace Plan Comparisons',
      description: 'We help compare marketplace plans side-by-side.',
      features: [
        'Cost comparison',
        'Coverage analysis',
        'Provider network review',
        'Subsidy calculation'
      ]
    }
  ]

  const financialServices = [
    {
      icon: <FaChartLine className="text-5xl text-primary mb-4" />,
      title: 'Tax Planning & Consultation',
      description: 'Reduce tax liabilities, maximize outcomes with expert strategic planning.',
      features: [
        'Year-round tax strategy',
        'Deduction optimization',
        'Future planning',
        'Compliance guidance'
      ]
    },
    {
      icon: <FaBook className="text-5xl text-primary mb-4" />,
      title: 'Bookkeeping / Accounting',
      description: 'Accurate management of income, expenses, and business records.',
      features: [
        'Monthly reconciliation',
        'Financial statements',
        'Expense tracking',
        'Payroll management'
      ]
    },
    {
      icon: <FaBolt className="text-5xl text-primary mb-4" />,
      title: 'E-file & Fast Refunds',
      description: 'Reliable and fast e-filing for quick tax refunds.',
      features: [
        'IRS authorized e-filing',
        'Secure transmission',
        'Refund tracking',
        'Direct deposit setup'
      ]
    },
    {
      icon: <FaFileInvoiceDollar className="text-5xl text-primary mb-4" />,
      title: 'Individual & Business Tax Preparation',
      description: 'Accurate, compliant, professional tax filing services.',
      features: [
        'Personal tax returns',
        'Business tax returns',
        'Multi-state filing',
        'Audit support'
      ]
    },
    {
      icon: <FaBriefcase className="text-5xl text-primary mb-4" />,
      title: 'Business Consulting',
      description: 'Improve business operations, finances, and growth strategies.',
      features: [
        'Financial analysis',
        'Growth planning',
        'Operational efficiency',
        'Strategic guidance'
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">Check Our Services</p>
        </div>
      </section>

      {/* Insurance Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Health & Life Insurance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed Health and Life Insurance Producer support for individuals and families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {insuranceServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gold to-gold-dark text-white p-8 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Your coverage. Your savings. Your peace of mind.</h3>
            <p className="text-xl mb-6">
              At Addis Financial Services, we make insurance simple, accessible, and personalized.
            </p>
            <a
              href="tel:+1 571-306-9039"
              className="inline-block bg-white text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Financial & Tax Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Financial & Tax Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tax and financial solutions for individuals and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-center text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation
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

export default Services

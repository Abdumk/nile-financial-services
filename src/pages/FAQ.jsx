import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaComments } from 'react-icons/fa'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of services including Individual & Business Tax Preparation, Health & Life Insurance services (licensed producers), E-file & Fast Refunds, Tax Planning & Consultation, Bookkeeping/Accounting, and Business Consulting. We are authorized IRS e-file providers and licensed Health & Life Insurance producers.'
    },
    {
      question: 'How can I contact you?',
      answer: 'You can reach us by phone at +1 571-306-9039 or via email at admin@nilefinancialservices.com. Our office hours are Monday-Friday: 9:00 AM - 6:00 PM and Saturday: 10:00 AM - 4:00 PM. You can also use our chatbot for immediate assistance.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We process tax refunds through secure IRS e-filing, which typically results in faster refund processing compared to paper filing. Refund timing depends on IRS processing schedules and your chosen refund method (direct deposit is fastest). We provide refund tracking support to keep you informed throughout the process.'
    },
    {
      question: 'Do you offer online consultations?',
      answer: 'Yes, we offer both in-person and online consultations to accommodate your schedule and preferences. Contact us to schedule a consultation that works best for you, whether virtual or in-person.'
    },
    {
      question: 'How do I schedule an appointment?',
      answer: 'Scheduling an appointment is easy! You can call us at +1 571-306-9039, email us at admin@nilefinancialservices.com, or use the contact form on our website. We\'ll work with you to find a convenient time for your consultation.'
    },
    {
      question: 'What are your office hours?',
      answer: 'Our office hours are: Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 4:00 PM, and we are closed on Sundays. During tax season, we may offer extended hours to better serve our clients.'
    },
    {
      question: 'Are you authorized by the IRS?',
      answer: 'Yes, we are an authorized IRS e-file provider. This means we meet IRS standards for electronic filing and can securely submit your tax returns directly to the IRS, ensuring faster processing and refunds.'
    },
    {
      question: 'What insurance services do you provide?',
      answer: 'We are licensed Health & Life Insurance producers. We assist with ACA (ObamaCare) enrollment, individual and family health insurance plans, life insurance policies, marketplace plan comparisons, and help determine savings eligibility. We provide personalized support to help you choose the right coverage for your needs.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing varies depending on the complexity of your needs and the specific services required. We offer affordable rates and personalized service packages. Contact us for a free consultation and customized quote based on your situation.'
    },
    {
      question: 'Do you handle business taxes?',
      answer: 'Yes, we provide comprehensive business tax preparation services for various business structures including sole proprietorships, partnerships, LLCs, S-corporations, and C-corporations. We also offer bookkeeping, accounting, and business consulting services.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <FaQuestionCircle className="text-6xl text-gold mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">Find answers to common questions about our services</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                  <span className="text-gold text-xl flex-shrink-0">
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5 animate-slide-up">
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-gradient-to-r from-gold to-gold-dark text-white p-8 rounded-lg text-center shadow-xl">
            <FaComments className="text-5xl mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Fast and Efficient Service</h2>
            <p className="text-lg mb-6">
              Have questions? Our chatbot is available for immediate help. 
              Just click the chat button in the bottom-right corner!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1 571-306-9039"
                className="bg-white text-gold px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Call Us Now
              </a>
              <a
                href="mailto:admin@nilefinancialservices.com"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We're here to help! Our team is ready to answer any questions you may have about our services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-gold mb-3">📞</div>
              <h3 className="font-bold text-primary mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Speak directly with our team</p>
              <a href="tel:+1 571-306-9039" className="text-gold font-semibold hover:underline">
                +1 571-306-9039
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-gold mb-3">✉️</div>
              <h3 className="font-bold text-primary mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Send us your questions</p>
              <a href="mailto:admin@nilefinancialservices.com" className="text-gold font-semibold hover:underline break-all text-sm">
                admin@nilefinancialservices.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-gold mb-3">💬</div>
              <h3 className="font-bold text-primary mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-3">Get instant answers</p>
              <button className="text-gold font-semibold hover:underline">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 mb-2">
            <strong>Need Help?</strong>
          </p>
          <p className="text-lg text-blue-200">
            Get in touch with us for more information or assistance with our services.
          </p>
          <p className="text-sm text-blue-300 mt-4 italic">
            "Need instant support? Use the chat button in the bottom-right corner for quick responses."
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition animate-slide-up">
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-3xl text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Address</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      4128 Ashmere Cir, Montclair, VA 22025, United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-3xl text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Service Area</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Dumfries, VA · Alexandria, VA · Fairfax, VA · Washington, DC · Maryland
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <FaPhone className="text-3xl text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Call Us</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Phone:</strong>{' '}
                      <a href="tel:+15713069039" className="text-gold hover:underline">
                        +1 +1 571-306-9039
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-3xl text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary dark:text-blue-400 mb-2">Email Us</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:admin@nilefinancialservices.com" className="text-gold hover:underline break-all">
                        admin@nilefinancialservices.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24857.07233841807!2d-77.32243756748917!3d38.852288612330796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e96394b91cd%3A0x72326e785448640!2sFairfax%2C%20VA%2C%20USA!5e0!3m2!1sen!2set!4v1738005199393!5m2!1sen!2set"
                  className="w-full h-full min-h-[400px] rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Addis Financial Services Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-primary dark:text-blue-400 mb-8">Office Hours</h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="flex justify-between items-center">
                <span className="font-semibold">Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-semibold">Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-semibold">Sunday:</span>
                <span>Closed</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

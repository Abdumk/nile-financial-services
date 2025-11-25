import { useState } from 'react'
import { FaTimes, FaCalendar, FaClock, FaUser, FaEnvelope, FaPhone, FaFileAlt } from 'react-icons/fa'

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const services = [
    'Individual Tax Preparation',
    'Business Tax Preparation',
    'Health Insurance Consultation',
    'Life Insurance Consultation',
    'Tax Planning & Consultation',
    'Bookkeeping Services',
    'Other'
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      // Send email automatically using Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // access_key: '4a38957e-31c2-48c8-8d6e-929e3d1f7fa7', // Get free key from web3forms.com 
                    access_key: 'c8f6ca4f-14e3-4464-891e-70560fecf51a',
          subject: `🎉 New Appointment Booking - ${formData.service}`,
          from_name: formData.name,
          from_email: formData.email,
          // to_email: 'admin@nilefinancialservices.com',    
          to_email: 'abdumk148@gmail.com', 
          message: `
New Appointment Booking Received!

Customer Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Appointment Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Additional Notes:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message || 'None'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Please contact the customer to confirm this appointment.

Addis Financial Services
Phone: 571-306-9039
          `
        })
      })

      if (response.ok) {
        console.log('✅ Booking sent successfully!')
        setSending(false)
        setSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false)
          onClose()
          setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            service: '',
            message: ''
          })
        }, 3000)
      } else {
        throw new Error('Failed to send booking')
      }
    } catch (error) {
      console.error('❌ Error submitting booking:', error)
      setSending(false)
      alert('There was an error submitting your booking. Please call us at 571-306-9039 or email admin@nilefinancialservices.com')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6 rounded-t-lg flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">Book an Appointment</h2>
            <p className="text-blue-100">Schedule your consultation today</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gold transition text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We'll contact you shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  <FaUser className="inline mr-2 text-gold" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    <FaEnvelope className="inline mr-2 text-gold" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    <FaPhone className="inline mr-2 text-gold" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  <FaFileAlt className="inline mr-2 text-gold" />
                  Service Needed *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    <FaCalendar className="inline mr-2 text-gold" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    <FaClock className="inline mr-2 text-gold" />
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                  placeholder="Any specific questions or concerns?"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-1 bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Confirm Booking'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  disabled={sending}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition dark:text-white disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingModal

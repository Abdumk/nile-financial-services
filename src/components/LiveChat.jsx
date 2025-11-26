import { useState, useRef, useEffect } from 'react'
import { FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa'

const LiveChat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! Welcome to Addis Financial Services. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    'Book an appointment',
    'Tax services',
    'Insurance services',
    'Office hours',
    'Contact information'
  ]

  const botResponses = {
    'book an appointment': 'Great! You can book an appointment by calling us at +1 571-306-9039 or clicking the "Book Appointment" button on our website.',
    'tax services': 'We offer Individual & Business Tax Preparation, Tax Planning, E-filing, and Fast Refunds. We\'re an authorized IRS e-file provider!',
    'insurance services': 'We provide Health & Life Insurance services, including ACA (ObamaCare) enrollment, plan comparisons, and personalized guidance.',
    'office hours': 'Our office hours are:\nMonday-Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
    'contact information': 'You can reach us at:\n📞 Phone: +1 571-306-9039\n✉️ Email: admin@nilefinancialservices.com',
    'default': 'Thank you for your message! For immediate assistance, please call us at +1 571-306-9039 or email admin@nilefinancialservices.com'
  }

  const handleSendMessage = (text = inputMessage) => {
    if (!text.trim()) return

    const userMessage = {
      type: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, userMessage])
    setInputMessage('')

    // Simulate bot response
    setTimeout(() => {
      const lowerText = text.toLowerCase()
      let botResponse = botResponses.default

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerText.includes(key)) {
          botResponse = value
          break
        }
      }

      const botMessage = {
        type: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 flex flex-col animate-slide-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <FaRobot className="text-xl" />
          </div>
          <div>
            <h3 className="font-bold">Addis Assistant</h3>
            <p className="text-xs text-blue-100">Online now</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-gold transition text-xl"
        >
          <FaTimes />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.type === 'user' ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(reply)}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs whitespace-nowrap hover:bg-gold hover:text-white transition"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-b-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={() => handleSendMessage()}
            className="bg-gold text-white px-4 py-2 rounded-lg hover:bg-gold-dark transition"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LiveChat

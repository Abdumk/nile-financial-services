const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">Thank you for visiting the Addis Financial Services website</p>
          <p className="text-lg text-blue-200 mt-2">Learn more about our privacy practices</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">Introduction</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                At Addis Financial Services, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">Information We Collect</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may collect personal information such as your name, email address, phone number, and any other information you provide to us voluntarily. We also collect non-personal information such as your browser type, operating system, and browsing behavior.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">How We Use Your Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience. We may also use your information for marketing and promotional purposes.
              </p>
            </div>

            {/* Sharing Your Information */}
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">Sharing Your Information</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described in this Privacy Policy. We may share your information with trusted third parties who assist us in operating our website and conducting our business.
              </p>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">Security</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">Changes to This Privacy Policy</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">Contact Us</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> <a href="mailto:admin@nilefinancialservices.com" className="text-gold hover:underline">admin@nilefinancialservices.com</a><br />
                <strong>Phone:</strong> <a href="tel:+15713069039" className="text-gold hover:underline">+1 +1 571-306-9039</a>
              </p>
            </div>

            {/* Last Updated */}
            <div className="text-center text-gray-600 dark:text-gray-400 text-sm pt-8 border-t border-gray-200 dark:border-gray-700">
              <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy

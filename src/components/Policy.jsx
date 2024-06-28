import React from "react"
import Navbar from "../parts/Navbars"
import Footer from "../parts/Footer"
import { Link } from "react-router-dom"

function Policy() {
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Policies</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
              At our ecommerce company, we are committed to transparency and upholding the highest standards of ethics
              and integrity. Here you can find information about our key policies.
            </p>
          </div>
        </div>
      </header>
      <main className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <nav className="sticky  bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                      prefetch={false}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                      prefetch={false}
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                      prefetch={false}
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                      prefetch={false}
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:col-span-9 space-y-12">
              <section id="privacy-policy">
                <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                <p className="mb-4">
                  At our ecommerce company, we take the privacy of our customers and users very seriously. Our privacy
                  policy outlines how we collect, use, and protect your personal information.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We collect only the information necessary to provide our products and services and improve your
                    shopping experience.
                  </li>
                  <li>
                    We use industry-standard security measures to protect your data from unauthorized access or misuse.
                  </li>
                  <li>
                    We do not share your personal information with third parties without your consent, except as
                    required by law.
                  </li>
                  <li>You have the right to access, update, and delete your personal information at any time.</li>
                </ul>
              </section>
              <section id="terms-of-service">
                <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
                <p className="mb-4">
                  Our terms of service outline the rules and guidelines that govern the use of our ecommerce platform
                  and services. By using our platform, you agree to abide by these terms.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You must be at least 18 years old or have the consent of a parent or guardian to use our services.
                  </li>
                  <li>
                    You agree to use our services only for lawful purposes and in a way that does not infringe on the
                    rights of others.
                  </li>
                  <li>
                    We reserve the right to suspend or terminate your account if you violate our terms of service.
                  </li>
                  <li>
                    Our ecommerce company is not responsible for any damages or losses that may result from your use of
                    our services.
                  </li>
                </ul>
              </section>
              <section id="cookie-policy">
                <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
                <p className="mb-4">
                  Our cookie policy explains how we use cookies and similar technologies to enhance your shopping
                  experience on our ecommerce platform.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We use cookies to improve the functionality of our website, analyze user behavior, and personalize
                    content and product recommendations.
                  </li>
                  <li>
                    You can manage your cookie preferences by adjusting your browser settings, but this may affect the
                    functionality of our website.
                  </li>
                  <li>
                    By continuing to use our website, you consent to our use of cookies as described in this policy.
                  </li>
                </ul>
              </section>
              <section id="refund-policy">
                <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
                <p className="mb-4">
                  Our refund policy outlines the circumstances under which we will provide a refund for our ecommerce
                  products or services.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We offer a 30-day money-back guarantee on all of our products, no questions asked.</li>
                  <li>
                    If you are not satisfied with your purchase, you can request a refund by contacting our customer
                    support team.
                  </li>
                  <li>Refunds will be processed within 5-7 business days of receiving your request.</li>
                  <li>
                    Certain restrictions and exclusions may apply, so please review our full refund policy for more
                    details.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </div>
  )
}

export default Policy;
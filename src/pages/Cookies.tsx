
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently and provide information to the owners of the site.
              </p>
              
              <h2>How We Use Cookies</h2>
              <p>We use cookies for several reasons:</p>
              <ul>
                <li>Essential cookies: These are necessary for the website to function properly.</li>
                <li>Preference cookies: These remember your preferences and settings.</li>
                <li>Analytics cookies: These help us understand how visitors interact with our website.</li>
                <li>Marketing cookies: These track your online activity to help deliver relevant advertising.</li>
              </ul>
              
              <h2>Types of Cookies We Use</h2>
              <p>The cookies we use fall into the following categories:</p>
              
              <h3>Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for the operation of our website and enable you to navigate around the site and use its features.
              </p>
              
              <h3>Performance Cookies</h3>
              <p>
                These cookies collect information about how visitors use our website, for instance which pages visitors go to most often. They allow us to recognize and count the number of visitors and see how visitors move around our website when they are using it.
              </p>
              
              <h3>Functionality Cookies</h3>
              <p>
                These cookies allow our website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features.
              </p>
              
              <h3>Targeting Cookies</h3>
              <p>
                These cookies record your visit to our website, the pages you have visited, and the links you have followed. We may use this information to make our website and the advertising displayed on it more relevant to your interests.
              </p>
              
              <h2>Managing Cookies</h2>
              <p>
                Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The Help function within your browser should tell you how to do this.
              </p>
              
              <h2>Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at: info@promogenie.co
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cookies;

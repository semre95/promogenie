
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-gradient-to-b from-promogenie-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using PromoGenie's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              
              <h2>2. Description of Service</h2>
              <p>
                PromoGenie provides an AI-powered platform for creating marketing content featuring virtual influencers. Our services allow users to upload product images and generate AI-based promotional content.
              </p>
              
              <h2>3. User Accounts</h2>
              <p>
                You may need to create an account to use certain features of our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              
              <h2>4. User Content</h2>
              <p>
                You retain all rights to any content you upload to our platform. However, by uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display the content for the purpose of providing our services.
              </p>
              
              <h2>5. Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use our services for any illegal purpose</li>
                <li>Upload content that infringes on intellectual property rights</li>
                <li>Upload harmful or offensive content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services to generate deceptive or misleading content</li>
              </ul>
              
              <h2>6. Payment Terms</h2>
              <p>
                Some of our services require payment. By subscribing to a paid plan, you agree to pay the fees as they become due. We may change our fees at any time, but will provide advance notice of any changes.
              </p>
              
              <h2>7. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account if you violate these Terms of Service or if your usage poses a security risk.
              </p>
              
              <h2>8. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at: info@promogenie.co
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;

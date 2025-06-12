
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-semibold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none font-body">
            <p className="text-muted-foreground mb-8">
              Last updated: January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using the website internationalowl.com and services provided by OWL International SAS 
                ("Company," "we," "our," or "us"), you accept and agree to be bound by these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">About OWL International</h2>
              <p className="mb-4">
                OWL International SAS is a French company specializing in strategic investments across Africa and Europe, 
                focusing on technology, industrial solutions, and sustainable development projects.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Use of Services</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-medium">Permitted Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access information about our investment portfolio and services</li>
                  <li>Submit investor inquiries and applications</li>
                  <li>Communicate with our team regarding business opportunities</li>
                  <li>Download publicly available materials and resources</li>
                </ul>
                
                <h3 className="text-xl font-heading font-medium">Prohibited Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Using our services for illegal or fraudulent activities</li>
                  <li>Reproducing, distributing, or modifying our content without permission</li>
                  <li>Interfering with the proper functioning of our website</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Investment Disclaimers</h2>
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-4">
                <p className="font-medium text-amber-800 mb-2">Important Investment Notice</p>
                <ul className="list-disc pl-6 space-y-2 text-amber-700">
                  <li>All investments carry risk and past performance does not guarantee future results</li>
                  <li>Investment opportunities are subject to eligibility requirements and due diligence</li>
                  <li>Professional financial advice should be sought before making investment decisions</li>
                  <li>Investment terms and conditions are governed by separate legal agreements</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Intellectual Property</h2>
              <p className="mb-4">
                All content, trademarks, and intellectual property on this website are owned by OWL International SAS 
                or our licensors. You may not use our intellectual property without prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, OWL International SAS shall not be liable for any indirect, 
                incidental, special, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Governing Law</h2>
              <p className="mb-4">
                These Terms of Service are governed by French law. Any disputes shall be subject to the exclusive 
                jurisdiction of the courts of Paris, France.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Contact Information</h2>
              <div className="bg-accent p-6 rounded-lg">
                <p className="font-medium">OWL International SAS</p>
                <p>47 Boulevard de Courcelles, 75008 Paris, France</p>
                <p>Email: contact@internationalowl.com</p>
                <p>Phone: +33 7 44 98 87 89</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;

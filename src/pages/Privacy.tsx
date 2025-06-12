
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-semibold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none font-body">
            <p className="text-muted-foreground mb-8">
              Last updated: January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Introduction</h2>
              <p className="mb-4">
                OWL International SAS ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website 
                internationalowl.com or engage with our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-medium mb-2">Personal Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Professional information (company, job title, investment interests)</li>
                    <li>Communication preferences and correspondence</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-medium mb-2">Technical Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Website usage analytics and performance data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our investment services</li>
                <li>To communicate about investment opportunities and company updates</li>
                <li>To process investor applications and maintain investor relations</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To analyze website performance and user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Data Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With trusted service providers who assist in our operations</li>
                <li>When required by law or to respond to legal processes</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Your Rights (GDPR)</h2>
              <p className="mb-4">Under GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">International Data Transfers</h2>
              <p>
                As we operate internationally between France and Africa, your data may be transferred to and processed in 
                countries outside the European Economic Area. We ensure appropriate safeguards are in place to protect your data 
                in accordance with GDPR requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
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

export default PrivacyPage;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-semibold text-foreground mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none font-body">
            <p className="text-muted-foreground mb-8">
              Last updated: January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your computer or mobile device when you visit our website 
                internationalowl.com. They help us provide you with a better experience by remembering your preferences 
                and analyzing how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-heading font-medium mb-3">Essential Cookies</h3>
                  <p className="mb-2">These cookies are necessary for the website to function properly.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Session management and security</li>
                    <li>User authentication for investor portal</li>
                    <li>Website functionality and navigation</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-heading font-medium mb-3">Analytics Cookies</h3>
                  <p className="mb-2">These help us understand how visitors interact with our website.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Analytics for website performance</li>
                    <li>User behavior and engagement metrics</li>
                    <li>Content effectiveness analysis</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-heading font-medium mb-3">Marketing Cookies</h3>
                  <p className="mb-2">These are used to track visitors across websites for marketing purposes.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>LinkedIn and social media integration</li>
                    <li>Targeted content delivery</li>
                    <li>Investment opportunity recommendations</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-heading font-medium mb-3">Preference Cookies</h3>
                  <p className="mb-2">These remember your choices and preferences.</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Language and region settings</li>
                    <li>Newsletter subscription preferences</li>
                    <li>User interface customizations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Third-Party Cookies</h2>
              <p className="mb-4">We may use third-party services that set their own cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>LinkedIn:</strong> For professional networking and business content</li>
                <li><strong>Microsoft Clarity:</strong> For user experience analysis</li>
                <li><strong>Hotjar:</strong> For user behavior insights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-medium">Browser Settings</h3>
                <p className="mb-4">You can control and delete cookies through your browser settings:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chrome:</strong> Settings {'->'} Privacy and Security {'->'} Cookies</li>
                  <li><strong>Firefox:</strong> Preferences {'->'} Privacy & Security {'->'} Cookies</li>
                  <li><strong>Safari:</strong> Preferences {'->'} Privacy {'->'} Cookies</li>
                  <li><strong>Edge:</strong> Settings {'->'} Cookies and site permissions</li>
                </ul>
                
                <h3 className="text-xl font-heading font-medium">Opt-Out Options</h3>
                <p className="mb-2">You can opt out of specific tracking:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                  <li><a href="https://www.linkedin.com/psettings/guest-controls" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Cookie Settings</a></li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Impact of Disabling Cookies</h2>
              <p className="mb-4">
                Disabling certain cookies may affect your experience on our website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Some features may not work properly</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>Personalized content may not be available</li>
                <li>Website performance analytics will be limited</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy periodically to reflect changes in our practices or for legal reasons. 
                We will notify you of any significant changes by posting the updated policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about our use of cookies, please contact us:
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

export default CookiesPage;

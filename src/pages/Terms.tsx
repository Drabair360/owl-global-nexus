
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-semibold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground font-body">
              Last updated: December 12, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  By accessing and using the OWL International SAS website and services, you accept 
                  and agree to be bound by the terms and provision of this agreement. If you do not 
                  agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your relationship with OWL International SAS 
                  ("Company," "we," "our," or "us") regarding your use of our website, platforms, 
                  and investment services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Company Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  OWL International SAS is a French holding and purchasing company headquartered 
                  in Paris, specializing in:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Strategic investments in African industrial projects through CAOAGRO.COM</li>
                  <li>• Technology development via the AKOULA platform</li>
                  <li>• Entertainment industry innovations through KIDZ LAB</li>
                  <li>• Real estate investments across France, Côte d'Ivoire, and South Africa</li>
                  <li>• Equipment procurement and project management services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Use License</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  Permission is granted to temporarily download one copy of the materials on 
                  OWL International's website for personal, non-commercial transitory viewing only. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose or for any public display</li>
                  <li>• Attempt to reverse engineer any software contained on the website</li>
                  <li>• Remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of these restrictions 
                  and may be terminated by OWL International at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Investment Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Important Investment Disclaimer
                  </p>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    All investments carry risk of loss. Past performance does not guarantee future results. 
                    Investment opportunities are available only to qualified investors as defined by 
                    applicable securities laws.
                  </p>
                </div>
                <p>Our investment services include:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access to private investment opportunities</li>
                  <li>• Due diligence and investment analysis</li>
                  <li>• Portfolio management and reporting</li>
                  <li>• Investor relations and communications</li>
                </ul>
                <p>
                  Investment services are provided in compliance with French financial regulations 
                  and applicable international securities laws. Minimum investment amounts and 
                  qualification criteria apply.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">User Accounts and Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  When you create an account with us, you must provide information that is accurate, 
                  complete, and current at all times. You are responsible for safeguarding the password 
                  and for maintaining the confidentiality of your account.
                </p>
                <p>You agree to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Accept all responsibility for activities that occur under your account</li>
                  <li>• Notify us immediately of any unauthorized use of your account</li>
                  <li>• Provide accurate and complete information during registration</li>
                  <li>• Update your information to maintain accuracy</li>
                  <li>• Use the service only for lawful purposes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Prohibited Uses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>You may not use our service:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>• To violate any international, federal, provincial, or state regulations or laws</li>
                  <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>• To submit false or misleading information</li>
                  <li>• To upload or transmit viruses or any other type of malicious code</li>
                  <li>• To collect or track the personal information of others</li>
                  <li>• To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  The service and its original content, features, and functionality are and will remain 
                  the exclusive property of OWL International SAS and its licensors. The service is 
                  protected by copyright, trademark, and other laws.
                </p>
                <p>
                  Our trademarks and trade dress may not be used in connection with any product or 
                  service without our prior written consent.
                </p>
                <div className="bg-muted p-4 rounded">
                  <p className="text-sm">
                    <strong>CAOAGRO.COM</strong>, <strong>AKOULA</strong>, and <strong>KIDZ LAB</strong> 
                    are trademarks of OWL International SAS.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  The information on this website is provided on an "as is" basis. To the fullest extent 
                  permitted by law, this Company:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Excludes all representations and warranties relating to this website and its contents</li>
                  <li>• Excludes all liability for damages arising out of or in connection with your use of this website</li>
                  <li>• Does not guarantee the accuracy, completeness, or timeliness of information</li>
                  <li>• Makes no warranties about the results obtained from using the service</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  In no event shall OWL International SAS, nor its directors, employees, partners, 
                  agents, suppliers, or affiliates, be liable for any indirect, incidental, punitive, 
                  consequential, or special damages, including without limitation, loss of profits, 
                  data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  Maximum liability for any claim arising under these terms shall not exceed the amount 
                  paid by you for the specific service giving rise to the claim during the twelve months 
                  preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  These Terms shall be interpreted and governed by the laws of France. Any disputes 
                  arising under these terms shall be subject to the exclusive jurisdiction of the 
                  courts of Paris, France.
                </p>
                <p>
                  For international users, local laws may also apply, and you are responsible for 
                  compliance with applicable local regulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at 
                  any time. If a revision is material, we will try to provide at least 30 days notice 
                  prior to any new terms taking effect.
                </p>
                <p>
                  Your continued use of the service after we post any modifications to the Terms on 
                  this page will constitute your acknowledgment of the modifications and your consent 
                  to abide and be bound by the modified Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-muted p-4 rounded space-y-2">
                  <p><strong>OWL International SAS</strong></p>
                  <p>47 Boulevard de Courcelles, 75008 Paris, France</p>
                  <p>Email: legal@owl-international.com</p>
                  <p>Phone: +33 1 45 67 89 00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-semibold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground font-body">
              Last updated: December 12, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  OWL International SAS ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or engage with our services.
                </p>
                <p>
                  This policy applies to all information collected through our website, mobile applications, 
                  and any related services, sales, marketing, or events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <div>
                  <h3 className="font-heading font-semibold mb-2">Personal Data</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Contact information (name, email address, phone number, mailing address)</li>
                    <li>• Professional information (company, job title, industry)</li>
                    <li>• Investment-related information (for qualified investors)</li>
                    <li>• Communication preferences and history</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-2">Technical Data</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• IP address, browser type, and version</li>
                    <li>• Device information and unique device identifiers</li>
                    <li>• Website usage data and analytics</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>We use the information we collect to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Provide, operate, and maintain our services</li>
                  <li>• Communicate with you about our projects and investment opportunities</li>
                  <li>• Process investor applications and due diligence</li>
                  <li>• Improve our website and user experience</li>
                  <li>• Comply with legal obligations and regulatory requirements</li>
                  <li>• Protect against fraud and ensure security</li>
                  <li>• Send newsletters and marketing communications (with consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Data Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>We may share your information with:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Service providers and business partners who assist our operations</li>
                  <li>• Professional advisors (lawyers, accountants, auditors)</li>
                  <li>• Regulatory authorities when required by law</li>
                  <li>• Third parties in connection with business transactions (mergers, acquisitions)</li>
                  <li>• Law enforcement when required to comply with legal obligations</li>
                </ul>
                <p className="text-sm bg-muted p-3 rounded">
                  <strong>We do not sell your personal information to third parties for marketing purposes.</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  As a France-based company with operations across Africa and Europe, we may transfer 
                  your personal data internationally. We ensure appropriate safeguards are in place 
                  through:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• European Commission adequacy decisions</li>
                  <li>• Standard contractual clauses approved by the European Commission</li>
                  <li>• Binding corporate rules and certification schemes</li>
                  <li>• Other legally recognized transfer mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Access:</strong> Request copies of your personal data</li>
                  <li>• <strong>Rectification:</strong> Request correction of inaccurate data</li>
                  <li>• <strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li>• <strong>Restriction:</strong> Request limitation of processing</li>
                  <li>• <strong>Portability:</strong> Request transfer of your data</li>
                  <li>• <strong>Objection:</strong> Object to processing for direct marketing</li>
                  <li>• <strong>Withdraw consent:</strong> Where processing is based on consent</li>
                </ul>
                <p className="text-sm bg-muted p-3 rounded">
                  To exercise these rights, contact us at privacy@owl-international.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal data against unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Access controls and employee training</li>
                  <li>• Secure data centers and backup systems</li>
                  <li>• Incident response and breach notification procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  We retain personal data only for as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required by law. 
                  Retention periods vary based on:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• The nature of the data and our relationship with you</li>
                  <li>• Legal and regulatory requirements</li>
                  <li>• The purposes for which the data was collected</li>
                  <li>• Our legitimate business interests</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>If you have questions about this Privacy Policy or our data practices, contact us:</p>
                <div className="bg-muted p-4 rounded space-y-2">
                  <p><strong>OWL International SAS</strong></p>
                  <p>47 Boulevard de Courcelles, 75008 Paris, France</p>
                  <p>Email: privacy@owl-international.com</p>
                  <p>Phone: +33 1 45 67 89 00</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  You also have the right to lodge a complaint with the French Data Protection 
                  Authority (CNIL) or your local supervisory authority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;

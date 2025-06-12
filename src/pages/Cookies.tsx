
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-semibold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground font-body">
              Last updated: December 12, 2024
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when 
                  you visit our website. They are widely used to make websites work more efficiently 
                  and provide information to website owners.
                </p>
                <p>
                  This Cookie Policy explains how OWL International SAS uses cookies and similar 
                  technologies on our website, and your choices regarding these technologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 font-body">
                <div>
                  <h3 className="font-heading font-semibold mb-3 text-green-600">Essential Cookies</h3>
                  <p className="mb-2">These cookies are necessary for the website to function properly.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200 dark:border-green-800">
                    <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                      <li>• Authentication and session management</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Website functionality and navigation</li>
                      <li>• Load balancing and performance</li>
                    </ul>
                    <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                      <strong>Legal basis:</strong> Legitimate interest (essential for service provision)
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold mb-3 text-blue-600">Analytics Cookies</h3>
                  <p className="mb-2">These cookies help us understand how visitors interact with our website.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-800">
                    <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>• Google Analytics (traffic analysis)</li>
                      <li>• Page views and user behavior</li>
                      <li>• Website performance monitoring</li>
                      <li>• Popular content identification</li>
                    </ul>
                    <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
                      <strong>Legal basis:</strong> Consent (you can opt out)
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold mb-3 text-purple-600">Functional Cookies</h3>
                  <p className="mb-2">These cookies enable enhanced functionality and personalization.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-200 dark:border-purple-800">
                    <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
                      <li>• User preferences and settings</li>
                      <li>• Language and region selection</li>
                      <li>• Chat widget functionality</li>
                      <li>• Video player preferences</li>
                    </ul>
                    <p className="text-xs text-purple-700 dark:text-purple-300 mt-2">
                      <strong>Legal basis:</strong> Consent (optional features)
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-semibold mb-3 text-amber-600">Marketing Cookies</h3>
                  <p className="mb-2">These cookies are used to deliver relevant advertisements and track campaign effectiveness.</p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded border border-amber-200 dark:border-amber-800">
                    <ul className="space-y-1 text-sm text-amber-800 dark:text-amber-200">
                      <li>• LinkedIn advertising and retargeting</li>
                      <li>• Email marketing optimization</li>
                      <li>• Social media integration</li>
                      <li>• Conversion tracking</li>
                    </ul>
                    <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
                      <strong>Legal basis:</strong> Consent (you can opt out)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>We use third-party services that may place cookies on your device:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded">
                    <h4 className="font-heading font-semibold mb-2">Google Analytics</h4>
                    <p className="text-sm text-muted-foreground mb-2">Website traffic and user behavior analysis</p>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                      Google Privacy Policy ↗
                    </a>
                  </div>
                  <div className="bg-muted p-4 rounded">
                    <h4 className="font-heading font-semibold mb-2">LinkedIn Insights</h4>
                    <p className="text-sm text-muted-foreground mb-2">Professional audience analytics and advertising</p>
                    <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline">
                      LinkedIn Privacy Policy ↗
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Cookie Consent and Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  When you first visit our website, you'll see a cookie banner asking for your consent 
                  to use non-essential cookies. You can:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Accept all cookies</li>
                  <li>• Accept only essential cookies</li>
                  <li>• Customize your preferences by cookie category</li>
                  <li>• Change your preferences at any time</li>
                </ul>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-800">
                  <h4 className="font-heading font-semibold mb-2">Manage Your Cookie Preferences</h4>
                  <p className="text-sm mb-3">Click the button below to review and update your cookie settings:</p>
                  <Button size="sm" className="font-body">
                    Cookie Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Browser Cookie Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>You can also control cookies through your browser settings:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Chrome</h4>
                    <p className="text-sm text-muted-foreground">Settings → Privacy and security → Cookies and other site data</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Firefox</h4>
                    <p className="text-sm text-muted-foreground">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Safari</h4>
                    <p className="text-sm text-muted-foreground">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Edge</h4>
                    <p className="text-sm text-muted-foreground">Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Note:</strong> Disabling cookies may affect website functionality. 
                    Some features may not work properly without essential cookies.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Cookie Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>Different cookies have different lifespans:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li>• <strong>Persistent cookies:</strong> Remain until expiry date or manual deletion</li>
                  <li>• <strong>Analytics cookies:</strong> Typically expire after 2 years</li>
                  <li>• <strong>Marketing cookies:</strong> Usually expire after 30-90 days</li>
                </ul>
                
                <div className="bg-muted p-4 rounded">
                  <h4 className="font-heading font-semibold mb-2">Automatic Cleanup</h4>
                  <p className="text-sm text-muted-foreground">
                    We regularly review and clean up unnecessary cookies to minimize data storage. 
                    Expired cookies are automatically removed from our systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices or for other operational, legal, or regulatory reasons.
                </p>
                <p>
                  We will notify you of any material changes by posting the new Cookie Policy on 
                  this page and updating the "Last updated" date. We encourage you to review this 
                  policy periodically.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-semibold">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-body">
                <p>If you have questions about our use of cookies, please contact us:</p>
                <div className="bg-muted p-4 rounded space-y-2">
                  <p><strong>OWL International SAS</strong></p>
                  <p>47 Boulevard de Courcelles, 75008 Paris, France</p>
                  <p>Email: privacy@owl-international.com</p>
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

export default CookiesPage;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, TrendingUp, Users, Lock, Mail, Key, BarChart3, Globe2 } from 'lucide-react';

const InvestorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { email, password });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 via-purple-700 to-blue-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.10),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-semibold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Investor</span> Portal
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto font-body leading-relaxed">
            Access exclusive investment opportunities, portfolio insights, and strategic market intelligence 
            across our African and European operations.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-blue-500/30 text-blue-100 border-blue-400/50 px-4 py-2 text-sm font-subtitle hover:bg-blue-400/40 hover:text-white hover:border-blue-300/60 transition-all duration-300 cursor-default">
              <BarChart3 className="w-4 h-4 mr-2" />
              Real-time Analytics
            </Badge>
            <Badge variant="secondary" className="bg-purple-500/30 text-purple-100 border-purple-400/50 px-4 py-2 text-sm font-subtitle hover:bg-purple-400/40 hover:text-white hover:border-purple-300/60 transition-all duration-300 cursor-default">
              <Globe2 className="w-4 h-4 mr-2" />
              African Markets
            </Badge>
            <Badge variant="secondary" className="bg-indigo-500/30 text-indigo-100 border-indigo-400/50 px-4 py-2 text-sm font-subtitle hover:bg-indigo-400/40 hover:text-white hover:border-indigo-300/60 transition-all duration-300 cursor-default">
              <TrendingUp className="w-4 h-4 mr-2" />
              Growth Opportunities
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Login Form - Removed backdrop-blur, using solid background */}
          <Card className="bg-white/95 border border-white/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-500">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-heading text-slate-800">Secure Access</CardTitle>
              <CardDescription className="text-slate-600 font-body">
                Enter your credentials to access your investment dashboard
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-subtitle text-slate-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="investor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/90 border-slate-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-400 focus:ring-blue-400/50 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-subtitle text-slate-700">
                    Password
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 bg-white/90 border-slate-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-400 focus:ring-blue-400/50 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-semibold py-3 transition-all duration-300 hover:scale-105 shadow-glow-amber"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Authenticating...
                    </div>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Access Portal
                    </>
                  )}
                </Button>

                <div className="text-center">
                  <a href="#" className="text-sm text-blue-600 hover:text-purple-600 transition-colors font-subtitle relative group">
                    Forgot your password?
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-heading font-semibold text-white mb-6">
                Investment <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Intelligence</span>
              </h2>
              <p className="text-blue-200 font-body text-lg leading-relaxed">
                Access comprehensive market analytics, portfolio performance metrics, and exclusive 
                investment opportunities across our diversified global portfolio.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-white/90 border border-white/20 hover:bg-white/95 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading text-slate-800">Portfolio Analytics</h3>
                  </div>
                  <p className="text-slate-600 font-body">
                    Real-time performance tracking and detailed investment analytics across all holdings.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 border border-white/20 hover:bg-white/95 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading text-slate-800">Market Insights</h3>
                  </div>
                  <p className="text-slate-600 font-body">
                    Strategic market intelligence and emerging opportunities in African and European markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 border border-white/20 hover:bg-white/95 hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading text-slate-800">Network Access</h3>
                  </div>
                  <p className="text-slate-600 font-body">
                    Connect with our global network of investors, partners, and industry leaders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorLogin;

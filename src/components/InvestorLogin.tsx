
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, Eye, EyeOff, Shield, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

const InvestorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (email && password) {
        toast.success('Access granted. Redirecting...');
      } else {
        toast.error('Invalid credentials');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(251,146,60,0.08),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Minimalist header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl mb-8 shadow-2xl relative border border-amber-400/20">
            <Lock className="w-7 h-7 text-amber-400" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
              <Shield className="w-2 h-2 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-heading font-semibold text-white mb-2 tracking-tight">
            Portal Access
          </h1>
          <p className="text-lg text-blue-200 font-subtitle tracking-wide opacity-80">
            OWL INTERNATIONAL
          </p>
        </div>

        {/* Sophisticated card */}
        <Card className="border border-slate-700/50 bg-slate-800/90 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-amber-500/10 hover:shadow-2xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-heading font-semibold text-center text-white">
              Secure Access
            </CardTitle>
            <CardDescription className="text-center text-slate-300 font-body">
              Enter your credentials to access the portal
            </CardDescription>
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mt-4"></div>
          </CardHeader>
          <CardContent className="space-y-6 px-6 pb-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-subtitle font-medium text-slate-300 tracking-wide">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-slate-700/50 border border-slate-600 focus:border-amber-400 focus:ring-amber-400/20 rounded-lg font-body text-white placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-subtitle font-medium text-slate-300 tracking-wide">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 bg-slate-700/50 border border-slate-600 focus:border-amber-400 focus:ring-amber-400/20 rounded-lg font-body text-white placeholder:text-slate-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 h-4 w-4 text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-subtitle font-semibold tracking-wide rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Authenticating...' : 'Access Portal'}
              </Button>
            </form>

            <div className="text-center space-y-3 pt-2">
              <button className="text-sm text-amber-400 hover:text-amber-300 font-subtitle font-medium hover:underline transition-all duration-300">
                Forgot credentials?
              </button>
              <div className="text-xs text-slate-400 font-body">
                For inquiries:<br/>
                <a href="mailto:investors@owlinternational.com" className="text-amber-400 hover:text-amber-300 font-medium hover:underline transition-all duration-300">
                  investors@owlinternational.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Minimal trust indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-full">
            <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-xs font-subtitle font-medium text-slate-300 tracking-wide">
              Encrypted & Secure
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorLogin;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, Eye, EyeOff, Shield, Award, TrendingUp, Globe2 } from 'lucide-react';
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
        toast.success('Welcome to your exclusive portal. Redirecting...');
      } else {
        toast.error('Please enter valid credentials');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.12),transparent_40%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
      
      <div className="w-full max-w-lg relative z-10">
        {/* Premium header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-full mb-6 shadow-2xl relative">
            <Lock className="w-10 h-10 text-white" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <Shield className="w-3 h-3 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-heading font-bold text-white mb-3 tracking-tight">
            Exclusive Access
          </h1>
          <p className="text-xl text-blue-100 font-subtitle tracking-wide">
            OWL INTERNATIONAL PRIVATE PORTAL
          </p>
          <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-amber-300">
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              <span className="font-subtitle">Premium Access</span>
            </div>
            <div className="flex items-center">
              <Globe2 className="w-4 h-4 mr-2" />
              <span className="font-subtitle">Global Network</span>
            </div>
          </div>
        </div>

        {/* Premium card */}
        <Card className="border-2 border-amber-400/20 bg-white/95 backdrop-blur-xl shadow-2xl hover-glow transition-all duration-500">
          <CardHeader className="space-y-2 pb-8">
            <CardTitle className="text-3xl font-heading font-bold text-center text-slate-900">
              Private Banking Access
            </CardTitle>
            <CardDescription className="text-center text-lg text-slate-600 font-body">
              Enter your exclusive credentials to access your investment portfolio
            </CardDescription>
            <div className="w-24 h-0.5 bg-gradient-amber-soft mx-auto mt-4"></div>
          </CardHeader>
          <CardContent className="space-y-6 px-8 pb-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-subtitle font-semibold text-slate-700 tracking-wide">
                  EMAIL ADDRESS
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="investor@exclusive.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 text-lg bg-slate-50 border-2 border-slate-200 focus:border-amber-400 focus:ring-amber-400/20 rounded-xl font-body"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="password" className="text-sm font-subtitle font-semibold text-slate-700 tracking-wide">
                  SECURE PASSWORD
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your secure password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 h-14 text-lg bg-slate-50 border-2 border-slate-200 focus:border-amber-400 focus:ring-amber-400/20 rounded-xl font-body"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-lg bg-gradient-amber-soft hover:from-amber-600 hover:to-orange-700 text-white font-subtitle font-bold tracking-wide rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
                disabled={isLoading}
              >
                {isLoading ? 'Authenticating Access...' : 'Enter Private Portal'}
              </Button>
            </form>

            <div className="text-center space-y-4 pt-4">
              <button className="text-sm text-amber-600 hover:text-amber-700 font-subtitle font-semibold hover:underline transition-all duration-300">
                Forgot your credentials?
              </button>
              <div className="text-xs text-slate-500 font-body leading-relaxed">
                For exclusive investor inquiries and portfolio access<br/>
                <a href="mailto:investors@owlinternational.com" className="text-amber-600 hover:text-amber-700 font-semibold hover:underline transition-all duration-300">
                  investors@owlinternational.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Premium trust indicators */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <TrendingUp className="w-5 h-5 mr-3 text-green-400" />
            <span className="text-sm font-subtitle font-medium text-white tracking-wide">
              Bank-Grade Security • Encrypted Access • Global Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorLogin;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, Eye, EyeOff, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

const InvestorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        toast.success('Login successful! Redirecting to investor dashboard...');
        // Here you would typically redirect to the investor dashboard
      } else {
        toast.error('Please enter valid credentials');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Investor Portal</h1>
          <p className="text-muted-foreground">Access your OWL International investment dashboard</p>
        </div>

        <Card className="border-2 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access exclusive investor content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="investor@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Access Dashboard'}
              </Button>
            </form>

            <div className="text-center space-y-2">
              <button className="text-sm text-primary hover:underline">
                Forgot your password?
              </button>
              <div className="text-xs text-muted-foreground">
                For investor inquiries, contact us at{' '}
                <a href="mailto:investors@owlinternational.com" className="text-primary hover:underline">
                  investors@owlinternational.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/50 dark:bg-slate-800/50 rounded-full backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
            <span className="text-sm font-medium text-muted-foreground">
              Secure investor access protected by enterprise-grade encryption
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorLogin;

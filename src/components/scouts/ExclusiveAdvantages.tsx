
import React from 'react';
import { Globe, DollarSign, TrendingUp, Award, Shield, Star } from 'lucide-react';

const ExclusiveAdvantages = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section text-slate-800 mb-4 font-brand">EXCLUSIVE ADVANTAGES</h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">Join a fascinating business intelligence network in Africa with unparalleled access and rewards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Elite Network Access */}
          <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Elite Network Access</h3>
            <p className="text-muted-foreground mb-4 font-body">Access to investment banks and elite West/East African networks through strategic pooling. Contribute your connections while gaining access to our collective intelligence and professional ecosystem.</p>
          </div>

          {/* Lucrative Compensation */}
          <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Lucrative Compensation</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Attractive finder's fees (2-5% of deal value), equity participation in successful ventures, performance bonuses, and annual recognition awards.
            </p>
          </div>

          {/* Strategic Impact */}
          <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Strategic Impact</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Shape Africa's business landscape, drive continental transformation, and build your legacy as an architect of the continent's economic future.
            </p>
          </div>

          {/* Professional Recognition */}
          <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-violet-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Professional Recognition</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Association with Africa's rising star of private investments in strategic sectors, thought leadership opportunities, speaking engagements, and recognition in international business circles.
            </p>
          </div>

          {/* Intelligence Resources */}
          <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 via-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Strategic Resources</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Proprietary market intelligence, AI-powered due diligence tools, investment frameworks, and comprehensive research support for deal evaluation.
            </p>
          </div>

          {/* Exclusive Access */}
          <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Exclusive Opportunities</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Collaborative platform to uncover the most exciting private equity deals, PPP infrastructure projects, and private + sovereign investment initiatives across all 54 African nations - built together as a common endeavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveAdvantages;

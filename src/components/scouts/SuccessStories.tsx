
import React from 'react';
import { Star } from 'lucide-react';

const SuccessStories = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section text-slate-800 mb-4 font-brand">SUCCESS STORIES</h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
            Hear from our elite business scouts who are shaping Africa's investment landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-8 border shadow-sm">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />)}
            </div>
            <p className="text-muted-foreground font-body italic mb-6 leading-relaxed">
              "Over 12 months, I've identified 3 promising agritech startups in Lagos and Abuja. My introduction of FarmTech Solutions led to their €2.3M Series A funding. The €22K in finder's fees plus quarterly strategy calls with Owl's partners have significantly enhanced my network."
            </p>
            <div className="flex items-center">
              <div>
                <span className="font-subtitle font-semibold text-foreground block">Dr. Amara Okonkwo</span>
                <span className="text-sm text-muted-foreground">Agricultural Finance Specialist, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-8 border shadow-sm">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />)}
            </div>
            <p className="text-muted-foreground font-body italic mb-6 leading-relaxed">
              "My banking connections helped me identify mobile money opportunities across Francophone West Africa. I connected Owl with a fintech serving rural communities in Burkina Faso and Mali, facilitating their initial €800K investment. The market intelligence access is invaluable."
            </p>
            <div className="flex items-center">
              <div>
                <span className="font-subtitle font-semibold text-foreground block">Jean-Baptiste Kouassi</span>
                <span className="text-sm text-muted-foreground">Financial Services Consultant, Côte d'Ivoire</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl p-8 border shadow-sm">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />)}
            </div>
            <p className="text-muted-foreground font-body italic mb-6 leading-relaxed">
              "My renewable energy expertise helped identify solar projects in Morocco and Tunisia. I assisted Owl in evaluating €5M in infrastructure opportunities. The professional development workshops and regional conference speaking opportunities have elevated my industry standing significantly."
            </p>
            <div className="flex items-center">
              <div>
                <span className="font-subtitle font-semibold text-foreground block">Sarah Al-Rashid</span>
                <span className="text-sm text-muted-foreground">Renewable Energy Advisor, Morocco</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

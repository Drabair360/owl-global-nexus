
import React from 'react';

const OurTeamSection = () => {
  return (
    <div>
      <h2 className="text-section text-slate-800 mb-6 text-center font-brand">OUR TEAM</h2>
      <p className="text-body-large text-slate-600 max-w-3xl mx-auto text-center mb-12 font-body">
        Meet the dedicated individuals driving OWL International&apos;s mission, bringing diverse expertise and a shared passion for transformative change.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
          <img
            src="/placeholder-avatar.jpg"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-subtitle font-semibold mb-2 text-foreground text-center">John Doe</h3>
          <p className="text-muted-foreground mb-4 font-body text-center">CEO</p>
          <p className="text-muted-foreground font-body text-center">
            Visionary leader with a passion for innovation and sustainable development.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
          <img
            src="/placeholder-avatar.jpg"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-subtitle font-semibold mb-2 text-foreground text-center">Jane Smith</h3>
          <p className="text-muted-foreground mb-4 font-body text-center">CTO</p>
          <p className="text-muted-foreground font-body text-center">
            Technology expert driving our digital transformation initiatives.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
          <img
            src="/placeholder-avatar.jpg"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-subtitle font-semibold mb-2 text-foreground text-center">David Lee</h3>
          <p className="text-muted-foreground mb-4 font-body text-center">COO</p>
          <p className="text-muted-foreground font-body text-center">
            Operations guru ensuring seamless execution and sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;

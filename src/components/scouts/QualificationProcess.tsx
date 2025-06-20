
import React from 'react';

const QualificationProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section text-slate-800 mb-4 font-brand">QUALIFICATION & APPLICATION PROCESS</h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
            Our rigorous selection process ensures we partner only with the most accomplished business development professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Qualification Criteria */}
          <div>
            <h3 className="text-2xl font-subtitle font-semibold mb-6 text-foreground">Qualification Criteria</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground font-body">10+ years of international business development experience with demonstrable track record</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground font-body">Proven success in identifying and closing deals worth EUR 5M+ in emerging markets</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground font-body">Extensive network across fintech, agritech, real estate, or creative industries</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground font-body">Regional expertise in American, European, African markets or strong emerging market experience</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground font-body">Fluency in English and preferably French, Arabic, or Portuguese</p>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div>
            <h3 className="text-2xl font-subtitle font-semibold mb-6 text-foreground">Selection Process</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Initial Application Review</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive evaluation of portfolio, experience, and strategic vision</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Strategic Assessment</h4>
                  <p className="text-sm text-muted-foreground">Market knowledge evaluation and deal sourcing capability analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Executive Interviews</h4>
                  <p className="text-sm text-muted-foreground">Multi-stage interviews with our investment committee and senior partners</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Onboarding Program</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive orientation on investment thesis, market strategies, and success metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationProcess;

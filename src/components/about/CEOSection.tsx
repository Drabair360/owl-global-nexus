
import React from 'react';
import { Mail, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CEOSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-section text-slate-800 mb-6 text-center font-brand">MEET OUR CEO</h2>
      
      {/* CEO Introduction */}
      <div className="text-center mb-12">
        <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">AD</span>
        </div>
        <h3 className="text-3xl font-semibold text-slate-800 mb-4 font-body">Arthur Draber</h3>
        <p className="text-xl text-slate-600 font-body">Founder & CEO, OWL International</p>
      </div>

      {/* Arthur's Story */}
      <div className="space-y-8 mb-12">
        {/* The Journey Begins */}
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">The Journey Begins (2010)</h4>
          <p className="text-slate-700 leading-relaxed font-body">
            Arthur's transformative journey began 15 years ago with a deep passion for geopolitics and human conflicts. 
            Determined to understand the Israeli-Palestinian conflict firsthand, he embarked on a one-way flight to Southeast Turkey 
            with two childhood friends. Their adventure took them hitchhiking through Syria and Jordan, from north to south, 
            and through the West Bank, visiting Nazareth, Jerusalem, and Tel Aviv.
          </p>
        </div>

        {/* The Awakening */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">The Awakening</h4>
          <p className="text-slate-700 leading-relaxed font-body">
            What they discovered was profound—an unbelievable understanding of local cultures, tensions, and the human stories 
            behind the headlines. They returned home with new friendships and perspectives that most people around them simply 
            weren't interested in hearing. This disconnect sparked a revolutionary idea: why not document these experiences 
            and share them with the world?
          </p>
        </div>

        {/* The Mission Expands */}
        <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-8">
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">The Mission Expands</h4>
          <p className="text-slate-700 leading-relaxed font-body">
            The following year, armed with smartphone cameras and a vision to create a web documentary, Arthur and his team 
            set their sights on Rwanda. While everyone advised against visiting, they were determined to discover what Rwanda 
            and its people had become since the 1994 genocide—a story no one seemed able to tell them. Their journey began 
            in Uganda, continued through Rwanda, and extended into North Kivu in the Democratic Republic of Congo, where they 
            interviewed three ministers and filmed illicit mining operations.
          </p>
        </div>

        {/* The Business Epiphany */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">The Business Epiphany</h4>
          <p className="text-slate-700 leading-relaxed font-body">
            In the DRC, Arthur experienced a shocking revelation—the dramatic economic development gap between Uganda and Rwanda 
            on one side, and the DRC on the other. "It is possible to travel back in time in the space of a few meters, on this planet!" 
            he realized. When local inquiries revealed no regular or reliable transportation services, Arthur saw an opportunity 
            to start a business with high social impact. The local use of USD currency de-risked the enterprise significantly.
          </p>
        </div>

        {/* The Entrepreneur Born */}
        <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-8">
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">The Entrepreneur Born</h4>
          <p className="text-slate-700 leading-relaxed font-body">
            Within months of returning home, Arthur and his associate had crafted a comprehensive business plan and secured a 
            $50,000 USD loan. They flew back to Kampala, purchased two Fuso buses from the outskirts, and drove them to Goma 
            where they opened their first agency. Through determination and strategic growth, they expanded to four agencies 
            with multiple buses and trucks, creating vital transportation links for local communities.
          </p>
        </div>

        {/* The Resilience Test */}
        <div className="bg-gradient-to-r from-slate-50 to-emerald-50 rounded-2xl p-8">
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">The Resilience Test</h4>
          <p className="text-slate-700 leading-relaxed font-body">
            In May 2012, war erupted in East Africa, hitting the region hard. Arthur was forced to seek refuge in Uganda, 
            where weeks of patience revealed a worsening situation. Making the difficult decision to completely pull out and 
            close the business, Arthur learned invaluable lessons about resilience, strategic pivoting, and crisis management. 
            "My real academics were studied there on the field, in one of the world's worst war-ridden, low-resource environments," 
            he reflects, contrasting this with his parallel Master's in Aerospace Engineering.
          </p>
        </div>

        {/* The Vision Crystallized */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">The Vision Crystallized</h4>
          <p className="text-slate-700 leading-relaxed font-body">
            Arthur's passion for building powerful businesses and transforming Africa only grew stronger. He went on to gain 
            specialized experience across the agro-industry, health, freight, and construction sectors, working with partners 
            and clients in over 25 African countries. Today, as he leads OWL International, Arthur believes more than ever 
            that he can positively change the lives of over 1 billion people in emerging markets throughout Africa and Europe.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12">
        <h4 className="text-2xl font-semibold text-slate-800 mb-6 font-body">Get in Touch with Arthur</h4>
        <p className="text-lg text-slate-600 mb-8 font-body">
          Ready to be part of Africa's transformation? Connect with Arthur directly to explore partnership opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            onClick={() => window.open('mailto:business@internationalowl.com')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Arthur
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Contact Form
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-slate-800">Contact Arthur Draber</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Company/Organization" 
                    className="w-full p-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full p-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CEOSection;

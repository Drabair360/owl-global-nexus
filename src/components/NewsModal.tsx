
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Tag, X } from 'lucide-react';
import { NewsItem } from '@/data/newsData';

interface NewsModalProps {
  news: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ news, isOpen, onClose }) => {
  if (!news) return null;

  const getEntityColor = (entity: string) => {
    switch (entity) {
      case 'AKOULA': return 'text-blue-600';
      case 'CAOAGRO.COM': return 'text-green-600';
      case 'OWLOMA': return 'text-orange-600';
      default: return 'text-slate-600';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800 pr-8">
            {news.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Info */}
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              <span>{news.category}</span>
            </div>
            <div className={`font-semibold ${getEntityColor(news.entity)}`}>
              {news.entity}
            </div>
          </div>

          {/* Featured Image */}
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* Content */}
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              {news.content.introduction}
            </p>

            {news.content.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {section.heading}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-slate-700 leading-relaxed font-medium">
                {news.content.conclusion}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsModal;

import React from 'react';
import { Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-creamDark text-textLight py-16 px-8 md:px-16 font-sans mt-auto relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-blush pb-12">
        
        {/* Left Section - Brand */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/50 rounded flex items-center justify-center p-1 shadow-sm">
              {/* Fallback to text if the logo is not yet placed in public/images/ */}
              <img 
                src="/images/popera-logo.png" 
                alt="PopEra Logo" 
                className="w-full h-full object-contain" 
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} 
              />
              <div className="hidden w-full h-full items-center justify-center text-gold font-serif font-bold text-xl">
                PE
              </div>
            </div>
            <div>
              <h3 className="text-textDark font-bold text-lg tracking-wider">PopEra</h3>
              <p className="text-rose text-[10px] tracking-widest font-bold uppercase">Digital Agency</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mt-4">
            Crafting state-of-the-art web applications, custom software solutions, and premium design identities that elevate businesses.
          </p>
        </div>

        {/* Middle Section - Work With Us */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-textDark text-sm font-bold flex items-center space-x-2 tracking-widest uppercase">
            <span className="text-rose">{'<>'}</span>
            <span>Work With Us</span>
          </h4>
          <p className="text-sm leading-relaxed">
            Looking to build a premium website, dynamic web portal, or custom mobile application for your business?
          </p>
          <div className="flex items-center space-x-2 text-textDark text-sm font-medium">
            <span className="text-rose">✿</span>
            <span>Get in touch for custom development.</span>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-textDark text-sm font-bold flex items-center space-x-2 tracking-widest uppercase">
            <span className="text-rose"><Phone size={14} /></span>
            <span>Contact PopEra</span>
          </h4>
          <div className="space-y-3">
            <a href="tel:+919591574151" className="block bg-cream border border-blush p-4 rounded-lg hover:border-rose transition-colors group flex justify-between items-center cursor-pointer shadow-sm">
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-1">Call / WhatsApp</p>
                <p className="text-textDark font-bold tracking-wider">+91 95915 74151</p>
              </div>
              <span className="text-textLight group-hover:text-rose transition-colors">↗</span>
            </a>
            <a href="tel:+917676952715" className="block bg-cream border border-blush p-4 rounded-lg hover:border-rose transition-colors group flex justify-between items-center cursor-pointer shadow-sm">
              <div>
                <p className="text-[10px] tracking-widest uppercase mb-1">Call / WhatsApp</p>
                <p className="text-textDark font-bold tracking-wider">+91 76769 52715</p>
              </div>
              <span className="text-textLight group-hover:text-rose transition-colors">↗</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase gap-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:space-x-2 gap-2 md:gap-0">
          <span>Website Built By <span className="text-textDark font-bold">PopEra</span></span>
          <span className="text-textLight hidden md:inline">•</span>
          <span>For other websites & apps contact us</span>
        </div>
        <button onClick={scrollToTop} className="flex items-center space-x-2 hover:text-textDark transition-colors cursor-pointer p-2 md:p-0">
          <span>Back To Top</span>
          <span className="text-rose"><ArrowUp size={12} /></span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

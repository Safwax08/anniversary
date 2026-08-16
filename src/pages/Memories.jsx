import React, { useState } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Memories() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Adventures', 'Dates', 'Celebrations', 'Special Moments'];

  const memoriesList = [
    {
      id: 1,
      title: "Mountain Top Escape",
      category: "Adventures",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600",
      description: "Conquering high peaks and cold winds together. Worth every step."
    },
    {
      id: 2,
      title: "Cozy Café Afternoon",
      category: "Dates",
      image: "https://images.unsplash.com/photo-1481841580057-e2b9927a05c6?q=80&w=600",
      description: "Steaming lattes, warm smiles, and endless whispers about our future."
    },
    {
      id: 3,
      title: "Lakeside Anniversary Toast",
      category: "Celebrations",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600",
      description: "Raising a glass to another beautiful year of shared dreams."
    },
    {
      id: 4,
      title: "Sunset Beach Walk",
      category: "Special Moments",
      image: "https://images.unsplash.com/photo-1510156144896-19f939e248b6?q=80&w=600",
      description: "Writing our names in the sand and watching the tide wash them into the sea."
    },
    {
      id: 5,
      title: "Wild Roadtrip Journey",
      category: "Adventures",
      image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=600",
      description: "Windows rolled down, music blasting, driving into the golden sunset."
    },
    {
      id: 6,
      title: "Perfect Summer Picnic",
      category: "Dates",
      image: "https://images.unsplash.com/photo-1592156042566-ee5245ff978b?q=80&w=600",
      description: "Blanket on the grass, fresh strawberries, and sweet peace."
    },
    {
      id: 7,
      title: "Surprise Candlelight Dinner",
      category: "Celebrations",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600",
      description: "Sweet desserts and flickering lights. A quiet night to remember."
    },
    {
      id: 8,
      title: "Warm Holding Hands",
      category: "Special Moments",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600",
      description: "No matter where we go, my hand fits perfectly in yours."
    }
  ];

  const filteredMemories = filter === 'All'
    ? memoriesList
    : memoriesList.filter(item => item.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredMemories.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredMemories.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-textDark font-bold mb-3 flex items-center justify-center gap-2">
              Our Beautiful Memories
            </h2>
            <div className="w-24 h-1 bg-primaryPink/60 mx-auto rounded-full mb-4" />
            <p className="text-textDark/70 max-w-md mx-auto text-base">
              Moments captured in time, stored forever in our hearts.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-primaryPink text-white shadow-md scale-105'
                  : 'glass text-textDark hover:bg-rosePink/10 hover:text-primaryPink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <div>
            {filteredMemories.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group cursor-pointer glass-card rounded-2xl overflow-hidden p-3 hover:shadow-xl transition-all duration-300 hover:border-primaryPink/40"
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold uppercase tracking-wider bg-primaryPink/90 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-textDark text-base group-hover:text-primaryPink transition-colors duration-300 truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-textDark/65 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-rosePink/10 text-primaryPink border border-primaryPink/35 font-semibold px-8 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm flex items-center gap-2 mx-auto">
            <span>Load More Memories</span>
            <Heart className="h-4 w-4 fill-primaryPink text-primaryPink" />
          </button>
        </div>

        {/* Lightbox Modal */}
        <div>
          {lightboxIndex !== null && (
            <div
              onClick={closeLightbox}
              className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Image Frame */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[80vh] bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
              >
                <img
                  src={filteredMemories[lightboxIndex].image}
                  alt={filteredMemories[lightboxIndex].title}
                  className="object-contain max-h-[68vh] w-full"
                />
                <div className="p-6 bg-neutral-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/5">
                  <div>
                    <span className="text-xs text-primaryPink font-bold uppercase tracking-wider">
                      {filteredMemories[lightboxIndex].category}
                    </span>
                    <h3 className="font-serif text-lg font-bold mt-1">
                      {filteredMemories[lightboxIndex].title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-light mt-1 max-w-2xl leading-relaxed">
                      {filteredMemories[lightboxIndex].description}
                    </p>
                  </div>
                  <div className="text-sm text-neutral-500 font-semibold shrink-0">
                    {lightboxIndex + 1} / {filteredMemories.length}
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

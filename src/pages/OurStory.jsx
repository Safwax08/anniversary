import React from 'react';
import { Heart, Calendar } from 'lucide-react';

export default function OurStory() {
  const milestones = [
    {
      title: "The First Meeting",
      date: "12 May 2019",
      description: "That magic moment when our eyes met for the very first time. Time seemed to stand still, and the world went quiet.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "The First Conversation",
      date: "15 May 2019",
      description: "Hours flew by like minutes. Our first conversation felt so natural, like we had known each other for lifetimes.",
      image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "The First Date",
      date: "21 June 2019",
      description: "A perfect evening full of nervous smiles, sweet laughter, and an unforgettable connection that changed everything.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "The Moment We Fell in Love",
      date: "14 August 2019",
      description: "No grand gestures, just a quiet realization. I knew you were my home when my heart smiled at the thought of you.",
      image: "https://images.unsplash.com/photo-1494774157365-9e04c6722e47?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Our Favorite Memory",
      date: "10 August 2021",
      description: "That sunny afternoon by the water. That day, that laughter, that pure feeling of peace - I will cherish it forever.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop",
    },
    {
      title: "Today & Beyond",
      date: "Present Day",
      description: "Another beautiful chapter of our story is written every day. Hand in hand, writing our forever together.",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-textDark font-bold mb-3 flex items-center justify-center gap-2">
            Our Story <Heart className="h-8 w-8 text-primaryPink fill-primaryPink" />
          </h2>
          <div className="w-24 h-1 bg-primaryPink/60 mx-auto rounded-full mb-4" />
          <p className="text-textDark/70 text-lg italic">
            From the first moment to every moment after...
          </p>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primaryPink/20 via-rosePink to-primaryPink/20 rounded-full hidden md:block" />

        {/* Timeline Items */}
        <div className="flex flex-col gap-12 md:gap-16">
          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center w-full ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div
                  className="w-full md:w-5/12 px-2"
                >
                  <div className="glass-card rounded-2xl overflow-hidden p-6 hover:shadow-xl hover:border-primaryPink/50 transition-all duration-300">
                    <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 shadow-inner">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-primaryPink text-sm font-semibold mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-textDark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-textDark/75 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Center Point / Heart Node */}
                <div className="relative flex items-center justify-center w-full md:w-2/12 my-6 md:my-0">
                  <div className="h-10 w-10 rounded-full bg-white border-2 border-primaryPink flex items-center justify-center shadow-md z-10 transition-transform duration-300 hover:scale-125 cursor-pointer">
                    <Heart className="h-5 w-5 fill-primaryPink text-primaryPink" />
                  </div>
                </div>

                {/* Placeholder spacer for grid alignment */}
                <div className="hidden md:block w-5/12" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

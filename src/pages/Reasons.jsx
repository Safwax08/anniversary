import React, { useState } from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export default function Reasons() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [history, setHistory] = useState([0]);

  const reasons = [
    "The way your eyes light up when you laugh at something silly.",
    "Your endless kindness and how you always put others first.",
    "The warm, safe feeling I get whenever you hold my hand.",
    "Your laughter, which is hands down my favorite sound in the world.",
    "How you make even the most boring grocery trips feel like an adventure.",
    "The way you remember the tiny details about me that I forget myself.",
    "Your beautiful mind and the fascinating way you think about the universe.",
    "The scent of your hair and how it makes me feel instantly at home.",
    "How you support my dreams, no matter how wild or unrealistic they seem.",
    "Your sweet morning voice and the sleepy smile that comes with it.",
    "The adorable way you sneeze and how you try to hide it.",
    "Your incredible strength and grace when facing difficult times.",
    "The way you look at me when you think I'm not paying attention.",
    "How you can calm my racing thoughts with just a single hug.",
    "Your passion for the things you care about.",
    "The way you sing along to songs in the car, even if you don't know the lyrics.",
    "How you look so incredibly beautiful in cozy oversized sweaters.",
    "Your gentle touch that reassures me everything is going to be okay.",
    "The way you make me want to be a better person every single day.",
    "Your patience with me, especially when I am stubborn or difficult.",
    "How you always know exactly what to say to make me feel special.",
    "The cute faces you make when you are deeply focused on something.",
    "How you love animals and show compassion to every living creature.",
    "The way you curl up when you are cold or sleepy.",
    "How your smile has the power to instantly brighten my darkest days.",
    "The warmth of your embrace after we've spent a long day apart.",
    "How we can talk for hours about nothing and never get bored.",
    "Your love for cozy rainy days and warm blankets.",
    "The little love notes and sweet messages you randomly send me.",
    "The way you hold onto my arm when we walk through crowds.",
    "Your beautiful, loving heart that makes everyone around you happy.",
    "How you trust me with your deepest secrets and fears.",
    "The way you celebrate my small achievements like they are major victories.",
    "Your delicious cooking and how you love sharing food with me.",
    "How your hand fits perfectly, like a missing puzzle piece, in mine.",
    "The sound of your breathing when you are peacefully asleep next to me.",
    "Your quirky habits and inside jokes that only the two of us understand.",
    "The cute way you pout when you don't get your way.",
    "Your soft kisses that make my heart skip a beat every single time.",
    "How you look at the stars with child-like wonder in your eyes.",
    "Your loyalty and how fiercely protective you are of our love.",
    "The way you try to cheer me up when my favorite sports team loses.",
    "How you make our home feel like the coziest place on Earth.",
    "Your beautiful smile when you first open your eyes in the morning.",
    "The funny faces you make just to make me smile.",
    "How you always suggest sharing a dessert even when we are full.",
    "The way you play with my hair when we are relaxing on the couch.",
    "Your determination to solve problems and make things work.",
    "The sweet way you say my name when you are happy to see me.",
    "Your wisdom and how you always give the absolute best advice.",
    "The way you look in formal wear—absolutely taking my breath away.",
    "How you make me feel like I am the most loved person in the universe.",
    "The cozy, quiet moments we share just watching the world go by.",
    "Your forgiveness when I make mistakes.",
    "The excitement in your voice when you talk about your favorite things.",
    "The way you wave goodbye to me when we part.",
    "Your sense of style and how you look amazing in literally anything.",
    "The comfort of resting my head on your chest and hearing your heartbeat.",
    "How you defend me even when I am not in the room.",
    "The way you laugh at my terrible, cheesy dad jokes.",
    "Your adventurous spirit that pushes me to try new things.",
    "How you check up on me throughout the day just to see if I'm okay.",
    "The way you hold me close in your sleep without even realizing it.",
    "Your bright energy that fills any room you walk into.",
    "How you make me feel safe, secure, and completely understood.",
    "The way you love taking silly pictures together.",
    "Your appreciation for the little things in life.",
    "The sweet text messages you leave for me to wake up to.",
    "Your soft touch when you wipe a tear from my cheek.",
    "The way you kiss my forehead, which makes me feel so cherished.",
    "How you love planning future dates and trips for us.",
    "Your honesty, even when it is hard to say.",
    "The way you protect your peace and value our quiet time together.",
    "How you support my hobbies, even if you don't fully understand them.",
    "The cute way you try to steal the blankets in the middle of the night.",
    "Your lovely sense of humor that perfectly matches mine.",
    "The way you blush when I compliment you.",
    "How you notice when I am quiet and ask if there's anything on my mind.",
    "Your generosity and how you love making gifts for people.",
    "The beautiful letters you write that I keep tucked away like treasures.",
    "The way you look after me when I am sick or exhausted.",
    "Your belief in us, even when times get challenging.",
    "How you never let us go to bed angry at each other.",
    "The way you love taking long walks just to talk and hold hands.",
    "Your lovely hands and how comforting they feel on my face.",
    "How you are my best friend, my partner, and my soulmate all in one.",
    "The way you handle my moods with gentle understanding.",
    "Your laugh that makes everyone else start laughing too.",
    "How you make me look forward to growing old with you.",
    "The sweet, loving look in your eyes when we say 'I love you'.",
    "Your passion for learning and growing as a person.",
    "The way you dance with me in the kitchen when no one is watching.",
    "Your appreciation for good coffee and sweet treats.",
    "The way you hold my hand tightly when you are excited or nervous.",
    "How you make every single holiday feel magical and special.",
    "Your respect for my boundaries and personal space.",
    "The way we can communicate with just a single look across a crowded room.",
    "Your beautiful soul that shines brighter than any star.",
    "The simple fact that you exist, and that I get to love you.",
    "That you are you, and you are mine forever."
  ];

  const getNewReason = () => {
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * reasons.length);
    } while (nextIdx === currentIdx && reasons.length > 1);

    setCurrentIdx(nextIdx);
    setHistory((prev) => [...prev, nextIdx]);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center px-6">
      
      {/* Background Hearts */}
      <div className="absolute top-20 right-10 text-6xl opacity-15 select-none">
        💖
      </div>
      <div className="absolute bottom-20 left-10 text-5xl opacity-15 select-none">
        💕
      </div>

      <div className="max-w-xl w-full text-center z-10">
        {/* Page Header */}
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-textDark font-bold mb-3 flex items-center justify-center gap-2">
            100 Reasons Why I Love You
          </h2>
          <div className="w-24 h-1 bg-primaryPink/60 mx-auto rounded-full mb-4" />
          <p className="text-textDark/70 text-sm">
            Because words will never be enough to explain it.
          </p>
        </div>

        {/* Reason Card Machine */}
        <div>
          <div className="w-full glass-card rounded-3xl p-8 md:p-10 shadow-xl border border-rosePink/30 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Card decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primaryPink via-rosePink to-primaryPink" />
            
            {/* Large floating number representation */}
            <div className="text-rosePink/25 font-serif text-6xl md:text-7xl font-extrabold absolute top-4 right-6 select-none">
              {String(currentIdx + 1).padStart(2, '0')}
            </div>

            <Heart className="h-8 w-8 text-primaryPink fill-primaryPink/20 mb-4" />

            <p className="font-serif text-lg md:text-xl text-textDark font-medium leading-relaxed max-w-md italic">
              "{reasons[currentIdx]}"
            </p>
          </div>
        </div>

        {/* Controller button & counter */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <button
            onClick={getNewReason}
            className="bg-primaryPink hover:bg-primaryPink/90 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-primaryPink/25 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <span>Give Me Another Reason</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Progress / counter tracker */}
          <div className="flex items-center gap-1 text-sm font-semibold text-primaryPink/80 bg-rosePink/10 px-4 py-1.5 rounded-full border border-rosePink/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{history.length} / {reasons.length} Reasons Shared</span>
          </div>
        </div>

      </div>
    </div>
  );
}

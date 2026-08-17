// Central data configuration for Safwan & Her Name — Theme 4: Minimal Romantic

import heroImg from '../assets/hero.jpg';
import storyImg from '../assets/story.jpg';
import featuredImg from '../assets/featured.jpg';

export const coupleData = {
  names: {
    groom: "Safwan",
    bride: "Her Name",
    monogram: "S + H",
    display: "SAFWAN & HER NAME",
    combined: "Safwan & Her Name"
  },
  anniversaryDate: "2026-08-17T00:00:00",
  dateFormatted: "August 17, 2026",
  heroSubtitle: "A STORY OF TWO PEOPLE",
  heroTagline: "The quiet beauty of our journey together",
  
  storyIntro: {
    label: "OUR STORY",
    headline: "It started with a simple hello.",
    quote: "Some stories are written in books. Ours was written in the quiet, unforgettable moments.",
    description: "From that very first conversation to every memory that followed, each day with you has been a gentle reminder of how beautiful life is when shared with the one you love.",
    subtext: "Four years of laughter, slow mornings, growing together, and discovering that home isn't a place — it's you.",
    image: storyImg,
  },

  timeline: [
    {
      number: "01",
      year: "2021",
      title: "The Beginning",
      tagline: "The day everything quietly changed",
      description: "A conversation that was supposed to be brief turned into hours of effortless laughter. We didn't know then how deeply our lives were about to intertwine.",
      image: storyImg
    },
    {
      number: "02",
      year: "2022",
      title: "First Memories",
      tagline: "Learning each other's world",
      description: "Late evening walks, shared coffee cups, and the quiet realization that every mundane moment felt extraordinary when we were together.",
      image: heroImg
    },
    {
      number: "03",
      year: "2023",
      title: "Growing Together",
      tagline: "Through every season",
      description: "Supporting each other's dreams, celebrating the small victories, and learning that true love is patient, kind, and always choosing each other.",
      image: featuredImg
    },
    {
      number: "04",
      year: "2024",
      title: "Forever Begins",
      tagline: "A promise for all our tomorrows",
      description: "Looking into the future with absolute certainty. Hand in hand, knowing the best chapters of our story are still waiting to be written.",
      image: heroImg
    }
  ],

  featuredMoment: {
    label: "ONE OF MY FAVORITE MEMORIES",
    quote: "“That day, that smile, that quiet golden hour when time stood completely still.”",
    caption: "Tuscany Valley · Golden Hour",
    description: "There are moments in life that imprint themselves permanently into your heart. Standing beside you as the sun dipped below the horizon, I knew my entire world was right here.",
    image: featuredImg
  },

  gallery: [
    {
      id: 1,
      title: "The Quiet Moments",
      subtitle: "Where love lives in the silence",
      aspect: "tall",
      image: heroImg
    },
    {
      id: 2,
      title: "Hand in Hand",
      subtitle: "Every step beside you",
      aspect: "wide",
      image: storyImg
    },
    {
      id: 3,
      title: "Golden Horizons",
      subtitle: "Our endless view",
      aspect: "wide",
      image: featuredImg
    },
    {
      id: 4,
      title: "Unspoken Words",
      subtitle: "A glance that says everything",
      aspect: "portrait",
      image: heroImg
    }
  ],

  loveLetter: {
    label: "A LETTER FOR YOU",
    greeting: "My love,",
    paragraphs: [
      "I don't know if words will ever be enough to capture what you truly mean to me. Over the past years, you have been my comfort, my greatest inspiration, and the gentlest home my heart has ever known.",
      "You have taught me what it means to love without reservation, to listen with patience, and to find pure joy in the quietest, simplest moments.",
      "Every smile you share, every laugh that catches me off guard, and every conversation we have late into the night has become a treasure I carry every single day.",
      "Thank you for being my partner, my best friend, and the greatest gift in my life. I look forward to every sunrise, every quiet evening, and every chapter ahead with you."
    ],
    signoff: "With all my love and devotion,",
    author: "Safwan"
  },

  countdown: {
    label: "UNTIL OUR NEXT CHAPTER",
    headline: "Counting Every Second Beside You",
    subtitle: "Every passing day brings us closer to our next anniversary milestone."
  },

  finalMessage: {
    tagline: "AND THIS...",
    headline: "Is Only The Beginning.",
    subtitle: "S + H · Forever & Always",
    image: heroImg
  }
};

import React, { useState } from 'react';
import { Heart, Quote } from 'lucide-react';
import Section from '../components/sessionManagement';

const eulogiesData = [
  {
    id: 1,
    name: "Mrs. Funke Olagbaju",
    title: "Loving Wife",
    message: "Seni, your departure was a great shock to us all but we know you are in a better place. You were a generous, hardworking and a kind hearted soul. You will be missed and your memories will always be remembered. I pray that God’s comfort will continue to reside with us and the entire family. We love and miss you. May your soul rest in eternal peace. Sunre ooo.",
    relationship: "Wife"
  },
  // {
  //   id: 2,
  //   name: "Adewale Olagbaju",
  //   title: "Eldest Son",
  //   message: "Dad, you taught me what it means to be a man of integrity and honor. Your strength, kindness, and unwavering support shaped who I am today. You were not just a father but a mentor and friend. Your legacy will continue through us. We love you forever, Dad.",
  //   relationship: "Son"
  // },
  // {
  //   id: 3,
  //   name: "Funmilayo Olagbaju-Johnson",
  //   title: "Daughter",
  //   message: "Daddy, you were my first love and my hero. Your gentle words and warm embrace made every problem seem smaller. You believed in me when I didn't believe in myself. Thank you for being the best father a daughter could ask for. Your memory will forever be a blessing.",
  //   relationship: "Daughter"
  // },
  // {
  //   id: 4,
  //   name: "Tunde Olagbaju",
  //   title: "Youngest Son",
  //   message: "To the man who showed me how to dream big and work hard - thank you, Dad. Your stories, your laughter, and your endless encouragement made life brighter. You taught us that family comes first, always. Rest well, knowing you raised us right. We'll make you proud.",
  //   relationship: "Son"
  // },
  // {
  //   id: 5,
  //   name: "Rev. Dr. Samuel Adeyemi",
  //   title: "Senior Pastor & Close Friend",
  //   message: "Brother Olagbaju was a pillar in our community and a true servant of God. His faith was unwavering, his generosity boundless, and his love for people genuine. He touched countless lives and left an indelible mark on all who knew him. Heaven has gained a righteous soul. Well done, good and faithful servant.",
  //   relationship: "Friend"
  // },
  // {
  //   id: 6,
  //   name: "Chief Bola Adeniran",
  //   title: "Childhood Friend",
  //   message: "We grew up together, faced life's challenges together, and celebrated victories together. You were more than a friend - you were a brother. Your loyalty, humor, and wisdom made every day better. The world has lost a great man, but heaven has gained an angel. Rest in peace, my dear friend.",
  //   relationship: "Friend"
  // }
];

const EulogiesSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
		  <Section id="eulogies" title="">

     <section className="py-9 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
         <div className="text-center mb-4">
<p className="text-sm text-gray-600 mb-2 tracking-wide">Gentle Remembrance</p>
<h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Words That Carry His Memory Forward</h2>


          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>

      </div>

        {/* Eulogies List */}
        <div className="space-y-4 md:space-y-8">
          {eulogiesData.map((eulogy, index) => (
            <div
              key={eulogy.id}
              className="border-l-2 border-gray-200 pl-6 md:pl-10 py-4 animate-slide-in hover:border-[#fcbb68] transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote mark */}
              <div className="text-6xl text-gray-200 font-serif leading-none mb-2">"</div>
              
              {/* Message */}
              <div className="mb-6">
                <p className={`text-gray-700 text-base md:text-lg leading-relaxed italic transition-all duration-300 ${
                  expandedId === eulogy.id ? '' : 'line-clamp-3'
                }`}>
                  {eulogy.message}
                </p>
                
                {eulogy.message.length > 150 && (
                  <button
                    onClick={() => toggleExpand(eulogy.id)}
                    className="mt-3 text-sm text-gray-500 hover:text-[#fcbb68] transition-colors duration-300 underline"
                  >
                    {expandedId === eulogy.id ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>

              {/* Author info */}
              <div className="flex items-baseline gap-3">
                <h3 className="text-lg md:text-xl font-medium text-gray-900">{eulogy.name}</h3>
                <span className="text-gray-400">—</span>
                <p className="text-sm md:text-base text-gray-500">{eulogy.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-in {
          opacity: 0;
          animation: slideIn 0.6s ease-out forwards;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
		    </Section>

  );
};

export default EulogiesSection;
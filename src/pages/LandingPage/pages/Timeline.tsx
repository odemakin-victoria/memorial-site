import React from "react";
import Section from "../components/sessionManagement";

const Timeline = () => {
  const timelineData = [
    {
      year: "1951",
      date: "April 24th",
      title: "A New Beginning",
      description: "Born on April 24, 1951, to Joseph Oladimeji Olagbaju and Princess Mobolaji Olagbaju (née Ademiluyi). \nOlaseni was the cherished second child in a dynamic family of nine."
    },
    {
      year: "1957",
      date: "(1957–1963)",
      title: "Foundational Years",
      description: "His foundational years were spent at St Stephen Academy (1957–1963)"
    },
    {
      year: "1963",
      date: "(1963–1968)",
      title: "Secondary School Days",
      description: "Attended Molusi College, Ijebu Igbo (1963–1968) \nwhere the seeds of his intellectual curiosity were first sown."
    },
    {
      year: "1970",
      date: "(1970-1974)",
      title: "University Years",
      description: "​His passion led him to Obafemi Awolowo University (OAU), where he graduated in 1974 with a BSc in Microbiology"
    },
    {
      year: "1988",
      date: "October 18th",
      title: "Legacy Journey",
      description: "He moved to the UK in 1988\nThroughout his 74 years, Olaseni was a magnetic force. His unique spirit touched the lives of all who knew him; his generosity knew no bounds. He truly connected with people."
    },
   
    {
      year: "2025",
      date: "September 28th",
      title: "Peaceful Transition",
      description: "Olaseni passed on peacefully on September 28, 2025, surrounded by family and loved ones.\n His unique spirit will be deeply missed, but the profound legacy of his kindness remains etched in the hearts of all who have crossed his path."
    }
  ];

  return (
  <Section id="timeline" title="">

    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 py-6 px-4 sm:px-6 lg:px-8">
			 {/* Legacy Section */}
      <div className="text-center mb-8">
<p className="text-sm text-gray-600 mb-2 tracking-wide">Journey of Grace</p>
<h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Moments That Mattered</h2>

				          <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>

      </div>
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Timeline Items */}
          <div className="space-y-0">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row md:gap-3 relative">
                  {/* Year Label */}
                  <div className="flex items-start md:w-24 md:flex-shrink-0 mb-2 md:mb-0">
                    <div className="text-[#deac6c] font-light text-3xl md:text-4xl leading-none">
                      {item.year}
                    </div>
                  </div>

                  {/* Circle with connecting line */}
                  <div className="hidden md:block relative flex-shrink-0">
                    <div className="w-7 h-7 rounded-full border-[2.5px] border-[#deac6c] bg-white flex items-center justify-center z-10 relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#deac6c]"></div>
                    </div>
                    {/* Vertical line connecting to next circle */}
                    {index < timelineData.length - 1 && (
                      <div className="absolute left-[13px] top-7 w-[2px] h-[calc(100%+60px)] bg-[#deac6c]"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-md shadow-md p-4 md:p-3 border-l-4 md:border-l-0 border-[#deac6c] ml-4 md:ml-0 mb-6 md:mb-0">
                    <h3 className="text-[#deac6c] font-semibold  text-base md:text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600  font-light text-xs md:text-sm leading-relaxed whitespace-pre-line mb-2">
                      {item.description}
                    </p>
                    {item.date && (
                      <p className="text-gray-400 text-xs font-light">
                        {item.date}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Spacing between timeline items */}
                {index < timelineData.length - 1 && (
                  <div className="h-12 md:h-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
		  </Section>

  );
};

export default Timeline;
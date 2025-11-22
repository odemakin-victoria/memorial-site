import Section from "../components/sessionManagement";
import React from "react";
import Image from "next/image";
import GrandMa1 from "../../../../public/assets/images/grand-ma-1.jpg";
import GrandMa2 from "../../../../public/assets/images/grand-ma-2.jpg";
import GrandPa1 from "../../../../public/assets/images/grandpa-1.jpg";
import GrandPa2 from "../../../../public/assets/images/grandpa-2.jpg";
import Papa from "../../../../public/assets/images/papa-young.jpg";
import Child1 from "../../../../public/assets/images/child-1.jpg";
import Child2 from "../../../../public/assets/images/child-2.jpg";
import Child3 from "../../../../public/assets/images/child-3.jpg";
import Child4 from "../../../../public/assets/images/child-4.jpg";
import Child5 from "../../../../public/assets/images/child-5.jpg";
import Child6 from "../../../../public/assets/images/chil-6.jpg";
import MamaYoung from "../../../../public/assets/images/mama-young.jpg";


const FamilyTree = () => (
  <Section id="family-tree" title="">
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fadeInUp 0.6s ease-out;
      }

      .person-card {
        transition: all 0.3s ease;
      }

      .person-card:hover {
        transform: translateY(-5px) scale(1.05);
      }

      .person-card:hover .person-image {
        border-color: #deac6c !important;
        box-shadow: 0 10px 25px rgba(222, 172, 108, 0.3);
      }

      .person-card:hover .person-name,
      .person-card:hover .person-surname,
      .person-card:hover .person-role {
        color: #deac6c !important;
      }

      .person-image {
        transition: all 0.3s ease;
      }

      .person-name,
      .person-surname,
      .person-role {
        transition: color 0.3s ease;
      }

      .connector-line {
        background-color: #deac6c;
      }
    `}</style>

    {/* Legacy Section */}
    <div className="text-center mb-12 animate-fade-in">
      <p className="text-sm text-gray-600 mb-2 tracking-wide">Planted by Grace</p>
      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">A Family Rooted in Faith</h2>
      <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>
    </div>

    {/* Family Tree */}
    <div className="overflow-x-auto">
      <div className="min-w-[1000px] pb-8 mx-auto" style={{ maxWidth: '1200px' }}>
        
        {/* Generation 1 - Grandparents (4 people) */}
        <div className="flex justify-center gap-24 mb-8 relative" style={{ paddingTop: '20px' }}>
          
          {/* Left couple (Paternal) - Grandpa1 and Grandma1 */}
          <div className="flex gap-12 relative">
            {/* Horizontal line connecting Grandpa1 and Grandma1 */}
            <div className="connector-line absolute h-[2px] w-[120px]" style={{ top: '45px', left: '50%', transform: 'translateX(-50%)' }}></div>
            {/* Vertical line down to David */}
            <div className="connector-line absolute w-[2px] h-[100px]" style={{ top: '45px', left: '50%', transform: 'translateX(-50%)' }}></div>
            
            {/* Grandparent 1 - Paternal Grandfather */}
            <div className="flex flex-col items-center relative z-10 person-card">
              <div className="person-image w-[90px] h-[90px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
                <Image src={GrandPa1} alt="Grandfather" className="w-full h-full object-cover" />
              </div>
              <p className="person-name text-sm font-medium text-gray-800">John</p>
              <p className="person-surname text-xs text-gray-600">Richardson</p>
              <p className="person-role text-xs text-gray-500 italic">Grandfather</p>
            </div>

            {/* Grandparent 2 - Paternal Grandmother */}
            <div className="flex flex-col items-center relative z-10 person-card">
              <div className="person-image w-[90px] h-[90px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
                <Image src={GrandMa1} alt="Grandmother" className="w-full h-full object-cover" />
              </div>
              <p className="person-name text-sm font-medium text-gray-800">Mary</p>
              <p className="person-surname text-xs text-gray-600">Richardson</p>
              <p className="person-role text-xs text-gray-500 italic">Grandmother</p>
            </div>
          </div>

          {/* Spacer */}
          <div className="w-32"></div>

          {/* Right couple (Maternal) - Grandpa2 and Grandma2 */}
          <div className="flex gap-12 relative">
            {/* Horizontal line connecting Grandpa2 and Grandma2 */}
            <div className="connector-line absolute h-[2px] w-[120px]" style={{ top: '45px', left: '50%', transform: 'translateX(-50%)' }}></div>
            {/* Vertical line down to Sarah */}
            <div className="connector-line absolute w-[2px] h-[100px]" style={{ top: '45px', left: '50%', transform: 'translateX(-50%)' }}></div>
            
            {/* Grandparent 3 - Maternal Grandfather */}
            <div className="flex flex-col items-center relative z-10 person-card">
              <div className="person-image w-[90px] h-[90px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
                <Image src={GrandPa2} alt="Grandfather" className="w-full h-full object-cover" />
              </div>
              <p className="person-name text-sm font-medium text-gray-800">James</p>
              <p className="person-surname text-xs text-gray-600">Smith</p>
              <p className="person-role text-xs text-gray-500 italic">Grandfather</p>
            </div>

            {/* Grandparent 4 - Maternal Grandmother */}
            <div className="flex flex-col items-center relative z-10 person-card">
              <div className="person-image w-[90px] h-[90px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
                <Image src={GrandMa2} alt="Grandmother" className="w-full h-full object-cover" />
              </div>
              <p className="person-name text-sm font-medium text-gray-800">Elizabeth</p>
              <p className="person-surname text-xs text-gray-600">Smith</p>
              <p className="person-role text-xs text-gray-500 italic">Grandmother</p>
            </div>
          </div>
        </div>

        {/* Generation 2 - Parents (Deceased and Wife) */}
        <div className="flex justify-center gap-96 mb-8 relative">
          {/* Horizontal line connecting parents */}
          <div className="connector-line absolute h-[2px] w-[180px]" style={{ top: '55px', left: '50%', transform: 'translateX(-50%)' }}></div>
          
          {/* Vertical line down to children */}
          <div className="connector-line absolute w-[2px] h-[80px]" style={{ top: '55px', left: '50%', transform: 'translateX(-50%)' }}></div>

          {/* David (Deceased) - HIGHLIGHTED */}
          <div className="flex flex-col items-center relative z-10 person-card">
            <div className="person-image w-[110px] h-[110px] rounded-full border-4 overflow-hidden bg-gray-300 mb-2 shadow-lg" style={{ borderColor: '#deac6c' }}>
              <Image src={Papa} alt="David Richardson" className="w-full h-full object-cover" />
            </div>
            <p className="person-name text-base font-semibold" style={{ color: '#deac6c' }}>David</p>
            <p className="person-surname text-sm" style={{ color: '#deac6c' }}>Richardson</p>
            <p className="person-role text-xs font-medium" style={{ color: '#deac6c' }}>Father (Deceased)</p>
          </div>

          {/* Wife */}
          <div className="flex flex-col items-center relative z-10 person-card">
            <div className="person-image w-[110px] h-[110px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-lg">
              <Image src={MamaYoung} alt="Wife" className="w-full h-full object-cover" />
            </div>
            <p className="person-name text-base font-semibold text-gray-800">Sarah</p>
            <p className="person-surname text-sm text-gray-600">Richardson</p>
            <p className="person-role text-xs text-gray-500 italic">Mother</p>
          </div>
        </div>

        {/* Generation 3 - Children (6 children) */}
        <div className="flex justify-center gap-8 relative">
          {/* Horizontal line connecting all children */}
          <div className="connector-line absolute h-[2px]" style={{ top: '42px', left: '8%', right: '8%' }}></div>

          {/* Child 1 */}
          <div className="flex flex-col items-center relative z-10 person-card">
            <div className="person-image w-[85px] h-[85px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
              <Image src={Child1} alt="Child 1" className="w-full h-full object-cover" />
            </div>
            <p className="person-name text-sm font-medium text-gray-800">Emily</p>
            <p className="person-surname text-xs text-gray-600">Richardson</p>
            <p className="person-role text-xs text-gray-500 italic">Daughter</p>
          </div>

          {/* Child 2 */}
          <div className="flex flex-col items-center relative z-10 person-card">
            <div className="person-image w-[85px] h-[85px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
              <Image src={Child2} alt="Child 2" className="w-full h-full object-cover" />
            </div>
            <p className="person-name text-sm font-medium text-gray-800">Michael</p>
            <p className="person-surname text-xs text-gray-600">Richardson</p>
            <p className="person-role text-xs text-gray-500 italic">Son</p>
          </div>

          {/* Child 3 */}
          <div className="flex flex-col items-center relative z-10 person-card">
            <div className="person-image w-[85px] h-[85px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
              <Image src={Child3} alt="Child 3" className="w-full h-full object-cover" />
            </div>
            <p className="person-name text-sm font-medium text-gray-800">Grace</p>
            <p className="person-surname text-xs text-gray-600">Richardson</p>
            <p className="person-role text-xs text-gray-500 italic">Daughter</p>
          </div>

          {/* Child 4 */}
          <div className="flex flex-col items-center relative z-10 person-card">
            <div className="person-image w-[85px] h-[85px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
              <Image src={Child4} alt="Child 4" className="w-full h-full object-cover" />
            </div>
            <p className="person-name text-sm font-medium text-gray-800">Joshua</p>
            <p className="person-surname text-xs text-gray-600">Richardson</p>
            <p className="person-role text-xs text-gray-500 italic">Son</p>
          </div>

          {/* Child 5 */}
          <div className="flex flex-col items-center relative z-10 person-card">
            <div className="person-image w-[85px] h-[85px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
              <Image src={Child5} alt="Child 5" className="w-full h-full object-cover" />
            </div>
            <p className="person-name text-sm font-medium text-gray-800">Sophia</p>
            <p className="person-surname text-xs text-gray-600">Richardson</p>
            <p className="person-role text-xs text-gray-500 italic">Daughter</p>
          </div>

          {/* Child 6 */}
          <div className="flex flex-col items-center relative z-10 person-card">
            <div className="person-image w-[85px] h-[85px] rounded-full border-4 border-gray-200 overflow-hidden bg-gray-300 mb-2 shadow-md">
              <Image src={Child6} alt="Child 6" className="w-full h-full object-cover" />
            </div>
            <p className="person-name text-sm font-medium text-gray-800">Daniel</p>
            <p className="person-surname text-xs text-gray-600">Richardson</p>
            <p className="person-role text-xs text-gray-500 italic">Son</p>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Notice */}
    <p className="text-center text-sm text-gray-500 mt-8 lg:hidden">
      Scroll horizontally to view the full family tree
    </p>
  </Section>
);

export default FamilyTree;
import React from 'react';
import DecaHelpComponent from '@/components/DecaHelp';
import Header from '@/components/Header';
import { Separator } from '@/components/ui/separator';

const DecaHelpPage = () => {
  return (
    <div className="flex-1 overflow-auto">
      <Header />
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">DECA Help Center</h1>
          <p className="text-gray-600">
            Resources and tips to help you succeed in your DECA journey
          </p>
          <Separator className="my-4" />
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <section>
            <h2 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
              <i className="ri-question-answer-line mr-2"></i>
              Getting Started with DECA
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="prose max-w-none">
                <p>
                  DECA is a premier organization that prepares emerging leaders and entrepreneurs for careers 
                  in marketing, finance, hospitality, and management. Here are some key points to know:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>DECA competitions offer real-world business challenges that test your knowledge and skills</li>
                  <li>Participating in DECA can enhance your college applications and career readiness</li>
                  <li>DECA provides networking opportunities with industry professionals and like-minded peers</li>
                  <li>The organization offers scholarships and recognition for outstanding members</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
              <i className="ri-trophy-line mr-2"></i>
              Tips to Qualify for DECA Competitions
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="prose max-w-none">
                <p className="font-medium text-gray-700">Essential strategies to perform well in competitions:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-3">
                  <li>
                    <strong className="text-[#003366]">Master the performance indicators</strong>
                    <p className="text-gray-600 mt-1">
                      Performance indicators are specific tasks or challenges you'll be asked to address. 
                      Study them thoroughly and understand how to apply business principles to them.
                    </p>
                  </li>
                  <li>
                    <strong className="text-[#003366]">Practice role-plays regularly</strong>
                    <p className="text-gray-600 mt-1">
                      Set up mock role-plays with peers or advisors. Time yourself and get feedback on your 
                      performance to refine your presentation skills.
                    </p>
                  </li>
                  <li>
                    <strong className="text-[#003366]">Develop strong written projects</strong>
                    <p className="text-gray-600 mt-1">
                      For written events, follow the guidelines carefully, conduct thorough research, and 
                      make your project visually appealing and professionally formatted.
                    </p>
                  </li>
                  <li>
                    <strong className="text-[#003366]">Study for exams</strong>
                    <p className="text-gray-600 mt-1">
                      Many events include a multiple-choice exam. Use DECA's practice exams and study resources 
                      to prepare for test day.
                    </p>
                  </li>
                  <li>
                    <strong className="text-[#003366]">Dress professionally</strong>
                    <p className="text-gray-600 mt-1">
                      First impressions matter. Follow DECA's dress code guidelines and present yourself professionally.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>
          
          <DecaHelpComponent />
          
          <section>
            <h2 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
              <i className="ri-chat-quote-line mr-2"></i>
              FAQ
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800">How do I prepare for a DECA role-play?</h3>
                  <p className="text-gray-600 mt-1">
                    Practice with sample role-plays, understand business terminology, and work on your presentation 
                    skills. Time yourself and get feedback from advisors or peers.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">What should I include in my written project?</h3>
                  <p className="text-gray-600 mt-1">
                    Follow the guidelines provided by DECA, include an executive summary, conduct market research, 
                    provide financial data, and ensure your project is professionally formatted with proper citations.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">How should I dress for DECA competitions?</h3>
                  <p className="text-gray-600 mt-1">
                    Follow DECA's professional dress code: business suits for both men and women are recommended. 
                    Men should wear a collared dress shirt, necktie, and dress shoes. Women should wear a business suit, 
                    dress blouse, and closed-toe shoes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DecaHelpPage;
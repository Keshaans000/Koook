import React from 'react';
import DecaHelpComponent from '@/components/DecaHelp';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DecaHelpPage = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">DECA Help Center</h1>
        <p className="text-gray-600">
          Comprehensive resources, guides, and tips to help you excel in your DECA journey and competitions
        </p>
        <Separator className="my-4" />
      </div>

      {/* Officer Contact Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-user-star-line mr-2 text-[#FFD700]"></i>
          Meet Your DECA Officers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-[#003366] to-[#004080] text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[#003366] text-xl font-bold">SG</span>
              </div>
              <CardTitle className="text-lg">Sanjana Guruprasad</CardTitle>
              <CardDescription className="text-gray-200">President</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-[#FFD700] to-[#FFC000] text-[#003366]">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-xl font-bold">WP</span>
              </div>
              <CardTitle className="text-lg">Wren Park</CardTitle>
              <CardDescription className="text-[#004080]">Vice President</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-[#2C7BE5] to-[#1A68D1] text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[#2C7BE5] text-xl font-bold">PR</span>
              </div>
              <CardTitle className="text-lg">Prohitt Ram Kumar</CardTitle>
              <CardDescription className="text-gray-200">VP of Finance</CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-gradient-to-br from-[#28A745] to-[#1E7E34] text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[#28A745] text-xl font-bold">AA</span>
              </div>
              <CardTitle className="text-lg">Aman Agarwal</CardTitle>
              <CardDescription className="text-gray-200">VP of Membership Development</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Quick Start Guide */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-rocket-line mr-2 text-[#E63946]"></i>
          Quick Start Guide for New Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-l-4 border-l-[#FFD700]">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <div className="bg-[#FFD700] text-[#003366] rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm font-bold">1</div>
                Choose Your Event
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">Select from 60+ competitive events in areas like:</p>
              <div className="space-y-1">
                <Badge variant="outline" className="mr-2">Marketing</Badge>
                <Badge variant="outline" className="mr-2">Finance</Badge>
                <Badge variant="outline" className="mr-2">Hospitality</Badge>
                <Badge variant="outline" className="mr-2">Management</Badge>
                <Badge variant="outline" className="mr-2">Entrepreneurship</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#003366]">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <div className="bg-[#003366] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm font-bold">2</div>
                Study & Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">Use these essential resources:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Performance Indicators</li>
                <li>• Practice exams</li>
                <li>• Sample role-plays</li>
                <li>• Industry case studies</li>
                <li>• DECA Connect materials</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#E63946]">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <div className="bg-[#E63946] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm font-bold">3</div>
                Compete & Excel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">Progress through competition levels:</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="ri-arrow-right-s-line text-[#E63946] mr-1"></i>
                  <span className="text-sm">District Competition</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-arrow-right-s-line text-[#E63946] mr-1"></i>
                  <span className="text-sm">State Competition</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-arrow-right-s-line text-[#E63946] mr-1"></i>
                  <span className="text-sm">ICDC (International)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Competition Preparation Strategies */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-trophy-line mr-2 text-[#FFD700]"></i>
          Advanced Competition Strategies
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#003366]">Role-Play Mastery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#003366] mb-2">The STAR Method</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>S</strong>ituation - Understand the scenario</li>
                    <li><strong>T</strong>ask - Identify what needs to be done</li>
                    <li><strong>A</strong>ction - Explain your solution</li>
                    <li><strong>R</strong>esult - Discuss expected outcomes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Tips:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Practice with a timer (10-15 minutes)</li>
                    <li>• Use business terminology confidently</li>
                    <li>• Ask clarifying questions</li>
                    <li>• Maintain professional body language</li>
                    <li>• Conclude with next steps</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#003366]">Written Event Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#003366] mb-2">Project Structure</h4>
                  <ol className="text-sm space-y-1">
                    <li>1. Executive Summary (1 page)</li>
                    <li>2. Situation Analysis</li>
                    <li>3. Strategic Recommendations</li>
                    <li>4. Implementation Plan</li>
                    <li>5. Financial Projections</li>
                    <li>6. Appendices & Citations</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Success Factors:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Follow page limits strictly</li>
                    <li>• Use charts and graphs effectively</li>
                    <li>• Include real market research</li>
                    <li>• Professional formatting</li>
                    <li>• Strong executive summary</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Study Resources */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-book-open-line mr-2 text-[#2C7BE5]"></i>
          Essential Study Materials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <i className="ri-file-text-line mr-2 text-[#FFD700]"></i>
                Performance Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">Master the specific skills tested in your event category.</p>
              <Button className="w-full bg-[#FFD700] text-[#003366] hover:bg-[#FFC000]">
                Download PI Lists
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <i className="ri-questionnaire-line mr-2 text-[#E63946]"></i>
                Practice Exams
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">Test your knowledge with official DECA practice materials.</p>
              <Button className="w-full bg-[#E63946] hover:bg-[#D73E47]">
                Access Exams
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <i className="ri-presentation-line mr-2 text-[#28A745]"></i>
                Sample Role-Plays
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">Practice with real competition scenarios and situations.</p>
              <Button className="w-full bg-[#28A745] hover:bg-[#218838]">
                View Samples
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Competition Timeline */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-calendar-check-line mr-2 text-[#6F42C1]"></i>
          Competition Preparation Timeline
        </h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#E63946] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">3M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">3 Months Before District</h3>
                  <p className="text-gray-600">Choose your event, study performance indicators, and begin initial preparation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FFD700] text-[#003366] rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">2M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">2 Months Before District</h3>
                  <p className="text-gray-600">Take practice exams, start working on written projects, and practice role-plays weekly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#2C7BE5] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">1M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">1 Month Before District</h3>
                  <p className="text-gray-600">Finalize written projects, do mock presentations, and review all materials daily.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#28A745] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">1W</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">1 Week Before District</h3>
                  <p className="text-gray-600">Final review, prepare professional attire, and focus on confidence building.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Professional Development Tips */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-user-settings-line mr-2 text-[#6F42C1]"></i>
          Professional Development
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#003366]">Networking Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-[#28A745] mr-2 mt-1"></i>
                  <span className="text-gray-700">Prepare a 30-second elevator pitch</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-[#28A745] mr-2 mt-1"></i>
                  <span className="text-gray-700">Practice active listening skills</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-[#28A745] mr-2 mt-1"></i>
                  <span className="text-gray-700">Collect and follow up with contacts</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-checkbox-circle-fill text-[#28A745] mr-2 mt-1"></i>
                  <span className="text-gray-700">Join DECA professional groups</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#003366]">Leadership Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="ri-star-fill text-[#FFD700] mr-2 mt-1"></i>
                  <span className="text-gray-700">Run for chapter officer positions</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-star-fill text-[#FFD700] mr-2 mt-1"></i>
                  <span className="text-gray-700">Volunteer for community service projects</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-star-fill text-[#FFD700] mr-2 mt-1"></i>
                  <span className="text-gray-700">Mentor new DECA members</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-star-fill text-[#FFD700] mr-2 mt-1"></i>
                  <span className="text-gray-700">Attend leadership conferences</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <DecaHelpComponent />

      {/* Expanded FAQ */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-question-answer-line mr-2 text-[#E63946]"></i>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How long do I have for role-play presentations?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Most role-plays allow 10 minutes for preparation and 10-15 minutes for presentation. 
                Some events may have different time limits, so always check your specific event guidelines.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What's the difference between individual and team events?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Individual events are completed solo, while team events require 2-3 participants working together. 
                Team events often involve more complex projects and collaborative presentations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How are DECA competitions scored?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Scoring typically combines exam results (usually 50%) with presentation performance (50%). 
                Written events may weight the project, presentation, and exam differently. Check event-specific rubrics.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What should I bring to competitions?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-600">
                <p className="mb-2">Essential items to pack:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Professional business attire</li>
                  <li>Copy of your written project (if applicable)</li>
                  <li>Calculator and writing materials</li>
                  <li>DECA membership card</li>
                  <li>Hotel and travel information</li>
                  <li>Business cards for networking</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DecaHelpPage;
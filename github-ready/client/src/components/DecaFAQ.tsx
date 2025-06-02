import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DecaFAQ = () => {
  return (
    <Card className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">DECA FAQ</CardTitle>
        <CardDescription>Common questions about Wayzata DECA</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium text-gray-800">
              What is DECA?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              DECA (Distributive Education Clubs of America) is a career and technical 
              student organization that prepares emerging leaders and entrepreneurs for 
              careers in marketing, finance, hospitality, and management. Wayzata DECA 
              offers students the opportunity to develop business skills, compete in 
              regional and national events, and network with professionals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium text-gray-800">
              How do I join Wayzata DECA?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Students can join Wayzata DECA by attending an information session at the 
              beginning of the school year, filling out the membership form, and paying 
              the membership dues. Information sessions are typically held in September, 
              and announcements are made through school channels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium text-gray-800">
              What types of competitions are available?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              DECA offers various competition categories including:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Individual Series Events (role-play scenarios)</li>
                <li>Team Decision Making Events</li>
                <li>Written Events (business plans, marketing campaigns)</li>
                <li>Online Events (stock market game, virtual business challenges)</li>
              </ul>
              Students can choose competition areas based on their interests in business, 
              marketing, finance, hospitality, and entrepreneurship.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium text-gray-800">
              What are the benefits of joining DECA?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              <ul className="list-disc pl-5 space-y-1">
                <li>Develop business and leadership skills</li>
                <li>Network with professionals in various industries</li>
                <li>Compete at district, state, and international levels</li>
                <li>Build your resume for college applications</li>
                <li>Earn scholarships and recognition</li>
                <li>Make connections with like-minded peers</li>
                <li>Gain real-world business experience</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium text-gray-800">
              When are DECA meetings held?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Wayzata DECA typically holds general meetings once a month after school. 
              Additional competition preparation meetings may be scheduled closer to 
              competition dates. Meeting schedules are posted on this website's calendar 
              and announced through school channels.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default DecaFAQ;
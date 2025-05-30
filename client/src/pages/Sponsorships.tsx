export default function Sponsorships() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Sponsorships</h1>
        <p className="text-gray-600 text-lg">
          Partner with Wayzata DECA to support student development and business education.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Why Sponsor DECA?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
              Support future business leaders and entrepreneurs
            </li>
            <li className="flex items-start">
              <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
              Gain visibility within the business education community
            </li>
            <li className="flex items-start">
              <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
              Connect with motivated students for internships and recruitment
            </li>
            <li className="flex items-start">
              <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
              Demonstrate corporate social responsibility
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Sponsorship Levels</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-medium text-gray-800">Gold Sponsor - $1,000+</h3>
              <p className="text-sm text-gray-600">Logo on materials, event recognition</p>
            </div>
            <div className="border-l-4 border-gray-400 pl-4">
              <h3 className="font-medium text-gray-800">Silver Sponsor - $500+</h3>
              <p className="text-sm text-gray-600">Name recognition, event mentions</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-medium text-gray-800">Bronze Sponsor - $250+</h3>
              <p className="text-sm text-gray-600">Recognition in materials</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#003366] text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h2>
        <p className="mb-6">
          Contact our team to discuss sponsorship opportunities and how we can create a partnership that benefits both your organization and our students.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center">
            <i className="ri-mail-line mr-2"></i>
            <span>wayzatadeca@isd284.org</span>
          </div>
          <div className="flex items-center">
            <i className="ri-phone-line mr-2"></i>
            <span>(952) 745-5000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
import { CheckCircle } from "lucide-react";
import HeroSection from "../Ui/HeroSection ";
import FeatureSection from "../Ui/FeatureSection";
import FeedbackSection from "../Ui/FeedbackSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-white py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
        {/* Left Side - Text */}
        <div className="lg:w-1/2 z-10 mb-12 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            We believe learning <br /> should be simple and its <br /> impact
            should be big.
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Let’s make that a reality for your business. Here’s how.
          </p>
        </div>

        {/* Right Side - Checklist */}
        <div className="lg:w-1/2 space-y-10 z-10">
          {/* Item 1 */}
          <div className="flex items-start space-x-4">
            <CheckCircle
              className="text-blue-600 w-6 h-6 mt-1"
              fill="#2563EB"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Put the learner first
              </h3>
              <p className="text-gray-700 mt-1">
                Create an easy, engaging, and enjoyable experience that makes
                your learner goals simpler to achieve.
              </p>
            </div>
          </div>

          {/* Item 2 - Faded */}
          <div className="flex items-start space-x-4 opacity-30">
            <CheckCircle
              className="text-blue-600 w-6 h-6 mt-1"
              fill="#2563EB"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Centralize how learning is managed
              </h3>
              <p className="text-gray-700 mt-1">
                Streamline how you create, manage, deliver, and track training,
                within a single solution.
              </p>
            </div>
          </div>

          {/* Item 3 - Faded */}
          <div className="flex items-start space-x-4 opacity-30">
            <CheckCircle
              className="text-blue-600 w-6 h-6 mt-1"
              fill="#2563EB"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Drive results through partnership
              </h3>
              <p className="text-gray-700 mt-1">
                Work with our expert Customer Experience team to create a
                personalized strategy for success.
              </p>
            </div>
          </div>
        </div>

        {/* Left Background Circle */}
        <div className="absolute left-[-300px] top-0 w-[600px] h-[600px] bg-[#eef2ff] rounded-full z-0" />
      </div>
      <FeedbackSection />
      <FeatureSection />
    </>
  );
};

export default Home;

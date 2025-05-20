import {
  FaRegEdit,
  FaPaperPlane,
  FaChartBar,
  FaNetworkWired,
  FaProjectDiagram,
  FaUsersCog,
  FaPlug,
  FaMagnet,
  FaRobot,
} from "react-icons/fa";

const features = [
  { icon: <FaRegEdit className="text-blue-400 text-xl" />, title: "Course creation" },
  { icon: <FaPaperPlane className="text-blue-400 text-xl" />, title: "Training delivery" },
  { icon: <FaUsersCog className="text-blue-400 text-xl" />, title: "User management" },
  { icon: <FaMagnet className="text-blue-400 text-xl" />, title: "Learner engagement" },
  { icon: <FaProjectDiagram className="text-blue-400 text-xl" />, title: "Portals" },
  { icon: <FaChartBar className="text-blue-400 text-xl" />, title: "Reporting" },
  { icon: <FaPlug className="text-blue-400 text-xl" />, title: "Integrations" },
  { icon: <FaRobot className="text-blue-400 text-xl" />, title: "AI-Powered Learning" },
];

const FeatureSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Explore our most popular features
        </h2>
        <p className="text-gray-600 mb-4 text-lg max-w-2xl mx-auto">
          LearnUpon is carefully built with the features you need to deliver the best experience
          for your team and your learners.
        </p>
        <a
          href="#"
          className="text-blue-600 font-semibold text-lg hover:underline"
        >
          See the LearnUpon platform in action.
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-left justify-center">
              {item.icon}
              <span className="font-semibold text-blue-600 text-base">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
